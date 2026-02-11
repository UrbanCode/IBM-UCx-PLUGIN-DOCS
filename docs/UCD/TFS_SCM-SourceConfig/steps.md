# Process Steps

## Import Version

Import a new version from TFS_SCM

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Collection URL | textBox | The URL of the Team Foundation Server (TFS) or Visual Studio Online (VSO) collection, for example: `https://{username}.visualstudio.com/DefaultCollection.` | Yes |
| Server Project Folder | textBox | The path variable to the project folder on Visual Studio Online or the Team Foundation Server server.  			  	By default, this variable is $/ followed by the name of the project. | Yes |
| Path to tf.exe or tf.cmd | textBox | The full path to the tf.exe or tf.cmd file that comes with Visual Studio or Team Explorer Everywhere. If a value is not  			  	specified, the tf executable file must be available on the agent's PATH environment variable. | No |
| User | textBox | The user name for the account that has access to the Team Foundation Server or Visual Studio Online repository. | No |
| Password | secureBox | The password for the account that has access to the Team Foundation Server or Visual Studio Online repository. | No |
| Workspace | textBox | TThe name of the Team Foundation Server or Visual Studio Online workspace. To get a list of workspace names  				  from the server, run the following command: TF workspaces /server:Repository_URL /login:user,password.  				  For Visual Studio Online, alternate authentication credentials must be enabled. | No |
| Local Workspace Folder | textBox | The path to the local workspace folder of the computer with the agent. If the folder does not exist, it is  				  created to the specified path. This value is only used if the Workspace property is specified.  				  Otherwise, a temporary folder will be created in the agent's working directory. | No |
| Preserve execute permissions | checkBox | For Linux and UNIX operating systems, retain the execute permissions for each file. | No |
| Extensions of files to convert | textBox | If text-type files must be converted into another character  				  set, type the list of file extensions to be converted. Matching file  				  types are converted into the default or system character set of the  				  system where the agent is located. Separate list items with commas. | No |
| Label | textBox | Optional: The name of the version label to load. | No |
| Changeset | textBox | Optional: The version integer of the Team Foundation Server changeset to load. | No |

