
# IBM DevOps Deploy - Usage

To use the IBM DevOps Deploy plugin, the plugin must be loaded and an instance created before you can configure the plugin integration. You define configuration properties in the user interface or in a JSON file.

## Integration type

The IBM DevOps Deploy plugin supports scheduled events integration which are listed in the following table.

| Name | Description |
| --- | --- |
| syncDeployEvent | Timed event that synchronizes with IBM DevOps Deploy |
| Sync Deploy Teams Event | This is a timed event that syncs IBM DevOps Deploy teams. |
| Sync in Progress APRs | This is a timed event that syncs in Progress APRs from IBM DevOps Deploy. |

## Integration

There are two methods to integrate the plug-in:

* Using the user interface
* Using a JSON file

The tables in the Configuration properties topic describe the properties used to define the integration.

### Using the user interface

* From the Plugins page, click **Settings** > **Integrations** > **Plugins**.
* Under the **Action** column for the plug-in, click **Add Integration**.
* On the Add Integration page enter values for the fields used to configure the integration and define communication.
* Click **Save**.

### Using a JSON file

The JSON file contains the information for creating a value stream. Within the JSON file is a section for integrations. It is in this section that plug-in properties can be defined.

   * From a value stream page, download the value stream map. The value stream map is a JSON file used to define integrations.
   * Edit the JSON file to include the plug-in configuration properties.
   * Save and upload the JSON file. This replaces the current JSON file with the new content.
   * View the new integration on the Integrations page.

## Configuration Properties

The following tables describe the properties used to configure the integration. Each table contains the field name when using the user interface and the property name when using a JSON file.

   * The General Configuration Properties table describes configuration properties used by all plug-in integrations.
   * The IBM DevOps Deploy Configuration Properties table describes the configuration properties that define the connection and communications with the IBM DevOps Deploy server. When using the JSON method to integrate the plug-in these properties are coded within the properties configuration property.

Some properties might not be displayed in the user interface, to see all properties enable the **Show Hidden Properties** field.

### General Configuration Properties

| Name | Description | Required | Property Name |
| --- | --- | --- | --- | ---|
| NA | The version of the plug-in that you want to use. To view available versions, click the **Version History** tab. If a value is not specified, the version named latest is used. | NO | image |
| Integration Name | An assigned name to the integration. | Yes | name |
| Logging Level | The level of Log4j messages to display in the log file. Valid values are: all, debug, info, warn, error, fatal, off, and trace. | No | logginglevel |
| NA | List of plugin configuration properties used to connect and communicate with the IBM DevOps Deploy server. Enclose the properties within braces. | Yes | properties |
| | The name of the tenant. | Yes | tenant_id |
| NA | Unique identifier assigned to the plug-in. The value for the IBM DevOps Deploy plugin is ucv-ext-ucd. | Yes | type |

#### IBM DevOps Deploy Configuration Properties

| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| Access Token | String | Token to authenticate against IBM DevOps Deploy. | Yes | deployToken |
| Url | String | IBM DevOps Deploy server url. | Yes | baseUrl |
| User Access Key | String | The user access key to authenticate with this server. | No | ucvAccessKey |
| Build Polling Timeout | String | Length of time (in minutes) to wait for build to complete if task is set to wait. | false | buildPollingTimeout |

## JSON Code Sample

The following sample code can be used as a template to define the integration within the JSON file for a value stream. Copy and paste the template into the JSON file Integration section and make the appropriate changes.

```json

"integrations": [
    {
      "type": "ucv-ext-ucd",
      "tenant_id": "tenantid",
      "name": "Deploy_Plugin ",
      "properties": {
        "Url": "deploy_server_url",
        "ucvAccessKey": "ucv_access_key",
        "deployToken": "deploy_access_token"
      }
    }  ]

```

## Minimum permission to integrate with IBM DevOps Deploy

The access token generated from IBM DevOps Deploy must have the following permissions to connect with IBM DevOps Deploy.

   * VIEW_APPLICATIONS

   * EDIT_APPLICATIONS

   * VIEW_ENVIRONMENTS

   * EXECUTE_ENVIRONMENTS

   * MANAGE_SECURITY

   * SETTINGS_TAB



|Back to ...||Latest Version|IBM DevOps Deploy |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[4.0.9 -File 1](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-ucd/ucv-ext-ucd%3A4.0.9.tar.7z.001) [and 4.0.9 -File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-ucd/ucv-ext-ucd%3A4.0.9.tar.7z.002)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
