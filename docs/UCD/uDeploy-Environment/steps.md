
# IBM DevOps Deploy Environments - Process Steps

* [Add Base Resource To Environment](#add_base_resource_to_environment)
* [Add Environment To Team](#add_environment_to_team)
* [Check If Environment Exists](#check_if_environment_exists)
* [Create Environment](#create_environment)
* [Create Environment Property](#create_environment_property)
* [Create Environment from Template](#create_environment_from_template)
* [Create Multiple Environments](#create_multiple_environments)
* [Delete Environment](#delete_environment)
* [Get Component Environment Properties](#get_component_environment_properties)
* [Get Environment Details](#get_environment_details)
* [Get Environment Properties](#get_environment_properties)
* [Get Latest Version By Environment and Component](#get_latest_version_by_environment_and_component)
* [Set Component Environment Property](#set_component_environment_property)
* [Verify Inventory Status](#verify_inventory_status)


## Add Base Resource To Environment

Adds a base resource to an environment as a deployment target.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application | String | Required unless you are specifying the environment by its ID. | No |
| Environment | String |  | Yes |
| Resource Path | String |  | Yes |

## Add Environment To Team

Adds an environment or list of environments delimited by commas to a team for a given application and type classification.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application | String | Required unless you are specifying the environment by its ID. | No |
| Environment/Environments | String | A comma delimited list of environment names/ids to add to the team. | Yes |
| Team | String |  | Yes |
| Type | String | The type classification to add. Leave blank to use the type Standard Environment. | No |

## Check If Environment Exists

This step will succeed if the environment exists and fail if it does not.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application | String | name/ID of the application that the environment belongs to. Not needed if you refer to environment by ID instead of name. | No |
| Environment | String | name/ID of the environment. If you specify ID you dont need to specify the application. | Yes |

## Create Environment

Creates an environment for the specified application.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Append Unique Suffix | Boolean | Check this box if you want to guarantee your environment name is unique. | No |
| Application Name | String | The name of the application the environment will be created for. | Yes |
| Base Resource Path | String | Specify the path to a base resource to put the new environments resources in if using a blueprint. This field must be provided when using a blueprint. Example: /Provisioned Environments | No |
| Blueprint Name | String | Specify a blueprint name if this environment should be created based on an application blueprint. | No |
| Description | String | A description of of the environment to be created. | No |
| Environment Name | String | The name of the environment to be created. | Yes |
| Environment Profile | String | Specify the name of the environment profile to use to provision the new environment. This field is only valid for blueprints backed by resource templates imported from the cloud. | No |
| Node Resource Properties | String | Properties that configure cloud resource nodes. Syntax: [node or script package name]/propertyName=propertyValue Examples: OS Node/HWAttributes.numvcpus=2install\_ucd\_agent/UCD\_Agent\_Name=newAgentName | No |
| Properties | String | Properties to be set on the new environment, using Java property file syntax. | No |
| Require Approvals | Boolean | Check this box if the environment will require approval from an approval process to install versions or snapshots. | No |

## Create Environment Property

Create a property for an application environment.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application | String | name/ID of the application that the environment belongs to. Not needed if you refer to environment by ID instead of name. | No |
| Environment | String | name/ID of the environment. If you specify ID you dont need to specify the application. | Yes |
| Property Name | String | name of the property to set. | Yes |
| Property Value | String | value of the property to set. | No |
| Secure | Boolean | check if the property should be secure. | No |

## Create Environment from Template

Creates an environment from a template for the specified application.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application ID | String | The Application ID where the environment will be created. | Yes |
| Description | String | A description of of the environment to be created. | No |
| Environment Name | String | The name of the environment to be created. | Yes |
| Environment Template ID | String | The ID of the environment template. The Environment Template ID or Name is required. | No |
| Environment Template Name | String | The name of the environment template. The Environment Template ID or Name is required. | No |

## Create Multiple Environments

Creates multiple environments using JSON format. Outputs a comma delimited list of the environment UUIDs that were created (environment.ids).



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| JSON File/Text | String | Specify a body of JSON text or a file to define Environments. Separate multiple JSON objects by using commas within an array, e.g. [{}``,{}``,{}``]. | Yes |

## Delete Environment

Deletes an environment.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application | String | name/ID of the application that the environment belongs to. Not needed if you refer to environment by ID instead of name. | No |
| Environment | String | name/ID of the environment. If you specify ID you dont need to specify the application. | Yes |

## Get Component Environment Properties

Get the name-value pairs of all component environment properties and sets them as output properties for this step. Secure property values cannot be resolved.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application | String | name/ID of the application that the environment belongs to. Not needed if you refer to environment by ID instead of name. | No |
| Component | String | name/ID of the component. | Yes |
| Environment | String | name/ID of the environment. If you specify ID you dont need to specify the application. | Yes |

## Get Environment Details

Retrieve basic configuration information about a environment.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application | String | Application name or ID. (Required when using a name for the environment instead of its ID) | Yes |
| Environment | String | Environment name or ID | Yes |

## Get Environment Properties

Get the name-value pairs of all environment properties and sets them as output properties for this step. Secure property values cannot be resolved.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application | String | name/ID of the application that the environment belongs to. Not needed if you refer to environment by ID instead of name. | No |
| Environment | String | name/ID of the environment. If you specify ID you dont need to specify the application. | Yes |

## Get Latest Version By Environment and Component

Gets the latest Version of a Component in a given Environment


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application | String | Required Application Name | No |
| Component | String | Required Component Name | No |
| Environment | String | Required Environment Name | No |

## Set Component Environment Property

Sets an environment-specific property value for a component. The property must already exist.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application | String | name/ID of the application that the environment belongs to. Not required if you specify environment by ID instead of name. | No |
| Component | String | name/ID of the component that the environment belongs to. | Yes |
| Environment | String | name/ID of the environment. If you specify ID you dont need to specify the application. | Yes |
| Property Name | String | name of the property to set. | Yes |
| Property Value | String | value of the property to set. | No |

## Verify Inventory Status

Verifies that the environment has a component with a certain version in inventory.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application | String | name/ID of the application that the environment belongs to. Not needed if you refer to environment by ID instead of name. | No |
| Component | String | name/ID of the component to verify. | Yes |
| Environment | String | name/ID of the environment. If you specify ID you dont need to specify the application. | Yes |
| Status | String | The inventory entry must match this status (case sensitive). Default possible statuses are Active or Staged, but custom statuses are also possible. | Yes |
| Version | String | name of the version to verify. | Yes |



|Back to ...||Latest Version|IBM DevOps Deploy Environments ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[89.1159271](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/uDeploy-Environment/ucd-uDeploy-Environment-89.1159271.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
