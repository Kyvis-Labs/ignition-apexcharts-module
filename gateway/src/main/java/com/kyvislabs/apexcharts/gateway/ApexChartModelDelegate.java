package com.kyvislabs.apexcharts.gateway;

import com.inductiveautomation.ignition.common.gson.Gson;
import com.inductiveautomation.ignition.common.gson.JsonObject;
import com.inductiveautomation.ignition.common.script.builtin.KeywordArgs;
import com.inductiveautomation.ignition.common.script.builtin.PyArgumentMap;
import com.inductiveautomation.perspective.gateway.api.Component;
import com.inductiveautomation.perspective.gateway.api.ComponentModelDelegate;
import com.inductiveautomation.perspective.gateway.api.ScriptCallable;
import com.inductiveautomation.perspective.gateway.messages.EventFiredMsg;
import org.python.core.Py;
import org.python.core.PyDictionary;
import org.python.core.PyObject;

import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;

public class ApexChartModelDelegate extends ComponentModelDelegate {
    public static final String OUTBOUND_EVENT_NAME = "apexchart-response-event";
    public static final String INBOUND_EVENT_NAME = "apexchart-request-event";

    private AtomicBoolean toggleSeriesWaiting = new AtomicBoolean(false);
    private AtomicBoolean toggleSeriesReturn = new AtomicBoolean(false);

    public ApexChartModelDelegate(Component component) {
        super(component);
    }

    @Override
    protected void onStartup() {
        // Called when the Gateway's ComponentModel starts.  The start itself happens when the client project is
        // loading and includes an instance of the the component type in the page/view being started.
        log.debugf("Starting up delegate for '%s'!", component.getComponentAddressPath());
    }

    @Override
    protected void onShutdown() {
        // Called when the component is removed from the page/view and the model is shutting down.
        log.debugf("Shutting down delegate for '%s'!", component.getComponentAddressPath());
    }

    @ScriptCallable
    @KeywordArgs(names = {"seriesName"}, types = {String.class})
    public boolean toggleSeries(PyObject[] pyArgs, String[] keywords) throws Exception {
        PyArgumentMap argumentMap =
                PyArgumentMap.interpretPyArgs(pyArgs, keywords, ApexChartModelDelegate.class, "toggleSeries");
        String seriesName = argumentMap.getStringArg("seriesName");

        if (seriesName == null) {
            throw Py.ValueError("toggleSeries argument 'seriesName' cannot be None");
        }

        toggleSeriesWaiting.set(true);
        log.debugf("Calling toggleSeries with '%s'", seriesName);
        JsonObject payload = new JsonObject();
        payload.addProperty("functionToCall", "toggleSeries");
        payload.addProperty("seriesName", seriesName);
        fireEvent(OUTBOUND_EVENT_NAME, payload);

        int maxTryCount = 20;
        int tryCount = 0;
        while (toggleSeriesWaiting.get()) {
            tryCount += 1;
            if (tryCount >= maxTryCount) {
                toggleSeriesWaiting.set(false);
                throw new Exception("No message received from ApexChart, failing");
            }
            Thread.sleep(100);
        }

        toggleSeriesWaiting.set(false);
        return toggleSeriesReturn.get();
    }

    @ScriptCallable
    @KeywordArgs(names = {"seriesName"}, types = {String.class})
    public void showSeries(PyObject[] pyArgs, String[] keywords) throws Exception {
        PyArgumentMap argumentMap =
                PyArgumentMap.interpretPyArgs(pyArgs, keywords, ApexChartModelDelegate.class, "showSeries");
        String seriesName = argumentMap.getStringArg("seriesName");

        if (seriesName == null) {
            throw Py.ValueError("showSeries argument 'seriesName' cannot be None");
        }

        log.debugf("Calling showSeries with '%s'", seriesName);
        JsonObject payload = new JsonObject();
        payload.addProperty("functionToCall", "showSeries");
        payload.addProperty("seriesName", seriesName);
        fireEvent(OUTBOUND_EVENT_NAME, payload);
    }

    @ScriptCallable
    @KeywordArgs(names = {"seriesName"}, types = {String.class})
    public void hideSeries(PyObject[] pyArgs, String[] keywords) throws Exception {
        PyArgumentMap argumentMap =
                PyArgumentMap.interpretPyArgs(pyArgs, keywords, ApexChartModelDelegate.class, "hideSeries");
        String seriesName = argumentMap.getStringArg("seriesName");

        if (seriesName == null) {
            throw Py.ValueError("hideSeries argument 'seriesName' cannot be None");
        }

        log.debugf("Calling hideSeries with '%s'", seriesName);
        JsonObject payload = new JsonObject();
        payload.addProperty("functionToCall", "hideSeries");
        payload.addProperty("seriesName", seriesName);
        fireEvent(OUTBOUND_EVENT_NAME, payload);
    }

    @ScriptCallable
    @KeywordArgs(names = {"shouldUpdateChart", "shouldResetZoom"}, types = {Boolean.class, Boolean.class})
    public void resetSeries(PyObject[] pyArgs, String[] keywords) throws Exception {
        PyArgumentMap argumentMap =
                PyArgumentMap.interpretPyArgs(pyArgs, keywords, ApexChartModelDelegate.class, "resetSeries");
        Boolean shouldUpdateChart = argumentMap.getBooleanArg("shouldUpdateChart", true);
        Boolean shouldResetZoom = argumentMap.getBooleanArg("shouldResetZoom", true);

        log.debugf("Calling resetSeries with shouldUpdateChart=%s and shouldResetZoom=%s", shouldUpdateChart, shouldResetZoom);
        JsonObject payload = new JsonObject();
        payload.addProperty("functionToCall", "resetSeries");
        payload.addProperty("shouldUpdateChart", shouldUpdateChart);
        payload.addProperty("shouldResetZoom", shouldResetZoom);
        fireEvent(OUTBOUND_EVENT_NAME, payload);
    }

