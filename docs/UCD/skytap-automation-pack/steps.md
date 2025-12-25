# Skytap Automation Pack - Process Steps

* [Skytap Authentication](#skytap_authentication)
* [Create Environment from Template](#create_environment_from_template)
* [Change Environment State](#change_environment_state)
* [Change VM State](#change_vm_state)
* [Get VM ID](#get_vm_id)
* [Set VM User Data](#set_vm_user_data)
* [Connect to Network in another Environment (ICNR)](#connect_to_network_in_another_environment_(icnr))
* [Connect to VPN Tunnel](#connect_to_vpn_tunnel)
* [Add Environment to Project](#add_environment_to_project)
* [Add Template to Project](#add_template_to_project)
* [Create Template from Environment](#create_template_from_environment)
* [Delete Environment](#delete_environment)
* [Delete VM from Environment](#delete_vm_from_environment)
* [Add Template to Environment](#add_template_to_environment)
* [Add VM from Template to Environment](#add_vm_from_template_to_environment)
* [List Published URL for Environment](#list_published_url_for_environment)
* [Create Published URL for Environment](#create_published_url_for_environment)
* [Create Published Service for VM](#create_published_service_for_vm)
* [List Published Service for VM](#list_published_service_for_vm)
* [Bind Dynamic Agent to Component](#bind_dynamic_agent_to_component)
## Skytap Authentication

Establish Authentication Credentials for Subsequent Skytap Operations

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Username | textBox | Skytap User ID. | Yes |
| Authentication Key | secureBox | Skytap Authentication Key. | Yes |

## Create Environment from Template

Create a Skytap Environment from a Skytap Template

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Template ID | textBox | The numerical Template ID to use to Create a Skytap Environment. | Yes |
| Environment Name | textBox | Optional new name for evironment | No |
| Username | textBox | Skytap User ID. | Yes |
| Authentication Key | secureBox | Skytap Authentication Key. | Yes |
| Proxy Host | textBox | Proxy Host to Connect to cloud.skytap.com | No |
| Proxy Port | textBox | Proxy Port to Connect to cloud.skytap.com | No |

## Change Environment State

Run, Suspend or Stop a Skytap Environment

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Environment ID | textBox | The numerical Environment ID that you want to run, suspend or stop | Yes |
| New Environment State | selectBox | The desired new run-state of the environment - possible values are Running, Suspended or Shutdown | Yes |
| Power off Environment if Shutdown Fails | checkBox | Force halt if the the Environment fails to shutdown after 5 minutes | No |
| Username | textBox | Skytap User ID. | Yes |
| Authentication Key | secureBox | Skytap Authentication Key. | Yes |
| Proxy Host | textBox | Proxy Host to Connect to cloud.skytap.com | No |
| Proxy Port | textBox | Proxy Port to Connect to cloud.skytap.com | No |

## Change VM State

Run, Suspend or Stop an individual VM in a Skytap Environment

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Environment ID | textBox | The numerical Environment ID that you want to run, suspend or stop | Yes |
| VM Name or ID | textBox | The name or numerical ID of the VM that you want to run, suspend or stop. | Yes |
| New VM State | selectBox | The desired new run-state of the VM - possible values are Running, Suspended or Shutdown | Yes |
| Power off VM if Shutdown Fails | checkBox | Force halt if the the VM fails to shutdown after 5 minutes | No |
| Username | textBox | Skytap User ID. | Yes |
| Authentication Key | secureBox | Skytap Authentication Key. | Yes |
| Proxy Host | textBox | Proxy Host to Connect to cloud.skytap.com | No |
| Proxy Port | textBox | Proxy Port to Connect to cloud.skytap.com | No |

## Get VM ID

Get the ID of the specified VM

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Environment ID | textBox | The numerical Environment ID containing the VM for which you want to get the ID | Yes |
| VM Name | textBox | The Name of the Virtual Machine for which the you want to get the ID | Yes |
| Username | textBox | Skytap User ID. | Yes |
| Authentication Key | secureBox | Skytap Authentication Key. | Yes |
| Proxy Host | textBox | Proxy Host to Connect to cloud.skytap.com | No |
| Proxy Port | textBox | Proxy Port to Connect to cloud.skytap.com | No |

## Set VM User Data

Set the User Data (Skytap Metadata Service) in a VM in a Config to the specified string

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Environment ID | textBox | The numerical Environment ID containing the VM for which the User Data is to be set | Yes |
| VM Name | textBox | The Name of the Virtual Machine for which the User Data is to be set | Yes |
| User Data String | textBox | The string to which the VM User Data is to be set | Yes |
| Username | textBox | Skytap User ID. | Yes |
| Authentication Key | secureBox | Skytap Authentication Key. | Yes |
| Proxy Host | textBox | Proxy Host to Connect to cloud.skytap.com | No |
| Proxy Port | textBox | Proxy Port to Connect to cloud.skytap.com | No |

## Connect to Network in another Environment (ICNR)

Connect Environment Networks using ICNR

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Source Environment ID | textBox | The Source numerical Environment ID for the ICNR connection | Yes |
| Source Network Name | textBox | The Name of the Source Network for the ICNR connection | Yes |
| Target Environment ID | textBox | The Target numerical Environment ID for the ICNR connection | Yes |
| Target Network Name | textBox | The Name of the Target Network for the ICNR connection | Yes |
| Username | textBox | Skytap User ID. | Yes |
| Authentication Key | secureBox | Skytap Authentication Key. | Yes |
| Proxy Host | textBox | Proxy Host to Connect to cloud.skytap.com | No |
| Proxy Port | textBox | Proxy Port to Connect to cloud.skytap.com | No |

## Connect to VPN Tunnel

Connect Environment Network to a VPN Tunnel

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Environment ID | textBox | The numerical Environment ID of the Skytap environment which is to be connected to the VPN Tunnel | Yes |
| Network Name | textBox | The Name of the Network that is to be connected to the VPN tunnel | Yes |
| VPN ID | textBox | The ID of the VPN to which the environment is to be connected (e.g. vpn-12345) | Yes |
| Username | textBox | Skytap User ID. | Yes |
| Authentication Key | secureBox | Skytap Authentication Key. | Yes |
| Proxy Host | textBox | Proxy Host to Connect to cloud.skytap.com | No |
| Proxy Port | textBox | Proxy Port to Connect to cloud.skytap.com | No |

## Add Environment to Project

Add a Environment to a Project

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Environment ID | textBox | The numerical Environment ID of the Skytap environment which is to be added to a Skytap Project | Yes |
| Project Name | textBox | The Name of the Project to which the Environment is to be added | Yes |
| Username | textBox | Skytap User ID. | Yes |
| Authentication Key | secureBox | Skytap Authentication Key. | Yes |
| Proxy Host | textBox | Proxy Host to Connect to cloud.skytap.com | No |
| Proxy Port | textBox | Proxy Port to Connect to cloud.skytap.com | No |

## Add Template to Project

Add a Template to a Project

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Template ID | textBox | The numerical Template ID of the Skytap template which is to be added to a Skytap Project | Yes |
| Project Name | textBox | The Name of the Project to which the Template is to be added | Yes |
| Username | textBox | Skytap User ID. | Yes |
| Authentication Key | secureBox | Skytap Authentication Key. | Yes |
| Proxy Host | textBox | Proxy Host to Connect to cloud.skytap.com | No |
| Proxy Port | textBox | Proxy Port to Connect to cloud.skytap.com | No |

## Create Template from Environment

Create a Skytap Template from a Skytap Environment

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Environment ID | textBox | The numerical Environment ID to use to Create a Skytap Template. | Yes |
| Template Name | textBox | Optional new name for template | No |
| Username | textBox | Skytap User ID. | Yes |
| Authentication Key | secureBox | Skytap Authentication Key. | Yes |
| Proxy Host | textBox | Proxy Host to Connect to cloud.skytap.com | No |
| Proxy Port | textBox | Proxy Port to Connect to cloud.skytap.com | No |

## Delete Environment

Delete a Skytap Environment

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Environment ID | textBox | The numerical ID of the Skytap Environment to Delete. | Yes |
| Username | textBox | Skytap User ID. | Yes |
| Authentication Key | secureBox | Skytap Authentication Key. | Yes |
| Proxy Host | textBox | Proxy Host to Connect to cloud.skytap.com | No |
| Proxy Port | textBox | Proxy Port to Connect to cloud.skytap.com | No |

## Delete VM from Environment

Delete the specified VM from a Skytap Environment

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Environment ID | textBox | The numerical ID of the Skytap Environment containing the VM that is to be Deleted. | Yes |
| VM Name or ID | textBox | The Name or numerical ID of the Skytap VM to delete from the specified environment. | Yes |
| Username | textBox | Skytap User ID. | Yes |
| Authentication Key | secureBox | Skytap Authentication Key. | Yes |
| Proxy Host | textBox | Proxy Host to Connect to cloud.skytap.com | No |
| Proxy Port | textBox | Proxy Port to Connect to cloud.skytap.com | No |

## Add Template to Environment

Add the contents of a Skytap template to a Skytap environment

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Template ID | textBox | The numerical Template ID of the Skytap template that is to be added to the contents of the environment | Yes |
| Environment ID | textBox | The numerical Environment ID of the Skytap environment to which the contents of the template is to be added | Yes |
| Username | textBox | Skytap User ID. | Yes |
| Authentication Key | secureBox | Skytap Authentication Key. | Yes |
| Proxy Host | textBox | Proxy Host to Connect to cloud.skytap.com | No |
| Proxy Port | textBox | Proxy Port to Connect to cloud.skytap.com | No |

## Add VM from Template to Environment

Add the specified VM from an Skytap template to an Skytap environment

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Template ID | textBox | The numerical Template ID of the Skytap template that is to be added to the contents of the environment | Yes |
| VM name or ID | textBox | The name or numerical ID of the VM contained in the specified template that is to be added to the contents of the environment | Yes |
| New VM Name | textBox | A new name to assign to the VM after it has been added to the specified environment.  If no name is specified, the name will remain as it was in the source Template | No |
| Environment ID | textBox | The numerical Environment ID of the Skytap environment to which the contents of the template is to be added | Yes |
| Username | textBox | Skytap User ID. | Yes |
| Authentication Key | secureBox | Skytap Authentication Key. | Yes |
| Proxy Host | textBox | Proxy Host to Connect to cloud.skytap.com | No |
| Proxy Port | textBox | Proxy Port to Connect to cloud.skytap.com | No |

## List Published URL for Environment

List the Named Desktops Published URL for the Specified Environment

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Environment ID | textBox | The numerical Environment ID of the Skytap environment that contains the named Desktops Published URL | Yes |
| Published URL Name | textBox | The Name of the Published URL | Yes |
| Username | textBox | Skytap User ID. | Yes |
| Authentication Key | secureBox | Skytap Authentication Key. | Yes |
| Proxy Host | textBox | Proxy Host to Connect to cloud.skytap.com | No |
| Proxy Port | textBox | Proxy Port to Connect to cloud.skytap.com | No |

## Create Published URL for Environment

Create a Named Desktops Published URL for the Specified Environment

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Environment ID | textBox | The numerical Environment ID of the Skytap environment that contains the named Desktops Published URL | Yes |
| Published URL Name | textBox | The Name of the Published URL | Yes |
| Published URL Permissions | selectBox | The Permitted Use for the Published URL | No |
| Published URL Password | secureBox | The Optional Password for the Published URL | No |
| Username | textBox | Skytap User ID. | Yes |
| Authentication Key | secureBox | Skytap Authentication Key. | Yes |
| Proxy Host | textBox | Proxy Host to Connect to cloud.skytap.com | No |
| Proxy Port | textBox | Proxy Port to Connect to cloud.skytap.com | No |

## Create Published Service for VM

Create a Published Service for the Specified VM

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Environment ID | textBox | The numerical Environment ID of the Skytap environment that contains the named Desktops Published URL | Yes |
| VM Name | textBox | The Name of the VM in the Skytap environment for which the Published Service is to be created | Yes |
| Network Name | textBox | The Name of the Network in the Specified VM that is to be associated with the Published Service | Yes |
| Port Number | textBox | The Port that is to be assocated with the Published Service | Yes |
| Username | textBox | Skytap User ID. | Yes |
| Authentication Key | secureBox | Skytap Authentication Key. | Yes |
| Proxy Host | textBox | Proxy Host to Connect to cloud.skytap.com | No |
| Proxy Port | textBox | Proxy Port to Connect to cloud.skytap.com | No |

## List Published Service for VM

List a Published Service for the Specified VM

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Environment ID | textBox | The numerical Environment ID of the Skytap environment that contains the VM for which to get the Published Service | Yes |
| VM Name | textBox | The Name of the VM in the Skytap environment for which the Published Service is to be listed | Yes |
| Network Name | textBox | The Name of the Network in the Specified VM that is associated with the Published Service | Yes |
| Port Number | textBox | The Port that is assocated with the Published Service | Yes |
| Username | textBox | Skytap User ID. | Yes |
| Authentication Key | secureBox | Skytap Authentication Key. | Yes |
| Proxy Host | textBox | Proxy Host to Connect to cloud.skytap.com | No |
| Proxy Port | textBox | Proxy Port to Connect to cloud.skytap.com | No |

## Bind Dynamic Agent to Component

Bind a Skytap Dynamic UCD Agent to a Component

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Server URL | textBox | The full URL to an UrbanCode Deploy server | Yes |
| UCD Top Level Group | textBox | The Name of the UrbanCode Deploy Top Level Resource Group to which the specified agent is to be added | Yes |
| UCD Agent Name | textBox | The Name of the UrbanCode Deploy Agent that is to be added to the specified top level group | Yes |
| UCD Component Name | textBox | The name of the UrbanCode Deploy component to associate with the specified agent | Yes |

