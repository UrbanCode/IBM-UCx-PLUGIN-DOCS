
# Jira - Usage

To use the Jira plug-in, the plug-in must be loaded and an instance created before you can configure the plug-in integration. You define configuration properties in the user interface or in a JSON file.

## Integration type

The Jira plug-in supports scheduled events integration which are listed in the following table.

| Name | Description |
| --- | --- |
| SyncJiraDataEvent | Synchronize data from a Jira server. |

## Minimum permission to integrate with Jira

The Jira Account used to generate the access token must have access to the project which is being integrated with IBM DevOps Velocity.

## Integration

To install the plug-in, perform the following steps:

1. In IBM DevOps Velocity, click **Settings** > **Integrations** > **Available**.
2. In the **Action** column for the Jira plug-in, click **Install**.

There are two methods to integrate the plug-in:

1. Using the user interface.
2. Using a JSON file

The tables in the Configuration properties topic describe the properties used to define the integration.

## Integrating the plug-in by using user interface

To integrate the plug-in using the user interface, perform the following steps:

1. In IBM DevOps Velocity, click **Settings** > **Integrations** > **Installed**.
2. In the **Action** column for the Jira plug-in, click **Add Integration**.
3. On the Add Integration dialog, enter the values for the fields to configure the integration and define communication.
4. Click **Add**.

## Integrating the plug-in by using JSON file

The JSON file contains the information for creating a value stream. Within the JSON file is a section for integrations. It is in this section that plugin properties can be defined. Refer to the JSON sample code in the Configuration Properties section.

To integrate the plug-in using a JSON, perform the following steps:

1. Navigate to **value stream page**, and then click the necessary **value stream**.
2. Click  **wrench icon**, and then Select **Edit value stream** to modify the JSON file in the code or tree view editors.
Alternatively, you can also click Download JSON option to download the JSON file, and then select the Import JSON option to upload the revised JSON file.
3. Edit the integration information in the JSON file to add the plug-in configuration properties. Refer to JSON sample code in the Configuration Properties section more details.
4. Click **Save**.

## Configuration properties

The following tables describe the properties used to configure the integration. Each table contains the field name when using the user interface and the property name when using a JSON file.

* The General Configuration Properties table describes configuration properties used by all plug-in integrations.
* The Jira Configuration Properties table describes the configuration properties that define the connection and communications with the Jira server. When using the JSON method to integrate the plug-in these properties are coded within the `properties` configuration property.

### General Configuration table

| Name | Description | Required | Property Name |
| --- | --- | --- | --- |
| NA | The version of the plug-in that you want to use. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-jira/tags). If a value is not specified, the latest version is used. | No | image |
| Integration Name | An assigned name to the value stream. | Yes | name |
| Logging Level | The level of Log4j messages to log. Valid values are: all, debug, info, warn, error, fatal, off, and trace. The default is info. | No | loggingLevel |
| NA | List of plug-in configuration properties used to connect and communicate with the Jira server. Enclose the properties within braces. | Yes | properties |
| NA | The name of the tenant. | Yes | tenant_id |
| | Unique identifier assigned to the plugin. The value for the Jira plugin is ucv-ext-jira. | yes | type |
| IBM DevOps Velocity User Access Key | Unique identifier assigned to the plug-in. The value for the Jira plug-in is `ucv-ext-jira` | Yes | NA |

### Jira Configuration Properties table

| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| Access Token | String | The access token for oauth authentication with the Jira server.If supplied, Personal access token, Username and Password will be ignored. | No | access_token |
| Access Token Secret | String | The access token secret for oauth authentication with the Jira server. | No | access_token_secret |
| Consumer Key | String | The consumer key for oauth authentication with the Jira server.If supplied, Personal access token, Username and Password will be ignored. | No | consumer_key |
| Consumer Secret | String | The consumer secret for oauth authentication with the Jira server.If supplied, Personal access token, Username and Password will be ignored. | No | consumer_key_secret |
| Password | Secure | CPassword to authenticate with the Jira. If supplied, Personal access token will be ignored.\n NOTE: For Jira cloud version the Access Token should be entered in the Password field. | No | password |
| Project Keys (Comma separated) | Array | A list of Jira Project Keys separated by commas. Example: PROJ1, PROJ2'. | Yes | jiraProjects |
| Jira JQL | String | Any valid JQL Query. JQL Query has higher priority than Project Keys . If JQL Query is added , Project Keys will not work .| No | jiraJql |
| Proxy Server | String | The URL of the proxy server including the port number. | No | proxyServer |
| Proxy User Name | String | The user name used to authenticate with the proxy server. | No | proxyUsername |
| Proxy Password | String | The password used to authenticate with the proxy server. | No | proxyPassword |
| URL | String | The base URL of the Jira server. | Yes | baseUrl |
| User Name | String | The user name used to authenticate with the Jira server.If supplied, Personal access token will be ignored.\n NOTE: For Jira Cloud version, the User Name should be entered in the UserName field. | No | username |
| Personal Access Token | Secure | Personal Access Token to authenticate with the Jira server. If supplied, Username and Password will be ignored.\n NOTE: For Jira cloud version provide username and password.\n For Jira server provide personal access token. | No | pat |
| Request Timeout | String | Timeout (in seconds) to apply to each request to the Jira server. Range is 10 to 150 seconds | No | requestTimeout |
| Custom Field Mapping | Multiline | Map Jira fields to the fields expected by this server as a Name Value pair, eg: "Epic Link": "Epic field in Jira", "Sprint": "Sprint field in Jira", "Story Points": "Story field in Jira". | No | fieldMapping |


## JSON sample code

The following example can be used as a template to include the Jira plug-in integration into the JSON file. Copy and paste the template into the JSON file
and make the appropriate changes.

```json

"integrations": [ {
"type": "ucv-ext-jira",
"tenant_id": "*tenantid*",
"name": "Jira_Plugin ",
"properties": {
    "baseUrl": "*jira_server_url*",
    "username": "*jira_server_user_name*",
    "password": "*jira_server_password*",
    "consumer_key": null,
    "consumer_secret": null,
    "access_token": null,
    "access_token_secret": null,
    "jiraJql":"*project in ("John-Project")*",
    "proxyServer": "*proxy_server_url*",
    "proxyUsername": "*proxy_server_user_name*",
    "proxyPassword": "*proxy_server_password*"
    }
} ]
```

|Back to ...||Latest Version|Jira |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[2.4.2-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-jira/ucv-ext-jira%3A2.4.2.tar.7z.001)[and 2.4.2-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-jira/ucv-ext-jira%3A2.4.2.tar.7z.002)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
