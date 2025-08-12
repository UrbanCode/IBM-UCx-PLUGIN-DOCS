
# IBM Rational Team Concert Work Items - Process Steps

* [Add Work Item Comments](#add_work_item_comments)
* [Change Work Item Status](#change_work_item_status)
* [Check Work Item Status](#check_work_item_status)
* [Create Work Item](#create_work_item)


## Add Work Item Comments

Add Comments to an RTC Work Item


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Add URL to Comment | Boolean | Check to append the URL of the process request to the comment to be posted. | No |
| Comment | String | The comment to add to the RTC Work Item. | Yes |
| Password | Password | The password to be used to connect to the RTC server. | Yes |
| Project Name | String | The RTC project name containing the work item to add comments to. | Yes |
| RTC Server URL | String | The URL of the RTC server like https://myserver:9443/jazz | Yes |
| User Name | String | The user name to be used to connect to the RTC server. | Yes |
| Work Item ID | String | The ID number of the RTC work item to add comments to. | Yes |

## Change Work Item Status

Change the status of an RTC Work Item


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Action | String | The action to be performed on the work item. | No |
| New State | String | The new state for the work item. Will not be used if action is given. | No |
| Password | Password | The password to be used to connect to the RTC server. | Yes |
| Project Name | String | The RTC project name containing the work item to add comments to. | Yes |
| RTC Server URL | String | The URL of the RTC server like https://myserver:9443/jazz | Yes |
| User Name | String | The user name to be used to connect to the RTC server. | Yes |
| Work Item ID | String | The ID number of the RTC work item to add comments to. | Yes |

## Check Work Item Status

Check a work item for a specific status.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Password | Password | The password to use to connect to the Rational Team Concert server. | Yes |
| Project Name | String | The name of the Rational Team Concert project that contains the work item to check. | Yes |
| RTC Server URL | String | The URL of the Rational Team Concert server. For example: https://myserver:9443/jazz | Yes |
| Status | String | A status to validate against. If the work item status doesnt match this status, the stepfails. If the statuses match, the step succeeds. Leave blank to retrieve the work item statusas an output property. | No |
| User Name | String | The user name to use to connect to the Rational Team Concert server. | Yes |
| Work Item ID | String | The ID number of the Rational Team Concert work item to check. | Yes |

## Create Work Item

Create an RTC Work Item


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Add URL to Comment | Boolean | Check to append the URL of the process request to the comment to be posted. | No |
| Additional Work Item attributes | String | Enter a new-line-separated name=value pairs for any additional or custom attributes you want to populate in the new work item. The name is the ID of the attribute and value is the value. This field currently only supports rtc\_cm and oslc\_cm type text based value attributes as described here https://jazz.net/wiki/bin/view/Main/ResourceOrientedWorkItemAPIv2#Attributes and non text values are by ID reference. | No |
| Comment | String | If you want to add a comment to the new work item enter it here. Check below if you want to add a link back to UCD execution in the comment. | No |
| Filed Against | String | The category this work item should be filed against. By default this is required and Unassigned is not an acceptable value. This field is case sensitive. | No |
| Password | Password | The password to be used to connect to the RTC server. | Yes |
| Project Name | String | The RTC project name where the work item will be created. | Yes |
| RTC Server URL | String | The URL of the RTC server like https://myserver:9443/jazz | Yes |
| User Name | String | The user name to be used to connect to the RTC server. | Yes |
| Work Item Description | String | The description for the new work item. | No |
| Work Item Summary | String | The summary/title for the new work item. | Yes |
| Work Item Tags | String | List of tags to assign the new work item. Separate each tag by a new line or comma. | No |
| Work Item Type | String | The type of work item you want to create, for example Defect, Task, Story, Risk, etc. This field is case sensitive. | Yes |


