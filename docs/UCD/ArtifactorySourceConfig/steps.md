
# Process Steps

## Import Version

Creates a new component version and imports artifacts from Artifactory.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Artifactory URL | textBox | Base URL for the Artifactory server. | Yes |
| Repository | textBox | Name of the repository to fetch versions from. | Yes |
| User | textBox |  | No |
| Password | secureBox |  | No |
| Api Key | secureBox | The api key to authenticate with the Artifactory server. If using api key, username and password will be ignored. | No |
| Identity token | secureBox | The Identity token to authenticate with the Artifactory server. If using Identity token, api key, username and password will be ignored. | No |
| Repo Path | textBox | This value will override 'Group ID' and 'Artifact ID' fields. Path to the versions to be imported. For Maven repositories, format should be 'groupId/artifactId'.  For generic paths, 'path/to/versions'. | No |
| Group ID | textBox | Artifact group ID. | No |
| Artifact ID | textBox | Artifact ID. | No |
| Include Files | textAreaBox | Files included in the version upload. The default setting                              of **/* uploads all files. Separate files with commas or newline characters.                              To specify an extension (ex. zip), use *.zip | Yes |
| Exclude Files | textAreaBox | Files excluded in the version upload. Separate files with                              commas or newline characters. | No |
| Download Recursively | checkBox | Select this box to download files and folders in subfolders of versions. Requires Artifactory Pro edition or higher. | No |
| Verify Hash | checkBox | Select to verify hash values after the files are downloaded. | No |
| Add Property as Status | textBox | Artifactory properties to be set as component version statuses on the imported version.                              If the property does not exist in Artifactory, or the status does not exist in Deploy, it will be skipped.                              Multiple properties can be set as statuses with a comma ',' delimited list. | No |
| Add Property as Link | textBox | Artifactory properties to be set as component version links on the imported version.                              If the property does not exist in Artifactory, it will be skipped.                              Multiple properties can be set as links with a comma ',' delimited list. | No |
| Unzip Archived Files | checkBox | Select this box to unzip archived files before upload as component version files. | No |
| Latest Version Count | textBox | The number of most recent versions of the component in Artifactory to import. | No |
| Version Name Pattern | textBox | If set, only the versions with names matching this regular expression will be imported.                              For each group matching the first capturing group, the requested number of latest builds                              are loaded into IBM UrbanCode Deploy. Use this property only when tracking older branches                              that contain new builds.                              Example: To return n versions of each 1.0.*, 1.1.*, 1.2.*, and so on, use the following regular expression: (1.[0-9]+).* | No |
| Preserve Execute Permissions | checkBox | Select to save file execute permissions with files. | No |
| Extensions of Files to Convert | textBox | A list, separated by commas, of extensions that specify files which must be                              converted to a new Character set when downloaded. | No |
| File Extension | textBox | Extension field for files to retrieve from Artifactory when using the Download Latest Step for SNAPSHOT step.                              For version imports, use Includes / Excludes fields. | No |
| Allow Insecure Connection | checkBox | Select this option to allow insecure connections to the Artifactory repository. | No |
| Apply KeyStore | checkBox | Select this option to add keystore. | No |
| HTTP Proxy Host | textBox | Provide the hostname of the HTTP proxy to use to connect to Artifactory. Eg proxy.domain.com | No |
| HTTP Proxy Port | textBox | Provide the port number of the HTTP proxy to use to connect to Artifactory. | No |
| HTTP Proxy User name | textBox | Provide the user name to authenticate with HTTP proxy. | No |
| HTTP Proxy Password | secureBox | Provide the password to authenticate with HTTP proxy. | No |
| Specific version | textBox | If set, only the versions with names matching this regular expression are imported.                              For each group matching the first capturing group, the desired number of latest builds                              are loaded into IBM UrbanCode Deploy. If Version Name Pattern is set in the plug-in configuration, versions specified                              by the version name pattern are filtered out before this regular expression is used as a filter.                              Example: To return n versions of each 1.0.*, 1.1.*, 1.2.*, and so on, use the following regular expression: (1.[0-9]+).* | No |
| Version Description | textBox | An optional description to add to the versions that are                                  imported into UrbanCode Deploy. | No |

