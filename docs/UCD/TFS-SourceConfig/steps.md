
# Process Steps

## Import Version

Import a new version from Team Foundation Server.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| TFS URL | textBox | The URL of the TFS server. | Yes |
| TFS Username | textBox | The user name for the account that has access to TFS.                              Specify a user name to use different credentials than those                              used for the UrbanCode Deploy process. | No |
| TFS Password | secureBox | Specify a password for the user. | No |
| TFS Team Project | textBox | The name of the TFS team project where the build definition is stored. | Yes |
| Build Definition(s) | textAreaBox | The names of the build definitions to monitor for new builds. Separate each definition with a newline. | Yes |
| Prepend Build Definition to Version | checkBox | Select to add the build definition name as a prefix to the version name. | Yes |
| Build Status | selectBox | Select the status that a build must have before it can be                              imported. Only builds with this status are imported. | Yes |
| Build Quality | textBox | To limit imports to builds with a specific build quality                              (or build rating), type the rating. | No |
| Directory Offset | textBox | The offset is relative to the base directory of the build                              artifacts. | No |
| File Includes | textAreaBox | A list of file patterns to include in the component.                              Separate each pattern with a newline. To include all files,                              leave blank or type **/*. | No |
| File Excludes | textAreaBox | A list of file patterns to exclude from the component.                              Separate each pattern with a newline. | No |
| Text File Extensions | textBox | If text-type files must be converted into another character                            set, type the list of file extensions to be converted. Matching file                            types are converted into the default or system character set of the                            system where the agent is located. | No |
| Preserve Execute Permissions | checkBox | For Linux and UNIX operating systems, select this check                              box to retain the execute permissions for each file. | No |
| Build Definition | textBox | Provide the build definition to import a specific build along with the Build Number or Build URI. | No |
| Build Number | textBox | Provide a build number to import a specific build. You must also specify the build definition in the Build Defintion testbox above. | No |
| Build URI | textBox | Provide a build URI in the form of vstfs:///Build/Build/176                              to import a specific build. You must also specify the build definition in the Build Defintion testbox above. | No |

