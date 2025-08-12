
# IBM DevOps Deploy System - Process Steps

* [Add Group To Team](#add_group_to_team)
* [Add User To Team](#add_user_to_team)
* [Create System Property](#create_system_property)
* [Get System Configuration](#get_system_configuration)
* [Set System Configuration](#set_system_configuration)


## Add Group To Team

Adds a group to a team for a given type classification.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Group | String |  | Yes |
| Team | String |  | Yes |
| Type | String | The type classification to add. | Yes |

## Add User To Team

Adds a user to a team for a given type classification.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Team | String |  | Yes |
| Type | String | The type classification to add. | Yes |
| User | String |  | Yes |

## Create System Property

Creates a system-wide property.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Property Name | String | name of the property to set. | Yes |
| Property Value | String | value of the property to set. | No |
| Secure? | Boolean | check if the property should be secure. | No |

## Get System Configuration

Get all system configuration values

This step has no input properties.

## Set System Configuration

Set some system configuration values.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Values to Set | String | Values to set, using Java property file syntax. The names of the values must match those returned by the Get System Configuration step. Any settings not provided here will be left unchanged. | Yes |


