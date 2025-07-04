
# DevOps Test Hub - Overview

The DevOps Test Hub plug-in provides an integration with DevOps Test Hub. This plug-in imports the test result data from DevOps Test Hub and saves the data as metrics in DevOps Velocity insights.

## Compatibility

Must be running DevOps Velocity version 2.5.0 and later to use the plug-in. DevOps Test Hub 10.0.2 and later is supported.

## Versions

There is no install process for this plug-in. The DevOps Test Hub plug-in is identified to DevOps Velocity as a value stream integration. DevOps Velocity plug-in images are located in DockerHub and the IBM DevOps Velocity code accesses the version that you select. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-onetest-server/tags).


## History

### Version 1.0.30

* **Bug fix**: Fixed an issue where the callback step failed when a trailing slash (/) was present at the end of the URL. The plugin now automatically detects and removes trailing slashes to ensure proper URL formatting and successful callback execution.

### Version 1.0.28

* **Plugin name update**: The plugin name has been changed from HCL DevOps Test Server to DevOps Test Hub.

### Version 1.0.27

* **Rebranding** :Name of the Plugin is changed from HCL OneTest Server to HCL DevOps Test Server..

### Version 1.0.26

* **Minor bug fix** :Fixed bug related to test results URL generated in plugin.

### Version 1.0.17

* **Removed Manual User Access Key**: From current version onwards this plugin will only support Auto Generated User Access Key feature of DevOps Velocity.
* **Added WorkflowId**: Under the hidden properties section of add integration page for HCL DevOps Test Server plugin a Workflow ID field is added. This field is optional and can be used to provide DevOps Velocity WorkflowId - the ID of a Value Stream (VSM )to which HCL DevOps Test Server vulnerability data is associated.
* **Preventing Installation on Older Versions**: This version of HCL DevOps Test Server Plugin can only be installed on DevOps Velocity version 3.0.0 and later
* **Added Category**:Quality is the plugin category of HCL DevOps Test Server.

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


|Back to ...||Latest Version|DevOps Test Hub |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.30-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-onetest-server/ucv-ext-onetest-server%3A1.0.30.tar.7z.001)[and 1.0.30-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-onetest-server/ucv-ext-onetest-server%3A1.0.30.tar.7z.002)|[Readme](README.md)|[Usage](usage.md)|[Downloads](downloads.md)|
