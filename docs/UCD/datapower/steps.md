
# IBM DataPower Configuration Manager - Process Steps

- [IBM DataPower Configuration Manager - Steps](#ibm-datapower-configuration-manager---steps)
  - [Steps](#steps)
    - [Process steps in the DataPower plug-in](#process-steps-in-the-datapower-plug-in)
      - [Backup Device](#backup-device)
      - [Backup Domains](#backup-domains)
      - [Checkpoint Delete](#checkpoint-delete)
      - [Checkpoint Restore](#checkpoint-restore)
      - [Checkpoint Save](#checkpoint-save)
      - [Create Domain](#create-domain)
      - [Crypto Identity Credential from Definition](#crypto-identity-credential-from-definition)
      - [Crypto Validation Credential from Definition](#crypto-validation-credential-from-definition)
      - [Delete Domain](#delete-domain)
      - [Download Files](#download-files)
      - [Export Object](#export-object)
      - [Export Objects](#export-objects)
      - [Flush Document Cache](#flush-document-cache)
      - [Flush Stylesheet Cache](#flush-stylesheet-cache)
      - [Host Alias Remove](#host-alias-remove)
      - [Host Alias Set](#host-alias-set)
      - [Import (Basic)](#import-basic)
      - [Import (Definition)](#import-definition)
      - [Import (Deployment Policy Object)](#import-deployment-policy-object)
      - [Invoke any deploy.ant.xml target](#invoke-any-deployantxml-target)
      - [Load Balancer Group from Definition](#load-balancer-group-from-definition)
      - [Quiesce Domain](#quiesce-domain)
      - [Restart Domain](#restart-domain)
      - [Restore Backup](#restore-backup)
      - [Save Configuration](#save-configuration)
      - [Set Log Level](#set-log-level)
      - [Unquiesce Domain](#unquiesce-domain)
      - [Upload Files](#upload-files)
      - [Upload from Definition](#upload-from-definition)

## Backup Device

Backup all domains on a device (minus key/certificate files)

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Backup file | String | DataPower export file to create/overwrite | No |

## Backup Domains

Backup one or more domains on a device (minus key/certificate files)

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional comma separated domain names (no blanks) | String | Names of additional domains to backup | No |
| Backup file | String | DataPower export file to create/overwrite | No |
| Domain name | String | Name of the first domain to backup | No |

## Checkpoint Delete

Delete a checkpoint in a domain

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Checkpoint name | String | Name of checkpoint | No |
| Domain name | String | Name of a domain containing the checkpoint | No |

## Checkpoint Restore

Restore a domain from a checkpoint

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Checkpoint name | String | Name of checkpoint | No |
| Domain name | String | Name of a domain to restore from a checkpoint | No |

## Checkpoint Save

Checkpoint the current state of a domain

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Checkpoint name | String | Name of checkpoint | No |
| Domain name | String | Name of a domain to checkpoint | No |

## Create Domain

Create a new domain

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| New domain name | String | Name of the domain to create (letters, numbers, hyphen, underscore, no blanks) | No |

## Crypto Identity Credential from Definition

Create/overwrite a crypto identity credential based on a definition file

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Definition file | String | Definition file for crypto identity credential | No |
| Domain name | String | Name of the target domain | No |

## Crypto Validation Credential from Definition

Create/overwrite a crypto validation credential based on a definition file

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Definition file | String | Definition file for crypto validation credential | No |
| Domain name | String | Name of the target domain | No |

## Delete Domain

Delete a domain

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain name | String | Name of the domain to delete | No |

## Download Files

Download target files or all files from a filestore

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain name | String | Name of the target domain | Yes |
| Filestore name | String | Name of filestore (e.g. local:, store:) | Yes |
| Target files (blank means all) | String | All files if empty or target files e.g. <downloadFiles><file>/folderA/fileA.xml</file></downloadFiles> | No |
| To directory | String | This local directory will contain the downloaded files | Yes |

## Export Object

Export an object from a domain on a device

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain name | String | Name of the first domain to backup | Yes |
| Export file | String | DataPower export file to create/overwrite | Yes |
| Include all files? | Boolean | Include other files when exporting? | No |
| Include reference files? | Boolean | Include referenced files when exporting? | No |
| Include reference objects? | Boolean | Include referenced objects when exporting? | No |
| Object Class | String | Object class. Specify ‘all-classes’ to export every class. e.g. MultiProtocolGateway or WSGateway | Yes |
| Object Name | String | Object name. Specify ‘all-objects’ to export every object. e.g. name of service | Yes |

## Export Objects

Export objects from a domain on a device

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Definition file | String | Definition file for class objects to export | Yes |
| Domain name | String | Name of the first domain to backup | Yes |
| Export file | String | DataPower export zip file to create/overwrite | Yes |
| Include all files? | Boolean | Include other files when exporting? | No |
| Include reference files? | Boolean | Include referenced files when exporting? | No |
| Include reference objects? | Boolean | Include referenced objects when exporting? | No |

## Flush Document Cache

Flush the domain’s document cache. Optionally specify a XML Manager.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain name | String | Name of the domain to flush. | Yes |
| XML Manager | String | The name of a XML Manager to flush. Optional. | No |

## Flush Stylesheet Cache

Flush the domain’s stylesheet cache. Optionally specify a XML Manager.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain name | String | Name of the domain to flush. | Yes |
| XML Manager | String | The name of a XML Manager to flush. Optional. | No |

## Host Alias Remove

Remove a host alias

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Host alias name | String | Host alias (e.g. www.ibm.com) | No |

## Host Alias Set

Set a host alias

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Comment | String | e.g. the equivalent DNS name for this IP address | No |
| Host alias IP | String | IP address assigned to an ethernet adapter on the appliance as a primary or secondary IP address | No |
| Host alias name | String | Host alias (e.g. www.ibm.com) | No |
| State | Enumeration: |  Whether enabled or disabled | No |
|  |  | * enabled | | |
|  |  | * disabled | | |

## Import (Basic)

Import a DataPower export file (e.g. .zip) into a domain

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain name | String | Name of the target domain | No |
| Import File | String | DataPower export file to import | No |

## Import (Definition)

Import a DataPower export file (e.g. .zip) into a domain

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Definition File | String | DCM definitions file | No |
| Domain name | String | Name of the target domain | No |
| Import File | String | DataPower export file to import | No |

## Import (Deployment Policy Object)

Import a DataPower export file (e.g. .zip) into a domain using a deployment policy object

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Deployment policy object name | String | Deployment policy object (already present in the domain) to be applied during import | No |
| Deployment policy object variable name | String | Deployment policy object variable (already present in the domain) to be applied during import | No |
| Domain name | String | Name of the target domain | No |
| Import File | String | DataPower export file to import | No |

## Invoke any deploy.ant.xml target

Invoke any deploy.ant.xml target – prefer predefined steps to this one

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Properties | String | Additional property mappings; Separate each pair with a tilde (~) character. Example: antpropname1=value~antpropname2=value | No |
| Additional Properties File | String | File Containing Additional Properties | No |
| Domain name | String | Name of the target domain | No |
| Target Environment | String | Target environment (e.g. dev, sit, uat, prod) | No |
| Target name | String | Name of the target (e.g. domain-restart) | No |

## Load Balancer Group from Definition

Create/overwrite a load balancer group based on a definition file

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Definition file | String | Definition file for load balancer group | No |
| Domain name | String | Name of the target domain | No |

## Quiesce Domain

Quiesce a domain

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain name | String | Name of the domain to quiesce | No |

## Restart Domain

Restart a domain

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain name | String | Name of the domain to restart | No |

## Restore Backup

Restore one or more domains from backup file (see Backup Device or Backup Domains)

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional blank separated domain names | String | Names of additional domains to restore | No |
| Backup file | String | DataPower export file | No |
| Domain name | String | Name of the first domain to restore | No |

## Save Configuration

Save the in-memory configuration in a domain to permanent storage

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain name | String | Name of the domain | No |

## Set Log Level

Set the log level for the default log in a domain

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain name | String | Name of the domain | No |
| Log level | Enumeration: | Default log level in domain | No |
|           |    * debug   |                             |    |
|           |    * info    |                             |    |
|           |    * notice  |                             |    |
|           |    * warn    |                             |    |
|           |    * error   |                             |    |
|           |    * critic  |                             |    |
|           |    * alert   |                             |    |
|           |    * emerg   |                             |    |

## Unquiesce Domain

Unquiesce a domain

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain name | String | Name of the domain to unquiesce | No |

## Upload Files

Upload files

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain name | String | Name of the target domain | No |
| Exclude Files | String | A list of patterns, separated by newline characters, that describe the files to skip. For example, if you specify \*\*/\*.zip, all .zip files in all subdirectories are excluded. | No |
| From directory | String | Source directory | No |
| Include Files | String | A list of patterns, separated by newline characters, that describe the files to upload. The default, \*\*/\*, includes all files. | Yes |
| To directory | String | Target directory | No |

## Upload from Definition

Create/overwrite files/directories based on a definition file

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Definition file | String | Definition file for files and directories to upload | No |
| Domain name | String | Name of the target domain | No |
