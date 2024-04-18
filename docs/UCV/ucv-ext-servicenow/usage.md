
# ServiceNow - Usage

To use the ServiceNow plug-in you must define the integration, create a value stream, and upload the integration.

The value stream map contains the properties, you will use to define the plug-in integration. Basically, the plug-in integration is defined with a value stream within the DevOps Velocity user interface. Defining the integration includes defining configuration properties that connect the DevOps Velocity server to the ServiceNow server.

The basic flow to use the plug-in includes:

1. Download the value stream map. The value stream map is a JSON file used to define integrations.
2. Edit the JSON file to include the plug-in configuration properties.
3. Save and upload the JSON file. This replaces the current JSON file with the new content.
4. View the new integration on the Integration user interface page.

## Integration type

The ServiceNow plug-in supports scheduled events integration which are listed in the following table.

| Name | Description |
| --- | --- |
| syncIncidentData | Queries the ServiceNow repository for Incidents |
| syncChangeData | Queries the ServiceNow repository for Change request |
| syncProblemData | Queries the ServiceNow repository for Problems |
| ServiceNowWaitChangeTask | Checking all release Event task waiting field status |
| ServiceNowWaitRequests | Checking all release Event task waiting field status |

## Integration

To create a value stream, complete the following tasks.

1. From the user interface Value Streams page, click **Create** to create a new value stream for the integration.
2. Locate and open the value stream on the Value Streams page.
3. Click **Download Sample** and save the same JSON value stream file.
4. Edit the file and include the properties needed to define the integration.
5. Click **Upload** to upload the JSON file. The JSON file contains the information for creating a value stream and integrating with the ServiceNow server. The following table describes the information for the creating a DevOps Velocity value stream map.


| Name | Description | Required |
| --- | --- | --- |
| image | The version of the plug-in that you want to use. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-servicenow/tags). If a value is not specified, the latest version is used. | No |
| name | An assigned name to the value stream. | Yes |
| properties | List of [configuration properties](#properties) used to connect and communicate with the ServiceNow server. Enclose the properties within braces. | Yes |
| loggingLevel | The level of Log4j messages to log. Valid values are: all, debug, info, warn, error, fatal, off, and trace. The default is info. | No |
| tenant\_id | The name of the tenant. | Yes |
| type | Unique identifier assigned to the plug-in. The value for the ServiceNow plug-in is `ucv-ext-servicenow` | Yes |

## Configuration Properties

The configuration properties which are included in the `properties` field are unique to the ServiceNow plug-in and define the connection and communication to the ServiceNow server.


| Name | Type | Description | Required | Project Name |
| --- | --- | --- | --- | --- |
| Access Token | Secure | The access token used to authenticate with the ServiceNow server. You can use either this property or the Password property to authenticate with the server. | No | accessToken |
| Password | Secure | The password used to authenticate with the ServiceNow server. You can use either this property or the Access Token property to authenticate with the server. | No | password |
| DevOps Velocity User Access Key | Secure | The user access key to authenticate with the DevOps Velocity server. | Yes | ucvAccessKey |
| URL | String | The URL of the ServiceNow server. | Yes | baseUrl |
| User Name | String | The user name used to authenticate with the ServiceNow server. | Yes | username |
| Proxy Server | String | The URL of the proxy server including the port number. | No | proxyServer |
| Proxy User Name | String | The user name used to authenticate with the proxy server. | No | proxyUsername |
| Proxy Password | String | The password used to authenticate with the proxy server. | No | proxyPassword |
| Page Size | String | The number of issues retrieved per page. | No | pageSize |

## Example

The following example can be used as as template to include the ServiceNow plug-in integration into the JSON file. Copy and paste the template into the JSON file and make the appropriate changes.


```

integrations": [
{
"type": "ucv-ext-servicenow",
"name": "Plug-in
for ServiceNow",
"tenant_id": "*tenant\_id*",
"logginglevel": "info",
"properties": {

"ucvAccessKey": "*DevOpsvelocity\_user\_accesskey*",
"baseUrl": "*url\_servicenow\_server*",

"username": "*user\_name*",
"password": "*pass\_word*",
"proxyServer": "*proxy\_server\_url*",

"proxyUsername": "*proxy\_server\_user\_name*",
"proxyPassword": "*proxy\_server\_password*"

}``
}``
]

```

## Example using access key.


```

integrations": [
{
"type": "ucv-ext-
servicenow",
"name": "Plug-in for ServiceNow",
"tenant_id": "*tenant\_id*",
"logginglevel": "info",

"properties": {
"ucvAccessKey": "*DevOpsvelocity\_user\_accesskey*",
"baseUrl":
"*url\_servicenow\_server*",
"username": "*user\_name*",
"accessToken": "*access\_token*",

"proxyServer": "*proxy\_server\_url*",
"proxyUsername": "*proxy\_server\_user\_name*",

"proxyPassword": "*proxy\_server\_password*"
}``
}``
]

```





|Back to ...||Latest Version|ServiceNow |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.1.3-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-servicenow/ucv-ext-servicenow%3A1.1.3.tar.7z.001)[and 1.1.3-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-servicenow/ucv-ext-servicenow%3A1.1.3.tar.7z.002)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
