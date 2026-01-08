# Citrix NetScaler - Process Steps

## Enable Servers

Enable one or more servers in NetScaler

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Server URL | textBox | URL to the NetScaler appliance. This could be the IP or domain name of the appliance including the protocol and port number, eg. https://netscaler.domain.com:8443 or http://10.1.2.3 . | Yes |
| Username | textBox | Username to login to the NetScaler appliance. | Yes |
| Password | secureBox | Password to login to the NetScaler appliance. Default value is set to ${p:environment/NetScaler/password} | Yes |
| Server List | textAreaBox | A comma and/or new line separated list of servers to enable. | Yes |

## Disable Servers

Disable one or more servers in NetScaler

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Server URL | textBox | URL to the NetScaler appliance. This could be the IP or domain name of the appliance including the protocol and port number, eg. https://netscaler.domain.com:8443 or http://10.1.2.3 . | Yes |
| Username | textBox | Username to login to the NetScaler appliance. | Yes |
| Password | secureBox | Password to login to the NetScaler appliance. Default value is set to ${p:environment/NetScaler/password} | Yes |
| Server List | textAreaBox | A comma and/or new line separated list of servers to disable. | Yes |
| Wait time (seconds) | textBox | The remaining time in seconds for the servers to be disabled. | Yes |
| Graceful shutdown | checkBox | Wait for connections to drain from servers before shutting down | Yes |

## Enable Services

Enable one or more services in NetScaler

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Server URL | textBox | URL to the NetScaler appliance. This could be the IP or domain name of the appliance including the protocol and port number, eg. https://netscaler.domain.com:8443 or http://10.1.2.3 . | Yes |
| Username | textBox | Username to login to the NetScaler appliance. | Yes |
| Password | secureBox | Password to login to the NetScaler appliance. Default value is set to ${p:environment/NetScaler/password} | Yes |
| Service List | textAreaBox | A comma and/or new line separated list of services to enable. | Yes |

## Disable Services

Disable one or more services in NetScaler

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Server URL | textBox | URL to the NetScaler appliance. This could be the IP or domain name of the appliance including the protocol and port number, eg. https://netscaler.domain.com:8443 or http://10.1.2.3 . | Yes |
| Username | textBox | Username to login to the NetScaler appliance. | Yes |
| Password | secureBox | Password to login to the NetScaler appliance. Default value is set to ${p:environment/NetScaler/password} | Yes |
| Service List | textAreaBox | A comma and/or new line separated list of services to disable. | Yes |
| Wait time (seconds) | textBox | The remaining time in seconds for the service to be disabled. | Yes |
| Graceful shutdown | checkBox | Wait for connections to drain from service before shutting down | Yes |

## Enable Service Groups

Enable one or more service groups in NetScaler

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Server URL | textBox | URL to the NetScaler appliance. This could be the IP or domain name of the appliance including the protocol and port number, eg. https://netscaler.domain.com:8443 or http://10.1.2.3 . | Yes |
| Username | textBox | Username to login to the NetScaler appliance. | Yes |
| Password | secureBox | Password to login to the NetScaler appliance. Default value is set to ${p:environment/NetScaler/password} | Yes |
| Service Group List | textAreaBox | A comma and/or new line separated list of service groups to enable. | Yes |

## Check Service Group Status

Check the status of service groups in Netscaler

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Server URL | textBox | URL to the NetScaler appliance. This could be the IP or domain name of the appliance including the protocol and port number, eg. https://netscaler.domain.com:8443 or http://10.1.2.3 . | Yes |
| Username | textBox | Username to login to the NetScaler appliance. | Yes |
| Password | secureBox | Password to login to the NetScaler appliance. Default value is set to ${p:environment/NetScaler/password} | Yes |
| Expected State | selectBox | Expected state for listed service groups | Yes |
| Service Group List | textAreaBox | A comma and/or new line separated list of service groups to disable. | Yes |
| Timeout (seconds) | textBox | Time to wait until specified service groups reach expected status (Set to 0 to check only once) | Yes |

## Check Service Group Bindings

Check the status of servers bound to a given service group

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Server URL | textBox | URL to the NetScaler appliance. This could be the IP or domain name of the appliance including the protocol and port number, eg. https://netscaler.domain.com:8443 or http://10.1.2.3 . | Yes |
| Username | textBox | Username to login to the NetScaler appliance. | Yes |
| Password | secureBox | Password to login to the NetScaler appliance. Default value is set to ${p:environment/NetScaler/password} | Yes |
| Allowed States | textBox | Comma separated list of allowed states for service group members | Yes |
| Service Group Name | textBox | Name of the service group. | Yes |
| Timeout (seconds) | textBox | Time to wait until all members reach expected status (Set to 0 to check only once) | Yes |

## Disable Service Groups

Disable one or more service groups in NetScaler

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Server URL | textBox | URL to the NetScaler appliance. This could be the IP or domain name of the appliance including the protocol and port number, eg. https://netscaler.domain.com:8443 or http://10.1.2.3 . | Yes |
| Username | textBox | Username to login to the NetScaler appliance. | Yes |
| Password | secureBox | Password to login to the NetScaler appliance. Default value is set to ${p:environment/NetScaler/password} | Yes |
| Service Group List | textAreaBox | A comma and/or new line separated list of service groups to disable. | Yes |
| Wait time (seconds) | textBox | The remaining time in seconds for the service groups to be disabled. | Yes |
| Graceful shutdown | checkBox | Wait for connections to drain from service group before shutting down | Yes |

