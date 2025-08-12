
# CollabNet VersionOne - Usage

To use the VersionOne plug-in, the plug-in must be loaded and an instance created before you can
configure the plug-in integration. You define configuration properties in the user interface or in a JSON file.


## Integration type

The VersionOne plug-in supports scheduled events integration which are listed in the
following table.

| Name | Description |
| --- | --- |
| SyncV1WorkItems | Queries the VersionOne server for new or updated work items. |

## Integration

There are two methods to integrate the plug-in:

* Using the user interface
* Using a JSON file

The tables in the Configuration properties topic describe the properties used to define the integration.

### Using the user interface

1. From the Plugins page, click **Settings** > **Integrations** > **Plugins**.
2. Under the **Action** column for the plug-in, click **Add Integration**.
3. On the Add Integration page enter values for the fields used to configure the integration and define communication.
4. Click **Save**.

### Using a JSON file

The JSON file contains the information for creating a value stream. Within the JSON file is a section for
integrations. It is in this section that plug-in properties can be defined.

1. From a value stream page, download the value stream map. The value stream map is a JSON file used to define integrations.
2. Edit the JSON file to include the plug-in configuration properties.
3. Save and upload the JSON file. This replaces the current JSON file with the new content.
4. View the new integration on the Integrations page.

## Configuration properties

The following tables describe the properties used to configure the integration. Each table contains the field name when using the user interface and the property name when using a JSON file.

* The General Configuration Properties table describes configuration properties used by all plug-in integrations.
* The CollabNet VersionOne Configuration Properties table describes the configuration properties that define the connection and communications with the CollabNet VersionOne
server. When using the JSON method to integrate the plug-in these properties are coded within the `properties` configuration property.

### General Configuration Properties

| Name | Description | Required | Property Name |
| --- | --- | --- | --- |
| NA | The version of the plug-in that you want to use. To view available versions, click the **Version History** tab. If a value is not specified, the version named latest is used. | No | image |
| Integration Name | An assigned name to the value stream. | Yes | name |
| Logging Level | The level of Log4j messages to display in the log file. Valid values are: all, debug, info, warn, error, fatal, off, and trace. | No | loggingLevel |
| NA | List of plug-in configuration properties used to connect and communicate with the VersionOne server. Enclose the properties within braces. | Yes | properties |
|NA | The name of the tenant. | Yes | tenant\_id |
| NA | Unique identifier assigned to the plug-in. The value for the VersionOne plug-in is `ucv-ext-versionone` | Yes | type |

### CollabNet VersionOne Configuration Properties

| Name | Type | Description | Required | Hidden | Project Name |
| --- | --- | --- | --- | --- | --- |
| AccessToken | Secure | The access token to authenticate with the VersionOne server. Either the Password or AccessToken property must contain a value. Do not specify a value for both at the same time. | No | No | accessToken |
| Password | Secure | The password used to authenticate with the VersionOne server. Either the Password or AccessToken property must contain a value. Do not specify a value for both at the same time. | No | No | password |
| Projects | Array | A list of VersionOne projects from which work items are imported. | Yes | No | projects |
| Proxy Password | Secure | The password used to authenticate with the proxy server. | No | Yes | proxyPassword |
| Proxy Server | String | The URL of the proxy server including the port number. The URL protocol can be http or https. | No | Yes | proxyServer |
| Proxy User Name | String | The user name used to authenticate with the proxy server. | No | Yes | proxyUsername |
| DevOps Velocity User Access Key | Secure | The user access key generated from DevOps Velocity used to authenticate with the DevOps Velocity server. | Yes | No | ucvAccessKey |
| URL | String | The URL of the VersionOne server. | Yes | No | serverUrl |
| User ID | String | The user name used to authenticate with the VersionOne server. | Yes | No | userId |

## Example

The following example can be used as as template to include the JIRA plug-in integration into the JSON file. Copy and paste the template into the JSON file and make the appropriate changes.


```

{
"type": "ucv-ext-versionone",
"tenant_id": "tenantId",
"name":
"CollabNet VersionOne",
"properties":{
"serverUrl":"https://www53.v1host.com/XYZ",
"projects" : ["Sample:
Call Center Product"],
"userId" : "admin",
"accessToken" : "accesstoken1",
"ucvAccessKey":"ucv-access-key",

"proxyServer": "http://123.456.1.4:1128",
"proxyUsername":"admin",
"proxyPassword":"12345"
}``
}``

```



|Back to ...||Latest Version|CollabNet VersionOne |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.11](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-versionone/ucv-ext-versionone-1.0.11.tar.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
