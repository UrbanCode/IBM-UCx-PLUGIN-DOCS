
# JUnit - Usage

To use the JUnit plug-in, the plug-in must be loaded and an instance created. Load the plug-in into the IBM DevOps Velocity container if necessary. From the user interface, click **Settings** > **Integrations** > **Plugins**. On the Plug-ins page, locate the plug-in and click **Load Plugin**. To create an instance, locate the plug-in and click **Install**. The plug-in is now listed below those plug-ins to be installed and available for invoking.


## Integration type

The JUnit plug-in is a parser type plug-in. It parses JUnit XML data.

## Invoking the plugin

* To gather data from the Junit server, send an HTTP Post request with the data to parse. Whenever a there is a hit to the endpoint, the data is parsed and displayed as metrics in IBM DevOps Velocity. You can use various methods such as Postman, REST calls, CURL, and CI/CD tools like Jenkins to invoke the plug-in endpoints.

## Invoke using Jenkins plugin

* Install the IBM DevOps Velocity plug-in into your Jenkins server. In your freestyle job or pipeline use the **UCV-Upload Metrics File to UrbanCode Velocity** step and provide the required fields. This step allows your build job to upload generated coverage results files to IBM DevOps Velocity.

```
pipeline {
   agent any
   stages {
      stage('junitMetrics') {
         steps {
            step([$class: 'UploadMetricsFile',  appName: 'My Junit Test', dataFormat: 'junitXML', filePath: '<location of the junit report>', name: 'my-junit-test', pluginType: 'junitXML', tenantId: '<tenant Id>', testSetName: 'junit', metricsRecordUrl: "${env.BUILD_URL}"])
         }
      }
   }
}

```

## Invoke the plugin using a Rest call

When using a REST call to invoke the Junit plug-in, it must be a POST method and include the location of the IBM DevOps Velocity quality data endpoint.

The following request sample shows a REST call that you can copy and update as necessary. Key points about the snippet:

* The URL points to the IBM DevOps Velocity quality data endpoint. Update with the server location for your installation of IBM DevOps Velocity.

* The BODY of the call is a multipart/form data. It includes information about the payload.

```

METHOD: POST 
URL: https://<url_ibm_devops_velocity_server>/reporting-consumer/metrics 
BODY (multipart/form-data):
 {
  payload: <payload_json_object_string> // See below for schema format
 testArtifact: <junit_xml_file>
 }

```

## Invoke using Curl

```
curl --request POST \
  --url https://url_ibm_devops_velocity_server>/reporting-consumer/metrics \
  --form 'payload={
  "tenant_id": "",
  "application": {
    "name": "My Application"
  },
  "record": {
    "pluginType": "junitXML",
    "dataFormat": "junitXML"
  }
}
' \
  --form testArtifact=@test-result/junit.xml

```

## Payload schema

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
    "pluginType": "junitXML",
    "dataFormat": "junitXML",
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

The following shows the schema for the payload. Replace the angle brackets with your values for the parameters.


```


|Back to ...||Latest Version|JUnit |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.84-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-junit/ucv-ext-junit%3A1.0.84.tar.7z.001)[and 1.0.84-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-junit/ucv-ext-junit%3A1.0.84.tar.7z.002)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|
