
# Artifactory Source Config - Roles

The following roles are added automatically to resources. You cannot add these roles manually.

* [ArtifactoryComponentProperties](#artifactorycomponentproperties_role)
* [ArtifactoryImportProperties](#artifactoryimportproperties_role)


## ArtifactoryComponentProperties

| Name | Type | Description | Reference |
| --- | --- | --- | --- |
| Add Property as Link | String | Artifactory properties to be set as component version links on the imported version. If the property does not exist in Artifactory, it will be skipped. Multiple properties can be set as links with a comma ‘,’ delimited list. | ``${p:component/ArtifactoryComponentProperties/links}`` |
| Add Property as Status | String | Artifactory properties to be set as component version statuses on the imported version. If the property does not exist in Artifactory, or the status does not exist in Deploy, it will be skipped. Multiple properties can be set as statuses with a comma ‘,’ delimited list. | ``${p:component/ArtifactoryComponentProperties/statuses}`` |
| Allow Insecure Connection | Boolean | Select this option to allow insecure connections to the Artifactory repository. | ``${p:component/ArtifactoryComponentProperties/allowInsecure}`` |
| Api Key | Password | The api key to authenticate with the Artifactory server. If using api key, username and password will be ignored. | ``${p:component/ArtifactoryComponentProperties/apiKey}`` |
| Identity token | Password | The Identity token to authenticate with the Artifactory server. If using Identity token , api key, username and password will be ignored. | ``${p:component/ArtifactoryComponentProperties/identityToken}`` |
| Artifact ID | String | Artifact ID. | ``${p:component/ArtifactoryComponentProperties/artifactId}`` |
| Artifactory URL | String | Base URL for the Artifactory server. | ``${p:component/ArtifactoryComponentProperties/repoUrl}`` |
| Download Recursively | Boolean | Select this box to download files and folders in subfolders of versions. Requires Artifactory Pro edition or higher. | ``${p:component/ArtifactoryComponentProperties/recursive}`` |
| Exclude Files | String | Files excluded in the version upload. Separate files with commas or newline characters. | ``${p:component/ArtifactoryComponentProperties/excludes}`` |
| Extensions of Files to Convert | String | A list, separated by commas, of extensions that specify files which must be converted to a new Character set when downloaded. | ``${p:component/ArtifactoryComponentProperties/extensions}`` |
| File Extension | String | Extension field for files to retrieve from Artifactory when using the Download Latest Step for SNAPSHOT step. For version imports, use Includes / Excludes fields. | ``${p:component/ArtifactoryComponentProperties/extension}`` |
| Group ID | String | Artifact group ID. | ``${p:component/ArtifactoryComponentProperties/groupId}`` |
| HTTP Proxy Host | String | Provide the hostname of the HTTP proxy to use to connect to Artifactory. Eg proxy.domain.com | ``${p:component/ArtifactoryComponentProperties/proxyHost}`` |
| HTTP Proxy Password | Password | Provide the password to authenticate with HTTP proxy. | ``${p:component/ArtifactoryComponentProperties/proxyPass}`` |
| HTTP Proxy Port | String | Provide the port number of the HTTP proxy to use to connect to Artifactory. | ``${p:component/ArtifactoryComponentProperties/proxyPort}`` |
| HTTP Proxy User name | String | Provide the user name to authenticate with HTTP proxy. | ``${p:component/ArtifactoryComponentProperties/proxyUser}`` |
| Include Files | String | Files included in the version upload. The default setting of \*\*/\* uploads all files. Separate files with commas or newline characters. To specify an extension (ex. zip), use \*.zip | ``${p:component/ArtifactoryComponentProperties/includes}`` |
| Latest Version Count | String | The number of most recent versions of the component in Artifactory to import. | ``${p:component/ArtifactoryComponentProperties/copyCount}`` |
| Password | Password |  | ``${p:component/ArtifactoryComponentProperties/password}`` |
| Preserve Execute Permissions | Boolean | Select to save file execute permissions with files. | ``${p:component/ArtifactoryComponentProperties/saveFileExecuteBits}`` |
| Repo Path | String | This value will override ‘Group ID’ and ‘Artifact ID’ fields. Path to the versions to be imported. For Maven repositories, format should be ‘groupId/artifactId’. For generic paths, ‘path/to/versions’. | ``${p:component/ArtifactoryComponentProperties/repoPath}`` |
| Repository | String | Name of the repository to fetch versions from. | ``${p:component/ArtifactoryComponentProperties/repoName}`` |
| Unzip Archived Files | Boolean | Select this box to unzip archived files before upload as component version files. | ``${p:component/ArtifactoryComponentProperties/unzipArchive}`` |
| User | String |  | ``${p:component/ArtifactoryComponentProperties/user}`` |
| Verify Hash | Boolean | Select to verify hash values after the files are downloaded. | ``${p:component/ArtifactoryComponentProperties/checkHash}`` |
| Version Name Pattern | String | If set, only the versions with names matching this regular expression will be imported. For each group matching the first capturing group, the requested number of latest builds are loaded into IBM DevOps Deploy. Use this property only when tracking older branches that contain new builds. Example: To return n versions of each 1.0.\*, 1.1.\*, 1.2.\*, and so on, use the following regular expression: (1.[0-9]+).\* | ``${p:component/ArtifactoryComponentProperties/versionPattern}`` |



## ArtifactoryImportProperties


| Name | Type | Description | Reference |
| --- | --- | --- | --- |
| Specific version | String | If set, only the versions with names matching this regular expression are imported. For each group matching the first capturing group, the desired number of latest builds are loaded into IBM DevOps Deploy. If Version Name Pattern is set in the plug-in configuration, versions specified by the version name pattern are filtered out before this regular expression is used as a filter. Example: To return n versions of each 1.0.\*, 1.1.\*, 1.2.\*, and so on, use the following regular expression: (1.[0-9]+).\* |  |
| Version Description | String | An optional description to add to the versions that are imported into DevOps Deploy. |  |


