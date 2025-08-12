
# IBM Instana - Process Steps

* [Add Global Release Marker](#add_global_release_marker)
* [Add Application Release Marker](#add_application_release_marker)
* [Add Service Release Marker](#add_service_release_marker)

## Steps

### Add Global Release Marker

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Instana Base URL | String | The base URL of the Instana server. For Ex:https://ibmdevsandbox-instanaibm.instana.io | Yes |
| API Key / Authorization Token | Password | The api key to authenticate with Instana. | Yes |
| Marker Title / Marker Name | String | The pipeline name of the Instana server. For example:eShop-QA, HelloApp-AppEnv | Yes |
| Disable Certificate Validation | Checkbox | Check to disable certificate validation. | No |

### Add Application Release Marker

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Instana Base URL | String | The base URL of the Instana server. For Ex:https://ibmdevsandbox-instanaibm.instana.io | Yes |
| API Key / Authorization Token | Password | The api key to authenticate with Instana. | Yes |
| Marker Title / Marker Name | String | The pipeline name of the Instana server. For example:eShop-QA, HelloApp-AppEnv | Yes |
| Applications | String | The names of the applications of the Instana server separated by commas. For example: my-app1, my-app1 | Yes |
| Disable Certificate Validation | Checkbox | Check to disable certificate validation. | No |


### Add Service Release Marker

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Instana Base URL | String | The base URL of the Instana server. For Ex:https://ibmdevsandbox-instanaibm.instana.io | Yes |
| API Key / Authorization Token | Password | The api key to authenticate with Instana. | Yes |
| Marker Title / Marker Name | String | The pipeline name of the Instana server. For example:eShop-QA, HelloApp-AppEnv | Yes |
| Services | String | The names of the Services of the Instana server separated by commas. For example: my-service1, my-service2 | Yes |
| Disable Certificate Validation | Checkbox | Check to disable certificate validation. | No |



|Back to ...||Latest Version|IBM Instana  ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[2.1158245](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/ibm-instana/ucd-Instana-2.1158245.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
