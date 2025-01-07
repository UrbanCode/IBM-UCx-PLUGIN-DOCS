
# GitHub - Usage

To use the GitHub plug-in, the plug-in must be loaded and an instance created before you can configure the plug-in integration. Configuration properties are defined using the product user interface or a JSON file.

## Integration type

The GitHub plug-in supports scheduled events integration which are listed in the following table.

| Name | Description |
| --- | --- |
| syncGithubIssuesEvent | Queries the GitHub repository for issues. |
| syncGithubCommitsEvent | Queries the GitHub repository for commits. |
| syncGithubPullRequestsEvent | Queries the GitHub repository for pull requests. |
| Sync GitHub Actions | Query for CI processes using GitHub Actions in a repository |
| Sync GitHub Yaml File | Query GitHub for yaml file in repository |

## Integration

To install the plug-in, perform the following steps:

1. In IBM DevOps Velocity, click **Settings** > **Integrations** > **Available**.
2. In the **Action** column for the GitHub plug-in, click **Install**.

There are two methods to integrate the plug-in:

1. Using the user interface
2. Using a JSON file

The tables in the Configuration properties describe the properties used to define the integration.
### Integrating the plug-in by using user interface

To integrate the plug-in using the user interface, perform the following steps:

1. In IBM DevOps Velocity, click **Settings** > **Integrations** > **Installed**.
2. In the **Action** column for the GitHub plug-in, click **Add Integration**.
3. On the Add Integration dialog, enter the values for the fields to configure the integration and define communication.
4. Click **Add**.

### Integrating the plug-in by using JSON file

The JSON file contains the information for creating a value stream. Within the JSON file is a section for integrations. It is in this section that plugin properties can be defined. Refer to the JSON sample code in the Configuration Properties section.

To integrate the plug-in using a JSON, perform the following steps:

1. Navigate to **value stream page**, and then click the **necessary value stream**.
2. Click **wrench icon**, and then Select **Edit value stream**, to modify the JSON file in the code or tree view editors.
Alternatively, you can also click **Download JSON** option to download the JSON file, and then select the **Import JSON** option to upload the revised JSON file.
3. Edit the integration information in the JSON file to add the plug-in configuration properties. Refer to JSON sample code in the Configuration Properties section more details.
4. Click **Save**.

## Minimum permission to integrate with GitHub

The access token generated from GitHub server requires the Full control of private repositories permission to connect to the Github.

## Wildcard Functionality added in this Plugin:

**Wildcard functionality**: A new way to specify multiple repositories in the GitHub plugin without having to manually modify the integration each time. Regular expressions would be most valuable and dynamic. 
Example: ucv-ext-*, repo-name*, *repo*-abc. to specify multiple repositories which containe the same pattern in their name.

**Previously**: Must list every plugin manually to be imported. Example: ucv-ext-jira, ucv-ext-appscan, ucv-ext-sonarqube
**With this functionality** : Single regex will import all repositories. Example: ucv-ext-*.

## Configuration properties

The following tables describe the properties used to configure the integration. Each table contains the field name when using the user interface and the property name when using a JSON file.

* The General Configuration Properties table describes configuration properties used by all plug-in integrations.
* The GitHub Configuration Properties table describes the GitHub configuration properties that define the connection and communications with the GitHub server. When using the JSON method to integrate the plug-in these properties are coded within the `properties` configuration property.

### General Configuration Properties table

| Name | Description | Required | Property Name |
| --- | --- | ---| --- |
| NA | The version of the plug-in that you want to use. To view available versions, click the **Version History** tab. If a value is not specified, the latest version is used. | No | image |
| Integration Name | An assigned name to the value stream. | Yes | name |
| Logging Level | The level of Log4j messages to display in the log file. Valid values are: all, debug, info, warn, error, fatal, off, and trace. | No | loggingLevel |
| NA | List of configuration properties used to connect and communicate with the GitHub server. Enclose the properties within braces. | Yes | properties |
|  | The name of the tenant. | Yes | tenant_id |
| NA | Unique identifier assigned to the plug-in. The value for the GitHub plug-in is `ucv-ext-github` | Yes | type |
| IBM DevOps Velocity User Access Key | An auto-generated user access key provides credentials for communicating with the IBM DevOps Velocity server. | Yes | NA |

### GitHub Configuration Properties table

| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| API URL | String | The URL to the REST API v3 for the GitHub instance. | Yes | apiUrl |
| DevOps Velocity User Access Key | String | The user access key generated from IBM DevOps Velocity used to authenticate with the IBM DevOps Velocity server. | Yes | ucvAccessKey |
| Owner | String | The owner name of the GitHub repository. | Yes | owner |
| Repositories | Array | List of GitHub repositories, Use either Repositories field or name field to specify the repositories. | Yes | repositories |
| branch | String | GitHub repositories branch, The branch to pull commits from. | No | branch |
| Personal access token | String | The Personal Access Token used to authenticate with Github repositories. | No | token |
| Additional branches | Array | Additional branches to collect commits from besides the main one, leave blank if not needed. | No | otherBranches |
| Proxy Server | String | The URL of the proxy server including the port number. | No | proxyServer |
| Proxy User Name | String | The user name used to authenticate with the proxy server. | No | proxyUsername |
| Proxy Password | String | The password used to authenticate with the proxy server. | No | proxyPassword |

### JSON code example

The following example can be used as a template to define the integration within the JSON file for a value stream. Copy and paste the template into the JSON file and make the appropriate changes.

```json

"integrations":[ {
    "type":"ucv-ext-github",
    "tenant_id":"tenant-id",
    "name":"github-integration-name",
    "properties":{
        "owner":"owner-name",
        "repositories":[ 
            "repo1",
            "repo2",
            "repo3"
        ],
        "apiUrl":"github-api-url",
        "token":"generated-token",
        "ucvAccessKey":"generated-access-key",
        "proxyServer": "*proxy_server_url*",
        "proxyUsername": "*proxy_server_user_name*",
        "proxyPassword": "*proxy_server_password*"
    }
} ]

```

**Note**:

Altering the ‘repositories’ field in the settings will not automatically eliminate any pre-existing data from older integrations. If your goal is to solely display information related to the newly updated repository, it’s necessary to first remove the old integration. After that, you can create a new integration that includes the updated list of repositories.

|Back to ...||Latest Version|GitHub |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.5.1-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-github/ucv-ext-github%3A1.5.1.tar.7z.001)[and 1.5.1-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-github/ucv-ext-github%3A1.5.1.tar.7z.002)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
