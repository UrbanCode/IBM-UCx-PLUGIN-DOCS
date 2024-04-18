
# ServiceNow - Overview

ServiceNow supports application delivery by integrating service management processes, social collaboration for IT departments, software-as-a-service delivery, and web functionality. The ServiceNow plug-in provides for integration with a ServiceNow server. This plug-in imports incident management(Beta), change management and problem management data from a ServiceNow server and provides a single view of ServiceNow incidents, change request and problems in DevOps Velocity value stream map. Data between the ServiceNow server and the DevOps Velocity serveris synchronized every five minutes.

## Compatibility

Must be running DevOps Velocity version 1.2.6 and later to use the plug-in.

The plug-in supports the ServiceNow Madrid, Orlando and Paris release.

## Versions

There is no install process for this plug-in. The ServiceNowb plug-in is identified to DevOps Velocity as a value stream integration. DevOps Velocity plug-in images are located in DockerHub and the UrbanCode Velolcity code accesses the version that you select. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-servicenow/tags).

## History
### Version 1.1.3

* **Minor bug fix**: Earlier plugin was unable to resync when incident is resolved.

### Version 1.1.2

* **Bug fix**: The previous version was failing to upload issues of large size.
* **Minor enhancement**: Previously, the number of issues per page was fixed, but now it is configurable. You can modify the number of issues per page to fetch.
* **Feature enhancement**: In automation task enabled to create and update change task.
* **Bug fix**: Fixed issue related to syncing of change and problem in servicenow schedule event.

### Version 1.1.1

* Import incidents
* Add Incident creation automation task

### Version 1.0.42

* **Minor bug fix**: Fixed bug related to proxy server change and related to automation task execution.
### Version 1.0.36

* **Removed Manual User Access Key**: From current version onwards this plugin will only support Auto Generated User Access Key feature of HCL Accelerate.
### Version 1.0.13

* Bug fix

### Version 1.0.14

*
Added HTTP proxy support

### Version 1.0.13

* Bug fix

### Version 1.0.12

* Added the capability to pull problems


### Version 1.0.9

* Added access token support.

### Version 1.0.6

* Update plugin version from 0.x.x to 1.x.x format.

### Version 0.0.4

* Initial release


|Back to ...||Latest Version|ServiceNow |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.1.3-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-servicenow/ucv-ext-servicenow%3A1.1.3.tar.7z.001)[and 1.1.3-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-servicenow/ucv-ext-servicenow%3A1.1.3.tar.7z.002)|[Readme](README.md)|[Usage](usage.md)|[Downloads](downloads.md)|
