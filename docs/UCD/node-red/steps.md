# Node-RED - Process Steps

* [Install](#install)
* [Uninstall](#uninstall)
* [Start](#start)
* [Stop](#stop)
* [Deploy Flow](#deploy_flow)
## Install

Install NodeRED on a target server. The server must have node.js, npm and git installed.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Root directory for Install | textBox | The root directory in which to install NodeRED. | Yes |

## Uninstall

Uninstall NodeRED from the target server.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Root directory for Install | textBox | The root directory in which NodeRED is installed. | Yes |

## Start

Start NodeRED from the target server.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Root directory for Install | textBox | The root directory in which NodeRED is installed. | Yes |
| Flow to execute | textBox | The name of the flow NodeRED is execute (including .json suffix). If left empty the default flow will be executed | Yes |

## Stop

Stop NodeRED from the target server.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Root directory for Install | textBox | The root directory in which NodeRED is installed. | Yes |

## Deploy Flow

Deploy Flow to Node-RED

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Root directory for Install | textBox | The root directory in which NodeRED is installed. | Yes |
| Flow to deploy | textBox | The name of the flow to deploy to NodeRED (including .json suffix). If left empty the default flow will be executed | Yes |

