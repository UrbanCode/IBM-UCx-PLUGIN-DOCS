
# ServiceNow - Usage

To use the ServiceNow plug-in, the plug-in must be loaded and an instance created before you can configure the plug-in integration and use plug-in automation tasks. You define configuration properties in the user interface or in a JSON file.

See the **Automation Tasks** section for information about automation tasks.

## Authentication Type

Choose required authentication type from drop down listed i.e:-

* Basic Authentication : Provide user name and password.
* OAuth Authentication : Provide client_id, client_secret and refresh token (refer oauth authentication heading)
* Bearer Authentication : Provide access token
Note: This filtering will only be applicable for velocity version 5.1.6, for below version feature will not work.

#### OAuth authentation

You must provide the following details during integration of ServiceNow plug-in to set up OAuth 2.0 authentication: 

* client_id
* client_secret
* refresh_token

#### Generating the OAuth credentials in ServiceNow 

To obtain the client_id and client_secret from your ServiceNow instance, perform the following steps: 

* **Log in** to the ServiceNow instance.
* On the left-hand navigation pane, search for **OAuth**, and then select **Application Registry**.
* Click **New**, and then select Create an **OAuth API endpoint for external clients**.
* Fill in the required details, and then click **Submit**.
* Navigate to the newly created **OAuth record**, and then click on it to view the client_id and client_secret.

For refreshToken use <https://instanceURL/oauth_token.do>
* select body x-www-form-urlencoded -> select BulkEdit

```
`grant_type:password
client_id:'yourclientId'
client_secret:'yourClientSecret'
username:'yourUsername'
password:'yourPassword`

