
# IBM DevOps Deploy Components - Process Steps

* [Add Component To Team](#add_component_to_team)
* [Check If Component Exists](#check_if_component_exists)
* [Create Component](#create_component)
* [Create Component Property](#create_component_property)
* [Delete Component](#delete_component)
* [Get Applications Using Component](#get_applications_using_component)
* [Get Component Details](#get_component_details)
* [Get Component Properties](#get_component_properties)
* [Create Multiple Components](#create_multiple_comp)


## Add Component To Team

Adds a component to a team for a given type classification.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component | String |  | Yes |
| Team | String |  | Yes |
| Type | String | The type classification to add. Leave blank to use the type Standard Component. | No |

## Check If Component Exists

This step will succeed if the component exists and fail if it doesnt.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component | String |  | Yes |

## Create Component

Creates a new component.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component Description | String | A description of the new component. | No |
| Component Name | String | The name of the new component. | Yes |
| Copy To Codestation | Boolean | If checked, artifacts will be copied from the given source to the servers Codestation repository. | No |
| Default Version Type | Enumeration:
* Full
* Incremental
| The types of versions to create automatically upon import. | Yes |
| Import Versions Automatically | Boolean | Check to import versions automatically. | No |
| Source Config Properties | String | Insert properties to pass in for the source config plugin. One per line, name=value format. | No |
| Source Config Type | Enumeration:
* None
* AnthillPro
* ClearCaseUCM
* File System
* File System (Versioned)
* Git
* Maven
* Rational Asset Manager
* Subversion
* TeamCity
* TFS
* TFS\_SCM
* uBuild
| The source config plugin for this component. | Yes |
| Template Name | String | If this component uses a template, enter its name here. | No |
| Template Version | String | If this component uses a template version, enter the version number here. | No |

## Create Component Property

Creates or sets an existing component property.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component Name | String | The name of the new component. | Yes |
| Property Name | String | name of the property to set. | Yes |
| Property Value | String | value of the property to set. | No |
| Secure? | Boolean | check if the property should be secure. | No |

## Delete Component

Deletes a component


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component | String | Name or ID of the component to delete | Yes |

## Get Applications Using Component

Get a list of applications using a component name or ID.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component | String | Name or ID of the component | Yes |

## Get Component Details

Retrieve basic configuration information about a component.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component | String | Component name or ID | Yes |

## Get Component Properties

Retrieve the basic properties for a component.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component | String |  | Yes |

## Create Multiple Components

Creates multiple components.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| JSON File/Text | String | A body of JSON text or a file to define components. | Yes |



|Back to ...||Latest Version|IBM DevOps Deploy Components ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[81.1155712](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/uDeploy-Component/ucd-uDeploy-Component-81.1155712.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
