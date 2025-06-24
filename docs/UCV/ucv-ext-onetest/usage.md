
# DevOps Test - Usage

To use the DevOps Test plug-in, the plug-in must be loaded and an instance created. Load the plug-in into the IBM DevOps Velocity container if necessary.

## Integration type

The DevOps Test plug-in is a parser type plug-in, and it parses data from the following test tools:

## Invoking the plug-in

To install the plug-in, perform the following steps:

1. From the home page, click **Settings** > **Integrations** > **Available**.
2. In the Action column for the DevOps Test plug-in, click **Install**.

The plug-in is now listed in the Installed tab and available for invoking.

To invoke the DevOps Test plug-in send an HTTP Post request with the data to parse. Whenever there is a hit to the endpoint, the data is parsed and displayed as metrics in IBM DevOps Velocity. You can use various methods such as Postman, REST calls, CURL, and CI/CD tools like Jenkins to invoke the plug-in endpoints.

### Invoke using Jenkins

Install the Jenkin’s DevOps Velocity plug-in into your Jenkins server. In your freestyle job or pipeline use the **UCV-Upload Metrics File to UrbanCode Velocity** step and provide the required fields. This step allows your build job to upload generated coverage results files to IBM DevOps Velocity

```
pipeline {
   agent any
   stages {
      stage('oneTestMetrics') {
         steps {
            step([$class: 'UploadMetricsFile',  appName: 'My DevOps Test', dataFormat: 'onetestFTJSON', filePath: '<location of the DevOps Test report>', name: 'my-onetest-test', pluginType: 'onetest', tenantId: '<tenant Id>', testSetName: 'onetest', metricsRecordUrl: "${env.BUILD_URL}"])
         }
      }
   }
}

```

### Invoke using a Rest call

When using a REST call to invoke the DevOps Test plug-in, it must be a POST method and include the location of the IBM DevOps Velocity quality data endpoint.

The following request sample shows a REST call that you can copy and update as necessary. Key points about the snippet:

* The URL points to the IBM DevOps Velocity quality data endpoint. Update with the server location for your installation of IBM DevOps Velocity.
* The BODY of the call is a multipart/form data. It includes information about the payload.

```

METHOD: POST 
URL: https://<url_devops_velocity_server>/reporting-consumer/metrics
BODY (multipart/form-data):
 {
  payload: <json_object_string> // See below for schema format
 testArtifact: <DevOps_Test_JSON_file> // test results json file which needs to be parsed
 }

```

The following shows the schema for the payload. Replace the angle brackets with your values for the parameters.

```

{
  "tenant_id": "<tenant_id>",    // required Tenant ID
  "metricName": "<metric_name>", // optional: name for recurring test set
  "application": {
    "name": "<application_name>"  //Name of application
  },
  "record": {
    "recordName": "<record_name>", // optional: Name for this record
    "executionDate": 1547983466015, // optional: UNIX Epoch
    "pluginType": "onetest",
    "dataFormat": "<data_type>",  // onetestFTJSON or onetestPTJSON or onetestUIJSON
    "metricsRecordUrl": "<Jenkins_build_url>" // optional: To link the Jenkins build with test results
 },
  "build": {  // Optional: One of the following fields must be included 
    "buildId": "<build_id>",
    "jobExternalId": "<external_job_id>",
    "url": "<build_url>",
  },
  "commitId": "<commit_id>",  // optional
  "pullRequestId": "<pullrequest_id>", // optional
  "environment": "<environment_name>" // optional
}

```

### Data format details

* onetestFTJSON is for Functional test results
* onetestPTJSON is for Performance test results
* onetestUIJSON is for Web UI test results

### Invoke using Curl

```

curl --request POST \
  --url https://<DevOps_Velocity_Base_URL>/reporting-consumer/metrics \
  --form 'payload={
  "tenant_id": "5ade13625558f2c6688d15ce",
  "application": {
    "name": "My Application"
  },
  "record": {
    "pluginType": "onetest",
    "dataFormat": "onetestFTJSON"
  }
}
' \
  --form testArtifact=@<file path>

```

|Back to ...||Latest Version|DevOps Test |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.40-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-onetest/ucv-ext-onetest%3A1.0.40.tar.7z.001)[and 1.0.40-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-onetest/ucv-ext-onetest%3A1.0.40.tar.7z.002)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
