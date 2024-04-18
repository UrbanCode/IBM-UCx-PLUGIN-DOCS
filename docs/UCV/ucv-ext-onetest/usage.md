
# HCL DevOps Test - Usage

To use the HCL DevOps Test plug-in, the plug-in must be loaded and an instance created before you can configure the plug-in integration. Configuration properties are defined using the product user interface or a JSON file.


To use the plug-in upload a code coverage results file to DevOps Velocity to parse. Whenever DevOps Velocity receives the file, the plug-in parses the data and creates a metric entry.

## Integration type

The HCL DevOps Test plug-in parses data from the HCL DevOps Test tool.

## Invoking the plug-in

You can invoke the plug-in manually using a REST Call or by [using a Jenkins plug-in](#invokejenkins) to integrate DevOps Velocity in a Jenkins environment.

### Invoke using Jenkins plug-in

Install the [DevOps Velocity plug-in](https://plugins.jenkins.io/urbancode-velocity) into your Jenkins server. In your freestyle job or pipeline use the **UCV-Upload Metrics File to DevOps Velocity** step and provide the required fields. This step allows your build job to upload generated coverage results files to DevOps Velocity.

#### Example


```

pipeline {
agent any

stages {
stage('oneTestMetrics') {
steps {
step([$class: 'UploadMetricsFile',  appName:
'My Onetest Test', dataFormat: 'onetestFTJSON', filePath: '<location of the onetest report>', name: 'my-onetest-test',
pluginType: 'onetest', tenantId: '<tenant Id>', testSetName: 'onetest', metricsRecordUrl: "``${env.BUILD_URL}``"])

}``
}``
}``
}``

```

### Invoke the plug-in using a Rest call

When using a REST call to invoke the Code Coverage plug-in, it must be a POST method and include the location of the DevOps Velocity quality data endpoint.

The following request sample shows a REST call that you can copy and update as necessary. Key points about the snippet:

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
<HCL_OneTest_JSON_file>
}``

```


The following shows the schema for the payload. Replace the angle brackets with your values for the parameters.


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
"pluginType": "onetest",
"dataFormat": "<data_type>",
// onetestFTJSON or onetestPTJSON or onetestUIJSON
"metricsRecordUrl": "<Jenkins_build_url>" // optional: To link
the Jenkins build with test results
}``,
"build": {  // Optional: One of the following fields must be included

"buildId": "<build_id>",
"jobExternalId": "<external_job_id>",
"url": "<build_url>",
}``,

"commitId": "<commit_id>",  // optional
"pullRequestId": "<pullrequest_id>", // optional
"environment":
"<environment_name>" // optional
}``

```

### Data format details

* onetestFTJSON is for Functional test results
* onetestPTJSON is for Performance test results &
* onetestUIJSON is for Web UI test results

### Example: Invoking using Curl
```
curl –request POST \
–url https:///reporting-consumer/metrics \
–form ‘payload={
“tenant_id”: “5ade13625558f2c6688d15ce”,
“application”: {
“name”: “My Application”
},
“record”: {
“pluginType”: “onetest”,
“dataFormat”: “onetestFTJSON”
}
}
‘ \
–form testArtifact=@test-result/oneTest.json

```

|Back to ...||Latest Version|HCL DevOps Test |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.37-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-onetest/ucv-ext-onetest%3A1.0.37.tar.7z.001)[and 1.0.37-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-onetest/ucv-ext-onetest%3A1.0.37.tar.7z.002)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
