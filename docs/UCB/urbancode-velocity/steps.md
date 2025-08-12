
UrbanCode Velocity - Steps
==========================

# Steps


### Steps





Process steps in the Urbancode Velocity plug-in
-----------------------------------------------

* [Upload Metrics Data](#upload_metrics_data)
* [Upload build data](#upload_build_data)


Upload Metrics Data
-------------------

Use this step to upload a metrics data to UrbanCode Velocity.


| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| Application Name | String | The name of the application that UrbanCode Velocity uses to associate the metric with. For example: appName: My Test App. | Yes | appName |
| Data Format | String | The format of the data in the metrics file that UrbanCode Velocity uses to process the metric file. For example: dataFormat: junitXML. | Yes | dataFormat |
| Data Set | String | The type of the dataset that UrbanCode Velocity uses to associate the metric with. For example: dataSet: Unit Tests. | Yes | dataSet |
| Metric Definition Name | String | The name of the metric that UrbanCode Velocity uses toassociate the metric with. For example: metricDefinitionName: Unit Tests. | Yes | metricDefinitionName |
| Plugin Type | String | The type of the plugin UrbanCode Velocity uses to process the metric file. For example: pluginType: junitXML. | Yes | pluginType |
| UrbanCode Velocity Server |  | Select an UrbanCode Velocity server from the list or specify a property whose value is the property sheet UUID of the relevant UrbanCode Velocity integration. | Yes | automation |
| Value | String | Value that UrbanCode Velocity uses to process the metric data. Provide the value in key:value format. For example: value:{passed: 30,failed: 0}``. | Yes | value |

Upload build data
-----------------

Upload build information to UrbanCode Velocity.


| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| Application Name | String | The applications name to be used in UrbanCode Velocity. | Yes | applicationName |
| Build Name | String | The name to use for identifying this build in UrbanCode Velocity. | Yes | buildName |
| Requester | String | The name of the requester. | No | requesterName |
| Status | String | The status of the build. For example: success. | Yes | status |
| UrbanCode Velocity Server |  | Select a UrbanCode Velocity server from the list or specify a property whose value is the property sheet UUID of the relevant UrbanCode Velocity integration. | Yes | automation |
| Version Name | String | The version name to be associated with the build information in UrbanCode Velocity. | Yes | versionName |


Roles in the Urbancode Velocity plug-in
---------------------------------------

The plug-in adds these roles automatically to resources. You cannot add these roles manually.


* [UrbanCode Velocity](#urbancode_velocity_role)


UrbanCode Velocity
------------------


| Name | Type | Description | Reference |
| --- | --- | --- | --- |
| Access Key | Password | The user access key to use for authenticating requests that are sent to UrbanCode Velocity. |  |
| Tenant Id | String | The tenant Id of the UrbanCode Velocity server. |  |
| URL | String | The UrbanCode Velocity server URL including protocol and port, if needed. Example: https://ucv.domain.com:8444 |  |


|Back to ...||Latest Version|UrbanCode Velocity ||
| :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[0]()|[Readme](README.md)|[Overview](overview.md)|
