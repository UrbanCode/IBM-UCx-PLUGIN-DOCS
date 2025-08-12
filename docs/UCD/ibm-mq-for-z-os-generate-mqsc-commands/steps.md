
# IBM MQ for z/OS - Generate MQSC Commands - Process Steps

## Steps

### Generate MQSC Commands

Generate MQSC commands from the base, overrides and properties files.

| **Name** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| Base File Name Filter | String | Specify a base file name filter using a regular expression. For example: .*.mqdef_base for base files with a type of mqdef_base. | Yes |
| File Sub Folders | String | Specify a list of sub folders that contain the base, overrides and properties files. Specify each sub folder on a new line and do not include leading or trailing file separators. | Yes |
| Overrides File Type | String | Specify a file type for the overrides file. Overrides files are identified by concatenating the base file name with the overrides file type. | Yes |
| Properties File Type | String | Specify a file type for the properties file. Properties files are identified by concatenating the base file name with properties file type. | Yes |
| Target Environment Name | String | Specify The name of the target environment that resources are to be deployed to. By default, this field is set to variable: ``${p:environment.name}`` so that its value is automatically resolved to the name of the target environment at deployment time. There is no need to change this value. | Yes |
| User Data | String | Specify Any user data that is to be included with the generated MQSC. By default, this field is set to variables: ``${p:component.name}`` ``${p:version.name}`` so that the name and version of the component being deployed are included as comments in generated MQSC. This is to help identify which version of a component was deployed to generate the MQSC commands. . | No |

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| mqscResourceDefinitions | String | Set to the MQSC form of the resource definitions. This property is used as input to the next step in the UCD process. |

