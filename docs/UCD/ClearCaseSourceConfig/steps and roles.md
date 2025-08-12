
# IBM Rational ClearCase - Process Steps and Roles

## Process steps in the ClearCase plug-in

* [Import Version](#import_version)


## Import Version

Import a new version from ClearCase

This step has no input properties.


## Roles in the ClearCase plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.


* [ClearCaseUCMComponentProperties](#clearcaseucmcomponentproperties_role)
* [ClearCaseUCMImportProperties](#clearcaseucmimportproperties_role)


## ClearCaseUCMComponentProperties


| Name | Type | Description |
| --- | --- | --- |
| Clear Tool Path | String | The location of the Clear Tool executable file. Use this property if the executable file is not included on the PATH statement. |
| Excludes | String | A list of file patterns to exclude in the component. Place each pattern on a separate line. |
| Extensions of files to Convert | String | A list of file extensions to convert into another character set. Separate each file extension with a comma. Specify this property if you have text-type files that must be converted into another character set. Matching file types are converted into the default character set of the system where the agent is located. |
| Includes | String | A list of file patterns to include in the component. Place each pattern on a separate line. |
| Path to location inside the View | String | The base directory from which files are imported. For a Snapshot View, this is the portion of the Snapshot View that is updated before importing the files. |
| Preserve Execute Permissions | Boolean | For Linux and UNIX operating systems, retain the execute permissions for each file. |
| Snapshot View | Boolean | The connection is to a Snapshot View. |

## ClearCaseUCMImportProperties


| Name | Type | Description |
| --- | --- | --- |
| Name | String | The name for the version being created. |


