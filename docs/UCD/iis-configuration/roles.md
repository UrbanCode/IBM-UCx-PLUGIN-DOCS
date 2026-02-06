# Roles

The plug-in adds these roles automatically to resources. You cannot add these roles manually.

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
