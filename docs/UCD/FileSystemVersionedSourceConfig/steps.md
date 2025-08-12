
# File System (Versioned) - Process Steps




## Process steps in the File System (Versioned) plug-in

* [Import Version](#import_version)


## Import Version

Description

This step has no input properties.


## Roles in the File System (Versioned) plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.


* [FileSystemVersionedComponentProperties](#filesystemversionedcomponentproperties_role)


## FileSystemVersionedComponentProperties


| Name | Type | Description |
| --- | --- | --- |
| Base Path | String | The path to the directory that contains the artifacts. The content of each subdirectory within the base directory is considered a distinct component version. The subdirectory with the most recent timestamp is considered to be the latest version. |
| Exclude Files | String | A list of files to exclude in the version upload. Separate each file with a comma or place on a separate line. |
| Include Files | String | A list of files to include in the version upload. Separate each file with a comma or newline character.The default setting is to uploads all files. You can use the asterisk or double-asterisk as wildcards to expand the number of files to upload. Specifying\*\*/\* uploads all files. |
| Preserve Execute Permissions | Boolean | For Linux and UNIX operating systems, enable this property to retain the execute permissions for each file. |
| Text File Extensions | String | A list of file extensions to convert into another character set. Separate each fle extension with a comma. Specify this property if you have text-type files that must be converted into another character set. Matching file types are converted into the default character set of the system where the agent is located. |


