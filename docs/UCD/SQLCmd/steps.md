
# Microsoft SQL Server SQLCmd - Process Steps

* [Run SQLCmd scripts](#run_sqlcmd_scripts)


## Run SQLCmd scripts

Run SQLCmd scripts in sorted order


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additonal Arguments | String | Specify additional command line arguments in the format: FLAG [VALUE]. Each Flag, and poential Value, should be separated with a space. Example: -v MyVar1=something or -N.Separate each argument pair with a new line or semicolon. | No |
| DB Name | String | The name of the DB to use. | No |
| Directory Offset | String | The directory offset relative to the current working directory where the step should run. | No |
| Exclude Files | String | A new line separated list of file filters to determine the files to be excluded from the above selection. Use in conjunction with includes. If using list it is ignored. | No |
| Login Timeout | String | Specifies the number of seconds before a sqlcmd login to the OLE DB provider times outwhen you try to connect to a server.Defaults to 8 sec if not specified. | No |
| Password | Password | The password of the user for the scripts to be run as. | No |
| Password Script | String | Use this instead of the Password field if the password is stored in a property. | No |
| SQL File Includes | String | A new line separated list of file filters to determine the sql scripts to be executed. Use this when order between files is unimportant. | No |
| SQL Files | String | A new line separated list of files to be executed. Use this when order between files is important. | No |
| SQLCmd Executable Path | String | The full path to the sqlcmd executable if it is not in the current working directory, and if it is not specified in the PATH environment variable. | No |
| Server\Instance | String | The server\instance to connect to. | No |
| Use Dedicated Admin Connection | Boolean | Select here to use a dedicated admin connection. | No |
| Use Trusted Connection | Boolean | Select here to use a trusted connection instead of user/password. | No |
| User name | String | The user name for the scripts to be run as. | No |


