
# Microsoft IIS - Configure - Process Steps


- [Microsoft IIS - Configure - Steps](#microsoft-iis---configure---steps)
  - [Steps](#steps)
    - [Process steps in the IISConfigure plug-in](#process-steps-in-the-iisconfigure-plug-in)
    - [IIS Configuration Apply](#iis-configuration-apply)
    - [IIS Configuration Auto-Discovery](#iis-configuration-auto-discovery)
    - [IIS Configuration Discovery](#iis-configuration-discovery)
    - [IIS Configuration Live Compare](#iis-configuration-live-compare)
    - [IIS Configuration Replace Tokens](#iis-configuration-replace-tokens)
    - [IIS Configuration Tokenize Configuration File](#iis-configuration-tokenize-configuration-file)
    - [IIS Configuration Topology Discovery](#iis-configuration-topology-discovery)
    - [Roles in the IIS-Configuration plug-in](#roles-in-the-iis-configuration-plug-in)
    - [IISApp](#iisapp)
    - [IISAppPool](#iisapppool)
    - [IISSite](#iissite)
    - [IISWebServer](#iiswebserver)

## IIS Configuration Apply

Apply a configuration or application to an IIS instance.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Options String | String | A list of options, separated by (,) to concatenate to the synchronize command. For example: encryptPassword=mypassword,includeAcls=false | No |
| Resource Path | String | The path to the resource to configure in IBM DevOps Deploy. | Yes |
| Web Deploy Path | String | The full path to the msdeploy.exe executable file. | Yes |

## IIS Configuration Auto-Discovery

Discover an IIS configuration.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |

## IIS Configuration Discovery

Configure detailed information in IIS.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| AppCmd Path | String | The full path to the AppCmd.exe executable file. | Yes |
| Configuration Folder | String | The name of the output folder to use to store configuration data. If you do not specify a full path, the file is stored in the working directory. | Yes |
| IIS Source Path | String | The path to the IIS home directory. | Yes |
| Options String | String | A list of options, separated by commas (,) to concatenate to the synchronize command. For example: encryptPassword=mypassword,includeAcls=false | No |
| Resource | String | The resource to configure. | No |
| Web Deploy Path | String | The full path to the msdeploy.exe executable file. For example: C:\Program Files\IIS\Microsoft Web Deploy V2\ | No |

## IIS Configuration Live Compare

Compare an IIS configuration stored in a component version with a live IIS instance


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Custom Encoding | String | Specify a character encoding to use. If blank, the replacement file is created with the local character encoding of the agent. Example encodings: UTF-8, US-ASCII, UCS-2, JIS X 0201, UTF-16, UTF-16LE, EUC. | No |
| Options String | String | A list of options, separated by (,) to concatenate to the synchronize command. For example: encryptPassword=mypassword,includeAcls=false | No |
| Property List | String | Specify a property value here to use existing property names as tokens to replace in the target files. For example: Specify ``${p:environment/allProperties}`` to use the names of all component environment properties as tokens and the property values as the replacements. Similarly, specify ``${p:component/allProperties}``,``${p:environment/allProperties}`` to use the names of all component and component environment properties as tokens. The token delimiter and property prefix settings apply. If you specify @ for the start and end token delimiters and a property that is named token1 exists, then the step searches for @token1@ to replace. | No |
| Property Prefix | String | Specify a prefix to use to determine which properties are included in token replacement. Leave blank to include all properties. | No |
| Token Delimiter | String | The delimiter to denote tokens inside the file. The default delimiter is the at sign (@). This delimiter must match any delimiter that is used by the IIS Configuration Tokenize Configuration File step (by default, also the at sign). | No |
| Web Deploy Path | String | The full path to the msdeploy.exe executable file. For example: C:\Program Files\IIS\Microsoft Web Deploy V2\ | No |

## IIS Configuration Replace Tokens

Replace tokens in the configuration file.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Custom Encoding | String | Specify a character encoding to use. If blank, the replacement file is created with the local character encoding of the agent. Example encodings: UTF-8, US-ASCII, UCS-2, JIS X 0201, UTF-16, UTF-16LE, EUC. | No |
| Property List | String | Specify a property value here to use existing property names as tokens to replace in the target files. For example: Specify ``${p:environment/allProperties}`` to use the names of all component environment properties as tokens and the property values as the replacements. Similarly, specify ``${p:component/allProperties}``,``${p:environment/allProperties}`` to use the names of all component and component environment properties as tokens. The token delimiter and property prefix settings apply. If you specify @ for the start and end token delimiters and a property that is named token1 exists, then the step searches for @token1@ to replace. | No |
| Property Prefix | String | Specify a prefix to use to determine which properties are included in token replacement. Leave blank to include all properties. | No |
| Token Delimiter | String | The delimiter to denote tokens inside the file. The default delimiter is the at sign (@). This delimiter must match any delimiter that is used by the IIS Configuration Tokenize Configuration File step (by default, also the at sign). | No |

## IIS Configuration Tokenize Configuration File

Replace property values with tokens in Web Deploy configuration files.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Properties To Tokenize | String | Specify a list of properties and their replacement tokens, separated by newline characters. Use the following format: property=token. For example: aProperty=@token@\nanotherProperty=@anotherToken@ | Yes |
| Token Delimiter | String | The delimiter to denote tokens inside the file. The default delimiter is the at sign (@). This delimiter must match the delimiter that is used by the IIS Configuration Replace Tokens step (by default, also the at sign). | Yes |

## IIS Configuration Topology Discovery

Discover an IIS configuration.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| AppCmd Path | String | The full path to the AppCmd.exe executable file. | Yes |

## Roles in the IIS-Configuration plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.

* [IISApp](#iisapp_role)
* [IISAppPool](#iisapppool_role)
* [IISSite](#iissite_role)
* [IISWebServer](#iiswebserver_role)

## IISApp

Role for resources that represents an IIS application

| Name | Type | Description |
| --- | --- | --- |
| iis.app.name | String | The name for this resource role |
| applicationPool | String | Application pool that this application belongs to. Retrieved from AppCmd list command during topology discovery. |

## IISAppPool

Role for resources that represents an IIS application pool

| Name | Type | Description |
| --- | --- | --- |
| iis.app.pool.name | String | The name for this resource role |
| MgdVersion | String | Managed version. Retrieved from AppCmd list command during topology discovery. |
| MgdMode | String | Managed mode. Retrieved from AppCmd list command during topology discovery. |
| state | String | State of the application pool. Retrieved from AppCmd list command during topology discovery. |

## IISSite

Role for resources that represents an IIS Site

| Name | Type | Description |
| --- | --- | --- |
| iis.site.name | String | The name for this resource role |
| id | String | ID of the site. Retrieved from AppCmd list command during topology discovery. |
| bindings | String | Bindings of the site. Retrieved from AppCmd list command during topology discovery. |
| state | String | State of the site. Retrieved from AppCmd list command during topology discovery. |

## IISWebServer

Role for resources that represents an IIS root

| Name | Type | Description |
| --- | --- | --- |
| iis.webserver.name | String | The name for this resource role |
| iis.wwwroot.path | String | Path to wwwroot on the agents environment. This is used to locate the wwwroot path to perform configuration discover/apply actions |
| iis.appCmdFile | String | Path to the AppCmd.exe file. This is used to locate the AppCmd.exe file so that it can be utilized in topology discoveries |
| iis.webDeployPath | String | Path to the MSDeploy.exe file. This is used to locate MSDeploy.exe so that we can utilize it for configuration discover/apply actions |
