# Milestone Risk Estimator - Usage

To use the Milestone Risk Estimator plug-in, the plug-in must be loaded and an instance created before you can configure the plug-in integration. You define configuration properties in the user interface.

## Integration Type

The Milestone Risk Estimator plug-in supports scheduled events integration which are listed in the following table.

| Name | Description | Synchronization Interval |
| --- | --- | --- |
| ExecuteTrain | Probabilistic Estimator Training | 10080 minutes |
| ExecutePredict | Probabilistic Estimator Predictor | 1440 minutes |

## Integration

The tables in the Configuration properties topic describe the properties used to define the integration.

To install the plug-in, perform the following steps:

1. In IBM DevOps Velocity, click **Settings** > **Integrations** > **Available**
2. In the **Action** column for the Milestone Risk Estimator plug-in, click **Install**.

To integrate the plug-in, perform the following steps:

1. In IBM DevOps Velocity, click **Settings** > **Integrations** > **Installed**.
2. In the **Action** column for the Milestone Risk Estimator plug-in, click **Add Integration**.
3. On the Add Integration page enter values for the fields used to configure the integration and define communication.
4. Click **Add**.

## Metrics Result In VSM

Once the Milestone Risk Estimator plug-in has been executed successfully, it is possible to observe results through dedicated metrics. Perform the following steps to add the metrics in the value stream.

1. In IBM DevOps Velocity, click **Value Streams**. 
2. Click required Value Stream.
2. Click the **Metric Bar**, them click **+** button.
3. In **Delivery Flow** category, click **+** button next to **P.R.E Risk** and **P.R.E Deadline** to add these metrics.
4. Hover over the **P.R.E Risk** metric on the value stream page to view the insights from the Milestone Risk Estimator plug-in as a tool tip.

## Metrics Result In Insights

Perform the following steps to view metrics result in insights page.

1. In IBM DevOps Velocity, click **Insights**
2. Click **All Dashboards**.
3. Click **Create Dashboard** to create your own dashboard with any name.
4. Select created dashboard or any other existing dashboard.
5. Click **Add Charts** at top right of the page.
6. In **Delivery Flow** category, click **Add** next to **P.R.E Risk** and **P.R.E Deadline** to add these metrics.
7. To view data for particular value stream, on the left navigation pane under **Value Streams**, select the required Value stream.

## Configuration Properties

The following tables describe the properties used to configure the integration. Each table contains the field name when using the user interface and the property name.

* The General Configuration Properties table describes configuration properties used by all plug-in integrations.
* The Milestone Risk Estimator Configuration Properties table describes the configuration properties that define the connection and communications with the Milestone Risk Estimator.

Some properties might not be displayed in the user interface, to see all properties enable the **Show Hidden Properties** field.

### General Configuration Properties

| Name | Description | Required | Property Name |
| --- | --- | --- | --- |
| NA | The version of the plug-in that you want to use. To view available versions, click the Version History tab. If a value is not specified, the version named latest is used. | No | image |
| Integration Name | An assigned name to the value stream. | Yes | name |
| Logging Level | The level of Log4j messages to display in the log file. Valid values are: all, debug, info, warn, error, fatal, off, and trace. | No | loggingLevel |
| NA | List of plug-in configuration properties used to connect and communicate with the milestone risk estimator. Enclose the properties within braces. | Yes | properties |
|  | The name of the tenant. | Yes | tenant_id |
| NA | Unique identifier assigned to the plug-in.The value for the Milestone risk estimator plug-in is ucv-ext-milestone-risk-estimator. | Yes | type |
| DevOps Velocity User Access Key | An auto-generated user access key provides credentials for communicating with the IBM DevOps Velocity server. | Yes | NA |

### Milestone Risk Estimator Configuration Properties

| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| Value streams to consider for risk assessment | Array | Comma separated list of value stream names to be considered for training and prediction (For example: Vsm_Name1,Vsm_Name2 ) | Yes | vsmsArray |
| All workitem types | Boolean | If true, every work item type will be considered for risk assessment | false | USE_EVERY_JYRA_TYPE |
| Selected workitem types | Array | Comma separated list of work item types to consider for risk assessment | false | JYRA_TYPE |


|Back to ...||Latest Version|Milestone Risk Estimator |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[2.0.4](https://hub.docker.com/r/urbancode/ucv-ext-milestone-risk-estimator/tags)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|