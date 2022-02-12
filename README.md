# ApexCharts Module 

An Ignition module that adds support for ApexCharts charting library as a Perspective component. The single Perspective component provides full support for leveraging all ApexCharts library through a simple flexible property model.

See [ApexCharts](https://apexcharts.com) for more details on the library.

Open Source
---------------

The ApexCharts module is an open source project distributed under the Apache 2.0 license. Please feel free to download the source code and contribute. 

Getting Started
---------------

1. Download the latest version module (.modl) from [releases](https://github.com/Kyvis-Labs/ignition-apexcharts-module/releases)
2. Install the module into Ignition 8.1+
3. Open the designer and drag the ApexCharts component onto a Perspective view. The module provides 3 variations to show examples of creating a line chart, pie chart, and radar chart.
4. Manipulate the component's properties to select and configure the ApexChart you want. Read the documentation below for more information on the property model.
5. Enjoy!

Property Model
---------------

The component has 3 properties:

| Property  | Description                                                        |
| :---------| :----------------------------------------------------------------- |
| `type`    | The type of ApexChart to use. See below for complete list.         |
| `options` | The options or configuration for the chart.                        |
| `series`  | The data to display (based on type and options).                   |

### `type`
The `type` property specifies which type of ApexChart you want to use. Possible values are:
- line
- area
- bar
- radar
- histogram
- pie
- donut
- radialBar
- scatter
- bubble
- heatmap
- candlestick
- polarArea
- rangeBar
- treemap

See [examples](https://apexcharts.com/react-chart-demos/) for chart types.

### `options`
The `options` property specifies the configuration of the chart. The following example defines the options for a pie chart:

```json
{
  "chart": {
    "type": "pie",
    "width": 380,
    "events": {
      "animationEnd": false,
      "beforeMount": false,
      "mounted": false,
      "updated": false,
      "mouseMove": false,
      "mouseLeave": false,
      "click": false,
      "legendClick": false,
      "markerClick": false,
      "selection": false,
      "dataPointSelection": false,
      "dataPointMouseEnter": false,
      "dataPointMouseLeave": false,
      "beforeZoom": false,
      "beforeResetZoom": false,
      "zoomed": false,
      "scrolled": false,
      "brushScrolled": false
    }
  },
  "labels": [
    "Team A",
    "Team B",
    "Team C",
    "Team D",
    "Team E"
  ],
  "responsive": [
    {
      "breakpoint": 480,
      "options": {
        "chart": {
          "width": 200
        },
        "legend": {
          "position": "bottom"
        }
      }
    }
  ]
}
```

ApexCharts provide a wide range of possible options. See [documentation](https://apexcharts.com/docs/options/) for more details. You can use any property from their documentation.

### `series`
The `series` property specifies the data for the chart. The data can either be an array or an Ignition [DataSet](https://docs.inductiveautomation.com/display/DOC81/Datasets). The data is separate from the options (configuration) because it is possible the data will reload without having to fully reload the chart. The following example defines the data for a pie chart:

```json
[
  44,
  55,
  13,
  43,
  22
]
```

This example shows how to specify 2 series of data for a line chart:

```json
[
  {
    "data": [
      28,
      29,
      33,
      36,
      32,
      32,
      33
    ],
    "name": "High - 2013"
  },
  {
    "data": [
      12,
      11,
      14,
      18,
      17,
      13,
      13
    ],
    "name": "Low - 2013"
  }
]
```

The data will either be an array of values (for pie charts, donuts, and radial bar) or a dictionary of named series (for all other chart types). You can use an Ignition DataSet instead of a JSON array of values. See ApexCharts examples.

Event Handlers
---------------

ApexCharts provides a range of [event handlers](https://apexcharts.com/docs/options/chart/events/) for their charts. The events allow you to respond to various events, such as mouse click, zoom, selection, etc.

All the events are turned off by default on the component. You can easily turn them on by setting the event property to true, located in options->chart->events. The following example enables the click event:

```json
{
  "chart": {
    "events": {
      "animationEnd": false,
      "beforeMount": false,
      "mounted": false,
      "updated": false,
      "mouseMove": false,
      "mouseLeave": false,
      "click": true,
      "legendClick": false,
      "markerClick": false,
      "selection": false,
      "dataPointSelection": false,
      "dataPointMouseEnter": false,
      "dataPointMouseLeave": false,
      "beforeZoom": false,
      "beforeResetZoom": false,
      "zoomed": false,
      "scrolled": false,
      "brushScrolled": false
    }
  }
}
```

Once the event is enabled, you can write a corresponding script handler in the components (right click and select configure events). All of the event handlers have an event object containing details on the event. See the documentation for each event handler for more details.

User Defined Functions
---------------

ApexCharts allows users to define functions for various properties to offer more flexibility. For example, you can define a label formatter that uses JavaScript customize the label. The module supports user defined functions, but you must follow a specific format. For any property that allows a user defined function, simple set the property in Ignition to a string starting with:

`function (`

The space is important. For example, you can define a dataLabel formatter like this:

```json
{
  "dataLabels": {
    "enabled": true,
    "formatter": "function (value, { seriesIndex, dataPointIndex, w }) {     return w.config.series[seriesIndex].name + \":  \" + value   }"
  }
}
```

Please see ApexCharts documentation for when you can use user defined functions.

Leveraging Perspective Theme Colors and Fonts
---------------

It is possible to leverage Perspective theme colors and fonts for the charts. Simply use a defined variable from the theme in replace of the actual color or font. Here is an example of using a theme color:

```json
{
  "colors": [
    "var(--div-1)",
    "var(--qual-5)"
  ]
}
```

Component Scripting Functions
---------------

The Apex Chart component provides the following scripting functions you can interface with in Python:
- toggleSeries(String seriesName) returns Boolean
- showSeries(String seriesName)
- hideSeries(String seriesName)

### `toggleSeries`
This method allows you to toggle the visibility of series programmatically. Useful when you have a custom legend. You can learn more about the toggleSeries function [here](https://apexcharts.com/docs/methods/#toggleSeries).
```
self.getSibling("apexchart").toggleSeries("SeriesA")
```

### `showSeries`
This method allows you to show the hidden series. If the series is already visible, this doesn’t affect it. You can learn more about the toggleSeries function [here](https://apexcharts.com/docs/methods/#showSeries).
```
self.getSibling("apexchart").showSeries("SeriesA")
```

### `hideSeries`
This method allows you to hide the visible series. If the series is already hidden, this method doesn’t affect it. You can learn more about the toggleSeries function [here](https://apexcharts.com/docs/methods/#hideSeries).
```
self.getSibling("apexchart").hideSeries("SeriesA")
```