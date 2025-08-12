
# IBM InfoSphere DataStage - Process Steps

## Process steps in the DataStage plug-in

* [Compile Job or Routine](#compile_job_or_routine)
* [DSX Import Service](#dsx_import_service)
* [Delete Assets](#delete_assets)
* [Export DSX Project](#export_dsx_project)
* [Export ISX Project](#export_isx_project)
* [Import DSX Project](#import_dsx_project)
* [Import ISX Project](#import_isx_project)
* [List DSX File Contents](#list_dsx_file_contents)


## Compile Job or Routine

Compile a DataStage job or routine silently. Note: All environmental dependencies must be set before this step runs, otherwise dialog boxes are displayed on the agent server and the process stops. The step continues normally after the dialog boxes are confirmed.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Compilation Report | String | Specify the full name and destination for a compilation report. | No |
| Compile | Enumeration:
* JOB
* ROUTINE
| Select whether to compile a job or a routine. | Yes |
| DataStage Script Path | String | Specify the full path to the client directory where the DataStage scripts are located. | Yes |
| Domain | String | The host name of the services tier computer, including an optional port number. For example: localhost:8080 | No |
| Force Compile | Boolean | Select to force the compilation of parallel jobs. | No |
| Job or Routine Name | String | Specify the job or routines to compile. Specify a single name, an asterisk (\*) to compile all jobs or routines in the project, or category\_name\\* to compile all jobs or routinesin a category. If you specify a category, jobs and routines in subcategories are not included. | Yes |
| Only Uncompiled Jobs | Boolean | Select to compile only jobs that are uncompiled. | No |
| Password | Password | The password to use to attach to the project. | Yes |
| Project | String | The project that contains the jobs to compile. | Yes |
| Provision All Rule Sets | Boolean | Select to provision all rule sets that the job compilation references. | No |
| Rule Set | String | Specify rule set(s) to provision. Use \* to provision all rule sets. | No |
| Username | String | The user name to use to attach to the project. | Yes |

## DSX Import Service

Import objects from a .dsx file to a repository. This step works only on tiers where the ASBNode node agent is installed. You can specify multiple projects and files in the step.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| DataStage Script Path | String | Specify the full path to the node agent \bin directory where the DataStage scripts are located. | Yes |
| Domain | String | Specify the domain of the InfoSphere server.The default port number, 9080, is used if you do not specify a port number.For example: server-is.example.com:8080 | No |
| File Pathnames | String | Specify a list of .dsx files to import. Separate file names with a commas or newline characters.Complete file paths must be specified. Regex is not allowed. Alternately, specify a text file that contains a list of files to import. | Yes |
| Overwrite File | Enumeration:
* 0
* Overwrite
* OverwriteReadOnly
| Specify how to overwrite existing objects in the repository. If you do not change this option from the default, attempting to re-import existing objects causes an error.Yes, Include Read-Only Items additionally replaces read-only items. By default, existing read-only items are not overwritten. | No |
| Password | Password | The password to use to connect to the domain. | No |
| Project | String | Specify the project to import the .dsx files to. | Yes |
| Selected Imports | String | Specify options here to import selected objects from a .dsx file. You specify the object type and the object name. You can specify a full name or anabbreviated name for the object type.Separate each argument with a space.For more information see the IBM InfoSphere DataStage Programmers Guide. | No |
| Stop On Error | Boolean | Select to stop on errors. | No |
| Username | String | The user name to use to connect to the domain. | No |
| Verbose | Boolean | Select to generate a full report of the objects imported. By default, only import errors are reported. | No |

## Delete Assets

Delete InfoSphere DataStage or QualityStage assets.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Abort After # Errors | Enumeration:
* 0
* 1
* 2
* 3
* 4
* 5
* 10
* 20
* 50
| Stops the deletion after the specified number of errors. | No |
| Assets | String | Specify a list of InfoSphere DataStage and QualityStage assets to delete. Separate each asset with newlines or commas.A .txt file may also be specified that contains the same structure. Example: project/folder/asset\_name.suffix. View the `istool Delete` CLI documentation for a complete list of suffixes. The specified server will be appended to the beginning of each asset. | Yes |
| Domain | String | If you do not specify this parameter, the primary domain server is used for the connection. Example: is-server.ibm.com:9445 | No |
| Password | Password | The password for the domain username. | No |
| Server | String | Specifies that InfoSphere DataStage and QualityStage assets are to be deleted from the target server. Example: IS-SERVER. | Yes |
| Username | String | The name of a user on the domain. | No |
| istool Path | String | Full path to the InformationServer/istools/cli folder where the istool script is located. | Yes |

## Export DSX Project

Export InfoSphere DataStage project level components to a .dsx file.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| DataStage Script Path | String | Specify the full path to the client directory where the DataStage scripts are located. | Yes |
| Destination Folder | String | Specify the folder for storing the .dsx files. Leave blank to use the working directory. | No |
| Domain | String | The host name of the application server, including an optional port number. For example: is-server.example.com:9445 | No |
| Password | Password | The password to use to connect to the application server. | No |
| Project | String | Specify a list of projects to export the components from.Separate project names with commas or newline characters. Specify /ALL to export all projects. Alternately, specify a text file that contains a list of project names to export from. | Yes |
| Username | String | The user name to use to connect to the application server. | No |
| Verbose | Boolean | Select to switch the verbose option on. | No |

## Export ISX Project

Export InfoSphere DataStage or QualityStage assets to a specified .isx file.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Abort After # Errors | Enumeration:
* 0
* 1
* 2
* 3
* 4
* 5
* 10
* 20
* 50
| Stops the export after the specified number of errors. | No |
| Domain | String | If you do not specify this parameter, the primary domain server is used for the connection. Example: is-server.ibm.com:9445 | No |
| Password | Password | The password for the domain username. | No |
| Preview | Boolean | Select to view run the command without changing the repository. | No |
| Projects | String | Specify a list of InfoSphere DataStage and QualityStage projects are to be exported. Separate each project with newlines or commas.A .txt file may also be specified that contains the same structure. Example: Jobs The archive will be named after the project. | Yes |
| Response File | String | Specifies the name and path of a response file that contains assets that failed to import during a run of a previous istool import command. Not supported with the preview parameter. | No |
| Server | String | Specifies that InfoSphere DataStage and QualityStage assets are to be export from the target server. Example: IS-SERVER. | Yes |
| Update Archive | Boolean | Updates the archive file if it exists. If you do not specify -updatearchive, the content of the existing archive file is overwritten. | No |
| Username | String | The name of a user on the domain. | No |
| istool Path | String | Full path to the InformationServer/istools/cli folder where the istool script is located. | Yes |

## Import DSX Project

Import InfoSphere DataStage project level components from a .dsx or .xml file into a repository. You can specify one project and a list of file names to import. If the DSX Import Service is available, use it to import .dsx files.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| DataStage Script Path | String | Specify the full path to the client directory where the DataStage scripts are located. | Yes |
| Domain | String | The host name of the services tier computer, including an optional port number. For example: localhost:8080 | No |
| File Pathnames | String | The file(s) to import from. Separate files with commas or newline. The files must be .dsx files or .xml files, or a combination of both. The list of import files may given via a .txt file. | Yes |
| No Environment Variables | Boolean | Select to prevent the import process from adding environment variables to the project definitions.Use this option if you plan to add missing job environment variable definitions to the project manually.By default, the import process adds missing environment variable definitions to the project. | No |
| Password | Password | The password to use to connect to the service tier computer. | No |
| Project | String | Specify a project to import the components from. Specify /All to import all projects. Note: The /ASK parameter is not supported by this plug-in. | Yes |
| Username | String | The user name to use to connect to the service tier computer. | No |
| Verbose | Boolean | Select to generate a full report of the objects imported. By default, only import errors are reported. | No |

## Import ISX Project

Import InfoSphere DataStage or QualityStage assets from a previously exported .isx file.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Abort After # Errors | Enumeration:
* 0
* 1
* 2
* 3
* 4
* 5
* 10
* 20
* 50
| Stops the import after the specified number of errors. | No |
| Domain | String | If you do not specify this parameter, the primary domain server is used for the connection. Example: is-server.ibm.com:9445 | No |
| ISX Archive Files | String | List the .isx files to import assets from. Seperate each file with a newlines or commas. A .txt file may also be specified that contains the same structure. Example: Project.isx | Yes |
| Password | Password | The password for the domain username. | No |
| Preview or Replace | Enumeration:
* 0
* PREVIEW
* REPLACE
| Specify Preview to view run the command without changing the repository. Specify Replace to overwrite existing assets with imported assets of the same identity. | No |
| Project | String | Specifies that InfoSphere DataStage and QualityStage assets are to be imported to the target project.This will be the top level of the DataStage projects you are importing. Example: Jobs | Yes |
| Response File | String | Specifies the name and path of a response file that contains assets that failed to import during a run of a previous istool import command. Not supported with the preview parameter. | No |
| Server | String | Specifies that InfoSphere DataStage and QualityStage assets are to be imported to the target server. Example: IS-SERVER | Yes |
| Username | String | The name of a user on the domain. | No |
| istool Path | String | Full path to the InformationServer/istools/cli folder where the istool script is located. | Yes |

## List DSX File Contents

List the objects that a .dsx file contains. This step works only on tiers where the ASBNode node agent is installed.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| DSX File Path | String | Specify the .dsx file to list. You can specify a full path name, which can be local or remote. Alternately, specify a text file that contains a list of file names. | Yes |
| DataStage Script Path | String | Specify the full path to the node agent \bin directory where the DataStage scripts are located. | Yes |


