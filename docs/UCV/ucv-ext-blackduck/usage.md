
# Black Duck - Usage

To use the Black Duck plug-in you must define the integration and send an HTTP Post to request the new endpoint. The value stream map contains the properties used to define the plug-in integration within the DevOps Velocity user interface. Defining the integration includes defining configuration properties that connect the DevOps Velocity server to the Black Duck server.

1. Download the value stream map. The value stream map is a JSON file used to define integrations.
2. Edit the JSON file to include the plug-in configuration properties.
3. Save and upload the JSON file. This replaces the current JSON file with the new content.
4. View the new integration on the Integration user interface page. Click **Settings** > **Integrations** to view.

## Send HTTP Post

After the integration is complete, to import data from the Black Duck server, send an HTTP POST request to your endpoint such as the example below. The payload for the POST must have the project and version from the Black Duck server scan. 

```https:///pluginEndpoint//blackDuckScan {"project":"*project\_name*", "version":"*version\_name*", buildUrl": "*build\_url*"}```  

Where,
* *project\_name* is the project name on the Black Duck server.
* *version\_name* is the version name of a project on the Black Duck server.
* *build\_url* is the build URL from Jenkins or any other CI/CD tool. This is an optional field which links the Black Duck scan results with VSM

## Integration type

The Black Duck plug-in supports endpoint integration which are listed in the following table.


| Name | Path | Method
|
| --- | --- | --- |
| Black Duck Scan Endpoint | blackDuckScan | Post |

## Integration

From the user interface Value Steam page, click **Upload** to upload the value stream map which is a JSON file.

The JSON file contains the information for creating a value stream and integrating with the Black Duck server. The following table describes the information for the creating the value stream map.


| Name | Description | Required |
| --- | --- | ---
|
| image | The version of the plug-in that you want to use. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-blackduck/tags). If a value is not specified, the latest version is used. | No |
| name | An assigned name to the value stream. | Yes |
| loggingLevel | The level of Log4j messages to log. Valid values are: all, debug, info, warn, error, fatal, off, and trace. The default is info. | No |
| properties | List of [configuration properties](#properties) used to connect and communicate with the Black Duck server. Enclose the properties within braces. | Yes |
| tenant\_id | The name of the tenant. | Yes |
| type | Unique identifier assigned to the plug-in. The value for the Black Duck server plug-in is `ucv-ext-blackduck`. | Yes |

## Configuration Properties

The configuration properties which are included in the `properties` field are unique to the Black Duck plug-in and define the connection and communication to the Black Duck server.

| Name | Property Name | Type | Description | Required |
| --- | --- | --- | --- | --- |
| Access Token | accessToken | Secure | The access token to authenticate with the Black Duck server. You can use either this property or a password to authenticate with the server. | Yes |
| Black Duck URL | blackDuckUrl | String | The base URL of the Black Duck server. for example: `https://poc79.blackduck.synopsys.com`. | Yes |
| DevOps Velocity User Access Key | ucvAccessKey | Secure | The user access key to authenticate with the DevOps Velocity server. | No |

## Example

The following example can be used as a template to include the Black Duke plug-in integration into the JSON file. You can copy and paste the template into the JSON file and make the appropriate changes.
```

"integrations": [
{
"type": "blackDuckPlugin ",

"name": " Black Duck",
"tenant_id": "*tenant\_id*",
"properties": {
"serverUrl":
"https://poc79.blackduck.synopsys.com",
"accessToken": "*access\_token*",
"ucvAccessKey":"*user\_access\_key*"
}``

}``
]

```



|Back to ...||Latest Version|Black Duck |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.17](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-blackduck/ucv-ext-blackduck-1.0.17.tar.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
