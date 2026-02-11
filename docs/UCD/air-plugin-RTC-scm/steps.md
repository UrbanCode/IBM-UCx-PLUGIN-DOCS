# Process Steps

## Import Version

Creates a new component version and imports artifacts

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| RTC Server URL | textBox | The URL of the RTC server. | Yes |
| RTC Username | textBox | The username used to connect to the RTC server. | Yes |
| RTC Password | secureBox | The password used to connect to the RTC server. | No |
| Stream | textBox | The name or alias of the default flow target stream. | Yes |
| Version Naming Convention | selectBox | Use the ID or Name for the Version's Name when Importing Versions Automatically, Importing Stream, or when Import Version's name is left blank. | No |
| Includes | textAreaBox | New line separated list of ant style include patterns. | No |
| Excludes | textAreaBox | New line separated list of ant style exclude patterns. | No |
| Include Root | checkBox | Select Include Root to load the component names in the Rational Team Concert stream as top-level folders in the IBM UrbanCode Deploy component. | No |
| Command Path | textBox | The full path to the scm executable on the IBM UrbanCode Deploy agent, including the file name. For example, D:\IBM\RTCClient\scmtools\eclipse\scm.exe. | Yes |
| Workspace History | selectBox | Use a snapshot or stream as the initial workspace history. | No |
| Version Name | textBox | The name given to the imported component version. If snapshot is selected, it will search RTC for this snapshot name. If left blank, the latest snapshot's name or ID will be used. | No |

