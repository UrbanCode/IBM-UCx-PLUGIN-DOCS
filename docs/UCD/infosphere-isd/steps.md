
# InfoSphere-ISD - Process Steps

* [Design Time Export](#design_time_export)
* [Design Time Import](#design_time_import)
* [Runtime Export](#runtime_export)
* [Runtime Import](#runtime_import)


## Design Time Export


Export all or selected applications and services from projects in your InfoSphere Information Services Director server into an XML output file.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma or newline delimited list of additionalarguments to pass to the ISDImportExport command. Surround any arguments that involve spaces with quotation marks. (i.e. -log C:Program Files\logs\test.log) | No |
| Applications | String | A comma or newline delimited list of application namesto export from IIS. All services of the given applications will be exported if multiple applications are given. Specify only one application to export specific services. | No |
| ISDImportExport Path | String | The path to your ISDImportExport executable file. Either specify an absolute path(i.e. C:\IBM\InformationServer\ASBServer\bin\ISDImportExport.bat) or a path that is relative to your working directory (i.e. bin\ISDImportExport.bat). | Yes |
| Omit Password | Boolean | Check this box to exclude all passwords from the exported information. | No |
| Output XML File/ Directory | String | The file or directory path for the exported XML file.Either specify an absolute path(i.e. C:\Program Files\agent\var\work\DataStage\output.XML) or a path that is relative to your working directory (i.e. output.XML). When exporting multiple projects you must specify a directory. Each XML file will then be created with the name of the project. | Yes |
| Password | String | Your IBM InfoSphere Information Server user ID. | No |
| Projects | String | A comma or newline delimited list of project names to export from IIS. All applications and services of the givenprojects will be exported if multiple projects are given. Specify only one project to export specific applications or services. | No |
| Services | String | A comma or newline delimited list of service names to export from IIS. If multiple projects or applications are given this field will be ignored. | No |
| Username | String | Your IBM InfoSphere Information Server user ID. | No |

## Design Time Import


Import projects, applications, and services into your InfoSphere Information Services Director server from an XML input file.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma or newline delimited list of additionalarguments to pass to the ISDImportExport command. (i.e. -verbose) | No |
| Applications | String | A comma or newline delimited list of application namesto import into IIS. All services of the given applications will be exported if multiple applications are given. All applications will be imported if this field is left blank. | No |
| ISDImportExport Path | String | The path to your ISDImportExport executable file. Either specify an absolute path(i.e. C:\IBM\InformationServer\ASBServer\bin\ISDImportExport.bat) or a path that is relative to your working directory (i.e. bin\ISDImportExport.bat). | Yes |
| Input XML File/ Directory | String | The file or directory path of the input XML file.Either specify an absolute path(i.e. C:\Program Files\agent\var\work\DataStage\input.XML) or a path that is relative to your working directory (i.e. input.XML). To import multiple projects you must specify an input directory instead of a file, and leave the project field empty. | Yes |
| Password | String | Your IBM InfoSphere Information Server user ID. | No |
| Project | String | The name of the project in which to import theresources. When this is not specified the project name from the input XML file will be used. To import multiple projects you must leave this field blank and specify an input directory instead of a file. | No |
| Replace Objects | Boolean | If a project, application, or service being imported has the same name as one already on the system it will be replaced. | No |
| Services | String | A comma or newline delimited list of service names to export from IIS. If multiple projects or applications are being imported this field will be ignored. | No |
| Username | String | Your IBM InfoSphere Information Server user ID. | No |

## Runtime Export


Export selected runtime applications from your InfoSphere Information Services Director server into a DAT output file.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma or newline delimited list of additionalarguments to pass to the ISDImportExport command. (i.e. -verbose) | No |
| Applications | String | A comma or newline delimited list of runtime application names to export from IIS. | Yes |
| ISDImportExport Path | String | The path to your ISDImportExport executable file. Either specify an absolute path(i.e. C:\IBM\InformationServer\ASBServer\bin\ISDImportExport.bat) or a path that is relative to your working directory (i.e. bin\ISDImportExport.bat). | Yes |
| Omit Password | Boolean | Check this box to exclude all passwords from the exported information. | No |
| Output DAT File/ Directory | String | The file or directory path for the exported DAT file.Either specify an absolute path(i.e. C:\Program Files\agent\var\work\DataStage\output.DAT) or a path that is relative to your working directory (i.e. output.DAT). When exporting multiple runtime applications you must specify a directory. Each DAT file will then be created with the name of the application. | Yes |
| Password | String | Your IBM InfoSphere Information Server user ID. | No |
| Username | String | Your IBM InfoSphere Information Server user ID. | No |

## Runtime Import


Import runtime applications into your InfoSphere Information Services Director server from a DAT input file.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | A comma or newline delimited list of additionalarguments to pass to the ISDImportExport command. (i.e. -verbose) | No |
| ISDImportExport Path | String | The path to your ISDImportExport executable file. Either specify an absolute path(i.e. C:\IBM\InformationServer\ASBServer\bin\ISDImportExport.bat) or a path that is relative to your working directory (i.e. bin\ISDImportExport.bat). | Yes |
| Input XML File/ Directory | String | The file or directory path of the input XML file.Either specify an absolute path(i.e. C:\Program Files\agent\var\work\DataStage\input.XML) or a path that is relative to your working directory (i.e. input.XML). To import multiple projects you must specify an input directory instead of a file, and leave the project field empty. | Yes |
| Password | String | Your IBM InfoSphere Information Server user ID. | No |
| Replace Objects | Boolean | If a runtime application has the same name as an existing one on the system it will be replaced. | No |
| Username | String | Your IBM InfoSphere Information Server user ID. | No |


