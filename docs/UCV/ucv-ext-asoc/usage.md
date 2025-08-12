
# HCL AppScan on Cloud (ASoC) - Usage

To use the HCL AppScan on Cloud plug-in (ASoC), the plug-in must be loaded, and an instance is created before you can configure the plug-in integration. You can define configuration properties either in the user interface or in a JSON file of a value stream.

## Integration type
The ASoC plug-in supports endpoint integration and a scheduled event integration.

### Endpoint Integration
You can use the ASoC plug-in’s endpoint integration to sync or import the scan data into DevOps Velocity’s application vulnerabilities metrics by triggering the API endpoint with GET or POST request.

The endpoint integration is listed in the following table.

#### Endpoints

|Name |Path |Request Method|
| --- | --- | --- |
|ASoC Scan|asocScan|GET (For version 2.0.1 or later) or POST (For version 2.0.0 or earlier)|

#### Notes

The following two features are available from version 2.0.1 or later of the plug-in:

* The plug-in imports historical scan data from ASoC.
    * To sync or import the scan data into DevOps Velocity, update the ASoC applications field in the plug-in configuration with the application names in ASoC. The plug-in will import the latest scan data from ASoC.
* The plug-in supports ASoC webhooks.
    * The plug-in endpoint can be defined as a webhook in ASoC. When the webhook is called by ASoC after every scan execution, the plug-in will run and import the scan data from ASoC to DevOps Velocity.
    * To call out ASoC scan using REST API, pass the ‘build url’ as a ‘Comment’ as shown in the below example. As a result, the plug-in imports the ‘build url’ and associate the scan result to the specific ‘build’ / ‘build url’ in DevOps Velocity.
    ```
    curl --location --request POST 'https://cloud.appscan.com/api/v2/Scans/MobileAnalyzer' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --header 'Authorization: Bearer bearer-token-goes-here' \
    --data-urlencode 'ApplicationFileId=file-id-goes-here' \
    --data-urlencode 'ScanName=scan-name-goes-here' \
    --data-urlencode 'AppId=ASoC-AppId-goes-here' \
    --data-urlencode 'Execute=true' \
    --data-urlencode 'Comment=https://build-url-goes-here'
    ```
    * Running the ASoC scan using User Interface (UI) will not associate the scan result to the build url in DevOps Velocity.
    * To use the webhook, you must install AppScan presence on the machine where DevOps Velocity is running. For more information, see ASoC documentation.
    * The following is an example of creating a webhook in ASoC.
    ```
    curl curl --location --request POST 'https://cloud.appscan.com/api/V2/Webhooks' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --header 'Authorization: Bearer bearer-token-value-goes-here' \
    --data-urlencode 'PresenceId=presence-id-goes-here' \
    --data-urlencode 'Uri=plugin-endpoint-goes-here?ScanExecutionId={SubjectId}' \
    --data-urlencode 'Event=ScaneExecutionCompleted' \
    --data-urlencode 'Global=true'    
    ```    

The following example shows calling the plug-in end point using a ‘non webhook’ method, such as CURL, Postman, or as a part of the CI/ CD pipeline.

Send an HTTP GET (For version 2.0.1 or later) or HTTP POST (For version 2.0.0 or earlier) request to your endpoint.

**Sample endpoint:**
https:///pluginEndpoint//asocScan

The payload for the POST is shown below.
```
{"scanId":"", "buildUrl": ""}
```

#### Payload Details

|Name|Description|Required|
| --- | --- | --- |
|scanId|The scan ID from the scan ran in ASoC. It is a mandatory field to render the scan results in Insights.	|Yes|
|buildUrl|The build URL from the CI/CD tool such as Jenkins, HCL DevOps Deploy and so on. It is an optional field which links the ASoC scan results with DevOps Velocity|No|

### Scheduled Integration

You can use the HCL AppScan on Cloud plug-in’s scheduled event integration to automatically sync or import the scan data into DevOps Velocity’s application vulnerabilities metrics at regular interval of time. Currently, HCL AppScan on Cloud plug-in sync or import scan data from HCL AppScan on Cloud to DevOps Velocity at an interval of 5 minutes.

### Integration Type

| Name | Description                                                                                         |
| ---- | --------------------------------------------------------------------------------------------------- |
| Sync ASoC Data | Sync scan data from ASoC |

## Integration

There are two methods to integrate the plug-in:

* Using the user interface
* Using a JSON file

The tables in the Configuration properties topic describe the properties used to define the integration.

### Using the user interface

To install the plug-in, perform the following steps:

