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
        const { props } = this.props;

        objectScan(['**'], {
            filterFn: ({ parent, property, value }) => {
                if (typeof value === 'string' && value && value.startsWith("function (")) {
                    parent[property] = new Function("return " + value)();
                }
            }
        })(props.options);

        if (props.options.chart && props.options.chart.events && props.options.chart.events.animationEnd) {
            props.options.chart.events.animationEnd = this.animationEndHandler;
        }

        if (props.options.chart && props.options.chart.events && props.options.chart.events.beforeMount) {
            props.options.chart.events.beforeMount = this.beforeMountHandler;
        }

        if (props.options.chart && props.options.chart.events && props.options.chart.events.mounted) {
            props.options.chart.events.mounted = this.mountedHandler;
        }

        if (props.options.chart && props.options.chart.events && props.options.chart.events.updated) {
            props.options.chart.events.updated = this.updatedHandler;
        }

        if (props.options.chart && props.options.chart.events && props.options.chart.events.click) {
            props.options.chart.events.click = this.clickHandler;
        }

        if (props.options.chart && props.options.chart.events && props.options.chart.events.mouseMove) {
            props.options.chart.events.mouseMove = this.mouseMoveHandler;
        }

        if (props.options.chart && props.options.chart.events && props.options.chart.events.legendClick) {
            props.options.chart.events.legendClick = this.legendClickHandler;
        }

        if (props.options.chart && props.options.chart.events && props.options.chart.events.markerClick) {
            props.options.chart.events.markerClick = this.markerClickHandler;
        }

        if (props.options.chart && props.options.chart.events && props.options.chart.events.selection) {
            props.options.chart.events.selection = this.selectionHandler;
        }

        if (props.options.chart && props.options.chart.events && props.options.chart.events.dataPointSelection) {
            props.options.chart.events.dataPointSelection = this.dataPointSelectionHandler;
        }

        if (props.options.chart && props.options.chart.events && props.options.chart.events.dataPointMouseEnter) {
            props.options.chart.events.dataPointMouseEnter = this.dataPointMouseEnterHandler;
        }

        if (props.options.chart && props.options.chart.events && props.options.chart.events.dataPointMouseLeave) {
            props.options.chart.events.dataPointMouseLeave = this.dataPointMouseLeaveHandler;
        }

        if (props.options.chart && props.options.chart.events && props.options.chart.events.zoomed) {
            props.options.chart.events.zoomed = this.zoomedHandler;
        }

        if (props.options.chart && props.options.chart.events && props.options.chart.events.scrolled) {
            props.options.chart.events.scrolled = this.scrolledHandler;
        }

        if (props.options.chart && props.options.chart.events && props.options.chart.events.brushScrolled) {
            props.options.chart.events.brushScrolled = this.brushedScrolledHandler;
        }

        if (props.type !== "pie" && props.type !== "donut" && props.type !== "radialBar"){
            for (let series of props.series) {
                if (typeof series.data === 'undefined' || series.data === null || typeof series.data === 'string' || typeof series.data === 'number' || typeof series.data === 'bigint' || typeof series.data === 'boolean' || typeof series.data === 'symbol' || typeof series.data === 'function') {
                    series.data = [];
                }

                let hasObject: boolean = false;
                for (let row of series.data) {
                    if (row instanceof Object){
                        hasObject = true;
                    }
                    break;
                }

                if (hasObject) {
                    const newData: Array<any> = new Array<any>();
                    for (let row of series.data) {
                        if (row instanceof Object){
                            newData.push(Object.values(row));
                        } else {
                            newData.push(row);
                        }
                    }
                    series.data = newData;
                }
            }
        }

        return (
            <div {...this.props.emit()}>
                <Chart options={props.options} series={props.series} type={props.type} width="100%" height="100%" />
            </div>
        );
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
