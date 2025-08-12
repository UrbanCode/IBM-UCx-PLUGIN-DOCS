
# GitLab - Usage

To use the GitLab plug-in you must define the integration, create a value stream, and upload the integration.

The value stream map contains the properties, you will use to define the plug-in integration. Basically, the plug-in integration is defined with a value stream within the DevOps Velocity user interface. Defining the integration includes defining configuration properties that connect the DevOps Velocity server to the GitLab server.


The basic flow to use the plug-in includes:

1. Download the value stream map. The value stream map is a JSON file used to define integrations.
2. Edit the JSON file to include the plug-in configuration properties.
3. Save and upload the JSON file. This replaces the current JSON file with the new content.
4. View the new integration on the Integration user interface page.

## Integration type

The GitLab plug-in supports scheduled events integration which are listed in the following table.


| Name | Description |
| --- | --- |
| syncGitLabIssue | Queries the GitLab Server for issues in a project. |
| syncGitLabPull | Queries the GitLab Server for merge requests in a project. |
|syncGitLabCommit | Queries the GitLab Server for commits in a project. |
| syncGitLabBuild | Queries the GitLab Server for builds in a project. |
| Sync Gitlab deployments | A Gitlab deployments that will occur on a timer |
| Sync Gitlab issues | A Gitlab issues that will occur on a timer |
| Sync Gitlab Pipelines | Gitlab Pipeline that will occur on a timer |

## Integration

From the user interface Value Steam page, click **Upload** to upload the value stream map which is a JSON file.

The JSON file contains the information for creating a value stream and integrating with the GitLab server. The following table describes the information for the creating a DevOps Velocity value stream map.


| Name | Description | Required |
| --- | --- | --- |
| image | The version of the plug-in that you want to use. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-gitlab/tags). If a value is not specified, the latest version is used. | No |
| loggingLevel | The level of Log4j messages to display in the log file. Valid values are: all, debug, info, warn, error, fatal, off, and trace. | No |
| name | An assigned name to the value stream. | Yes |
| properties | List of [configuration properties](#properties) used to connect and communicate with the GitLab server. Enclose the properties within braces. | Yes |
| tenant\_id | The name of the tenant. | Yes |
| type | Unique identifier assigned to the plug-in. The value for the GitLab plug-in is `ucv-ext-gitlab`. | Yes |

## Configuration Properties

The configuration properties which are included in the `properties` field are unique to the GitLab plug-in and define the connection and communication to the GitLab server.


| Name | Type | Description | Required | Project Name |
| --- | --- | --- | --- | --- |
| URL | String | The URL of the GitLab server. | Yes | baseUrl |
| Private Token | String | The Gitlab server access token. For more information, see the GitLab documentation at https://gitlab.com/profile/personal_access_tokens. | Yes | private\_token |
| DevOps Velocity User Access Key | String | The user access key used to authenticate with the DevOps Velocity server. | Yes | ucvAccessKey |
| Priorty Field Mapping using Labels | Array | Map GitLab label for Priorty to this server. The priorty field label must be a key vaule pair connected by “:” or “-“. Example: If Gitlab Label for priorty is priortyKey:High, then pass priortyKey in this field. | No | fieldMapping |
| Proxy Server | String | The URL of the proxy server including the port number. | No | proxyServer|
| Proxy User Name | String | The user name used to authenticate with the proxy server. | No | proxyUsername |
| Proxy Password | String | The password used to authenticate with the proxy server. | No | proxyPassword |
| Project Names (Comma Separated List) | Array | You can import the source data by providing a list of GitLab Project Names, which can include regular expressions for pattern matching. For instance, you can use wildcards such as * to match any character sequence, such as sample* to match project names that start with sample. Example: sample, sample1, etc. | No | projectNames |
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



|Back to ...||Latest Version|GitLab |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[2.2.69-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-gitlab/ucv-ext-gitlab%3A2.2.69.tar.7z.001)[and 2.2.69-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-gitlab/ucv-ext-gitlab%3A2.2.69.tar.7z.002)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
