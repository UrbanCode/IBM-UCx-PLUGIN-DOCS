
# Sybase - Process Steps

* [Run SQL Scripts](#run_sql_scripts)


## Run SQL Scripts

Execute one or more SQL scripts on the server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Specify any additional arguments to append to the isql utility. Separate each argument by a new line. | No |
| Database | String | The name of the database in which the Isql session begins. | Yes |
| Error Notification | Enumeration:
* fail
* warn
* failAfter
| Select the action to take when a SQL file returns an error. The default Fail On Error will fail the process immediately, Warn On Error will only warn that an error occured, and Fail After Errors will execute all SQL scripts and fail afterwards if any errors occurred. | No |
| ISQL Path | String | The path to the isql command executable. | Yes |
| Password | Password | The case-sensitive password to authenticate with Sybase. | Yes |
| SQL Files | String | Specify either a list of SQL files separated by newlines, or a control file containing files listed in the same format. Note that any file without a .sql extension will be treated as a control file. | Yes |
| SYBASE.sh Path | String | The path to your SYBASE profile (SYBASE.sh file). If specified, this file will be sourced before executing SQL scripts. This is not necessary if you source the file in your agent startup profile. (E.G. /opt/sybase/SYBASE.sh) | No |
| Server Name | String | The name of the Adaptive Server in which to connect. If nothing is specified, the default SYBASE server name will be used. | No |
| Username | String | The case-sensitive username to authenticate with Sybase. | Yes |


