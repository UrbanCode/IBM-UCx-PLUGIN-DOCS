
# IBM Business Process Manager (WebSphere BPM) for IBM DevOps Deploy - Process Steps

* [Create Generic Install Package](#create_generic_install_package)
* [Deactivate Snapshot](#deactivate_snapshot)
* [Deploy Offline Package](#deploy_offline_package)
* [Deploy Process Application Snapshot](#deploy_process_application_snapshot)
* [Export Process Application](#export_process_application)
* [Extract Migration Policy](#extract_migration_policy)
* [Generate Offline Package](#generate_offline_package)
* [Import Process Application](#import_process_application)
* [Install Process Application Snapshot](#install_process_application_snapshot)
* [Migrate Instances](#migrate_instances)
* [Set Default Snapshot](#set_default_snapshot)
* [Stop Snapshot](#stop_snapshot)
* [Sync Values, Variables, and Team Bindings](#sync_values,_variables,_and_team_bindings)
* [Update Installation Information](#update_installation_information)


## Create Generic Install Package

Creates a generic installation package for a process application or toolkit snapshot that is not targeted to a specific Process Server. (BPMExportInstallPackage)



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Host Name | String | Host name of the Process Center server to connect to. For example: localhost | No |
| Package Zip | String | The name of the .zip file that contains the exported process application package. If blank, the process application acronym is used. This file is saved to the working directory and overwrites any existing files with the same name. | No |
| Process application | String | The process application name or acronym. | Yes |
| Process application snapshot | String | The process application snapshot name or acronym. | Yes |
| Process application track | String | The process application track name or acronym. | Yes |
| Use soap.client.props file | Boolean | Select to use the soap.client.props file for the WebSphere Application Server administrator credentials. | No |

## Deactivate Snapshot

Deactivates an activate snapshot. (BPMDeactivate)


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Force default snapshot | Boolean | Select to deactivate the default snapshot of the process application or toolkit. If cleared, default snapshots are not deactivated. | No |
| Host Name | String | Host name of the Process Center server to connect to. For example: localhost | No |
| Log File | String | The name of the log file for message output from running the command. Default log messages are written to the SystemOut.log file. The current date and time are appended to prevent overwriting existing log files. The log file is saved to the working directory. | No |
| Process application | String | The process application name or acronym. | Yes |
| Process application snapshot | String | The process application snapshot name or acronym. | Yes |
| Process application track | String | The process application track name or acronym. | No |
| Suspend all BPD instances | Boolean | Immediately suspend all instances associated with the given context. The instances remain suspended until you resume them. Not supported when Tip is used for the snapshot acronym. | No |
| Use soap.client.props file | Boolean | Select to use the soap.client.props file for the WebSphere Application Server administrator credentials. | No |

## Deploy Offline Package

Deploys the process application snapshot package to an offline Process Server. (BPMInstallOfflinePackage and BPMSetDefaultSnapshot)



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Host Name | String | Host name of the Process Server to connect to. For example: localhost | No |
| Make this snapshot the default | Boolean | Select to set this snapshot as the default snapshot. | No |
| Process application | String | The process application name or acronym if this snapshot is set as the default. If blank, the component name is used. | No |
| Process application package | String | The name of the .zip file that contains the process application snapshot package. By default, the offline.server.name resource property is used. Including the .zip file extension in the name is optional. | No |
| Process application snapshot | String | The process application snapshot name or acronym if this snapshot is set as the default. | No |
| Use soap.client.props file | Boolean | Select to use the soap.client.props file for the WebSphere Application Server administrator credentials. | No |

## Deploy Process Application Snapshot

Deploys the process application snapshot to an online Process Server. (BPMInstall)


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Host Name | String | Host name of the Process Center server to connect to. For example: localhost | No |
| Process application | String | The process application name or acronym. If blank, the component name is used. | No |
| Process application snapshot | String | The process application snapshot name or acronym. | No |
| Process application track | String | The process application track name or acronym. | No |
| Process server name | String | A list, separated by commas, of names of online Process Servers on which to deploy the snapshot. | Yes |
| Skip all governance processes | Boolean | If selected, the process application snapshot deployment skips all governance processes, including the approval processes defined by the administrator. Not supported for WebSphere Business Process Manager earlier than version 8.5. | No |
| Use soap.client.props file | Boolean | Select to use the soap.client.props file for the WebSphere Application Server administrator credentials. | No |

## Export Process Application

Exports a process application from a Process Center server. (BPMExport)


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Host Name | String | Host name of the Process Center server to connect to. For example: localhost | No |
| Package | String | The name of the .twx file that contains the exported process application. If blank, the process application acronym is used. Including the .twx file extension in the name is optional. | No |
| Process application | String | The process application name or acronym. If blank, the component name is used. | No |
| Process application snapshot | String | The process application snapshot name or acronym. | No |
| Process application track | String | The process application track name or acronym. | No |
| Use soap.client.props file | Boolean | Select to use the soap.client.props file for the WebSphere Application Server administrator credentials. | No |

## Extract Migration Policy

Extracts the migration policy from Process Center. Use this step to extract the information used to migrate instances from other snapshots to the newly installed snapshot. (BPMExtractMigrationPolicy)



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Host Name | String | Host name of the Process Center server to connect to. For example: localhost | No |
| Migration Policy XML | String | The name of the file to create. The file will contain the information used to migrate instances from the source snapshot to the target snapshot. The file name must be unique and must have the .xml extension. This file overwrites any file with the same name in the working directory. If blank, the component name is used. | No |
| Process application | String | The process application name or acronym. | Yes |
| Source process application snapshot | String | The source process application snapshot name or acronym. | Yes |
| Target process application snapshot | String | The source process application snapshot name or acronym. | Yes |
| Use soap.client.props file | Boolean | Select to use the soap.client.props file for the WebSphere Application Server administrator credentials. | No |

## Generate Offline Package

Creates a .zip file on Process Center that contains a process application snapshot package. (BPMCreateOfflinePackage and BPMExtractOfflinePackage)



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Host Name | String | Host name of the Process Center server to connect to. For example: localhost | No |
| Process application | String | The process application name or acronym. If blank, the component name is used. | No |
| Process application snapshot | String | The process application snapshot name or acronym. | No |
| Process application track | String | The process application track name or acronym. | No |
| Process server name | String | A list, separated by commas, of offline Process Servers to create a process application snapshot package for. | Yes |
| Skip all governance processes | Boolean | If selected, the process application snapshot deployment skips all governance processes, including the approval processes defined by the administrator. Not supported for WebSphere Business Process Manager earlier than version 8.5. | No |
| Use soap.client.props file | Boolean | Select to use the soap.client.props file for the WebSphere Application Server administrator credentials. | No |

## Import Process Application

Imports a process application into a Process Center server. (BPMImport)


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Host Name | String | Host name of the Process Center server to connect to. For example: localhost | No |
| Process application package | String | The name of the .twx file that contains the process application package. If blank, the component name is used. Including the .twx file extension in the name is optional. | No |
| Use soap.client.props file | Boolean | Select to use the soap.client.props file for the WebSphere Application Server administrator credentials. | No |

## Install Process Application Snapshot

Installs a process application snapshot from Process Center to a Process Server. (BPMInstallPackage)


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Host Name | String | Host name of the Process Server to connect to. For example: localhost | No |
| Install Package | String | The path of the offline installation package that you created and extracted on the Process Center server and have already placed on the offline Process Servers file system. Specify an absolute path or a file in the working directory. | Yes |
| Show Snapshot Info | Boolean | If selected, the command returns the acronyms of the process application, track, and snapshot that were installed. | No |
| Use soap.client.props file | Boolean | Select to use the soap.client.props file for the WebSphere Application Server administrator credentials. | No |

## Migrate Instances

Migrates all instances on all nodes in the network deployment environment. Equivalent to clicking Migrate Inflight Data in the Process Admin Console. (BPMMigrateInstances)



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Host Name | String | Host name of the Process Center server to connect to. For example: localhost | No |
| Orphan Token Policy File | String | Optional: The name of a policy file to use during instance migration. The policy file is distributed to all the nodes in the same network deployment environment before instance migration. The policy file must be in XML format. | No |
| Process application | String | The process application name or acronym. | Yes |
| Source process application snapshot | String | The source process application snapshot name or acronym. | Yes |
| Target process application snapshot | String | The target process application track name or acronym. | Yes |
| Use Network Available Policy File | Enumeration:
* 0
* false
* true
| Optional: Select TRUE if the policy file is larger than 100 KB. Save the policy file in a path that is accessible to all nodes. | No |
| Use soap.client.props file | Boolean | Select to use the soap.client.props file for the WebSphere Application Server administrator credentials. | No |

## Set Default Snapshot

Designates a default snapshot on the Process Center or the Process Server. (BPMSetDefaultSnapshot)


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Host Name | String | Host name of the Process Server to connect to. For example: localhost | No |
| Process application | String | The process application name or acronym. | Yes |
| Process application snapshot | String | The process application snapshot name or acronym. | Yes |
| Use soap.client.props file | Boolean | Select to use the soap.client.props file for the WebSphere Application Server administrator credentials. | No |

## Stop Snapshot

Stops a deactivated snapshot on a Process Server. (BPMStop)


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Host Name | String | Host name of the Process Server to connect to. For example: localhost | No |
| Process application | String | The process application name or acronym. | Yes |
| Process application snapshot | String | The process application snapshot name or acronym. | Yes |
| Use soap.client.props file | Boolean | Select to use the soap.client.props file for the WebSphere Application Server administrator credentials. | No |

## Sync Values, Variables, and Team Bindings

Synchronize team bindings, environment variables, and exposed process values between a source and target snapshot. (BPMSyncEnvironmentVariables, BPMSyncEPVValues, and BPMSyncTeamBindings) Do not run this step using the deployment manager profile.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Host Name | String | Host name of the Process Center server to connect to. For example: localhost | No |
| Process application | String | The process application name or acronym. | Yes |
| Source process application snapshot | String | The source process application snapshot name or acronym. | Yes |
| Sync EPV Values | Boolean | Select to copy exposed process values from the source snapshot to the target snapshot. | No |
| Sync Environment Variables | Boolean | Select to copy environment variables from the source snapshot to the target snapshot. | No |
| Sync Team Bindings | Boolean | Select to copy teams from the source snapshot to the target snapshot. | No |
| Target process application snapshot | String | The target process application track name or acronym. | Yes |
| Use soap.client.props file | Boolean | Select to use the soap.client.props file for the WebSphere Application Server administrator credentials. | No |

## Update Installation Information

Associates an installation package with a specific server, to enable installing the snapshot installation on the server. (BPMUpdateInstallationInformation)



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Host Name | String | Host name of the Process Center server to connect to. For example: localhost | No |
| Process application | String | The process application name or acronym. | Yes |
| Process application snapshot | String | The process application snapshot name or acronym. | Yes |
| Process application track | String | The process application track name or acronym. Required if updating a Process Server and optional for a Process Center server. The Default track will be selected for the Process Center server. | No |
| Server Name | String | The Process Server or Process Center server to associate with the process application or toolkit snapshot and track. | Yes |
| Use soap.client.props file | Boolean | Select to use the soap.client.props file for the WebSphere Application Server administrator credentials. | No |


