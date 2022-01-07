package com.kyvislabs.apexcharts.gateway;

import com.inductiveautomation.ignition.common.licensing.LicenseState;
import com.inductiveautomation.ignition.common.util.LoggerEx;
import com.inductiveautomation.ignition.gateway.model.AbstractGatewayModuleHook;
import com.inductiveautomation.ignition.gateway.model.GatewayContext;
import com.inductiveautomation.perspective.common.api.ComponentRegistry;
import com.inductiveautomation.perspective.gateway.api.ComponentModelDelegateRegistry;
import com.inductiveautomation.perspective.gateway.api.PerspectiveContext;
import com.kyvislabs.apexcharts.common.Components;
import com.kyvislabs.apexcharts.common.component.display.ApexChart;

import java.util.Optional;

public class GatewayHook extends AbstractGatewayModuleHook {

    private static final LoggerEx log = LoggerEx.newBuilder().build("Apex Charts");

    private GatewayContext gatewayContext;
    private PerspectiveContext perspectiveContext;
    private ComponentRegistry componentRegistry;
    private ComponentModelDelegateRegistry modelDelegateRegistry;

    @Override
    public void setup(GatewayContext context) {
        this.gatewayContext = context;
        log.info("Setting up Components module.");
    }

    @Override
    public void startup(LicenseState activationState) {
        log.info("Starting up GatewayHook!");

        this.perspectiveContext = PerspectiveContext.get(this.gatewayContext);
        this.componentRegistry = this.perspectiveContext.getComponentRegistry();
        this.modelDelegateRegistry = this.perspectiveContext.getComponentModelDelegateRegistry();

        if (this.componentRegistry != null) {
            log.info("Registering Components.");
            this.componentRegistry.registerComponent(ApexChart.DESCRIPTOR);
        } else {
            log.error("Reference to component registry not found, Components will fail to function!");
        }

        if (this.modelDelegateRegistry != null) {
            log.info("Registering model delegates.");
            this.modelDelegateRegistry.register(ApexChart.COMPONENT_ID, ApexChartModelDelegate::new);
        }
    }

    @Override
    public void shutdown() {
        log.info("Shutting down Component module and removing registered components.");
        if (this.componentRegistry != null) {
            this.componentRegistry.removeComponent(ApexChart.COMPONENT_ID);
        } else {
            log.warn("Component registry was null, could not unregister Components.");
        }

        if (this.modelDelegateRegistry != null) {
            this.modelDelegateRegistry.remove(ApexChart.COMPONENT_ID);
        }
    }

    @Override
    public Optional<String> getMountedResourceFolder() {
        return Optional.of("mounted");
    }

    @Override
    public Optional<String> getMountPathAlias() {
        return Optional.of(Components.URL_ALIAS);
    }

    @Override
    public boolean isFreeModule() {
        return true;
    }

    @Override
    public boolean isMakerEditionCompatible() {
        return true;
    }
}