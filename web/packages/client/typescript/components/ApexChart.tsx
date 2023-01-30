import * as React from 'react';
import { RefObject } from "react";
import {
    AbstractUIElementStore,
    Component,
    ComponentMeta,
    ComponentProps,
    ComponentStoreDelegate,
    makeLogger,
    PComponent,
    PropertyTree,
    SizeObject,
    PlainObject,
    isPlainObject,
    TypeCode,
    Dataset
} from '@inductiveautomation/perspective-client';
import { bind } from 'bind-decorator';
const objectScan = require('object-scan');
import ApexCharts from 'apexcharts/dist/apexcharts.min';

export const COMPONENT_TYPE = "kyvislabs.display.apexchart";

window["ApexCharts"] = ApexCharts;

const logger = makeLogger(COMPONENT_TYPE);

export interface ApexChartProps {
    type: any;
    options: any;
    series: Array<any>;
}

// These match events in the Gateway side component delegate.
enum MessageEvents {
    MESSAGE_RESPONSE_EVENT = "apexchart-response-event",
    MESSAGE_REQUEST_EVENT = "apexchart-request-event"
}

export class ApexChartGatewayDelegate extends ComponentStoreDelegate {
    private chart: ApexCharts | null = null;

    constructor(componentStore: AbstractUIElementStore) {
        super(componentStore);
    }

    @bind
    init(chart: ApexCharts) {
        if (chart) {
            this.chart = chart;
        }
    }

    @bind
    handleEvent(eventName: string, eventObject: PlainObject): void {
        if (this.chart) {
            logger.debug(() => `Received '${eventName}' event!`);
            const {
                MESSAGE_RESPONSE_EVENT,
                MESSAGE_REQUEST_EVENT
            } = MessageEvents;

            const {
                functionToCall,
                seriesName
            } = eventObject;

            switch (eventName) {
                case MESSAGE_RESPONSE_EVENT:
                    if (functionToCall == "toggleSeries") {
                        this.fireEvent(MESSAGE_REQUEST_EVENT, { result: this.chart.toggleSeries(seriesName) });
                    } else if (functionToCall == "showSeries") {
                        this.chart.showSeries(seriesName);
                    } else if (functionToCall == "hideSeries") {
                        this.chart.hideSeries(seriesName);
                    }
                    break;
                default:
                    logger.warn(() => `No delegate event handler found for event: ${eventName} in ApexChartGatewayDelegate`);
            }
        }
    }
}

export class ApexChart extends Component<ComponentProps<ApexChartProps>, any> {

    private chartRef: RefObject<HTMLDivElement> = React.createRef();
    private chart: ApexCharts = null;
    private lastZoom: Array<any> = [];

    componentDidMount () {
        logger.debug(() => `Creating new chart`);
        this.chart = new ApexCharts(this.chartRef.current, this.getConfig());
        this.initDelegate();
        this.chart.render();

        setTimeout(() => {
            this.chart.windowResizeHandler();
        }, 1000);
    }

    initDelegate() {
        if (this.props.store.delegate) {
            (this.props.store.delegate as ApexChartGatewayDelegate).init(this.chart);
        }
    }

    componentDidUpdate (prevProps) {
        if (!this.chart) {
            return null;
        }

        const prevOptions = JSON.stringify(prevProps.props.options);
        const prevSeries = JSON.stringify(prevProps.props.series);
        const currentOptions = JSON.stringify(this.props.props.options);
        const currentSeries = JSON.stringify(this.props.props.series);

        if (prevOptions === currentOptions && prevSeries !== currentSeries) {
            // options are not changed, just the series is changed
            logger.debug(() => `Updating series`);
            this.chart.updateSeries(this.prepareSeries(this.props.props.type, this.props.props.series));

            if (this.lastZoom.length > 0) {
                this.chart.zoomX(this.lastZoom[0], this.lastZoom[1]);
            }
        } else if (prevOptions !== currentOptions) {
            // both might be changed
            logger.debug(() => `Destroying chart`);
            this.chart.destroy();
            logger.debug(() => `Creating new chart`);
            this.chart = new ApexCharts(this.chartRef.current, this.getConfig());
            this.initDelegate();
            this.chart.render();
        }
    }

