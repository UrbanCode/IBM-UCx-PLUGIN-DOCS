
# Code Coverage - Usage

To use the Code Coverage plug-in, the plug-in must be loaded and an instance created. Load the plug-in into the DevOps Velocity container if necessary using the below steps: 
1. From the user interface, click **Settings** > **Integrations** > **Plugins**. 
2. On the Plugins page, locate the plug-in and click **Load Plugin**. 
3. To create an instance, locate the plug-in and click **Install**. 

The plug-in is now listed below those plug-ins to be installed and available for invoking.

To invoke the plug-in, send an HTTP Post request with the data to parse. Whenever a there is a hit to the endpoint, the data is parsed and displayed as metrics in DevOps Velocity.

## Integration type

The Code Coverage plug-in parses data from test tools including the following:

* LCOV
* Cobertura
* JaCoCo
* Clover

## Invoking the plug-in

You can invoke the plug-in manually using a REST Call or by [using a Jenkins plug-in](#invokejenkins) to integrate DevOps Velocity in a Jenkins environment.

### Invoke using Jenkins plug-in

Install the [DevOps Velocity plug-in](https://plugins.jenkins.io/urbancode-velocity) into
your Jenkins server. In your freestyle job or pipeline use the **UCV-Upload Metrics File to DevOps Velocity** step
and provide the required fields. This step allows your build job to upload generated coverage results files to UrbanCode
Velocity.

#### Example


```

pipeline {
agent any
stages {
stage('codeCoverageMetrics') {

steps {
step([$class: 'UploadMetricsFile',  appName: 'My Code-Coverage Test', dataFormat:
'cobertura', filePath: '<location of the code coverage report>', name: 'my-code_coverage-test', pluginType:
'coverageData', tenantId: '<tenant Id>', testSetName: 'code_coverage', metricsRecordUrl: "``${env.BUILD_URL}``"])

}``
}``
}``
}``

```

### Invoke the plug-in using a Rest call

When using a REST call to invoke the Code Coverage plug-in, it must be a POST method and include the location of the DevOps Velocity quality data endpoint.

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
<cobertura/etc_xml_file>
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
"pluginType": "coverageData",
"dataFormat":
"cobertura",       // cobertura, lcov, jacoco
"metricsRecordUrl": "<Jenkins_build_url>" // optional: To link the
Jenkins build with test results
}``,
"build": {  // Optional: One of the following fields must be included

"buildId": "<build_id>",
"jobExternalId": "<external_job_id>",
"url": "<build_url>",
}``,
"commitId":
"<commit_id>",  // optional
"pullRequestId": "<pullrequest_id>", // optional
"environment": "<environment_name>"
// optional
}``

```

### Example using Curl


```

curl --request POST \
--url https:///reporting-
consumer/metrics \
--form 'payload={
"tenant_id": "*tenant\_id*",
"application": {
"name": "My
Application"
}``,
"record": {
"pluginType": "coverageData",
"dataFormat": "cobertura"
}``
}``
' \

--form testArtifact=@test-result/junit.xml

```


|Back to ...||Latest Version|Code Coverage |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.30](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-coverage-core/ucv-ext-coverage-core-1.0.30.tar.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
