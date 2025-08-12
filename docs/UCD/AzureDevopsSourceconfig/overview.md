
# Azure DevOps - Overview


The plug-in adds these roles automatically to resources. You cannot add these roles manually.


* AzureComponentProperties

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Collection URL | String | The URL of the AzureDevops collection, for example: https://dev.azure.com/. | Yes |
| Extensions of files to convert | String | The list of file extensions to be converted, if text-type files must be converted into another character set. Matching file types are converted into the default or system character set of the system where the agent is located. Separate each list item with a comma. | No |
| Local Workspace Folder | String | The path to the local workspace folder of the computer with the agent. If the folder does not exist, it is created to the specified path. This value is only used if the Workspace property is specified. Otherwise, a temporary folder is created in the agent working directory. | Yes |
| Password | Password | The password for the account that has access to the Azure DevOps Server. | No |
| Path to tf.exe or tf.cmd | String | The full path to the Visual Studio or Team Explorer Everywhere tf.exe or tf.cmd file. If a value is not specified, the tf executable file must be available on the agent’s PATH environment variable. | No |
| Server Project Folder | String | The path variable to the project folder on Visual Studio Online or the Team Foundation server. The default is $/ followed by the name of the project. | No |
| User | String | The user name for the account that has access to the Azure DevOps Server. | No |
| Workspace | String | The name of the Team Foundation Server or Azure DevOps Online workspace. To get a list of workspace names from the server, run the following command: TF workspaces /collection:Repository_URL /login:user,password. For Azure DevOps Online, alternate authentication credentials must be enabled. | Yes |



* AzureImportProperties

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Changeset | String | The version integer of the Azure DevOps Server changeset to load. | No |
| Label | String | The name of the version label to load.	 | No |



## Compatibility


This plug-in requires IBM DevOps Deploy version 6.0.1 or later.


## Installation

No special steps are required for installation. See [Installing plug-ins in IBM DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 1.11125015

* Initial release.
