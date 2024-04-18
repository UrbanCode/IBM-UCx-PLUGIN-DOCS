
# WhiteSource - Usage

To use the WhiteSource plug-in, the plug-in must be loaded and an instance created before you can configure the plug-in integration. 
You define configuration properties in the user interface or in a JSON file.


## Integration type

The WhiteSource plug-in supports Scheduled Event integration which is listed in the following table.

| Name | Description |
| --- | --- |
| Sync WhiteSource Data | WhiteSource data request that will occur on a timer |


## Invoking the plug-in


To import data from the WhiteSource server, send an HTTP POST request to your endpoint.


## Integration

There are two
methods to integrate the plug-in:

* Using the user interface
* Using a JSON file


### Using the user interface

1. From the Plugins page, click **Settings** > **Integrations** > **Plugins**.
2. Under the **Action** column for the plug-in, click **Add Integration**.
3. On the Add Integration page enter values for the fields used to configure the integration and
define communication.
4. Click **Save**.


### Using a JSON file

The JSON file contains the information for creating a value stream and 
integrating with the WhiteSource server. The following table describes the information for creating a DevOps Velocity value stream map.

1. From a value stream page, download the value stream map. 
The value stream map is a JSON file used to define integrations.
2. Edit the JSON file to include the plugin configuration properties.
3. Save and upload the JSON file. This replaces the current JSON file with the new content.
4. View the new integration on the Integrations page.


## Configuration properties

The following tables describe the properties used to configure the integration. 
Each table contains the field name when using the user interface and the property name when using a JSON file.

* The General Configuration Properties table describes configuration properties used by all plug-in integrations.

* The WhiteSource Configuration Properties table describes the configuration properties that define the connection and communications with the WhiteSource server. When using the JSON method to integrate the plug-in these properties are coded within the `properties` configuration property.

Some properties might not be displayed in the user interface, to see all properties enable the **Show Hidden Properties** field.

### General Configuration Properties

| Name | Description | Required | Property Name |
| --- | --- | ---| --- |
| NA                   | The version of the plugin that you want to use. To view available versions, click the **Version History** tab. If a value is not specified, the version named latest is used. | No  | image        |
| Integration Name     | An assigned name to the value stream.                                                                                                                                     | Yes | name         |
| Logging Level        | The level of Log4j messages to display in the log file. Valid values are: all, debug, info, warn, error, fatal, off, and trace.                                           | No  | loggingLevel |
| NA                   | List of plugin configuration properties used to connect and communicate with the WhiteSource server. Enclose the properties within braces.                                | Yes | properties   |
|                      | The name of the tenant.                                                                                                                                                   | Yes | tenant\_id   |
| NA                   | Unique identifier assigned to the plugin. The value for the WhiteSource plugin is `ucv-ext-whitesource`                                                                   | Yes | type         |
| Product tokens       | Add product tokens from whitesource on which we want to run scan                                                                                                          | Yes | type         |
| Project Names        | Add project names within the product to make it run at project level                                                                                                      | No  | type         |
| Custom field mapping | Add custom field mapping to map image tags with the application name for pipeline                                                                                         | No  | type         |

### WhiteSource Configuration Properties

| Name | Type | Description | Required | Property Name |
| --- | --- | ---| --- | --- |
| WhiteSource UserKey                      | Secure | User Key for authentication with WhiteSource. URL to get a UserKey for WhiteSource: https://saas.whitesourcesoftware.com/Wss/WSS.html#!userProfile          | Yes | userKey   |
| WhiteSource API URL              | String | The base URL of the WhiteSource API.                    | Yes | wsUrl   |
| DevOps Velocity User Access Key | Secure | User access key for authentication with DevOps Velocity. | Yes | keySecret |
| WhiteSource Product tokens (Line separated)     | Multiline | Product token for authentication with WhiteSource. URL to get a Product token for WhiteSource: https://saas.whitesourcesoftware.com/Wss/WSS.html#!userProfile                    | Yes | productToken   |
| Project Names (Line separated) | Multiline | Provide project names as line separated | No | projectName |
| Custom Field Mapping | Multiline | Map whitesource fields to Accelerate as a JSON Object. Mapping - {"application.name": "image.name", "application.externalId": "image.id", "buildUrl": "image.buildUrl", "environment":"image.environment"} | No | fieldMapping |


## JSON code example

The following sample code can be used as a template to define the integration within the JSON file for a value stream. 
Copy and paste the template into the JSON file Integration section and make the appropriate changes.

```

 {
    "type": "ucv-ext-whitesource",
    "tenant_id": "<my-tenant-id>,
    "name": "<integration-name>,
    "properties":{
      "ucvAccessKey": "<my-ucv-user-access-key>,
      "userKey" : "<my-user-key>",
      "productToken" : "<product tokens>",
      "projectName" : "<project names>",
      "fieldMapping" : {"application.name": "image.name", "application.externalId": "image.id", "buildUrl": "image.buildUrl", "environment":"image.environment"}

    }
  }

```


|Back to ...||Latest Version|WhiteSource |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[2.0.15](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-whitesource/ucv-ext-whitesource-2.0.15.tar.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
