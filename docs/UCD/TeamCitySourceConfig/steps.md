
# TeamCity - Process Steps

## Import Version

Creates a new component version and imports artifacts from TeamCity

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Repository URL | textBox | The base URL of the repository on the TeamCity server. | Yes |
| User | textBox | The user name for the account used to access the TeamCity server. | No |
| Password | secureBox | The password associated with the user name to access the TeamCity  						  server. | No |
| Build configuration ID | textBox | The build configuration ID in TeamCity. In TeamCity versions earlier  				  than version 8.0, the build configuration IDs typically have the prefix bt. You must  				  include the prefix when you specify the build configuration ID, for example: bt256.  				  In TeamCity versions 8.0 and later, the build configuration IDs do not include the  				  prefix. For these versions, specify the build configuration ID as it is displayed in  				  TeamCity. This field in previous plug-in versions is called the Build Type ID. | Yes |
| Branch | textBox | The TeamCity branch name to limit build imports by branch. If a  				  value is not specified, artifacts are retrieved from the project's default branch  				  defined in TeamCity. Specifying a value of default:any imports all builds from  				  all TeamCity branches. | No |
| Preserve Execute Permissions | checkBox | For Linux and UNIX operating systems, retain the execute permissions for each file. | No |
| Extensions of files to Convert | textBox | A list of text file extension to convert to a new charset when imported. Separate  				  each item with a comma, for example: txt,properties,log. | No |
| The build ID for the target build. | textBox |  | No |
| The name of the version. | textBox |  | No |

