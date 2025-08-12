
# IBM Rational Team Concert - SCM - Settings
==========================================


## Create Component

The following settings are available when you create a component by using the IBM Rational Team Concert SCM plug-in.



| Name | Type | Description |
| --- | --- | --- |
| RTC Server URL | String | The URL of the Rational Team Concert server. For example, https://mycompany.example.com:9443/jazz. |
| RTC Username | String | The user name used to connect to the Rational Team Concert server. |
| RTC Password | Password | The password used to connect to the Rational Team Concert server. |
| Stream | String | The name or alias of the default flow target stream. |
| Version Naming Convention | Enumeration:
* ID
* NAME
| Use the ID or Name for the Versions Name when Importing Versions Automatically, Importing Stream, or when Import Versions name is left blank. |
| Includes | String | A list of ant-style include patterns, separated by newline characters. |
| Excludes | String | A list of ant-style exclude patterns, separated by newline characters. |
| Include Root | Boolean | Select Include Root to load the component names in the Rational Team Concert stream as top-level folders in the IBM DevOps Deploy component. |
| Command Path | String | The full path to the scm executable on the IBM DevOps Deploy agent, including the file name. For example, D:\IBM\RTCClient\scmtools\eclipse\scm.exe. |



## Import New Versions

The following settings are available when you import component versions manually by using the IBM Rational Team Concert SCM plug-in.


| Name | Type | Description |
| --- | --- | --- |
| Workspace History | Enumeration:
* SNAPSHOT
* STREAM
| Use a snapshot or stream as the initial workspace history. |
| Version Name | String | The name given to the imported component version. If snapshot is selected, it will search RTC for this snapshot name. If left blank, the latest snapshots name or ID will be used. |

