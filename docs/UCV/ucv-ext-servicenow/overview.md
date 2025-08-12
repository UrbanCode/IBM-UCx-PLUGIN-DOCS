
# ServiceNow - Overview

The ServiceNow plug-in provides for integration with a ServiceNow server. This plug-in imports incident management (Beta), change management and problem management data from a ServiceNow server and provides a single view of ServiceNow incidents, change requests, and problems in an IBM DevOps Velocity value stream map. Data between the ServiceNow server and the IBM DevOps Velocity server is synchronized every five minutes.

## Compatibility

The plugin is compatible with following versions:

IBM DevOps Velocity 5.1.6 or later

## Versions

IBM DevOps Velocity plug-in images are located in DockerHub and the IBM DevOps Velocity code accesses the version that you select. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-servicenow/tags).

## History

### Version 1.1.16

* **Authentication Type Selection**: Added a dropdown feature to allow users to select the desired authentication method (Basic, Bearer, or OAuth) when configuring plugin integrations.
**Note**: This feature requires Velocity version 5.1.6 or higher.
* **Bug fix**: Resolved an issue where the Executed By column did not display the username for non-admin users running automation tasks. Additionally the tasks were not completing as expected—this has now been fixed.
* **Error Handling**: Improved error detection for hibernated ServiceNow instances. Previously the plugin reported success with no data synced. Now it properly throws an error when the instance is hibernated.

### Version 1.1.13

* **Feature enhancement**: ServiceNow now supports user-defined fields, to enable mapping of these fields to Velocity fields, a custom field mapping option is introduced within the ServiceNow plug-in. Additionally, ServiceNow allows custom values for any field. To implement the change failure rate matrix, it is essential to determine which change requests have a failed status, making value mapping necessary.

### Version 1.1.11

* **Replica Server Name field addition**: The index.js file now contains a replica server name field. Entering any non-empty string value in this field will enable the read-only replica.
* **Support for CHANGE_REQUEST normalized type**: A new normalized type  CHANGE_REQUEST has been added. In the value stream management page, this normalized type will be visible in the type filter for the ServiceNow plug-in integration.
* **Bug fix**: The planned start and end date provided when creating the change request through the automation task did not match when reviewed in the ServiceNow application after the task was executed. This problem is fixed.
* **Enhancements in integration page**: The Add Integration page now shows an error if you specify an invalid JSON format in the Resource Types and Sys_params fields. 

### Version 1.1.10

* All scheduled events have been combined into a single unified event, improving performance. This reduces redundancy and simplifies configuration for users.

### Version 1.1.8

OAuth 2.0 Authentication: 

Implemented OAuth 2.0 authentication for secure communication with third-party services.

* OAuth 2.0 client credentials flow added for ServiceNow API integration.
* Refresh token mechanism introduced for automatic token renewal when the access token expires.

### Version 1.1.6

* We've added a new field for Resource Types and Sys_params, which will synchronize events based on the provided sys_params.
* When the feature flag is enabled, all data collection queries will read from the read replica instance.

### Version 1.1.5

* **Bug fix**: Removed drop down feature in update change request and change task and wait changes automation task which was implemented to select change request number as it was uploading more data to integration details. Now user can enter change request number manually.
* **Bug fix**: Enabled to create standard and emergency change request in create change request and change task automation task by changing api request made to create. (earlier it was creating only normal change)

### Version 1.1.4

* **Add initial sync:** Under the hidden properties section of add integration page for the plug-in an Initial Sync Date field is added. This field is optional and can be used only for the first sync.
* **Resync functionality:** After integration plug-in provides an option to perform either full resync or resync from selected date so that plug-in resync again.
* **Output Property field added:** For automation task create change request and change task output property field is added which stores system id of change request when created and for change task output property is provided inside object under create change task field.
* **Wait change task:** A new automation task is created for waiting change task.

### Version 1.1.3

* **Minor bug fix**: Earlier plug-in was unable to resync when incident is resolved.
* **Feature Enhancement**: Implemented drop down to select change request number in update change request and change task and wait changes automation tasks.

### Version 1.1.2

* **Bug fix**: The previous version was failing to upload issues of large size.
* **Minor enhancement**: Previously, the number of issues per page was fixed, but now it is configurable. You can modify the number of issues per page to fetch.
* **Feature enhancement**: In automation task enabled to create and update change task.
* **Bug fix**: Fixed issue related to syncing of change and problem in servicenow schedule event.

### Version 1.1.1

* Import incidents.
* Add Incident creation automation task.

### Version 1.0.42

* **Minor bug fix**: Fixed bug related to proxy server change and related to automation task execution.

### Version 1.0.36

* **Removed Manual User Access Key**: From current version onwards this plug-in will only support Auto Generated User Access Key feature of IBM Devops Velocity.

### Version 1.0.13

* Bug fix

### Version 1.0.14

* Added HTTP proxy support.

### Version 1.0.13

* Bug fix

### Version 1.0.12

* Added the capability to pull problems.

### Version 1.0.9

* Added access token support.

### Version 1.0.6

* Update plug-in version from 0.x.x to 1.x.x format.

### Version 0.0.4

* Initial release


|Back to ...||Latest Version|ServiceNow |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All plug-ins](../../index.md)|[Velocity plug-ins](../README.md)|[1.1.16-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-servicenow/ucv-ext-servicenow%3A1.1.16.tar.7z.001)[and 1.1.16-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-servicenow/ucv-ext-servicenow%3A1.1.16.tar.7z.002)|[Readme](README.md)|[Usage](usage.md)|[Downloads](downloads.md)|