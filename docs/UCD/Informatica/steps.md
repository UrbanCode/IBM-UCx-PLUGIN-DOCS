
# Informatica

## Steps

- [Informatica](#informatica)
  - [Steps](#steps)
    - [Apply Label](#apply-label)
    - [Assign Permission](#assign-permission)
    - [Create Dynamic Deployment Group](#create-dynamic-deployment-group)
    - [Create Folder](#create-folder)
    - [Create Static Deployment Group](#create-static-deployment-group)
    - [Deploy Deployment Group](#deploy-deployment-group)
    - [Import Objects](#import-objects)
    - [Roll Back Deployment Group](#roll-back-deployment-group)
    - [Run PMREP Command](#run-pmrep-command)
    - [Validate Deployment Group](#validate-deployment-group)

### Apply Label

Apply a label to objects in the target server.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain Name | String | The domain name of the Informatica server. | No |
| Host | String | The host name of the Informatica server. | No |
| Informatica Label | String | The name of the label to apply to the objects. | Yes |
| Objects File | String | The name of the file containing the objects to label. | Yes |
| Password | Password | The password to use to authenticate with Informatica. | No |
| Password Script | String | If a property or script should be used to retrieve the password, leave it blank and put the property or script here. | No |
| Port | String | The port number of the Informatica server. | No |
| Repository | String | The repository name in Informatica. | Yes |
| Username | String | The username to use to authenticate with Informatica. | Yes |

### Assign Permission

Add, remove, or update permissions on a global object for a user, group, or the Others default group. Note: Only the administrator or the current owner of the object can manage permissions on the object.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain Name | String | The domain name of the Informatica server. | No |
| Group Name to assign Object | String | Name of the group for which you want to add, remove, or update permissions. Specify Others as the group name to change permissions for the Others default group. Required if assigned User Name is not specified. Do not specify both. | No |
| Host | String | The host name of the Informatica server. | No |
| Object Name | String | Name of the object for which you want to manage permissions. | Yes |
| Object Subtype | Enumeration: | Type of the object for which you want to manage permissions. | Yes |
|                |    - Null         |                                                         |     |
|                |    - Application  |                                                         |     |
|                |    - FTP          |                                                         |     |
|                |    - Loader       |                                                         |     |
|                |    - Queue       |                                                         |     |
|                |    - Relational    |                                                         |     |
|                |    - Shared         |                                                         |     |
|                |    - Personal     |                                                         |     |
| Type of Connection or Query object. |                 |  Not required for other object types. | No |
|                                     | Object Type     | Enumeration:                          |    |
|                                     |                 | - connection                         |    |
|                                     |                 | - deploymentgroup                    |    |
|                                     |                 | - folder                             |    |
|                                     |                 | - label                    |    |
|                                     |                 | - query                    |    |
| Password | Password | The password to use to authenticate with Informatica. | No |
| Password Script | String | If a property or script should be used to retrieve the password, leave it blank and put the property or script here. | No |
| Permission | String | The permission settings to assign the object. Use the characters r, w, and x to assign read, write, and execute permissions. | Yes |
| Port | String | The port number of the Informatica server. | No |
| Repository | String | The repository name in Informatica. | Yes |
| Security Domain | String | Required if you use LDAP authentication.Name of the security domain that the user or group belongs to. Default is Native | No |
| User Name to assign Object | String |  Name of the user for whom you want to add, remove, or update permissions. Required if Group Name is not specified. Do not specify both. | No |
| Username | String | The username to use to authenticate with Informatica. | Yes |

### Create Dynamic Deployment Group

Create a dynamic Deployment Group and populate it using a named query.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain Name | String | The domain name of the Informatica server. | No |
| Dynamic Group Query | String | The name of the query to use to populate the created dynamic deployment group. | Yes |
| Host | String | The host name of the Informatica server. | No |
| Informatica Group | String | The name of the dynamic deployment group to create for deployment. | Yes |
| Password | Password | The password to use to authenticate with Informatica. | No |
| Password Script | String | If a property or script should be used to retrieve the password, leave it blank and put the property or script here. | No |
| Port | String | The port number of the Informatica server. | No |
| Repository | String | The repository name in Informatica. | Yes |
| Username | String | The username to use to authenticate with Informatica. | Yes |

### Create Folder

Creates a folder in the repository.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Description | String | Description to give to all folders. | No |
| Domain Name | String | The domain name of the Informatica server. | No |
| Folder List | String | List the names of the folders you wish to create. Separateeach folder with a new line or comma. | Yes |
| Frozen Setting | Enumeration: | Select the active or frozen setting from the list. | No |
|                | - 0               |                                               |    |
|                | - active |                                               |    |
|                | - frozendeploy |                                               |    |
|                | - frozennodeploy |                                               |    |
| Host | String | The host name of the Informatica server. | No |
| Owner | String | The Owner name to assign all folders. | No |
| Owner Security Domain | String | The Owner Security Domain to assign all folders. | No |
| Password | Password | The password to use to authenticate with Informatica. | No |
| Password Script | String | If a property or script should be used to retrieve the password, leave it blank and put the property or script here. | No |
| Permissions | String | The permission settings to assign to all folders. Use the binary reference to specify permissions. Example: 777 | No |
| Port | String | The port number of the Informatica server. | No |
| Repository | String | The repository name in Informatica. | Yes |
| Share Folders | Boolean | Make the folders shared. | No |
| Username | String | The username to use to authenticate with Informatica. | Yes |

### Create Static Deployment Group

Create a static Deployment Group and add Informatica Workflows to it.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain Name | String | The domain name of the Informatica server. | No |
| Host | String | The host name of the Informatica server. | No |
| Informatica File | String | Informatica-formatted file containing the object to add to the deployment group. | No |
| Informatica Folder | String | The folder to create the deployment group in. | Yes |
| Informatica Group | String | The name of the static deployment group to create for deployment. | Yes |
| Informatica Workflows | String | The names of workflows (space or line separated) to add to the depoloyment group. | No |
| Password | Password | The password to use to authenticate with Informatica. | No |
| Password Script | String | If a property or script should be used to retrieve the password, leave it blank and put the property or script here. | No |
| Port | String | The port number of the Informatica server. | No |
| Repository | String | The repository name in Informatica. | Yes |
| Username | String | The username to use to authenticate with Informatica. | Yes |

### Deploy Deployment Group

Deploy a deployment group from one server to another.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Destination Informatica Folder(s) | String | The destination folder(s) for the deployment group objects. This is a 1:1 mapping with Source Informatica Folder(S). Separate each folder with a comma or new line. If this property is blank, the source folder names will be used as the destination folder names. | No |
| Host | String | The host name of the Informatica server. | No |
| Informatica Group | String | The name of the deployment group to deploy. | Yes |
| Password | Password | The password to use to authenticate with Informatica. | No |
| Password Script | String | If a property or script should be used to retrieve the password, leave it blank and put the property or script here. | No |
| Port | String | The port number of the Informatica server. | No |
| Repository | String | The repository name in Informatica. | Yes |
| Source Domain Name | String | The domain name of the Informatica server for the source server. | No |
| Source Host | String | The host name of the Informatica server for the source server. | No |
| Source Informatica Folder(s) | String | The source folder(s) of the deployment group objects. Separate each folder with a comma or new line. | Yes |
| Source Password | Password | The password to use to authenticate with Informatica for the source server. | No |
| Source Password Script | String | If a property or script should be used to retrieve the password, leave it blank and put the property or script here for the source server. | No |
| Source Port | String | The port number of the Informatica server for the source server. | No |
| Source Repository | String | The repository name in Informatica for the source server. | Yes |
| Source Username | String | The username to use to authenticate with Informatica for the source server. | Yes |
| Username | String | The username to use to authenticate with Informatica. | Yes |

### Import Objects

Import Objects from XML files. The step will automatically add the connect and exit commands and generate the necessary control files.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Checkin after import | Boolean | When selected, this will add the attribute CHECKIN_AFTER_IMPORT=YES to the IMPORTPARAMS element in the ctl files | No |
| Conflict Resolution Rules | String | A new line separated list of conflict resolution overrides using the [object type name]=[resolution] notation. Full file path containing the conflict resolution rules list may be specified as an alternative. If no override is provided the default conflict resolution specified below will be used. | No |
| Default Conflict Resolution | Enumeration:     | The default conflict resolution. | Yes |
|                             | - REPLACE        |                             |  |
|                             | - REUSE        |                             |  |
|                             | - RENAME        |                             |  |
| Directory Offset | String | The sub-directory of the current working directory where you want to execute this step. Absolute paths are not allowed. | No |
| Domain Name | String | The domain name of the Informatica server. | No |
| Exclude Files | String | A list of XML files to exlude from the import. Supports * style file filters. | No |
| Folder Mapping | String | New line separated list of folder mappings using [old folder]=[new folder] notation. Full file path containing the folder mapings list may be specified as an alternative. If no values are provided or the old folder value from the XML file does not have a mapping the control file will use the old folder name as the new folder name. | No |
| Host | String | The host name of the Informatica server. | No |
| INFA HOME | String | The INFA_HOME variable to be set on the environment. If set we will also use ``${INFA_HOME}``/server/bin/pmrep as the exe and add this to LD_LIBRARY_PATH and LIBPATH | No |
| Include Files | String | A list of XML files to include in the import. Supports * style file filters. | Yes |
| LANG | String | Set the LANG environment variable. Example values can be UTF-8, ISO-8859-1 and etc. If set, will override the exsiting value on the target. | No |
| Password | Password | The password to use to authenticate with Informatica. | No |
| Password Script | String | If a property or script should be used to retrieve the password, leave it blank and put the property or script here. | No |
| Port | String | The port number of the Informatica server. | No |
| Repository | String | The repository name in Informatica. | Yes |
| Repository Mapping | String | A new line separated list of repository mappings using [old repository]=[new repository] notation. Full file path containing the repository mapings list may be specified as an alternative. If no values are provided or the old repository value from the XML file does not have a mapping the control file will use the old repository name as the new repository name. | No |
| Retain Generated Value | Boolean | When selected, this will add the attribute RETAIN_GENERATED_VALUE=YES to the IMPORTPARAMS element in the ctl files | No |
| Security Domain | String | Required if you use LDAP authentication.Name of the security domain that the user or group belongs to. Default is Native | No |
| Username | String | The username to use to authenticate with Informatica. | Yes |

### Roll Back Deployment Group

Roll back a deployment of a deployment group.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain Name | String | The domain name of the Informatica server. | No |
| Host | String | The host name of the Informatica server. | No |
| Informatica Group | String | The name of the group to roll back. | Yes |
| Number of Revisions | String | How many revisions to roll back (1 is most recent revision). | Yes |
| Password | Password | The password to use to authenticate with Informatica. | No |
| Password Script | String | If a property or script should be used to retrieve the password, leave it blank and put the property or script here. | No |
| Port | String | The port number of the Informatica server. | No |
| Repository | String | The repository name in Informatica. | Yes |
| Username | String | The username to use to authenticate with Informatica. | Yes |

### Run PMREP Command

Run pmrep with the commands given to pmrep defined in this step. The step will automatically add the connect and exit commands.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain Name | String | The domain name of the Informatica server. | No |
| Host | String | The host name of the Informatica server. | No |
| INFA HOME | String | The INFA_HOME variable to be set on the environment. If set we will also use ``${INFA_HOME}``/server/bin/pmrep as the exe and add this to LD_LIBRARY_PATH and LIBPATH | No |
| PMREP Commands | String | The commands to pass to pmrep. The connect and exit are not needed. Enter each command on a new line. | Yes |
| Password | Password | The password to use to authenticate with Informatica. | No |
| Password Script | String | If a property or script should be used to retrieve the password, leave it blank and put the property or script here. | No |
| Port | String | The port number of the Informatica server. | No |
| Repository | String | The repository name in Informatica. | Yes |
| Username | String | The username to use to authenticate with Informatica. | Yes |

### Validate Deployment Group

Validate a deployed deployment group in the target server.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain Name | String | The domain name of the Informatica server. | No |
| Host | String | The host name of the Informatica server. | No |
| Password | Password | The password to use to authenticate with Informatica. | No |
| Password Script | String | If a property or script should be used to retrieve the password, leave it blank and put the property or script here. | No |
| Port | String | The port number of the Informatica server. | No |
| Property Name | String | The property name to set on the job if the step found invalid objects. Set to true if found. | Yes |
| Repository | String | The repository name in Informatica. | Yes |
| Username | String | The username to use to authenticate with Informatica. | Yes |
| Validation File | String | The name of the file to output validated object to. | Yes |
| Validation Query | String | The name of the query to run to query the invalid objects of the deployment. | Yes |

|Back to ...||Latest Version|Informatica |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[v31](https://github.com/UrbanCode/Informatica-UCD/releases/download/31/Informatica-UCD-v31.ad2156b.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|
