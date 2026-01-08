
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

1. From the Plug-ins page, click **Settings** > **Integrations** > **Plug-ins**.
2. Under the Action column for the plug-in, click **Add Integration**.
3. On the Add Integration page enter values for the fields used to configure the integration and define communication.
4. Click **Save**.

### Using a JSON file

The JSON file contains the information for creating a value stream and integrating with the BitBucket Cloud. The following table describes the information for the creating a DevOps Velocity value stream map.

1. Download the value stream map. The value stream map is a JSON file used to define integrations.
2. Edit the JSON file to include the plug-in configuration properties.
3. Save and upload the JSON file. This replaces the current JSON file with the new content.
4. View the new integration on the Integrations page.

## Configuration properties

The following tables describe the properties used to configure the integration. Each table contains the field name when using the user interface and the property name when using a JSON file.

* The General Configuration Properties table describes configuration properties used by all plug-in integrations.
* The BitBucket Configuration Properties table describes the BitBucket configuration properties that define the connection and communications with the BitBucket Cloud. When using the JSON method to integrate the plug-in these properties are coded within the `properties` configuration property.

Some properties might not be displayed in the user interface, to see all properties enable the `Show Hidden Properties` field.

### General configuration properties

| Name | Description | Required | Property Name |
| --- | --- | --- | --- |
| Integration Name | An assigned name to the value stream. | Yes | name |
| Logging Level | The level of Log4j messages to display in the log file. Valid values are: all, debug, info, warn, error, fatal, off, and trace. | No | loggingLevel |
| properties | List of plug-in configuration properties used to connect and communicate with the BitBucket Cloud. Enclose the properties within braces. | Yes | properties |
| Tenant id | The name of the tenant. | Yes | tenant_id |
| Type | Unique identifier assigned to the plug-in. The value for the BitBucket Cloud plug-in is `ucv-ext-bitbucket-cloud` | Yes | type |

### Bitbucket Cloud properties

| Name | Type | Description | Required | Property Name |
| ----- | --- | --- | --- | --- |
| Base API URL | String | The base URL of BitBucket Cloud API. URL is https://api.bitbucket.org/2.0 | Yes | baseUrl |
| Username | String | The username must be your Atlassian account email address. | Yes | username |
| API Token | Secure | Use your API token as the password. To generate a token, refer to: https://support.atlassian.com/bitbucket-cloud/docs/create-an-api-token/. Applicable for version 1.0.37 or later | Yes | password |
| App Password | Secure | Use your API token as the password. To generate a token, refer to: https://support.atlassian.com/bitbucket-cloud/docs/create-an-api-token/. Applicable for version 1.0.36 or earlier | Yes | password |
| Project Key | String | The repository project key. | Yes | projectKey |
| Repository Name | Array | The comma separated name of the repositories | Yes | repositoryName |
| API Limits | String | Maximum API calls that the plug-in will make in a single run. | No | apiLimits |
| Branch Name | String | The branch to pull changes from. | No | branchName |
| Additional Branches | Array | Comma seperated names of additional branches to collect commits from besides the main one, leave blank if not needed. | No | otherBranches |
| Proxy Password | Secure | The password used to authenticate with the proxy server. | No | proxyPassword |
| Proxy Server | String | The URL of the proxy server including the port number. The URL protocol can be http or https. | No | proxyServer |
| Proxy User Name | String | The user name used to authenticate with the proxy server. | No | proxyUsername |

**Note**:
* You must enter the account email address in the Username field instead of account username.
* Base API Url is https://api.bitbucket.org/2.0
* For version 1.0.36 or earlier, you must enter API token created with scope in the App Password field.

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
        "baseUrl": "[Base URL https://api.bitbucket.org/2.0]", 
        "username": "[Atlassian account email address]", 
        "password": "[API token created with scope]", 
        "projectKey": "[Project key ex: SAM]", 
        "repositoryName": "[repository name ex: sample]"
      } 
    }
```


