
# Cypress - Usage

To use the Cypress plug-in, you must load the plug-in and create an instance. If necessary, you can load the plug-in into the IBM DevOps Velocity container. 

## Integration type

The Cypress plug-in is a parser type plug-in. It parses XML and JSON data.

## Integration steps 

* In IBM DevOps Velocity, click  **Settings** > **Integrations** > **Available**. 
* In the  Action  column for the Cypress plug-in, click **Install**.

The plug-in is now listed in the  **Installed** tab and available for invoking. 

## Invoking the plug-in 

To gather data from the Cypress server, you must send an HTTP Post request with the data to parse. Whenever there is a hit to the endpoint, the data is parsed and displayed as metrics in IBM DevOps Velocity. You can use various methods such as Postman, REST calls, CURL to invoke the plug-in endpoints.

## Invoke the plug-in using a Rest call 

When using a REST call to invoke the Cypress plug-in, it must be a POST method and include the location of the IBM DevOps Velocity quality data endpoint.

The following request sample shows a REST call that you can copy and update as necessary. Key points about the snippet: 

The URL points to the IBM DevOps Velocity quality data endpoint. Update with the server location for your installation of IBM DevOps Velocity.
The BODY of the call is multipart/form data. It includes information about the payload.  

```
METHOD: POST  
URL: https://<url_devopsvelocity_server>/reporting-consumer/metrics  
BODY (multipart/form-data): 
 { 
  payload: <payload_json_object_string> // See below for schema format 
  testArtifact: <xml_file/JSON_file> 
 } 
```

## Invoke the plug-in using Curl request 

```
curl --request POST \ 
  --url https://url_devopsvelocity_server>/reporting-consumer/metrics \ 
  --form 'payload={ 
  "tenant_id": "", 
  "application": { 
    "name": "My Application" 
  }, 
  "record": { 
     "pluginType": "cypress", 
     "dataFormat": "XML", // for xml use XML and for json use JSON
     “metricDefinitionId”: “Functional Tests” // Optional: If metricDefinitionId is blank then by default graph will display under Unit Tests.
  } 
}
' \ 
  --form testArtifact=@test-result/cypress.xml 
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
    “metricDefinitionId”: “Functional Tests” // Optional: If metricDefinitionId is blank then by default graph will display under Unit Tests.
    "recordName": "<record_name>", // optional: Name for this record 
    "executionDate": 1547983466015, // optional: UNIX Epoch 
    "pluginType": "cypress", 
    "dataFormat": "XML/JSON",
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

Once you invoke the plug-in, perform the following steps to add the chart for functional test in IBM DevOps Velocity.
* In IBM DevOps Velocity, click **Insights** > **All Dashboards**.
* Open any existing dashboard or create a new dashboard and open.
* Click **Add charts**.
* Under the **Quality** category, add **Functional Tests** charts.
* You can see the functional test chart added to the dashboard. Analyze the data in the functional test chart to view the functional test results.

|Back to ...||Latest Version|Cypress |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.1-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-cypress/ucv-ext-cypress%3A1.0.1.tar.7z.001)[and 1.0.1File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-cypress/ucv-ext-cypress%3A1.0.1.tar.7z.002)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
