
# Snyk - Usage

To use the Snyk plug-in, the plug-in must be loaded only if you have an existing GitHub, GitLab, or BitBucket integration. The Snyk data is imported only if Snyk scan is performed on the repositories.

## Integration type

The Snyk plug-in supports scheduled event integration which are listed in the following table.

### Scheduled Events

| Name                           | Description                                                 |
| ------------------------------ | ----------------------------------------------------------- |
|SyncSnykDataEvent               |Queries the Snyk data for the organisation.                  |

## Integration
The method to integrate the plug-in:
- Using the user interface

The tables in the Configuration properties topic describe the properties used to define the integration.

### Using the user interface

1. From the Plugins page, click **Settings** > **Integrations** > **Plugins**.
2. Under the Action column for the plug-in, click **Add Integration**.
3. On the Add Integration page enter values for the fields used to configure the integration and define communication.
4. Click **Save**.

## Configuration properties

The following tables describe the properties used to configure the integration. Each table contains the field name when using the user interface and the property name when using a JSON file.

* The General Configuration Properties table describes configuration properties used by all plug-in integrations.
* The Snyk plug-in Configuration Properties table describes the Snyk configuration properties that define the connection and communications with the Snyk server.

Some properties might not be displayed in the user interface, to see all properties enable the `Show Hidden Properties` field.

### General configuration properties

| Name                           | Description                                                                                                                     | Required | Property Name |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------- |
| Integration Name               | An assigned name to the value stream.                                                                                           | Yes      | name          |
| Logging Level                  | The level of Log4j messages to display in the log file. Valid values are: all, debug, info, warn, error, fatal, off, and trace. | No       | loggingLevel  |
| DevOps Velocity User Access Key | An auto-generated user access key provides credentials for communicating with the DevOps Velocity server.                        | Yes      | NA            |

### Snyk properties

| Name                  | Type   | Description                                                                                                                                      | Required |
| --------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| Personal Access Token | String | The token to use to authenticate with the Snyk server.                                                                                           | Yes      |
| Organisation IDs      | String | At least one Snyk organisation ID should be provided . For adding multiple IDs , separate IDs by a line .                                        | Yes      |
| Project Names         | String | Add Snyk project names to run plug-in for specific projects (line separated) . By default it will get data for all projects in the organisation . | No       |


|Back to ...||Latest Version|Snyk |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.1](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-snyk/ucv-ext-snyk:1.0.1.tar.7z.001)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
