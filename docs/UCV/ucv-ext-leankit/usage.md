
# Planview Leankit - Usage

To use the Planview LeanKit plug-in, the plug-in must be loaded and an instance created before you can configure the plug-in integration. You define configuration properties in the user interface.

## Integration type

The Planview LeanKit plug-in supports scheduled events integration which is listed in the following table.

### Scheduled Events

| Name                           | Description                                                 |
| ------------------------------ | ----------------------------------------------------------- |
| syncLeanKitCards               | The Planview LeanKit plug-in processes incoming data from Planview LeanKit server. |


## Integration

Use the user interface to integrate the plug-in.

1. From the Plugins page, click **Settings** > **Integrations** > **Plugins**.
2. Under the Action column for the plug-in, click **Add Integration**.
3. On the Add Integration page enter values for the fields used to configure the integration and define communication.
4. Click **Save**.

See Configuration properties topic for the properties used to define the integration.

## Configuration properties

The following tables describe the properties used to configure the integration. Each table contains the field name when using the user interface and the property name when using a JSON file.

* The General Configuration Properties table describes configuration properties used by all plug-in integrations.
* The Planview LeanKit Configuration Properties table describes the configuration properties that define the connection and communications with the Planview LeanKit server.

Some properties might not be displayed in the user interface, to see all properties enable the `Show Hidden Properties` field.

### General configuration properties

| Name                           | Description                                                                                                                                                         | Required | Property Name |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------- |
| NA                             | The version of the plug-in that you want to use. To view available versions, click the Version History tab. If a value is not specified, the latest version is used. | No       | image         |
| Integration Name               | An assigned name to the value stream.                                                                                                                               | Yes      | name          |
| Logging Level                  | The level of Log4j messages to display in the log file. Valid values are: all, debug, info, warn, error, fatal, off, and trace.                                     | No       | loggingLevel  |
| NA                             | List of configuration properties used to connect and communicate with the Planview LeanKit server. Enclose the properties within braces.                            | Yes      | properties    |
|                                | The name of the tenant.                                                                                                                                             | Yes      | tenant_id     |
| NA                             | Unique identifier assigned to the plug-in. The value for the Planview LeanKit plug-in is `ucv-ext-leankit`.                                                           | Yes      | type          |
| DevOps Velocity User Access Key | The auto-generated User Access Key that the containerized plug-in will use to communicate with DevOps Velocity (support starts with plugin v2.0.30 or later).         | Yes      | ucvAccessKey  |

### Planview LeanKit properties

| Name            | Type   | Description                                                                                                                                                                                                      | Required |
| --------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| URL             | String | The URL of the Planview LeanKit server.                                                                                                                                                                          | Yes      |
| Private Token   | Secure | The token to authenticate with Planview LeanKit server.                                                                                                                                                          | Yes      |
| Board IDS       | Array  | The Planview LeanKit board ID to pull the data from Planview LeanKit board. To pull data from multiple boards, enter the board ID’s separated with comma. For example, 1400100201, 1112053040, 1999999789.       | No       |
| User Access Key | Secure | The user access key to authenticate with DevOps Velocity server. This property is applicable for DevOps Velocity version earlier to 2.4.0.                                                                          | No       |


|Back to ...||Latest Version|Planview Leankit |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.1](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-leankit/ucv-ext-leankit%3A1.0.1.tar.7z.001)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
