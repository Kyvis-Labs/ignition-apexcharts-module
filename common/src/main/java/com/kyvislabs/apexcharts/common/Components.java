package com.kyvislabs.apexcharts.common;

import com.inductiveautomation.perspective.common.api.BrowserResource;

import java.util.Set;

public class Components {

    public static final String MODULE_ID = "com.kyvislabs.apexcharts";
    public static final String URL_ALIAS = "kyvislabs";
    public static final String COMPONENT_CATEGORY = "Kyvis Labs";
    public static final Set<BrowserResource> BROWSER_RESOURCES =
            Set.of(
                    new BrowserResource(
                            "apex-charts-components-js",
                            String.format("/res/%s/Components.js", URL_ALIAS),
                            BrowserResource.ResourceType.JS
                    ),
                    new BrowserResource("apex-charts-components-css",
                            String.format("/res/%s/Components.css", URL_ALIAS),
                            BrowserResource.ResourceType.CSS
                    )
            );
}
