package com.kyvislabs.apexcharts.common.component.display;

import com.inductiveautomation.ignition.common.gson.JsonParser;
import com.inductiveautomation.ignition.common.jsonschema.JsonSchema;
import com.inductiveautomation.perspective.common.api.ComponentDescriptor;
import com.inductiveautomation.perspective.common.api.ComponentDescriptorImpl;
import com.inductiveautomation.perspective.common.api.ComponentEventDescriptor;
import com.kyvislabs.apexcharts.common.Components;

import javax.swing.*;
import java.io.InputStreamReader;
import java.util.Arrays;


/**
 * Describes the component to the Java registry so the gateway and designer know to look for the front end elements.
 * In a 'common' scope so that it's referencable by both gateway and designer.
 */
public class ApexChart {

    // unique ID of the component which perfectly matches that provided in the javascript's ComponentMeta implementation
    public static String COMPONENT_ID = "kyvislabs.display.apexchart";

    /**
     * The schema provided with the component descriptor. Use a schema instead of a plain JsonObject because it gives
     * us a little more type information, allowing the designer to highlight mismatches where it can detect them.
     */
    public static JsonSchema SCHEMA =
            JsonSchema.parse(Components.class.getResourceAsStream("/apexchart.props.json"));

    public static ComponentEventDescriptor ANIMATION_END_HANDLER = new ComponentEventDescriptor("animationEndHandler", "Fires when the chart’s initial animation is finished", JsonSchema.parse(Components.class.getResourceAsStream("/apexcharts.event.empty.props.json")));
    public static ComponentEventDescriptor BEFORE_MOUNT_HANDLER = new ComponentEventDescriptor("beforeMountHandler", "Fires before the chart has been drawn on screen", JsonSchema.parse(Components.class.getResourceAsStream("/apexcharts.event.empty.props.json")));
    public static ComponentEventDescriptor MOUNTED_HANDLER = new ComponentEventDescriptor("mountedHandler", "Fires after the chart has been drawn on screen", JsonSchema.parse(Components.class.getResourceAsStream("/apexcharts.event.empty.props.json")));
    public static ComponentEventDescriptor UPDATED_HANDLER = new ComponentEventDescriptor("updatedHandler", "Fires when the chart has been dynamically updated either with updateOptions() or updateSeries() functions", JsonSchema.parse(Components.class.getResourceAsStream("/apexcharts.event.empty.props.json")));
    public static ComponentEventDescriptor CLICK_HANDLER = new ComponentEventDescriptor("clickHandler", "Fires when user clicks on any area of the chart.", JsonSchema.parse(Components.class.getResourceAsStream("/apexcharts.event.mouse.props.json")));
    public static ComponentEventDescriptor MOUSE_MOVE_HANDLER = new ComponentEventDescriptor("mouseMoveHandler", "Fires when user moves mouse on any area of the chart.", JsonSchema.parse(Components.class.getResourceAsStream("/apexcharts.event.mouse.props.json")));
    public static ComponentEventDescriptor MOUSE_LEAVE_HANDLER = new ComponentEventDescriptor("mouseLeaveHandler", "Fires when user moves mouse outside chart area (exclusing axis).", JsonSchema.parse(Components.class.getResourceAsStream("/apexcharts.event.mouse.props.json")));
    public static ComponentEventDescriptor LEGEND_CLICK_HANDLER = new ComponentEventDescriptor("legendClickHandler", "Fires when user clicks on legend.", JsonSchema.parse(Components.class.getResourceAsStream("/apexcharts.event.seriesindex.props.json")));
    public static ComponentEventDescriptor MARKER_CLICK_HANDLER = new ComponentEventDescriptor("markerClickHandler", "Fires when user clicks on the markers.", JsonSchema.parse(Components.class.getResourceAsStream("/apexcharts.event.mouse.props.json")));
    public static ComponentEventDescriptor X_AXIS_LABEL_CLICK_HANDLER = new ComponentEventDescriptor("xAxisLabelClickHandler", "Fires when user clicks on the x-axis labels.", JsonSchema.parse(Components.class.getResourceAsStream("/apexcharts.event.mouse.props.json")));
    public static ComponentEventDescriptor SELECTION_HANDLER = new ComponentEventDescriptor("selectionHandler", "Fires when user selects rect using the selection tool.", JsonSchema.parse(Components.class.getResourceAsStream("/apexcharts.event.xaxis.props.json")));
    public static ComponentEventDescriptor DATA_POINT_SELECTION_HANDLER = new ComponentEventDescriptor("dataPointSelectionHandler", "Fires when user clicks on a datapoint (bar/column/marker/bubble/donut-slice).", JsonSchema.parse(Components.class.getResourceAsStream("/apexcharts.event.mouse.props.json")));
    public static ComponentEventDescriptor DATA_POINT_MOUSE_ENTER_HANDLER = new ComponentEventDescriptor("dataPointMouseEnterHandler", "Fires when user’s mouse enter on a datapoint (bar/column/marker/bubble/donut-slice).", JsonSchema.parse(Components.class.getResourceAsStream("/apexcharts.event.mouse.props.json")));
    public static ComponentEventDescriptor DATA_POINT_MOUSE_LEAVE_HANDLER = new ComponentEventDescriptor("dataPointMouseLeaveHandler", "MouseLeave event for a datapoint (bar/column/marker/bubble/donut-slice).", JsonSchema.parse(Components.class.getResourceAsStream("/apexcharts.event.mouse.props.json")));
    public static ComponentEventDescriptor ZOOMED_HANDLER = new ComponentEventDescriptor("zoomedHandler", "Fires when user zooms in/out the chart using either the selection zooming tool or zoom in/out buttons.", JsonSchema.parse(Components.class.getResourceAsStream("/apexcharts.event.xaxis.props.json")));
    public static ComponentEventDescriptor BEFORE_ZOOM_HANDLER = new ComponentEventDescriptor("beforeZoomHandler", "This function, if defined, runs just before zooming in/out of the chart allowing you to set a custom range for zooming in/out.", JsonSchema.parse(Components.class.getResourceAsStream("/apexcharts.event.xaxis.props.json")));
    public static ComponentEventDescriptor SCROLLED_HANDLER = new ComponentEventDescriptor("scrolledHandler", "Fires when user scrolls using the pan tool.", JsonSchema.parse(Components.class.getResourceAsStream("/apexcharts.event.xaxis.props.json")));
    public static ComponentEventDescriptor BRUSH_SCROLLED_HANDLER = new ComponentEventDescriptor("brushScrolledHandler", "Fires when user drags the brush in a brush chart.", JsonSchema.parse(Components.class.getResourceAsStream("/apexcharts.event.xaxis.props.json")));

