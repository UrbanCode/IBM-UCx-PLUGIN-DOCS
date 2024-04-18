
# BitBucket Cloud - Usage

To use the BitBucket Cloud plug-in, the plug-in must be loaded and an instance created before you can configure the plug-in integration. You define configuration properties in the user interface or in a JSON file.

## Integration type

The BitBucket Cloud plug-in supports scheduled events integration which is listed in the following table.

### Scheduled Events

| Name                           | Description                                                 |
| ------------------------------ | ----------------------------------------------------------- |
| syncBitbucketPullRequestsEvent | Queries the BitBucket Cloud for pull requests in a project. |
| syncBitbucketCommitsEvent      | Queries the BitBucket Cloud for commits in a project.       |

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

Some properties might not be displayed in the user interface, to see all properties enable the `Show Hidden Properties` field.

**Note:** Previously email ID and password (Those which are used to log into the BitBucket Cloud website) were used in the field of Username and Password respectively. Now from version 1.0.16 Username(https://bitbucket.org/account/settings/) and App-password(https://bitbucket.org/account/settings/app-passwords/) will be used in the field of Username and Password to authenticate with the BitBucket Cloud.

### General configuration properties

| Name             | Description                                                                                                                             | Required | Property Name |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------- |
| Integration Name | An assigned name to the value stream.                                                                                                   | Yes      | name          |
| Logging Level    | The level of Log4j messages to display in the log file. Valid values are: all, debug, info, warn, error, fatal, off, and trace.         | No       | loggingLevel  |
| properties       | List of plug-in configuration properties used to connect and communicate with the Bitbucket Cloud. Enclose the properties within braces. | Yes      | properties    |
| Tenant id        | The name of the tenant.                                                                                                                 | Yes      | tenant\_id    |
| Type             | Unique identifier assigned to the plug-in. The value for the Bitbucket Cloud plug-in is `ucv-ext-bitbucket-cloud`                         | Yes      | type          |

### Bitbucket Cloud properties

| Name                | Type   | Description                                                                                                                                           | Required | Property Name    |
| ------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------- |
| User Access Key     | Secure | The access token secret for oauth authentication.                                                                                                     | Yes      | ucvAccessKey     |
| Username            | String | The user name used to authenticate with the Bitbucket cloud instance.You can find it here https://bitbucket.org/account/settings/                     | Yes      | consumer\_secret |
| App Password            | Secure | The App password used to authenticate with the Bitbucket cloud instance.You can create one here https://bitbucket.org/account/settings/app-passwords/ | Yes      | password         |
| Project Key         | String | The repository project key.                                                                                                                           | Yes      | projectKey       |
| Project Name        | String | The name of the project which contains one or more repositories.                                                                                      | Yes      | projectName      |
| Repository Name     | Array  | The comma separated name of the repositories                                                                                                          | Yes      | repositoryName   |
| API Limits     | String | Maximum API calls that the plugin will make in a single run.                                                                                           | No      | apiLimits   |
| Branch Name         | String | The branch to pull changes from.                                                                                                                      | No       | branchName       |
| Additional Branches | Array  | Comma seperated names of additional branches to collect commits from besides the main one, leave blank if not needed.                                 | No       | otherBranches    |
| Proxy Password | Secure | The password used to authenticate with the proxy server. | No | proxyPassword |
| Proxy Server | String | The URL of the proxy server including the port number. The URL protocol can be http or https. | No | proxyServer |
| Proxy User Name | String | The user name used to authenticate with the proxy server. | No | proxyUsername |

## JSON code example


The following example can be used as a template to define the integration within the JSON file for a value stream. Copy and paste the template into the JSON file and make the appropriate changes.

```
{ 
     "type": "ucv-ext-bitbucket-cloud", 
      "tenant_id": "5ade13625558f2c6688d15ce", 
      "name": "my-bitbucket", 
      "loggingLevel": "info",
      "disabled": false, 
      "properties": { 
        "baseApiUrl": "[Base URL ex: https://bitbucket.org/api/2.0]", 
        "username": "[Basic User Name]", 
        "password": "[Basic user password]", 
        "projectName": "[Full project name ex: JKE Mortgage Application]", 
        "projectKey": "[Project key ex: JMA]", 
        "repositoryName": "[app repository name ex: web-application]", 
        "repositorySlug": "[app repository name ex: web-application]" 
      } 
    }
```



|Back to ...||Latest Version|BitBucket Cloud |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.29](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-bitbucket-cloud/ucv-ext-bitbucket-cloud%3A1.0.29.tar.7z.001)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
