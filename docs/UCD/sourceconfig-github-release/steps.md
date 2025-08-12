
# GitHub-Release - Process Steps

* [Import Version](#import_version)


## Import Version

Creates a new component version and downloads the archive to the CodeStation.

This step has no input properties.


## Roles in the GitHub Release plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.


* [GitHubReleaseComponentProperties](#githubreleasecomponentproperties_role)
* [GitHubReleaseImportProperties](#githubreleaseimportproperties_role)


## GitHubReleaseComponentProperties


| Name | Type | Description |
| --- | --- | --- |
| Download Tarball | Boolean | Select to download a tarball of the source code. |
| Download Zipball | Boolean | Select to download a zipball of the source code. |
| Extensions of files to Convert | String | A list of file extension to be converted to a new Charset when downloaded. Separate each item with a comma. For example: zip,tar.gz. |
| GitHub Repository URL | String | The base URL of the repository on the GitHub. For example:https://api.github.com/repos/ibm-datapower/datapower-configuration-manager. |
| Password | Password | The password to use to connnect to the GitHub Repository. |
| Preserve Execute Permissions | Boolean | For Linux and UNIX operating systems, select this property to retain the execute permissions of each file. |
| User | String | The username to use to connect to the GitHub repository, if authentication is required. |

## GitHubReleaseImportProperties


| Name | Type | Description |
| --- | --- | --- |
| GitHub Release Tag Name | String | Import the GitHub tag name. For example:20. |



|Back to ...||Latest Version|GitHub-Release |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[5.1154619](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/sourceconfig-github-release/ucd-GitHubReleaseSourceConfig-5.1154619.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
