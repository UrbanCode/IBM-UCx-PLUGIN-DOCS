
IBM UrbanCode Deploy for IBM UrbanCode Build - Steps
====================================================

# Steps


### Steps




### Process steps in the UrbanCode Deploy server plug-in

* [Add Component Version Status](#add_component_version_status)
* [Create Auth Token](#create_auth_token)
* [Create Component Version](#create_component_version)
* [Create Environment Snapshot](#create_environment_snapshot)
* [Create Version Link](#create_version_link)
* [Delete Auth Token](#delete_auth_token)
* [Deploy Component Version](#deploy_component_version)
* [Deploy With Snapshot](#deploy_with_snapshot)
* [Invoke Buztool](#invoke_buztool)
* [Set Component Version Properties](#set_component_version_properties)
* [Upload All Artifact Sets](#upload_all_artifact_sets)
* [Upload Artifact Set](#upload_artifact_set)
* [Upload Artifacts To Version](#upload_artifacts_to_version)


### Add Component Version Status

Add a status to an existing component version.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component Name | String | The name of the component in IBM UrbanCode Deploy server. | Yes |
| IBM UrbanCode Deploy Server |  | Select a UrbanCode Deploy server from the list or specify a property whose value is the property sheet UUID of the relevant UrbanCode Deploy server integration. | Yes |
| Status Name | String | The name of the status in IBM UrbanCode Deploy server or IBM UrbanCode Build server that you want to add to the version | Yes |
| Version Name | String | The name of the version in IBM UrbanCode Deploy server. | Yes |

### Create Auth Token

Create an auth token for a user in UrbanCode Deploy server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Description | String | The description to set for the auth token in UrbanCode Deploy server. | No |
| Expiration Time | String | The expiration time, specified as a number of minutes, to set for the newly created authentication token in UrbanCode Deploy server. | Yes |
| IBM UrbanCode Deploy Server |  | Select a UrbanCode Deploy server from the list or specify a property whose value is the property sheet UUID of the relevant UrbanCode Deploy server integration. | Yes |
| Log4j Logging Level | Enumeration:
| Configure the level of Log4j messages to output to the console. | No |
| Scope | Enumeration:
| The scope of the property to create, for this auth token. | Yes |
| Username | String | The username for whom the auth token will be created in UrbanCode Deploy server. | Yes |

### Create Component Version

Create a component version in IBM UrbanCode Deploy server and optionally upload files to it.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Artifacts Base Directory | String | The directory relative to the working directory for the step in which the artifacts are located. This value is only used if Upload Files is checked. | No |
| Component Name | String | The name of the component to create the version on in IBM UrbanCode Deploy server. | Yes |
| Create Version Link | Boolean | Create a link on the version that links back to the build life. | No |
| Description | String | The description of the version to create in IBM UrbanCode Deploy server. | No |
| Exclude Patterns | String | Patterns for excluded files from an upload to IBM UrbanCode Deploy server. Patterns can include ?, \*, or \*\*. | No |
| IBM UrbanCode Deploy Server |  | Select a UrbanCode Deploy server from the list or specify a property whose value is the property sheet UUID of the relevant UrbanCode Deploy server integration. | Yes |
| Include Patterns | String | Patterns for including files to be uploaded to IBM UrbanCode Deploy server. Patterns can include ?, \*, or \*\*. | No |
| Link Name | String | If creating a version link, the name of the link to create on the version | No |
| Link URL | String | The URL of the link being created on the version | No |
| Properties | String | The properties to set on the component version. Enter each property on a new line. Separate the property name and value with =. | No |
| Send Code Analytics | Boolean | Add code analytics as a property. | No |
| Send Code Coverage | Boolean | Add code coverage percentage as a property. | No |
| Send Source Changes | Boolean | Add source changes as a property. | No |
| Send Test Success Percentage | Boolean | Add test success percentage as a property. | No |
| Send Work Items | Boolean | Add work items as a property. | No |
| Status Name | String | The name of the status in IBM UrbanCode Deploy server or IBM UrbanCode Build server that you want to add to the version | No |
| Upload Files | Boolean | Check to upload files to the created version. | No |
| Version Name | String | The name of the version to create in IBM UrbanCode Deploy server. | Yes |

### Create Environment Snapshot

Create a snapshot of an environment, including all component versions in its inventory. You may also add component versions to this snapshot.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Name/ID | String | The name or ID of the application to which the environment belongs. | Yes |
| Component Versions | String | Optionally add additional component versions to the snapshot. Each version must be specified along with the component it belongs to (E.G. <component\_name>/<version\_name>). Separate multiple component/version mappings with new lines. If versions already exist in a mapped component, they will be replaced in the new snapshot. | No |
| Description | String | An optional description of the new snapshot. | No |
| Environment Name/ID | String | The name or ID of the environment to snapshot. | Yes |
| Exclude Unmapped Components | Boolean | Exclude components that are not mapped to any resources in the environment. | No |
| Log4j Logging Level | Enumeration:
| Configure the level of Log4j messages to output to the console. | No |
| Snapshot Name | String | The name of the new snapshot. | Yes |
| UrbanCode Deploy Server |  | Select a UrbanCode Deploy server from the list or specify a property whose value is the property sheet UUID of the relevant UrbanCode Deploy server integration. | Yes |

### Create Version Link

Create a link on a version that links back to the build life


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component Name | String | The name of the component in IBM UrbanCode Deploy server. | Yes |
| Component Version | String | The name of the version on the component in IBM UrbanCode Deploy server. | Yes |
| IBM UrbanCode Deploy Server |  | Select a UrbanCode Deploy server from the list or specify a property whose value is the property sheet UUID of the relevant UrbanCode Deploy server integration. | Yes |
| Link Name | String | The name of the link being created on the version | No |
| Link URL | String | The URL of the link being created on the version | No |

### Delete Auth Token

Delete the auth token that has been potentially created by the Create Auth Token step.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| IBM UrbanCode Deploy Server |  | Select a UrbanCode Deploy server from the list or specify a property whose value is the property sheet UUID of the relevant UrbanCode Deploy server integration. | Yes |
| Log4j Logging Level | Enumeration:
| Configure the level of Log4j messages to output to the console. | No |

### Deploy Component Version

Deploy a component version in IBM UrbanCode Deploy server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Name | String | The name of the application to deploy the component with. | Yes |
| Application Process | String | The name of the application process to use when deploying the component. | Yes |
| Component Name | String | The name or ID of the component in which the component version being deployed exists. | Yes |
| Deploy Only Changed Versions | Boolean | Deselect to force deployment of versions already in the inventory. | No |
| Description | String | The description of the deploy request. | No |
| Dont Wait For Process Completion | Boolean | Skip waiting for the application process to complete. This will start the process and immediately succeed the step. | No |
| Environment Name | String | The name of the application environment to deploy the component to. | Yes |
| IBM UrbanCode Deploy Server |  | Select a UrbanCode Deploy server from the list or specify a property whose value is the property sheet UUID of the relevant UrbanCode Deploy server integration. | Yes |
| Log4j Logging Level | Enumeration:
| Configure the level of Log4j messages to output to the console. | No |
| Properties | String | The properties to set on the application process request. Enter each property on a new line. Separate the property name and value with =. | No |
| Snapshot | String | Optionally create a snapshot after a successful deployment. This new snapshot will contain the component versions that were deployed. | No |
| Version Name | String | The name or ID of the component version to deploy. This version must exist in the specified component as well. | Yes |
| Wait Timeout | String | The number of seconds to wait for the process to complete before failing. A value of -1 will wait indefinitely. If the step has been configured to skip waiting for the process to complete, this timeout will have no effect. | No |

### Deploy With Snapshot

Deploy an application snapshot in IBM UrbanCode Deploy server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Name/ID | String | The name or ID of the application to deploy the component with. | Yes |
| Application Process Name/ID | String | The name or ID of the application process to use when deploying the snapshot. | Yes |
| Deploy Only Changed Versions | Boolean | Force deployment of versions already in the inventory | No |
| Description | String | The description of the deploy request. | No |
| Dont Wait For Process Completion | Boolean | Skip waiting for the application process to complete. This will start the process and immediately succeed the step. | No |
| Environment Name/ID | String | The name or ID of the application environment in which to deploy the snapshot. | Yes |
| IBM UrbanCode Deploy Server |  | Select a UrbanCode Deploy server from the list or specify a property whose value is the property sheet UUID of the relevant UrbanCode Deploy server integration. | Yes |
| Log4j Logging Level | Enumeration:
| Configure the level of Log4j messages to output to the console. | No |
| Properties | String | The properties to set on the application process request. Enter each property on a new line. Separate the property name and value with =. | No |
| Snapshot Name/ID | String | The name or ID of the application snapshot to deploy. | Yes |
| Wait Timeout | String | The number of seconds to wait for the process to complete before failing. A value of -1 will wait indefinitely. If the step has been configured to skip waiting for the process to complete, this timeout will have no effect. | No |

### Invoke Buztool

Invoke Buztool


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component | String | The component name in UrbanCode Deploy server to use for creating a new version. | Yes |
| Output | String | Path to the file where the output of version creation is written. | No |
| Ship List Path | String | The path to the shiplist file for artifacts to upload to UrbanCode Deploy server. | No |
| Type | Enumeration:
| The type of the version to create. Set to full to create a full version. | No |
| UrbanCode Deploy Agent Home Directory | String | The path to the UrbanCode Deploy agent directory. | Yes |
| Verbose | Boolean | Display Buztools trace logs. | No |
| Version Name | String | The name of the version to create in UrbanCode Deploy server. | No |

### Set Component Version Properties

Set properties on an existing component version.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component Name | String | The name of the component in IBM UrbanCode Deploy server. | Yes |
| IBM UrbanCode Deploy Server |  | Select a UrbanCode Deploy server from the list or specify a property whose value is the property sheet UUID of the relevant UrbanCode Deploy server integration. | Yes |
| Properties | String | The properties to set on the component version. Enter each property on a new line. Separate the property name and value with =. | No |
| Send Code Analytics | Boolean | Add code analytics as a property. | No |
| Send Code Coverage | Boolean | Add code coverage percentage as a property. | No |
| Send Source Changes | Boolean | Add source changes as a property. | No |
| Send Test Success Percentage | Boolean | Add test success percentage as a property. | No |
| Send Work Items | Boolean | Add work items as a property. | No |
| Version Name | String | The name of the version in IBM UrbanCode Deploy server. | Yes |

### Upload All Artifact Sets

Upload all artifact sets to IBM UrbanCode Deploy server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component Name | String | The name of the component in IBM UrbanCode Deploy server. | Yes |
| Component Version | String | The name of the version on the component in IBM UrbanCode Deploy server. | Yes |
| Description | String | The description of the version if it needs to be created in IBM UrbanCode Deploy server. | No |
| IBM UrbanCode Deploy Server |  | Select a UrbanCode Deploy server from the list or specify a property whose value is the property sheet UUID of the relevant UrbanCode Deploy server integration. | Yes |
| Properties | String | The properties to set on the component version. Enter each property on a new line. Separate the property name and value with =. | No |
| Send Code Analytics | Boolean | Add code analytics as a property. | No |
| Send Code Coverage | Boolean | Add code coverage percentage as a property. | No |
| Send Source Changes | Boolean | Add source changes as a property. | No |
| Send Test Success Percentage | Boolean | Add test success percentage as a property. | No |
| Send Work Items | Boolean | Add work items as a property. | No |

### Upload Artifact Set

Upload an artifact set to IBM UrbanCode Deploy server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Artifact Set | String | The name of the artifact set to upload to IBM UrbanCode Deploy server | No |
| Component Name | String | The name of the component in IBM UrbanCode Deploy server. | Yes |
| Component Version | String | The name of the version on the component in IBM UrbanCode Deploy server. | Yes |
| Description | String | The description of the version if it needs to be created in IBM UrbanCode Deploy server. | No |
| Fail If Not Found | Boolean | Force the upload step to fail when the directory containing artifacts does not exist or there are no artifacts in the directory. | No |
| IBM UrbanCode Deploy Server |  | Select a UrbanCode Deploy server from the list or specify a property whose value is the property sheet UUID of the relevant UrbanCode Deploy server integration. | Yes |
| Suppress Artifact Set Dir | Boolean | Check to not include a directory with the artifact set name in IBM UrbanCode Deploy server. | No |

### Upload Artifacts To Version

Upload artifacts to an existing component version in IBM UrbanCode Deploy server


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component Name | String | The name of the component to create the version on in IBM UrbanCode Deploy server. | Yes |
| Description | String | The description of the version if it needs to be created in IBM UrbanCode Deploy server. | No |
| Exclude Patterns | String | Patterns for excluded files from an upload to IBM UrbanCode Deploy server. Patterns can include ?, \*, or \*\*. | No |
| IBM UrbanCode Deploy Server |  | Select a UrbanCode Deploy server from the list or specify a property whose value is the property sheet UUID of the relevant UrbanCode Deploy server integration. | Yes |
| Include Patterns | String | Patterns for including files to be uploaded to IBM UrbanCode Deploy server. Patterns can include ?, \*, or \*\*. | No |
| Version Name | String | The name of the version to create in IBM UrbanCode Deploy server. | Yes |


### Roles in the UrbanCode Deploy plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.


* [IBM UrbanCode Deploy](#ibm_urbancode_deploy_role)


### IBM UrbanCode Deploy


| Name | Type | Description |
| --- | --- | --- |
| Auth Token | Password | The auth token to use to authenticate with IBM UrbanCode Deploy server instead of a username and password combination. |
| IBM UrbanCode Deploy server URL | String | The IBM UrbanCode Deploy server URL including protocol and port, if needed. Example: http://ibm-ucd.domain.com:8080 |
| Password | Password | The password to be used to connect to the IBM UrbanCode Deploy server. Leave empty if you want to use an auth token. |
| Password Script | String | If you wish to use a property for your password, leave the Password field blank and enter a property scriptlet here. |
| Username | String | The username to be used to connect to the IBM UrbanCode Deploy server. Leave empty if you want to use an auth token. |
| Version | Enumeration:
| The version of IBM UrbanCode Deploy server. |



|Back to ...||Latest Version|IBM UrbanCode Deploy for IBM UrbanCode Build |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[56.1175564](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/ibmucd/DevOps-deploy-56.1175564.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
