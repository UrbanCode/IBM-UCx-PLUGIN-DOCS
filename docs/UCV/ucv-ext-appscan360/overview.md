
# HCL Appscan360 (Appscan360) - Overview


The HCL Appscan360 (Appscan360) plug-in allows for integration with the HCL Appscan360 server. This plug-in uses the Appscan360 REST interface to interact with the HCL Appscan360 application. Data is gathered from the Appscan360 server and displayed as a graphical view in the DevOps Velocity portfolio.

## Compatibility

Must be running DevOps Velocity version 5.2.5 and later to use this plug-in.
The table below lists the compatible versions of the HCL Appscan360 plug-in and HCL DevOps Velocity:

| DevOps Velocity Version | HCL Appscan360 Plug-in Versions |
| --- | --- |
5.3.0 or later | 1.0.6 |
5.3.1 or later | 1.0.7

## Versions

DevOps Velocity plug-in images are located in DockerHub. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-appscan360/tags).

## History

### Version 1.0.7
* Added IAST scan result reporting in Insights.
* **Added SBOM support in Insights**, displaying package, license, and library information.
* **Added SBOM reports** with detailed package and vulnerability information.

### Version 1.0.6

* **New:** Added support for SAST gating and SCA and IAST scan data ingestion from AppScan 360.
* **SAST and DAST:** Scan results are fetched from AppScan 360 and displayed as metrics in Velocity using dot indicators.
* **SCA (Software Composition Analysis):** Added support for ingesting and displaying SCA scan results.
* **IAST (Interactive Application Security Testing):** Added support for ingesting IAST scan results. IAST metrics are displayed on the Insights page.
* **Bug Fix:** Fixed an issue with the AppScan360 plugin ID that could cause Loop installation to fail when AppScan360 integration was enabled before the plugin was installed.
* **Plugin ID:** Updated the AppScan360 plugin ID to the correct `ucv-ext-appscan360` value for consistency with other Velocity plugins.