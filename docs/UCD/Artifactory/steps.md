
# Artifactory - Process steps

* [Download Latest Build for SNAPSHOT](#download_latest_build_for_snapshot)
* [Download NuGet Package](#download_nuget_package)
* [Download version (Maven build)](#download_version_(maven_build))
* [Download version (non-Maven build)](#download_version_(non-maven_build))
* [Promote Build](#promote_build)
* [Retrieve Build Artifacts Archive](#retrieve_build_artifacts_archive)
* [Set Item Properties](#set_item_properties)


## Download Latest Build for SNAPSHOT

Retrieve the latest build artifact within a SNAPSHOT.


| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| Api Key | Password | The api key to authenticate with the Artifactory server. If using api key, username and password will be ignored. | No | apiKey |
| Identity token | Password | The Identity token to authenticate with the Artifactory server. If using Identity token, api key, username and password will be ignored. | No | identityKey |
| Artifactory Base URL | String | The base URL of the Artifactory server. For example: http://server.example.com:8081/artifactory | Yes | url |
| Artifactory Repository | String | The repository in Artifactory where the build artifact resides. For example: libs-snapshot-local | Yes | repo |
| Classifier | String | The classifier of the version snapshot, if any. | No | classifier |
| File Extension | String | The file extension of the build artifact. For example: jar | Yes | extension |
| Password | Password | The password to authenticate with the Artifactory server. | No | password |
| Repo Path | String | The path (group ID and artifact ID) of the build artifact. For example: org.jfrog.test/multi2 | Yes | repoPath |
| User Name | String | The user name to authenticate with the Artifactory server. | No | username |
| Version | String | The version of the build artifact. For example: 3.8-SNAPSHOT | Yes | version |

## Download NuGet Package

Download a NuGet package from a NuGet repository.


| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| Api Key | Password | The api key to authenticate with the Artifactory server. If using api key, username and password will be ignored. | No | apiKey |
| Identity token | Password | The Identity token to authenticate with the Artifactory server. If using Identity token, api key, username and password will be ignored. | No | identityKey |
| Artifactory Base URL | String | The base URL of the Artifactory server. For example: http://server.example.com:8081/artifactory | Yes | artifactoryUrl |
| Packages | String | A list of packages to download, separated by newline characters. Use the following format: repoPath/version | Yes | artifacts |
| Repository Password | Password | The password to authenticate with Artifactory. | No | password |
| Repository User name | String | The user name to authenticate with Artifactory. | No | username |
| Verify Hash | Boolean | Select to verify hash values after the files are downloaded. | No | checkHash |

## Download version (Maven build)

Download all files under a specified version of a repository that was built with Maven.


| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| Api Key | Password | The api key to authenticate with the Artifactory server. If using api key, username and password will be ignored. | No | apiKey |
| Identity token | Password | The Identity token to authenticate with the Artifactory server. If using Identity token, api key, username and password will be ignored. | No | identityKey |
| Artifactory Base URL | String | The base URL of the Artifactory server. For example: http://server.example.com:8081/artifactory | Yes | artifactoryUrl |
| Excludes | String | The patterns to use for excluding files to download. | No | excludes |
| Includes | String | The patterns to use for including files to download. The wildcard \*\* indicates every directory and the wildcard \* indicates every file. So the pattern dist/\*\*/\* would retrieve the entire file tree underneath the dist directory. | Yes | includes |
| Repository Password | Password | The password to authenticate with Artifactory. | No | password |
| Repository User name | String | The user name to authenticate with Artifactory. | No | username |
| Repository name | String | The name of the repository. | No | repositoryName |
| Verify Hash | Boolean | Select to verify hash values after the files are downloaded. | No | checkHash |
| Versions | String | A list of versions to download, separated by newline characters. Use the following format: groupId/artifactId/version | Yes | artifacts |

## Download version (non-Maven build)

Download all files under specified version of a repository (non-Maven).


| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| Api Key | Password | The api key to authenticate with the Artifactory server. If using api key, username and password will be ignored. | No | apiKey |
| Identity token | Password | The Identity token to authenticate with the Artifactory server. If using Identity token, api key, username and password will be ignored. | No | identityKey |
| Artifactory Base URL | String | The base URL of the Artifactory server. For example: http://server.example.com:8081/artifactory | Yes | artifactoryUrl |
| Download Recursively | Boolean | Select this box to download files and folders in subfolders of versions. Requires Artifactory Pro edition or higher. | No | recursive |
| Excludes | String | The patterns to use for excluding files to download. | No | excludes |
| Includes | String | The patterns to use for including files to download. The wildcard \*\* indicates every directory and the wildcard \* indicates every file. So the pattern dist/\*\*/\* would retrieve the entire file tree underneath the dist directory. | Yes | includes |
| Repository Password | Password | The password to authenticate with Artifactory. | No | password |
| Repository User name | String | The user name to authenticate with Artifactory. | No | username |
| Repository name | String | The name of the repository. | Yes | repositoryName |
| Verify Hash | Boolean | Select to verify hash values after the files are downloaded. | No | checkHash |
| Versions | String | A list of folders and subfolders to download, separated by newline characters. Use the following format: path/to/artifact/version | Yes | artifacts |

## Promote Build

Change the status of a build, optionally moving or copying the build to a target repository.


| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| Api Key | Password | The api key to authenticate with the Artifactory server. If using api key, no username and password can be specified. | No | apiKey |
| Identity token | Password | The Identity token to authenticate with the Artifactory server. If using Identity token, api key, username and password will be ignored. | No | identityKey |
| Artifactory Base URL | String | The base URL of the Artifactory server. For example: http://server.example.com:8081/artifactory | Yes | url |
| Build Name | String | The name of the build to promote. | Yes | buildName |
| Build Number | String | The number of the build to promote. | Yes | buildNumber |
| CI User | String | User that invoked promotion from the CI server. | No | buildUser |
| Comment | String | Comment to describe the reason for promotion. | No | buildComment |
| Copy | Boolean | Select to copy instead of move when a target repository is specified. | No | buildCopy |
| Include Artifacts | Boolean | Select to move or copy the build artifacts. | No | buildArtifact |
| Include Dependencies | Boolean | Select to move or copy the build dependencies. | No | buildDepend |
| Password | Password | The password to authenticate with the Artifactory server. | No | password |
| Properties | String | A newline separated list of name=value properties to set on the promotion. For example: tester=Adam Boe. Specify multiple values per name with commas (escape commas with backslash \ to avoid this). For example: osVersions=Windows,Linux | No | buildProps |
| Source Repository | String | The source repository that contains the build artifacts to copy or move. | Yes | buildSource |
| Status | String | New build status. | Yes | buildStatus |
| Target Repository | String | The target repository for the build artifacts and dependencies. | Yes | buildTarget |
| User Name | String | The user name to authenticate with the Artifactory server. | No | username |

## Retrieve Build Artifacts Archive

Retrieve an archive file that contains all the artifacts for a specific build.


| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| Api Key | Password | The API key to authenticate with the Artifactory server. If you enter an API key, you cannot specify a user name and password. | No | apiKey |
| Identity token | Password | The Identity token to authenticate with the Artifactory server. If using Identity token, api key, username and password will be ignored. | No | identityKey |
| Archive Type | Enumeration:
* zip
* tar
* tar.gz
* tgz
| Select the merge type of the archive file to return. | No | buildType |
| Artifactory Base URL | String | The base URL of the Artifactory server. For example: http://server.example.com:8081/artifactory | Yes | url |
| Build Name | String | The name of the build to download. | Yes | buildName |
| Build Number | String | Specify the build to download by number. Cannot be used with Build Status. | No | buildNumber |
| Password | Password | The password to authenticate with the Artifactory server. | No | password |
| Repositories | String | Specify the repository to search for the build in. Separate multiple repositories with commas. | No | buildRepos |
| Status | String | Specify the build to download by status. Cannot be used with Build Number. | No | buildStatus |
| User Name | String | The user name to authenticate with the Artifactory server. | No | username |

## Set Item Properties

Attach properties to a file or folder.


| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| Api Key | Password | The api key to authenticate with the Artifactory server. If using api key, username and password will be ignored. | No | apiKey |
| Identity token | Password | The Identity token to authenticate with the Artifactory server. If using Identity token, api key, username and password will be ignored. | No | identityKey |
| Artifact Path | String | The path to the artifact to set properties on. For example: libs-release-local/org/jfrog/multi1/2.7-SNAPSHOT | Yes | path |
| Artifactory Base URL | String | The base URL of the Artifactory server. For example: http://server.example.com:8081/artifactory | Yes | url |
| Password | Password | The password to authenticate with the Artifactory server. | No | password |
| Properties | String | Specify a list of properties to set. Place each entry on a separate line. Use the following format: key=value. Separate multiple values for a key with commas, and add a backslash (\) before the following special characters: comma (,), backslash(\), vertical bar (|), and equal sign (=). Do not use a backslash before the equal sign between the key and the value or before commas used to separate multiple values. For example: osVersions=Windows\=7\,10,Linux\=16.04 LTS\ | Yes | properties |
| Recursive | Boolean | Select to attach properties recursively if the Artifact Path is a directory. | No | recursive |
| User Name | String | The user name to authenticate with the Artifactory server. | No | username |



|Back to ...||Latest Version|Artifactory ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[26.1176841](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Artifactory/ucd-Artifactory-26.1176841.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
