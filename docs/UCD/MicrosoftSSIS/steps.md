
# Microsoft SSIS - Process Steps

* [Deploy](#deploy)


## Deploy

Deploy a DTSX file from a local file system to a Microsoft SQL database.


| Label | Type | Description | Required |
| --- | --- | --- | --- |
| Directory Offset | String | The directory offset relative to the current working directory where the step should run. | No |
| DTUTIL Executable File | String | Absolute path to DTUTIL exectable file. Only specify this if the file isnt already on your system path. (e.g. C:\Program Files\Microsoft SQL Server\110\DTS\Binn\dtutil) | No |
| Excludes | String | Any files in the working directory to exclude from package deployment. You may specify regular expressions. | No |
| File to Deployment Name Mappings | String | SSIS packages to deploy along with an explicit deployment name. Separate packages from their name with =, and separate multiple package mappings by new line. If not in the working directory, you must specify an absolute path (e.g. C:/ProgramFiles/DTSXPackages/mypackage.dtsx=NameOfDeployment). You must either specify your files in this field or in the Includes field. | No |
| Includes | String | The SSIS packages to deploy to the Microsoft SQL database separated by new lines. If not in the working directory, you must specify an absolute path (e.g. C:/ProgramFiles/DTSXPackages/mypackage.dtsx). You may specify wildcards (e.g. \*\*/\* will include all files in the working directory). You must either specify your files in this field or in the File to Deployment Name Mappings field. | No |
| On Failure | Select Box | Choice of action when a deployment fails on a particular package. (Fast Fail: Step will fail right away when a deployment fails, and will not attempt to deploy any additional files. Best Effort: Step will attempt to deploy all packages, and will fail at the end if any failures occur. Useful to pinpoint which packages are invalid. Warn: Step will continue on if deployment fails, and print a warning declaring the file that failed.) | No |
| SQL Password | String | The password related to the specified Microsoft SQL database user to authenticate with. This is required only if SQL authentication is being used. If this is not specified, Windows authentication will be used. | No |
| SQL Server Name | String | SQL Server name. Required when specifying a non-local or non-default server when deploying an SSIS package. (SERVERNAME\INSTANCENAME) | No |
| SQL Username | String | The username with package deployment permissions on the Microsoft SQL database. This is required only if SQL authentication is being used. If this is not specified, Windows authentication will be used. | No |



|Back to ...||Latest Version|Microsoft SSIS |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[2.1005733](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/MicrosoftSSIS/MicrosoftSSIS-2.1005733.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
