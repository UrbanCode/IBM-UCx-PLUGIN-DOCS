
# Code Coverage - Usage

To use the Code Coverage plug-in, the plug-in must be loaded, and an instance created. Load the plug-in into the IBM DevOps Velocity container if necessary.

## Integration steps 

  1. In IBM DevOps Velocity, click **Settings** > **Integrations** > **Available**.
  2. In the **Action** column for the Code Coverage plug-in, click **Install**. 
  3. The plug-in is now listed in the **Installed** tab and available for invoking.  

## Integration type

The Code Coverage plug-in is a parser type plug-in and it parses data from the following test tools:

* LCOV
* Cobertura
* JaCoCo
* Clover

## Invoking the plug-in

You can invoke the plug-in manually using a REST Call or by [using a Jenkins plug-in](#invokejenkins) to integrate IBM DevOps Velocity in a Jenkins environment.

### Invoke using Jenkins plug-in

Install the [IBM DevOps Velocity plug-in](https://plugins.jenkins.io/urbancode-velocity) into
your Jenkins server. In your freestyle job or pipeline use the **UCV-Upload Metrics File to IBM DevOps Velocity** step
and provide the required fields. This step allows your build job to upload generated coverage results files to IBM DevOps
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

When using a REST call to invoke the Code Coverage plug-in, it must be a POST method and include the location of the IBM DevOps Velocity quality data endpoint.

The following request sample shows a REST call that you can copy and update as necessary. Key points
about the snippet:

* The URL points to the IBM DevOps Velocity quality data endpoint. Update with the server location for your installation of IBM DevOps Velocity.
* The BODY of the call is a multipart/form data. It includes information about the payload.


```

METHOD: POST
URL: https://<url_devopsvelocity_server>/reporting-consumer/metrics
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
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.44-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-coverage-core/ucv-ext-coverage-core%3A1.0.44.tar.7z.001)[and 1.0.44-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-coverage-core/ucv-ext-coverage-core%3A1.0.44.tar.7z.002)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
