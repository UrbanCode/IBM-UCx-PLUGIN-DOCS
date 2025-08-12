
# Subversion - Process Steps

* [Import Version](#import_version)


## Import Version

Import artifacts from a subversion repository.

This step has no input properties.


## Roles in the Subversion plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.


* [SubversionComponentProperties](#subversioncomponentproperties_role)
* [SubversionImportProperties](#subversionimportproperties_role)


## SubversionComponentProperties


| Name | Type | Description |
| --- | --- | --- |
| Excludes | String | A list of name patterns used to match files to exclude when importing artifacts. List each pattern on a separate line. You can use the single (\*) and double asterisks (\*\*) wildcards to broaden your pattern.The double asterisks (\*\*) indicates every directory and the single-asterisk (\*) wildcard indicates every file. |
| Extensions of files to Convert | String | A list of file extensions to convert into another character set. Separate each file extenstion with a comma. Specify this property if you have text-type files that must be converted into another character set. Matching file types are converted into the default character set of the system where the agent is located. |
| Includes | String | A list of name patterns used to match files to include when importing artifacts. List each pattern on a separate line. You can use the single (\*) and double asterisks (\*\*) wildcards to broaden your pattern.The double asterisks (\*\*) indicates every directory and the single-asterisk (\*) wildcard indicates every file. |
| Password | Password | The password associated with the user name to authenticate with the subversion repository. |
| Preserve Execute Permissions | Boolean | For Linux and UNIX operating systems, retain the execute permissions of each file. |
| Proxy Hostname | String | The hostname of the proxy server if you are connecting to a Subversion repository through a proxy. For example: 8.8.8.8. |
| Proxy Password | Password | The password associated with the user name to authenticate with the proxy server if authentication is required. |
| Proxy Port Number | String | The port number used by the proxy server for client connections. For example: 80. |
| Proxy Username | String | The user name use to authenticate with the proxy server if authentication is required. |
| Repository URL | String | The location of the Subversion repository. |
| SVN Path | String | The path to the svn executable file on the DevOps Deploy server. If you added the executable file to the system PATH variable, you can specify the name of the executable file, such as svn. If you have not added the executable file to the system PATH variable, specify the complete path, such as /usr/bin/svn. |
| User | String | The user name use to authenticate with the subversion repository. |
| Watch for tags | Boolean | Use tags as the basis for new component versions. |

## SubversionImportProperties


| Name | Type | Description |
| --- | --- | --- |
| Specific version/tag | String |  |



|Back to ...||Latest Version|Subversion ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[26.1159798](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/SubversionSourceConfig/ucd-SubversionSourceConfig-26.1159798.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
