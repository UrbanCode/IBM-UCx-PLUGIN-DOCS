
# Nexus Repository Manager V3 - Process Steps

## Import Version

Creates a new component version and imports artifacts from Nexus.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Server URL | textBox | Base URL and port for the Nexus server                                  (I.E. `http://localhost:8081).` | Yes |
| User | textBox | The user name for the Nexus user. | No |
| Password | secureBox | The password for the Nexus user. | No |
| Repository | textBox | The name of the repository in Nexus from which to                                  import versions. | Yes |
| Nexus Component | textBox | The component name in Nexus. Specifying this value will                                  import only versions of the given Nexus component name. This field                                  should be used when you have multiple components in the same                                  repository, as is the case for NPM repositories. | No |
| Component Group | textBox | The group ID of the component to which the assets belong.                                  In maven repositories this will follow Java's package name rules                                  (I.E. org.apache.maven). | No |
| Latest Version | checkBox | Import only the latest version. This will import the latest                                  version based on Maven 3.0 version name conventions. | No |
| File Includes | textAreaBox | A list of file patterns to include in the component.                                  Separate each pattern with a new line or comma. To include all                                  files, leave blank or type **/*. | No |
| File Excludes | textAreaBox | A list of file patterns to exclude from the component.                              Separate each pattern with a new line or comma. | No |
| Extensions of files to Convert | textBox | If text-type files must be converted into another character                               set, type the list of file extensions to be converted. Matching file                               types are converted into the default or system character set of the                               system where the agent is located. Separate list items with commas. | No |
| Log4j Logging Level | selectBox | Configure the level of Log4j messages to output to the console. | No |
| Specific version to import. | textBox |  | No |



