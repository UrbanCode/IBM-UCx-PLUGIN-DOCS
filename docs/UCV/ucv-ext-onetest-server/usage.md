
# HCL DevOps Test Server - Usage

## Set Up
You will need to "install" the plugin in DevOps Velocity (UCV). You can do this in one of two ways.
* Perhaps the easiest way is to create a new Value Stream in DevOps Velocity.

    * You can use the following template for creating your integration
    ```
    "integrations": [
  {
    "type": "ucv-ext-onetest-server",
    "tenant_id": "<tenant-id>",
    "name": "<integration-name>",
    "logginglevel": "INFO",
    "properties":{
      "ucvAccessKey": "<ucv-user-access-key>",
      "oneTestUrl" : "<DevOps Test-server-url>",
      "ev":"<DevOps Test-server-refresh-token>",
      "buildRegExp": "([A-Z]+-[0-9]+)"
        }
    }
    ]

    ```
    * In the above example, provide all of your own values for the values inside of < > brackets.
    * The buildRegExp field can be used to map a build to a metric. The tags on the HCL OneTest Server test will be evaluated against the regular expression.
    * For instance, if your buildRegExp is defined as "([A-Z]+-[0-9]+)" and you tag your test with "BUILD-123" this will map the build with ID BUILD-123 in the Velocity server to the newly created metric.
    * For help forming a regular expression based on your build ID, you can test out patterns at the following web page: https://regexr.com
* Another option for creating is to hit the https://<velocity-url>/integration url with the integration definition as your payload:

    ```

    {
    "type": "ucv-ext-onetest-server",
    "tenant_id": "<tenant-id>",
    "name": "<integration-name>",
    "logginglevel": "INFO",
    "properties":{
        "ucvAccessKey": "<ucv-user-access-key>",
        "oneTestUrl" : "<DevOps Test-server-url>",
        "oneTestRefreshToken":"<DevOps Test-server-refresh-token>",
        "buildRegExp": "([A-Z]+-[0-9]+)"
    }
    }

    ```
* Either option will allow you to create an HCL OneTest Server integration instance.

## usage

To use the HCL DevOps Test Server plugin, the plugin must be loaded, and an instance created before you can configure the plug-in integration. Configuration properties are defined using the product user interface or a JSON file. After the integration is complete, to invoke the plugin send an HTTP Post request to the plugin endpoint.

## Integration type

The HCL DevOps Test Server plug-in supports endpoint integration which are listed in the following table.


| Name | Path | Method |
| --- | --- | --- |
| OneTestEndpoint | onetest/callback | Post |

## Invoking the plugin

After going through the "Set Up" portion above, you can send an HTTP POST request to your new endpoint: https://<velocity-url>/pluginEndpoint/<integrationId>/onetest/callback
* The payload for this POST must be in the following format

```

{
  "project": {
    "name":"<name of HCL OneTest Server project>",
    "id": "<id of HCL OneTest Server project>"
    (either project name or project id must be specified)
  },
  "test": {
    "name":"<name of test>",
    "path":"<path to test>"
    (either test name or test path must be specified)
  },
  "commitId": "<sha of a commit>" (optional),
  "build": {
    "id": "<id of build in DevOps Velocity>",
    "url": "<url of build in DevOps Velocity>"
  } (optional, this will override buildRegExp if specified)
}

```

## Integration

From the user interface Value Steam page, click **Upload** to upload the value stream map which is a JSON file.

The JSON file contains the information for creating a value stream and integrating with the DevOps Test server. The following table describes the information for the creating a DevOps Velocity value stream map.


| Name | Description | Required |
| --- | --- | --- |
| image | The version of the plug-in that you want to use. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-onetest-server/tags). If a value is not specified, the latest version is used. | No |
| name | An assigned name to the value stream. | Yes |
| loggingLevel | The level of Log4j messages to log. Valid values are: all, debug, info, warn, error, fatal, off, and trace. The default is info. | No |
| properties | List of [configuration properties](#properties) used to connect and communicate with the DevOps Test server.Enclose the properties within braces. | Yes |
| tenant\_id | The name of the tenant. | Yes |
| type | Unique identifier assigned to the plug-in. The value for the HCL DevOps Test Server plug-in is `ucv-ext-onetest-server`. | Yes |

## Configuration Properties

The configuration properties which are included in the `properties` field are unique to the
HCL DevOps Test Server plug-in and define the connection and communication to the DevOps Test server.


| Name | Property Name | Type | Description | Required |
| --- | --- | --- | --- | --- |
| Build Label Pattern | buildRegExp | String | A regular expression pattern that will match a build ID on a test execution label. For example: ([A-Z]+-[0-9]+). | No |
| HCL DevOps Test Offline User Token | oneTestRefreshToken | String | The offline user token created in the HCL DevOps Test user interface by clicking the Create Token button. | Yes |
| HCL DevOps Test Server URL | oneTestUrl | String | The base URL of the HCL DevOps Test Server. For example: https://tp-cicd2.nonprod.hclpnp.com. | Yes |
| Workflow Id | WorkflowId | String | The value stream that this metric is associated. | No |
| DevOps Velocity User Access Key | ucvAccessKey | String | The user access key to authenticate with the DevOps Velocity server. | No |




|Back to ...||Latest Version|HCL DevOps Test Server |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.27-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-onetest-server/ucv-ext-onetest-server%3A1.0.27.tar.7z.001)[and 1.0.27-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-onetest-server/ucv-ext-onetest-server%3A1.0.27.tar.7z.002)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
