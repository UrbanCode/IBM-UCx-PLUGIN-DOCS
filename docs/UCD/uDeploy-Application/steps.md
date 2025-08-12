
# IBM DevOps Deploy Applications - Process Steps

* [Add Application To Team](#add_application_to_team)
* [Add Component To Application](#add_component_to_application)
* [Add Tag To Application](#add_tag_to_application)
* [Check If Application Exists](#check_if_application_exists)
* [Check If Application Process Exists](#check_if_application_process_exists)
* [Create Application](#create_application)
* [Create Application From Template](#create_application_from_template)
* [Create Application Process](#create_application_process)
* [Create Application Property](#create_application_property)
* [Create Multiple Applications](#create_multiple_applications)
* [Create Snapshot](#create_snapshot)
* [Create Snapshot Of Environment](#create_snapshot_of_environment)
* [Delete Application](#delete_application)
* [Get Application Details](#get_application_details)
* [Get Components in Application](#get_components_in_application)
* [Get Environments in Application](#get_environments_in_application)
* [Remove Component From Application](#remove_component_from_application)
* [Remove Tag from Application](#remove_tag_from_application)
* [Run Application Process](#run_application_process)


## Add Application To Team

Adds an application or a list of applications delimited by commas to a team for a given type classification.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application/Applications | String | A comma delimited list of application names/ids to add to the team. | Yes |
| Team | String |  | Yes |
| Type | String | The type classification to add. Leave blank to use the type Standard Application. | No |

## Add Component To Application

Adds a component to an application.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Name | String |  | Yes |
| Component Name | String |  | Yes |

## Add Tag To Application

Adds a tag to an application.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Name | String |  | Yes |
| Tag Name | String |  | Yes |

## Check If Application Exists

This step will succeed if the application exists and fail if it does not.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application | String |  | Yes |

## Check If Application Process Exists

This step will succeed if the application process exists and fail if it does not.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Name | String |  | Yes |
| Application Process Name | String |  | Yes |

## Create Application

Creates an application.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Description | String | A description of the new application. | No |
| Application Name | String | The name of the new application. | Yes |
| Default Notification Scheme | String | The notification scheme for this application(will default to none if not specified). | No |
| Enforce Complete Snapshots | Boolean | Check this box if the application should require anexplicit version for each component. | No |

## Create Application From Template

Creates an application from a template and add existing components. Supported by UCD v6.2.3.1 and greater.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Description | String | A description of the new application. | No |
| Application Name | String | The name of the new application. | Yes |
| Default Notification Scheme | String | The notification scheme for this application(will default to none if not specified). | No |
| Enforce Complete Snapshots | Boolean | Check this box if the application should require anexplicit version for each component. | No |
| Existing Component IDs | String | Specify a list of existing component IDs to add to the new application. Separate each component ID by a new line or comma. | No |
| Template ID | String | The ID of the template to use. If you are using an application template, either this field or templateName are required. | No |
| Template Name | String | The name of the template to use. If you are using an application template, either this field or Template ID are required. | No |
| Template Version | String | The version of the template to use. Leave blank to use latest. | No |

## Create Application Process

Creates an application process.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| JSON body | String | JSON request body that represents the process to be created. | Yes |

## Create Application Property

Creates a property for an application.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application | String | name/ID of the application that the environment belongs to. | Yes |
| Property Name | String | name of the property to set. | Yes |
| Property Value | String | value of the property to set. | No |
| Secure | Boolean | check if the property should be secure. | No |

## Create Multiple Applications

Creates multiple applications using a JSON format. Outputs a comma delimited list of the application UUIDs that were created (application.ids). Supported by UCD v6.2.3.1 and greater.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| JSON File/Text | String | Specify a body of JSON text or a file to define Applications. Separate multiple JSON objects by using commas within an array, e.g. [{}``,{}``,{}``]. | Yes |

## Create Snapshot

Create a snapshot for an environment, specifying the list of versions to include.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application | String | Name or ID of the application to add the snapshot to | Yes |
| Description | String |  | No |
| Snapshot Name | String |  | Yes |
| Versions | String | A newline-separated list of versions to add to the snapshot. Each line must be of this format: [component name or ID]=[version name or ID] | Yes |

## Create Snapshot Of Environment

Create a snapshot for an environment, specifying the list of versions to include.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application | String | Name or ID of the application to add the snapshot to | Yes |
| Description | String |  | No |
| Environment | String | Name or ID of the environment to base the snapshot on | Yes |
| Snapshot Name | String |  | Yes |

## Delete Application

Deletes an application


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application | String | Name or ID of the application to delete | Yes |

## Get Application Details

Retrieve basic configuration information about a application.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application | String | Application name or ID | Yes |

## Get Components in Application

Get a list of components in an application.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application | String | Name or ID of the application | Yes |

## Get Environments in Application

Get a list of environments in an application.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Active environments | Boolean | check if active environments should be included in the list. | No |
| Application | String | Name or ID of the application | Yes |
| Inactive environments | Boolean | check if inactive environments should be included in the list. | No |

## Remove Component From Application

Removes component(s) from an application


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application | String | Name or ID of the application from which the components are to be removed | Yes |
| Components | String | Names or IDs of the components to be removed. Mention one component name per line. | Yes |

## Remove Tag from Application

Removes a tag from an application.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Name | String |  | Yes |
| Tag Name | String |  | Yes |

## Run Application Process

Runs an application process.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Name | String | The name of the application. | Yes |
| Application Process Name | String | The name of the process to run. | Yes |
| Component Versions | String | If you are not using a snapshot, enter component versions here. Each component-version pair should be on a separate line.Separate each component and version number with a colon.Example- My Component:2.5 | No |
| Environment Name | String | The environment on which this process will run. | Yes |
| Only Changed Versions | Boolean | Check this if you want to install only changed versions. | No |
| Snapshot Name | String | If you are using a snapshot, enter its name here. | No |
| Wait For Application Process To Finish | Boolean | Check this if you want this step to wait until the application process finishes. If checked, the result of this step will be the result of the application process (success or failure). | No |


