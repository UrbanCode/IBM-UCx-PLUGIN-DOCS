# Process Steps

## IIS Configuration Auto-Discovery

Discover an IIS configuration.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Resource | textBox | The path to the resource to configure in UrbanCode Deploy. | No |
| WWWRoot Path | textBox | The path to the IIS home directory. | No |

## IIS Configuration Topology Discovery

Discover an IIS configuration.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Resource | textBox | The path to the resource to configure in UrbanCode Deploy. | No |
| IIS Source Path | textBox | The path to the IIS home directory. | No |
| AppCmd Path | textBox | The full path to the AppCmd.exe executable file. | Yes |

## IIS Configuration Discovery

Configure detailed information in IIS.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Resource | textBox | The resource to configure. | No |
| IIS Source Path | textBox | The path to the IIS home directory. | Yes |
| Configuration Folder | textBox | The name of the output folder to use to store configuration data. If you do not specify a full path, the file is stored in the working directory. | Yes |
| AppCmd Path | textBox | The full path to the AppCmd.exe executable file. | Yes |
| Options String | textAreaBox | A list of options, separated by commas (',') to concatenate to the synchronize command. For example: encryptPassword=mypassword,includeAcls=false | Yes |
| Web Deploy Path | textBox | The full path to the msdeploy.exe executable file. For example: C:\Program Files\IIS\Microsoft Web Deploy V2\ | No |
| Resource Role Name | textBox | The type or name of the resource role. | No |

## IIS Configuration Apply

Apply a configuration or application to an IIS instance.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Web Deploy Path | textBox | The full path to the msdeploy.exe executable file. | Yes |
| Options String | textAreaBox | A list of options, separated by (',') to concatenate to the synchronize command. For example: encryptPassword=mypassword,includeAcls=false | Yes |
| Resource Path | textBox | The path to the resource to configure in UrbanCode Deploy. | Yes |

## IIS Configuration Live Compare

Compare an IIS configuration stored in a component version with a live IIS instance

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Web Deploy Path | textBox | The full path to the msdeploy.exe executable file. For example: C:\Program Files\IIS\Microsoft Web Deploy V2\ | No |
| Token Delimiter | textBox | The delimiter to denote tokens inside the file. The default delimiter is the at sign (@). This delimiter must match any delimiter that is used by the IIS Configuration Tokenize Configuration File step (by default, also the at sign). | No |
| Property Prefix | textBox | Specify a prefix to use to determine which properties are included in token replacement. Leave blank to include all properties. | No |
| Custom Encoding | textBox | Specify a character encoding to use. If blank, the replacement file is created with the local character encoding of the agent. Example encodings: UTF-8, US-ASCII, UCS-2, JIS X 0201, UTF-16, UTF-16LE, EUC. | No |
| Resource | textBox | The path to the resource to configure in UrbanCode Deploy. | No |
| Property List | textBox | Specify a property value here to use existing property names as tokens to replace in the                                    target files. For example: Specify ${p:environment/allProperties} to use the names of all                                    component environment properties as tokens and the property values as the replacements.                                    Similarly, specify ${p:component/allProperties},${p:environment/allProperties} to use the                                    names of all component and component environment properties as tokens. The token delimiter                                    and property prefix settings apply. If you specify @ for the start and end token delimiters                                    and a property that is named token1 exists, then the step searches for @token1@ to replace. | No |
| Options String | textAreaBox | A list of options, separated by (',') to concatenate to the synchronize command. For example: encryptPassword=mypassword,includeAcls=false | Yes |

## IIS Configuration Replace Tokens

Replace tokens in the configuration file.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Token Delimiter | textBox | The delimiter to denote tokens inside the file. The default delimiter is the at sign (@). This delimiter must match any delimiter that is used by the IIS Configuration Tokenize Configuration File step (by default, also the at sign). | No |
| Property Prefix | textBox | Specify a prefix to use to determine which properties are included in token replacement. Leave blank to include all properties. | No |
| Custom Encoding | textBox | Specify a character encoding to use. If blank, the replacement file is created with the local character encoding of the agent. Example encodings: UTF-8, US-ASCII, UCS-2, JIS X 0201, UTF-16, UTF-16LE, EUC. | No |
| Property List | textBox | Specify a property value here to use existing property names as tokens to replace in the                                    target files. For example: Specify ${p:environment/allProperties} to use the names of all                                    component environment properties as tokens and the property values as the replacements.                                    Similarly, specify ${p:component/allProperties},${p:environment/allProperties} to use the                                    names of all component and component environment properties as tokens. The token delimiter                                    and property prefix settings apply. If you specify @ for the start and end token delimiters                                    and a property that is named token1 exists, then the step searches for @token1@ to replace. | No |

## IIS Configuration Tokenize Configuration File

Replace property values with tokens in Web Deploy configuration files.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Properties To Tokenize | textAreaBox | Specify a list of properties and their replacement tokens, separated by newline characters. Use the following format: property=token. For example: aProperty=@token@\nanotherProperty=@anotherToken@ | Yes |
| Token Delimiter | textBox | The delimiter to denote tokens inside the file. The default delimiter is the at sign (@). This delimiter must match the delimiter that is used by the IIS Configuration Replace Tokens step (by default, also the at sign). | Yes |