```

## Integration type

The ServiceNow plug-in supports scheduled events integration which are listed in the following table.

| Name | Description |
| --- | --- |
| snowAllResources | Queries the ServiceNow repository for Incidents, Change request, Problems, ServiceNowWaitChangeTask, ServiceNowWaitRequests  |

## Integration

There are two methods to integrate the plug-in:

* Using the user interface
* Using a JSON file

The tables in the Configuration properties section describe the properties used to define the integration.

To install the plug-in, perform the following steps:

1. In **IBM DevOps Velocity**, click **Settings** > **Integrations** > **Available**
2. In the **Action** column for the ServiceNow plug-in, click **Install**.

### Integrating the plug-in by using user interface

To integrate the plug-in using the user interface, perform the following steps:
1. In **IBM DevOps Velocity**, click **Settings** > **Integrations** > **Installed**.
2. In the **Action** column for the ServiceNow plug-in, click **Add Integration**.
3. On the Add Integration dialog, enter values for the fields used to configure the integration and define communication.
4. Click **Add**.

### Integrating the plug-in by using JSON file

The JSON file contains the information for creating a value stream. Within the JSON file is a section for integrations. It is in this section that plugin properties can be defined. Refer to the sample JSON code.

To integrate the plug-in using a JSON, perform the following steps:

1. Navigate to **value stream page**, and then click the necessary **value stream**.
2. Click **wrench** icon, and then Select **Edit value stream** to modify the JSON file in the code or tree view editors.
3. Alternatively, you can also click **Download JSON** option to download the JSON file, and then select the Import JSON option to upload the revised JSON file.
4. Edit the **integration information** in the JSON file to add the plug-in configuration properties. Refer to JSON sample code in the Configuration Properties section more details.
5. Click **Save**.

## Automation Tasks

The following automation tasks are available in the ServiceNow plug-in:

* ServiceNow – Create Change Request and Change Task
* ServiceNow – Update Change Request and Change Task
* ServiceNow – Wait Change Request
* ServiceNow – Wait Change Task

### ServiceNow – Create Change Request and Change Task

Use this step to create a ServiceNow change request and change task.

| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| Short Description | String | A short description of the ServiceNow change request.| Yes | short_description |
| Request type | String | The type of request type for the ServiceNow application. For example: Standard, Normal, and Emergency.| Yes | requestType |
| Standard template id for change request | String | Standard template id for servicenow change request.Note: This field is required when change request type is standard. | False | standardTemplateId |
| Assignment group | String | The assignment group for the ServiceNow application. | False | assignmentGroup |
| Additional properties | Json | A list of additional properties for the change request in the format for each list item is {“property”:”value”}. For example: {“short_description”:”Created by DevOps Velocity”}. Separate each list item with a comma (,). See the ServiceNow API documentation for additional properties. | No | additionalProperties |
| Create change task | Json | To create change task , provide necessary properties. Example:[{“short_description”:”createtask”,”change_task_type”:”planning”,”description”:”changetask”,”start_date”:”2024-01-30 08:05:04″,”end_date”:”2024-01-31 08:05:13″,”outputProperty”:”example”}]. Here outputProperty holds sys_id of change task created. To create multiple change task provide comma separated objects. Example: [{},{},{}].To create under existing change request mention “parent”:”CHG0030008″,”change_request”:”CHG0030008″ along with other properties. | No | changeTaskProps |
| Output property | String | The name of the property that the sys_id of the created change request is saved. | No | outputProperty |

### ServiceNow – Update Change Request and Change Task
Use this step to update a ServiceNow change request in IBM DevOps Velocity.

| Name | type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| Change Request Number | String | Enter the change request number. Note: Either change request number or property reference must be provided | No | changeRequestNumber |
| Change request system id from property reference | String | Enter the property reference to system id. Note: Either change request number or property reference must be provided | No | propertySysId |
| Assignment group for change request | String | Assignment group for ServiceNow Application. | No | assignmentGroup |
| Change request properties | Json | Enter properties for the change request to be updated in the format for each list item is {“property”:”value”}. For example: {“short_description”:”change request description”,”planned_end_date”:”2024-01-31 07:52:53″,”planned_start_date”:”2024-01-30 07:52:47″}. Separate each list item with a comma (,). See the ServiceNow API documentation for additional properties. | No | changeRequestProperties |
| Update change task | Json | To update change task , provide necessary properties. Example to update:[{"sys_id":"abcd123","change_task_type":"planning","state":"1","planned_end_date":"2024-05-17 02:36:44","planned_start_date":"2024-05-17 02:36:30"}] Example to create:[{"short_description":"createtask","change_task_type":"planning","description":"changetask","planned_end_date":"2024-05-17 02:36:44","planned_start_date":"2024-05-17 02:36:30","outputProperty":"example"}]. If sys_id not given, it creates change task. To update multiple change task provide comma separated objects.Example: [{},{},{}] | No | updateChangeTaskProps |

### ServiceNow – Wait Change Request
Use this task to wait ServiceNow change request in DevOps Velocity.

| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| Change Request Number | String | Enter the change request number. Note: Either change request number or property reference must be provided | No | changeRequestNumber |
| Change request system id from property reference. | String | Enter the property reference to system id. Note: Either change request number or property reference must be provided | No | propertySysId |
| Field | String | The change request field to wait for a match. | Yes | field |
| Value | String | The value to match with the change request field. | Yes | value |

### ServiceNow – Wait Change Task
Use this step to create a ServiceNow wait change task.

| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| Change task number | String | Enter the change task number. Note: Either change task number or property reference must be provided | No | changeTaskNumber |
| Change task system id from property reference.| String | Enter the property reference to system id.| No | taskPropSysId |
| Change Request Number | String | Enter the change request number. Note: Either change request number or property reference must be provided | No | changeRequestNumber |
| Change request system id from property reference.| String | Enter the property reference to system id. Note: Either change request number or property reference must be provided | No | propertySysId |
| field	| String | Enter the change task field to wait for a match | Yes | field |
| Value	| String | Enter the value to match the change task field | Yes | value |

## Adding automation tasks to a release

After the plug-in is integrated automated tasks are available to add as a task within a release.

* Verify that the ServiceNow server is connected to IBM DevOps Velocity.
* On the Create Task page, select the automation task from the **Type** field drop-down list.
* Complete the properties required for the task.
* Click **Save**.

## Custom field mapping

* ServiceNow now supports user-defined fields, to enable mapping of these fields to Velocity fields, a custom field mapping option is introduced within the ServiceNow plug-in. Additionally, ServiceNow allows custom values for any field. To implement the change failure rate metric, it is essential to determine which change requests have a failed status, making value mapping necessary.

For example

```
[
  {
    "type": "change_request",
    "fieldMapping": {
      "changeType": "u_deployment_category"
    },
    "valueMapping": {
      "resolution": {
        "failed": ["unsuccessful", "rejected"]
      }
    }
  }
]

