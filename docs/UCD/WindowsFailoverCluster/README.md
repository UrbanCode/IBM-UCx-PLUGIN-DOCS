
# Microsoft Windows Failover Clusters

A failover cluster is a group of independent computers that work together to increase the availability of applications and services.

The clustered servers (called nodes) are connected by physical cables and by software. If one of the cluster nodes fails, another node begins to provide service (a process known as failover).

Users experience a minimum of disruptions in service.

This plugin provides steps for managing Windows Server failover clusters, a feature found in Windows Server Enterprise editions beginning with Windows Server 2008 R2.


## Available Steps

Bring Resources Online: Bring clustered resources online.

Bring Services or Applications Online: Bring clustered services or applications (resource groups) online.

Move Services or Applications to Node: Move a clustered service or application to a different node.

Start Cluster Node: Start the cluster service on one node in the cluster. If this is the first node started, it will wait for other nodes to join. The cluster will begin to run when a quorum has formed.

Start Cluster Service: Start the cluster service on all nodes that are not yet started.

Stop Cluster Node: Stop the cluster service on one node in the cluster. This will fail if it would bring the cluster below quorum.

Stop Cluster Service: Stop the cluster service on all nodes in a failover cluster, which will stop all services and applications configured in the cluster.

Take Resources Offline: Take clustered resources offline.

Take Services or Applications Offline: Take clustered services or applications (resource groups) offline.


