
# Nexus - Process Steps

* [Download NuGet package](#download_nuget_package)


## Download NuGet package

Download a NuGet package from a Nexus repository.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Nexus Url | String | The base URL of the Nexus repository. For example: `http://localhost:8081/nexus` | Yes |
| Packages | String | A list of packages to download, separated by newline characters. Use the following format: repositoryName/packageID/packageVersion | Yes |
| Repository Password | Password | The password to authenticate with Nexus. | No |
| Repository Username | String | The user name to authenticate with Nexus. | No |