```

In the above custom mapping configuration example, we are defining a mapping for the change_request resource in ServiceNow. The custom mapping ensures that specific fields from the velocity system are appropriately mapped to corresponding fields in ServiceNow.
 
* Resource Type:

The resource type is identified as change_request. This is the type of record in ServiceNow where we want to implement the custom mapping.
 
* Field Mapping:

The field changeType in the velocity system will be mapped to the field u_deployment_category in ServiceNow. This mapping ensures that when a record is transferred or synced, the changeType value will correctly correspond to the u_deployment_category field in ServiceNow.
 
* Value Mapping for Resolution:

The resolution field in the velocity system may currently contain values like "unsuccessful" or "rejected." After applying the custom value mapping, these values will be mapped to a standardized value of failed. This ensures that records in ServiceNow will use a consistent value for the resolution status.


## Configuration Properties

The following tables describe the properties used to configure the integration. Each table contains the field name when using the user interface and the property name when using a JSON file.

* The General Configuration Properties table describes configuration properties used by all plug-in integrations.
* The ServiceNow Configuration Properties table describes the ServiceNow configuration properties that define the connection and communications with the ServiceNow server. When using the JSON method to integrate the plug-in these properties are coded within the properties configuration property.

Some properties might not be displayed in the user interface, to see all properties enable the **Show Hidden Properties** field.

### General Configuration Properties

| Name | Description | Required | Property Name |
| --- | --- | --- | --- |
| NA | The version of the plug-in that you want to use. To view available versions, click the Version History tab. If a value is not specified, the latest version is used. | No | image |
| Integration Name | An assigned name to the value stream. | Yes | name |
| Logging Level | The level of Log4j messages to display in the log file. Valid values are: all, debug, info, warn, error, fatal, off, and trace. | No | loggingLevel |
| NA | List of configuration properties used to connect and communicate with ServiceNow server. Enclose the properties within braces. | Yes | properties |
|  | The name of the tenant. | Yes | tenant_id |
| NA | Unique identifier assigned to the plug-in. The value for the ServiceNow Server plug-in is ucv-ext-servicenow | Yes | type |
| DevOps Velocity User Access Key | An auto-generated user access key provides credentials for communicating with the **Velocity** server. | Yes | NA |

### ServiceNow Configuration Properties

| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| URL | String | The URL of the ServiceNow server. | Yes | baseUrl |
| Page Size | String | The number of issues retrieved per page. | No | pageSize |
| Resource types and sys_params | String | The type/parameters of events to be synced from ServiceNow. Example:[{"table": "change_request", "sys_params": { "category": "Software" }},...] | Yes | resourceTypesAndSys_params |
| Custom Field Mapping | Json | Map ServiceNow fields to IBM DevOps Velocity as a JSON Object. | No | fieldMapping |
| Replica Server Name | String | Any non-empty string value to replica server name would enable read only replica. An Empty string will disable read only replica. | No | replicaServerName |
| Proxy Server | String | The URL of the proxy server including the port number. | No | proxyServer |
| Proxy User Name | String | The user name used to authenticate with the proxy server. | No | proxyUsername |
| Proxy Password | String | The password used to authenticate with the proxy server. | No | proxyPassword |
| Authentication Type | Dropdown | Select required authentication type. | Yes | authentication |
|..........When Basic Authentication selected..........|
| User Name | String | The username used to authenticate with the ServiceNow server. | Yes | username |
| Password | Secure | The password used to authenticate with the ServiceNow server. | Yes | password |
|..........When OAuth Authentication selected..........|
| Client Id | String | The client ID used to authenticate with the ServiceNow server using OAuth2.0. | Yes | client_id |
| Client Secret | Secure | The client secret used for authentication with the ServiceNow server using OAuth2.0. | Yes | client_secret |
| Refresh Token | Secure | The refresh token used for authentication with the ServiceNow server using OAuth2.0. | Yes | refresh_token |
|..........When Bearer Authentication selected..........|
| Access Token | Secure | The access token used to authenticate with the ServiceNow server. You can use either this property or the Password property for authentication. NOTE: When using OAuth 2.0, the Access Token will be ignored. | Yes | accessToken |

### JSON code sample

The following sample code can be used as a template to define the integration within the JSON file for a value stream. Copy and paste the template into the JSON file Integration section and make the appropriate changes.

```
integrations": [
    {
      "type": "ucv-ext-servicenow",
      "name": "Plugin for ServiceNow",
      "tenant_id": "tenant_id",
      "logginglevel": "info",
      "properties": {
        "baseUrl": "url_servicenow_server",
        "authentication": "authentication_type (basicAuth OR oauth OR bearerAuth)",
        "client_id": "client_Id", 
        "client_secret": "client_secret",
        "refresh_token": "refresh_token",
        "resourceTypesAndSys_params": "[   
             { "table": "table_name"}, 
         ]"
        "proxyServer": "proxy_server_url",
        "proxyUsername": "proxy_server_user_name",
        "proxyPassword": "proxy_server_password"
        } 
    }
]

```


| Back to ... || Latest Version | ServiceNow |||
| :---: | :---: | :---: | :---: | :---: | :---: |

| [All Plugins](../../index.md) | [Velocity Plugins](../README.md) | [1.1.16-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-servicenow/ucv-ext-servicenow%3A1.1.16.tar.7z.001)[and 1.1.16-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-servicenow/ucv-ext-servicenow%3A1.1.16.tar.7z.002) | [Readme](README.md) | [Overview](overview.md) | [Downloads](downloads.md) |