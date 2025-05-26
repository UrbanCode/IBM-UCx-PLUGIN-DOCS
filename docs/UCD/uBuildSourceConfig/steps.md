
# IBM DevOps Build - Process Steps

* [Import Version](#import_version)


## Import Version

Create a new component version and import artifacts.

This step has no input properties.


## Roles in the uBuild plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.


* [uBuildComponentProperties](#ubuildcomponentproperties_role)


## uBuildComponentProperties


| Name | Type | Description |
| --- | --- | --- |
| Artifact Sets | String | If Copy to CodeStation is enabled, type the list of artifact sets to resolve in the CodeStation. Place each list item on a new line. |
| Build Process | String | The workflow name in DevOps Build to import builds from. |
| Extensions of files to Convert | String | If text-type files must be converted into another character set, type the list of file extensions to be converted. Matching file types are converted into the default or system character set of the system where the agent is located. Separate list items with commas. |
| Password | Password |  |
| Preserve execute permissions | Boolean | For Linux and UNIX operating systems, select this check box to retain the execute permissions for each file. |
| Project | String | The name of the DevOps Build project. Projects correspond to DevOps Deploy components. |
| Status | String | The status that build lives must have before they can be imported. Only build lives with the specified status are imported. |
| DevOps Build Url | String | The URL of the DevOps Build server. |
| User | String |  |



|Back to ...||Latest Version|IBM DevOps Build ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[16.1176344](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/uBuildSourceConfig/ucd-uBuildSourceConfig-16.1176344.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
