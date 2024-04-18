# Rally - Usage

To use the Rally plug-in, the plug-in must be loaded and an instance created before you can configure
the plug-in integration. Configuration properties are defined using the product user interface or a JSON file.

## Integration type

The Rally plug-in supports scheduled events integration. There is only one scheduled
event which is described in the following table.

| Name | Description |
| --- | --- |
| syncRallyDataEvent | Queries the Rally server for stories and defects to import into DevOps Velocity issues. If the Rally data already exists as an issue, the issue is updated. |

## Integration

There are two methods to integrate the plug-in:

* Using the user interface
* Using a JSON file

The tables in the *Configuration Properties* topic describe the properties used to define the integration.

### Using the user interface

1. From the Plugins page, click **Settings** > **Integrations** > **Plugins**.
2. Under the **Action** column for the plug-in, click **Add Integration**.
3. On the Add Integration page enter values for the fields used to configure the integration and define communication.
4. Click **Save**.

### Using a JSON file

The JSON file contains the information for creating a value stream. Within the JSON
file is a section for integrations. It is in this section that plug-in properties can be defined.

1. From a value stream page, download the value stream map. The value stream map is a JSON file used to define integrations.
2. Edit the JSON file to include the plug-in configuration properties.
3. Save and upload the JSON file. This replaces the current JSON file with the new content.
4. View the new integration on the Integrations page.

## Configuration Properties

The following tables describe the properties used to configure the integration. Each table contains the field name when using the user interface and the property name when using a JSON file.

* The General Configuration Properties table describes configuration properties used by all plug-in integrations.
* The Rally Configuration Properties table describes the configuration properties that define the connection and communications with the Rally server. When using the JSON method to integrate the plug-in these properties are coded within the `properties` configuration property.

### General Configuration Properties

| Name | Description | Required | Property Name |
| --- | --- | --- | --- |
| NA | The version of the plug-in that you want to use. To view available versions, click the **Version History** tab. If a value is not specified, the latest version is used. | No | image |
| Integration Name | An assigned name to the value stream. | Yes | name |
| Logging Level | The level of Log4j messages to display in the log file. Valid values are: all, debug, info, warn, error, fatal, off, and trace. | No | loggingLevel |
| NA | List of configuration properties used to connect and communicate with the Rally server. Enclose the  properties within braces. | Yes | properties |
|  | The name of the tenant. | Yes | tenant_id |
| NA | Unique identifier assigned to the plug-in. The value for the Rally plug-in is `ucv-ext-rally` | Yes | type |

### Rally Configuration Properties

| Name | Type | Description | Required | Project Name |
| --- | --- | --- | --- | --- |
| API Token | Secure | The API token used to authenticate with the Rally server. You must specify a value for either this property or username and password properties. | No | apiKey |
| Projects | Array | A list of Rally project names to import data. | No | projects |
| Password | Secure | The password used to authenticate with the Rally server. Specify either the username and password properties or the apiKey property. | No | password |
| URL | String | The URL of the Rally server. The default is https://rally1.rallydev.com. | Yes | baseUrl |
| User Name | String | The user name used to authenticate with the Rally server. Specify either the username and password properties or the apiKey property. | No | username |
| ucvAccessKey | Secure | The user access key used to authenticate with the IBM DevOps Velocity server. | Yes | ucvAccessKey |
| Workspace | String | The name of the Rally workspace to use on request. This property is required if you are not using a default workspace. | No | workspace |
| Proxy Server | String | The URL of the proxy server including the port number. | No | proxyServer |
| Proxy User Name | String | The user name used to authenticate with the proxy server. | No | proxyUsername |
| Proxy Password | String | The password used to authenticate with the proxy server. | No | proxyPassword |

## Example

The following example can be used as as template to include the Rally plug-in integration into the JSON file. Copy and paste the template into the JSON file and make the appropriate changes.

```json

"integrations": [
{
"type": "ucv-ext-rally",
"name": "my-rally",

"tenant_id": "5ade13625558f2c6688d15ce",
"logginglevel": "log_level_value",
"properties": 
    {
        "baseUrl": "https://rally1.rallydev.com",
        "username": "my_username",
        "password": "my_password",
        "workspace": "Workspace1",
        "projects": [
            "Sample Project"
            ],
        "logLevel": "info",
        "proxyServer": "proxy_server_url_with_port",
        "proxyUsername": "proxy_server_user_name",
        "proxyPassword": "proxy_server_password"
    }
}
]
```

|Back to ...||Latest Version|Rally |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.43](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-rally/ucv-ext-rally%3A1.0.43.tar.7z.001)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
