
# Microsoft Windows System Tools - Process Steps

* [Add Or Overwrite Registry Key](#add_or_overwrite_registry_key)
* [Check File Contents](#check_file_contents)
* [Configure DCOM Settings](#configure_dcom_settings)
* [Create Message Queues](#create_message_queues)
* [Create Windows Event Log](#create_windows_event_log)
* [Create Windows Scheduled Task](#create_windows_scheduled_task)
* [Delete Registry Key](#delete_registry_key)
* [Delete Scheduled Task](#delete_scheduled_task)
* [Disable Windows Features](#disable_windows_features)
* [Enable Windows Features](#enable_windows_features)
* [End Scheduled Task](#end_scheduled_task)
* [Export Registry Subkey to File](#export_registry_subkey_to_file)
* [Import Registry Files](#import_registry_files)
* [Log off Notification](#log_off_notification)
* [Log off Sessions](#log_off_sessions)
* [Modify ACLs](#modify_acls)
* [Reboot](#reboot)
* [Run Scheduled Task](#run_scheduled_task)


## Add Or Overwrite Registry Key

Adds or Overwrites a Key to the Registry


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Force Registry Overwrite  | Boolean | This will overwrite the existing registry key | No |
| Registry Key | String | Specify the Registry Key (ie HKLM\Software\MyCo) | Yes |
| Registry Value Data | String | Specifies the Registry Value Data | Yes |
| Registry Value Name | String | Specify the Registry Value Name | Yes |
| Registry Value Type | Enumeration:
* REG\_SZ
* REG\_MULTI\_SZ
* REG\_BINARY
* REG\_DWORD\_BIG\_ENDIAN
* REG\_DWORD
* REG\_DWORD\_LITTLE\_ENDIAN
* REG\_NONE
* REG\_EXPAND\_SZ
| Select the data type for the Registry Value Name. | Yes |

## Check File Contents

Check file contents against a regular expression.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Directory Offset | String | The working directory to use when executing this command. This is relative to current working directory. | No |
| Fail if a match was found | Boolean | Check this option to fail the step if a match was found. Default is to fail if a match is not found. | No |
| File to scan | String | The name of the file to scan. | Yes |
| Regular Expression | String | The regular expression used to scan the file contents. | Yes |

## Configure DCOM Settings

Configure DCOM Settings


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Authentication Level | Enumeration:
* 1
* 2
* 3
* 4
* 5
* 6
| Select the DCOM Authentication Level | Yes |
| Enable Remote DCOM | Boolean | This will Enable Remote DCOM  | No |
| Impersonation Level | Enumeration:
* 1
* 2
* 3
* 4
| Select the DCOM Impersonation Level | Yes |

## Create Message Queues

Create Message Queues


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Non-Transactional Queues | String | A new line separated list of non-transactional message queues to create. Ex: .\newQueue1 or .\Private$\newPrivateQueue1 | No |
| Transactional Queues | String | A new line separated list of transactional message queues to create. Ex: .\newQueue1 or .\Private$\newPrivateQueue1 | No |

## Create Windows Event Log

Creates a new event log and a new event source.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Category Resource File | String | Specifies the path to the file that contains category strings for the source events. This file is also known as the Category Message File. | No |
| Log Name | String | The Name of the event log. | Yes |
| Message Resource File | String | Specifies the path to the file that contains message formatting strings for the source events. This file is also known as the Event Message File. | No |
| Parameter Resource File | String | Specifies the path to the file that contains strings used for parameter substitutions in event descriptions. This file is also known as the Parameter Message File. | No |
| Powershell executable location | String | The path including the powershell executable unless on the path. | No |
| Sources | String | A comma separated list of the names of the event log sources, such as application programs that write to the event log. | Yes |

## Create Windows Scheduled Task

Creates a new scheduled task for Windows.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Day | String | Day of the week or month to run the task. The wildcard character (\*) specifies all days. Allowed values are MON, TUE, WEB, THU, FRI, SAT, SUN and for monthly schedules 1-31. | No |
| Duration(HH:mm) | String | The duration to run the task. This value will be ignored for schedule types that it is invalid for. | No |
| End Date(mm/dd/yyyy) | String | The last date that this schedule should run on. This value will be ignored for schedule types that it is invalid for. | No |
| Executable Location | String | The absolute path to the executable to be run for this task. | Yes |
| Idle Time | String | Amount of idle time to wait before running the scheduled for ONIDLE type. Valid values are 1999 minutes. This value will be ignored for other schedule types. | No |
| Month | String | Month for the schedule. The wildcard character (\*) specifies all months. | No |
| Schedule Type | Enumeration:
* MINUTE
* HOURLY
* DAILY
* WEEKLY
* MONTHLY
* ONCE
* ONSTART
* ONLOGON
* ONIDLE
| The type of the schedule to be created. | Yes |
| Start Date(mm/dd/yyyy) | String | The first date that this schedule should run on. This value will be ignored for schedule types that it is invalid for. | No |
| Start Time(HH:mm) | String | The start time to run the task. This value is required for Once schedule type. | No |
| Task Name | String | The Name of the scheduled task. | Yes |
| Type Modifier | String | The modifier to invoke schtasks with. Please refer to your Operating System documentation for allowed values for the schedule type. | No |

## Delete Registry Key

Deletes a Key from the Registry


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Fail if not found | Boolean | Check this box if you want the process to fail if the registry key isnt found. | No |
| Registry Key | String | Specify the Registry Key (ie HKLM\Software\MyCo). | Yes |
| Registry Value | String | Specify a single value of a Registry key to delete. | No |

## Delete Scheduled Task

Delete a scheduled task for Windows.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Task Name | String | The Name of the scheduled task. | Yes |

## Disable Windows Features

Disable specific Windows Features. This only works with Windows 7 family of Windows.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Options | String | A comma and/or new-line separated list of additional options to be supplied to the dism command. | No |
| Directory Offset | String | Specify a sub-directory of the current working directory where you want the command to execute | No |
| Dism executable location | String | The path including the dism executable unless on the path. | No |
| Features | String | A comma and/or new-line separated list of features to disable. Do not include /featurename: | Yes |

## Enable Windows Features

Enable specific Windows Features. This only works with Windows 7 family of Windows.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Options | String | A comma and/or new-line separated list of additional options to be supplied to the dism command. | No |
| Directory Offset | String | Specify a sub-directory of the current working directory where you want the command to execute | No |
| Dism executable location | String | The path including the dism executable unless on the path. | No |
| Features | String | A comma and/or new-line separated list of features to enable. Do not include /featurename: | Yes |

## End Scheduled Task

End a scheduled task.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Task Name | String | The Name of the scheduled task. | Yes |

## Export Registry Subkey to File

Exports registry subkey to a file


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Destination File | String | Destination file for export (i.e. example.reg, c:/path/to/example.reg) | Yes |
| Force File Overwrite  | Boolean | When enabled, this step will overwrite the destination file if it exists | No |
| Registry Key | String | Specify the Registry Key to export (ie HKLM\Software\MyCo) | Yes |

## Import Registry Files

Imports a file containg registry keys


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Exclude Files | String | Enter a new line separated set of file filters for the files to exclude from the execution. | No |
| Include Files | String | Enter a new line separated set of file filters to import intothe registry. | Yes |
| Source Directory | String | Specify the Source Directory | Yes |

## Log off Notification

Sends a message warning to logged on users to log off


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Message Text | String | Specify the message that will be displayed to users logged on to the server | Yes |
| Number of Times to Retry | String | This determines the amount times the plugin willcheck for logged on users before failing the deploy | Yes |
| Server to Query | String | This specifies the server to query active sessions | No |
| Wait Time Between Retries(Seconds) | String | This specifies the amout of time to wait between retries | Yes |
| Windows Server Version | Enumeration:
* 2003
* 2008
| Select the server version the plugin will run on | Yes |

## Log off Sessions

Logs off sessions on a server


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Number of Times to Retry | String | This determines the amount times the plugin will check for logged on users before forcing sessions to log off. Set to 0 if you dont want to wait. | Yes |
| Server to Query | String | This specifies the server to query for sessions. | No |
| Session name filter | String | Provide a regular expression if you want to filter the sessions affected by this step by name. Leave blank for all sessions. | No |
| Session state filter | String | Provide a regular expression if you want to filter the sessions affected by this step by their state. Leave blank for all session states. | No |
| Wait Time Between Retries (seconds) | String | This specifies the amount of time to wait between retries. | Yes |

## Modify ACLs

Assign ACLs to files or folders.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| CACLS Path | String | The path to the (X)CACLS executable. For example: C:\Windows\System32 | No |
| CACLS Type | Enumeration:
* cacls
* icacls
* xcacls
| Select whether to use cacls, xcacls, or icacls to modify permissions | Yes |
| Continue on access denied errors | Boolean | Check this option to continue on access denied errors. Adds /C option. | No |
| Deny user accesss | String | Deny specified user access. Uses /D option (/deny in ICACLS). If using XCACLS or CACLS, specify the user. With ICACLS, this denies specified rights to the user, requiring an input of the form, user:perm | No |
| Directory Offset | String | The working directory to use when executing this command. This is relative to current working directory. | Yes |
| Edit ACLs instead of replacing | Boolean | Check this option to edit ACL instead of replacing it. Adds /E option. This option cannot be used with ICACLS | No |
| File filter | String | A file filter to limit the files/folders to modify. | Yes |
| Grant User Access Rights | String | A list of new line separated permissions in the form of user:perm;spec where perm can be: R Read C Change (write) F Full control P Change Permissions (Special access) O Take Ownership (Special access) X EXecute (Special access) E REad (Special access) W Write (Special access) D Delete (Special access). | No |
| Include subdirectories | Boolean | Check this option to change ACLs of specified files in the current directory and all subdirectories. Adds /T option. | No |
| Replace Users Access Rights | String | A list of new line separated permissions in the form of user:perm where perm can be: N None R Read C Change (write) F Full control. | No |
| Replace without verify | Boolean | Replace users rights without verify. Adds /Y option. Only valid with Use XCACLS option. | No |
| Revoke users rights | String | Revoke specified users access rights (only valid with Edit ACLs instead of replacing option unless using ICACLS). Uses /R option. | No |

## Reboot

Reboot the os


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Agent Service Name | String | If Windows machine restarts but the step is failing, enter the Agent Service Name here. | No |
| Time | String | The time in seconds to wait to reboot. | Yes |

## Run Scheduled Task

Run a scheduled task.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Immediately | Boolean | Check to run this task immediately. | Yes |
| Task Name | String | The Name of the scheduled task. | Yes |


