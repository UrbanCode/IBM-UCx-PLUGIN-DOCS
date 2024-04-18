
# Rational Test Automation Server - Overview

The Rational Test Automation Server plug-in provides for integration with an Rational Test Automation Server server. This plug-in imports test result data from an Rational Test Automation Server server and saves the data as DevOps Velocity issues. The data is used to generate metrics. Data between the Rational Test Automation server and the DevOps Velocity server is synchronized every five minutes.

## Compatibility

Must be running DevOps Velocity version 1.3.0 and later to use the plug-in.

Rational Test Automation Server 10.1.0 or higher and later is supported.

## Versions

DevOps Velocity plug-in images are located in DockerHub. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-rtas/tags).

## History

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



|Back to ...||Latest Version|Rational Test Automation Server |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.34-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-rtas/ucv-ext-rtas%3A1.0.34.tar.7z.001)[and 1.0.34-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-rtas/ucv-ext-rtas%3A1.0.34.tar.7z.002)|[Readme](README.md)|[Usage](usage.md)|[Downloads](downloads.md)|
