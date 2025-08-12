
# Oracle SQLPlus - Process Steps

* [Run SQLPlus script](#run_sqlplus_script)
* [SQLPlus through Control File](#sqlplus_through_control_file)


## Run SQLPlus script

Run SQLPlus script


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Connection ID | String | The connection ID to be used (example: localhost:1521/ORCL). If you use the SYS account to run SQL scripts, add the suffix AS SYSDBA. | Yes |
| Fail on Database Messages | Boolean | Check this box to fail on ORA- Database Messages. This option will be ignored if the Skip SQL Errors option is selected. | No |
| Oracle Home | String | Optional field to specify the ORACLE\_HOME environment variable value. This field is required to authenticate through Oracle Wallet. | No |
| Password | Password | The password of the user for the scripts to be run as. Leave this property blank, and specify Oracle Home, if you wish to use Oracle Wallet authentication. | No |
| Password Script | String | If you want to use a script to provide password, specify the path to script here, leaving Password field blank | No |
| SQL Files | String | A new-line or comma separated list of sql files to be executed. Order is preserved. Supports \* and ? as wildcards.It is preferred to provide the full path of the sql file. Example: C:/Folder Name/\*.sql | Yes |
| SQL Files Args | String | A new-line or comma separated list of sql files Args to be executed, Use space to separate args belonging to same file. Order is preserved. List the files having parameters first. Put the args in double quotes if it has space in it. | No |
| SQLPlus Executable | String | The full path to the sqlplus executable to be run or the command to run if it is on the path. | Yes |
| Skip SQL Errors | Enumeration: true, false, ${p?:skipSqlErrors} | Ignore any PLS, SP2, and ORA errors encountered during script execution. Select True to skip error, or false to fail on errors. You may also select the parameterized value ``${p?:skipSqlErrors}``, which will look for the skipSqlErrors property in UCD. If the property isnt defined, the value will be false. | No |
| User name | String | The user name for the scripts to be run as. Leave this property blank, and specify Oracle Home, if you wish to use Oracle Wallet authentication. | No |

## SQLPlus through Control File

Run SQLPlus scripts using control files for orchestration.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| ConnectionId x User to Password | String | A newline separated list of connection IDs, User Names and Passwords. The expected format for a line is username@connectionId=Password. To use Oracle Wallet authentication, use the format @connectionId. A combination of the two formats is allowed. | Yes |
| Control File Excludes | String | A newline separated list of control file excludes for finding control files. Use \* for matching any file or folder, and \*\* for recursively matching folders. | No |
| Control File Includes | String | A newline separated list of control file includes for finding control files. Use \* for matching any file or folder, and \*\* for recursively matching folders. Each line of a control file should be formatted thusly scriptName\tconnectionId\tuser\tABORT\_FLAG. \t means whitespace tab.For an example of what a control file should look like, see control.example.txt and the readme.txt in the root of the plugin. | No |
| Mode | Enumeration: check, deploy | Whether to do a deployment or just check that the control files match the valid syntax and all sql files are found. Both modes will do an initial check. | No | 
| Oracle Home | String | Optional field to specify the ORACLE\_HOME environment variable value. This field is required to authenticate through Oracle Wallet. | No |
| SQLPlus Executable | String | The full path to the sqlplus executable scripts to be run or the command to run if it is on the path. | Yes |


