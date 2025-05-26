
# Kubernetes - Overview

The Kubernetes plug-in includes steps with interact with Kubernetes resources in IBM DevOps Deploy.

This plugin includes one or more steps, click **Steps** for step details and properties.

## Compatibility

The server that is hosting the Kubernetes cluster must be accessible from the IBM DevOps Deploy agent.

This plug-in requires version 6.0.1 or later of IBM DevOps Deploy.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps products").

## History
### Version 33

* Updating Jettison library to 1.5.4 for CVE-2023-1436

### Version 32

* Log4j and Jettison dependency updated .

### Version 27

* Fixes APAR : PH43259 – Helm install command failing.

### Version 26

* Restart option added to the Rollout step.

### Version 25

* Fixes APAR PH32714. Build information containing plus (+) sign not handled
* Fixes APAR PH32716. Warning handled as an error causing the step to fail for -helm install- and -helm upgrade-

### Version 24

* Update to support Helm 3 syntax for Helm Release and Helm Install steps.

### Version 23

* Prevent null exception when accessing username and password in plugin steps

### Version 20

* Fixes APAR PH07546 Kubernetes plugin steps do not trim properties in all cases

### Version 19

* Process Yaml File step ignores commented out image: lines.

### Version 18

* Fixes APAR PH01175 Process YAML File step does not handle multiple instances of the same container image.

### Version 17

* Fixes APAR PH00919 Process YAML File step fails if multiple files.

### Version 16

* Introduces the Create Image Components from Helm Release step.

Version 15
* Fixes issue where the Auto Scale, Rolling Update, Rollout, and Scale steps may throw an exception.

Version 14
* Fixes issue where the logic was incorrectly trying to update the inventory for components that were not related to images found in the yaml file.

### Version 13

* Fixes issue where, if a user renames a Helm resource, the Helm Install step may fail. Process YAML File step now gives users the ability to always apply container image tags found in the YAML files (ignoring tags specified in the UCD user interface).

### Version 12

* Fixes issue where, if a user runs the Process YAML File step against a YAML file in one environment, then runs the Process YAML file step against the same file for a different environment in the same application and does not specify container image versions, a null pointer exception would occur.
* The Process YAML File step may now process multiple YAML files at a time.
* Improve handling of inventory for images removed from YAML files when using the Process YAML File step.

### Version 11

* Added the Helm Init step
* Added the Helm Install step
* Added the Helm Delete step
* Added the Helm Upgrade step
* Added the Helm Does Release Exist step

### Version 10

* Added the Get Kube Config File IBM Cloud step.
* Process YAML File step now handles quotes surrounding the image specification in the YAML file.

### Version 9

* Fixes for the Process YAML File step

### Version 8

* Added the Process YAML File step
* Created new resource role KubernetesCluster
* Added plugin step to create and populate KubernetesCluster resource role

### Version 7

* Added the Apply Resources step
* Added the Patch Resources step
* Added the Rollout step
* Added the Rolling Update step
* Added the Scale step
* Added the Autoscale step

### Version 6

* Added the Replace Resources step
* Added the Use Context step
* Added the Set a Context Entry step
* Added the Set Cluster step
* Added the Get Current Context step
* Added the Set Credentials step

### Version 5

* Added Deployment Name field to Run Image step
* Fix code dealing with processing of kubectl global options.
* Fix problem when deleting resources by type and label.

### Version 4

Added support for property file encryption.

### Version 3

Added support for exposing a deployment resource.

### Version 2

The **kubectl Home** property is now called **kubectl Path**.

### Version 1

Initial Release. Includes steps to create, run, expose and delete resources in a Kubernetes cluster.


|Back to ...||Latest Version|Kubernetes ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[33.1176035](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/kubernetes/ucd-kubernetes-33.1176035.zip)|[Readme](README.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
