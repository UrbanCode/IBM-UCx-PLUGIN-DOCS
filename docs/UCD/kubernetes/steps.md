# Kubernetes - Process Steps

## Create Resources

Create a resource by file name.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| URL | textBox | The URL of the Kubernetes server. For example: `https://10.2.2.2:8443.` | No |
| User Name | textBox | The user name to access the Kubernetes server. | No |
| Password | secureBox | The password to access the Kubernetes server. | No |
| Namespace | textBox | The namespace on the Kubernetes server to create the resource in. | No |
| kubectl Path | textBox | The name of the kubectl command if it is in the system path, or the full path to run the                                    kubectl command. | No |
| Global Flags | textAreaBox | A newline-separated list of Global flags to set when running the kubectl command. For example:                                    --insecure-skip-tls-verify\n--match-server-version\n--log-dir="/var/logs/" | No |
| Step Flags | textAreaBox | A newline-seperated list of flags to set when running the creation process. For example:                                    --output=json | No |
| File Name | textBox | File name, directory, or URL of a file to use to create the resources. Only JSON and YAML                                    formats are accepted. | Yes |

## Replace Resources

Replace (update) a resource by file name.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| URL | textBox | The URL of the Kubernetes server. For example: `https://10.2.2.2:8443.` | No |
| User Name | textBox | The user name to access the Kubernetes server. | No |
| Password | secureBox | The password to access the Kubernetes server. | No |
| Namespace | textBox | The namespace on the Kubernetes server where the resource to replace is in. | No |
| kubectl Path | textBox | The name of the kubectl command if it is in the system path, or the full path to run the                                    kubectl command. | No |
| Global Flags | textAreaBox | A newline-separated list of Global flags to set when running the kubectl command. For example:                                    --insecure-skip-tls-verify\n--match-server-version\n--log-dir="/var/logs/" | No |
| Step Flags | textAreaBox | A newline-seperated list of flags to set when running the replace process. For example:                                    --output=json | No |
| File Name | textBox | File name, directory, or URL of a file to use to replace (update) the resources. Only JSON and YAML                                    formats are accepted. | Yes |

## Apply Resources

Apply a configuration to a resource by filename. This resource will be created if it doesn't exist yet. To use, always create the resource initially with this step

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| URL | textBox | The URL of the Kubernetes server. For example: `https://10.2.2.2:8443.` | No |
| User Name | textBox | The user name to access the Kubernetes server. | No |
| Password | secureBox | The password to access the Kubernetes server. | No |
| Namespace | textBox | The namespace on the Kubernetes server to apply the resource in. | No |
| kubectl Path | textBox | The name of the kubectl command if it is in the system path, or the full path to run the                                    kubectl command. | No |
| Global Flags | textAreaBox | A newline-separated list of Global flags to set when running the kubectl command. For example:                                    --force=true\n--include-extended-apis=true | No |
| Step Flags | textAreaBox | A newline-seperated list of flags to set when running the apply process. For example:                                    --output=json | No |
| File Name | textBox | File name, directory, or URL of a file to use to apply the resources. Only JSON and YAML                                    formats are accepted. | Yes |

## Patch Resources

Update field(s) of a resource using strategic merge patch

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| URL | textBox | The URL of the Kubernetes server. For example: `https://10.2.2.2:8443.` | No |
| User Name | textBox | The user name to access the Kubernetes server. | No |
| Password | secureBox | The password to access the Kubernetes server. | No |
| Namespace | textBox | The namespace on the Kubernetes server to patch the resource in. | No |
| kubectl Path | textBox | The name of the kubectl command if it is in the system path, or the full path to run the                                    kubectl command. | No |
| Global Flags | textAreaBox | A newline-separated list of Global flags to set when running the kubectl command. For example:                                    --force=true\n--include-extended-apis=true | No |
| Step Flags | textAreaBox | A newline-seperated list of flags to set when running the patch process. For example:                                    --output=json | No |
| File Name | textBox | File name, directory, or URL of a file used to identify the resource to patch. Only JSON and YAML                                    formats are accepted. | Yes |
| Patch | textBox | Patch to be applied to the resource JSON file. For example, {"spec":{"unschedulable":true}} | Yes |

