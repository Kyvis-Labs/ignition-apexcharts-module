import * as React from 'react';
import {
    Component,
    ComponentMeta,
    ComponentProps,
    PComponent,
    PropertyTree,
    SizeObject
} from '@inductiveautomation/perspective-client';
import { bind } from 'bind-decorator';
import Chart from 'react-apexcharts';
const objectScan = require('object-scan');

export const COMPONENT_TYPE = "kyvislabs.display.apexchart";

export interface ApexChartProps {
    type: any;
    options: any;
    series: Array<any>;
}

export class ApexChart extends Component<ComponentProps<ApexChartProps>, any> {

    constructor(props: ComponentProps<ApexChartProps>) {
        super(props);

        this.state = {
            options: {
                ...this.prepareOptions(props.props.options)
            },
            series: this.prepareSeries(props.props.type, props.props.series),
            type: props.props.type
        };
    }

    componentDidMount() {
        const {
            props: {
                type,
                series,
                options
            }
        } = this.props;

        this.setState({
            options: {
                ...this.prepareOptions(options)
            },
            series: this.prepareSeries(type, series),
            type: type
        });
    }

    componentDidUpdate(prevProps: ComponentProps<ApexChartProps>) {
        const {
            props: {
                type,
                series,
                options
            }
        } = this.props;

        if (this.props.props.type !== prevProps.props.type) {
            this.setState({
                type: type
            });
        }

        if (this.props.props.options !== prevProps.props.options) {
            this.setState({
                options: {
                    ...this.prepareOptions(options)
                }
            });
        }

        if (this.props.props.series !== prevProps.props.series) {
            this.setState({
                series: this.prepareSeries(type, series)
            });
        }
    }

    @bind
    prepareOptions(options) {
        objectScan(['**'], {
            filterFn: ({ parent, property, value }) => {
                if (typeof value === 'string' && value && value.startsWith("function (")) {
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

            if (options.chart.events.zoomed) {
                options.chart.events.zoomed = this.zoomedHandler;
            } else {
                options.chart.events.zoomed = undefined;
            }

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
        if (type !== "pie" && type !== "donut" && type !== "radialBar" && type !== "rangeBar" && type !== "polarArea"){
            for (let s of series) {
                if (typeof s.data === 'undefined' || s.data === null || typeof s.data === 'string' || typeof s.data === 'number' || typeof s.data === 'bigint' || typeof s.data === 'boolean' || typeof s.data === 'symbol' || typeof s.data === 'function') {
                    s.data = [];
                }

                let hasObject: boolean = false;
                for (let row of s.data) {
                    if (row instanceof Object){
                        hasObject = true;
                    }
                    break;
                }

                if (hasObject) {
                    const newData: Array<any> = new Array<any>();
                    for (let row of s.data) {
                        if (row instanceof Object){
                            newData.push(Object.values(row));
                        } else {
                            newData.push(row);
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
    zoomedHandler(chartContext, { xaxis, yaxis }) {
        const e = {
            xaxis: {
                min: xaxis.min,
                max: xaxis.max
            }
        };
        this.props.componentEvents.fireComponentEvent("zoomedHandler", e);
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
        if (this.state.options && Object.keys(this.state.options).length === 0 && Object.getPrototypeOf(this.state.options) === Object.prototype) {
            return (
                <div {...this.props.emit()} />
            );
        } else {
            return (
                <div {...this.props.emit()}>
                    <Chart options={this.state.options} series={this.state.series} type={this.state.type} width="100%" height="100%" />
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

    getPropsReducer(tree: PropertyTree): ApexChartProps {
        return {
            type: tree.readString("type"),
            options: tree.read("options"),
            series: tree.readArray("series")
        };
    }
}
