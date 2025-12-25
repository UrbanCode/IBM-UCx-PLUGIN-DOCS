# Resource Utilities - Process Steps

* [List Resources](#list_resources)
* [Find Resource Properties Without Values](#find_resource_properties_without_values)
* [Find Specific Properties](#find_specific_properties)
## List Resources

List UrbanCode Deploy resources under a specific root resource.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Resource tree root | textBox | The resource tree node from which the list is to be generated. | Yes |
| Name filter | textBox | Restrict the resources reported to just those that contain the filter word. | No |
| Path type | selectBox | The method for reporting the path of a resource. | Yes |
| Include properties | checkBox | Include resource and resource role properties. | No |
| Include security | checkBox | Include security and impersonation properties. | No |
| Include further details | checkBox | Include other properties such as description, status, type, etc. | No |
| Output filename | textBox | The name of a file to hold the generated output. | No |
| Output to window | checkBox | Include results of the command in the step results command window. | No |

## Find Resource Properties Without Values

Find resource and / or resource role properties that do not have a value (within a given resource tree scope).

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Resource tree root | textBox | The resource tree node from which the search will be performed. | Yes |
| Name filter | textBox | Restrict the resources examined to just those that contain the filter word. | No |
| Path type | selectBox | The method for reporting the path of a resource. | Yes |
| Resource properties | checkBox | Look for resource properties with missing values. | No |
| Resource role roperties | checkBox | Look for resource role properties with missing values. | No |
| Output filename | textBox | The name of a file to hold the generated output. | No |
| Output to window | checkBox | Include other results of the command in the step results command window. | No |

## Find Specific Properties

Find instances of specific properties on resources and report the values.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Resource tree root | textBox | The resource tree node from which the search will be performed. | Yes |
| Name filter | textBox | Restrict the resources examined to just those that contain the filter word. | No |
| Path type | selectBox | The method for reporting the path of a resource. | Yes |
| Search term | textBox | The property name (or part of property name) to find. | Yes |
| Output filename | textBox | The name of a file to hold the generated output. | No |
| Output to window | checkBox | Include other results of the command in the step results command window. | No |

