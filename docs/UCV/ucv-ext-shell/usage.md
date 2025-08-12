
# Shell - Usage

To use the Shell plugin, the plugin must be loaded and an instance created before you can configure the plugin integration. If necessary, load the plugin into the IBM DevOps Velocity from the user interface, click **Settings** > **Integrations** > **Plugins**. On the Plugins tab, locate the plugin and click **Load Plugin**.

To create an instance, locate the plugin on the Plugins page and click **Install**. The plugin is now listed below those plugins to be installed and available for integration. After the integration is complete, the Execute Shell automation task is available for use in a release process.

See the [Automation task](Automation-task.md) for information on using automation tasks.


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

## Configuration properties

The following tables describe the properties used to configure the integration. Each table contains the field name when using the user interface and the property name when using a JSON file.

* The General Configuration Properties table describes configuration properties used by all plug-in integrations.
* The Shell Configuration Properties table describes the configuration properties used to communicate with IBM DevOps Velocity.

### General Configuration Properties table

| Name | Description | Required | Property Name |
| --- | --- | ---| --- |
| NA | The version of the plug-in that you want to use. To view available versions, click the **Version History** tab. If a value is not specified, the latest version is used. | No | image |
| Integration Name | An assigned name to the value stream. | Yes | name |
| Logging Level | The level of Log4j messages to display in the log file. Valid values are: all, debug, info, warn, error, fatal, off, and trace. | No | loggingLevel |
| NA | List of configuration properties used to connect and communicate with the GitHub server. Enclose the properties within braces. | Yes | properties |
|  | The name of the tenant. | Yes | tenant_id |
| NA | Unique identifier assigned to the plug-in. The value for the GitHub plug-in is `ucv-ext-shell` | Yes | type |

### Shell Configuration Properties table

| Name | Type | Description | Required | Project Name |
| --- | --- | --- | --- | --- |
| User Access Key | Secure | The access token secret for oauth authentication. Used to communicate with IBM DevOps Velocity.| No | ucvAccessKey |


|Back to ...||Latest Version|||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[0.0.34-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-shell/ucv-ext-shell%3A0.0.34.tar.7z.001)[and 0.0.34-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-shell/ucv-ext-shell%3A0.0.34.tar.7z.002)|[Overview](overview.md)|[Usage](usage.md)|[Automation task](Automation-task.md)|[Downloads](downloads.md)
