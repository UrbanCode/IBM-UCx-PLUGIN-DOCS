
# DevOps Test Hub - Usage

## usage

To use the DevOps Test Hub plug-in, the plug-in must be loaded and an instance created before you can configure the plug-in integration. Configuration properties are defined using the product user interface or a JSON file. After the integration is complete, to invoke the plug-in send an HTTP Post request to the plug-in endpoint.

## Integration type

The DevOps Test Hub plug-in supports endpoint integration which are listed in the following table.


| Name | Path | Method |
| --- | --- | --- |
| OneTestEndpoint | onetest/callback | Post |

## Invoking the plugin

## Set Up

You will need to "install" the plug-in in DevOps Velocity. You can do this in one of two ways.
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
      "_userAccessKey": "<ucv-user-access-key>",
      "oneTestUrl" : "<DevOps Test-Hub-url>",
      "oneTestRefreshToken":"<DevOps Test-Hub-refresh-token>",
      "buildRegExp": "([A-Z]+-[0-9]+)",
      "workflowId" : "<value_stream_id>"
        }
    }
    ]

    ```
* In the above example, provide all of your own values for the values inside of < > brackets.
* The buildRegExp field can be used to map a build to a metric. The tags on the DevOps Test Hub test will be evaluated against the regular expression.
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
        "oneTestUrl" : "<DevOps Test-Hub-url>",
        "oneTestRefreshToken":"<DevOps Test-Hub-refresh-token>",
        "buildRegExp": "([A-Z]+-[0-9]+)",
        "workflowId" : "<value_stream_id>"
    }
    }

    ```
* Either option will allow you to create an DevOps Test Hub integration instance.

## Running the Integration

After going through the "Set Up" portion above, you can send an HTTP POST request to your new endpoint: https://<velocity-url>/pluginEndpoint/<integrationId>/onetest/callback

* The payload for this POST must be in the following format

```

{
  "project": {
    "name":"<name of DevOps Test Hub project>",
    "id": "<id of DevOps Test Hub project>"
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

There are two methods to integrate the plug-in:

* Using the user interface
* Using a JSON file

The tables in the Configuration Properties section describe the properties used to define the integration.

## Integrating the plug-in by using user interface

To install the plug-in, perform the following steps:

* In DevOps Velocity, click **Settings** > **Integrations** > **Available**.
* In the Action column for the DevOps Test Hub, click **Install**.

To integrate the plug-in using the user interface, perform the following steps:

1. In DevOps Velocity, click **Settings** > **Integrations** > **Installed**.
2. In the Action column for the DevOps Test Hub plug-in, and then click **Add Integration**.
3. On the Add Integration dialog, enter the values for the fields to configure the integration and define communication.
4. Click **Add**.

## Integrating the plug-in by using JSON file

The JSON file contains the information for creating a value stream. Within the JSON file is a section for integrations. It is in this section that plug-in properties can be defined. For JSON sample refer set up section.

To integrate the plug-in using a JSON, perform the following steps:

1. Navigate to value stream page, and then click the necessary value stream.
2. Click **wrench icon**, and then Select **Edit value stream** to modify the JSON file in the code or tree view editors.
3. Alternatively, you can also click **Download JSON** option to download the JSON file, and then select the Import JSON option to upload the revised JSON file.
4. Edit the integration information in the JSON file to add the plug-in configuration properties. Refer to JSON sample code in the Configuration Properties section for more details.
5. Click **Save**.

For **JSON sample** refer set up section.

## Configuration Properties

The following tables describe the properties used to configure the integration. Each table contains the field name when using the user interface and the property name when using a JSON file.

* The General Configuration Properties table describes configuration properties used by all plug-in integrations.
* The DevOps Test Hub Configuration Properties table describes the configuration properties that define the connection and communications with the DevOps Test Hub server. When using the JSON method to integrate the plug-in these properties are coded within the properties configuration property.

Some properties might not be displayed in the user interface, to see all properties enable the **Show Hidden Properties** field.

### General Configuration Properties

| Name | Description | Required | Property Name |
| --- | --- | --- | --- |
| NA | The version of the plug-in that you want to use. To view available versions, click the Version History tab. If a value is not specified, the version named latest is used. | No | image |
| Integration Name | An assigned name to the value stream. | Yes | name |
| Logging Level | The level of Log4j messages to display in the log file. Valid values are: all, debug, info, warn, error, fatal, off, and trace. | No | loggingLevel |
| NA | List of plug-in configuration properties used to connect and communicate with the DevOps Test Hub. Enclose the properties within braces. | Yes | properties |
|| The name of the tenant. | Yes | tenant_id |
| NA | Unique identifier assigned to the plug-in. The value for the DevOps Test Hub plug-in is ucv-ext-onetest-server. | Yes | type |

### DevOps Test Hub Configuration properties

| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| DevOps Test Hub URL | String | The base URL of the DevOps Test Hub. For example: https://tp-cicd2.nonprod.hclpnp.com/test. | Yes | oneTestUrl |
| DevOps Test Offline User Token | Secure | The offline user token created in the DevOps Test user interface by clicking the Create Token button. | Yes | oneTestRefreshToken |
| Build Label Pattern | String | A regular expression pattern that will match a build ID on a test execution label. For example: ([A-Z]+-[0-9]+). | No | buildRegExp |
| Workflow Id | String | The value stream that this metric is associated. | No | workflowId |


|Back to ...||Latest Version|DevOps Test Hub |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.30-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-onetest-server/ucv-ext-onetest-server%3A1.0.30.tar.7z.001)[and 1.0.30-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-onetest-server/ucv-ext-onetest-server%3A1.0.30.tar.7z.002)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
