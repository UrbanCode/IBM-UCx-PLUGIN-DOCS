
# IBM Engineering Workflow Management (EWM) - Usage

To use the IBM Engineering Workflow Management (EWM) plug-in, the plug-in must be loaded and an instance created before you can configure the plug-in integration. Configuration properties are defined using the product user interface or a JSON file.

## Integration type

The EWM plug-in supports scheduled events integration. There is only one scheduled event which is described in the following table.

| Name | Description |
| --- | --- |
| SyncEWMIssuesEvent | Queries the IBM EWM server for new or updated work items. If a work item already exists, it is updated. |

## Integration

There are two methods to integrate the plug-in:

* Using the user interface

* Using a JSON file

For details see [Using plug-ins in DevOps Velocity](https://community.ibm.com/community/user/wasdevops/blogs/osman-burucu/2022/07/20/using-plug-ins-in-urbancode-velocity&preview=true).

### Using the user interface

1. From the Plugins page, click **Settings** > **Integrations** > **Plugins**.
2. Under the Action column for the plug-in,click **Add Integration**.
3. On the Add Integration page enter values for the fields used to configure the integrationand define communication.
4. Click **Save**.

### Using a JSON file

The JSON file contains the information for creating a value stream and integrating with the IBM Engineering WorkFlow Management (EWM) server. The following table describes the information for the creating a DevOps Velocity value stream map.

1. Download the value stream map. The value stream map is a JSON file used to define integrations.
2. Edit the JSON file to include the plug-in configuration properties.
3. Save and upload the JSON file. This replaces the current JSON file with the new content.
4. View the new integration on the Integrations page.

## Configuration properties

The following tables describe the properties used to configure the integration. Each table contains the field name when using the user interface and the property name when using a JSON file.

* The General Configuration Properties table describes configuration properties used by all plug-in integrations.
* The IBM Engineering WorkFlow Management (EWM) Configuration Properties table describes the IBM Engineering WorkFlow Management (EWM) configuration properties that define the connection and communications with the IBM Engineering WorkFlow Management (EWM) server. When using the JSON method to integrate the plug-in these properties are coded within the `properties` configuration property.

### General Configuration Properties

| Name | Description | Required | Property Name |
| --- | --- | --- | --- |
| NA | The version of the plug-in that you want to use. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-bitbucket-server/tags). If a value is not specified, the latest version is used. | No | image |
| Integration Name | An assigned name to the value stream. | Yes | name |
| Logging Level | The level of Log4j messages to display in the log file. Valid values are: all, debug, info, warn, error, fatal, off, and trace. | No | loggingLevel |
| NA | List of [configuration properties](#ibm-engineering-workflow-management-ewm-configuration-properties) used to connect and communicate with the IBM Engineering WorkFlow Management (EWM) server. Enclose the properties within braces. | Yes | properties |
|  | The name of the tenant. | Yes | tenant_id |
| NA | Unique identifier assigned to the plug-in. The value for the IBM Engineering WorkFlow Management (EWM) Server plug-in is `ucv-ext-ewm/tags` | Yes | type |

### IBM Engineering WorkFlow Management (EWM) Configuration Properties

| Name | Type | Description | Required | Project Name |
| --- | --- | --- | --- | --- |
| Password | String | Thepassword used to authenticate with IBM EWM server. | Yes | password |
| Projects | Array | A list of projects from which to import work items. | Yes | projects |
| Server URL | String | The URL of the IBM EWM server. For example: <https://server.com/ccm>. | Yes | serverUrl |
| Since | String | The number of months for which data is to be pulled. The default is 12 months. | No | since |
| DevOps Velocity User Access Key | String | The user access key used to authenticate with the DevOps Velocity server. | Yes | ucvAccessKey |
| User ID | String | The user name used to authenticate with the IBM EWM server. | Yes | userId |
| Proxy Password | Secure | The password used to authenticate with the proxy server. | No | Yes | proxyPassword |
| Proxy Server | String | The URL of the proxy server including the port number. | No | Yes | proxyServer |
| Proxy User Name | String | The user name used to authenticate with the proxy server. | No | Yes | proxyUsername |

## Example

The following example can be used as as template to include the Engineering Workflow Management plug-in integration into the JSON file. Copy and paste the template into the JSON file and make the appropriate changes.

```json

"integrations": [
    {
        "type": "ucv-ext-ewm",
        "name": "*integration_name*",
        "logginglevel": "info",
        "tenant_id": "*tenant_id*",
        "properties": {
            "serverUrl":"*url_ewm_server*",
            "projects" : ["*project_name*"],
            "userId"   : "*user_id*",
            "password" : "*password*",
            "since"    : "60",
            "ucvAccessKey":"a-valid-user-access-key"
        }
    }
]

```

## Demonstration

View a [video](https://www.youtube.com/watch?v=mY14Kn1R0EI) demonstrating the use of the EWM plug-in.

|Back to ...||Latest Version|IBM Engineering Workflow Management (EWM) |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.1.27](raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-ewm/ucv-ext-ewm:1.1.27.tar.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
