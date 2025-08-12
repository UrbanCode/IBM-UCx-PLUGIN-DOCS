
# IBM DevOps Deploy Resources - Process Steps

## Process steps in the IBM DevOps Deploy Resources plug-in

* [Add Resource To Team](#add_resource_to_team)
* [Add Tag to Resource](#add_tag_to_resource)
* [Apply Resource Template](#apply_resource_template)
* [Check If Resource Exists](#check_if_resource_exists)
* [Check If Resource Has Role](#check_if_resource_has_role)
* [Create Resource](#create_resource)
* [Delete Agent](#delete_agent)
* [Delete Many Agents](#delete_many_agents)
* [Delete Many Resources](#delete_many_resources)
* [Delete Resource](#delete_resource)
* [Delete Resource Inventory For Component](#delete_resource_inventory_for_component)
* [Get Agent Details](#get_agent_details)
* [Get Agent Property](#get_agent_property)
* [Get Component Version For Resource](#get_component_version_for_resource)
* [Get Resource Property](#get_resource_property)
* [Get Resource Role Property](#get_resource_role_property)
* [Install Agent with SSH](#install_agent_with_ssh)
* [Map Component Tag to Resource](#map_component_tag_to_resource)
* [Remove Tag From Resource](#remove_tag_from_resource)
* [Set Agent Property](#set_agent_property)
* [Set Resource Property](#set_resource_property)
* [Set Resource Role Property](#set_resource_role_property)
* [Synchronize Resources](#synchronize_resources)
* [Wait for Resources](#wait_for_resources)
* [Create Multiple Resources](#create_multiple_resources)


## Add Resource To Team

Adds a resource to a team for a given type classification.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Resource Path | String | Path to your resource (e.g. ResourceFolder/Resource) | Yes |
| Team | String |  | Yes |
| Type | String | The type classification to add. Leave blank to use the type Standard Resource. | No |

## Add Tag to Resource

Add a tag to a resource.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Resource Path | String | Path to your resource (e.g. ResourceFolder/Resource) | Yes |
| Tag Name | String |  | Yes |

## Apply Resource Template

Applies a resource template to a resource.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Properties | String | The properties used by the template. This should be a newline separated list of name value pairs of the form name=value. | Yes |
| Resource | String | The id or path of the resource to apply the template to. | Yes |
| Resource Template | String | The id of the resource template to apply. | Yes |

## Check If Resource Exists

This step will succeed if the resource exists and fail if it does not.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Resource Path | String | Path to your resource (e.g. ResourceFolder/Resource) | Yes |

## Check If Resource Has Role

Step succeeds if resource has the specified role and fails if it doesnt.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Resource | String | path/ID of the resource. | Yes |
| Role | String | name/ID of the role. | Yes |

## Create Resource

Creates a resource. The resource could be a group, component resource, agent resource, or agent pool resource.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Agent Name | String | If this is an agent resource, enter the agent name here. | No |
| Agent Pool Name | String | If this is an agent pool resource, enter the agent pool name here. | No |
| New Resource Name | String | The resource name must be unique under its parent resource. | Yes |
| Parent Resource Path | String | The parent object of this resource. Leave blank to create a Top Level Resource | No |
| Role Name | String | Associate a resource role with this resource. If this is going to be a component resource, enter the component name here. | No |

## Delete Agent

Delete the specified agent.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Agent Name | String | The name of the agent to delete. | Yes |

## Delete Many Agents

Deletes agents, specified as a comma-separated list.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Agent Name List | String | The list of agents, separated by commas. | Yes |

## Delete Many Resources

Deletes resources, specified as a comma-separated list.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Resource Path List | String | The list of resources, separated by commas. | Yes |

## Delete Resource

Deletes the specified resource.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Resource Path | String | The path of the resource to delete. (e.g. ResourceFolder/ResourcePath | Yes |

## Delete Resource Inventory For Component

Deletes all inventory entries on a resource for a given component. Can filter by version and version status.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component Name | String | Component Name or newline separated list of components | Yes |
| Resource Path | String | Path to your resource (e.g. ResourceFolder/Resource) | Yes |
| Status Filter | String | Only inventory matching this version status (such as Active) will be deleted. If left blank, inventory with any statuses that matches the other criteria will be deleted. | No |
| Version Filter | String | Only inventory matching this version will be deleted.If left blank, inventory with any version that matches the other criteria will be deleted. | No |

## Get Agent Details

Retrieve basic configuration information about a agent.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Agent | String | Agent name or ID | Yes |

## Get Agent Property

Gets an agent property, given an agent and a property name. Name/value pair is outputted on this step.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Agent | String | Name/ID of the agent | Yes |
| Property Name | String | The name of the property. | Yes |

## Get Component Version For Resource

Takes a component and a resource, shows what version of that component exists on that resource.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component | String | Component name or id. Default is set to use a property called component.id | Yes |
| Resource | String | Resource path or id. Default is set to use a property called resource.id | Yes |

## Get Resource Property

Get a resource property, given a resource and a property name. Name/value pair is outputted on this step.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Property Name | String | The name of the property. | Yes |
| Resource Path | String | Path to your resource (e.g. ResourceFolder/Resource) | Yes |

## Get Resource Role Property

Get a resource role property value, given a resource, role name and a property name. Name/value pair is outputted on this step.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Property Name | String | The name of the property. | Yes |
| Resource Path | String | The path of the resource. (e.g. ResourcePath/Resource) | Yes |
| Role Name | String | The name of the role. | Yes |

## Install Agent with SSH

Installs an agent to a remote system over SSH.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Agent Install Directory | String | Directory to install the agent to. | Yes |
| Agent Name | String | A unique name for the new agent and its resource. | Yes |
| Hostname/IP | String | The hostname or IP of the remote system to target. | Yes |
| Java Home | String | Path to the JRE/JDK on the target system. If blank, uses target machines JAVA\_HOME | No |
| Mutual Authentication | Boolean | If this is checked, the agent will be configured to use mutual authentication. | No |
| SSH Password | Password | Password to provide for SSH authentication. | No |
| SSH Username | String | Username to provide for SSH authentication. | No |
| Server Hostname/IP | String | Hostname or IP for the agent to connect to the server. | Yes |
| Wait for Agent Connection | Boolean | If this is checked, step will wait until the agent has connected or has timed out. | No |

## Map Component Tag to Resource

Creates a new component tag resource. Maps a Component Tag to a previously created agent.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component Tag | String | Name or ID of a component tag to associate with the resource;any components with that tag can be deployed to this resource. | Yes |
| New Component Tag Resource Name | String | The resource name must be unique under its parent resource. | Yes |
| Parent Agent Resource Path | String | The parent object of this resource. The Component Tag must be mapped directly to an agent. | Yes |

## Remove Tag From Resource

Remove a tag from a resource.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Resource Path | String | Path to your resource (e.g. ResourceFolder/Resource) | Yes |
| Tag Name | String |  | Yes |

## Set Agent Property

Sets a property for an agent.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Agent | String | name/ID of the agent | Yes |
| Property Name | String | name of the property to set | Yes |
| Property Value | String | value of the property to set | No |
| Secure | Boolean | check if the property should be secure | No |

## Set Resource Property

Sets a property for a resource.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Property Name | String | name of the property to set. | Yes |
| Property Value | String | value of the property to set. | No |
| Resource | String | path/ID of the resource. | Yes |
| Secure | Boolean | check if the property should be secure. | No |

## Set Resource Role Property

Sets a property for a resource role. Property must be pre-defined on the role.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Property Name | String | name of the property to set. | Yes |
| Property Value | String | value of the property to set. | No |
| Resource | String | path/ID of the resource. | Yes |
| Role | String | name/ID of the role. | Yes |

## Synchronize Resources

Synchronize one resource tree with another.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Exclude Resources | String | Comma- or space-separated list of patterns of resources that must be excluded. | No |
| Include Resources | String | Comma- or space-separated list of patterns of resources that must be included. | Yes |
| Perform Adds | Boolean | If this is checked, resources may be added to the target tree to achieve synchronization. | No |
| Perform Deletes | Boolean | If this is checked, resources may be deleted from the target to achieve synchronization. | No |
| Perform Property Changes | Boolean | If this is checked, properties in the target tree may be changed to achieve synchronization. | No |
| Source Resource | String | The resource tree that will be the basis of the sync. | Yes |
| Target Resource | String | The resource tree to apply changes to. | Yes |

## Wait for Resources

Wait for one or more resources to be online.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Resources | String | Resource paths or IDs to check, one per line. | Yes |
| Timeout (s) | String | Seconds to wait for resources to be online. The step will run without a timeout if this is 0 or blank. | No |

## Create Multiple Resources

Creates multiple resources using JSON format.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| JSON File/Text | String | Body of JSON text or a file to define resources. | No |


