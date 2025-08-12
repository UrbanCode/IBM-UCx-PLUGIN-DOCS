
# Linux System Tools - Process Steps

* [Add group](#add_group)
* [Add user](#add_user)
* [Change file ownership](#change_file_ownership)
* [Reboot](#reboot)
* [Set file permissions](#set_file_permissions)
* [Update fstab](#update_fstab)


## Add group

Use this step to add a user group to this Linux system.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| New group name | String | The name of the group to be added. | Yes |
| Users to add to group | String | One or more users to add to the group. List each user on a separate line. | No |

## Add user

Use this step to add a user to this Linux system.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| New user name | String | The name of the user to be added. | Yes |
| New users group | String | The name of an existing group to add the user to. Do not specify this property if the user is not being added to a group. | No |

## Change file ownership

Use this step to set the ownership of the files and directories in the current working directory.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Excludes | String | A list of file patterns to use to exclude files that are not to be changed. Specify each pattern on a separate line. Use the ANT pattern style. For example \*\*/\* matches all directories and files, and \*\*/test/\* matches all files and sub folders in the test folder. | No |
| Includes | String | A list of file patterns to use to include directories and files to be changed. Specify each pattern each on a separate line. Use the ANT pattern style. For example \*\*/\* matches all directories and files, and \*\*/test/\* matches all files and sub folders in the test folder. | Yes |
| New Owner | String | The name of the new owner of the files. | No |
| Type | Enumeration | The file types for which to change owners. Specify **both**, **file**, or **directory**. | No |

## Reboot

Use this step to reboot the Linux operating system.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Time | String | The time that the reboot is to occur. To start the reboot immediately, specify **now**. You can specify the number of minutes to wait before starting the reboot, by specifying **+*minutes***. For example, +2, indicates to wait 2 minutes before the reboot starts. You can also specify an absolute time in this format: ***hh:mm***. For example,entering 10:00 starts the reboot at 10:00 am. | No |

## Set file permissions

Use this step to set the permissions of files and directories in the current working directory.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Excludes | String | A list of file patterns to use to exclude files and directories that are not to be changed. Specify each pattern on a separate line. Use the ANT pattern style. For example \*\*/\* matches all directories and files, and \*\*/test/\* matches all files and sub folders in the test folder. | No |
| Includes | String | A list of file patterns to use to include directories and files to be changed. Specify each pattern each on a separate line. Use the ANT pattern style. For example \*\*/\* matches all directories and files, and \*\*/test/\* matches all files and sub folders in the test folder. | Yes |
| Permission String | String | The permission string to apply to the matched files. For example, 0777 or a+x. | No |
| Type | Enumeration | The type of files on which permission is to be set. Specify **both**, **file**, or **directory**. | No |

## Update fstab

Use this step to update, add, or remove rules from the file system table (fstab).


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Add/Update rules | String | A list of rules to be added or updated. List each rule on a separate line. | No |
| Backup file suffix | String | A specified value to be appended to the orginal file name so that a backup of the original fstab file is created. | No |
| File owner | String | The owner for the fstab file, for example, root:root. If no value is supplied, the new file owner is be based on the agent process ID. | No |
| File permissions | String | Enter the permission for the fstab file, for example, 644. If a value is not specified, the new file permissions are based on the ***umask*** value. | No |
| Remove rules | String | A list of devices to remove. List each device on a separate line. Do not specify the full fstab rule here, just the source device. | No |
| fstab file path | String | The the path, including the file name, to the fstab file if it is not located at `/etc/fstab`. | No |



|Back to ...||Latest Version|Linux System Tools ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[14.1154088](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/LinuxSystemTools/ucd-LinuxSystemTools-14.1154088.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
