
# IBM DevOps Deploy Process - Process Steps


* [Set Link on Process Request](#set_link_on_process_request)
* [Set Process Request Property](#set_process_request_property)


## Set Link on Process Request

Creates or removes a link on a process request that can direct users to supplementary information related to the process execution.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Link Title | String | The link text, which the user can click. | Yes |
| Process Request ID | String | The ID of the process request to update. You can use this field to set a property on a parent or unrelated process request. | Yes |
| URL | String | The URL to link to. If blank, the link is removed. | No |

## Set Process Request Property

Sets a property on a process request.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Process Request ID | String | The ID of the process request to update. You can use this field to set a property on a parent or unrelated process request. | Yes |
| Property Name | String | The name of the property to set. | Yes |
| Property Value | String | The value to set for the property. Leave blank to remove the property. | No |
| Secure Property Value | Password | A secure value to set for this property. If this value is set, the resulting property will be secure and the contents of the Property Value field will be ignored. | No |


