
# Microsoft Windows Failover Clusters - Process Steps
rs plug-in

* [Bring Resources Online](#bring_resources_online)
* [Bring Services or Applications Online](#bring_services_or_applications_online)
* [Move Services or Applications to Node](#move_services_or_applications_to_node)
* [Start Cluster Node](#start_cluster_node)
* [Start Cluster Service](#start_cluster_service)
* [Stop Cluster Node](#stop_cluster_node)
* [Stop Cluster Service](#stop_cluster_service)
* [Take Resources Offline](#take_resources_offline)
* [Take Services or Applications Offline](#take_services_or_applications_offline)


## Bring Resources Online

Bring clustered resources online.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cluster Name | String | Leave blank to specify the local cluster. | No |
| Resource List | String | A comma-separated list of resources to bring online. | Yes |
| Run Commands In Parallel? | Boolean | If checked, all commands will be run in parallel. | No |

## Bring Services or Applications Online

Bring clustered services or applications (resource groups) online.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cluster Name | String | Leave blank to specify the local cluster. | No |
| Run Commands In Parallel? | Boolean | If checked, all commands will be run in parallel. | No |
| Service or Application List | String | A comma-separated list of services and/or applications to bring online. | Yes |

## Move Services or Applications to Node

Move a clustered service or application to a different node.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cluster Name | String | Leave blank to specify the local cluster. | No |
| Node Name | String |  | Yes |
| Service or Application Name | String | A comma-separated list of services and/or application to move to another node. | Yes |

## Start Cluster Node

Start the cluster service on one node in the cluster. If this is the first node started, it will wait for other nodes to join. The cluster will begin to run when a quorum has formed.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cluster Name | String | Leave blank to specify the local cluster. | No |
| Node Name | String | Leave blank to specify the local node. | No |

## Start Cluster Service

Start the cluster service on all nodes that are not yet started.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cluster Name | String | Leave blank to start the local cluster. | No |
| Wait Time | String | Specifies the time in seconds to wait before starting. Leave blank to wait until there is a quorum. | No |

## Stop Cluster Node

Stop the cluster service on one node in the cluster. This will fail if it would bring the cluster below quorum.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cluster Name | String | Leave blank to specify the local cluster. | No |
| Node Name | String | Leave blank to specify the local node. | No |

## Stop Cluster Service

Stop the cluster service on all nodes in a failover cluster, which will stop all services and applications configured in the cluster.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cluster Name | String | Leave blank to stop the local cluster. | No |

## Take Resources Offline

Take clustered resources offline.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cluster Name | String | Leave blank to specify the local cluster. | No |
| Resource List | String | A comma-separated list of resources to take offline. | Yes |
| Run Commands In Parallel? | Boolean | If checked, all commands will be run in parallel. | No |

## Take Services or Applications Offline

Take clustered services or applications (resource groups) offline.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cluster Name | String | Leave blank to specify the local cluster. | No |
| Run Commands In Parallel? | Boolean | If checked, all commands will be run in parallel. | No |
| Service or Application List | String | A comma-separated list of services and/or applications to bring offline. | Yes |


