
# Azure DevOps - Usage

To use the Azure DevOps plug-in, the plug-in must be loaded and an instance created before you can configure the plug-in integration. You define configuration properties in the user interface or in a JSON file.

## Integration type

The Azure DevOps plug-in supports scheduled events integration which are listed in the following table.

| Name | Description                                                                                         |
| ---- | --------------------------------------------------------------------------------------------------- |
| SyncAzureIssuesEvent | Queries the Query Azure DevOps server for new or updated pull requests and commits. |
| SyncAzureGitDataEvent | Queries the Azure DevOps server for new or updated work items. |
| SyncAzureBuildsEvent | Queries the Query Azure DevOps server for build data. |
| SyncAzurePipelines | Queries the Azure DevOps server for deployment data. |
| syncAzureReleaseStatus | Sync Azure Release Status. |

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
* The Azure DevOps Properties table describes the Azure DevOps configuration properties are unique to the Azure DevOps plug-in and define the connection and communication to the Azure DevOps server. When using the JSON method to integrate the plug-in these properties are coded within the `properties` configuration property.

### General Configuration Properties

| Name | Description                                                                  | Required | Property Name |
| ---- | ---------------------------------------------------------------------------- | -------- | ------------- |
| NA | The version of the plug-in that you want to use. To view available versions, click the **Version History** tab. If a value is not specified, the version named latest is used. | No | image |
| Integration Name | An assigned name to the value stream. | Yes | name |
| Logging Level | The level of Log4j messages to display in the log file. Valid values are: all, debug, info, warn, error, fatal, off, and trace. | No | loggingLevel |
| NA | List of plug-in configuration properties used to connect and communicate with the Azure DevOps server. Enclose the properties within braces. | Yes | properties |
|  | The name of the tenant. | Yes | tenant\_id |
| NA | Unique identifier assigned to the plug-in. The value for the Azure DevOps plug-in is `ucv-ext-azure` | Yes | type |


### Azure DevOps Properties

| Name         | Type | Description                                      | Required | Hidden | Property Name |
| ------------ | ---- | ------------------------------------------------ | -------- | ------ | ------------- |
| Access Token | Secure | The access token to authenticate with the Azure DevOps server. You can use either this property or the Password property to authenticate with the server. | No | No | accessToken |
| Organization | String | The name of the Azure organization in which the specified project exists. | Yes | No | organization |
| Password | Secure | The password used to authenticate with the Azure server. Use either this or an access token. | No | No | password |
| Project | String | The name of the Azure DevOps project from which to pull data. | Yes | No | project |
| Branch Name | String | The branch to pull commits from. | No | No | branchName |
| Proxy Password | Secure | The password used to authenticate with the proxy server. | No | Yes | proxyPassword |
| Proxy Server | String | The URL of the proxy server including the port number. | No | Yes | proxyServer |
| Proxy User Name | String | The user name used to authenticate with the proxy server. | No | Yes | proxyUsername |
| Repositories | Array | A list of repositories from which to import pull request, commit, and build data. | No | No | repositories |
| URL | String | The URL of the Azure DevOps server. | Yes | No | baseUrl |
| User Name | String | The user name to authenticate with the Azure DevOps server. | No | No | username |
| DevOps Velocity User AccessKey | Secure | The user access key to authenticate with the DevOps Velocity server. | No | No | ucvAccessKey |
| Build Tags (Comma Separated List) | Array | Comma separated list of tags for pushing pipeline runs as build to this server. If kept empty all the pipeline runs will be pushed as builds. | No | No | tags |
| API Limits | String | Maximum number of Azure Devops REST API calls that will be made by the plugin in a single execution. Making too many call in a short duration might result in a connection timeout at Azure Devops server. | No | No | apiLimits |
| Additional Branches (Comma Separated List) | Array | A comma separated list of additional branches to collect commits from besides the main one, leave blank if not needed. | No | No | otherBranches |


|Back to ...||Latest Version|Azure DevOps |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[4.0.40-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-azure/ucv-ext-azure%3A4.0.40.tar.7z.001)[and 4.0.40-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-azure/ucv-ext-azure%3A4.0.40.tar.7z.002)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
