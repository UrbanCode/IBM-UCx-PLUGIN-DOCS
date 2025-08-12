
# PowerShell - Process Steps


* [Run PowerShell Script](#run_powershell_script)

## Run PowerShell Script

Runs a PowerShell script. This step allows for bidirectional passing of script variables and DevOps Deploy properties.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Line Options | String | Command-line options for the PowerShell session. Changing command-line arguments can affect plug-in functionality. The -File parameter is reserved. The -Command parameter is reserved if the value is a string. See Microsoft documentation for further details. | No |
| PowerShell Home | String | If the PowerShell command is in the system path, specify the PowerShell command name. Otherwise, specify the full path to the PowerShell command. | Yes |
| PowerShell Script | String | Accepts any PowerShell syntax. The prefix _IBMUCD is reserved for internal use; all methods and variables with this prefix are subject to change. Use dot source notation to call a script from a file. For example: . C:/HelloWorld.ps1. Use the standard DevOps notation for input properties. For example: $YourVar=``${p?:deployProperty}``. Use the command Set-StepOutputProperty to set an output property. For Example: Set-StepOutputProperty OutputPropName OutputPropValue | Yes |
| Successful Exit Status | String | The error status to set when the script completes successfully. The value must be between -128 and 127. This sets the exitCode property, which is used in the post-processing script. If you use -128 for an error status, change the value from the default. Using 0 may cause false negative statuses. | No |

|Back to ...||Latest Version|PowerShell |||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[9.1025820](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/powershell-integration/PowerShell-Integration-9.1025820.zip)|[Readme](README.md)|[Overview](overview.md)|[Troubleshooting](troubleshooting.md)|[Usage](usage.md)|[Downloads](downloads.md)|
