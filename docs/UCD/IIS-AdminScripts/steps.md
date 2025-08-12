
# Microsoft IIS AdminScripts - Process Steps

* [AdsUtil](#adsutil)
* [Set .Net Version](#set_.net_version)
* [Update VDirProperties](#update_vdirproperties)
* [Update WebSiteProperties](#update_websiteproperties)


## AdsUtil

Run an arbitrary adsutil command.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| AdsUtil.vbs Path | String | The path to the AdsUtil.vps executable including the file name. eg: C:\InetPub\AdminScripts\adsutil.vbs | No |
| Command | String | The command to be run using adsutil. | Yes |
| Cscript Path | String | The path to the cscript.exe executable including the file name if not on the path. eg: C:\Windows\system32\cscript.exe | No |
| Parameters | String | A newline separated list of parameters to be set if needed for the command. | No |
| Path | String | The path of the node for which you are setting the property, combined with the name of the property you are setting. e.g. w3svc/1/ServerComment | No |

## Set .Net Version

Set the .net version for a website


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Version | Enumeration:
* v2.0.50727
* v1.1.4322
| The version of .Net to set the website to. For this to work the .Net framework for this version must be installed and contain the aspnet\_regiis executable in the %windir%\microsoft.net\framework\``${version}`` directory. | Yes |
| Website | String | The website name. | No |

## Update VDirProperties

Set properties on a virtual directory


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Parameters | String | A newline separated list of parameters to be set in the form name=value(note = is not valid as part of the name). | No |
| VDir Offset | String | The offset from the website path to the virtual directory. For the default vdir it is /root. For a vdir named test it would be /root/test. | Yes |
| WebSite | String | The website name. | No |

## Update WebSiteProperties

Set properties on a website


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Parameters | String | A newline separated list of parameters to be set in the form name=value(note = is not valid as part of the name). | No |
| WebSite | String | The website name. | No |