## Use Context

Sets the current-context in a kubeconfig file

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| URL | textBox | The URL of the Kubernetes server. For example: `https://10.2.2.2:8443.` | No |
| User Name | textBox | The user name to access the Kubernetes server. | No |
| Password | secureBox | The password to access the Kubernetes server. | No |
| Namespace | textBox | The namespace on the Kubernetes server. | No |
| kubectl Path | textBox | The name of the kubectl command if it is in the system path, or the full path to run the                                    kubectl command. | No |
| Global Flags | textAreaBox | A newline-separated list of Global flags to set when running the kubectl command. For example:                                    --insecure-skip-tls-verify\n--match-server-version\n--log-dir="/var/logs/" | No |
| Step Flags | textAreaBox | A newline-seperated list of flags to set when running the set-context command. For example:                                --cluster=clustername\n--namespace=namespacename\n--user=myuser | No |
| Context Name | textBox | Name of the context to be used. | Yes |

## Set a Context Entry

Sets a context entry in kubeconfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| URL | textBox | The URL of the Kubernetes server. For example: `https://10.2.2.2:8443.` | No |
| User Name | textBox | The user name to access the Kubernetes server. | No |
| Password | secureBox | The password to access the Kubernetes server. | No |
| Namespace | textBox | The namespace for the context entry in kubeconfig | No |
| kubectl Path | textBox | The name of the kubectl command if it is in the system path, or the full path to run the                                    kubectl command. | No |
| Global Flags | textAreaBox | A newline-separated list of Global flags to set when running the kubectl command. For example:                                    --insecure-skip-tls-verify\n--match-server-version\n--log-dir="/var/logs/" | No |
| Step Flags | textAreaBox | A newline-seperated list of flags to set when running the set-context command. For example:                                    --cluster=clustername\n--namespace=namespacename\n--user=myuser | No |
| Context Name | textBox | Name of the context to be used. | Yes |

## Set Cluster

Sets a cluster entry in kubeconfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| URL | textBox | The URL of the Kubernetes server. For example: `https://10.2.2.2:8443.` | No |
| User Name | textBox | The user name to access the Kubernetes server. | No |
| Password | secureBox | The password to access the Kubernetes server. | No |
| Namespace | textBox | The namespace for the context entry in kubeconfig | No |
| kubectl Path | textBox | The name of the kubectl command if it is in the system path, or the full path to run the                                    kubectl command. | No |
| Global Flags | textAreaBox | A newline-separated list of Global flags to set when running the kubectl command. For example:                                    --insecure-skip-tls-verify\n--match-server-version\n--log-dir="/var/logs/" | No |
| Step Flags | textAreaBox | A newline-seperated list of flags to set when running the set-cluster command. For example:                                    --server=servername\n--certificate-authority=path/to/certificate/authority | No |
| Cluster Entry Name | textBox | Name of the cluster entry. | Yes |

## Set Credentials

Sets a user entry in kubeconfig

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| URL | textBox | The URL of the Kubernetes server. For example: `https://10.2.2.2:8443.` | No |
| User Name | textBox | The user name to access the Kubernetes server. | No |
| Password | secureBox | The password to access the Kubernetes server. | No |
| Namespace | textBox | The namespace for the context entry in kubeconfig | No |
| kubectl Path | textBox | The name of the kubectl command if it is in the system path, or the full path to run the                                    kubectl command. | No |
| Global Flags | textAreaBox | A newline-separated list of Global flags to set when running the kubectl command. For example:                                    --insecure-skip-tls-verify\n--match-server-version\n--log-dir="/var/logs/" | No |
| Step Flags | textAreaBox | A newline-seperated list of flags to set when running the set-credentials command. For example:                                    --client-certificate=~/.kube/admin.crt\n--embed-certs=true | No |
| User Entry | textBox | Entry to set credentials on. | Yes |

## Get Current Context

