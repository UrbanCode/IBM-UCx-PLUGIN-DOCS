
# PowerShell - Troubleshooting

## Errors and solutions are included below

### FullyQualifiedErrorId : MethodInvocationNotSupportedInConstrainedLanguage

This issue is caused by a new policy update to the Windows defender application control (WDAC) Windows GPO. It resulted in PowerShell on the agent servers to run in ConstrainedLanguage mode, causing the error. To enable full language support, refer to the following link: <https://stackoverflow.com/questions/57032747/how-to-change-powershell-mode-to-fulllanguage-mode-from-constrained-mode>

### PowerShell script execution failed. Error Message: Windows PowerShell is in NonInteractive mode. Read and Prompt functionality is not available

When scripts are run in non-interactive mode, `Stop-Process` requires the `-Force` option to make it non-interactive even if -Confirm:$false is set. Change the line of your script to: `Stop-Process -Name $process -Force`

For additional assistance on this issue, refer to the following links:

* <https://stackoverflow.com/questions/16580723/powershell-in-noninteractive-mode>
* <https://help.octopus.com/t/deploy-windows-powershell-is-in-noninteractive-mode/1313>

### PowerShell exits with exit code 1 rather than returning $LASTEXITCODE when last process exit code is >0.?

This is a bug in MS PowerShell and a PS v7.0.0 error. Details and workarounds are found at the following links:

* <https://github.com/PowerShell/PowerShell/issues/11461>
* <https://stackoverflow.com/questions/50200325/returning-an-exit-code-from-a-powershell-script>

### System.Management.Automation.ExitException: System error.?

This is a PS script error. Solutions are found at the following link:<https://stackoverflow.com/questions/42481761/system-management-automation-exitexception-system-error-in-powershell-studio>

### System error” from invoke command: System.Management.Automation.StopUpstreamCommandsException?

This is a MS PowerShell error and caused because Script is wrapped in the Invoke-Command. This is a PS v6.1.3 error and resolved in a later version. This issue was resolved in #10840 and released as the version 7.0.0 and and previewed at the following link: <https://github.com/PowerShell/PowerShell/pull/10840>.

Details and workarounds are found at the following links:

* <https://github.com/PowerShell/PowerShell/issues/9185>.
* <https://stackoverflow.com/questions/58582692/why-system-error-stopupstreamcommandsexception-is-raised-only-from-inside-invok>.

#### Questions and answers are included below

**Why does the plug-in step succeed when the PowerShell script exits with a -128 error status?**
The plug-in is configured by default to accept a -128 status as success. By default, PowerShell exits with a 0 error status even if the script fails, so using 0 results in false positives. If the -128 status overlaps with a custom error status that is used in your script, change the error status in the hidden properties.

**How can I pass the -file parameter?**

Use one of the following options:

* Insert `PowerShell -non-interactive *-Additional\_Parameters\_Here*`
* Use the Shell plug-in to interact with the command line.

**How can I run the script in a multi-threaded apartment model?**

Perform the following:

* Navigate to the hidden properties.
* Add -MTA to one of the argument properties.

**Why is script output not displayed in the IBM DevOps Deploy log?**
The IBM DevOps Deploy log stores all PowerShell output. You may need to change the PowerShell output preferences. To learn more, refer to the Microsoft documentation here: <https://technet.microsoft.com/en-us/library/hh847796.aspx>.
