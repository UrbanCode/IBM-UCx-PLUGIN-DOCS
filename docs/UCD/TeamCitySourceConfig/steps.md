
# TeamCity

- [TeamCity](#teamcity)
  - [Process Steps](#process-steps)
    - [Import Version](#import-version)
    - [Roles in the TeamCity plug-in](#roles-in-the-teamcity-plug-in)
    - [TeamCityComponentProperties](#teamcitycomponentproperties)
    - [TeamCityImportProperties](#teamcityimportproperties)

## Process Steps

- [Import Version](#import-version)

### Import Version

Create a new component version and imports artifacts from TeamCity.

This step has no input properties.

### Roles in the TeamCity plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.

### TeamCityComponentProperties

| Name | Type | Description | Property Reference |
| --- | --- | --- | --- |
| Branch | String | The TeamCity branch name to limit build imports by branch. If avalue is not specified, artifacts are retrieved from the projects default branchdefined in TeamCity. Specifying a value of default:any imports all builds fromall TeamCity branches. | ``${p:component/TeamCityComponentProperties/branch}`` |
| Build configuration ID | String | The build configuration ID in TeamCity. In TeamCity versions earlierthan version 8.0, the build configuration IDs typically have the prefix bt. You mustinclude the prefix when you specify the build configuration ID, for example: bt256. In TeamCity versions 8.0 and later, the build configuration IDs do not include the prefix. For these versions, specify the build configuration ID as it is displayed inTeamCity. This field in previous plug-in versions is called the Build Type ID. | ``${p:component/TeamCityComponentProperties/buildType}`` |
| Extensions of files to Convert | String | A list of text file extension to convert to a new charset when imported. Separate each item with a comma, for example: txt,properties,log. | ``${p:component/TeamCityComponentProperties/extensions}`` |
| Password | Password | The password associated with the user name to access the TeamCity server. | ``${p:component/TeamCityComponentProperties/password}`` |
| Preserve Execute Permissions | Boolean | For Linux and UNIX operating systems, retain the execute permissions for each file. | ``${p:component/TeamCityComponentProperties/saveFileExecuteBits}`` |
| Repository URL | String | The base URL of the repository on the TeamCity server. | ``${p:component/TeamCityComponentProperties/repoUrl}`` |
| User | String | The user name for the account used to access the TeamCity server. | ``${p:component/TeamCityComponentProperties/user}`` |

### TeamCityImportProperties

| Name | Type | Description | Reference |
| --- | --- | --- | --- |
| The build ID for the target build. | String |  |  |
| The name of the version. | String |  |  |

|Back to ...||Latest Version|TeamCity ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[20.1153959](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/TeamCitySourceConfig/ucd-TeamCitySourceConfig-20.1153959.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