Gets the current-context and sets it as an output property in the format ${p:stepName/current-context}

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| URL | textBox | The URL of the Kubernetes server. For example: `https://10.2.2.2:8443.` | No |
| User Name | textBox | The user name to access the Kubernetes server. | No |
| Password | secureBox | The password to access the Kubernetes server. | No |
| Namespace | textBox | The namespace on the Kubernetes server to create the resource in. | No |
| kubectl Path | textBox | The name of the kubectl command if it is in the system path, or the full path to run the                                    kubectl command. | No |
| Global Flags | textAreaBox | A newline-separated list of Global flags to set when running the kubectl command. For example:                                    --insecure-skip-tls-verify\n--match-server-version\n--log-dir="/var/logs/" | No |

## Rollout

Manage a deployment using subcommands like "kubectl rollout undo deployment/abc". If performing kubectl rollout history, the history is set as an output property in the format ${p:stepName/history}

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Command | selectBox | Rollout command to use. | No |
| Resource | textBox | Resource to perform the rollout on. For example, deployment/abc | No |
| URL | textBox | The URL of the Kubernetes server. For example: `https://10.2.2.2:8443.` | No |
| User Name | textBox | The user name to access the Kubernetes server. | No |
| Password | secureBox | The password to access the Kubernetes server. | No |
| Namespace | textBox | The namespace on the Kubernetes server to use. | No |
| kubectl Path | textBox | The name of the kubectl command if it is in the system path, or the full path to run the                                    kubectl command. | No |
| Global Flags | textAreaBox | A newline-separated list of Global flags to set when running the kubectl command. For example:                                    --insecure-skip-tls-verify\n--match-server-version\n--log-dir="/var/logs/" | No |
| Step Flags | textAreaBox | A newline-seperated list of flags to set when running the rollout command. For example:                                    --output=json | No |

## Rolling Update

Perform a rolling update of the given Replication Controller."

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Replication Controller | textBox | Replication Controller to perform the rolling update on. For example, frontend-v1. | No |
| URL | textBox | The URL of the Kubernetes server. For example: `https://10.2.2.2:8443.` | No |
| User Name | textBox | The user name to access the Kubernetes server. | No |
| Password | secureBox | The password to access the Kubernetes server. | No |
| Namespace | textBox | The namespace on the Kubernetes server. | No |
| kubectl Path | textBox | The name of the kubectl command if it is in the system path, or the full path to run the                                    kubectl command. | No |
| Global Flags | textAreaBox | A newline-separated list of Global flags to set when running the kubectl command. For example:                                    --insecure-skip-tls-verify\n--match-server-version\n--log-dir="/var/logs/" | No |
| Step Flags | textAreaBox | A newline-seperated list of flags or options to set when running the rolling-update command. For example:                                    --output=json | No |
| File Name | textBox | File name, directory, or URL of a file to use to specify the resources to update. Only JSON and YAML                                    formats are accepted. | Yes |

## Scale

Set a new size for a Deployment, ReplicaSet, Replication Controller, or Job."

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| URL | textBox | The URL of the Kubernetes server. For example: `https://10.2.2.2:8443.` | No |
| User Name | textBox | The user name to access the Kubernetes server. | No |
| Password | secureBox | The password to access the Kubernetes server. | No |
| Namespace | textBox | The namespace on the Kubernetes server. | No |
| kubectl Path | textBox | The name of the kubectl command if it is in the system path, or the full path to run the                                    kubectl command. | No |
| Global Flags | textAreaBox | A newline-separated list of Global flags to set when running the kubectl command. For example:                                    --insecure-skip-tls-verify\n--match-server-version\n--log-dir="/var/logs/" | No |
| Step Flags | textAreaBox | A newline-seperated list of flags or options to set when running the scale command. For example:                                    --replicas=3\n-f foo.yaml | No |
| File Name | textBox | File name, directory, or URL of a file to use to specify the resources to scale. Only JSON and YAML                                    formats are accepted. | Yes |

## Auto Scale

