
# File System - Process Steps

* [Import Version](#import_version)


## Import Version

Creates a new component version and imports artifacts

This step has no input properties.


## Roles in the File System plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.


* [FileSystemComponentProperties](#filesystemcomponentproperties_role)
* [FileSystemImportProperties](#filesystemimportproperties_role)


## FileSystemComponentProperties


| Name | Type | Description |
| --- | --- | --- |
| Always Use Name Pattern | Boolean | A name is automatically assigned to a new version. The name assigned is based on the pattern specified in the Version Name Pattern field. If this property is not enabled, you must specify a name each time you create a version. |
| Base Path | String | The path to the directory that contains the artifacts. |
| Extensions of files to Convert | String | A list of file extensions to convert into another character set. Separate each file extension with a comma. Specify this property if you have text-type files that must be converted into another character set. Matching file types are converted into the default character set of the system where the agent is located. |
| Next Version Number | String | The version number for the next version. This property is meaningful only when the Always Use Name Pattern property is enabled. |
| Preserve Execute Permissions | Boolean | For Linux and UNIX operating systems, enable this property to retain the execute permissions for each file. |
| Version Name Pattern | String | A pattern for each version name. You can use the ``${version}`` variable to include an automatically incremented version number. For example, the mycomp\_``${version}`` pattern produces versions such as mycomp\_1, mycomp\_2, and so on. This parameter is meaningful only if the Always Use Name Pattern property is enabled. |

## FileSystemImportProperties


| Name | Type | Description |
| --- | --- | --- |
| Version Description | String | The description for this version. |
| Version Name | String | The name for this version. |



|Back to ...||Latest Version|File System ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[13.1155763](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/FileSystemSourceConfig/ucd-FileSystemSourceConfig-13.1155763.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
