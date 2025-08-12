## Integration Type
The sap-charm plug-in supports scheduled events integration which are listed in the following table.

| Name | Description |
| --- | --- |
| Sync Jira Issue | Query Jira for any new issues or updates to issues. |

### General Configuration Properties

| Name | Description | Required | Property Name |
| --- | --- | --- | --- |
| NA | The version of the plug-in that you want to use. To view available versions, click the **Version History** tab. If a value is not specified, the version named latest is used. | No | image |
| Integration Name | An assigned name to the value stream. | Yes | name |
| Logging Level | The level of Log4j messages to display in the log file. Valid values are: all, debug, info, warn, error, fatal, off, and trace. | No | loggingLevel |
|  | The name of the tenant. | Yes | tenant\_id |
| NA | Unique identifier assigned to the plug-in. The value for the sap-charm plug-in is `ucv-ext-sap-charm` | Yes | type |

### sap-charm Configuration Properties table

| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| SAP Url (ES1) | String | The base URL of the SAP ES1 server | No | sapUrl |
| SAP Url (N09) (Optional) | String | The base URL of the SAP N09 server if ATC Checks are required else leave it empty. | No | sapUrlNine |
| SAP User | String | The SAP user name | No | sapUser |
| SAP Password | Secure | The SAP user password | No | sapPassword |
| SAP Project | String | The SAP project name. | No | sapProject |
| SAP Custom Field Mapping | String | Map Jira custom fields for storing SAP data in Jira, eg -> {"sap_user": "SAP User V2","sap_charm_id": "SAP CharmID V2","customizing_transport_id_count":"Customizing Transport ID Count","workbench_transport_id_count":"Workbench Transport ID Count",sap_cycle_id": "SAP CycleID V2","sap_project": "SAP Project V2","sap_landscape_id": "SAP Landscape ID V2"} | No | sapCustomFieldMapping |
| Access Token | String | The access token for oauth authentication with the Jira server.If supplied, Personal access token, Username and Password will be ignored. | No | access_token |
| Access Token Secret | String | The access token secret for oauth authentication with the Jira server. | No | access_token_secret |
| Jira Consumer Key | String | The consumer key for oauth authentication with the Jira server.If supplied, Personal access token, Username and Password will be ignored. | No | consumer_key |
| Jira Consumer Secret | String | The consumer secret for oauth authentication with the Jira server.If supplied, Personal access token, Username and Password will be ignored. | No | consumer_key_secret |
| Jira Password | Secure | CPassword to authenticate with the Jira. If supplied, Personal access token will be ignored.\n NOTE: For Jira cloud version the Access Token should be entered in the Password field. | No | password |
| Project Keys (Comma separated) | Array | A list of Jira Project Keys separated by commas. Example: PROJ1, PROJ2'. | Yes | jiraProjects |
| Jira JQL | String | Any valid JQL Query. JQL Query has higher priority than Project Keys . If JQL Query is added , Project Keys will not work .| No | jiraJql |
| Proxy Server | String | The URL of the proxy server including the port number. | No | proxyServer |
| Proxy User Name | String | The user name used to authenticate with the proxy server. | No | proxyUsername |
| Proxy Password | String | The password used to authenticate with the proxy server. | No | proxyPassword |
| URL | String | The base URL of the Jira server. | Yes | baseUrl |
| Jira User Name | String | The user name used to authenticate with the Jira server.If supplied, Personal access token will be ignored.\n NOTE: For Jira Cloud version, the User Name should be entered in the UserName field. | No | username |
| Jira Personal Access Token | Secure | Personal Access Token to authenticate with the Jira server. If supplied, Username and Password will be ignored.\n NOTE: For Jira cloud version provide username and password.\n For Jira server provide personal access token. | No | pat |
| SAP Url (ES1) | String | The base URL of the SAP ES1 server | No | sapUrl |
| Jira Custom Field Mapping | Multiline | Map Jira fields to the fields expected by this server as a Name Value pair, eg: "Epic Link": "Epic field in Jira", "Sprint": "Sprint field in Jira", "Story Points": "Story field in Jira". | No | fieldMapping |

|Back to ...||Latest Version|SAP ChaRM ||
| :---: | :---: | :---: | :---: | :---: | 
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.1](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-sap-charm/ucv-ext-sap-charm:1.0.1.tar.7z.001)|[Readme](README.md)|[Downloads](downloads.md)|