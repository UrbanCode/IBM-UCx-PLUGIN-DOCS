# GitLab Generic Packages - Process Steps

* [GitLab Generic Packages Component Properties](#comp-prop)


## GitLab Generic Packages Component Properties

Create versions and import packaged files from GitLab.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Server URL | String | The Base URL and port for the GitLab server. | Yes |
| Access Token | String | The access token to use to authenticate with the GitLab server. | No |
| Project Id | String | The project ID in GitLab. | Yes |
| Package Name | Boolean | The exact name of package that must match to import a specific package. | Yes |
| Version Name Pattern | String | If a regular expression is added then only the versions matching to that pattern will get imported.Example: To return n versions of each 1.0.*, 1.1.*, 1.2.*, and so on, use the following regular expression. | No |
| Unzip Archived Files | Check Box | If selected files will be extracted to folder named same as the file name without extension. (Only files with extensions .zip and .jar are valid). | No |
| Verify Hash | Check Box | Select to verify hash values after the files are downloaded. | No |
| Status | String | The package status. | No |
| File Includes | String | A list of file patterns to include in the component. Separate each pattern with a new line or comma. To include all files, leave blank or type **/*. | No |
| File Excludes | String | A list of file patterns to exclude from the component. Separate each pattern with a new line or comma. | No |
| Extensions of files to Convert | String | If text-type files must be converted into another character set, type the list of file extensions to be converted. Matching file types are converted into the default or system character set of the system where the agent is located. Separate list items with commas. | No |
| Log4j Logging Level | Boolean | Configure the level of Log4j messages to output to the console. Specify the logging level as ALL, TRACE, DEBUG, INFO, WARN, ERROR, FATAL, or OFF. | No |



|          Back to ...          | |         Latest Version         |GitLab Generic Packages|||
|:-----------------------------:|:------------------------------:| :---: | :---: | :---: | :---: |
| [All Plugins](../../index.md) | [Deploy Plugins](../README.md) |[3.1158910](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/gitlab-sourceconfig-generic-packages/ucd-plugins-sourceconfig-gitlab-generic-packages-3.1158910.zip)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
