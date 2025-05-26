
# Maven - Process Steps

* [Import Version](#import_version)


## Import Version

Creates a new component version and imports artifacts

This step has no input properties.


## Roles in the Maven plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.


* [MavenComponentProperties](#mavencomponentproperties_role)
* [MavenImportProperties](#mavenimportproperties_role)


## MavenComponentProperties


| Name | Type | Description |
| --- | --- | --- |
| Artifact ID | String | Name of the artifactID as defined in the Maven pom.xml file. The artifact ID is the name of the unversioned jar file. |
| Extensions of files to Convert | String | If text-type files must be converted into another character set, type the list of file extensions to be converted. Matching file types are converted into the default or system character set of the system where the agent is located. Separate list items with commas. |
| File Extensions | String | The file extension for the file type to import. Separate multiple extensions with comma (,) character. |
| Group ID | String | The name of the groupID as defined in the Maven pom.xml file. The group ID identifies the project. |
| HTTP Proxy Host | String | Optional HTTP proxy host. |
| HTTP Proxy Password | Password | Optional HTTP proxy password. |
| HTTP Proxy Port | String | Optional HTTP proxy port. Must be supplied if the HTTP Proxy Host is specified. |
| HTTP Proxy Username | String | Optional HTTP proxy user name. |
| Latest Build Count | String | The number of the builds to import. The default value is 1. |
| Maven Qualifier | String | The optional qualifier is appended to the file name after the version number. Leave blank if not applicable. |
| Password | Password | The password for the Maven-credentialed user. |
| Preserve Execute Permissions | Boolean | For Linux and UNIX operating systems, select this check box to retain the execute permissions for each file. |
| Repository URL | String | Base URL for the Maven repository. |
| User | String | The user name for the Maven-credentialed user. |
| Version Name Pattern | String | The range of build versions to import. Versions are defined by regular expressions. For example, to import all 1.1.\*, and 1.2.\* versions, you might type (1.[0-9]+).\*. A number of versions that is equal to the value in the Latest Build Count field is imported for each matching version. This property is only necessary when tracking older branches. |

## MavenImportProperties


| Name | Type | Description |
| --- | --- | --- |
| Snapshot version suffix | String | Optional: When above is a SNAPSHOT string to fetch a specific SNAPSHOT (e.g. 20181224.151710-4), leave blank to default to the latest snapshot |
| Specific version | String | Optional: The maven version or SNAPSHOT string to import (e.g. 1.0.1 or 1.0-SNAPSHOT), leave blank for LATEST |
| Translate Snapshot | Boolean | Select this check box to translate snapshot version to latest datetime string. |
| Version Description | String | An optional description to add to the versions that are imported into DevOps Deploy. |



|Back to ...||Latest Version|Maven ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[30.1167665](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/MavenSourceConfig/ucd-MavenSourceConfig-30.1167665.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
