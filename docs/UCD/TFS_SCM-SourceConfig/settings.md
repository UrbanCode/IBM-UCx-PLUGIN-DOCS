
# Microsoft TFS_SCM (Team Foundation Server) - Settings

* [Import Version](#import_version)


## Import Version

Import a new version from TFS\_SCM

This step has no input properties.


## Roles in the TFS\_SCM plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.


* [TFS\_SCMComponentProperties](#tfs_scmcomponentproperties_role)
* [TFS\_SCMImportProperties](#tfs_scmimportproperties_role)


## TFS\_SCMComponentProperties


| Name | Type | Description |
| --- | --- | --- |
| Collection URL | String | The URL of the Team Foundation Server (TFS) or Visual Studio Online (VSO) collection, for example: https://{username}``.visualstudio.com/DefaultCollection. |
| Extensions of files to convert | String | If text-type files must be converted into another character set, type the list of file extensions to be converted. Matching file types are converted into the default or system character set of the system where the agent is located. Separate list items with commas. |
| Local Workspace Folder | String | The path to the local workspace folder of the computer with the agent. If the folder does not exist, it is created to the specified path. This value is only used if the Workspace property is specified. Otherwise, a temporary folder will be created in the agents working directory. |
| Password | Password | The password for the account that has access to the Team Foundation Server or Visual Studio Online repository. |
| Path to tf.exe or tf.cmd | String | The full path to the tf.exe or tf.cmd file that comes with Visual Studio or Team Explorer Everywhere. If a value is not specified, the tf executable file must be available on the agent PATH statement. |
| Preserve execute permissions | Boolean | For Linux and UNIX operating systems, retain the execute permissions for each file. |
| Server Project Folder | String | The path variable to the project folder on Visual Studio Online or the Team Foundation Server server.By default, this variable is $/ followed by the name of the project. |
| User | String | The user name for the account that has access to the Team Foundation Server or Visual Studio Online repository. |
| Workspace | String | TThe name of the Team Foundation Server or Visual Studio Online workspace. To get a list of workspace namesfrom the server, run the following command: TF workspaces /server:Repository\_URL /login:user,password.For Visual Studio Online, alternate authentication credentials must be enabled. |

## TFS\_SCMImportProperties


| Name | Type | Description |
| --- | --- | --- |
| Changeset | String | Optional: The version integer of the Team Foundation Server changeset to load. |
| Label | String | Optional: The name of the version label to load. |