    componentWillUnmount () {
        if (this.chart && typeof this.chart.destroy === 'function') {
            this.chart.destroy();
        }
    }

    getConfig () {
        const newOptions = this.prepareOptions(JSON.parse(JSON.stringify(this.props.props.options)));

        if (newOptions.chart) {
            newOptions.chart.type = this.props.props.type;
            newOptions.chart.height = "100%";
            newOptions.chart.width = "100%";
        } else {
            newOptions.chart = {
                type: this.props.props.type,
                height: "100%",
                width: "100%"
            };
        }

        newOptions.series = this.prepareSeries(this.props.props.type, this.props.props.series);
        return newOptions;
    }

    @bind
    prepareOptions(options) {
        objectScan(['**'], {
            filterFn: ({ parent, property, value }) => {
                if (typeof value === 'string' && value && (value.startsWith("function (") || value.startsWith("function("))) {
                    parent[property] = new Function("return " + value)();
                }
            }
        })(options);

        if (options.chart && options.chart.events) {
            if (options.chart.events.animationEnd) {
                options.chart.events.animationEnd = this.animationEndHandler;
            } else {
                options.chart.events.animationEnd = undefined;
            }

            if (options.chart.events.beforeMount) {
                options.chart.events.beforeMount = this.beforeMountHandler;
            } else {
                options.chart.events.beforeMount = undefined;
            }

            if (options.chart.events.mounted) {
                options.chart.events.mounted = this.mountedHandler;
            } else {
                options.chart.events.mounted = undefined;
            }

            if (options.chart.events.updated) {
                options.chart.events.updated = this.updatedHandler;
            } else {
                options.chart.events.updated = undefined;
            }

            if (options.chart.events.click) {
                options.chart.events.click = this.clickHandler;
            } else {
                options.chart.events.click = undefined;
            }

            if (options.chart.events.mouseMove) {
                options.chart.events.mouseMove = this.mouseMoveHandler;
            } else {
                options.chart.events.mouseMove = undefined;
            }

            if (options.chart.events.legendClick) {
                options.chart.events.legendClick = this.legendClickHandler;
            } else {
                options.chart.events.legendClick = undefined;
            }

            if (options.chart.events.markerClick) {
                options.chart.events.markerClick = this.markerClickHandler;
            } else {
                options.chart.events.markerClick = undefined;
            }

            if (options.chart.events.selection) {
                options.chart.events.selection = this.selectionHandler;
            } else {
                options.chart.events.selection = undefined;
            }

            if (options.chart.events.dataPointSelection) {
                options.chart.events.dataPointSelection = this.dataPointSelectionHandler;
            } else {
                options.chart.events.dataPointSelection = undefined;
            }

            if (options.chart.events.dataPointMouseEnter) {
                options.chart.events.dataPointMouseEnter = this.dataPointMouseEnterHandler;
            } else {
                options.chart.events.dataPointMouseEnter = undefined;
            }

            if (options.chart.events.dataPointMouseLeave) {
                options.chart.events.dataPointMouseLeave = this.dataPointMouseLeaveHandler;
            } else {
                options.chart.events.dataPointMouseLeave = undefined;
            }

            options.chart.events.zoomed = this.zoomedHandler;
            options.chart.events.beforeResetZoom = this.beforeResetZoomHandler;

            if (options.chart.events.scrolled) {
                options.chart.events.scrolled = this.scrolledHandler;
            } else {
                options.chart.events.scrolled = undefined;
            }

            if (options.chart.events.brushScrolled) {
                options.chart.events.brushScrolled = this.brushedScrolledHandler;
            } else {
                options.chart.events.brushScrolled = undefined;
            }
        }

        return options;
    }

