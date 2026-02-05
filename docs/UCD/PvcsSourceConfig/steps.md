# Process Steps

## Import Version

Creates a new component version and imports artifacts.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| User | textBox |  | No |
| Password | secureBox |  | No |
| PCLI Path | textBox | Path to the PVCS CLI tool. | Yes |
| Database Path | textBox | Path to the PVCS database. | Yes |
| Base Path | textBox | Base path of the repository. | Yes |
| Project Path | textBox | Path to the project. | Yes |
| Archive Path | textBox | The location of the archive relative to the database path. | Yes |
| Includes | textAreaBox | The patterns to match files to upload. The wildcard ** indicates every                              file. So the pattern dist/**/* would retrieve the entire file tree underneath the                              dist directory. | No |
| Excludes | textAreaBox | The patterns to exclude files to upload. | No |
| Preserve Execute Permissions | checkBox | When enabled, file execute permissions are saved with files. | No |
| Extensions of files to Convert | textBox | The comma separated list of extensions of files which need to be converted to a new Charset on download (e.g. txt,properties,log). | No |
| Version Name | textBox | Name of the resulting component version. | Yes |
| Branch | textBox | Pull the latest files from this branch. (Only specify one of these values) | No |
| Label | textBox | Pull the latest files with this label. (Only specify one of these values) | No |
| Promo Group | textBox | Pull the latest files in this promotion group. (Only specify one of these values) | No |