Creates an autoscaler that automatically chooses and sets the number of pods that run in a kubernetes cluster."

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| URL | textBox | The URL of the Kubernetes server. For example: `https://10.2.2.2:8443.` | No |
| User Name | textBox | The user name to access the Kubernetes server. | No |
| Password | secureBox | The password to access the Kubernetes server. | No |
| Namespace | textBox | The namespace on the Kubernetes server. | No |
| kubectl Path | textBox | The name of the kubectl command if it is in the system path, or the full path to run the                                    kubectl command. | No |
| Global Flags | textAreaBox | A newline-separated list of Global flags to set when running the kubectl command. For example:                                    --insecure-skip-tls-verify\n--match-server-version\n--log-dir="/var/logs/" | No |
| Step Flags | textAreaBox | A newline-seperated list of flags or options to set when running the autoscale command. For example:                                    --max=5\n--min=2 | No |
| File Name | textBox | File name, directory, or URL of a file to use to specify the resources to auto scale. Only JSON and YAML                                    formats are accepted. | Yes |

## Delete Resources

Delete resources by file names, resource types and names, or resource types and labels.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| URL | textBox | The URL of the Kubernetes server. For example: `https://10.2.2.2:8443.` | No |
| User Name | textBox | The user name to access the Kubernetes server. | No |
| Password | secureBox | The password to access the Kubernetes server. | No |
| Namespace | textBox | The namespace on the Kubernetes server to delete the resource in. | No |
| kubectl Path | textBox | The name of the kubectl command if it is in the system path, or the full path to run the                                    kubectl command. | No |
| Global Flags | textAreaBox | A newline-separated list of Global flags to set when running the kubectl command. For example:                                    --insecure-skip-tls-verify\n--match-server-version\n--log-dir="/var/logs/" | No |
| Step Flags | textAreaBox | A newline-seperated list of flags to set when running the deletion process. For example:                                    --output=json | No |
| Deletion Type | selectBox | Specify the way to select resources to delete. | Yes |
| Resources | textBox | A list of resources to delete. The format is based on the selected Deletion Type. For Resource                                    Types and Names, enter a comma-separated list of resource types followed by a space separated                                    list of resource names. For example: pod,service baz foo. For Resource Types and Labels, enter                                    a comma-separated list of resource types followed by a name=value pair for the label and its                                    value. For example: pods,services color=blue. For All Resources of Type, specify a                                    comma-separated list of resource types to delete all resources with those types. For example:                                    pods,services. For File, specify a file name, directory, or URL of a file that contains the                                    resources to delete. | Yes |

## Run Image

Create and run a particular image.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| URL | textBox | The URL of the Kubernetes server. For example: `https://10.2.2.2:8443.` | No |
| User Name | textBox | The user name to access the Kubernetes server. | No |
| Password | secureBox | The password to access the Kubernetes server. | No |
| Namespace | textBox | The namespace on the Kubernetes server to run the image in. | No |
| kubectl Path | textBox | The name of the kubectl command if it is in the system path, or the full path to run the                                    kubectl command. | No |
| Global Flags | textAreaBox | A newline-separated list of Global flags to set when running the kubectl command. For example:                                    --insecure-skip-tls-verify\n--match-server-version\n--log-dir="/var/logs/" | No |
| Step Flags | textAreaBox | A newline-seperated list of flags to set when running the run command. For example:                                    --output=json | No |
| Image Name | textBox | Name of the image to run. | Yes |
| Deployment Name | textBox | Name to use for the created deployment. Defaults to the specified image name if left blank. | No |

## Expose Resource

Expose a replication controller, service, or pod as a new Kubernetes service.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| URL | textBox | The URL of the Kubernetes server. For example: `https://10.2.2.2:8443.` | No |
| User Name | textBox | The user name to access the Kubernetes server. | No |
| Password | secureBox | The password to access the Kubernetes server. | No |
| Namespace | textBox | The namespace on the Kubernetes server to expose the resource in. | No |
| kubectl Path | textBox | The name of the kubectl command if it is in the system path, or the full path to run the                                    kubectl command. | No |
| Global Flags | textAreaBox | A newline-separated list of Global flags to set when running the kubectl command. For example:                                    --insecure-skip-tls-verify\n--match-server-version\n--log-dir="/var/logs/" | No |
| Step Flags | textAreaBox | A newline-seperated list of flags to set when running the expose command. For example:                                    --output=json | No |
| Resource Type | selectBox | Specify the way to select resources to expose. | Yes |
| Resource | textBox | The name of the resource to expose. For a Resource Type of File, specify a file name,                                    directory, or URL of a file that identifies the resource to expose. | Yes |

