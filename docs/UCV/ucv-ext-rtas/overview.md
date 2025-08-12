
# IBM DevOps Test Hub - Overview

The IBM DevOps Test Hub plug-in provides for integration with an IBM DevOps Test Hub server. This plug-in imports test result data from an IBM DevOps Test Hub server and saves the data as IBM DevOps Velocity issues. The data is used to generate metrics. Data between the IBM DevOps Test Hub and the IBM DevOps Velocity server is synchronized every five minutes.

## Compatibility

Must be running IBM DevOps Velocity version 2.5.0 and later to use the plug-in.

IBM DevOps Test Hub 10.1.0 or higher and later is supported.

## Versions

IBM DevOps Velocity plug-in images are located in DockerHub. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-rtas/tags).

## History

### Version 1.0.38

* **Bug fix**: Fixed an issue where the callback step failed when a trailing slash (/) was present at the end of the URL. The plugin now automatically detects and removes trailing slashes to ensure proper URL formatting and successful callback execution.
* **Rebranding**: The plug-in name is changed from Rational Test Automation Server to IBM DevOps Test Hub.

### Version 1.0.34

* **Minor bug fix**:Fixed bug related to test results URL generated in plugin.
* **Removed Manual User Access Key**: From current version onwards this plugin will only support Auto Generated User Access Key feature of HCL DevOps Velocity.
* **Added WorkflowId**: Under the hidden properties section of add integration page for rational-test-automation-server plugin a Workflow ID field is added. This field is optional and can be used to provide HCL DevOps Velocity WorkflowId - the ID of a Value Stream (VSM )to which rational-test-automation-server vulnerability data is associated.

### Version 1.0.22

* User access key related changes.

### Version 1.0.6

* Bug fixes

### Version 1.0.5

* Configure logger wrapper

### Version 1.0.3

* Initial release


|Back to ...||Latest Version|IBM DevOps Test Hub |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.38-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-rtas/ucv-ext-rtas%3A1.0.38.tar.7z.001)[and 1.0.38-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-rtas/ucv-ext-rtas%3A1.0.38.tar.7z.002)|[Readme](README.md)|[Usage](usage.md)|[Downloads](downloads.md)|
