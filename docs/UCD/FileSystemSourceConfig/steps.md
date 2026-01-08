# File System - Process Steps

## Import Version

Creates a new component version and imports artifacts

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Base Path | textBox | Specify the path to the directory that contains the artifacts. | Yes |
| Always Use Name Pattern | checkBox | If selected, new versions are automatically named according                              to the pattern in the Version Name Pattern field. If cleared, you must                              specify a name each time you create a version. | No |
| Version Name Pattern | textBox | Specify a pattern for each version name. You can use the                              ${version} variable to include an automatically incremented version number.                              For example, the mycomp_${version} pattern produces versions such as                              mycomp_1, mycomp_2, and so on. This parameter is meaningful only if                              you select the Always Use Name Pattern check box. | No |
| Next Version Number | textBox | Specify the version number for the next version. This parameter                              is meaningful only if you select the Always Use Name Pattern check box. | No |
| Extensions of files to Convert | textBox | If text-typefiles must be converted into another character set,                              type the list of file extensions to be converted. Matching file types are                              converted into the default character set of the system where the agent is                              located. Separate list items with commas. | No |
| Preserve Execute Permissions | checkBox | For Linux and UNIX operating systems, select this check                              box to retain the execute permissions for each file. | No |
| Version Name | textBox | The name for this version. | Yes |
| Version Description | textBox | The description for this version. | No |



