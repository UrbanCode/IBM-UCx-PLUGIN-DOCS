
# JUnit - Usage

To use the plug-in, the plug-in must be loaded and an instance created. Load the plug-in into the DevOps Velocity container if necessary. From the user interface, click **Settings** > **Integrations** > **Plugins**. On the Plugins page, locate the plug-in and click **Load Plugin**. To create an instance, locate the plug-in and click **Install**. The plug-in is now listed below those plug-ins to be installed and available for invoking.


## Integration type

The JUnit plug-in is a parser type plug-in. It parses JUnit XML data.

The following shows the schema for the payload. Replace the angle brackets with your values for the parameters.


```

{

"tenant_id": "<tenant_id>",    // required Tenant ID
"metricName": "<metric_name>", // optional: name for recurring test set
"application": {
"name": "<application_name>"  //Name of application
}``,
"record": {

"recordName": "<record_name>", // optional: Name for this record
"executionDate": 1547983466015, // optional:
UNIX Epoch
"pluginType": "junitXML",
"dataFormat": "junitXML",
"metricsRecordUrl": "<Jenkins_build_url>"
// optional: To link the Jenkins build with test results
}``,
"build": {  // Optional: One of the following
fields must be included
"buildId": "<build_id>",
"jobExternalId": "<external_job_id>",
"url":
"<build_url>",
}``,
"commitId": "<commit_id>",  // optional
"pullRequestId": "<pullrequest_id>", // optional

"environment": "<environment_name>" // optional
}``

```

## Invoking the plug-in

You can invoke the plug-in manually using a REST Call or by [using a Jenkins plug-in](#invokejenkins) to integrate DevOps Velocity in a Jenkins environment.

### Invoke using Jenkins plug-in

Install the [DevOps Velocity plug-in](https://plugins.jenkins.io/urbancode-velocity) into your Jenkins server. In your freestyle job or pipeline use the **UCV-Upload Metrics File to DevOps Velocity** step and provide the required fields. This step allows your build job to upload generated coverage results files to DevOps Velocity.

#### Example


```

pipeline {
agent any

stages {
stage('junitMetrics') {
steps {
step([$class: 'UploadMetricsFile',  appName:
'My Junit Test', dataFormat: 'junitXML', filePath: '<location of the junit report>', name: 'my-junit-test', pluginType:
'junitXML', tenantId: '<tenant Id>', testSetName: 'junit', metricsRecordUrl: "``${env.BUILD_URL}``"])
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
payload: <payload_json_object_string> // See below for schema format
testArtifact:
<junit_xml_file>
}``

```


### Invoke using Curl


```

curl --request POST \
--url
https://*url\_DevOpsvelocity\_server>*/reporting-consumer/metrics \
--form 'payload={
"tenant_id": "",

"application": {
"name": "My Application"
}``,
"record": {
"pluginType": "junitXML",
"dataFormat":
"junitXML"
}``
}``
' \
--form testArtifact=@test-result/junit.xml

```



|Back to ...||Latest Version|JUnit |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.66](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-junit/ucv-ext-junit-1.0.66.tar.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
