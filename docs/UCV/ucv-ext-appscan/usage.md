
# HCL AppScan Enterprise (ASE) - Usage


To use the AppScan Enterprise plug-in you must define the integration, create a value stream, and upload the integration.

The value stream map contains the properties, you will use to define the plug-in integration. Basically, the plug-in integration is defined with a value stream within the DevOps Velocity user interface. Defining the integration includes defining configuration properties that connect the DevOps Velocity server to the AppScan Enterprise server.

The basic flow to use the plug-in includes:

1. Download the value stream map. The value stream map is a JSON file used to define integrations.
2. Edit the JSON file to include the plug-in configuration properties.
3. Save and upload the JSON file. This replaces the current JSON file with the new content.
4. View the new integration on the Integration user interface page.

## Send HTTP PUT

To gather data, send an HTTP PUT request to your endpoint:


```
https:///pluginEndpoint//appscan/callback
```

The payload for this PUT is ```{"application":"", "buildUrl": ""}```.

1. application – The application name from the scan ran in Appscan Enterprise. It is a mandatory field to render the scan results in Insights
2. buildUrl – The build URL from Jenkins or any other CI/CD tool. It is an optional field which links the Appscan Enterprise scan results with VSM

## Integration type

The AppScan Enterprise plug-in supports endpoint integration which are listed in the following table.

| Name | Path |Method |
| --- | --- | --- |
| AppScan Callback | appscan/callback | Put | 

## Integration

From the user interface Value Steam page, click **Upload** to upload the value stream map which is a JSON file.

The JSON file contains the information for creating a value stream and integrating with the AppScan Enterprise server. The following table describes the information for the creating a DevOps Velocity value stream map.


| Name | Description | Required |
| --- | --- | --- |
| image | The version of the plug-in that you want to use. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-appscan/tags). If a value is not specified, the latest version is used. | No |
| name | An assigned name to the value stream. | Yes |
| properties | List of [configuration properties](#properties) used to connect and communicate with the AppScan Enterprise server. Enclose the properties within braces. | Yes |
| tenant\_id | The name of the tenant. | Yes |
| type | Unique identifier assigned to the plug-in. The value for the AppScan Enterprise plug-in is `appscanPlugin` | Yes |

## Configuration Properties


The configuration properties which are included in the `properties` field are unique to the AppScan Enterprise plug-in and define the connection and communication to the AppScan Enterprise server.


| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| Password | Secure | The password to authenticate with the AppScan Enterprise server. | Yes | password |
| DevOps Velocity User Access Key | Secure | The user access key to authenticate with the DevOps Velocity server. | Yes | ucvAccessKey |
| User Name | String | The user name to use to authenticate with the AppScan Enterprise server. | Yes | username |
| URL | String | The URL of the AppScan Enterprise server. Include the port number. | Yes | url |
| Run as Scheduled Event | Boolean | Check the box to run the intergration as Scheduled Event. | No | isScheduledEvent |
| Get Issue Level Data | Boolean | Check the box to get issue level data. | No | getIssueLevelData |
| Applications (Newline seprated list) | Multiline | Newline seprated list of application names. If kept empty all applications will be synced. | No | applications |
| Workflow Id | String | The value stream that this metric is associated. | No | workflowId |





|Back to ...||Latest Version|HCL AppScan Enterprise (ASE) |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[2.0.51-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-appscan/ucv-ext-appscan%3A2.0.51.tar.7z.001)[and 2.0.51-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-appscan/ucv-ext-appscan%3A2.0.51.tar.7z.002)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
