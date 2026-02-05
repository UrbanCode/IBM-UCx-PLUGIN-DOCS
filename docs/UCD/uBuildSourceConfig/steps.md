# Process Steps

## Import Version

Creates a new component version and imports artifacts

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| DevOps Build Url | textBox | URL of the DevOps Build server. | Yes |
| User | textBox |  | Yes |
| Password | secureBox |  | Yes |
| Project | textBox | The name of the DevOps Build project. Projects                              roughly correspond to DevOps Deploy components. | Yes |
| Build Process | textBox | Name of the workflow in DevOps Build to import builds from. | Yes |
| Status | textBox | The status that build lives must have before they can be                              imported. Only buildlives with this status are imported. | Yes |
| Artifact Sets | textAreaBox | If Copy to CodeStation is checked, type the list of artifact                              sets to resolve in CodeStation. Place each list item on a new line. | Yes |
| Preserve execute permissions | checkBox | For Linux and UNIX operating systems, select this check                            box to retain the execute permissions for each file. | No |
| Extensions of files to Convert | textBox | If text-type files must be converted into another character set,                            type the list of file extensions to be converted. Matching file types are                            converted into the default or system character set of the system where the                            agent is located. Separate list items with commas. | No |

