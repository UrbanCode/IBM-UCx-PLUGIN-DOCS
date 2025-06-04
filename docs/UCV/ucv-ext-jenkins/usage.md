
# Jenkins - Usage

The Jenkins plug-in provides features that can be used for the following purposes:

* Using Jenkins jobs as input for the release pipelines.
* Using Jenkins jobs as automation tasks in deployment plans.

The tables in the Configuration properties describe the properties to define the integration.

To install the Jenkins plug-in, perform the following steps:

1.	From the home page, **click Settings > Integrations > Available**.
2.	In the **Action** column for the Jenkins plug-in, click **Install**.

To integrate the Jenkins plug-in, perform the following steps:

1.	From the home page, click **Settings > Integrations > Installed**.
2.	In the **Action** column for the Jenkins plug-in, click **Add Integration**.
3.	On the Add Integration page, enter values for the fields used to configure the integration and define communication.
4.	Click **Save**.

**Note**: You must not integrate the same instance of Jenkins using Jenkins (Legacy) and Jenkins (ucv-ext-jenkins) plug-in in IBM DevOps Velocity. Integrating the same Jenkins instance using Jenkins (Legacy) and Jenkins plug-in in IBM DevOps Velocity can result in data corruption.

## Using Jenkins jobs as input for the release pipelines

To use Jenkins jobs as input for the release pipelines, perform the following steps:
1. Log in to DevOps Velocity.
2. Click **Value streams** on the Navigation bar.
3. Click **All Value Streams** tab and select the required value stream.
4. On the Value Streams page, click **Pipeline** tab and then click **Add app** to add an application.
   The Add app - Choose the app dialog box opens.
5. In the **Managed by drop-down** list, select **Jenkins**.
6. In the **Application name** field, enter the application name.
7. In the **Description** field, enter the description for the application.
8. Click **Save** to add the application.
9. On the Jenkins application, in the **Input** column, click the **+** button to create a version.
   The Create version dialog opens.
10. Select the Jenkins job and then click **Save** to create a version.


## Using Jenkins jobs as automation tasks in deployment plans

To use Jenkins jobs as automation tasks in deployment plans, perform the following steps:

1. Log in to DevOps Velocity. 
2. Click **Releases** on the Navigation bar.
3. Click the required release.
4. On the Releases page, click the required deployment plan to open the deployment plan page.
5. On the deployment plan page, click **Create Task**.
   The Create task dialog box opens.
6. In the **Type** drop-down list, select **Jenkins**.
7. In the **Name** field, enter a task name.
8. In the **Description** field, enter the description of the task.
9. In the **Integration** drop-down list, select required integration for the task.
10. In the **Process** drop-down list, select required process for the task.
11. Select the **Wait** checkbox to wait for job to finish in Jenkins.
12. Perform any of the following step:
    * Click **Save** to save the task and close the dialog. 
    * Click **Save and create** another to save the task and create another task.

## Integration Type
The Jenkins plug-in supports scheduled events integration. There is a scheduled event which is described in the following table.

| Name | Description |
| --- | --- |
| SyncJenkinsDataEvent | Query Jenkins for any new or updated builds. |

## Configuration properties

The following tables describe the properties used to configure the integration. Each table contains the field name when using the user interface and the property name when using a JSON file.

* The General Configuration Properties table describes configuration properties used by all plug-in integrations.
* The  Configuration Properties table describes the configuration properties that define the connection and communications with the Jenkins server.


### General Configuration Properties

| Name | Description                                                                  | Required | Property Name |
| ---- | ---------------------------------------------------------------------------- | -------- | ------------- |
| NA | The version of the plug-in that you want to use. To view available versions, click the **Version History** tab. If a value is not specified, the version named latest is used. | No | image |
| Integration Name | An assigned name to the value stream. | Yes | name |
| Logging LJenkinsevel | The level of Log4j messages to display in the log file. Valid values are: all, debug, info, warn, error, fatal, off, and trace. | No | loggingLevel |
| NA | List of configuration properties used to connect and communicate with the Jenkins server. Enclose the properties within braces. | Yes | properties |
|  | The name of the tenant. | Yes | tenant\_id |
| NA | Unique identifier assigned to the plug-in. The value for the Jenkins plug-in is `ucv-ext-jenkins` | Yes | type |
| DevOps Velocity User Access Key | An auto-generated user access key provides credentials for communicating with the DevOps Velocity server. | Yes | NA |



### Jenkins Configuration Properties

| Name | Type      | Description                                              | Required |
| ---- | ----------| ---------------------------------------------------------| -------- |
| Jenkins Server URL | String | Base URL of the Jenkins server. | Yes |
| Username | String | An assigned name to the value stream. | Yes |
| API Token | Secure	| API Token to authenticate with the Jenkins server. To create one navigate to Jenkins -> User (top right) -> Configure -> Api Token) |	Yes |
| Job Filter (xPath) | String	| Restrict which jobs get synced with an xPath filter string. For example: ‘starts-with(fullName,”folder/path/”)’ to only get jobs in a specific folder or: ‘contains(name,”Team Name”)’ to only get jobs that contain a specific substring or: ‘(starts-with(fullName,”folder/path/”) or contains(name,”Team Name”)) and ends-with(name,”my-suffix”)’ etc… | No |
| Request Timeout	| String | Timeout (in seconds) to apply to each request to the Jenkins server. | No |
| Request Retries	| String	| Number of times to attempt each request to the Jenkins server (to help eliminate on-off request errors failing entire sync). |	No |
| Parallel Requests’ |	Boolean	| Whether or not to make requests to the Jenkins server in parallel (parallelized requests make syncing faster but put more pressure on Jenkins server). |	No |
| Request Depth |	String | The depth of folder levels that Jenkins API requests should make. Increased depth puts more load on each request but requires less requests for deeply nested folder structures. | No |
| Queue Polling Timeout |	String | Length of time (in minutes) to poll for build to be kicked off from queue. | No |
| Queue Polling Interval |	String | Time (in seconds) to wait between requests to get build after it is kicked off from queue. |	No |
| Build Polling Timeout |	String | Length of time (in minutes) to wait for build to complete if task is set to wait. |	No |
| Build Polling Interval |	String | Time (in seconds) to wait between requests to check if build completed if task is set to wait. |	No |
| Builds on First Fetch |	String | Number of Builds to initially retrieve per job when getting all Jobs. (max value is 100) |	No |
| Builds on Follow-Up Fetches |	String | Size of the batches of Builds to retrieve if a job contains more builds than "Builds on First Fetch |	No |
| Excluded Repository Parameters |	String | Specify the jenkins job parameter names as a comma-separated list to identify repositories that should be disregarded in the context of the job. |	No |



|Back to ...||Latest Version|Jenkins |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.1.7-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-jenkins/ucv-ext-jenkins%3A1.1.7.tar.7z.001)[and 1.1.7-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-jenkins/ucv-ext-jenkins%3A1.1.7.tar.7z.002)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
