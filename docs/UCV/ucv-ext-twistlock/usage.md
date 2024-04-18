
# Twistlock - Usage

To use the Code Coverage plug-in, the plug-in must be loaded and an instance created. Load the plug-in
into the DevOps Velocity container if necessary. From the user interface, click **Settings** > ****Integrations**** >
**Plugins**. On the Plugins page, locate the plug-in and click **Load Plugin**. To create an instance, locate the plug-
in and click **Install**. The plug-in is now listed below those plug-ins to be installed and available for invoking.


To invoke the plug-in, send an HTTP Post request with the data to parse. Whenever a there is a hit to the endpoint, the
data is parsed and displayed as metrics in DevOps Velocity.

## Integration type

The Twistlock plug-in is a parser type plug-in. It parses data from Twistlock JSON files.

## Invoking the plug-in

You can invoke the plug-in manually using a REST Call or by [using a Jenkins plug-in](#invokejenkins) to integrate
DevOps Velocity in a Jenkins environment.

### Invoke using Jenkins plug-in

Install the [DevOps Velocity plug-in](https://plugins.jenkins.io/urbancode-velocity) into your Jenkins server. In your freestyle job or pipeline use
the **UCV-Upload Metrics File to DevOps Velocity** step and provide the required fields. This step allows your build
job to upload generated coverage results files to DevOps Velocity.


```

pipeline {
agent any
stages {

stage('twistlockMetrics') {
steps {
step([$class: 'UploadMetricsFile',  appName: 'My
Twistlock Test', dataFormat: 'twistlockJSON', filePath: '<location of the twistlock report>', name: 'my-twistlock-test',
pluginType: 'twistlock', tenantId: '<tenant Id>', testSetName: 'twistlock', metricsRecordUrl: "``${env.BUILD_URL}``"])

}``
}``
}``
}``

```

### Invoke the plug-in using a Rest call

When using a REST call to invoke the Code Coverage plug-in, it must be a POST method and include the location of the DevOps Velocity quality
data endpoint.

The following request sample shows a REST call that you can copy and update as necessary. Key points
about the snippet:

* The URL points to the DevOps Velocity quality data endpoint. Update with the server location for your installation of DevOps Velocity.
* The BODY of the call is a multipart/form data. It includes information about the payload.


```

METHOD: POST
URL: https://<url_DevOpsvelocity_server>/reporting-consumer/metrics
BODY
(multipart/form-data):
{
payload: <json_object_string> // See below for schema format
testArtifact:
<twistlock_json_file>
}``

```


The following shows the schema for the payload. Replace the angle brackets with
your values for the parameters.


```

{
"tenant_id": "<tenant_id>",    // required Tenant ID
"metricName":
"<metric_name>", // optional: name for recurring test set
"application": {
"name": "<application_name>"  //Name
of application
}``,
"record": {
"recordName": "<record_name>", // optional: Name for this record

"executionDate": 1547983466015, // optional: UNIX Epoch
"pluginType": "twistlock",
"dataFormat":
"twistlockJSON",
"metricsRecordUrl": "<Jenkins_build_url>" // optional: To link the Jenkins build with test results

}``,
"build": {  // Optional: One of the following fields must be included
"buildId": "<build_id>",

"jobExternalId": "<external_job_id>",
"url": "<build_url>",
}``,
"commitId": "<commit_id>",  // optional

"pullRequestId": "<pullrequest_id>", // optional
"environment": "<environment_name>" // optional
}``

```

### Example: Invoking using Curl


```

curl --request POST \
--url https:///reporting-consumer/metrics \
--form
'payload={
"tenant_id": "5ade13625558f2c6688d15ce",
"application": {
"name": "My Application"
}``,

"record": {
"pluginType": "twistlock",
"dataFormat": "twistlockJSON"
}``
}``
' \
--form
testArtifact=@test-result/twistlock.json

```



|Back to ...||Latest Version|Twistlock |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.43](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-twistlock/ucv-ext-twistlock-1.0.43.tar.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
