# Process Steps

## Import Version

Downloads the specified RuleApp jar from the ODM Repository.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Decision Center URL | textBox | Hostname and Port number for Decision Center. | Yes |
| Data Source | textBox | JDBC name of the datasource. | Yes |
| Project Name | textBox | The name of the Project. (ex. Loan Validation Service) | Yes |
| Branch Name | textBox | The name of the Branch (ex. Spring Release). Pulls from main if left blank.  Value is ignored if re-deploying from existing snapshot. | No |
| Deployment Configuration | textBox | The name of the deployment configuration. (ex. test deployment) | Yes |
| Target Server | textBox | The name of the Target Server to deploy to. Leave blank to only extract the archive and skip deployment. | No |
| Username | textBox | Decision Center username. | No |
| Password | secureBox | Decision Center password. | No |
| oAuth token URL | textBox | Token URL to authenticate the oAuth server. | No |
| oAuth scope | textBox | oAuth scope to authenticate the oAuth server. | No |
| oAuth grantType | textBox | oAuth grantType to authenticate the oAuth server. | No |
| oAuth Username | textBox | The username for the oAuth server . | No |
| oAuth Password | secureBox | The password for the oAuth server . | No |
| oAuth Client ID | secureBox | The Client ID for the oAuth server. | No |
| oAuth Client Secret | secureBox | The Cleint secret for the oAuth server. | No |
| Jrules Jar Path | textBox | Path to the required ODM jrules jars. This path must be specified if the jars were not copied into the plugin lib directory. See plugin documentation for more information. Note: This property is ignored for ODM 8.9.1+ due to the addition of the Decision Center REST API. | No |
| Version Name Pattern | textBox | Specify a pattern for each version name.                              For example, the ibm-ucd pattern produces versions such as                              ibm-ucd-1, ibm-ucd-2, and so on, based on the 'Next Version Number'. | No |
| Next Version Number | textBox | Specify the version number for the next version.                              This value increments automatically after each Version import. | No |
| Preserve Execute Permissions | checkBox | When enabled, file execute permissions are saved with files. | No |
| Extensions of Files to Convert | textBox | The comma separated list of text extensions of files which need to be                              converted to a new Charset on download. | No |
| ODM Snapshot | textBox | Name of an existing ODM snapshot to pull archive from.  Overrides any branch name, if given.                              This will create a version with this name, overriding the next version numbering scheme. | No |

