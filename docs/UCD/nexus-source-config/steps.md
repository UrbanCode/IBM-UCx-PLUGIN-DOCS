
# Nexus Source Config - Steps

## Import Version

Creates a new component version and imports artifacts

This step has no input properties.


## NexusComponentProperties


| Name | Type | Description |
| --- | --- | --- |
| Artifact ID | String | Name of the artifactID as defined in the Maven pom.xml file. The Artifact ID is the name of the unversioned jar file. |
| Extensions of files to Convert | String | If text-type files must be converted into another character set, type the list of file extensions to be converted. Matching file types are converted into the default or system character set of the system where the agent is located. Separate list items with commas. |
| File Excludes | String | A list of file patterns to exclude from the component. Separate each pattern with a new line or comma. |
| File Includes | String | A list of file patterns to include in the component. Separate each pattern with a new line or comma. To include all files, leave blank or type \*\*/\*. |
| Group ID | String | The name of the groupID as defined in the Maven pom.xml file. The Group ID identifies the project. |
| Nexus Server URL | String | Base URL and port for the Nexus server. |
| Password | Password | The password for the Nexus user. |
| Repository ID | String | The Nexus repository ID. |
| User | String | The user name for the Nexus user. |

## NexusImportProperties


| Name | Type | Description |
| --- | --- | --- |
| Specific version | String |  |


