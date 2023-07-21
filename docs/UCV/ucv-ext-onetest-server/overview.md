
# HCL OneTest Server - Overview

The HCL OneTest Server plug-in provides for integration with an OneTest server. This plug-in imports test result data from an OneTest server and saves the data as UrbanCode Velocity issues. The data is used to generate metrics. Data between the OneTest server and the UrbanCode Velocity server is synchronized every five minutes.


## Compatibility

Must be running UrbanCode Velocity version 1.3.0 and later to use the plug-in. HCL OneTest Server 10.0.2 and later is supported.

## Versions

There is no install process for this plug-in. The HCL OneTest Server plug-in is identified to UrbanCode Velocity as a value stream integration. UrbanCode Velocity plug-in images are located in DockerHub and the UrbanCode Velolcity code accesses the version that you select. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-onetest-server/tags).


## History

### Version 1.0.26

* **Minor bug fix:** Fixed bug related to test results URL generated in plugin.

### Version 1.0.17

* **Removed Manual User Access Key**: From current version onwards this plugin will only support Auto Generated User Access Key feature of Urbancode Velocity.
* **Added WorkflowId**: Under the hidden properties section of add integration page for HCL OneTest Server plugin a Workflow ID field is added. This field is optional and can be used to provide Urbancode Velocity WorkflowId - the ID of a Value Stream (VSM )to which HCL OneTest Server vulnerability data is associated.
* **Preventing Installation on Older Versions**: This version of HCL OneTest Server Plugin can only be installed on Urbancode Velocity version 3.0.0 and later
* **Added Category**:Quality is the plugin category of HCL OneTest Server.

### Version 1.0.15

* User access key related changes.

### Version 1.0.2

* Updated dataset name


### Version 1.0.2

* Update plugin version from 0.x.x to 1.x.x format

### Version 0.0.9

* Bug fixes

### Version 0.0.5

* Initial release


|Back to ...||Latest Version|HCL OneTest Server |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.26-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-onetest-server/ucv-ext-onetest-server%3A1.0.26.tar.7z.001)[and 1.0.26-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-onetest-server/ucv-ext-onetest-server%3A1.0.26.tar.7z.002)|[Readme](README.md)|[Usage](usage.md)|[Downloads](downloads.md)|
