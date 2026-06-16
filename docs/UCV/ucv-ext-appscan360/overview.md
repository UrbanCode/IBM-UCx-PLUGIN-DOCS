
# HCL Appscan360 (Appscan360) - Overview


The HCL Appscan360 (Appscan360) plug-in allows for integration with the HCL Appscan360 server. This plug-in uses the Appscan360 REST interface to interact with the HCL Appscan360 application. Data is gathered from the Appscan360 server and displayed as a graphical view in the DevOps Velocity portfolio.

## Compatibility

Must be running DevOps Velocity version 2.5.0 and later to use this plug-in.
The table below lists the compatible versions of the IBM Appscan360 plug-in and IBM DevOps Velocity:

| DevOps Velocity Version | IBM Appscan360 Plug-in Versions |
| --- | --- |
| 5.2.5 or later | 3.0.28 |

## Versions

DevOps Velocity plug-in images are located in DockerHub. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-appscan360/tags).

## History

### Version 1.0.2

* Implemented support for SAST and DAST scan data ingestion from Appscan360. Scan results are fetched and displayed as metrics within Velocity using dot indicators.
#### Insights Metrics
* **Appscan360 Static Scan** – Displays SAST scan results. 
* **Appscan360 Dynamic Scan** – Displays DAST scan results.