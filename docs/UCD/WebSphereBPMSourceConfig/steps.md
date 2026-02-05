# Process Steps

## Import Version

Creates a new component version and imports Process Application snapshots from WebSphere BPM.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| WebSphere BPM URL | textBox | Base URL for the WebSphere BPM Proces Center. | Yes |
| Process Application | textBox | Name or acronym of the Process Application to import. | Yes |
| Track | textBox | The Track, or Branch, name from where to retrieve Snapshots.                              If empty, Snapshots from all tracks will be imported. | No |
| Username | textBox | Username to authenticate with the WebSphere BPM Process Center. | No |
| Password | secureBox | Username to authenticate with the WebSphere BPM Process Center. | No |
| Trust All Certificates | checkBox | Select to trust all unsecure certificates. | No |
| Snapshot Name | textBox | Specify a Snapshot's name or acronym to import. | No |

