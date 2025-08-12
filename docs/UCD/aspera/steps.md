
# Aspera - Process Steps

* [Download Artifacts](#download_artifacts)
* [Upload Artifacts](#upload_artifacts)


## Download Artifacts

Runs an Aspera FASP transfer process from an Aspera server to the localhost computer.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Enter additional arguments, or a text file containing additional arguments for the Aspera command. Separate each argument with a newline character or comma. | No |
| Aspera Host | String | The IP address of the source Aspera server that contains the source files to transfer. For example: 192.0.2.1 | Yes |
| Aspera Password | Password | The password used to connect to the Aspera server. | No |
| Aspera Script Location | String | The full path to the folder that contains the ascp script. | Yes |
| Aspera Username | String | The user name used to connect to the Aspera server. | No |
| Destination File Path | String | The path to the local directory used to store the downloaded files and folders. | Yes |
| Download Rate | Enumeration:
* -1
* 1000
* 5000
* 10000
* 25000
* 50000
* 75000
* 100000
| Select the maximum download rate, in Mbps. | No |
| Overwrite Strategy | Enumeration:
* diff
* older
* diff+older
* never
* always
| Select the method for overwriting existing files with the same name as the source. | No |
| Source File Paths | String | Specify a list of paths to the files or folders to download from the Aspera server. Separate each path with newline characters or commas. This list is appended to the Source Text File list and duplicates are removed. The combined list must contain at least one file. | No |
| Source Text File | String | Specify the path to a text file that contains a list of paths to source files to download. Separate each path in the text file with newline characters or commas. This list is appended to the Source File Paths list and duplicates are removed. The combined list must contain at least one file. | No |



## Upload Artifacts

Runs an Aspera FASP transfer process from the localhost computer to an Aspera server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Enter additional arguments, or a text file containing additional arguments for the Aspera command. Separate each argument with a newline character or comma. | No |
| Aspera File Path | String | The path to the destination directory to use to store the uploaded files and folders on the Aspera server. | Yes |
| Aspera Host | String | The IP address of the Aspera server that is the destination for the uploaded source files and folders. For example: 192.0.2.1 | Yes |
| Aspera Password | Password | The password used to connect to the Aspera server. | No |
| Aspera Script Location | String | The full path to the folder that contains the ascp script. | Yes |
| Aspera Username | String | The user name used to connect to the Aspera server. | No |
| Download Rate | Enumeration:
* -1
* 1000
* 5000
* 10000
* 25000
* 50000
* 75000
* 100000
| Select the maximum download rate, in Mbps. | No |
| Overwrite Strategy | Enumeration:
* diff
* older
* diff+older
* never
* always
| Select the method for overwriting existing files with the same name as the source. | No |
| Source File Paths | String | Specify a list of paths to the files and folders to upload to the Aspera server. Separate each path with newline characters or commas. This list is appended to the Source Text File list and duplicates are removed. The combined list must contain at least one file. | No |
| Source Text File | String | Specify a path to a text file that contains a list of paths to source files to upload. Separate each path in the text file with newline characters or commas. This list is appended to the Source File Paths list and duplicates are removed. The combined list must contain at least one file. | No |



