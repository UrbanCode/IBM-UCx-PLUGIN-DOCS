
# GitHub Dependabot - Usage

To use the GitHub Dependabot plug-in, the plug-in must be loaded only if you an existing GitHub integration. The GitHub Dependabot data is imported only if Dependabot alerts are enabled for the repository.

## Integration type

The GitHub Dependabot plug-in supports scheduled event integration which are listed in the following table.

## Scheduled events

|Name|Description|
|---|---|
|syncDependabotDataEvent|Queries the GitHub Dependabot alerts for the repository.|

## Integration
The method to integrate the plug-in:

- Using the user interface

The tables in the Configuration properties topic describe the properties used to define the integration.

### Using the user interface
1. From the Plugins page, click **Settings > Integrations > Plugins**.
2. Under the Action column for the plug-in, click **Add Integration**.
3. On the Add Integration page, enter values for the fields used to configure the integration and define communication.
4. Click **Save**.

## Configuration properties

The following tables describe the properties used to configure the integration.

- The General Configuration Properties table describes configuration properties used by all plugin integrations.
- The GitHub Dependabot Configuration Properties table describes the GitHub Dependabot configuration properties that define the connection and communications with the GitHub server.

Some properties might not be displayed in the user interface, to see all properties enable the `Show Hidden Properties` field.

### General configuration properties

| Name             | Description                                                                                                                             | Required | Property Name |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------- |
| Integration Name | An assigned name to the value stream.                                                                                                   | Yes      | name          |
| Logging Level    | The level of Log4j messages to display in the log file. Valid values are: all, debug, info, warn, error, fatal, off, and trace.         | No       | loggingLevel  |
| DevOps Velocity User Access Key|An auto-generated user access key provides credentials for communicating with the DevOps Velocity server.                |Yes       |NA             |

### GitHub Dependabot properties

| Name                           | Type   | Description                                                                                                                                                                                          | Required |
| ------------------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Personal Access Token          | String | The token to use to authenticate with the GitHub repository.                                                                                                                                         | Yes      |
| API URL (GraphQL Endpoint Url) | String | For GitHub Enterprise edition , replace it with Enterprise GraphQL endpoint. Example: `http(s)://_\[hostname\]_/api/graphql` or use the default value. (Default value :  `https://api.github.com/graphql`) | Yes      |
| Repositories                   | Array  | List of GitHub repositories as comma separated, Use either Repositories field or name field to specify the repositories .                                                                            | No       |


|Back to ...||Latest Version|GitHub Dependabot |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-dependabot/ucv-ext-dependabot%3A1.0.2.tar.7z.001)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
