
# Microsoft Visual Studio Testing - Usage 

To use the Microsoft Visual Studio Testing plug-in, the plug-in must be loaded and an instance created. Load the plug-in into the DevOps Velocity container if necessary using the below steps:
1. From the user interface, click **Settings** > **Integrations** > **Plugins**. 
2. On the Plugins page, locate the plug-in and click **Load Plugin**. 
3. To create an instance, locate the plug-in and click **Install**. 

The plug-in is now listed below those plug-ins to be installed and available for invoking.

## Integration type
The Microsoft Visual Studio Testing plug-in parses unit test result data from the Microsoft Visual Studio Testing server.

## Invoking the plug-in
To gather data from the Microsoft Visual Studio Testing server, send an HTTP Post request with the data to parse. Whenever there is a hit to the endpoint, the data is parsed and displayed as metrics in IBM DevOps Velocity. You can use various methods such as Postman, REST calls, CURL, and CI/CD tools like Jenkins to invoke the plug-in endpoints.

### Invoke using Jenkins
Install the DevOps Velocity plug-in into your Jenkins server. In your freestyle job or pipeline use the UCV-Upload Metrics File to DevOps Velocity step and provide the required fields. This step allows your build job to upload generated coverage results files to DevOps Velocity.
```
pipeline {
   agent any
   stages {
      stage('MicrosoftVisualStudioTestingMetrics') {
         steps {
            step([$class: 'UploadMetricsFile',  appName: 'My msTest Test', dataFormat: 'msTestXML', filePath: '<location of the msTest report>', name: 'my-msTest-test', pluginType: 'msTest', tenantId: '<tenant Id>', testSetName: 'msTest', metricsRecordUrl: "${env.BUILD_URL}"])
         }
      }
   }
}
```

### Invoke the plug-in using a REST call
When using a REST call to invoke the Microsoft Visual Studio Testing plug-in, it must be a POST method and include the location of the DevOps Velocity quality data endpoint.

The following request sample shows a REST call that you can copy and update as necessary. Key points about the snippet:

* The URL points to the DevOps Velocity quality data endpoint. Update with the server location for your installation of DevOps Velocity.
* The BODY of the call is a multipart/form data. It includes information about the payload.

```
METHOD: POST 
URL: https://<url_DevOpsvelocity_server>/reporting-consumer/metrics 
BODY (multipart/form-data):
 {
  payload: <payload_json_object_string> // See below for schema format
 testArtifact: <msTest_xml_file>
 }
```
### Invoke using Curl

You can use the following plug-in types and associated data formats for invoking using a CURL request.
#### Unit Test Data
##### Categories:
- Unit Test
- UNIT_TEST_DURATION

|pluginType|dataFormat|description|
|:---:|:---:|:---:|
|msTest|vsTestTRX|VSTest .trx files|
|msTest|vsTestXML|VSTest .xml files|
|msTest|msTestTRX|MSTest .trx files|
|msTest|msTestXML|MSTest .xml files|

#### Coverage
##### Categories:
- COVERAGE_LINES
- COVERAGE_FUNCTIONS

Note: These formats do not provide branch coverage information.

|pluginType|dataFormat|description|
|:---:|:---:|:---:|
|vsCoverage|vsTestCoverageXML|VSTest .xml files|
|vsCoverage|vsTestCoverageXML|MSTest .xml files|

```
curl --request POST \
  --url https://url_DevOpsvelocity_server>/reporting-consumer/metrics \
  --form 'payload={
  "tenant_id": "",
  "application": {
    "name": "My Application"
  },
  "record": {
    "pluginType": "msTest",
    "dataFormat": "msTestXML"
  }
}
' \
  --form testArtifact=@test-result/MSTest.xml
```

|Back to ...||Latest Version|Microsoft Visual Studio Testing |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.31](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-vs-quality/ucv-ext-vs-quality-1.0.31.tar.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