1. From the home page, click **Settings > Integrations > Available**.
2. Under the **Action** column for the ASOC plug-in, click **Install**.

To integrate the plug-in, perform the following steps:

1. From the home page, click **Settings > Integrations > Plugins**.
2. In the **Action** column for the ASOC plug-in, click **Add Integration**.
3. On the Add Integration page, enter values for the fields used to configure the integration and define communication.
4. Select the **Run as Scheduled Event** checkbox.
**Note:** Select the checkbox only if you want to integrate the plug-in as a scheduled event and clear the checkbox if you want to integrate the plug-in as an endpoint.
5. Click **Save**.

### Using a JSON file

The JSON file contains the information for creating a value stream. Within the JSON file there is a section for integrations. In this section the plug-in properties can be defined.

1. From a value stream page, download the value stream map. The value stream map is a JSON file used to define integrations.
2. Edit the JSON file to include the plug-in configuration properties.
3. Save and upload the JSON file. This replaces the current JSON file with the new content.
4. View the new integration on the Integrations page.

## Minimum permission to integrate with HCL AppScan on Cloud (ASoC)

The HCL AppScan on Cloud (ASoC) Account used to generate the token must have access to the project which is being integrated with DevOps Velocity.

## Configuration properties

The following tables describe the properties used to configure the integration. Each table contains the field name when using the user interface and the property name when using a JSON file.

The General Configuration Properties table describes configuration properties used by all plug-in integrations. The HCL AppScan on Cloud configuration properties table describes the configuration properties that define the connection and communications with the DevOps Velocity server. When using the JSON method to integrate the plug-in these properties are coded within the properties configuration property.

Some properties might not be displayed in the user interface, to see all properties enable the Show Hidden Properties field.

### General configuration properties

| Name | Description | Required |
| --- | --- | --- |
| image | The version of the plug-in that you want to use. To view available versions, see the [UrbanCode DockerHub](<https://hub.docker.com/r/UrbanCode/ucv-ext-asoc/tags>). If a value is not specified, the latest version is used. | No |
| name | An assigned name to the value stream. | Yes |
| properties | List of [configuration properties](#properties) used to connect and communicate with the Application Security on Cloud server. Enclose the properties within braces. | Yes |
| tenant\_id | The name of the tenant. | Yes |
| type | Unique identifier assigned to the plug-in. The value for the Application Security On Cloud plug-in is `asocPlugin` | Yes |

### HCL AppScan on Cloud configuration properties

| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| ASoC API Key ID | String | The key ID to authenticate with the Application Security On Cloud server. | Yes | keyId |
| Key Secret | Secure | The key secret to authenticate with the Application Security On Cloud server. | Yes | keySecret |
| DevOps Velocity User Access Key | Secure | The user access key to authenticate with the DevOps Velocity server. | Yes | ucvAccessKey |
|Run as a Scheduled Event|Boolean|To integrate the plug-in as a Scheduled Event. Set this property to “true” to run the integration as a scheduled event.|No|isScheduledEvent|
| Proxy Password | Secure | The password used to authenticate with the proxy server. | No | proxyPassword |
| Proxy Server | String | The URL of the proxy server including the port number. The URL protocol can be http or https. | No | proxyServer |
| Proxy User Name | String | The user name used to authenticate with the proxy server. | No | proxyUsername |

|ASoC Base URL | String | The base URL of the Application Security on Cloud server. E.G. https://cloud.appscan.com/. | No | asocUrl |
| ASoC Application | String | Application name in ASoC | No | application |
| ASoC Policies | Array | Comma separated list of Policy names in ASoC - eg: OWASP Top 10 Mobile 2016, International Standard - ISO 27002 | No | policies |
| Workflow Id | String | The value stream that this metric is associated. | Yes | workflowId |

## JSON code sample

The following sample code can be used as a template to define the integration within the JSON file for a value stream. Copy and paste the template into the JSON file Integration section and make the appropriate changes.

```json

"integrations": [
  {
    "type": "asocPlugin",
    "tenant_id": "",
    "name": "",
    "properties":{
      "ucvAccessKey": "",
      "keyId" : "",
      "isScheduledEvent":"false"
      "keySecret":"",
      "asocUrl":""
    }
 }
]
```

|Back to ...||Latest Version|HCL AppScan on Cloud (ASoC) |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[3.0.25-File1](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-asoc/ucv-ext-asoc%3A3.0.19.tar.7z.001) [3.0.25-File2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-asoc/ucv-ext-asoc%3A3.0.25.tar.7z.002)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
