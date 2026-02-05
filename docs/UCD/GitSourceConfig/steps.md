# Process Steps

## Import Version

Import new Version from Git

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Repository URL | textBox | The location of the Git repository, such as `https://git.example.com/myproject.git.` | Yes |
| Branch | textBox | Git branch that contains the artifacts you want to retrieve. Default is master | No |
| Username | textBox | Optional username to specify for authenticating with the Git repository using the http(s) protocol. | No |
| Password | secureBox | Optional password to specify for authenticating with the Git repository using the http(s) protocol. | No |
| Watch for Tags | checkBox | When selected, tags are used as the basis for new component versions. | No |
| Recursive | checkBox | When selected, all submodules within the project are initialized using their default settings. | No |
| Disable SSL Verification | checkBox | Check this box to disable SSL certificate verification.                              This option will allow invalid SSL certificates. | No |
| Sparse | checkBox | Check this box if you want to use the sparse clone feature of git and Specify the path accordingly in the Path to Sparse box. | No |
| Sparse Paths | textBox | Specify the path of the directories in the base git repository to clone specifically. Separate each path with new lines or commas: MY/DIR1,SUB/DIR2. This is only checked if configured for sparse mode. | No |
| Includes | textAreaBox | The file name patterns used to match files for inclusion.                              The wildcard ** indicates every directory, and the wildcard *                              indicates every file. The pattern dist/**/*, for example, retrieves                              the entire file tree beneath the dist directory. Separate each pattern                              with new lines or commas. | No |
| Excludes | textAreaBox | The file name patterns used to match files for exclusion.                              The wildcard ** indicates every directory, and the wildcard * indicates                              every file. Separate each pattern with new lines or commas. | No |
| GIT Path | textBox | The path to the Git executable file on the server.                              If you have added the Git executable to the system PATH                              variable, you can simply specify the name of the executable, such as git.                              If you have not added the Git executable to the system PATH variable,                              specify the complete path to the Git executable. | Yes |
| Preserve Execute Permissions | checkBox | For Linux and UNIX operating systems, select this check                              box to retain the execute permissions for each file. | No |
| Extensions of files to Convert | textBox | If text-type files must be converted into another character                              set, type the list of file extensions to be converted. Matching file types                              are converted into the default character set of the system where the agent                              is located. Separate list items with commas. | No |
| Specific version/tag | textBox |  | No |
| Name to create the version with | textBox |  | No |

