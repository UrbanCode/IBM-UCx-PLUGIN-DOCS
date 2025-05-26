
# WebSphere Application Server - Deployment - Roles

The plug-in adds these roles automatically to resources. You cannot add these roles manually.

- [WebSphere Application Server - Deployment - Roles](#websphere-application-server---deployment---roles)
  - [Roles](#roles)
    - [PortalServer](#portalserver)
    - [WebSphereCell](#webspherecell)
    - [WebSphereCluster](#webspherecluster)
    - [WebSphereDynamicCluster](#webspheredynamiccluster)
    - [WebSphereNode](#webspherenode)
    - [WebSphereNodeGroup](#webspherenodegroup)
    - [WebSphereServer](#websphereserver)

## PortalServer

Role for resources that represent a Portal Server.

| Name | Type | Description | Property |
| --- | --- | --- | --- |
| Portal administrator password | Password | The Portal Server administrator password to use. | ``${p?:resource/portal.admin.password}`` |
| Portal administrator user name | String | The Portal Server administrator user to use. | ``${p?:resource/portal.admin.user}`` |
| Portal configuration Port | String | The Portal Server transport port number used to access the host. | ``${p?:resource/portal.config.port}`` |
| Portal installation directory | String | The path to the directory where the Portal Server is installed. | ``${p?:resource/portal.home}`` |
| Portal profile directory | String | The path to the directory where the Portal Server profile resides. | ``${p?:resource/portal.profile.home}`` |
| Server Host | String | The host where Portal Server resides. | ``${p?:resource/portal.host}`` |
| Server Name | String | The name of the WebSphere Application Server that this resource represents. | ``${p?:resource/websphere.server}`` |
| Websphere administrator password | Password | The Websphere administrator password to use. | ``${p?:resource/websphere.password}`` |

## WebSphereCell

Role for resources that represents a WebSphere Cell

| Name | Type | Description | Property |
| --- | --- | --- | --- |
| Bi Di Text Direction | String | The bidi text direction for this WebSphere cell. Acceptable values are: LTR, RTL, CONTEXTUAL. | ``${p?:resource/websphere.cell.biditextdirection}`` |
| Cell Discovery Protocol | String | The cell discovery protocol for this WebSphere cell. Acceptable values are: UDP, TCP, MULTICAST. | ``${p?:resource/websphere.cell.celldiscoveryprotocol}`` |
| Cell Registered | Boolean | The cell registered for this WebSphere cell. | ``${p?:resource/websphere.cell.cellregistered}`` |
| Cell Type | String | The cell type for this WebSphere cell. Acceptable values are: DISTRIBUTED, STANDALONE. | ``${p?:resource/websphere.cell.celltype}`` |
| Discovery Address Endpoint Name | String | The discovery address endpoint name for this WebSphere cell. | ``${p?:resource/websphere.cell.discoveryaddressendpointname}`` |
| Enable Bi Di | Boolean | Enable bidi for this WebSphere cell. | ``${p?:resource/websphere.cell.enablebidi}`` |
| Multicast Discovery Address Endpoint Name | String | The multicast discovery address endpoint name for this WebSphere cell. | ``${p?:resource/websphere.cell.multicastdiscoveryaddressendpointname}`` |
| Name | String | The name for this WebSphere cell. | ``${p?:resource/websphere.cell}`` |
| Short Name | String | The short name for this WebSphere cell. | ``${p?:resource/websphere.cell.shortname}`` |
| WSAdmin Command Path | String | The path to the directory where the wsadmin tool resides. | ``${p?:resource/websphere.commandPath}`` |
| WebSphere Configuration File | String | The configuration file that stores the configuration data for the cell. | ``${p?:resource/websphere.cell.configurationfile}`` |
| WebSphere Configuration Types | String | A list, separated by commas or newline characters, of the configuration types to be available for Configuration Discovery and Apply steps. | ``${p?:resource/websphere.cell.configurationtypes}`` |
| WebSphere Connection Type | String | The connection type to use with the wsadmin tool. Acceptable values are: SOAP, RMI, and NONE | ``${p?:resource/websphere.connType}`` |
| WebSphere Host | String | The host to connect to with the wsadmin tool. | ``${p?:resource/websphere.host}`` |
| WebSphere Password | Password | The WebSphere password to use. | ``${p?:resource/websphere.password}`` |
| WebSphere Port | String | The port to connect to with the wsadmin tool. | ``${p?:resource/websphere.port}`` |
| WebSphere Profile Path | String | The path to the directory where the profile for the cell resides. | ``${p?:resource/websphere.profilePath}`` |
| WebSphere User | String | The WebSphere user to use. | ``${p?:resource/websphere.user}`` |

## WebSphereCluster

Role for resources that represents a WebSphere server cluster.

| Name | Type | Description | Property |
| --- | --- | --- | --- |
| Cluster Address | String | The cluster address for this WebSphere server cluster. | ``${p?:resource/websphere.servercluster.clusteraddress}`` |
| Description | String | The description for this WebSphere server cluster. | ``${p?:resource/websphere.servercluster.description}`` |
| Enable Cluster Addressing | Boolean | The Enable Cluster Addressing property for this WebSphere server cluster. | ``${p?:resource/websphere.servercluster.enableclusteraddressing}`` |
| Enable H A | Boolean | The Enable H A property for this WebSphere server cluster. | ``${p?:resource/websphere.servercluster.enableha}`` |
| Jsf Provider | String | The JSF provider for this WebSphere server cluster. | ``${p?:resource/websphere.servercluster.jsfprovider}`` |
| Name | String | The name for this WebSphere server cluster. | ``${p?:resource/websphere.cluster}`` |
| Node Group Name | String | The node group name for this WebSphere server cluster. | ``${p?:resource/websphere.servercluster.nodegroupname}`` |
| Prefer Local | Boolean | The Prefer Local property for this WebSphere server cluster. | ``${p?:resource/websphere.servercluster.preferlocal}`` |
| Prefetch D W L M Table | Boolean | The Prefetch D W L M Table property for this WebSphere server cluster. | ``${p?:resource/websphere.servercluster.prefetchdwlmtable}`` |
| Server I O Timeout Retry | String | The Server I/O Timeout Retry property for this WebSphere server cluster. | ``${p?:resource/websphere.servercluster.serveriotimeoutretry}`` |
| Server Type | String | The server type for this WebSphere server cluster. Acceptable values are: PROXY\_SERVER, APPLICATION\_SERVER, ONDEMAND\_ROUTER. | ``${p?:resource/websphere.servercluster.servertype}`` |
| Short Name | String | The short name for this WebSphere server cluster. | ``${p?:resource/websphere.servercluster.shortname}`` |

## WebSphereDynamicCluster

Role for resources that represents a WebSphere dynamic cluster.

| Name | Type | Description | Property |
| --- | --- | --- | --- |
| Isolation Group | String | The isolation group for this WebSphere dynamic cluster. | ``${p?:resource/websphere.dynamiccluster.isolationgroup}`` |
| Max Instances | String | The Max Instances property for this WebSphere dynamic cluster. | ``${p?:resource/websphere.dynamiccluster.maxinstances}`` |
| Max Nodes | String | The Max Nodes property for this WebSphere dynamic cluster. | ``${p?:resource/websphere.dynamiccluster.maxnodes}`` |
| Membership Policy | String | The membership policy for this WebSphere dynamic cluster. | ``${p?:resource/websphere.dynamiccluster.membershippolicy}`` |
| Min Instances | String | The Min Instances property for this WebSphere dynamic cluster. | ``${p?:resource/websphere.dynamiccluster.mininstances}`` |
| Min Nodes | String | The Min Nodes property for this WebSphere dynamic cluster. | ``${p?:resource/websphere.dynamiccluster.minnodes}`` |
| Name | String | The name for this WebSphere dynamic cluster. | ``${p?:resource/websphere.dynamiccluster.name}`` |
| Num Vertical Instances | String | The Num Vertical Instances property for this WebSphere dynamic cluster. | ``${p?:resource/websphere.dynamiccluster.numverticalinstances}`` |
| Operational Mode | String | The operational mode for this WebSphere dynamic cluster. | ``${p?:resource/websphere.dynamiccluster.operationalmode}`` |
| Server Inactivity Time | String | The Server Inactivity Time property for this WebSphere dynamic cluster. | ``${p?:resource/websphere.dynamiccluster.serverinactivitytime}`` |
| Server Type | String | The server type for this WebSphere dynamic cluster. | ``${p?:resource/websphere.dynamiccluster.servertype}`` |
| Strict Isolation Enabled | String | The Strict Isolation Enabled property for this WebSphere dynamic cluster. | ``${p?:resource/websphere.dynamiccluster.strictisolationenabled}`` |

## WebSphereNode

Role for resources that represents a WebSphere node

| Name | Type | Description | Property |
| --- | --- | --- | --- |
| Discovery Protocol | String | The discovery protocol for this WebSphere node. Acceptable values are: UDP, TCP, MULTICAST. | ``${p?:resource/websphere.node.discoveryprotocol}`` |
| Host Name | String | The host name for this WebSphere node. | ``${p?:resource/websphere.node.hostname}`` |
| Max File Permission For Apps | String | The maximum file permissions for applications for this WebSphere node. | ``${p?:resource/websphere.node.maxfilepermissionforapps}`` |
| Name | String | The name for this WebSphere node. | ``${p?:resource/websphere.node}`` |
| Profile Name | String | The profile name for this WebSphere node. | ``${p?:resource/websphere.node.profilename}`` |
| Short Name | String | The short name for this WebSphere node. | ``${p?:resource/websphere.node.shortname}`` |

## WebSphereNodeGroup

Role for resources that represents a WebSphere node group.

| Name | Type | Description | Property |
| --- | --- | --- | --- |
| Description | String | The description for this WebSphere node group. | ``${p?:resource/websphere.nodegroup.description}`` |
| Name | String | The name for this WebSphere node group. | ``${p?:resource/websphere.nodegroup.name}`` |
| Short Name | String | The short name for this WebSphere node group. | ``${p?:resource/websphere.nodegroup.shortname}`` |

## WebSphereServer

Role for resources that represents a WebSphere server

| Name | Type | Description | Property |
| --- | --- | --- | --- |
| Adjust Port | String | The adjust port for this WebSphere server. | ``${p?:resource/websphere.server.adjustport}`` |
| Change Group After Startup | String | The Change Group After Startup property for this WebSphere server. | ``${p?:resource/websphere.server.changegroupafterstartup}`` |
| Change User After Startup | String | The Change User After Startup property for this WebSphere server. | ``${p?:resource/websphere.server.changeuserafterstartup}`` |
| Cluster Name | String | The cluster name for this WebSphere server. | ``${p?:resource/websphere.server.clustername}`` |
| Development Mode | Boolean | The development mode for this WebSphere server. | ``${p?:resource/websphere.server.developmentmode}`` |
| EndPoint Port Mappings | String | A list, separated by newline characters, of endpoint name to base port mappings for each node. | ``${p?:resource/websphere.server.endpointportmappings}`` |
| Model Id | String | The model ID for this WebSphere server. | ``${p?:resource/websphere.server.modelid}`` |
| Name | String | The name for this WebSphere server. | ``${p?:resource/websphere.server}`` |
| Node List | String | A comma-separated list of node names to add to the cluster. The nodes must already exist | ``${p?:resource/websphere.server.nodelist}`` |
| Parallel Start Enabled | Boolean | The Parallel Start Enabled property for this WebSphere server. | ``${p?:resource/websphere.server.parallelstartenabled}`` |
| Provision Components | Boolean | The Provision Components property for this WebSphere server. | ``${p?:resource/websphere.server.provisioncomponents}`` |
| Server Count | String | The number of servers to create per node within the cluster. | ``${p?:resource/websphere.server.servercount}`` |
| Server Name Formats | String | A list of server name formats, separated by newline characters. Use the following form: nodename->pattern. Patterns can contain %c, %n and %i where %c represents the clustername, %n represents the nodename, and %i is the index. The values for the pattern can be specified in any order. | ``${p?:resource/websphere.server.servernameformats}`` |
| Server Type | String | The server type for this WebSphere server. | ``${p?:resource/websphere.server.servertype}`` |
| Short Name | String | The short name for this WebSphere server. | ``${p?:resource/websphere.server.shortname}`` |

|Back to ...||Latest Version|WebSphere Application Server - Deployment |||||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[131.1165947](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Websphere/ucd-WebSphere-131.1165947.zip)|[Readme](README.md)|[Overview](overview.md)|[User permissions](user permissions.md)|[Usage](usage.md)|[Steps](steps.md)|[Troubleshooting](troubleshooting.md)|[Downloads](downloads.md)|
