
# GitHub-Release - Process Steps

## Import Version

Creates a new component version and downloads the archive to the CodeStation.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| GitHub Repository URL | textBox | The base URL of the repository on the GitHub. For example:`https://api.github.com/repos/ibm-datapower/datapower-configuration-manager.` | Yes |
| User | textBox | The username to use to connect to the GitHub repository, if authentication is required. | Yes |
| Password | secureBox | The password to use to connnect to the GitHub Repository. | Yes |
| Download Tarball | checkBox | Select to download a tarball of the source code. | No |
| Download Zipball | checkBox | Select to download a zipball of the source code. | No |
| Preserve Execute Permissions | checkBox | For Linux and UNIX operating systems, select this property to                            retain the execute permissions of each file. | No |
| Extensions of files to Convert | textBox | A list of file extension to be converted to a new Charset when downloaded. Separate each item with a comma. For example: zip,tar.gz. | No |
| GitHub Release Tag Name | textBox | Import the GitHub tag name. For example: - 20. | No |

