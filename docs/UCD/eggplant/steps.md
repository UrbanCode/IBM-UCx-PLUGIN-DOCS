# eggPlant - Process Steps

## Run eggPlant scripts

The step that executes the eggPlant Functional "runscript" command for comand line execution.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| eggPlant Functional installation directory (optional for windows) | textBox | The full path to the eggPlant Functional installation folder. On windows the default install folder is used if not set | Yes |
| Runscript command line arguments | textAreaBox | space or newline separated arguments including; suite or script paths, parameters and options | Yes |

## Run eggPlant commands

The step that executes eggPlant Functional commands over XML-RPC using eggDrive.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Host name or IP address | textBox | The IP address or host name of the machine running eggPlant Functional in Drive mode | Yes |
| Port | textBox | The TCP port of eggPlant Functional running in Drive mode | Yes |
| eggPlant suite path | textBox | The path to the eggPlant suite | Yes |
| SenseTalk script lines | textAreaBox | Each line will be run as an eggDrive execute statement | Yes |

