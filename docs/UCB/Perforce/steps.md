
Perforce - Steps
================

# Steps


### Steps




### Process steps in the Perforce plug-in

* [Perforce Changelog](#perforce_changelog)
* [Perforce Checkout](#perforce_checkout)
* [Perforce Cleanup](#perforce_cleanup)
* [Perforce Label](#perforce_label)
* [Perforce Quiet Period](#perforce_quiet_period)


### Perforce Changelog

Perform a Perforce changelog. By default this will be between the previous buildlife and the current one.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Changes URL | String |  | No |
| End Date | String | End changelog at this date (yyyy-MM-dd HH:mm:ss z OR E MMM dd HH:mm:ss zzz yyyy OR milliseconds since Unix Epoch) | No |
| Save Changes in Database | Boolean | Save the changes in the database for reporting on the build life changes tab. You usually only want to save them if you are running the changelog since the previous build. | No |
| Source Config |  |  | No |
| Start Date | String | Start changelog at this date (yyyy-MM-dd HH:mm:ss z OR E MMM dd HH:mm:ss zzz yyyy OR milliseconds since Unix Epoch) | No |

### Perforce Checkout

Perform a Perforce login, create client, getclientinfo, set workdir, sync as indicated by source configuration



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Date | String | Date of sourcecode to checkout (yyyy-MM-dd HH:mm:ss z OR E MMM dd HH:mm:ss zzz yyyyOR milliseconds since Unix Epoch) | No |
| Source Config |  |  | No |

### Perforce Cleanup

Perform a cleanup of the current working directory


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Source Config |  |  | No |

### Perforce Label

if (label =~ /[@#\*%\s]/) { errors.label = Label name can not contain @#\*% or any white-space characters! }``


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Depot Paths | String | A comma-separated list of depot paths to use when labeling files | No |
| Label | String | The label to apply to the source | Yes |
| Message | String | An optional message to use when applying the label | No |
| Source Config |  |  | No |

### Perforce Quiet Period

Perform a Perforce changelog for quiet period detection and publish the results.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| End Date | String | End changelog at this date (yyyy-MM-dd HH:mm:ss z OR E MMM dd HH:mm:ss zzz yyyy OR milliseconds since Unix Epoch) | No |
| Source Config |  |  | No |
| Start Date | String | Start changelog at this date (yyyy-MM-dd HH:mm:ss z OR E MMM dd HH:mm:ss zzz yyyy OR milliseconds since Unix Epoch) | No |


### Roles in the Perforce plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.


* [Perforce Repository](#perforce_repository_role)
* [Perforce Source Config](#perforce_source_config_role)


### Perforce Repository

Perforce repository configuration


| Name | Type | Description |
| --- | --- | --- |
| Character Set | String |  |
| Command Character Set | String |  |
| Command Path | String | The location of the perforce command, including the executable, if not on the system PATH |
| Password Script | String | If you wish to use a script or property lookups for your password, leave the Password field blank and enter it here. |
| Perforce Port | String | The hostname:port value for the Perforce server |
| Repository Password | Password | The password to use for http(s) access to repositories |
| Repository Username | String | The username to use for http(s) access to repositories |

### Perforce Source Config


This is a p4 source configuration.There are three basic modes of operation: 1) Existing Clientin this mode the client will update the working directory for the current job during populate steps 2) New Client From Templatecreate a new client from the given template client. 3) New Clientthe user supplied client-specification will be used to create a new client.


| Name | Type | Description |
| --- | --- | --- |
| Cleanup Workspace | Boolean |  |
| Client Name | String | The client name |
| Client Spec Creation | Enumeration:
|  |
| Client Template Name | String | The client template to use (if creating clientspec from template) |
| Client-Spec | String | The client specification to use (if creating new clientspec) |
| Directory Offset | String | Override the root directory of the template to an offset from the current job working directory. You may use . for the current job working directory. Leave blank to have the job working directory changed to the predefined root directory of the template |
| Do Not Limit Labels to Client Spec | Boolean | Select here if you intend to apply the same label to multiple projects. This means that a label will be applied cumulatively. |
| Do not update have list | Boolean | Enable this to pass the -p option on the p4 sync command that will not update the Perforce have list. This option is only available to later versions of Perforce. Using thisat the source config level will prevent you from being able to label the source checked out.You can also set this on the individual populate workspace step. |
| Exclude Filters | String | Exclude this list of usernames |
| File Filters | String | Restrict changelog to files matching these patterns. Lines start with + to include andto exclude. Wildcards \*, \*\*, and ? are allowed. |
| Force sync of the clientspec | Boolean | Select here to force the sync of the clientspec |
| Integrate Command Option | Boolean | Toggle the -i command option for the Changelog step. When enabled, this will include changelists that affected files that were integrated with the files that were changed. |
| Label | String | The label to use during checkout. This will use the label name instead of a date for the sync command |
| Login Before Each Step | Boolean | Select here if you would like to perform a perforce login step before every job configuration step that is executed. If left unchecked we will pass the username and password to every perforce command executed. This option is necessary when configuring perforce with ldap. |
| Preserve Unlabeled Files | Boolean | Select here if you are synchronizing the source using a label and you want to keep any files in the workspace that do not have that label. This option facilitates patch builds. |
| Repository |  | Select the Perforce Repository |



|Back to ...||Latest Version|Perforce |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[16.752926](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/Perforce/Perforce-16.752926.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