    @bind
    prepareSeries(type, series) {
        const seriesLength: number = this.props.store.props.readLength("series");

        for (let i = 0; i < seriesLength; i++) {
            const s = series[i];

            if (isPlainObject(s)) {
                if (typeof s.data === 'undefined' || s.data === null || typeof s.data === 'string' || typeof s.data === 'number' || typeof s.data === 'bigint' || typeof s.data === 'boolean' || typeof s.data === 'symbol' || typeof s.data === 'function') {
                    s.data = [];
                }

                const dataPropertyPath = `series[${i}].data`;
                const dataType = this.props.store.props.readType(dataPropertyPath);

                if (dataType === TypeCode.Dataset) {
                    const dataset: Dataset = this.props.store.props.readDataset(dataPropertyPath)!;
                    const rawData = [...dataset];
                    const newData: Array<any> = new Array<any>();

                    for (let index = 0; index < rawData.length; index++) {
                        if (dataset.columnCount == 1){
                            newData.push(rawData[index][0]);
                        } else if (dataset.columnCount > 1){
                            newData.push({
                                x: rawData[index][0],
                                y: rawData[index][1]
                            });
                        }
                    }

                    s.data = newData;
                } else if (dataType === TypeCode.Array) {
                    const rawData = this.props.store.props.readArray(dataPropertyPath);
                    const newData: Array<any> = new Array<any>();

                    for (let index = 0; index < rawData.length; index++) {
                        const rowData = rawData[index];
                        if (isPlainObject(rowData)){
                            const rowDataArray = Object.values(rowData);

                            if (rowDataArray.length == 1){
                                newData.push(rowDataArray);
                            } else if (rowDataArray.length > 1){
                                newData.push({
                                    x: rowDataArray[0],
                                    y: rowDataArray[1]
                                });
                            }
                        } else {
                            if (!Array.isArray(rowData) || rowData.length == 1){
                                newData.push(rowData);
                            } else if (rowData.length > 1){
                                newData.push({
                                    x: rowData[0],
                                    y: rowData[1]
                                });
                            }
                        }
                    }

                    s.data = newData;
                }
            }
        }

        return series;
    }

    @bind
    animationEndHandler(chartContext, options) {
        const e = {
        };
        this.props.componentEvents.fireComponentEvent("animationEndHandler", e);
    }

    @bind
    beforeMountHandler(chartContext, config) {
        const e = {
        };
        this.props.componentEvents.fireComponentEvent("beforeMountHandler", e);
    }

    @bind
    mountedHandler(chartContext, config) {
        const e = {
        };
        this.props.componentEvents.fireComponentEvent("mountedHandler", e);
    }

    @bind
    updatedHandler(chartContext, config) {
        const e = {
        };
        this.props.componentEvents.fireComponentEvent("updatedHandler", e);
    }

    @bind
    clickHandler(event, chartContext, config) {
        const e = {
            dataPointIndex: config.dataPointIndex,
            seriesIndex: config.seriesIndex,
            mouseEvent: {
                type: event.type,
                x: event.x,
                y: event.y,
                screenX: event.screenX,
                screenY: event.screenY,
                altKey: event.altKey,
                ctrlKey: event.ctrlKey,
                shiftKey: event.shiftKey
            }
        };
        this.props.componentEvents.fireComponentEvent("clickHandler", e);
    }

    @bind
    mouseMoveHandler(event, chartContext, config) {
        const e = {
            dataPointIndex: config.dataPointIndex,
            seriesIndex: config.seriesIndex,
            mouseEvent: {
                type: event.type,
                x: event.x,
                y: event.y,
                screenX: event.screenX,
                screenY: event.screenY,
                altKey: event.altKey,
                ctrlKey: event.ctrlKey,
                shiftKey: event.shiftKey
            }
        };
        this.props.componentEvents.fireComponentEvent("mouseMoveHandler", e);
    }

    @bind
    legendClickHandler(chartContext, seriesIndex, config) {
        const e = {
            seriesIndex: seriesIndex
        };
        this.props.componentEvents.fireComponentEvent("legendClickHandler", e);
    }

    @bind
    markerClickHandler(event, chartContext, { seriesIndex, dataPointIndex, config }) {
        const e = {
            dataPointIndex: dataPointIndex,
            seriesIndex: seriesIndex,
            mouseEvent: {
                type: event.type,
                x: event.x,
                y: event.y,
                screenX: event.screenX,
                screenY: event.screenY,
                altKey: event.altKey,
                ctrlKey: event.ctrlKey,
                shiftKey: event.shiftKey
            }
        };
        this.props.componentEvents.fireComponentEvent("markerClickHandler", e);
    }

