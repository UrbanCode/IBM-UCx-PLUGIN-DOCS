
# Kubernetes - Process Steps

* [Apply Resources](#apply_resources)
* [Auto Scale](#auto_scale)
* [Create Image Components from Helm Release](#create_image_components_from_helm_release)
* [Create Kubernetes Cluster Resource](#create_kubernetes_cluster_resource)
* [Create Resources](#create_resources)
* [Delete Resources](#delete_resources)
* [Expose Resource](#expose_resource)
* [Get Current Context](#get_current_context)
* [Get Kube Config File IBM Cloud](#get_kube_config_file_-_ibm_cloud)
* [Helm Delete](#helm_delete)
* [Helm Does Release Exist](#helm_does_release_exist)
* [Helm Init](#helm_init)
* [Helm Install](#helm_install)
* [Helm Upgrade](#helm_upgrade)
* [Patch Resources](#patch_resources)
* [Process YAML File](#process_yaml_file)
* [Replace Resources](#replace_resources)
* [Rolling Update](#rolling_update)
* [Rollout](#rollout)
* [Run Image](#run_image)
* [Scale](#scale)
* [Set Cluster](#set_cluster)
* [Set Credentials](#set_credentials)
* [Set a Context Entry](#set_a_context_entry)
* [Use Context](#use_context)


## Apply Resources

Apply a configuration to a resource by filename. This resource will be created if it doesnt exist yet. To use, always create the resource initially with this step


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| File Name | String | File name, directory, or URL of a file to use to apply the resources. Only JSON and YAML formats are accepted. | Yes |
| Namespace | String | The namespace on the Kubernetes server to apply the resource in. | No |
| Password | Password | The password to access the Kubernetes server. | No |
| URL | String | The URL of the Kubernetes server. For example: https://10.2.2.2:8443. | No |
| User Name | String | The user name to access the Kubernetes server. | No |

## Auto Scale

Creates an autoscaler that automatically chooses and sets the number of pods that run in a kubernetes cluster.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| File Name | String | File name, directory, or URL of a file to use to specify the resources to auto scale. Only JSON and YAML formats are accepted. | No |
| Namespace | String | The namespace on the Kubernetes server. | No |
| Password | Password | The password to access the Kubernetes server. | No |
| URL | String | The URL of the Kubernetes server. For example: https://10.2.2.2:8443. | No |
| User Name | String | The user name to access the Kubernetes server. | No |

## Create Image Components from Helm Release

Creates UCD components for each container image found in a Helm release


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component Name Prefix | String | If you wish to add a prefix to the name of the Components which will be created to represent container images, enter the prefix here. | No |
| Component Template | String | The template to use when creating components from Kubernetes application resources. You can use component templates to store different sets of registry credentials. | No |
| Release Name | String | Name of the Helm release to be inspected. | Yes |

## Create Kubernetes Cluster Resource

Create a Kubernetes cluster resource in the Resource Tree.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Allow Insecure Connections | String | Set this property to true to allow insecure registry connections. | No |
| Bearer Token | String | Bearer token for authentication to the API server. | No |
| Certificate Authority | String | Path to a certificate file for the certificate authority. | No |
| Client Certificate | String | Path to a client certificate for TLS. | No |
| Client Key | String | Path to a client key for TLS. | No |
| Kubeconfig Cluster | String | The name of the kubeconfig cluster to use. | No |
| Kubeconfig Context | String | The name of the kubeconfig context to use. | No |
| Kubeconfig File | String | Path to the kubeconfig file to use. | No |
| Kubeconfig User | String | The name of the kubeconfig user to use. | No |
| Kubernetes Server Address | String | The address and port of the Kubernetes API server. | Yes |
| Namespace | String | The namespace scope on the kubernetes server. | No |
| Parent Resource | String | The parent resource under which the Kubernetes cluster resource will be created. | Yes |
| Password | Password | Password for basic authentication to the API server. | No |
| User Name | String | Username for basic authentication to the API server. | No |

## Create Resources

Create a resource by file name.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| File Name | String | File name, directory, or URL of a file to use to create the resources. Only JSON and YAML formats are accepted. | Yes |
| Namespace | String | The namespace on the Kubernetes server to create the resource in. | No |
| Password | Password | The password to access the Kubernetes server. | No |
| URL | String | The URL of the Kubernetes server. For example: https://10.2.2.2:8443. | No |
| User Name | String | The user name to access the Kubernetes server. | No |

## Delete Resources

Delete resources by file names, resource types and names, or resource types and labels.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Deletion Type | Enumeration:
* names
* labels
* filename
* all
| Specify the way to select resources to delete. | Yes |
| Namespace | String | The namespace on the Kubernetes server to delete the resource in. | No |
| Password | Password | The password to access the Kubernetes server. | No |
| Resources | String | A list of resources to delete. The format is based on the selected Deletion Type. For Resource Types and Names, enter a comma-separated list of resource types followed by a space separated list of resource names. For example: pod,service baz foo. For Resource Types and Labels, enter a comma-separated list of resource types followed by a name=value pair for the label and its value. For example: pods,services color=blue. For All Resources of Type, specify a comma-separated list of resource types to delete all resources with those types. For example: pods,services. For File, specify a file name, directory, or URL of a file that contains the resources to delete. | Yes |
| URL | String | The URL of the Kubernetes server. For example: https://10.2.2.2:8443. | No |
| User Name | String | The user name to access the Kubernetes server. | No |

## Expose Resource

Expose a replication controller, service, or pod as a new Kubernetes service.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Namespace | String | The namespace on the Kubernetes server to expose the resource in. | No |
| Password | Password | The password to access the Kubernetes server. | No |
| Resource | String | The name of the resource to expose. For a Resource Type of File, specify a file name, directory, or URL of a file that identifies the resource to expose. | Yes |
| Resource Type | Enumeration: rc, service, pod, filename, deployment | Specify the way to select resources to expose. | Yes |
| URL | String | The URL of the Kubernetes server. For example: https://10.2.2.2:8443. | No |
| User Name | String | The user name to access the Kubernetes server. | No |

## Get Current Context

Gets the current-context and sets it as an output property in the format ``${p:stepName/current-context}``


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Namespace | String | The namespace on the Kubernetes server to create the resource in. | No |
| Password | Password | The password to access the Kubernetes server. | No |
| URL | String | The URL of the Kubernetes server. For example: https://10.2.2.2:8443. | No |
| User Name | String | The user name to access the Kubernetes server. | No |

## Get Kube Config File IBM Cloud

Initializes the IBM Cloud Container Services plug-in and downloads Kubernetes configuration data and certificates to connect to your cluster by using kubectl commands. Output of this step is a property in the format ``${p:stepName/kubeconfig}`` which points to the downloaded Kubernetes config file.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cluster Name | String | Name of the Kubernetes cluster for which to download configuration data and certificates for. | No |

## Helm Delete

Deletes a release from Kubernetes


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Flags | String | A newline-seperated list of flags to set when running the helm command. For example: purge | No |
| Release | String | Name of the release to be deleted. | Yes |

## Helm Does Release Exist

Runs a helm status [RELEASE\_NAME] command to determine if a release exists or not. Sets an output property in the format ``${p:stepName/release-exists}`` to a value of true if the release does exist or false if the release does not exist


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Flags | String | A newline-seperated list of flags to set when running the helm command. For example: tls | No |
| Release | String | Name of the release to check | Yes |

## Helm Init

Sets up local configuration in $HELM\_HOME. If the client-only flag is not set, this step will install the latest version of Tiller onto your Kubernetes cluster.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cluster Name | String | By default, Tiller will be installed to the Kubernetes cluster with the current context. To install to a differnet cluster, enter the clusters name in this field. | No |
| Flags | String | A newline-seperated list of flags to set when running the helm command. For example: local-repo-url http://127.0.0.1:8879/charts | No |

## Helm Install

Installs a chart archive. The release name is set as an output property in the format ``${p:stepName/helm.release}`` and may be set as a component property if desired.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Chart | String | The chart to install. There are four different ways to specify a chart: 1. By chart reference (for example, stable/mariadb) 2. By path to a packaged chart (for example, ./nginx-1.2.3.tgz) 3. By path to an unpackaged chart (for example, ./nginx) 4. By absolute URL (for example, https://example.com/charts/nginx-1.2.3.tgz) | Yes |
| Flags | String | A newline-seperated list of flags to set when running the helm command. For example: namespace myNamespace | No |
| Release Name | String | Name of the release. If unspecified, a release name will be autogenerated for you. | No |
| Version | String | If the Chart field specifies a chart reference, a version may be specified in this field. If the Chart field specifies a chart reference and the Version field is left blank, the latest version of the chart will be installed. | No |

## Helm Upgrade

Upgrades a release to a new version of a chart


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Chart | String | The chart to be applied. The chart can be either: a chart reference(stable/mariadb), a path to a chart directory, a packaged chart, or a fully qualified URL. For chart references, the latest version will be specified unless the version flag is set. | Yes |
| Flags | String | A newline-seperated list of flags to set when running the helm command. For example: purge | No |
| Release | String | Name of the release to be upgraded | Yes |

## Patch Resources

Update field(s) of a resource using strategic merge patch


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| File Name | String | File name, directory, or URL of a file used to identify the resource to patch. Only JSON and YAML formats are accepted. | No |
| Namespace | String | The namespace on the Kubernetes server to patch the resource in. | No |
| Password | Password | The password to access the Kubernetes server. | No |
| Patch | String | Patch to be applied to the resource JSON file. For example, {spec:{unschedulable:true}``}`` | Yes |
| URL | String | The URL of the Kubernetes server. For example: https://10.2.2.2:8443. | No |
| User Name | String | The user name to access the Kubernetes server. | No |

## Process YAML File

Reads a Kubernetes YAML file, creates DevOps Deploy components and resources representing container images found in the YAML file, and creates a updated YAML file with dynamically updated container image versions.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Always Apply Image Tags from YAML | String | If set to true, the container image tags specified in the YAML file(s) will always be applied. If set to false, container image tags specified by the user through the DevOps Deploy user interface will be applied (or the current container image tags in the DevOps Deploy inventory will be applied if none are selected). | No |
| Component Template | String | The template to use when creating components from Kubernetes application resources. You can use component templates to store different sets of registry credentials. | No |
| YAML File(s) | String | Path and name of your Kubernetes yaml file or a directory containing multiple yaml files. If left blank, all .yaml and .yml files in the working directory will be processed. | No |

## Replace Resources

Replace (update) a resource by file name.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| File Name | String | File name, directory, or URL of a file to use to replace (update) the resources. Only JSON and YAML formats are accepted. | Yes |
| Namespace | String | The namespace on the Kubernetes server where the resource to replace is in. | No |
| Password | Password | The password to access the Kubernetes server. | No |
| URL | String | The URL of the Kubernetes server. For example: https://10.2.2.2:8443. | No |
| User Name | String | The user name to access the Kubernetes server. | No |

## Rolling Update

Perform a rolling update of the given Replication Controller.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| File Name | String | File name, directory, or URL of a file to use to specify the resources to update. Only JSON and YAML formats are accepted. | No |
| Namespace | String | The namespace on the Kubernetes server. | No |
| Password | Password | The password to access the Kubernetes server. | No |
| Replication Controller | String | Replication Controller to perform the rolling update on. For example, frontend-v1. | No |
| URL | String | The URL of the Kubernetes server. For example: https://10.2.2.2:8443. | No |
| User Name | String | The user name to access the Kubernetes server. | No |

## Rollout

Manage a deployment using subcommands like kubectl rollout undo deployment/abc. If performing kubectl rollout history, the history is set as an output property in the format ``${p:stepName/history}``


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command | Enumeration | Rollout command to use. Valid values are history, pause, restart, resume, status, and undo. | No |
| Namespace | String | The namespace on the Kubernetes server to use. | No |
| Password | Password | The password to access the Kubernetes server. | No |
| Resource | String | Resource to perform the rollout on. For example, deployment/abc | No |
| URL | String | The URL of the Kubernetes server. For example: https://10.2.2.2:8443. | No |
| User Name | String | The user name to access the Kubernetes server. | No |

## Run Image

Create and run a particular image.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Deployment Name | String | Name to use for the created deployment. Defaults to the specified image name if left blank. | No |
| Image Name | String | Name of the image to run. | Yes |
| Namespace | String | The namespace on the Kubernetes server to run the image in. | No |
| Password | Password | The password to access the Kubernetes server. | No |
| URL | String | The URL of the Kubernetes server. For example: https://10.2.2.2:8443. | No |
| User Name | String | The user name to access the Kubernetes server. | No |

## Scale

Set a new size for a Deployment, ReplicaSet, Replication Controller, or Job.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| File Name | String | File name, directory, or URL of a file to use to specify the resources to scale. Only JSON and YAML formats are accepted. | No |
| Namespace | String | The namespace on the Kubernetes server. | No |
| Password | Password | The password to access the Kubernetes server. | No |
| URL | String | The URL of the Kubernetes server. For example: https://10.2.2.2:8443. | No |
| User Name | String | The user name to access the Kubernetes server. | No |

## Set Cluster

Sets a cluster entry in kubeconfig


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cluster Entry Name | String | Name of the cluster entry. | Yes |
| Namespace | String | The namespace for the context entry in kubeconfig | No |
| Password | Password | The password to access the Kubernetes server. | No |
| URL | String | The URL of the Kubernetes server. For example: https://10.2.2.2:8443. | No |
| User Name | String | The user name to access the Kubernetes server. | No |

## Set Credentials

Sets a user entry in kubeconfig


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Namespace | String | The namespace for the context entry in kubeconfig | No |
| Password | Password | The password to access the Kubernetes server. | No |
| URL | String | The URL of the Kubernetes server. For example: https://10.2.2.2:8443. | No |
| User Entry | String | Entry to set credentials on. | Yes |
| User Name | String | The user name to access the Kubernetes server. | No |

## Set a Context Entry

Sets a context entry in kubeconfig


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Context Name | String | Name of the context to be used. | Yes |
| Namespace | String | The namespace for the context entry in kubeconfig | No |
| Password | Password | The password to access the Kubernetes server. | No |
| URL | String | The URL of the Kubernetes server. For example: https://10.2.2.2:8443. | No |
| User Name | String | The user name to access the Kubernetes server. | No |

## Use Context

Sets the current-context in a kubeconfig file


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Context Name | String | Name of the context to be used. | Yes |
| Namespace | String | The namespace on the Kubernetes server. | No |
| Password | Password | The password to access the Kubernetes server. | No |
| URL | String | The URL of the Kubernetes server. For example: https://10.2.2.2:8443. | No |
| User Name | String | The user name to access the Kubernetes server. | No |


## Roles in the Kubernetes plug-in

* [KubernetesCluster](#kubernetescluster_role)


## KubernetesCluster

Role for resources that represents a Kubernetes Cluster.


| Name | Type | Description |
| --- | --- | --- |
| Allow Insecure Connections | String | If true, the servers certificate will not be checked for validity. This will make your HTTPS connections insecure. |
| Bearer Token | String | Bearer token for authentication to the API server. |
| Certificate Authority | String | Path to a certificate file for the certificate authority. |
| Client Certificate | String | Path to a client certificate for TLS. |
| Client Key | String | Path to a client key file for TLS. |
| Kubeconfig Cluster | String | The name of the kubeconfig cluster to use. |
| Kubeconfig Context | String | The name of the kubeconfig context to use. |
| Kubeconfig File | String | Path to the kubeconfig file to use. |
| Kubeconfig User | String | The name of the kubeconfig user to use. |
| Kubernetes Server Address | String | The address and port of the Kubernetes API server. |
| Namespace | String | The namespace scope on the kubernetes server. |
| Password | Password | Password for basic authentication to the API server. |
| User Name | String | Username for basic authentication to the API server. |



|Back to ...||Latest Version|Kubernetes ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[33.1176035](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/kubernetes/ucd-kubernetes-33.1176035.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