    /**
     * Components register with the Java side ComponentRegistry but providing a ComponentDescriptor.  Here we
     * build the descriptor for this one component. Icons on the component palette are optional.
     */
    public static ComponentDescriptor DESCRIPTOR = ComponentDescriptorImpl.ComponentBuilder.newBuilder()
            .setPaletteCategory(Components.COMPONENT_CATEGORY)
            .setId(COMPONENT_ID)
            .setModuleId(Components.MODULE_ID)
            .setSchema(SCHEMA) //  this could alternatively be created purely in Java if desired
            .setEvents(Arrays.asList(ANIMATION_END_HANDLER, BEFORE_MOUNT_HANDLER, MOUNTED_HANDLER, UPDATED_HANDLER, CLICK_HANDLER, MOUSE_MOVE_HANDLER, MOUSE_LEAVE_HANDLER, LEGEND_CLICK_HANDLER, MARKER_CLICK_HANDLER, X_AXIS_LABEL_CLICK_HANDLER, SELECTION_HANDLER, DATA_POINT_SELECTION_HANDLER, DATA_POINT_MOUSE_ENTER_HANDLER, DATA_POINT_MOUSE_LEAVE_HANDLER, BEFORE_ZOOM_HANDLER, ZOOMED_HANDLER, SCROLLED_HANDLER, BRUSH_SCROLLED_HANDLER))
            .setName("ApexChart")
            .setIcon(new ImageIcon(Components.class.getResource("/icons/apexcharts.png")))
            .addPaletteEntry("", "ApexChart", "An ApexChart component.", null, null)
            .addPaletteEntry("apexchart-line", "ApexChart Line", "An ApexChart line component.", null, (new JsonParser()).parse(new InputStreamReader(Components.class.getResourceAsStream("/variants/apexchart.line.props.json"))).getAsJsonObject())
            .addPaletteEntry("apexchart-pie", "ApexChart Pie", "An ApexChart pie component.", null, (new JsonParser()).parse(new InputStreamReader(Components.class.getResourceAsStream("/variants/apexchart.pie.props.json"))).getAsJsonObject())
            .addPaletteEntry("apexchart-radar", "ApexChart Radar", "An ApexChart radar component.", null, (new JsonParser()).parse(new InputStreamReader(Components.class.getResourceAsStream("/variants/apexchart.radar.props.json"))).getAsJsonObject())
            .addPaletteEntry("apexchart-timeseries", "ApexChart Time Series", "An ApexChart time series component.", null, (new JsonParser()).parse(new InputStreamReader(Components.class.getResourceAsStream("/variants/apexchart.timeseries.props.json"))).getAsJsonObject())
            .setDefaultMetaName("apexchart")
            .setResources(Components.BROWSER_RESOURCES)
            .build();

}
