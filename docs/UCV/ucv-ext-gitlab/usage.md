
# GitLab - Usage

To use the GitLab plugin, the plugin must be loaded and an instance created before you can configure the plugin integration. You define configuration properties in the user interface or in a JSON file.

## Integration type

The GitLab plug-in supports scheduled events integration which are listed in the following table.

| Name | Description |
| --- | --- |
| syncGitLabIssue | Queries the GitLab Server for issues in a project. |
| syncGitLabPull | Queries the GitLab Server for merge requests in a project. |
|syncGitLabCommit | Queries the GitLab Server for commits in a project. |
| syncGitLabBuild | Queries the GitLab Server for builds in a project. |
| Sync Gitlab deployments | A Gitlab deployments that will occur on a timer |
| Sync Gitlab Pipelines | Gitlab Pipeline that will occur on a timer |

## Integration

To install the plug-in, perform the following steps:

1. In IBM DevOps Velocity, click **Settings** > **Integrations** > **Available**.
2. In the **Action** column for the GitLab plug-in, click **Install**.

There are two methods to integrate the plug-in:

1. Using the user interface
2. Using a JSON file

The tables in the Configuration properties describe the properties used to define the integration.

### Integrating the plug-in by using user interface

To integrate the plug-in using the user interface, perform the following steps:

1. In IBM DevOps Velocity, click **Settings** > **Integrations** > **Installed**.
2. In the **Action** column for the GitLab plug-in, click **Add Integration**.
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

## Configuration Properties

The following tables describe the properties used to configure the integration. Each table contains the field name when using the user interface and the property name when using a JSON file.

* The General Configuration Properties table describes configuration properties used by all plugin integrations.
* The GitLab Configuration Properties table describes the configuration properties that define the connection and communications with the GitLab server.

Some properties might not be displayed in the user interface, to see all properties enable the **Show Hidden Properties** field.

### General Configuration Properties table

| Name | Description | Required |
| --- | --- | --- |
| image | The version of the plug-in that you want to use. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-gitlab/tags). If a value is not specified, the latest version is used. | No |
| loggingLevel | The level of Log4j messages to display in the log file. Valid values are: all, debug, info, warn, error, fatal, off, and trace. | No |
| name | An assigned name to the value stream. | Yes |
| properties | List of [configuration properties](#properties) used to connect and communicate with the GitLab server. Enclose the properties within braces. | Yes |
| tenant\_id | The name of the tenant. | Yes |
| type | Unique identifier assigned to the plug-in. The value for the GitLab plug-in is `ucv-ext-gitlab`. | Yes |

### GitLab Configuration Properties table

| Name | Type | Description | Required | Project Name |
| --- | --- | --- | --- | --- |
| URL | String | The URL of the GitLab server. | Yes | baseUrl |
| Private Token | Secure | The Gitlab server access token. For more information, see the GitLab documentation at https://gitlab.com/profile/personal_access_tokens. | Yes | private\_token |
| DevOps Velocity User Access Key | Secure | The user access key used to authenticate with the DevOps Velocity server. | Yes | ucvAccessKey |
| Priorty Field Mapping using Labels | Array | Map GitLab label for Priorty to this server. The priorty field label must be a key vaule pair connected by “:” or “-“. Example: If Gitlab Label for priorty is priortyKey:High, then pass priortyKey in this field. | No | fieldMapping |
| Proxy Server | String | The URL of the proxy server including the port number. | No | proxyServer|
| Proxy User Name | String | The user name used to authenticate with the proxy server. | No | proxyUsername |
| Proxy Password | Secure | The password used to authenticate with the proxy server. | No | proxyPassword |
| Project Names (Comma Separated List) | Array | You can import the source data by providing a list of GitLab Project Names, which can include regular expressions for pattern matching. For instance, you can use wildcards such as * to match any character sequence, such as sample* to match project names that start with sample. Example: sample, sample1, etc. | No | projectNames |
| Team Space Id | FilterableSelect | The Team space associated with the integration. | No | teamspaceId |
| Team Id | FilterableSelect | The teams associated with the integration. | No | teamId |
| Branch | String | GitLab repositories branch, The branch to pull commits from. | No | branchName |
| Additional Branches (Comma Separated List) | Array | The name of additional branches to collect commits from besides the main one, leave blank if not needed. | No | otherBranches |

## Example


The following example can be used as a template to include the GitLab plug-in integration into the JSON file. Copy and paste the template into the JSON file and make the appropriate changes.


```

"integrations":[
{

"type":"ucv-ext-gitlab",
"tenant_id":"tenantId",
"name":"my-repo",
"disabled":false,

"properties":{
"ucvAccessKey":"key",
"baseUrl":"https://gitlab.com",

"private_token":"token",
"projectIds":[
"8918",
"12345"
],

"proxyServer": "http://localhost:3128",
"proxyUsername": "admin",
"proxyPassword": "1234",

"fieldMapping:[
"priorityKey1",
"priorityKey2"
]
}``
}``
]

```


