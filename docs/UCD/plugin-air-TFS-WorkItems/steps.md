
# Microsoft TFS Work Items - Process Steps

* [Add Comment](#add_comment)
* [Change Work Item State](#change_work_item_state)
* [Create Work Item](#create_work_item)
* [Display Work Item Status](#display_work_item_status)
* [Update Work Item](#update_work_item)


## Add Comment

Use this step to add comments from the current changelog to matching Microsoft TFS defects.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Comment | String | Information to add to the TFS work item comment field in addition to the commit comment. You can include HTML. | No |
| TFS Password | Password | The password to connect to the server with. If no value is specified, the default password is the **``${p:resource/tfsPassword}``** value. | No |
| TFS Server URL | String | The URL of the TFS server.It must include the port number and end in `/tfs`, for example, `http://tfs.example.com:8080/tfs`. | Yes |
| TFS Username | String | The user ID to connect with the TFS server. | No |
| TFS Version | Enumeration | The version of the TFS server. Specify one of these versions: 2012 2010 2008 2005 | No |
| Work Item ID | String | The ID of the work item to change. | Yes |

## Change Work Item State

Use this step to change the state of a Microsoft TFS work item.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| New State | String | The state to change the work item to. The value must match a valid choice in TFS. For example, specify Active or Resolved. | Yes |
| Reason for new state | String | The reason for the state change. The reason must match a choice in TFS, for example, Cannot Reproduce, Duplicate, Fixed, or Obsolete. | Yes |
| TFS Password | Password | The password to connect to the server. If no value is specified, the default password is the **``${p:resource/tfsPassword}``** value. | No |
| TFS Server URL | String | The URL to the TFS server.It must include the port number and end in `/tfs`. For example: `http://tfs.example.com:8080/tfs` | Yes |
| TFS Username | String | The user ID to connect with the TFS server. | No |
| TFS Version | Enumeration | The version of the TFS server. Specify one of these versions: 2012 2010 2008 2005 | No |
| Work Item ID | String | The ID of the work item to change. | Yes |

## Create Work Item

Use this step to create a new Microsoft TFS work item.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Assigned To | String | The user to assign the new work item to. | No |
| Description | String | The description for the new work item. | No |
| Project | String | The name of the TFS project to associate the work item with. | Yes |
| TFS Password | Password | The password to connect to the server. If no value is specified, the default password is the **``${p:resource/tfsPassword}``** value. | No |
| TFS Server URL | String | The URL to the TFS server.It must include the port number and end in `/tfs`, for example, `http://tfs.example.com:8080/tfs` | Yes |
| TFS Username | String | The user ID to connect with the TFS server. | No |
| TFS Version | Enumeration | The version of the TFS server. Specify one of these versions: 2012 2010 2008 2005 | No |
| Title | String | The title of the new work item. | Yes |
| Type | String | The type of the new work item, for example, Bug, Issue, Task, User Story, or Test Case. | Yes |

## Display Work Item Status

Use this step to show the summary of a work item or list of work items.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| TFS Password | Password | The password to connect to the server. If no value is specified, the default password is the **``${p:resource/tfsPassword}``** value. | No |
| TFS Server URL | String | The URL to the TFS server.It must include the port number and end in `/tfs`, for example, `http://tfs.example.com:8080/tfs`. | Yes |
| TFS Username | String | The user ID to connect with the TFS server. | No |
| TFS Version | Enumeration | The version of the TFS server. Specify one of these versions: 2012 2010 2008 2005 | No |
| Work Item IDs | String | A comma-separated list of work item IDs. | Yes |

## Update Work Item

Use this step to update fields in a Microsoft TFS work item.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Add URL To This Field | String | The URL of the deployment process to be added to the field name that is specified here. | No |
| Field Reference Names and Values | String | On each line, specify the field reference name (not necessarily the name that is displayed in TFS), the new value, and whether to replace the old value or append the old value. Examples in include these strings:  `System.Title:My New Title APPEND:System.Title:Append This Text` | Yes |
| TFS Password | Password | The password to connect to the server. If no value is specified, the default password is the **``${p:resource/tfsPassword}``** value. | No |
| TFS Server URL | String | The URL to the TFS server.It must include the port number and end in `/tfs`, for example, `http://tfs.example.com:8080/tfs` | Yes |
| TFS Username | String | The user ID to connect with the TFS server. | No |
| TFS Version | Enumeration | The version of the TFS server. Specify one of these versions: 2012 2010 2008 2005 | No |
| Work Item ID | String | The ID of the work item to change. | Yes |


