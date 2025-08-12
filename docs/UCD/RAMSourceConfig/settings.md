
IBM Rational Asset Manager for IBM DevOps Deploy - Settings
==============================================================

# Settings


## Settings




## Process steps in the Rational Asset Manager plug-in

* [Import Version](#import_version)


## Import Version

Creates a new component version and imports artifacts

This step has no input properties.


## Roles in the Rational Asset Manager plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.


* [RAMComponentProperties](#ramcomponentproperties_role)
* [RAMImportProperties](#ramimportproperties_role)


## RAMComponentProperties


| Name | Type | Description |
| --- | --- | --- |
| Charset | String | The character set to convert files types listed in the Extensions of files to Convert property.If this property is not specified, the default or system character set of the system where the agent is located is used. |
| Extensions of files to Convert | String | A list of file extensions to convert into another character set. Separate each file extenstion with a comma. Specify this property if you have text-type files that must be converted into another character set. Matching file types are converted into the default character set of the system where the agent is located. |
| Include Dependent | Boolean | Import related assets that the asset depends on. |
| Latest Build Count | String | The number of the search results to load. The default is to load only the most applicable results. To load more than one version or state of the asset, specify a number to load. |
| Password | Password |  |
| Preserve Execute Permissions | Boolean | For Linux and UNIX operating systems, retain the execute permissions for each file. |
| Query | String | The query to use to select an asset to load. Use this field to specify an asset with a complex query. |
| Repository URL | String | The location of the Rational Asset Manager repository. To find the repository URL, log on to Rational Asset Manager from a web browser. Click Help > Extensions. The repository URL is displayed in the Repository location field. |
| State | String | The state of the Rational Asset Manager asset to load as a component source. States are defined in lifecycles in Rational Asset Manager. Specify a value to limit the component to only assets with the specified state. |
| Unique ID | String |  |
| User | String |  |
| Version Pattern | String | A regular expression that represents the version of the Rational Asset Manager asset to load as a component source. If set, only versions with names matching the regular expression are imported. For example, (1\.[0-9]+).\* matches versions such as 1.2 and 1.2.3.4A. If the expression matches more than one version, all versions are imported, up to the number in the Latest Build Count field. |

## RAMImportProperties


| Name | Type | Description |
| --- | --- | --- |
| Specific version | String |  |



|Back to ...||Latest Version|IBM Rational Asset Manager for IBM DevOps Deploy ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[14.1153919](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/RAMSourceConfig/ucd-RAMSourceConfig-14.1153919.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
