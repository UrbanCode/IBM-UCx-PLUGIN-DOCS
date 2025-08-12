
# Jira Service Management - Usage

To use the Jira Service Management plug-in, the plug-in must be loaded and an instance created before you can configure the plug-in integration. You define configuration properties in the user interface or in a JSON file.

## Integration type

The Jira Service Management plug-in supports scheduled events integration which are listed in the following table.

| Name | Description | Interval |
| --- | --- | --- |
| syncIncidentsEvent | Sync Incidents from Jira Service Management | 5 minutes |

## Integration

To install the plug-in, perform the following steps:

1. In IBM DevOps Velocity, click **Settings** > **Integrations** > **Available**.
2. In the **Action** column for the Jira Service Management plug-in, click **Install**.

There are two methods to integrate the plug-in:

1. Using the user interface.
2. Using a JSON file

The tables in the Configuration properties topic describe the properties used to define the integration.

## Integrating the plug-in by using user interface

To integrate the plug-in using the user interface, perform the following steps:

1. In IBM DevOps Velocity, click **Settings** > **Integrations** > **Installed**.
2. In the **Action** column for the Jira Service Management plug-in, click **Add Integration**.
3. On the Add Integration dialog, enter the values for the fields to configure the integration and define communication.
4. Click **Add**.

## Integrating the plug-in by using JSON file

The JSON file contains the information for creating a value stream. Within the JSON file is a section for integrations. It is in this section that plug-in properties can be defined. Refer to the JSON sample code in the Configuration Properties section.

To integrate the plug-in using a JSON, perform the following steps:

1. Navigate to **value stream page**, and then click the necessary **value stream**.
2. Click  **wrench icon**, and then Select **Edit value stream** to modify the JSON file in the code or tree view editors.
Alternatively, you can also click Download JSON option to download the JSON file, and then select the Import JSON option to upload the revised JSON file.
3. Edit the integration information in the JSON file to add the plug-in configuration properties. Refer to JSON sample code in the Configuration Properties section more details.
4. Click **Save**.

## Configuration properties

The following tables describe the properties used to configure the integration. Each table contains the field name when using the user interface and the property name when using a JSON file.

* The General Configuration Properties table describes configuration properties used by all plug-in integrations.
* The Jira Service Management Configuration Properties table describes the configuration properties that define the connection and communications with the Jira Service Management server. When using the JSON method to integrate the plug-in these properties are coded within the `properties` configuration property.

### General Configuration table

| Name | Description | Required | Property Name |
| --- | --- | --- | --- |
| NA | The version of the plug-in that you want to use. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-jira-service-management/tags). If a value is not specified, the latest version is used. | No | image |
| Integration Name | An assigned name to the value stream. | Yes | name |
| Logging Level | The level of Log4j messages to log. Valid values are: all, debug, info, warn, error, fatal, off, and trace. The default is info. | No | loggingLevel |
| NA | List of plug-in configuration properties used to connect and communicate with the Jira Service Management server. Enclose the properties within braces. | Yes | properties |
| NA | The name of the tenant. | Yes | tenant_id |
| | Unique identifier assigned to the plugin. The value for the Jira Service Management plugin is ucv-ext-jira-service-management. | yes | type |
| IBM DevOps Velocity User Access Key | Unique identifier assigned to the plug-in. The value for the Jira Service Management plug-in is `ucv-ext-jira-service-management` | Yes | NA |

### Jira Service Management Configuration Properties table

| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| Base URL | String | The base URL of the Jira Service Management instance. | True | baseURl |
| Username | String | The username to authenticate with Jira Service Management. | True | username |
| API Token | Secure | The API Token to authenticate with Jira Service Management. | True | apiToken |
| Project Keys | Array | A comma-separated list of project keys to scope incidents to. | False | projectKeys |
| Jira Request Batch Size | Number | The number of items to request at a time from the Jira Service Management server. An increased batch size may result in excessive network traffic and performance loss or instability. | False | requestJiraBatchSize |
| Jira Request Retries | Number | Number of times to attempt each request to the Jira Service Management server (to help eliminate one-off request errors failing entire sync). | False | requestJiraRetries |
| Jira Maximum Parallel Requests | Number | The maximum number of parallel requests to make to the Jira Service Management server. More requests may result in excessive network traffic and performance loss or instability. | False | requestJiraParallelMax |
| UCV Request Batch Size | Number | The number of incidents to upload at a time from to the UCV server. An increased batch size may result in excessive network traffic and performance loss or instability. | False | requestUCVBatchSize |
| UCV Request Retries | Number | Number of times to attempt each request to the UCV server (to help eliminate one-off request errors failing entire sync). | False | requestUCVRetries |

## JSON sample code

The following example can be used as a template to include the Jira Service Management plug-in integration into the JSON file. Copy and paste the template into the JSON file and make the appropriate changes.

```json

"integrations": [ {
"type": "ucv-ext-jira-service-management",
"tenant_id": "*tenantid*",
"name": "Jira_Service_management_plugin ",
"properties": {
    "baseUrl": "*JSM_server_url*",
    "username": "*JSM_server_user_name*",
    "apiToken": "*JSM_server_apiToken*",
    "projectKeys": "*JSM_projects*"
    }
} ]

```

|Back to ...||Latest Version|Jira Service Management |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.1-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-jira-service-management/ucv-ext-jira-service-management%3A1.0.1.tar.7z.001)[and 1.0.1-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-jira-service-management/ucv-ext-jira-service-management%3A1.0.1.tar.7z.002)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
