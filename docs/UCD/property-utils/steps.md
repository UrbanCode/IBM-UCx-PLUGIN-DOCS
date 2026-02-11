# Process Steps

## Export Properties From UCD

Export Properties From UCD

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Application | textBox | The application to export properties from. All environment and resource properties under the application will be exported. | Yes |
| Export Location | textBox | The path to export the property files to. | Yes |
| UCD Host | textBox | Hostname of the UCD server to connect to. | No |
| UCD Port | textBox | Port number of the UCD server to connect to. | No |
| UCD Username | textBox | User name for connection to UCD server. | No |
| UCD Password | secureBox | Password for connection to UCD server. | No |

## Build Property File

Build Property File

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Source Directory | textBox | The path to start importing property files (.properties) from. All subdirectories will be searched. | Yes |
| Property File(s) to include | textAreaBox | A newline separated list of property files to include in the build. | Yes |
| Export File | textBox | The path to export the resource properties file to. | Yes |
| Property File Extension | textBox | The file extension for the property files. | No |

## Read Properties From Property File

Parse a Property file to retrieve properties defined by key names

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Directory Offset | textBox | A sub-directory of the current working directory where the step should execute. | No |
| Property File | textBox | The full path to the property file to read properties from. | Yes |
| Property Keys | textAreaBox | A newline separated list of elements whose value will be retrieved for the property. For example, the value matching the key in a key-value pair | Yes |
| Fail if no match found | checkBox | Select here if you want the step to fail if any of the keys do not return a match. | No |

## Read All Properties From Property File

Parse a Property file to retrieve all properties defined by key names

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Directory Offset | textBox | A sub-directory of the current working directory where the step should execute. | No |
| Property File | textBox | The full path to the property file to read properties from. | Yes |