    @bind
    selectionHandler(chartContext, { xaxis, yaxis }) {
        const e = {
            xaxis: {
                min: xaxis.min,
                max: xaxis.max
            }
        };
        this.props.componentEvents.fireComponentEvent("selectionHandler", e);
    }

    @bind
    dataPointSelectionHandler(event, chartContext, config) {
        const e = {
            dataPointIndex: config.dataPointIndex,
            seriesIndex: config.seriesIndex,
            mouseEvent: {
                type: event.type,
                x: event.x,
                y: event.y,
                screenX: event.screenX,
                screenY: event.screenY,
                altKey: event.altKey,
                ctrlKey: event.ctrlKey,
                shiftKey: event.shiftKey
            }
        };
        this.props.componentEvents.fireComponentEvent("dataPointSelectionHandler", e);
    }

    @bind
    dataPointMouseEnterHandler(event, chartContext, config) {
        const e = {
            dataPointIndex: config.dataPointIndex,
            seriesIndex: config.seriesIndex,
            mouseEvent: {
                type: event.type,
                x: event.x,
                y: event.y,
                screenX: event.screenX,
                screenY: event.screenY,
                altKey: event.altKey,
                ctrlKey: event.ctrlKey,
                shiftKey: event.shiftKey
            }
        };
        this.props.componentEvents.fireComponentEvent("dataPointMouseEnterHandler", e);
    }

    @bind
    dataPointMouseLeaveHandler(event, chartContext, config) {
        const e = {
            dataPointIndex: config.dataPointIndex,
            seriesIndex: config.seriesIndex,
            mouseEvent: {
                type: event.type,
                x: event.x,
                y: event.y,
                screenX: event.screenX,
                screenY: event.screenY,
                altKey: event.altKey,
                ctrlKey: event.ctrlKey,
                shiftKey: event.shiftKey
            }
        };
        this.props.componentEvents.fireComponentEvent("dataPointMouseLeaveHandler", e);
    }

    @bind
    beforeResetZoomHandler(chartContext, opts) {
        this.lastZoom = [];
    }

    @bind
    zoomedHandler(chartContext, { xaxis, yaxis }) {
        this.lastZoom = [xaxis.min, xaxis.max];

        if (this.props.props.options.chart.events.zoomed) {
            const e = {
                xaxis: {
                    min: xaxis.min,
                    max: xaxis.max
                }
            };
            this.props.componentEvents.fireComponentEvent("zoomedHandler", e);
        }
    }

    @bind
    scrolledHandler(chartContext, { xaxis }) {
        const e = {
            xaxis: {
                min: xaxis.min,
                max: xaxis.max
            }
        };
        this.props.componentEvents.fireComponentEvent("scrolledHandler", e);
    }

    @bind
    brushedScrolledHandler(chartContext, { xaxis, yaxis }) {
        const e = {
            xaxis: {
                min: xaxis.min,
                max: xaxis.max
            }
        };
        this.props.componentEvents.fireComponentEvent("brushedScrolledHandler", e);
    }

    render() {
        if (this.props.props.options && Object.keys(this.props.props.options).length === 0 && Object.getPrototypeOf(this.props.props.options) === Object.prototype) {
            return (
                <div {...this.props.emit()} />
            );
        } else {
            return (
                <div {...this.props.emit()}>
                   <div ref={this.chartRef} />
                </div>
            );
        }
    }
}

export class ApexChartMeta implements ComponentMeta {

    getComponentType(): string {
        return COMPONENT_TYPE;
    }

    getViewComponent(): PComponent {
        return ApexChart;
    }

    getDefaultSize(): SizeObject {
        return ({
            width: 475,
            height: 200
        });
    }

    createDelegate(component: AbstractUIElementStore): ComponentStoreDelegate | undefined {
        return new ApexChartGatewayDelegate(component);
    }

    getPropsReducer(tree: PropertyTree): ApexChartProps {
        return {
            type: tree.readString("type"),
            options: tree.read("options"),
            series: tree.readArray("series")
        };
    }
}
