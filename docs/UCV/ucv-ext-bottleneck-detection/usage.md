
# Bottleneck Detection - Usage

To use the Bottleneck plug-in, the plug-in must be loaded and an instance created before you can configure the plug-in integration. You define configuration properties in the user interface or in a JSON file.

## Integration type

The Bottleneck Detection plug-in supports scheduled events integration which are listed in the following table.

| Name | Description |
| --- | --- |
| execute | Calculate bottlenecks. |

## Integration

To install the plug-in, perform the following steps:

1. In IBM DevOps Velocity, click **Settings** > **Integrations** > **Available**.
2. In the **Action** column for the Bottleneck Detection plug-in, click **Install**.

There are two methods to integrate the plug-in:

1. Using the user interface.
2. Using a JSON file

The tables in the Configuration properties topic describe the properties used to define the integration.

## Integrating the plug-in by using user interface

To integrate the plug-in using the user interface, perform the following steps:

1. In IBM DevOps Velocity, click **Settings** > **Integrations** > **Installed**.
2. In the **Action** column for the Bottleneck Detection plug-in, click **Add Integration**.
3. On the Add Integration dialog, enter the values for the fields to configure the integration and define communication.
4. Click **Add**.

## Integrating the plug-in by using JSON file

The JSON file contains the information for creating a value stream. Within the JSON file is a section for integrations. It is in this section that plugin properties can be defined. Refer to the JSON sample code in the Configuration Properties section.

To integrate the plug-in using a JSON, perform the following steps:

1. Navigate to **value stream page**, and then click the necessary **value stream**.
2. Click  **wrench icon**, and then Select **Edit value stream** to modify the JSON file in the code or tree view editors.
Alternatively, you can also click Download JSON option to download the JSON file, and then select the Import JSON option to upload the revised JSON file.
3. Edit the integration information in the JSON file to add the plug-in configuration properties. Refer to JSON sample code in the Configuration Properties section more details.
4. Click **Save**.

## Configuration properties

The following tables describe the properties used to configure the integration. Each table contains the field name when using the user interface and the property name when using a JSON file.

* The General Configuration Properties table describes configuration properties used by all plugin integrations.
* The Bottleneck Detection Configuration Properties table describes the configuration properties that define the connection and communications with the Bottleneck Detection server. When using the JSON method to integrate the plugin these properties are coded within the properties configuration property.

Some properties might not be displayed in the user interface, to see all properties enable the **Show Hidden Properties** field.

## General Configuration properties

| Name | Description | Required | Property Name |
| --- | --- | --- | --- |
| NA | The version of the plugin that you want to use. To view available versions, click the Version History tab. If a value is not specified, the version named latest is used. | No | image |
| Integration Name | An assigned name to the value stream. | Yes | name |
| Logging Level | The level of Log4j messages to display in the log file. Valid values are: all, debug, info, warn, error, fatal, off, and trace. | No | loggingLevel |
| NA | List of plugin configuration properties used to connect and communicate with the IBM DevOps Velocity server. Enclose the properties within braces. | Yes | properties |
|| The name of the tenant. | Yes | tenant_id |
| NA | Unique identifier assigned to the plugin. The value for the Bottleneck Detection plugin is ucv-ext-bottleneck-detection | Yes | type |
 
## Bottleneck Detection Configuration Properties

| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| UCV User Access Key | Secure | The user access key used to authenticate with the IBM DevOps Velocity server. | Yes | ucvKey |
| Workflow Id | String | Enter the workflow ID for which you need to detect the bottleneck.You can get workflowId for any valuestream from the URL of the valuestream. | No | workflowId |

## JSON code sample

The following sample code can be used as a template to define the integration within the JSON file for a value stream. Copy and paste the template into the JSON file Integration section and make the appropriate changes.

```
"integrations": [
    {
      "type": "ucv-ext-bottleneck-detection",
      "name": "Bottlenecks",
      "tenant_id": "5ade13625558f2c6688d15ce",
      "ucvKey": "key
      "logginglevel": "info",
      "properties": {
            []
        }
    }
  ]
```

|Back to ...||Latest Version|Bottleneck Detection |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.3-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-bottleneck-detection/ucv-ext-bottleneck-detection%3A1.0.3.tar.7z.001)[and 1.0.3-File 2 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-bottleneck-detection/ucv-ext-bottleneck-detection%3A1.0.3.tar.7z.002)[and 1.0.3-File 3 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-bottleneck-detection/ucv-ext-bottleneck-detection%3A1.0.3.tar.7z.003)[and 1.0.3-File 4 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-bottleneck-detection/ucv-ext-bottleneck-detection%3A1.0.3.tar.7z.004)[and 1.0.3-File 5 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-bottleneck-detection/ucv-ext-bottleneck-detection%3A1.0.3.tar.7z.005)[and 1.0.3-File 6](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-bottleneck-detection/ucv-ext-bottleneck-detection%3A1.0.3.tar.7z.006)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