## Process YAML File

Reads a Kubernetes YAML file, creates UrbanCode Deploy components and resources representing container images found in the YAML file, and creates a updated YAML file with dynamically updated container image versions.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| YAML File(s) | textBox | Path and name of your Kubernetes yaml file or a directory containing multiple yaml files. If left blank, all .yaml and .yml files in the working directory will be processed. | No |
| Always Apply Image Tags from YAML | textBox | If set to true, the container image tags specified in the YAML file(s) will always be applied. If set to false, container image tags specified by the user through the UrbanCode Deploy user interface will be applied (or the current container image tags in the UrbanCode Deploy inventory will be applied if none are selected). | No |
| Component Template | textBox | The template to use when creating components from Kubernetes application resources. You can use                                    component templates to store different sets of registry credentials. | No |
| Auth Token | secureBox | If the requesting user does not have sufficient permissions to create components, resources,                                    and snapshots on the server, specify the authorization token of a privileged user. | No |
| Base Resource ID | textBox |  | No |
| Base Resource Path | textBox |  | No |
| Application | textBox |  | No |
| Version | textBox |  | No |
| Source Configuration Type | selectBox |  | No |
| Environment Name | textBox |  | No |
| Environment ID | textBox |  | No |
| Component Process Request | textBox |  | No |
| Application Process Request | textBox |  | No |

## Create Image Components from Helm Release

Creates UCD components for each container image found in a Helm release

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Release Name | textBox | Name of the Helm release to be inspected. | Yes |
| Component Name Prefix | textBox | If you wish to add a prefix to the name of the Components which will be created to represent container images, enter the prefix here. | No |
| Component Template | textBox | The template to use when creating components from Kubernetes application resources. You can use                                    component templates to store different sets of registry credentials. | No |
| Source Configuration Type | selectBox |  | No |
| helm Path | textBox | The name of the helm command if it is in the system path, or the full path to run the                                    helm command. If left blank, the command 'helm' will be used. | No |
| Step Flags | textAreaBox | A newline-seperated list of flags to set when running the helm get command. For example:                                    --kube-context string | No |
| Tiller Namespace (Helm V2 only) | textBox | Namespace in which Tiller is running when using Helm V2. If left blank, the environment variable $TILLER_NAMESPACE will be used. | No |

## Get Kube Config File - IBM Cloud

Initializes the IBM Cloud Container Services plug-in and downloads Kubernetes configuration data and certificates to connect to your cluster by using kubectl commands. Output of this step is a property in the format ${p:stepName/kubeconfig} which points to the downloaded Kubernetes config file.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Cluster Name | textBox | Name of the Kubernetes cluster for which to download configuration data and certificates for. | No |

## Helm Init

Sets up local configuration in $HELM_HOME. If the --client-only flag is not set, this step will install the latest version of Tiller onto your Kubernetes cluster.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Cluster Name | textBox | By default, Tiller will be installed to the Kubernetes cluster with the current context. To install to a differnet cluster, enter the cluster's name in this field. | No |
| Flags | textAreaBox | A newline-seperated list of flags to set when running the helm command. For example:                                    --local-repo-url `http://127.0.0.1:8879/charts` | No |
| helm Path | textBox | The name of the helm command if it is in the system path, or the full path to run the                                    helm command. If left blank, the command 'helm' will be used. | No |
| Kube Config File | textBox | Location and name of Kubernetes config file Helm should use when issuing commands. If left blank, the environment variable $KUBECONFIG will be used. | No |

## Helm Install

