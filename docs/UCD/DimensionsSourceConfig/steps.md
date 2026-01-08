# Dimensions - Process Steps

## Import Version

Creates a new component version and imports artifacts

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Username | textBox | Username to authenticate to Dimensions with. | Yes |
| Password | secureBox | Password to authenticate to Dimensions with. | Yes |
| DB Name | textBox | Dimensions database to connect to. | Yes |
| DB Conn | textBox | Dimensions DB to connect to. | Yes |
| Server | textBox | Dimensions server to connect to. | Yes |
| Product Spec | textBox | Product spec to look for baselines from. | Yes |
| Includes | textAreaBox | The patterns to match files to upload. The wildcard ** indicates every                              file. So the pattern dist/**/* would retrieve the entire file tree underneath the                              dist directory. | No |
| Excludes | textAreaBox | The patterns to exclude files to upload. | No |
| Text File Extensions | textBox | A comma separated list of extensions of files need to be converted to a new character set on download (e.g. txt,properties,log). This should be used  in cases where the OS the files are being deployed to requires a different character set than the one uploading the files into the server. | No |
| Overwrite Existing Timestamp | checkBox | If checked, the artifact's timestamp will be the time of upload. Otherwise, the timestamp will be the time of last modification. | No |
| Dimensions Classpath | textBox | The full path to each of the following Dimensions libraries, colon separated: darius.jar, dmclient.jar, dmfile.jar, dmnet.jar and dmtpi.jar. These can be found under DM_ROOT/java_api/lib and DM_ROOT/AdminConsole/lib on a Dimensions server. | Yes |
| Specific Baseline Spec | textBox |  | No |

