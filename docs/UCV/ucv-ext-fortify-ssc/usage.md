
# Fortify-SSC - Usage

To use the Fortify SSC server plugin, the plugin must be loaded and an instance created before you can configure the plugin integration. You define configuration properties in the user interface.

## Integration type

The Fortify SSC plugin supports scheduled events integration which is listed in the following table.

| Name | Description |
| --- | --- |
| fortifyScheduledEvents | The Fortify SSC plug-in processes incoming data from the Fortify SSC server. |

## Integration

Use the user interface to integrate the plugin.

1. From the Plugins page, click **Settings** > **Integrations** > **Plugins**.
2. Under the **Action** column for the plug-in, click **Add Integration**.
3. On the Add Integration page enter the values for the fields used to configure the integration and define communication.
4. Click **Save**.

See Configuration properties topic for the properties used to define the integration.

## Configuration properties

The following tables describe the properties used to configure the integration.

* The General Configuration Properties table describes configuration properties used by all plug-in integrations.
* The Fortify SSC Configuration Properties table describes the configuration properties that define the connection and communications with the Fortify server.

### General Configuration table

| Name | Description | Required |
| --- | --- | --- |
| image |  The version of the plugin that you want to use. To view available versions, click the **Version History** tab. If a value is not specified, the latest version is used. | No |
| name | An assigned name to the value stream. | Yes |
| loggingLevel | The level of Log4j messages to log. Valid values are: all, debug, info, warn, error, fatal, off, and trace. | No |
| properties | List of configuration properties used to connect and communicate with the Redmine server. Enclose the properties within braces. | Yes |
| tenant_id | The name of the tenant. | Yes |
| type | Unique identifier assigned to the plugin. The value for the Redmine plugin is `ucv-ext-fortify-ssc`. | Yes |
| ucvAccessKey | The auto-generated User Access Key that the containerized plugin will use to communicate with DevOps Velocity (support starts with plugin v2.0.30 or later). | Yes |

### Fortify SSC Properties table

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| URL | String | The URL of the Fortify SSC server. | Yes |
| token | String | The API key to authenticate with the Fortify SSC server. | Yes |
| Project Names (Comma Separated List) | Array | Comma separated list of project names to sync data. If kept empty, syncs all projects data. | No |
| Workflow Id | String | The value stream that this metric is associated. | No |



|Back to ...||Latest Version|Fortify SSC |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.19](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-fortify-ssc/ucv-ext-fortify-ssc%3A1.0.19.tar.7z.001)|[Readme](README.md)|[Usage](usage.md)|[Downloads](downloads.md)|