    @ScriptCallable
    @KeywordArgs(names = {"start", "end"}, types = {Long.class, Long.class})
    public void zoomX(PyObject[] pyArgs, String[] keywords) throws Exception {
        PyArgumentMap argumentMap =
                PyArgumentMap.interpretPyArgs(pyArgs, keywords, ApexChartModelDelegate.class, "zoomX");
        Long start = argumentMap.getLongArg("start");
        Long end = argumentMap.getLongArg("end");

        log.debugf("Calling zoomX with start=%s and end=%s", start, end);
        JsonObject payload = new JsonObject();
        payload.addProperty("functionToCall", "zoomX");
        payload.addProperty("start", start);
        payload.addProperty("end", end);
        fireEvent(OUTBOUND_EVENT_NAME, payload);
    }

    @ScriptCallable
    @KeywordArgs(names = {"options", "pushToMemory"}, types = {PyDictionary.class, Boolean.class})
    public void addPointAnnotation(PyObject[] pyArgs, String[] keywords) throws Exception {
        PyArgumentMap argumentMap =
                PyArgumentMap.interpretPyArgs(pyArgs, keywords, ApexChartModelDelegate.class, "addPointAnnotation");
        PyDictionary options = (PyDictionary) argumentMap.get("options");
        Boolean pushToMemory = argumentMap.getBooleanArg("pushToMemory", true);

        Gson gson = new Gson();
        log.debug("Calling addPointAnnotation");
        JsonObject payload = new JsonObject();
        payload.addProperty("functionToCall", "addPointAnnotation");
        payload.add("options", gson.toJsonTree(options));
        payload.addProperty("pushToMemory", pushToMemory);
        fireEvent(OUTBOUND_EVENT_NAME, payload);
    }

    @ScriptCallable
    public void clearAnnotations() throws Exception {
        log.debug("Calling clearAnnotations");
        JsonObject payload = new JsonObject();
        payload.addProperty("functionToCall", "clearAnnotations");
        fireEvent(OUTBOUND_EVENT_NAME, payload);
    }

    @ScriptCallable
    @KeywordArgs(names = {"newSeries", "animate", "maintainZoom"}, types = {List.class, Boolean.class, Boolean.class})
    public void updateSeries(PyObject[] pyArgs, String[] keywords) throws Exception {
        PyArgumentMap argumentMap =
                PyArgumentMap.interpretPyArgs(pyArgs, keywords, ApexChartModelDelegate.class, "updateSeries");
        List newSeries = (List) argumentMap.get("newSeries");
        Boolean animate = argumentMap.getBooleanArg("animate", true);
        Boolean maintainZoom = argumentMap.getBooleanArg("maintainZoom", false);

        Gson gson = new Gson();
        log.debug("Calling updateSeries");
        JsonObject payload = new JsonObject();
        payload.addProperty("functionToCall", "updateSeries");
        payload.add("newSeries", gson.toJsonTree(newSeries));
        payload.addProperty("animate", animate);
        payload.addProperty("maintainZoom", maintainZoom);
        fireEvent(OUTBOUND_EVENT_NAME, payload);
    }

    @ScriptCallable
    @KeywordArgs(names = {"newOptions", "redrawPaths", "animate", "updateSyncedCharts", "maintainZoom"}, types = {PyDictionary.class, Boolean.class, Boolean.class, Boolean.class, Boolean.class})
    public void updateOptions(PyObject[] pyArgs, String[] keywords) throws Exception {
        PyArgumentMap argumentMap =
                PyArgumentMap.interpretPyArgs(pyArgs, keywords, ApexChartModelDelegate.class, "updateOptions");
        PyDictionary newOptions = (PyDictionary) argumentMap.get("newOptions");
        Boolean redrawPaths = argumentMap.getBooleanArg("redrawPaths", false);
        Boolean animate = argumentMap.getBooleanArg("animate", true);
        Boolean updateSyncedCharts = argumentMap.getBooleanArg("updateSyncedCharts", true);
        Boolean maintainZoom = argumentMap.getBooleanArg("maintainZoom", false);

        Gson gson = new Gson();
        log.debug("Calling updateOptions");
        JsonObject payload = new JsonObject();
        payload.addProperty("functionToCall", "updateOptions");
        payload.add("newOptions", gson.toJsonTree(newOptions));
        payload.addProperty("redrawPaths", redrawPaths);
        payload.addProperty("animate", animate);
        payload.addProperty("updateSyncedCharts", updateSyncedCharts);
        payload.addProperty("maintainZoom", maintainZoom);
        fireEvent(OUTBOUND_EVENT_NAME, payload);
    }

    // when a ComponentStoreDelegate event is fired from the client side, it comes through this method.
    @Override
    public void handleEvent(EventFiredMsg message) {
        log.debugf("Received EventFiredMessage of type: %s", message.getEventName());

        if (message.getEventName().equals(INBOUND_EVENT_NAME)) {
            JsonObject payload = message.getEvent();
            toggleSeriesReturn.set(payload.get("result").getAsBoolean());
            toggleSeriesWaiting.set(false);
        }
    }
}