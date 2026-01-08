# AccuRev SCM - Process Steps

## Import Version

Creates a new component version and imports artifacts from AccuRev.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AccuRev URL | textBox | Full URL for the AccuRev server.                              Hostname and port can be identified by running the `accurev info` command locally. | Yes |
| Username | textBox | Specify a user with permissions to access the AccuRev Depot and Stream. | Yes |
| Password | secureBox | Specify the password of the user with permissions to access                                  the AccuRev Depot and Stream. | Yes |
| Depot | textBox | Specify a Depot to retrieve artifacts from. | Yes |
| Stream | textBox | Specify a Stream or Workspace to retrieve artifacts from.                                  If empty, the Depot name will be used. If a Workspace is specified, the                                  checkboxes and manual import values for Promote Transactions, Issues, and                                  Snapshot will be ignored. A version will be created based on the runtime                                  timestamp and file contents of the Workspace. | No |
| Import Promote Transactions | checkBox | Select to import latest Promote Transaction artifacts on automatic                                  import. Artifacts will still be retrieved if the Transaction                                  number is specified on manual import. Only valid for a non-Workspace Stream. | No |
| Import Issues | checkBox | Select to import latest Issue change set artifacts on automatic                                  import. Artifacts will still be retrieved if the Issue                                  number is specified on manual import. Only valid for a non-Workspace Stream. | No |
| Import Snapshots | checkBox | Select to import latest Snapshot artifacts on automatic                                  import. Artifacts will still be retrieved if the Snapshot name                                  is specified on manual import. Only valid for a non-Workspace Stream. | No |
| Includes | textAreaBox | Specify a list of files to include during artifact import. | No |
| Excludes | textAreaBox | Specify a list of files to exclude during artifact import. | No |
| AccuRev Executable Path | textBox | Full path to the AccuRev executable on the agent's file system. | No |
| Preserve Execute Permissions | checkBox | Select to save file execute permissions with files. | No |
| Version Name Tag | textBox | Specify a tag to append to the version's name. | No |
| Transaction Numbers | textBox | Specify a Promote Transaction Number to import. Only valid for a non-Workspace Stream.                                  Separate multiple Transaction Numbers with commas. Example: 80, 120, 184 | No |
| Issue Numbers | textBox | Specify a Issue Number to import. Only valid for a non-Workspace Stream.                                  Separate multiple Issue Numbers with commas. Example: 5, 16, 27 | No |
| Stream Snapshots | textBox | Specify a Stream Snapshot to import. Only valid for a non-Workspace Stream.                                  Separate multiple Snapshots with a comma. Example: snap-stream1, snap-stream2 | No |

