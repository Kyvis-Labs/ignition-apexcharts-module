package com.kyvislabs.apexcharts.gateway;

import com.inductiveautomation.ignition.common.gson.JsonObject;
import com.inductiveautomation.ignition.common.script.builtin.KeywordArgs;
import com.inductiveautomation.ignition.common.script.builtin.PyArgumentMap;
import com.inductiveautomation.perspective.gateway.api.Component;
import com.inductiveautomation.perspective.gateway.api.ComponentModelDelegate;
import com.inductiveautomation.perspective.gateway.api.ScriptCallable;
import com.inductiveautomation.perspective.gateway.messages.EventFiredMsg;
import org.python.core.Py;
import org.python.core.PyObject;

public class ApexChartModelDelegate extends ComponentModelDelegate {
    public static final String OUTBOUND_EVENT_NAME = "apexchart-response-event";

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
    public void toggleSeries(PyObject[] pyArgs, String[] keywords) {
        PyArgumentMap argumentMap =
                PyArgumentMap.interpretPyArgs(pyArgs, keywords, ApexChartModelDelegate.class, "toggleSeries");
        String seriesName = argumentMap.getStringArg("seriesName");

        if (seriesName == null) {
            throw Py.ValueError("toggleSeries argument 'seriesName' cannot be None");
        }

        log.debugf("Calling toggleSeries with '%s'", seriesName);
        JsonObject payload = new JsonObject();
        payload.addProperty("seriesName", seriesName);
        fireEvent(OUTBOUND_EVENT_NAME, payload);
    }

    // when a ComponentStoreDelegate event is fired from the client side, it comes through this method.
    @Override
    public void handleEvent(EventFiredMsg message) {
        log.debugf("Received EventFiredMessage of type: %s", message.getEventName());
    }
}