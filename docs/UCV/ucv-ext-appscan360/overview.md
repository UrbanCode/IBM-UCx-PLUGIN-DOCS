
# HCL Appscan360 (Appscan360) - Overview


The HCL Appscan360 (Appscan360) plug-in allows for integration with the HCL Appscan360 server. This plug-in uses the Appscan360 REST interface to interact with the HCL Appscan360 application. Data is gathered from the Appscan360 server and displayed as a graphical view in the DevOps Velocity portfolio.

## Compatibility

Must be running DevOps Velocity version 5.3.1 and later to use this plug-in.
The table below lists the compatible versions of the HCL Appscan360 plug-in and HCL DevOps Velocity:

| DevOps Velocity Version | HCL Appscan360 Plug-in Versions |
| --- | --- |
5.3.1 or later | 1.0.10 |
5.3.0 or later | 1.0.6 |

## Versions

DevOps Velocity plug-in images are located in DockerHub. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-appscan360/tags).

## History


### Version 1.0.10
* **Added Software Bill of Materials (SBOM) support:** Integrated SBOM reporting with AppScan 360 to retrieve and ingest SBOM data from security scans.

* **Expanded SBOM format support:** Added support for processing SPDX formats to capture software component and package information.

* **Enhanced software component visibility:** SBOM data includes package, library, and license information, providing better visibility into the application's software dependencies.

* **Improved vulnerability analysis:** Integrated SBOM data to support analysis of vulnerabilities associated with software components and dependencies.

### Version 1.0.6
* **Initial release:** The initial release of the HCL AppScan360 plug-in supports SAST, DAST, SCA, and IAST metrics. You can now view the Static Application Security Testing (SAST), Dynamic Application Security Testing (DAST), and Software Composition Analysis (SCA) scan results as dot-indicator metrics in Velocity and Insights, with gating support. You can also view the Interactive Application Security Testing (IAST) scan results in Insights.