
# Rational Test Automation Server - Usage

To use the Rational Test Automation Server plug-in, the plug-in must be loaded and an instance created
before you can configure the plug-in integration. You define configuration properties in the user interface or in a JSON
file.To invoke the plug-in, you must send an HTTP Post to request the plug-in endpoint.

## Integration type

The Rational Test Automation Server plug-in supports endpoint integration which are listed in the
following table.


| Name | Path | Method |
| --- | --- | --- |
| RTASEndpoint | rtas/callback | Post |

## Invoking the plugin

To gather data, send an HTTP POST request to your endpoint:  `https://<pluginEndpoint>/rtas/callback`

The payload for this POST must be in the following format:


```
{
  "project": {
    "name":"<name of Rational Test Automation Server project>",
    "id": "<id of Rational Test Automation Server project>"
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


**commitID** is the SHA of the commit. You can either not link it to anything in DevOps Velocity, or you can link it to a build, or to a commit (will accomplish the same thing in the end, by making the metric show up on the DOT). There are some IDs that are readily available when orchestrating from a Jenkins job for instance (such as the BUILD\_ID).

You can map a build to a metric using tags defined on the Rational Test Automation Server by evaluating the tag against a regular express. Use the

**Build Label Pattern** field to define the regular expression. For example, a build expression of “([A-Z]+-[0-9]+)” and a test has a tag of “BUILD-123”, the build is mapped with ID BUILD-123 in the DevOps Velocity server to the newly created metric. For assistance in forming a regular expression, see the [Regular expression tester](https://regexr.com) website. You can use the website to help form and test a regular expression based on your build ID.

## Integration

There are two methods to integrate the plug-in:

* Using the user interface
* Using a JSON file

### Using the user interface

1. From the Plugins page, click **Settings** > **Integrations** > **Plugins**.
2. Under the Action column for the plug-in, click **Add Integration**.
3. On the Add Integration page enter values for the fields used to configure the integration and define communication.
4. Click **Save**.

### Using a JSON file

The JSON file contains the information for creating a value stream and integrating with the IBM Rational Test Automation Server server. The following table describes the information for the creating a IBM DevOps Velocity value stream map.

1. Download the value stream map. The value stream map is a JSON file used to define integrations.
2. Edit the JSON file to include the plug-in configuration properties.
3. Save and upload the JSON file. This replaces the current JSON file with the new content.
4. View the new integration on the Integrations page.

## Configuration properties

The following tables describe the properties used to configure the integration. Each table contains the field name when using the user interface and the property name when using a JSON file.

* The General Configuration Properties table describes configuration properties used by all plug-in integrations.
* The Rational Test Automation Server Configuration Properties table describes the configuration properties that define the connection and communications with the Rational Test Automation Server server. When using the JSON method to integrate the plug-in these properties are coded within the `properties` configuration property.

### General Configuration Properties

| Name | Description | Required | Property Name |
| --- | --- | --- | --- |
| NA | The version of the plug-in that you want to use. To view available versions, click the **Version History** tab. If a value is not specified, the version named latest is used. | No | image |
| Integration Name | An assigned name to the value stream. | Yes | name |
| Logging Level | The level of Log4j messages to display in the log file. Valid values are: all, debug, info, warn, error, fatal, off, and trace. | No | loggingLevel |
| NA | List of plug-in configuration properties used to connect and communicate with the Rational Test Automation Server server. Enclose the properties within braces. | Yes | properties |
|  | The name of the tenant. | Yes | tenant\_id |
| NA | Unique identifier assigned to the plug-in. The value for the Rational Test Automation Server plug-in is `ucv-ext-rtas` | Yes | type |

### Rational Test Automation Server Configuration Properties

| Name | Property Name | Type | Description | Required |
| --- | --- | --- | --- | --- |
| Build Label Pattern | buildRegExp | String | A regular expression pattern to match a build ID on a test execution label. For example: ([A-Z]+-[0-9]+). | No|
| Rational Test Automation Server Offline User Token | rtasOfflineToken | String | The offline user token created in the Rational Test Automation Server user interface by clicking the Create Token button. | Yes |
| Rational Test Automation Server URL | rtasUrl | String | The base URL of the Rational Test Automation Server. For example: https://tp- cicd2.nonprod.hclpnp.com. | Yes |
| DevOps Velocity User Access Key | ucvAccessKey | String | The user access key used to authenticate with the DevOps Velocity server. | Yes |
| Workflow Id | workflowId | String | The value stream that this metric is associated. | No |
| Log Level | logLevel | String | The level of Log4j messages to display on the console. Valid values are: all, debug, info, warn, error, fatal, off, and trace. | No |

## Example

The following example can be used as as template to include the AppScan plug-in integration into the JSON file. Copy and paste the template into the JSON file and make the appropriate changes.


```

"integrations": [
{
"type": "ucv-ext-rtas",
"tenant_id":
"*tenant-id*",
"name": "*integration-name*",
"logginglevel": "*log\_level\_value*",
"properties":{

"ucvAccessKey": "*ucv-user-access-key*",
"rtasUrl" : "*rtas-url*",
"rtasOfflineToken":"*rtas-
offline-token*",
"buildRegExp": "([A-Z]+-[0-9]+)"
}``
}``
]

```



|Back to ...||Latest Version|Rational Test Automation Server |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.34-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-rtas/ucv-ext-rtas%3A1.0.34.tar.7z.001)[and 1.0.34-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-rtas/ucv-ext-rtas%3A1.0.34.tar.7z.002)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
