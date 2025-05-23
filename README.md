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

### `toggleSeries(seriesName)`
This method allows you to toggle the visibility of series programmatically. Useful when you have a custom legend. You can learn more about the toggleSeries function [here](https://apexcharts.com/docs/methods/#toggleSeries).
### Parameters
| Property             | Description                                                                                                                                                                                                              |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `seriesName`         | The series name which you want to toggle visibility for.                                                                                                                                                                   |
### Example
```
self.getSibling("apexchart").toggleSeries("SeriesA")
```

### `showSeries(seriesName)`
This method allows you to show the hidden series. If the series is already visible, this doesn’t affect it. You can learn more about the showSeries function [here](https://apexcharts.com/docs/methods/#showSeries).
### Parameters
| Property             | Description                                            |
|:---------------------|:-------------------------------------------------------|
| `seriesName`         | The series name which you want to show. |
### Example
```
self.getSibling("apexchart").showSeries("SeriesA")
```

### `hideSeries(seriesName)`
This method allows you to hide the visible series. If the series is already hidden, this method doesn’t affect it. You can learn more about the hideSeries function [here](https://apexcharts.com/docs/methods/#hideSeries).
### Parameters
| Property             | Description                             |
|:---------------------|:----------------------------------------|
| `seriesName`         | The series name which you want to hide. |
### Example
```
self.getSibling("apexchart").hideSeries("SeriesA")
```

### `resetSeries(shouldUpdateChart, shouldResetZoom)`
Resets all toggled series and bring back the chart to its original state. You can learn more about the resetSeries function [here](https://apexcharts.com/docs/methods/#resetSeries).
### Parameters
| Property             | Description                                            |
|:---------------------|:-------------------------------------------------------|
| `shouldUpdateChart`         | After resetting the series, the chart data should update and return to it’s original series. |
| `shouldResetZoom`         | If the user has zoomed in when this method is called, the zoom level should also reset. |
### Example
```
self.getSibling("apexchart").resetSeries(True, True)
```

### `zoomX(start, end)`
Manually zoom into the chart with the start and end X values. You can learn more about the zoomX function [here](https://apexcharts.com/docs/methods/#zoomX).
### Parameters
| Property | Description                                               |
|:---------|:----------------------------------------------------------|
| `start`  | The starting x-axis value. Accepts timestamp or a number. |
| `end`    | 	The ending x-axis value. Accepts timestamp or a number.  |
### Example
```
self.getSibling("apexchart").zoomX(1698098360040, 1698098480040)
```

### `addPointAnnotation(options, pushToMemory)`
This method can be used to draw annotations after chart is rendered. You can learn more about the addPointAnnotation function [here](https://apexcharts.com/docs/methods/#addpointannotation).
### Parameters
| Property | Description                                                                                                                                           |
|:---------|:------------------------------------------------------------------------------------------------------------------------------------------------------|
| `options`  | This function accepts the same parameters as it accepts in the point annotations config.                                                              |
| `annotations`    | 	When enabled, it preserves the annotations in subsequent chart updates. If you don’t want it to be saved for the next updates, turn off this option. |
### Example
```
self.getSibling("apexchart").addPointAnnotation({
  "x": 1698098270040,
  "y": 40,
  "label": {
    "text": "Lorem Ipsum"
  },
}, True)
```

### `clearAnnotations()`
This method is used to delete all annotation elements which are added dynamically using the method stated above. You can learn more about the clearAnnotations function [here](https://apexcharts.com/docs/methods/#clearAnnotations).
### Example
```
self.getSibling("apexchart").clearAnnotations()
```

### `updateSeries(newSeries, [animate], [maintainZoom], [syncProps], [fetchResults])`
Allows you to update the series array overriding the existing one. You can learn more about the updateSeries function [here](https://apexcharts.com/docs/methods/#updateSeries). There is one additional parameter to determine whether to maintain zoom, called maintainZoom that is a boolean.
### Parameters
| Property       | Description                                                                                                                                                                                                                                                                                                                                                                         |
|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `newSeries`    | The series array to override the existing one.                                                                                                                                                                                                                                                                                                                                      |
| `animate`      | Optional. Should the chart animate on re-rendering. Default is true.                                                                                                                                                                                                                                                                                                                |
| `maintainZoom` | Optional. Whether to maintain zoom if already zoomed into the chart. Default is true.                                                                                                                                                                                                                                                                                               |
| `syncProps`    | Optional. Whether to sync the options with the Gateway's property model. Set true if you need this information on the Gateway. If true, the information will be synced through the websocket. Default is false.                                                                                                                                                                     |
| `fetchResults` | Optional. Whether to send the series data to the browser via HTTP instead of websocket. If you are sending a very large set of data, the websocket may time out if the message size is not large enough causing the client to briefly disconnect. Instead set this true so the Gateway can prepare the data to be fetched by the browser through a HTTP GET call. Default is false. |
### Examples
```
self.getSibling("apexchart").updateSeries(newSeries=[{
  "data": [32, 44, 31, 41, 22]
}], syncProps=True)
```

```
self.getSibling("apexchart").updateSeries(newSeries=[{
  "data": [32, 44, 31, 41, 22]
}], maintainZoom=False)
```

### `updateOptions(newOptions, [redrawPaths], [animate], [updateSyncedCharts], [maintainZoom], [syncProps])`
Allows you to update the options map overriding the existing one. You can learn more about the updateOptions function [here](https://apexcharts.com/docs/methods/#updateOptions).
### Parameters
| Property             | Description                                                                                                                                                                                                              |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `newOptions`         | The configuration object to merge on the existing one.                                                                                                                                                                   |
| `redrawPaths`        | Optional. When the chart is re-rendered, should it draw from the existing paths or completely redraw the chart paths from the beginning. By default, the chart is re-rendered from the existing paths. Default is false. |
| `animate`            | Optional. Should the chart animate on re-rendering. Default is true.                                                                                                                                                               |
| `updateSyncedCharts` | Optional. All the charts in a group should also update when one chart in a group is updated. Default is true.                                                                                                                      |
| `maintainZoom`       | Optional. Whether to maintain zoom if already zoomed into the chart. Default is true.                                                                                                                                              |
| `syncProps`          | Optional. Whether to sync the options with the Gateway's property model. Set true if you need this information on the Gateway. Default is false.                    |
### Examples
```
self.getSibling("apexchart").updateOptions({
	  "chart": {
	    "stacked": False,
	    "toolbar": {
	      "show": True
	    },
	    "type": "line",
	    "events": {
	      "animationEnd": False,
	      "beforeMount": False,
	      "mounted": False,
	      "updated": False,
	      "mouseMove": False,
	      "mouseLeave": False,
	      "click": False,
	      "legendClick": False,
	      "markerClick": False,
	      "xAxisLabelClick": False,
	      "selection": False,
	      "dataPointSelection": False,
	      "dataPointMouseEnter": False,
	      "dataPointMouseLeave": False,
	      "beforeZoom": False,
	      "beforeResetZoom": False,
	      "zoomed": False,
	      "scrolled": False,
	      "brushScrolled": False
	    }
	  },
	  "dataLabels": {
	    "enabled": False
	  },
	  "fill": {
	    "opacity": 1
	  },
	  "markers": {
	    "size": 0
	  },
	  "stroke": {
	    "width": 3
	  },
	  "xaxis": {
	    "type": "datetime"
	  },
	  "yaxis": {
	    "labels": {
	      "formatter": "function (val) {                     return val.toFixed(2);                   }"
	    }
	  }
	}, True)
```

```
self.getSibling("apexchart").updateOptions(newOptions={
	  "chart": {
	    "stacked": False,
	    "toolbar": {
	      "show": True
	    },
	    "type": "line",
	    "events": {
	      "animationEnd": False,
	      "beforeMount": False,
	      "mounted": False,
	      "updated": False,
	      "mouseMove": False,
	      "mouseLeave": False,
	      "click": False,
	      "legendClick": False,
	      "markerClick": False,
	      "xAxisLabelClick": False,
	      "selection": False,
	      "dataPointSelection": False,
	      "dataPointMouseEnter": False,
	      "dataPointMouseLeave": False,
	      "beforeZoom": False,
	      "beforeResetZoom": False,
	      "zoomed": False,
	      "scrolled": False,
	      "brushScrolled": False
	    }
	  },
	  "dataLabels": {
	    "enabled": False
	  },
	  "fill": {
	    "opacity": 1
	  },
	  "markers": {
	    "size": 0
	  },
	  "stroke": {
	    "width": 3
	  },
	  "xaxis": {
	    "type": "datetime"
	  },
	  "yaxis": {
	    "labels": {
	      "formatter": "function (val) {                     return val.toFixed(2);                   }"
	    }
	  }
	}, maintainZoom=True)
```