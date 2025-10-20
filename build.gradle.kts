import java.util.concurrent.TimeUnit


plugins {
    base
    // the ignition module plugin: https://github.com/inductiveautomation/ignition-module-tools
    id("io.ia.sdk.modl") version("0.1.1")
    id("org.barfuin.gradle.taskinfo") version "1.3.0"
}

allprojects {
    version = "__MODULE_VERSION__"
    group = "com.kyvislabs"
}

ignitionModule {
    fileName.set("apexcharts")
    name.set("Apex Charts Components")
    id.set("com.kyvislabs.apexcharts")
    moduleVersion.set("${project.version}")
    moduleDescription.set("The module provides Perspective ApexCharts components")
    requiredIgnitionVersion.set("8.3.0")
    license.set("license.html")

    moduleDependencies.put("com.inductiveautomation.perspective", "DG")

    projectScopes.putAll(
        mapOf(
            ":gateway" to "G",
            ":web" to "G",
            ":designer" to "D",
            ":common" to "GD"
        )
    )

    hooks.putAll(
        mapOf(
            "com.kyvislabs.apexcharts.gateway.GatewayHook" to "G",
            "com.kyvislabs.apexcharts.designer.DesignerHook" to "D"
        )
    )
}


val deepClean by tasks.registering {
    dependsOn(allprojects.map { "${it.path}:clean" })
    description = "Executes clean tasks and remove node plugin caches."
    doLast {
        delete(file(".gradle"))
    }
}