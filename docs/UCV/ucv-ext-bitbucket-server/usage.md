
# BitBucket Server - Usage

To use the BitBucket Server plug-in, the plug-in must be loaded and an instance created before you can configure the plug-in integration. Configuration properties are defined using the product user interface or a JSON file.


## Integration type

The BitBucket Server plug-in supports scheduled events integration which are listed in the following table.

| Name | Description |
| --- | --- |
| syncBitBucketServerPullRequestsEvent | Queries the BitBucket Server for pull requests in a project. |
| syncBitBucketServerCommitsEvent | Queries the BitBucket Server for commits in a project. |

## Integration

There are two methods to integrate the plug-in:

* Using the user interface
* Using a JSON file

For details, see [Using plug-ins in DevOps Velocity](https://community.ibm.com/community/user/wasdevops/blogs/osman-burucu/2022/07/20/using-plug-ins-in-urbancode-velocity).

### Using the user interface

1. From the Plugins page, click **Settings** > **Integrations** > **Plugins**.
2. Under the Action column for the plug-in, click **Add Integration**.
3. On the Add Integration page enter values for the fields used to configure the integration and define communication.
4. Click **Save**.

### Using a JSON file

The JSON file contains the information for creating a value stream and integrating with the BitBucket server. The following table describes the information for the creating a DevOps Velocity value stream map.

1. Download the value stream map. The value stream map is a JSON file used to define integrations.
2. Edit the JSON file to include the plug-in configuration properties.
3. Save and upload the JSON file. This replaces the current JSON file with the new content.
4. View the new integration on the Integrations page.

## Configuration properties

The following tables describe the properties used to configure the integration. Each table contains the field name when using the user interface and the property name when using a JSON file.

* The General Configuration Properties table describes configuration properties used by all plug-in integrations.
* The Bitbucket Configuration Properties table describes the BitBucket configuration properties that define the connection and communications with the BitBucket server. When using the JSON method to integrate the plug-in these properties are coded within the `properties` configuration property.

### General configuration properties

| Name | Description | Required | Property Name |
| --- | --- | --- | --- |
| NA | The version of the plug-in that you want to use. To view available versions, see the [UrbanCodeDockerHub](https://hub.docker.com/r/urbancode/ucv-ext-bitbucket-server/tags). If a value is not specified, the latest version is used. | No | image |
| Integration Name | An assigned name to the value stream. | Yes | name |
| Logging Level | The level of Log4j messages to display in the log file. Valid values are: all, debug, info, warn, error, fatal, off, and trace. | No | loggingLevel |
| NA | List of configuration properties used to connect and communicate with the BitBucket server. Enclose the properties within braces. | Yes | properties |
| NA | The name of the tenant. | Yes | tenant\_id |
| NA | Unique identifier assigned to the plug-in. The value for the BitBucket Server plug-in is `ucv-ext-bitbucket-server` | Yes | type |

### Bitbucket properties

| Name | Type | Description |Required | Property Name |
| --- | --- | --- | --- | --- |
| Access Token | String | The access token for oauth authentication. | No | access\_token |
| Access Token Secret | Secure | The access token secret for oauth authentication. | No | access\_token\_secret |
| Base API URL | String | The URL to the API. | Yes | baseApiUrl |
|Consumer Key | String | The consumer key for oauth authentication. | No | consumer\_key |
| Consumer Secret | Secure |The consumer secret for oauth authentication. | No | consumer\_secret |
| Password | Secure | The password associated with the user name to authenticate with the BitBucket server. | Yes | password |
| Project Key | String | The repository project key. | Yes | projectKey |
| Project Name | String | The name of the project which contains one or more repositories. | Yes | projectName |
| Repository Name | Array | Add list of comma seprated names of the repository. | Yes | repositoryName |
|Branch | String | The name of the branch to pull changes from. | No | branchName |
| Signature Method | String | The name of the signature method for oauth authentication. | No | signature\_method |
| User Name | String | The user name used to authenticate with the Bitbucket server. | No | username |
| Additional branches | Array | Additional branches to collect commits from besides the main one, leave blank if not needed. Regular Expression is also enabled(ex-PLUGINS*,*) | No | otherBranches |

## JSON code example


The following example can be used as a template to define the integration within the JSON file for a value stream. Copy and paste the template into the JSON file and make the appropriate changes.

```

{
"type": "ucv-ext-
bitbucket-server",
"tenant_id": "5ade13625558f2c6688d15ce",
"name": "my-bitbucket",
"loggingLevel": "info",
"disabled": false,
"properties": {
    "baseApiUrl": "[Base URL ex: http://10.134.116.110:7990/rest/api/1.0]",
    "username": "admin",
    "password": "[Basic user password]",
    "projectName": "[Full project name ex: JKE Mortgage Application]",
    "projectKey": "[Project key ex:JMA]",
    "repositoryName": "[app repository name ex: web-application]",
    "repositorySlug": "[app repository name ex: web-application]"
    }
}

```



|Back to ...||Latest Version|BitBucket Server |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.1.26](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-bitbucket-server/ucv-ext-bitbucket-server%3A1.1.26.tar.7z.001)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
