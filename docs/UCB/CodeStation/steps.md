
CodeStation - Steps
===================

# Steps


### Steps




### Process steps in the CodeStation plug-in

* [Download Another Project Artifacts](#download_another_project_artifacts)
* [Download Artifacts](#download_artifacts)
* [Download Dependencies](#download_dependencies)
* [Upload All Artifacts](#upload_all_artifacts)
* [Upload Artifacts](#upload_artifacts)


### Download Another Project Artifacts

Download artifact set files from a different CodeStation project.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Artifact Set | String | The artifact set to download. | Yes |
| Build Life | String | The build life identifier to download artifacts from. | No |
| Build Life with Label | String | The label name to use for selecting a build life to download | No |
| Build Life with Stamp | String | The stamp pattern to use for selecting a build life to download. | No |
| Build Life with Status | String | The status name to use for selecting a build life to download | No |
| CodeStation Build Life | String | The CodeStation build life identifier to download artifacts from. | No |
| CodeStation Project | String | The name of the CodeStation project. | No |
| Permissions | Enumeration:
* NONE
* SET\_ALL
* SET\_EXECUTE\_ONLY
| Select how you would like CodeStation to handle setting file permissions on download: NoneDont copy any permissions,Set AllSet all permissions from the original file,Set Execute Bits OnlySet only the execute bits from the original file. | Yes |
| Project | String | The name of the project. | No |
| Use CodeStation Cache | Boolean | Check this box if you would like to use the local CodeStation cache when downloading artifacts | No |
| Workflow | String | The name of the workflow. | No |

### Download Artifacts

Download artifact set files from CodeStation.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Artifact Set | String | The artifact set to download. | No |
| Build Life | String | The build life identifier to download artifacts from | No |
| Permissions | Enumeration:
* NONE
* SET\_ALL
* SET\_EXECUTE\_ONLY
| Select how you would like CodeStation to handle setting file permissions on download: NoneDont copy any permissions,Set AllSet all permissions from the original file,Set Execute Bits OnlySet only the execute bits from the original file. | Yes |
| Project | String | The name of the project. | No |
| Use CodeStation Cache | Boolean | Check this box if you would like to use the local CodeStation cache when downloading dependencies. | No |
| Workflow | String | The name of the workflow. | No |

### Download Dependencies

Download dependencies from CodeStation.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Build Life | String | The build life identifier to download dependencies from | No |
| Permissions | Enumeration:
* NONE
* SET\_ALL
* SET\_EXECUTE\_ONLY
| Select how you would like CodeStation to handle setting file permissions on download: NoneDont copy any permissions,Set AllSet all permissions from the original file,Set Execute Bits OnlySet only the execute bits from the original file. | Yes |
| Project | String | The name of the project. | No |
| Use CodeStation Cache | Boolean | Check this box if you would like to use the local CodeStation cache when downloading dependencies. | No |
| Workflow | String | The name of the workflow. | No |

### Upload All Artifacts

Upload all configured artifact sets to CodeStation.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Hashes |  | Select additional hashes that you would like to capture other than the default of SHA-256. | No |
| Build Life | String | The build life identifier to download dependencies from | No |
| Directories | Enumeration:
* EXCLUDE
* INCLUDE\_ALL
* INCLUDE\_NON\_EMPTY
| Select how you would like CodeStation to handle uploading directories: ExcludeNo directories are included in the file list,Include AllAll directories, empty or not, are included in the file list, Include Non-EmptyNon-empty directories are included in the file list. | Yes |
| Permissions | Enumeration:
* BEST\_EFFORT
* FILE\_EXECUTE\_ONLY
* NONE
* REQUIRED
| Select how you would like CodeStation to handle uploading permissions: Best EffortAttempt to read permissions, but failures are non-fatal, File Execute OnlyAttempt to read file execute permission, but failures are non-fatal, NoneNo permissions are read,RequiredPermissions must be read successfully. | Yes |
| Project | String | The name of the project. | No |
| Request Timeout | String | The timeout value in milliseconds for http requests | No |
| Symlinks | Enumeration:
* AS\_LINK
* EXCLUDE
* FOLLOW
| Select how you would like CodeStation to handle uploading symlinks: As LinkSymlinks are inluded in the list as symlinks,Exclude Symlinks and the files or directories that they point to are excluded, FollowSymlinks are treated as regular files or directories. | Yes |
| Workflow | String | The name of the workflow. | No |

### Upload Artifacts

Upload a specific artifact set to CodeStation.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Hashes |  | Select additional hashes that you would like to capture other than the default of SHA-256. | No |
| Artifact Set Name | String | The artifact set name | Yes |
| Build Life | String | The build life identifier to download dependencies from | No |
| Directories | Enumeration:
* EXCLUDE
* INCLUDE\_ALL
* INCLUDE\_NON\_EMPTY
| Select how you would like CodeStation to handle uploading directories: ExcludeNo directories are included in the file list,Include AllAll directories, empty or not, are included in the file list, Include Non-EmptyNon-empty directories are included in the file list. | Yes |
| Fail If Not Found | Boolean | Force the upload step to fail when the directory containing artifacts does not exist or there are no artifacts in the directory. | No |
| Permissions | Enumeration:
* BEST\_EFFORT
* FILE\_EXECUTE\_ONLY
* NONE
* REQUIRED
| Select how you would like CodeStation to handle uploading permissions: Best EffortAttempt to read permissions, but failures are non-fatal, File Execute OnlyAttempt to read file execute permission, but failures are non-fatal, NoneNo permissions are read,RequiredPermissions must be read successfully. | Yes |
| Project | String | The name of the project. | No |
| Request Timeout | String | The timeout value in milliseconds for http requests | No |
| Symlinks | Enumeration:
* AS\_LINK
* EXCLUDE
* FOLLOW
| Select how you would like CodeStation to handle uploading symlinks: As LinkSymlinks are inluded in the list as symlinks,Exclude Symlinks and the files or directories that they point to are excluded, FollowSymlinks are treated as regular files or directories. | Yes |
| Workflow | String | The name of the workflow. | No |



|Back to ...||Latest Version|CodeStation |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[25.1165172](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/CodeStation/codestation-25.1165172.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
