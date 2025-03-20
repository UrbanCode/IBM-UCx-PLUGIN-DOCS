
# Plan - Usage

To use the Plan plug-in, the plug-in must be loaded and an instance created before you can configure the plug-in integration. You define configuration properties in the user interface or in a JSON file.

## Integration type

The Plan plug-in supports scheduled events integration which are listed in the following table.

| Name | Description |
| --- | --- |
| syncCompassIssueEvent | Query the DevOps Plan server for issues in a project. |

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
* The Plan Configuration Properties table describes the configuration properties that define the connection and communications with the Plan server. When using the JSON method to integrate the plug-in these properties are coded within the `properties` configuration property.

### General Configuration table

| Name | Description | Required |
| --- | --- | --- |
| image | The version of the plug-in that you want to use. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-compass/tags). If a value is not specified, the latest version is used. | No |
| name | An assigned name to the value stream. | Yes |
| loggingLevel | The level of Log4j messages to log. Valid values are: all, debug, info, warn, error, fatal, off, and trace. The default is info. | No |
| properties | List of plug-in configuration properties used to connect and communicate with the Plan server. Enclose the properties within braces. | Yes |
| tenant_id | The name of the tenant. | Yes |
| type | Unique identifier assigned to the plug-in. The value for the Plan plug-in is `ucv-ext-compass` | Yes |

### Plan Configuration Properties table

| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| DevOps Velocity User Access Key | Secure | The user access key to authenticate with the DevOps Velocity server. This property is not available starting with version 1.0.18 of the plugin. | Yes | ucvAccessKey |
| URL | String | The URL and port of the DevOps Plan server. | Yes | serverUrl |
| Username | String | The user name to authenticate with the DevOps Plan server. | Yes | userName |
| Password | Secure | The password to authenticate with the DevOps Plan server. | No | password |
| Repo | String | The repository name of the DevOps Plan project. | Yes | repo |
| Database | String | The name of the DevOps Plan database from where the data to be pulled. | Yes | db |
| Custom Field Mapping | Multiline | Map DevOps Plan fields to Velocity as a JSON Object.| Yes | fieldMapping |
| DevOps Plan Server Timezone | Dropdown | The time zone offset from the Coordinated Universal Time (UTC). | Yes | timezone |
| Import issues or work items from a specified number of months | String | Issues or work items are imported for the specified number of months when the plugin runs for the first time. | No | since |

### Custom mapping field properties

Custom mapping fields are not required because mappings can be derived from the DevOps Plan JSON data. However, when specifying custom mapping fields, they must be provided through the DevOps Plan configuration or the DevOps Velocity Create Integration form. The Create Integration form takes precedence.

| Property Name | Description |
| --- | --- |
| type | The type of work item. For example: Defect. |
| name | The name or headline in DevOps Plan. |
| creator | The creator of the work item. For example: submitter or created by field in HCL DevOps Plan. |
| owner | The owner of the work item. This can be the Owner field in HCL DevOps Plan. |
| priority | The priority of the work item. This can be the Priority or Hierarchy field in HCL DevOps Plan. |
| description | The description or headline in HCL DevOps Plan. |
| children | This field is applicable for work items of type Feature only. This field can be used to specify the Stories under the Feature. |
| parent | This field is applicable for work items of type Story only. This field can be used to specify the Feature for the Story. |


## Example

The following example can be used as a template to include the Plan plug-in integration into the JSON file. Copy and paste the template into the JSON file
and make the appropriate changes.


```json
Example Integration for type Defect

"integrations": [
  {
    "type": "ucv-ext-compass",
    "tenant_id": "<Tenant Id>",
    "name": "<Integration-Name>",
    "disabled": false,
    "properties": {
      "ucvAccessKey": "<User Access Key>",
      "serverUrl": "<server-url>",
      "userName": "<username>",
      "password": "<password>",
      "repo": "<repo>",
      "db": "<db>",
      "fieldMapping": "[{\"type\": \"Defect\", \"fieldMapping\": {\"name\": \"Owner\", \"creator\": \"Submitter\", \"owner\": \"Owner\", \"priority\": \"Priority\", \"description\": \"Description\"}}]",
      "timezone": "<timezone>"
      "since": "<since>"
    }
  }
]

Example Integration for type Feature

"integrations": [
  {
    "type": "ucv-ext-compass",
    "tenant_id": "<Tenant Id>",
    "name": "<Integration-Name>",
    "disabled": false,
    "properties": {
      "ucvAccessKey": "<User Access Key>",
      "serverUrl": "<server-url>",
      "userName": "<username>",
      "password": "<password>",
      "repo": "<repo>",
      "db": "<db>",
      "fieldMapping": "[{\"type\": \"Feature\", \"fieldMapping\": {\"name\": \"Owner\", \"creator\": \"Submitter\", \"owner\": \"Owner\", \"priority\": \"Priority\", \"description\": \"Description\", \"children\": \"Stories\"}}]",
      "timezone": "<timezone>"
      "since": "<since>"
    }
  }
]

Example Integration for type Story

"integrations": [
  {
    "type": "ucv-ext-compass",
    "tenant_id": "<Tenant Id>",
    "name": "<Integration-Name>",
    "disabled": false,
    "properties": {
      "ucvAccessKey": "<User Access Key>",
      "serverUrl": "<server-url>",
      "userName": "<username>",
      "password": "<password>",
      "repo": "<repo>",
      "db": "<db>",
      "fieldMapping": "[{\"type\": \"Story\", \"fieldMapping\": {\"name\": \"Owner\", \"creator\": \"Submitter\", \"owner\": \"Owner\", \"priority\": \"Priority\", \"description\": \"Description\", \"parent\": \"Feature\"}}]",
      "timezone": "<timezone>"
      "since": "<since>"
    }
  }
]
```

|Back to ...||Latest Version|Plan |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.1.55-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-compass/ucv-ext-compass%3A1.1.55.tar.7z.001)[and 1.1.55-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-compass/ucv-ext-compass%3A1.1.55.tar.7z.002)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
