# Roles	${p:component/AzureComponentProperties/localFolder}${p:component/AzureComponentProperties/tfExePath}	${p:component/AzureComponentProperties/saveFileExecuteBits}

The plugin adds these roles automatically to resources. You cannot add these roles manually.
- AzureComponentProperties
- AzureImportProperties
- Item

### AzureComponentProperties
| Name | Type | Description | Required |Property |
| ---- | ---- | ----------- | -------- | -------- |
| Collection URL | String | The URL of the AzureDevops collection, for example: `https://dev.azure.com/XXX.` | Yes | ${p:component/AzureComponentProperties/url} |
| Server Project Folder | String | The path variable to the project folder on Visual Studio Online or the Team Foundation Server server. By default, this variable is $/ followed by the name of the project. | Yes | ${p:component/AzureComponentProperties/serverFolder}|
| Path to tf.exe or tf.cmd | String | The full path to the tf.exe or tf.cmd file that comes with Visual Studio or Team Explorer Everywhere. If a value is not  			  	specified, the tf executable file must be available on the agent's PATH environment variable. | No | ${p:component/AzureComponentProperties/tfExePath} |
| User | String | The user name for the account that has access to the Azure DevOps Server. | No | ${p:component/AzureComponentProperties/username}|
| Password | secureBox | The password for the account that has access to the Azure DevOps Server. | No ||
| Workspace | String | The name of the Team Foundation Server or Azure DevOps Online workspace. To get a list of workspace names from the server, run the following command: TF workspaces /collection:Repository_URL /login:user,password.   For Azure DevOps Online, alternate authentication credentials must be enabled. | No | ${p:component/AzureComponentProperties/workspace}|
| Local Workspace Folder | String | The path to the local workspace folder of the computer with the agent. If the folder does not exist, it is created to the specified path. This value is only used if the Workspace property is specified. Otherwise, a temporary folder will be created in the agent's working directory. | No | ${p:component/AzureComponentProperties/localFolder} |
| Preserve execute permissions | checkBox | For Linux and UNIX operating systems, retain the execute permissions for each file. | No | ${p:component/AzureComponentProperties/saveFileExecuteBits}|
| Extensions of files to convert | String | If text-type files must be converted into another character set, type the list of file extensions to be converted. Matching file  types are converted into the default or system character set of the system where the agent is located. Separate list items with commas. | No | ${p:component/AzureComponentProperties/extensions} |


### AzureImportProperties
Properties for the AzureImportProperties role

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Changeset | String| The version integer of the Azure DevOps Server changeset to load. | No|
| Label | String | The name of the version label to load. | No |



