# Process Steps

## Import Version

Imports a new version from Perforce

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Port | textBox | Host/Port of the Perforce server. | Yes |
| Template | textBox | Template client spec. | Yes |
| User | textBox |  | Yes |
| Password | secureBox |  | No |
| Do Login/Logout | checkBox | Use the login and logout commands. | No |
| P4 Path | textBox | Perforce client executable. Enter the full path if necessary. | Yes |
| Preserve Execute Permissions | checkBox | When enabled, file execute permissions are save with the files. | No |
| Text File Extensions | textBox | A comma separated list of extensions of files need to be converted to a new character set on download (e.g. txt,properties,log). This should be used  in cases where the OS the files are being deployed to requires a different character set than the one uploading the files into the server. | No |

