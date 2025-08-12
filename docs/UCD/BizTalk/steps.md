
# Microsoft BizTalk - Process steps


* [Add Biztalk Application](#add_biztalk_application)
* [Add Biztalk Resource](#add_biztalk_resource)
* [Export Biztalk Application](#export_biztalk_application)
* [Export Biztalk Application Bindings](#export_biztalk_application_bindings)
* [Import Bindings](#import_bindings)
* [Import or Upgrade Biztalk Application](#import_or_upgrade_biztalk_application)
* [Remove Biztalk Application](#remove_biztalk_application)
* [Restart BizTalk host](#restart_biztalk_host)
* [Start Biztalk Application](#start_biztalk_application)
* [Stop Biztalk Application](#stop_biztalk_application)
* [Uninstall Biztalk Application](#uninstall_biztalk_application)


## Add Biztalk Application

Create a BizTalk application in the BizTalk Management database.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| BizTalk Application Name | String | Specify the name of the BizTalk application to add. If the application name includes spaces, enclose the name in double quotation marks. | Yes |
| BizTalk BTSTask Executable location | String | If the BTSTask executable program is not in the system path, specify the full path. For example: C:\Program Files (x86)\Microsoft BizTalk Server 2010\BTSTask.exe | No |
| BizTalk Database | String | Specify the name of the BizTalk Management database. If left blank, the BizTalk Management database that is running on the agent computer is used. | No |
| BizTalk SQL Server | String | Specify the name of the SQL Server instance that is hosting the BizTalk Management database. If left blank, the name of the SQL Server instance that is running on the agent computer is used. | No |
| Default | Boolean | When selected, the new application is set as the default application for the BizTalk group. | No |
| Description | String | Description of the application. Must be enclosed in double quotation marks. | No |

## Add Biztalk Resource

Add an artifact to a BizTalk application


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| BizTalk Application Name | String | Name of the BizTalk application to add the artifact to. If the name includes spaces, enclose the name in double quotation marks. If left blank, the default BizTalk application is used. | No |
| BizTalk BTSTask Executable location | String | If the BTSTask executable program is not in the system path, specify the full path. For example: C:\Program Files (x86)\Microsoft BizTalk Server 2010\BTSTask.exe | No |
| BizTalk Database | String | Specify the name of the BizTalk Management database. If left blank, the BizTalk Management database running on the agent computer is used. Optional for all resource types. | No |
| BizTalk SQL Server | String | Specify the name of the SQL Server instance that hosts the BizTalk Management database. If left blank, the name of the SQL Server instance that is running on the agent computer is used. Optional for all resource types. | No |
| Destination | String | Full path of the location where the resource file is copied to when the application is installed from the .MSI file. If left blank, the resource file is not copied to the local file system during installation. If the path includes spaces, enclose the path in double quotation marks. Optional for all resources, and not used for BizTalk Bindings, Certificates, or Policies. | No |
| Options | String | Comma-separated list of options. See the BizTalk documentation for available options. Optional for BizTalk Assemblies, .NET Assemblies, and COM Components. | No |
| Overwrite | Boolean | Select to update an existing resource. If cleared, and a resource that has the same full name as the resource being added already exists in the application, the step fails. Optional for all resource types. | No |
| Policy Name | String | Name of the policy. Required for Policies, and not used for any other resource type. | No |
| Policy Version | String | Version number of the policy in the #.# format. For example: 7.1. Required for Policies, and not used for any other resource type. | No |
| Script Resource Properties | String | Resource properties to pass to the script as arguments when the script is called. Properties must be enclosed in quotation marks. Optional for Pre- and PostProcessing Scripts. | No |
| Source | String | Full path of the resource file, including the file name. If the path includes spaces, enclose the path in double quotation marks. Required for all resource types except Certificates and Policies. | No |
| Target Deployment Environment | String | A string that specifies the target deployment environment. If the value contains spaces, enclose it in quotation marks. If left blank, a value of Default is automatically applied. The value is case-sensitive. Optional for BizTalk Bindings. | No |
| Thumbprint | String | Thumbprint property of the certificate. A thumbprint is a digest of data. The property must be enclosed in double quotation marks. Required for Certificates, and not used for any other resource type. | No |
| Type | Enumeration | Select the type of resource to add. Note: Depending on the resource type, other input properties can be required or optional. | Yes |

## Export Biztalk Application

Exports a Biztalk Application


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| BizTalk Application Name | String | Specify the BizTalk Application to export | No |
| BizTalk BTSTask Executable location | String | If the Btsadm executable is not in the system path please specify (e.g. C:\Program Files (x86)\Microsoft BizTalk Server 2010\BTSTask.exe | No |
| BizTalk Database | String | Specify the Name of the BizTalk Management database. If not specified, the BizTalk Management database running on the server the uDeploy agent is running on is used is used | No |
| BizTalk Global Parties | String | Specify if GlobalParties should be used when exporting the BizTalk application | No |
| BizTalk Package | String | Specify the upgrade file name, accepted file type are msi for major/minor application changes or xml for binding changes to an existing application | Yes |
| BizTalk Resource Spec | String | Specify the full path to the Resource Spec file(e.g. C:\Files\MyResourceSpec.xml) | No |
| BizTalk SQL Server | String | Specify the Name of the SQL Server instance hosting the BizTalk Management database, If not provided, the name of the SQL Server instance running on the server the uDeploy agent is running on is used is used | No |

## Export Biztalk Application Bindings

Exports Biztalk Application Bindings


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| BizTalk BTSTask Executable location | String | If the Btsadm executable is not in the system path please specify (e.g. C:\Program Files (x86)\Microsoft BizTalk Server 2010\BTSTask.exe | No |
| BizTalk Database | String | Specify the Name of the BizTalk Management database. If not specified, the BizTalk Management database running on the server the uDeploy agent is running on is used is used | No |
| BizTalk Destination | String | Specify the file name, for the binding information. | Yes |
| BizTalk Global Parties | String | Specify if GlobalParties should be used when exporting the BizTalk application | No |
| BizTalk SQL Server | String | Specify the Name of the SQL Server instance hosting the BizTalk Management database, If not provided, the name of the SQL Server instance running on the server the uDeploy agent is running on is used is used | No |
| Export Bindings at Group Level | String | Specify the BizTalk Level where to perform the bindings export | No |
| Export BizTalk Assembly Name | String | Specify the BizTalk Assembly Name to export the bindings | No |
| Export BizTalk Bindings from Application | String | Specify the BizTalk Application to export the bindings | No |

## Import Bindings

Import bindings to a BizTalk application or group


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Biztalk Application Name | String | Specify the Biztalk Application to Import or Upgrade | Yes |
| Biztalk BTSTask Executable location | String | If the BTSTask executable program is not in the system path, specify the full path. For example: C:\Program Files (x86)\Microsoft BizTalk Server 2010\BTSTask.exe | No |
| Biztalk Database | String | Specify the name of the BizTalk Management database. If left blank, the BizTalk Management database that is running on the agent computer is used. | No |
| Biztalk SQL Server | String | Specify the name of the SQL Server instance that is hosting the BizTalk Management database. If left blank, the name of the SQL Server instance that is running on the agent computer is used. | No |
| Group Level | Boolean | Select to import the binding file into the current group. If you select this property, do not specify BizTalk Application Name. | No |
| Source | Boolean | Full path of the binding file to import, including the file name. Paths that include spaces must be enclosed in quotation marks. | Yes |

## Import or Upgrade Biztalk Application

Installs or updates a Biztalk Application


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Biztalk Application Name | String | Specify the Biztalk Application to Import or Upgrade | Yes |
| Biztalk BTSTask Executable location | String | If the Btsadm executable is not in the system path please specify (e.g. C:\Program Files (x86)\Microsoft BizTalk Server 2010\BTSTask.exe | No |
| Biztalk Database | String |  | No |
| Biztalk Database Server | String | Server containing the BizTalk Management database (Default: .) | No |
| Biztalk File | String | Specify the upgrade file name, accepted file type are msi for major/minor application changes or xml for binding changes to an existing application | Yes |
| Powershell Executable location | String | If the Powershell executable is not in the system path please specify (e.g. C:\winnt\powershell.exe | No |

## Remove Biztalk Application

Removes a Biztalk Application


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Biztalk Application Name | String | Specify the Biztalk Application to remove | Yes |
| Biztalk BTSTask Executable location | String | If the Btsadm executable is not in the system path please specify (e.g. C:\Program Files (x86)\Microsoft BizTalk Server 2010\BTSTask.exe | No |
| Biztalk Database Name | String | Name of the BizTalk Management database. If not specified, the BizTalk Management database running in the local instance of SQL Server is used. | No |
| Biztalk Database Server | String | Server containing the BizTalk Management database (Default: .) | No |
| Powershell Executable location | String | If the Powershell executable is not in the system path please specify (e.g. C:\winnt\powershell.exe | No |

## Restart BizTalk host

Restarts a BizTalk host instance


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Host Instance | String | BizTalk Host Instance name (Default: root\MicrosoftBizTalkServer) | No |
| Powershell Executable location | String | If the Powershell executable is not in the system path please specify (e.g. C:\winnt\powershell.exe | No |

## Start Biztalk Application

Starts Biztalk Application


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Biztalk Application Name | String | Specify the Biztalk Application to start | Yes |
| Biztalk Database Name | String | Name of the BizTalk Management database. If not specified, the BizTalk Management database running in the local instance of SQL Server is used. | No |
| Biztalk Database Server | String | Server containing the BizTalk Management database (Default: .) | No |
| Powershell Executable location | String | If the Powershell executable is not in the system path please specify (e.g. C:\winnt\powershell.exe | No |

## Stop Biztalk Application

Performs a Full Stop of Biztalk Application


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Biztalk Application Name | String | Specify the Biztalk Application to stop | Yes |
| Biztalk Database Name | String | Name of the BizTalk Management database. If not specified, the BizTalk Management database running in the local instance of SQL Server is used. | No |
| Biztalk Database Server | String | Server containing the BizTalk Management database (Default: .) | No |
| Powershell Executable location | String | If the Powershell executable is not in the system path please specify (e.g. C:\winnt\powershell.exe | No |

## Uninstall Biztalk Application

Uninstalls a local Biztalk Application


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Biztalk Application Name | String | Specify the Biztalk Application to uninstall | Yes |
| Biztalk BTSTask Executable location | String | If the Btsadm executable is not in the system path please specify (e.g. C:\Program Files (x86)\Microsoft BizTalk Server 2010\BTSTask.exe | No |
| Powershell Executable location | String | If the Powershell executable is not in the system path please specify (e.g. C:\winnt\powershell.exe | No |


