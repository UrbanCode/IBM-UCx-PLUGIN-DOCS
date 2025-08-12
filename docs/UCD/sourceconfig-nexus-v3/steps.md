
# Nexus Repository Manager V3 - Process Steps

* [Import Version](#import_version)


## Import Version

Creates a new component version and imports artifacts from Nexus.

This step has no input properties.


## Roles in the Nexus Repository Manager V3 plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.


* [ComponentProperties](#componentproperties_role)
* [ImportProperties](#importproperties_role)


## ComponentProperties


| Name | Type | Description |
| --- | --- | --- |
| Component Group | String | The group ID of the component to which the assets belong. In maven repositories this will follow Javas package name rules (I.E. org.apache.maven). |
| Extensions of files to Convert | String | If text-type files must be converted into another character set, type the list of file extensions to be converted. Matching file types are converted into the default or system character set of the system where the agent is located. Separate list items with commas. |
| File Excludes | String | A list of file patterns to exclude from the component. Separate each pattern with a new line or comma. |
| File Includes | String | A list of file patterns to include in the component. Separate each pattern with a new line or comma. To include all files, leave blank or type \*\*/\*. |
| Latest Version | Boolean | Import only the latest version. This will import the latest version based on Maven 3.0 version name conventions. |
| Log4j Logging Level | Enumeration:
| Configure the level of Log4j messages to output to the console. |
| Nexus Component | String | The component name in Nexus. Specifying this value will import only versions of the given Nexus component name. This field should be used when you have multiple components in the same repository, as is the case for NPM repositories. |
| Password | Password | The password for the Nexus user. |
| Repository | String | The name of the repository in Nexus from which to import versions. |
| Server URL | String | Base URL and port for the Nexus server(i.e., `http://localhost:8081`). |
| User | String | The user name for the Nexus user. |

## ImportProperties


| Name | Type | Description |
| --- | --- | --- |
| Specific version to import. | String |  |


