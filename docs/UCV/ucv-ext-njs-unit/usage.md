
# Njs-Unit - Usage

To use the Njs-Unit plug-in, the plug-in must be loaded, and an instance created. Load the plug-in into the IBM DevOps Velocity container if necessary.

## Integration steps 

  1. In IBM DevOps Velocity, click **Settings** > **Integrations** > **Available**.
  2. In the **Action** column for the Njs-Unit plug-in, click **Install**. 
  3. The plug-in is now listed in the **Installed** tab and available for invoking. 

## Integration type

The Njs-Unit plug-in is a parser type plug-in. It parses XML and JSON data.

## Invoking the plug-in 

You can invoke the plug-in manually using REST Call. Whenever there is a hit to the endpoint, the data is parsed and displayed as metrics in IBM DevOps Velocity. You can use various methods such as Postman or CURL to invoke the plug-in endpoints.

## Invoke the plug-in using REST call 

When using REST call to invoke the Njs-Unit plug-in, it must be a POST method and include the location of the IBM DevOps Velocity quality data endpoint. 

The following request sample shows a REST call that you can copy and update as necessary. Key points about the snippet: 

  1. The URL points to the IBM DevOps Velocity quality data endpoint. Update with the server location for your installation of IBM DevOps Velocity. 

  2. The BODY of the call is multipart/form data. It includes information about the payload.

```
METHOD: POST  
URL: https://<url_urbancodevelocity_server>/reporting-consumer/metrics  
BODY (multipart/form-data): 
 { 
  payload: <payload_json_object_string> // See below for schema format 
 testArtifact: <xml_file/JSON_file> 
 }
```

### Payload schema 

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
    "pluginType": "Njs-Unit", 

        "dataFormat": "mocha/junitXML" //for xml use mocha/junitXML, jest/junitXML, tape/junitXML,  tap/junitXML format and for JSON use mochaJSON, jestJSON, tapeJSON, tapJSON format 

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

## Invoke the plug-in using Curl request 

```
curl --request POST \
  --url https://url_urbancodevelocity_server>/reporting-consumer/metrics \
  --form 'payload={
  "tenant_id": "",
  "application": {
    "name": "My Application"
  },
  "record": {
    "pluginType": "Njs-Unit",
        "dataFormat": "mocha/junitXML" // for xml use mocha/junitXML, jest/junitXML, tape/junitXML,  tap/junitXML format and for JSON use mochaJSON, jestJSON, tapeJSON, tapJSON format
  }
}
' \
  --form testArtifact=@test-result/mocha.xml
```

Once you invoke the plug-in, perform the following steps to add the chart for unit test in IBM DevOps Velocity. 

  1. In IBM DevOps Velocity, click **Insights > All Dashboards**.
  2. Open any existing dashboard or create a new dashboard and open. 
  3. Click **Add charts**.
  4. Under the **Quality** category, add **Unit Tests** charts.
  5. You can see the Unit Test chart added to the dashboard. Analyze the data in the unit test chart to view the unit test results.


|Back to ...||Latest Version|Njs-Unit |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.4-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-njs-unit/ucv-ext-njs-unit%3A1.0.4.tar.7z.001)[and 1.0.4-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-njs-unit/ucv-ext-njs-unit%3A1.0.4.tar.7z.002)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
