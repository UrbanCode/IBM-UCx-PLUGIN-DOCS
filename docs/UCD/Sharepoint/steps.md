
# Microsoft SharePoint - Process Steps

* [Activate SharePoint Feature](#activate_sharepoint_feature)
* [Deploy SharePoint CMP File](#deploy_sharepoint_cmp_file)
* [Deploy SharePoint WSP File](#deploy_sharepoint_wsp_file)
* [Deploy SharePoint WSP File To Sandbox](#deploy_sharepoint_wsp_file_to_sandbox)
* [Export SharePoint Content](#export_sharepoint_content)


## Activate SharePoint Feature

Activates SharePoint Feature


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Feature ID | String | GUID that identifies the feature to activate (e.g. 21d186e1-7036-4092-a825-0eb6709e9280) | No |
| File Name | String | Path to feature must be a relative path to the 12\Template\Features directory. (e.g. MyFeature\Feature.xml) | No |
| Force | Boolean |  | No |
| Name of the Feature | String | Specify the name of the SharePoint feature. (e.g. MyFeature) | No |
| Path to Stsadmin Executable | String | Path to stsadmin executable if not identified in a system path (e.g. C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\14\BIN\STSADM.EXE) | No |
| SharePoint Url | String | URL of the Web application, site collection, or Web site to which the feature is being activated | No |

## Deploy SharePoint CMP File

Deploys SharePoint content from CMP packages


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| CMP File Name | String | Specify the name of the SharePoint CMP package to import the content from (e.g. newContent.cmp) | Yes |
| Path to Stsadmin Executable | String | Path to stsadmin executable if not identified in a system path (e.g. C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\14\BIN\STSADM.EXE) | No |
| SharePoint Url | String | specifify the SharePoint url if url deployment is checked | No |

## Deploy SharePoint WSP File

Installs, Upgrades, and Deploys SharePoint WSP packages


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Allow CAS Policies | Boolean | If the solution contains Code Access Security (CAS) policies, this parameter must be specified. | No |
| Allow GAC Deployment | Boolean | If the solution contains assemblies that need to be put in a global assembly cache (GAC), this parameter must be specified | No |
| Deployment Option | Enumeration:
* local
* immediate
* time
| select the sharepoint deployment/upgrade value | Yes |
| Path to Stsadmin Executable | String | Path to stsadmin executable if not identified in a system path (e.g. C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\14\BIN\STSADM.EXE) | No |
| SharePoint Url | String | specifify the SharePoint url if url deployment is checked | No |
| WSP Package Name | String | Specify the name of the SharePoint WSP package to deploy (e.g. package.wsp) | Yes |
| all content urls | Boolean | Equivalent to deploying the package to all nonadministrative virtual servers that are in the farm. | No |
| locale ID | String | Specifies a language for the Web Part package when a Web Part package is deployed. If this parameter is not specified the Web Part package should be deployed as being language agnostic. | No |
| time | String | if time is selected this field must be filled out (e.g. 2/16/2011 14:15:12) | No |

## Deploy SharePoint WSP File To Sandbox

Deploys SharePoint content from CMP packages


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Powershell Executable location | String | If the Powershell executable isnt in the system path please specify (e.g. C:\winnt\powershell.exe) | No |
| SharePoint Collection URL | String | Specify which SharePoint collection Url to Deploy the sandbox solution | Yes |
| WSP File Name | String | Specify the WSP File (e.g.mysolution.wsp) | No |

## Export SharePoint Content

Exports SharePoint content to a CMP package


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| CMP File Name | String | Specify the name of the package to export the SharePoint content to (e.g. newContent) | Yes |
| Path to Stsadmin Executable | String | Path to stsadmin executable if not identified in a system path (e.g. C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\14\BIN\STSADM.EXE) | No |
| SharePoint Url | String | specifify the SharePoint url if url deployment is checked | Yes |