Installs a chart archive. The release name is set as an output property in the format ${p:stepName/helm.release} and may be set as a component property if desired.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Chart | textBox | The chart to install. There are four different ways to specify a chart: 1. By chart reference (for example, stable/mariadb) 2. By path to a packaged chart (for example, ./nginx-1.2.3.tgz) 3. By path to an unpackaged chart (for example, ./nginx) 4. By absolute URL (for example, `https://example.com/charts/nginx-1.2.3.tgz)` | Yes |
| Version | textBox | If the Chart field specifies a chart reference, a version may be specified in this field. If the Chart field specifies a chart reference and the Version field is left blank, the latest version of the chart will be installed. | No |
| Release Name | textBox | Name of the release. If unspecified, a release name will be autogenerated for you. | No |
| Flags | textAreaBox | A newline-seperated list of flags to set when running the helm command. For example:                                    --namespace myNamespace | No |
| Server URL | textBox | The URL of the IBM UrbanCode Deploy server. | No |
| helm Path | textBox | The name of the helm command if it is in the system path, or the full path to run the                                    helm command. If left blank, the command 'helm' will be used. | No |
| Resource Id | textBox | ID of the resource (set the value to ${p:resource.id} in order to have this property resolved automatically at runtime. | No |
| Kube Config File | textBox | Location and name of Kubernetes config file Helm should use when issuing commands. If left blank, the environment variable $KUBECONFIG will be used. | No |
| Tiller Namespace (Helm V2 only) | textBox | Namespace in which Tiller is running when using Helm V2. If left blank, the environment variable $TILLER_NAMESPACE will be used. | No |

## Helm Delete

Deletes a release from Kubernetes

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Release | textBox | Name of the release to be deleted. | Yes |
| Flags | textAreaBox | A newline-seperated list of flags to set when running the helm command. For example:                                    --purge | No |
| helm Path | textBox | The name of the helm command if it is in the system path, or the full path to run the                                    helm command. If left blank, the command 'helm' will be used. | No |

## Helm Upgrade

Upgrades a release to a new version of a chart

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Release | textBox | Name of the release to be upgraded | Yes |
| Chart | textBox | The chart to be applied. The chart can be either: a chart reference('stable/mariadb'), a path to a chart directory, a packaged chart, or a fully qualified URL. For chart references, the latest version will be specified unless the '--version' flag is set. | Yes |
| Flags | textAreaBox | A newline-seperated list of flags to set when running the helm command. For example:                                    --purge | No |
| helm Path | textBox | The name of the helm command if it is in the system path, or the full path to run the                                    helm command. If left blank, the command 'helm' will be used. | No |
| Kube Config File | textBox | Location and name of Kubernetes config file Helm should use when issuing commands. If left blank, the environment variable $KUBECONFIG will be used. | No |

## Helm Does Release Exist

Runs a helm status [RELEASE_NAME] command to determine if a release exists or not. Sets an output property in the format ${p:stepName/release-exists} to a value of true if the release does exist or false if the release does not exist

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Release | textBox | Name of the release to check | Yes |
| Flags | textAreaBox | A newline-seperated list of flags to set when running the helm command. For example:                                    --tls | No |
| helm Path | textBox | The name of the helm command if it is in the system path, or the full path to run the                                    helm command. If left blank, the command 'helm' will be used. | No |
| Kube Config File | textBox | Location and name of Kubernetes config file Helm should use when issuing commands. If left blank, the environment variable $KUBECONFIG will be used. | No |

## Create Kubernetes Cluster Resource

Create a Kubernetes cluster resource in the Resource Tree.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Parent Resource | textBox | The parent resource under which the Kubernetes cluster resource will be created. | Yes |
| Kubernetes Server Address | textBox | The address and port of the Kubernetes API server. | Yes |
| User Name | textBox | Username for basic authentication to the API server. | Yes |
| Password | secureBox | Password for basic authentication to the API server. | Yes |
| Bearer Token | textBox | Bearer token for authentication to the API server. | Yes |
| Namespace | textBox | The namespace scope on the kubernetes server. | Yes |
| Kubeconfig File | textBox | Path to the kubeconfig file to use. | Yes |
| Kubeconfig Cluster | textBox | The name of the kubeconfig cluster to use. | Yes |
| Kubeconfig Context | textBox | The name of the kubeconfig context to use. | Yes |
| Kubeconfig User | textBox | The name of the kubeconfig user to use. | Yes |
| Allow Insecure Connections | textBox | Set this property to "true" to allow insecure registry connections. | Yes |
| Certificate Authority | textBox | Path to a certificate file for the certificate authority. | Yes |
| Client Certificate | textBox | Path to a client certificate for TLS. | Yes |
| Client Key | textBox | Path to a client key for TLS. | Yes |

