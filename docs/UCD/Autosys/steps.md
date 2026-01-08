# Autosys - Process Steps

## Send Autosys Event

Send event to CA Workload Automation AE Application Server

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Directory Offset | textBox | The directory offset relative to the current working directory where the step should run. | No |
| Event | selectBox | Event to send to the CA Workload Automation AE Application Server. Properties marked with * may not work with newer CA WAAE versions | Yes |
| Alarm | selectBox | Name of the Autosys Job | No |
| Job Name | textBox | Name of the Autosys Job | No |
| Autosys Application Name | textBox |  | No |
| Status | selectBox |  | No |
| Env AUTOSYS | textBox | Autosys install directory | No |
| Env AUTOROOT | textBox | CA Workload Automation AE install directory | No |
| Env AUTOUSER | textBox | Location of the AutoUser directory on the agent | No |
| Env AUTOSERV | textBox | CA Workload Automation instance name (i.e. ACE) | No |
| Un-send Event | textBox | Cancels the last event specified by the Event dropdown | No |
| Additional Arguments | textAreaBox | Enter additional parameters (line separated) to pass to the sendevent command (i.e. "-N machine") | No |

## Check Autosys Server

Runs the chk_auto_up command

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Directory Offset | textBox | The directory offset relative to the current working directory where the step should run. | No |
| Acceptable Exit Codes | textBox | Comma separated list of acceptable exit codes. Check CA documentation as these do not follow POSIX conventions | No |
| Unacceptable Exit Codes | textBox | Comma separated list of unacceptable exit codes. Check CA documentation as these do not follow POSIX conventions | No |
| Env AUTOSYS | textBox | Autosys install directory | No |
| Env AUTOROOT | textBox | CA Workload Automation AE install directory | No |
| Env AUTOUSER | textBox | Location of the AutoUser directory on the agent | No |
| Env AUTOSERV | textBox | CA Workload Automation instance name (i.e. ACE) | No |

## Execute JIL Script

Runs a JIL Script on the CA WAAE server

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Directory Offset | textBox | The directory offset relative to the current working directory where the step should run. | No |
| JIL Script | textAreaBox | Contents of JIL script to be executed | No |
| Env AUTOSYS | textBox | Autosys install directory | No |
| Env AUTOROOT | textBox | CA Workload Automation AE install directory | No |
| Env AUTOUSER | textBox | Location of the AutoUser directory on the agent | No |
| Env AUTOSERV | textBox | CA Workload Automation instance name (i.e. ACE) | No |

