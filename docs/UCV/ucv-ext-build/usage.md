
# DevOps Build - Usage

To use the DevOps Build plug-in, you must load the plug-in, and then configure the plug-in for integration.
Refer configuration properties table for more details.

## Integration type

The DevOps Build plug-in supports scheduled events integration which are listed in the following table.

| Name | Description | Interval |
| --- | --- | --- |
| SyncApplicationsEvent | Query the Build server for Build Projects | 5 minutes |
| SyncBuildsEvent | Query the Build server for Build Lives | 5 minutes |
| SyncProcessesEvent | Query the Build server for Build Processes | 5 minutes |

## Integration

There are two methods to integrate the plug-in:

* Using the user interface
* Using a JSON file

The tables in the Configuration properties section describe the properties used to define the integration.

To install the plug-in, perform the following steps:

1. In **IBM DevOps Velocity**, click **Settings** > **Integrations** > **Available**
2. In the **Action** column, for the DevOps Build plug-in, click **Install**.

### Integrating the plug-in by using user interface

To integrate the plug-in using the user interface, perform the following steps:
1. In **IBM DevOps Velocity**, click **Settings** > **Integrations** > **Installed**.
2. In the **Action** column for the DevOps Build plug-in, click **Add Integration**.
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

## Configuration Properties

The following tables describe the properties used to configure the integration. Each table contains the field name when using the user interface and the property name when using a JSON file.

* The General Configuration Properties table describes configuration properties used by all plug-in integrations.
* The DevOps Build Configuration Properties table describes the DevOps Build configuration properties that define the connection and communications with the DevOps Build server. When using the JSON method to integrate the plug-in these properties are coded within the properties configuration property.

Some properties might not be displayed in the user interface, to see all properties enable the **Show Hidden Properties** field.

### General Configuration Properties

| Name | Description | Required | Property Name |
| --- | --- | --- | --- |
| NA | The version of the plug-in that you want to use. To view available versions, click the Version History tab. If a value is not specified, the latest version is used. | No | image |
| Integration Name | An assigned name to the value stream. | Yes | name |
| Logging Level | The level of Log4j messages to display in the log file. Valid values are: all, debug, info, warn, error, fatal, off, and trace. | No | loggingLevel |
| NA | List of configuration properties used to connect and communicate with DevOps Build server. Enclose the properties within braces. | Yes | properties |
|  | The name of the tenant. | Yes | tenant_id |
| NA | Unique identifier assigned to the plug-in. The value for the DevOps Build Server plug-in is ucv-ext-build | Yes | type |
| DevOps Velocity User Access Key | An auto-generated user access key provides credentials for communicating with the **Velocity** server. | Yes | NA |

### DevOps Build Configuration Properties

| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| DevOps Build Server URL | String | Base URL of the Build server. | yes | baseUrl |
| Username | String | Username to authenticate with the DevOps Build server. If username and password supplied, access token will be ignored | No | username |
| Password | Secure | Password to authenticate with the DevOps Build. If username and password supplied, access token will be ignored. | No | password |
| Access Token | Secure | Token to authenticate against DevOps Build. If supplied, username and password can be ignored. | No | buildToken |
| Project Name | String | Comma-separated list of project name(s) to import. Example: project1,project2 | yes | projects |
| Use Build Stamp as version | Boolean | If checked, the build stamp will be used as the version. If unchecked, the build ID will be used as the version. (default value = true) | No | version |
| Process Name | String | Comma-separated primary process names, matching the order of projects. Leave blank if not applicable. Example - If project1, project2 is entered in Project Name, then process1, process2 → process1 of project1 and process2 of project2 will be considered as build processes | No | process |

* **Usage example for Process Name field**

1)  Input:
        Project Name: project1, project2
        Process: process1, process2
    Result:
        process1 of project1 and process2 of project2 will be considered as the primary build processes.
        Only the buildLives generated by these specified processes will be pulled.

2)  Input:
        Project Name: project1, project2
        Process: process1
    Result:
        process1 of project1 will be used as the primary build process.
        For project2, buildLives from all its processes will be pulled.

If the process field is omitted entirely, buildLife from all processes for each specified project will be considered.

* **Note**:
* If using username and password, set the username to 'PasswordIsAuthToken' and use the personal access token as the password.
* If using only an access token, omit the username and password fields and provide just the personal access token as access token.

### JSON code sample

The following sample code can be used as a template to define the integration within the JSON file for a value stream. Copy and paste the template into the JSON file Integration section and make the appropriate changes.

## Example using the access key

```
integrations": [
    {
      "type": "ucv-ext-build",
      "name": "Plugin for build",
      "tenant_id": "tenant_id",
      "logginglevel": "info",
      "properties": {
        "_userAccessKey": "IBM_DevOps_velocity_user_accesskey",
        "baseUrl": "url_devops_build_server",
        "username": "user_name",
        "password": "password",
        "buildToken": "build_token",
        "projects": "proj1,proj2",
        "version": true
        } 
    }
]
```
