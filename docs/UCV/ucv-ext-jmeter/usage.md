
# Apache JMeter - Usage


The Apache JMeter plug-in provides for integration with a JMeter server. To use the plug-in, the
plug-in must be loaded and an instance created. Load the plug-in into the DevOps Velocity container if necessary.
From the user interface, click **Settings** > ****Integrations**** > **Plugins**. On the Plugins page, locate the plug-
in and click **Load Plugin**. To create an instance, locate the plug-in and click **Install**. The plug-in is now listed
below those plug-ins to be installed and available for invoking.

To gather data from the JMeter server, send an HTTP
Post request with the data to parse. Whenever a there is a hit to the endpoint, the data is parsed and displayed as
metrics in DevOps Velocity. You can use various methods such as Postman, REST calls, CURL, and CI/CD tools like
Jenkins to invoke the plug-in endpoints.

## Integration type

The JMeter plug-in is a parser type plug-in. It parses data from a JMeter CSV and XML data.

## Invoking the plug-in

You can invoke the
plug-in manually using a REST Call or by [using a Jenkins plug-in](#invokejenkins) to integrate DevOps Velocity in a
Jenkins environment.

### Invoke using Jenkins plug-in

Install the [DevOps Velocity plug-
in](https://plugins.jenkins.io/urbancode-velocity) into your Jenkins server. In your freestyle job or pipeline use the
**UCV-Upload Metrics File to DevOps Velocity** step and provide the required fields. This step allows your build job
to upload generated coverage results files to DevOps Velocity.

#### Example


```

pipeline {
agent any

stages {
stage('jmeterMetrics') {
steps {
step([$class: 'UploadMetricsFile',  appName:
'My Jmeter Test', dataFormat: 'jmeterXML', filePath: '<location of the jmeter report>', name: 'my-jmeter-test',
pluginType: 'jmeter', tenantId: '<tenant Id>', testSetName: 'jmeter', metricsRecordUrl: "``${env.BUILD_URL}``"])

}``
}``
}``
}``

```

### Invoke the plug-in using a Rest call

When using a REST call to invoke the Code Coverage plug-in, it must be a POST method and include the location of the DevOps Velocity quality data endpoint.

The following request sample shows a REST call that you can copy and update as necessary. Key points about the snippet:

* The URL points to the DevOps Velocity quality data endpoint. Update with the server location
for your installation of DevOps Velocity.
* The BODY of the call is a multipart/form data. It includes information
about the payload.


```

METHOD: POST
URL: https://<url_devopsvelocity_server>/reporting-consumer/metrics
BODY
(multipart/form-data):
{
payload: <payload_json_object_string> // See below for schema format
testArtifact:
<jmeter_xml_file>
}``

```


The following shows the schema for the payload. Replace the angle brackets with your
values for the parameters.


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
"pluginType": "jmeter",
"dataFormat": "jmeterXML",  //
jmeter xml
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

### Example:Invoking using Curl


```

curl --request POST \
--url https:///reporting-
consu<er/metrics \
--form 'payload={
"tenant_id": "5ade13625558f2c6688d15ce",
"application": {
"name":
"My Application"
}``,
"record": {
"pluginType": "jmeter",
"dataFormat": "jmeterXML"
}``
}``
' \

--form testArtifact=@test-result/jmeter.xml

```



|Back to ...||Latest Version|Apache JMeter |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.55](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-jmeter/ucv-ext-jmeter-1.0.55.tar.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
