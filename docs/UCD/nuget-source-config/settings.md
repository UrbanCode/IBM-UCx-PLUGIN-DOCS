
# NuGet - Settings


## Process steps in the NuGet plug-in

* [Import Version](#import_version)


## Import Version

Create a new component version and import artifacts from a NuGet repository.

This step has no input properties.


## Roles in the NuGet plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.

* [NuGetComponentProperties](#nugetcomponentproperties_role)
* [NuGetImportProperties](#nugetimportproperties_role)


## NuGetComponentProperties


| Name | Type | Description |
| --- | --- | --- |
| Convert File Charset | Boolean | Select to convert the .nupkg artifact to a new charset during the import. |
| Include prerelease packages | Boolean | Select to include prerelease packages during the import. |
| NuGet URL | String | The fully-qualified URL of the NuGet repository. If you are retrieving a public NuGet package, use default value which is https://api-v2v3search-0.nuget.org. The URL format is different for the NuGet v2 and v3 servers. For v2 use the format: https://[server\_ip or domain\_name]/artifactory/api/nuget/nuget-hosted. For v3 use the format: https://[server\_ip or domain\_name]/artifactory/api/nuget/v3/nuget-hosted. |
| Package Name | String | The name of the NuGet package to import. |
| Password | Password | The password associated with the user name used to authenticate with the NuGet repository. |
| Preserve Execute Permissions | Boolean | Select to save file execute permissions with files. |
| Proxy Host | String | If you authenticate through a proxy, specify the name of the host. |
| Proxy Password | Password | If a proxy is protected, specify the password associated with authorized user name. |
| Proxy Port | String | If you authenticate through a proxy, specify the port number. |
| Proxy User | String | If a proxy is protected, specify an authorized user name. |
| Trust All Certificates | Boolean | Select to accept all SSL certificates when authenticating with the NuGet repository. |
| User | String | The user name used to authenticate with the NuGet repository. |

## NuGetImportProperties


| Name | Type | Description |
| --- | --- | --- |
| NuGet Version | String | The version of the NuGet artifacts to import. |
| Rename Version | String | If a version is specified on the NuGet Version property, replace the version with the value specified in this property for the imported artifacts. |
| Version Description | String | An optional description to add to the versions that are imported into DevOps Deploy. |


