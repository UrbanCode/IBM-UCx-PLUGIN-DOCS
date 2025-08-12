
# Handlebar Reporter - Usage

To use the Handlebar Reporter plug-in, the plug-in must be loaded and an instance created before you
can configure the plug-in integration. You define configuration properties in the user interface or in a JSON file.

## Integration type

The Handlebar Reporter plug-in supports scheduled events integration. There is one scheduled event which is described in the following table.

| Name | Description |
| --- | --- |
| handlebarsRunner | Generates a report. |

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

The JSON file contains the information for creating a value stream. Within the JSON file is a section for integrations. It is in this section that plug-in properties can be defined.

1. From a value stream page, download the value stream map. The value stream map is a JSON file used to define integrations.
2. Edit the JSON file to include the plug-in configuration properties.
3. Save and upload the JSON file. This replaces the current JSON file with the new content.
4. View the new integration on the Integrations page.

## Configuration Properties

The following tables describe the properties used to configure the integration. Each table contains the field name when using the user interface and the property name when using a JSON
file.

* The General Configuration Properties table describes configuration properties used by all plug-in integrations.
* The Handlebar Detection Configuration Properties table describes the configuration properties that define the connection and communications with the Handlebar Detection server. When using the JSON method to integrate the plug-in these properties are coded within the `properties` configuration property.

### General Configuration Properties

| Name | Description | Required |
| --- | --- | --- |
| image | The version of the plug-in that you want to use. To view available versions,see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-handlebars-reporter). If a value is not specified, the latest version is used. | No |
| name | An assigned name to the value stream. | Yes |
| loggingLevel | The level of Log4j messages to log. Valid values are: all, debug, info, warn, error, fatal, off, and trace. The default is info. | No |
| properties | List of configuration properties used to connect and communicate with the DevOps Velocity server. Enclose the properties within braces. | Yes |
| tenant_id | The name of the tenant. | Yes |
| type | Unique identifier assigned to the plug-in. The value for the DevOps Velocity plug-in is `ucv-ext-handlebars-reporter` | Yes |

### Handlebar Detection Configuration Properties

| Name | Type | Description | Required | Project Name |
| --- | --- | --- | --- | --- |
| UCV User Access Key | Secure | The user access key used to authenticate with the DevOps Velocity server. | No | ucvKey |

## Example

The following example can be used as as template to include the Handlebar Reporter plug-in integration into
the JSON file. Copy and paste the template into the JSON file and make the appropriate changes.

```json
"integrations":
[
    {
        "type": "ucv-ext-handlebars-reporter",
        "name": "",
        "tenant_id": "",
        "logginglevel": "info",

        "ucvkey": "*key*",
        "properties": {
            [],
        }
    }
]

```

|Back to ...||Latest Version|Handlebar Reporter |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[2.0.1](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-handlebars-reporter/ucv-ext-handlebars-reporter%3A2.0.1.tar.7z.001)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
