
# F5 BIG-IP - Process Steps


* [Add Pool Member](#add_pool_member)
* [Confirm Disabled Node](#confirm_disabled_node)
* [Confirm Enabled Node](#confirm_enabled_node)
* [Create Address Data Group](#create_address_data_group)
* [Create External Data Group](#create_external_data_group)
* [Create Node](#create_node)
* [Create Pool](#create_pool)
* [Create String Data Group](#create_string_data_group)
* [Create Value Data Group](#create_value_data_group)
* [Create iRule](#create_irule)
* [Delete Data Group](#delete_data_group)
* [Delete Node](#delete_node)
* [Delete Pool](#delete_pool)
* [Delete iRule](#delete_irule)
* [Disable Node](#disable_node)
* [Disable Pool Member](#disable_pool_member)
* [Enable Node](#enable_node)
* [Enable Pool Member](#enable_pool_member)
* [Get iRule Statistics](#get_irule_statistics)
* [Modify External Data Group](#modify_external_data_group)
* [Remove Pool Member](#remove_pool_member)


## Add Pool Member

Add a node to a pool.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Node Names | String | The name of the node to add to the pool. For example: WorkerNode. Separate multiple node names with commas or newline characters. There must be a 1-to-1 mapping of Node Names to Node Ports. | Yes |
| Node Ports | String | The port of the node to add to the pool. For example: 80. Separate multiple node ports with commas or newline characters. There must be a 1-to-1 mapping of Node Names to Node Ports. | Yes |
| Partition | String | The partition where the node resides. Typically, accept the default value of Common unless you manage multiple partitions. | Yes |
| Password | Password | The password for the F5 appliance. | Yes |
| Pool Names | String | The name of the pool to add the node to. Separate multiple pool names with commas or newline characters. | Yes |
| Server URL | String | The URL of the F5 appliance. This can be the IP address or domain name of the appliance, including the protocol and port number. For example: https://f5.example.com:8443 or http://192.0.2.1:8443. | Yes |
| Timeout | String | Connection timeout, in seconds, to the F5 appliance. | Yes |
| User Name | String | The username for the F5 appliance. | Yes |

## Confirm Disabled Node

This step succeeds if the node is offline and disabled. The step fails if the node is online or enabled.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Include Availability Status | Boolean | Select to confirm the disabled availability status of the node. | No |
| Node Names | String | The name of the node to check. For example: WorkerNode. Separate multiple node names with commas or newline characters. | Yes |
| Partition | String | The partition where the node resides. Typically, accept the default value of Common unless you manage multiple partitions. | Yes |
| Password | Password | The password for the F5 appliance. | Yes |
| Server URL | String | The URL of the F5 appliance. This can be the IP address or domain name of the appliance, including the protocol and port number. For example: https://f5.example.com:8443 or http://192.0.2.1:8443. | Yes |
| User Name | String | The username for the F5 appliance. | Yes |

## Confirm Enabled Node

This step succeeds if the node is online and enabled. The step fails if the node is offline or disabled.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Node Names | String | The name of the node to check. For example: WorkerNode. Separate multiple node names with commas or newline characters | Yes |
| Partition | String | The partition where the node resides. Typically, accept the default value of Common unless you manage multiple partitions. | Yes |
| Password | Password | The password for the F5 appliance. | Yes |
| Server URL | String | The URL of the F5 appliance. This can be the IP address or domain name of the appliance, including the protocol and port number. For example: https://f5.example.com:8443 or http://192.0.2.1:8443. | Yes |
| User Name | String | The username for the F5 appliance. | Yes |

## Create Address Data Group

Create or modify an address data group. A data group is also known as a class.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Address Data Group Name | String | The name of the address data group to create. | Yes |
| IP Address List | String | The IP addresses of the address data group members. Separate multiple IP addresses with commas or newline characters. | Yes |
| If Data Group already exists | Enumeration:
* WARN\_ONLY
* OVERWRITE
* FAIL
| Select the action to take if a data group with the same name already exists. | No |
| Netmask List | String | The netmasks of the address data group members. Separate multiple netmasks with commas or newline characters. Specify 255.255.255.255 as the default if netmask is unknown. | Yes |
| Partition | String | The partition where the iRules reside. Typically, accept the default value of Common unless you manage multiple partitions. | Yes |
| Password | Password | The password for the F5 appliance. | Yes |
| Server URL | String | The URL of the F5 appliance. This can be the IP address or domain name of the appliance, including the protocol and port number. For example: https://f5.example.com:8443 or http://192.0.2.1:8443. | Yes |
| Timeout | String | Connection timeout, in seconds, to the F5 appliance. | Yes |
| User Name | String | The username for the F5 appliance. | Yes |

## Create External Data Group

Create an external data group from a file in the data group file list. A data group is also known as a class.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| External Data Group Name | String | The name of the external data group to create. | Yes |
| File Format Type | Enumeration:
* DEFAULT
* FILE\_FORMAT\_UNKNOWN
* FILE\_FORMAT\_CSV
| Select the file format for the data group. | No |
| File Mode | Enumeration:
* DEFAULT
* FILE\_MODE\_TYPE\_READ
* FILE\_MODE\_TYPE\_READ\_WRITE
| Select the file mode for the data group. | No |
| File Name | String | The data group file object for the specified data group. This file must exist in the data group file list in F5. | Yes |
| If Data Group already exists | Enumeration:
* WARN\_ONLY
* FAIL
| Select the action to take if a data group with the same name already exists. | No |
| Partition | String | The partition where the iRules reside. Typically, accept the default value of Common unless you manage multiple partitions. | Yes |
| Password | Password | The password for the F5 appliance. | Yes |
| Server URL | String | The URL of the F5 appliance. This can be the IP address or domain name of the appliance, including the protocol and port number. For example: https://f5.example.com:8443 or http://192.0.2.1:8443. | Yes |
| Timeout | String | Connection timeout, in seconds, to the F5 appliance. | Yes |
| User Name | String | The username for the F5 appliance. | Yes |

## Create Node

Create a node.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Monitors | String | A list of monitors to assign to the node, separated by commas or newline characters. For example: icmp. | No |
| Node Addresses | String | The address of the node to create. For example: 192.0.2.1. Separate multiple node addresses with commas or newline characters. | Yes |
| Node Connection Limits | String | The node connection limit. Separate multiple node connection limits with commas or newline characters. | Yes |
| Node Names | String | The name of the node to create. For example: WorkerNode. Separate multiple node names with commas or newline characters. | Yes |
| Partition | String | The partition where the node resides. Typically, accept the default value of Common unless you manage multiple partitions. | Yes |
| Password | Password | The password for the F5 appliance. | Yes |
| Server URL | String | The URL of the F5 appliance. This can be the IP address or domain name of the appliance, including the protocol and port number. For example: https://f5.example.com:8443 or http://192.0.2.1:8443. | Yes |
| Timeout | String | Connection and monitor timeout, in seconds, to the F5 appliance. | Yes |
| User Name | String | The username for the F5 appliance. | Yes |

## Create Pool

Create a pool.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Action On Service Down | Enumeration:
* SERVICE\_DOWN\_ACTION\_NONE
* SERVICE\_DOWN\_ACTION\_RESET
* SERVICE\_DOWN\_ACTION\_DROP
* SERVICE\_DOWN\_ACTION\_RESELECT
| Select the action to take when a pool member is unavailable. | Yes |
| Allow NAT | Enumeration:
* STATE\_ENABLED
* STATE\_DISABLED
| Select to allow network address translation (NAT). | Yes |
| Allow SNAT | Enumeration:
* STATE\_ENABLED
* STATE\_DISABLED
| Select to allow secure network address translation (SNAT). | Yes |
| IP ToS to Client | String | Specify the outbound Type of Service (ToS) level for the pool. Leave blank to use the default value. | No |
| IP ToS to Server | String | Specify the inbound Type of Service (ToS) level for the pool. Leave blank to use the default value. | No |
| Link QoS to Client | String | Specify the outbound Level of Service (LoS) level for the pool. Leave blank to use the default value. | No |
| Link QoS to Server | String | Specify the inbound Level of Service (LoS) level for the pool. Leave blank to use the default value. | No |
| Load Balancing Method | Enumeration:
* LB\_METHOD\_ROUND\_ROBIN
* LB\_METHOD\_RATIO\_MEMBER
* LB\_METHOD\_LEAST\_CONNECTION\_MEMBER
* LB\_METHOD\_OBSERVED\_MEMBER
* LB\_METHOD\_PREDICTIVE\_MEMBER
* LB\_METHOD\_RATIO\_NODE\_ADDRESS
* LB\_METHOD\_LEAST\_CONNECTION\_NODE\_ADDRESS
* LB\_METHOD\_FASTEST\_NODE\_ADDRESS
* LB\_METHOD\_OBSERVED\_NODE\_ADDRESS
* LB\_METHOD\_PREDICTIVE\_NODE\_ADDRESS
* LB\_METHOD\_DYNAMIC\_RATIO
* LB\_METHOD\_FASTEST\_APP\_RESPONSE
* LB\_METHOD\_LEAST\_SESSIONS
* LB\_METHOD\_DYNAMIC\_RATIO\_MEMBER
* LB\_METHOD\_L3\_ADDR
| Select the load-balancing method for the pool from the list. | Yes |
| Monitors | String | A list of monitors to assign to the pool, separated by commas or newline characters. | No |
| Partition | String | The partition to create the pool on. Typically, accept the default value of Common unless you manage multiple partitions. | Yes |
| Password | Password | The password for the F5 appliance. | Yes |
| Pool Name | String | The name of the pool to create. | Yes |
| Server URL | String | The URL of the F5 appliance. This can be the IP address or domain name of the appliance, including the protocol and port number. For example: https://f5.example.com:8443 or http://192.0.2.1:8443. | Yes |
| Slow Ramp Time | String | Specify the interval, in seconds, that a pool member is in slow ramp mode. | Yes |
| Timeout | String | Connection timeout, in seconds, to the F5 appliance. | Yes |
| User Name | String | The username for the F5 appliance. | Yes |

## Create String Data Group

Create or modify a string data group. A data group is also known as a class.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| If Data Group already exists | Enumeration:
* WARN\_ONLY
* OVERWRITE
* FAIL
| Select the action to take if a data group with the same name already exists. | No |
| Partition | String | The partition where the iRules reside. Typically, accept the default value of Common unless you manage multiple partitions. | Yes |
| Password | Password | The password for the F5 appliance. | Yes |
| Server URL | String | The URL of the F5 appliance. This can be the IP address or domain name of the appliance, including the protocol and port number. For example: https://f5.example.com:8443 or http://192.0.2.1:8443. | Yes |
| String Data Group Name | String | The name of the string data group to create. | Yes |
| String Member List | String | The member list associated with the string data group. Separate multiple members with commas or newline characters. | No |
| Timeout | String | Connection timeout, in seconds, to the F5 appliance. | Yes |
| User Name | String | The username for the F5 appliance. | Yes |

## Create Value Data Group

Create or modify a value data group. A data group is also known as a class. A value is also known as an integer.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| If Data Group already exists | Enumeration:
* WARN\_ONLY
* OVERWRITE
* FAIL
| Select the action to take if a data group with the same name already exists. | No |
| Partition | String | The partition where the iRules reside. Typically, accept the default value of Common unless you manage multiple partitions. | Yes |
| Password | Password | The password for the F5 appliance. | Yes |
| Server URL | String | The URL of the F5 appliance. This can be the IP address or domain name of the appliance, including the protocol and port number. For example: https://f5.example.com:8443 or http://192.0.2.1:8443. | Yes |
| Timeout | String | Connection timeout, in seconds, to the F5 appliance. | Yes |
| User Name | String | The username for the F5 appliance. | Yes |
| Value Data Group Name | String | The name of the value data group to create. | Yes |
| Value Member List | String | The list of integer members associated with the value data group. Separate multiple integers with commas or newline characters. | No |

## Create iRule

Create the specified iRule


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| If iRule exists | Enumeration:
* WARN\_ONLY
* FAIL\_FAST
| Select the action to take if an iRule with the same name already exists. | No |
| Partition | String | The partition where the iRule resides. Typically, accept the default value of Common unless you manage multiple partitions. | Yes |
| Password | Password | The password for the F5 appliance. | Yes |
| Server URL | String | The URL of the F5 appliance. This can be the IP address or domain name of the appliance, including the protocol and port number. For example: https://f5.example.com:8443 or http://192.0.2.1:8443. | Yes |
| Timeout | String | Connection timeout, in seconds, to the F5 appliance. | Yes |
| User Name | String | The username for the F5 appliance. | Yes |
| iRule Definition | String | Enter text that defines an iRule, or the full path to an iRule definition file. If you specify a file, the file is read and uploaded as the iRule definition. | Yes |
| iRule Name | String | The name of the iRule to create. | Yes |

## Delete Data Group

Delete a data group. A data group is also known as a class.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Data Group Name | String | The name of the data group to delete. | Yes |
| If Class does not exist | Enumeration:
* WARN\_ONLY
* FAIL
| Select the action to take if a class with the specified name does not exist. | No |
| Partition | String | The partition where the iRules reside. Typically, accept the default value of Common unless you manage multiple partitions. | Yes |
| Password | Password | The password for the F5 appliance. | Yes |
| Server URL | String | The URL of the F5 appliance. This can be the IP address or domain name of the appliance, including the protocol and port number. For example: https://f5.example.com:8443 or http://192.0.2.1:8443. | Yes |
| Timeout | String | Connection timeout, in seconds, to the F5 appliance. | Yes |
| User Name | String | The username for the F5 appliance. | Yes |

## Delete Node

Delete a node.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Node Names | String | The name of the node to delete. For example: WorkerNode. Separate multiple node names with commas or newline characters. | Yes |
| Partition | String | The partition where the node resides. Typically, accept the default value of Common unless you manage multiple partitions. | Yes |
| Password | Password | The password for the F5 appliance. | Yes |
| Server URL | String | The URL of the F5 appliance. This can be the IP address or domain name of the appliance, including the protocol and port number. For example: https://f5.example.com:8443 or http://192.0.2.1:8443. | Yes |
| Timeout | String | Connection timeout, in seconds, to the F5 appliance. | Yes |
| User Name | String | The username for the F5 appliance. | Yes |

## Delete Pool

Delete a pool.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Partition | String | The partition where the pool resides. Typically, accept the default value of Common unless you manage multiple partitions. | Yes |
| Password | Password | The password for the F5 appliance. | Yes |
| Pool Name | String | The name of the pool to delete. | Yes |
| Server URL | String | The URL of the F5 appliance. This can be the IP address or domain name of the appliance, including the protocol and port number. For example: https://f5.example.com:8443 or http://192.0.2.1:8443. | Yes |
| Timeout | String | Connection timeout, in seconds, to the F5 appliance. | Yes |
| User Name | String | The username for the F5 appliance. | Yes |

## Delete iRule

Delete an iRule


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| If iRule exists | Enumeration:
* WARN\_ONLY
* FAIL\_FAST
| Select the action to take if an iRule with the specified name does not exist. | No |
| Partition | String | The partition where the iRule resides. Typically, accept the default value of Common unless you manage multiple partitions. | Yes |
| Password | Password | The password for the F5 appliance. | Yes |
| Server URL | String | The URL of the F5 appliance. This can be the IP address or domain name of the appliance, including the protocol and port number. For example: https://f5.example.com:8443 or http://192.0.2.1:8443. | Yes |
| Timeout | String | Connection timeout, in seconds, to the F5 appliance. | Yes |
| User Name | String | The username for the F5 appliance. | Yes |
| iRule Name | String | The name of the iRule to delete. | Yes |

## Disable Node

Disable a specified node for all pools and ports.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Force node offline | Boolean | Select to force the node offline, close connections, and disable monitors. | No |
| Node Names | String | The name of the node to disable. For example: WorkerNode. Separate multiple node names with commas or newline characters. | Yes |
| Partition | String | The partition where the node resides. Typically, accept the default value of Common unless you manage multiple partitions. | Yes |
| Password | Password | The password for the F5 appliance. | Yes |
| Server URL | String | The URL of the F5 appliance. The protocol and port number are optional. For example: https://f5.example.com:8443 or f5.example.com or 192.0.2.1:8443. | Yes |
| Sleep interval(sec) | String | The number of seconds to wait between active connections checks. Used only if Time to wait for existing connections is specified. | No |
| Time to wait for existing connections | String | Specify the amount of time to wait for connections to close before disabling the node in the pool. If 0 or blank, the node is disabled without waiting. | No |
| Timeout | String | Connection timeout, in seconds, for the F5 appliance. | Yes |
| User Name | String | The username for the F5 appliance. | Yes |

## Disable Pool Member

Disable a node in a specified pool.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Force Node Offline | Boolean | Select to force the pool members offline. If selected, this option closes all active connections to the pool member. Leave unselected to allow the connections to drain normally. | No |
| Node Names | String | The name of the node to disable. For example: WorkerNode. Separate multiple node names with commas or newline characters. There must be a 1-to-1 mapping of Node Names to Node Ports. | Yes |
| Node Ports | String | The port of the node to disable. For example: 80. Separate multiple node ports with commas or newline characters. There must be a 1-to-1 mapping of Node Names to Node Ports. | Yes |
| Partition | String | The partition where the node resides. Typically, accept the default value of Common unless you manage multiple partitions. | Yes |
| Password | Password | The password for the F5 appliance. | Yes |
| Pool Names | String | The name of the pool that contains the node to disable. Separate multiple pool names with commas or newline characters. | Yes |
| Pools are global | Boolean | Select if pools are global. Clear if pools are local. | No |
| Server URL | String | The URL of the F5 appliance. This can be the IP address or domain name of the appliance, including the protocol and port number. For example: https://f5.example.com:8443 or http://192.0.2.1:8443. | Yes |
| Sleep interval(sec) | String | The number of seconds to wait between active connections checks. Used only if Wait for existing connections is selected. | No |
| Timeout | String | Connection timeout, in seconds, for the F5 appliance. | Yes |
| User Name | String | The username for the F5 appliance. | Yes |
| Wait for existing connections | Boolean | Select to wait for all current connections to close after disabling the node in the pool and before completing the step. | No |

## Enable Node

Enable a specified node for all pools and ports.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Node Names | String | The name of the node to enable. For example: WorkerNode. Separate multiple node names with commas or newline characters. | Yes |
| Partition | String | The partition where the node resides. Typically, accept the default value of Common unless you manage multiple partitions. | Yes |
| Password | Password | The password for the F5 appliance. | Yes |
| Server URL | String | The URL of the F5 appliance. The protocol and port number are optional. For example: https://f5.example.com:8443 or f5.example.com or 192.0.2.1:8443. | Yes |
| User Name | String | The username for the F5 appliance. | Yes |

## Enable Pool Member

Enable a node in a specified pool.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Node Names | String | The name of the node to enable. For example: WorkerNode. Separate multiple node names with commas or newline characters. There must be a 1-to-1 mapping of Node Names to Node Ports. | Yes |
| Node Ports | String | The port of the node to enable. For example: 80. Separate multiple node ports with commas or newline characters. There must be a 1-to-1 mapping of Node Names to Node Ports. | Yes |
| Partition | String | The partition where the node resides. Typically, accept the default value of Common unless you manage multiple partitions. | Yes |
| Password | Password | The password for the F5 appliance. | Yes |
| Pool Names | String | The name of the pool where the Node is located. Separate multiple pool names with a comma or new line. | Yes |
| Pools are global | Boolean | Select if pools are global. Clear if pools are local. | No |
| Server URL | String | The URL of the F5 appliance. This can be the IP address or domain name of the appliance, including the protocol and port number. For example: https://f5.example.com:8443 or http://192.0.2.1:8443. | Yes |
| Timeout | String | The connection timeout, in seconds, for the F5 appliance. | Yes |
| User Name | String | The username for the F5 appliance. | Yes |

## Get iRule Statistics

Retrieve statistics for an iRule.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| If iRule does not exist | Enumeration:
* WARN\_ONLY
* FAIL
| Select the action to take if an iRule with the specified name does not exist. | No |
| Partition | String | The partition where the iRules reside. Typically, accept the default value of Common unless you manage multiple partitions. | Yes |
| Password | Password | The password for the F5 appliance. | Yes |
| Server URL | String | The URL of the F5 appliance. This can be the IP address or domain name of the appliance, including the protocol and port number. For example: https://f5.example.com:8443 or http://192.0.2.1:8443. | Yes |
| Timeout | String | Connection timeout, in seconds, to the F5 appliance. | Yes |
| User Name | String | The username for the F5 appliance. | Yes |
| iRule Names | String | A list of iRule names to retrieve statistics for. Separate multiple iRule names with commas or newline characters. If blank, all iRule statistics are returned. | No |

## Modify External Data Group

Modify the file format and mode of an external data group. A data group is also known as a class.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| External Data Group Name | String | The name of the external data group to modify. | Yes |
| File Format Type | Enumeration:
* DEFAULT
* FILE\_FORMAT\_UNKNOWN
* FILE\_FORMAT\_CSV
| Select the file format for the data group. | No |
| File Mode | Enumeration:
* DEFAULT
* FILE\_MODE\_TYPE\_READ
* FILE\_MODE\_TYPE\_READ\_WRITE
| Select the file mode for the data group. | No |
| Partition | String | The partition where the iRules reside. Typically, accept the default value of Common unless you manage multiple partitions. | Yes |
| Password | Password | The password for the F5 appliance. | Yes |
| Server URL | String | The URL of the F5 appliance. This can be the IP address or domain name of the appliance, including the protocol and port number. For example: https://f5.example.com:8443 or http://192.0.2.1:8443. | Yes |
| Timeout | String | Connection timeout, in seconds, to the F5 appliance. | Yes |
| User Name | String | The username for the F5 appliance. | Yes |

## Remove Pool Member

Remove a node from a pool.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Node Names | String | The name of the node to remove. For example: WorkerNode. Separate multiple node names with commas or newline characters. There must be a 1-to-1 mapping of Node Names to Node Ports. | Yes |
| Node Ports | String | The port of the node to remove from the pool. For example: 80. Separate multiple node ports with commas or newline characters. There must be a 1-to-1 mapping of Node Names to Node Ports. | Yes |
| Partition | String | The partition where the node resides. Typically, accept the default value of Common unless you manage multiple partitions. | Yes |
| Password | Password | The password for the F5 appliance. | Yes |
| Pool Names | String | The name of the pool to remove the node from. Separate multiple pool names with commas or newline characters. | Yes |
| Server URL | String | The URL of the F5 appliance. This can be the IP address or domain name of the appliance, including the protocol and port number. For example: https://f5.example.com:8443 or http://192.0.2.1:8443. | Yes |
| Timeout | String | Connection timeout, in seconds, to the F5 appliance. | Yes |
| User Name | String | The username for the F5 appliance. | Yes |


