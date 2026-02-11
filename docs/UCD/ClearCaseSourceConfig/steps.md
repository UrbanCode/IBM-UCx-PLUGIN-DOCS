# Process Steps

## Import Version

Import a new version from ClearCase

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Path to location inside the View | textBox | The base directory from which files are imported for a Snapshot View. This is the portion of  			  	the Snapshot View that is updated before importing the files. | Yes |
| Includes | textAreaBox | A list of file patterns to include in the component.                            	Separate each pattern on a separate line. | Yes |
| Excludes | textAreaBox | A list of file patterns to exclude from the component. Place each pattern on a separate line. | No |
| Snapshot View | checkBox | The connection is to a Snapshot View. | No |
| Clear Tool Path | textBox | The location of the Clear Tool executable file. Use this property if the executable file is  			  	not included on the PATH statement. | Yes |
| Preserve Execute Permissions | checkBox | For Linux and UNIX operating systems, retain the execute permissions for each file. | No |
| Extensions of files to Convert | textBox | A list of file extenstions to convert into another character set. Separate each file extensions  				with a comma. Specify this property if you have text-type files that mut be converted into another character  				set. Matching file types are converted into the default character set of the system where the agent is located. | No |
| Name | textBox | The name for the version being created. | No |

