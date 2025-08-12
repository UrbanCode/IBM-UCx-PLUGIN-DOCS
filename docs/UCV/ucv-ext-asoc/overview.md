
# HCL AppScan on Cloud (ASoC) - Overview


The HCL AppScan on Cloud (ASoC) plug-in allows for integration with the HCL Appscan on Cloud server. This plug-in uses the Appscan on Cloud REST interface to interact with the HCL Appscan on Cloud application. Data is gathered from the ASoC server and displayed as a graphical view in the DevOps Velocity portfolio.

## Compatibility

Must be running DevOps Velocity version 1.2.1 and later to use this plug-in.

## Versions

DevOps Velocity plug-in images are located in DockerHub. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-asoc/tags).

## History

### Version 3.0.25

* Upgraded plugin to support ASOC API version from V2 to V4, as V2 API are deprecated by ASOC

### Version 3.0.19

* The older versions of ASoC plug-in was not reporting critical issues. The issue is fixed.

### Version 3.0.16

* Segregated Static scan and Dynamic scan data.

### Version 3.0.12

* **Removed Manual User Access Key:** From current version onwards this plug-in will only support Auto Generated User Access Key feature of DevOps Velocity.
* **Initial Sync Date Field Added:** Under the hidden properties section of add integration page for the ASoC plug-in an Initial Sync Date field is added. This field is optional and can be used only for the first sync.
* **Added WorkflowId:** Under the hidden properties section of add integration page for ASoC plug-in a Workflow ID field is added. This field is optional and can be used to provide DevOps Velocity WorkflowId - the ID of a Value Stream (VSM )to which ASoC vulnerability data is associated.
* **Preventing Installation on Older Versions:** This version of ASoC plug-in can only be installed on DevOps Velocity version 2.5.0 and later
* **Making scheduled event optional:** The scheduled event - Sync ASoC Data has been made optional from this version onwards. To enable the scheduled event please check the box in integration properties with label Run as a Scheduled Event.

### Version 3.0.11

* Fix for Changed API.

### Version 3.0.9

* Reduced Vulnerabilities

### Version 3.0.5

* User access key related changes.

### Version 2.0.1

* Syncs historic data from ASoC. Also webhook support enabled. Note: This is a **breaking change** as the end point changes from ‘POST’ to ‘GET’

### Version 1.0.24

* Proxy support added.

### Version 1.0.18

* Bug fix.

### Version 1.0.17

* Added Build URL to link ASoC scan results in VSM.

### Version 1.0.16

* Bug fixes.

### Version 1.0.14

* Name field in Insights mapped to the scan name in ASoC.

### Version 1.0.13

* Bug fixes.

### Version 1.0.9

* Update plug-in version from 0.x.x to 1.x.x format.

### Version 0.0.4

* Initial release


|Back to ...||Latest Version|HCL AppScan on Cloud (ASoC) |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[3.0.25-File1](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-asoc/ucv-ext-asoc%3A3.0.25.tar.7z.001) [and 3.0.25-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-asoc/ucv-ext-asoc%3A3.0.25.tar.7z.002)|[Readme](README.md)|[Usage](usage.md)|[Downloads](downloads.md)|
