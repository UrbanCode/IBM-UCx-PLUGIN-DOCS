# Process Steps

## Import Version

Creates a new component version and imports artifacts

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Repository URL | textBox | Base URL for the Maven repository. | Yes |
| Apply KeyStore | checkBox | Select this option to add keystore. | No |
| HTTP Proxy Host | textBox | Optional HTTP proxy host. | Yes |
| HTTP Proxy Port | textBox | Optional HTTP proxy port. Must be supplied if the HTTP Proxy Host is specified. | Yes |
| HTTP Proxy Username | textBox | Optional HTTP proxy user name. | Yes |
| HTTP Proxy Password | secureBox | Optional HTTP proxy password. | Yes |
| User | textBox | The user name for the Maven-credentialed user. | No |
| Password | secureBox | The password for the Maven-credentialed user. | No |
| Group ID | textBox | The name of the groupID as defined in the Maven                              pom.xml file. The group ID identifies the project. | Yes |
| Artifact ID | textBox | Name of the artifactID as defined in the Maven                              pom.xml file. The artifact ID is the name of the unversioned jar file. | Yes |
| Maven Qualifier | textBox | The optional qualifier is appended to the file name                              after the version number. Leave blank if not applicable. | No |
| File Extensions | textBox | The file extension for the file type to import. Separate multiple extensions with comma (,) character. | Yes |
| Latest Build Count | textBox | The number of the builds to import. The default value is 1. | Yes |
| Version Name Pattern | textBox | The range of build versions to import. Versions are defined                              by regular expressions. For example, to import all 1.1.*, and 1.2.*                              versions, you might type (1.[0-9]+).*. A number of versions that is equal                              to the value in the Latest Build Count field is imported for each matching                              version. This property is only necessary when tracking older branches. | No |
| Preserve Execute Permissions | checkBox | For Linux and UNIX operating systems, select this check box                              to retain the execute permissions for each file. | No |
| Extensions of files to Convert | textBox | If text-type files must be converted into another character                              set, type the list of file extensions to be converted. Matching file                              types are converted into the default or system character set of the                              system where the agent is located. Separate list items with commas. | No |
| Specific version | textBox | Optional: The maven version or SNAPSHOT string to import (e.g. 1.0.1 or 1.0-SNAPSHOT), leave blank for LATEST | No |
| Snapshot version suffix | textBox | Optional: When above is a SNAPSHOT string to fetch a specific SNAPSHOT (e.g. 20181224.151710-4), leave blank to default to the latest snapshot | No |
| Version Description | textBox | An optional description to add to the versions that are                                  imported into UrbanCode Deploy. | No |

