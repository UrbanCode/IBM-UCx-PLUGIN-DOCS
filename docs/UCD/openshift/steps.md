
# OpenShift for IBM DevOps Deploy - Process Steps


- [OpenShift for IBM DevOps Deploy - Steps]
(#openshift-for-ibm-devops-deploy---steps)
  - [Steps](#steps)
    - [Process steps in the OpenShift plug-in](#process-steps-in-the-openshift-plug-in)
      - [Add Tag](#add-tag)
      - [Apply](#apply)
      - [Cancel Build](#cancel-build)
      - [Create](#create)
      - [Create New-App](#create-new-app)
      - [Create Object From Template](#create-object-from-template)
      - [Create Secret](#create-secret)
      - [Delete](#delete)
      - [Deploy](#deploy)
      - [Expose](#expose)
      - [Login](#login)
      - [New Build](#new-build)
      - [Patch DeploymentConfig](#patch-deploymentconfig)
      - [Patch Secret](#patch-secret)
      - [Replace DeploymentConfig](#replace-deploymentconfig)
      - [Rollback](#rollback)
      - [Rollout](#rollout)
      - [Scale](#scale)
      - [Set Env](#set-env)
      - [Set Image](#set-image)
      - [Set Triggers](#set-triggers)
      - [Start Build](#start-build)

## Add Tag

Tag existing images into image streams.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Access Token | Password | The token used to authenicate with the OpenShift API server. You can use either this property or the User Name and Password properties to authenticate with the server. | No |
| Destination Names | String | The image streams to tag. Separate multiple image streams with space characters. Use the following format: ```<namespace>/<stream_name >:<tag>``` | Yes |
| Keep Updated | Boolean | Select to update the destination tag each time the source tag changes. | No |
| OpenShift URL | String | The URL of the Red Hat OpenShift server. For example: https://192.0.2.0:8443 | No |
| Project | String | The OpenShift project that contains the resource to tag. | No |
| Source Name | String | The name of the source to tag. For example: ```<namespace>/<stream_name>:<tag>, <name>@<id>``` | Yes |
| Source Type | Enumeration: | Specify a source type to use. | No |
| | | * none |
| | | * istag |
| | | * isimage |
| | | * docker |
| Step Flags | String | A list of flags to set when running the add tag command. Specify each flag on a new line. | No |
| User Name | String | The user name used to authenicate with the OpenShift server. | No |

## Apply

Apply a configuration to a resource by filename.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Access Token | Password | The token used to authenicate with the OpenShift API server. CYou can use either this property or the User Name and Password properties to authenticate with the server. | No |
| File Name | String | The file to be applied. If a directory is specified, all files in that directory are applied. | Yes |
| OpenShift URL | String | The URL of the Red Hat OpenShift server. For example: https://192.0.2.0:8443 | No |
| Project | String | The OpenShift project where the resource is applied. | No |
| Step Flags | String | A list of flags to set when running the apply process. For example: –force=false. Specify each flag on a new line. | No |
| User Name | String | The user name to authenicate with the OpenShift server. | No |

## Cancel Build

Request a graceful shutdown of a build. Running, pending, or new builds are canceled.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Access Token | Password | The token used to authenticate with the OpenShift API server. You can use either this property or the User Name and Password properties to authenticate with the server. | No |
| Build Config(s) | String | The builds to be cancelled created from specified Build Configs | No |
| Build(s) | String | The build to be cancelled. | No |
| OpenShift URL | String | The URL of the Red Hat OpenShift server. For example: https://192.0.2.0:8443 | No |
| Project | String | The OpenShift project that contains the application to cancel a build. | No |
| Step Flags | String | A list of flags to set when running the cancel-build command. Specify each flag on a new line. | No |
| User Name | String | The user name used to authenicate with the OpenShift server. | No |

## Create

Create a resource by filename.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Access Token | Password | The token used to authenticate with the OpenShift API server. You can use either this property or the User Name and Password properties to authenticate with the server. | No |
| File Name | String | File to be created. | Yes |
| OpenShift URL | String | The URL of the Red Hat OpenShift server. For example: https://192.0.2.0:8443 | No |
| Project | String | The OpenShift project where the resource is created. | No |
| Step Flags | String | A list of flags to set when running the create process. Specify each flag on a new line. | No |
| User Name | String | The user name used to authenticate with the OpenShift server. | No |

## Create New-App

Create a new application by specifying source code, templates, and/or images.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Access Token | Password | The token used to authenticate with the OpenShift API server. You can use either this property or the User Name and Password properties to authenticate with the server. | No |
| OpenShift URL | String | The URL of the Red Hat OpenShift server. For example: https://192.0.2.0:8443 | No |
| Project | String | The OpenShift project that contains the application to run the deployment on. | No |
| Source | String | The source code path, source code repository URL, template, image or image stream | No |
| Step Flags | String | A list of flags to set when running the new-app command. Specify each flag on a new line. | No |
| User Name | String | The user name used to authenicate with the OpenShift server. | No |

## Create Object From Template

Create object on OpenShift server from a JSON template.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Access Token | Password | The token used to authenticate with the OpenShift API server. You can use either this property or the User Name and Password properties to authenticate with the server. | No |
| Do you want to use ‘apply’ or ‘create’? | String | Specify create to create the configuration if it does not exist. An error is displayed if the create is specified and the configuration already exists. Specify apply to update the configuration. The default value is apply. For more details, see the Openshift/Kubernetes documentation. | No |
| OpenShift URL | String | The URL of the Red Hat OpenShift server. For example: https://192.0.2.0:8443 | No |
| Parameter File | String | The fully-qualified path of a newline-separated parameter file. | No |
| Project | String | The OpenShift project that contains the application to run the deployment on. | No |
| Step Flags | String | A list of flags to set when running the create object from template command. Specify each flag on a new line. | No |
| Template | String | The fully-qualified path to the template JSON file to be used to create the object. | Yes |
| User Name | String | The user name to access the OpenShift server. | No |

## Create Secret

Create secret in OpenShift.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Access Token | Password | The token used to authenticate with the OpenShift API server. You can use either this property or the User Name and Password properties to authenticate with the server. | No |
| OpenShift URL | String | The URL of the Red Hat OpenShift server. For example: https://192.0.2.0:8443 | No |
| Password | Password | The password used to authenicate with the OpenShift server. | No |
| Project | String | The OpenShift project that contains the application to run the deployment on. | No |
| Secret JSON | String | A JSON string or the fully-qualified path to the JSON file containing the JSON for the secret to be created. | Yes |
| User Name | String | The user name used to authenicate with the OpenShift server. | No |

## Delete

Delete resources by filenames, stdin, resources and names, or by resources and label selector.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Access Token | Password | The token used to authenticate with the OpenShift API server. You can use either this property or the User Name and Password properties to authenticate with the server. | No |
| OpenShift URL | String | The URL of the Red Hat OpenShift server. For example: https://192.0.2.0:8443 | No |
| Project | String | The OpenShift project that contains the application to delete a resource. | No |
| Resource(s)/resource names | String | Please check Openshift documentation on the format to specify for resource and resource names | Yes |
| Step Flags | String | A list of flags to set when running the delete command. Specify each flag on a new line. | No |
| User Name | String | The user name used to authenticate with the OpenShift server. | No |

## Deploy

(Deprecated)Start, cancel, retry or view a deployment on an OpenShift server.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Access Token | Password | The token used to authenticate with the OpenShift API server. You can use either this property or the User Name and Password properties to authenticate with the server. | No |
| Deployment Action | Enumeration: | Select deployment action. | No |
| | | * latest |
| | | * retry |
| | | * cancel |
| | | * triggers |
| | | * history |
| Deployment Config | String | The deployment configuration to use. | Yes |
| OpenShift URL | String | The URL of the Red Hat OpenShift server. For example: https://192.0.2.0:8443 | No |
| Project | String | The OpenShift project that contains the application to run the deployment on. | No |
| Step Flags | String | A list of flags to set when running the deploy command. Specify each flag on a new line. | No |
| User Name | String | The user name to access the OpenShift server. | No |

## Expose

Expose containers internally as services or externally through routes.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Access Token | Password | The token used to authenticate with the OpenShift API server. You can use either this property or the User Name and Password properties to authenticate with the server. | No |
| OpenShift URL | String | The URL of the Red Hat OpenShift server. For example: https://192.0.2.0:8443 | No |
| Project | String | The OpenShift project that contains the application to expose a resource as a route or a service. | No |
| Resource(s)/resource names | String | Please check Openshift documentation on the format to specify for resource and resource names | Yes |
| Step Flags | String | A list of flags to set when running the expose command. Specify each flag on a new line. | No |
| User Name | String | The user name to access the OpenShift server. | No |

## Login

Log in to your Openshift server and save login for subsequent use.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Access Token | Password | The token used to authenticate with the OpenShift API server. You can use either this property or the User Name and Password properties to authenticate with the server. | No |
| Certificate Authority | String | The path to a certificate file for the certificate authority. | No |
| OpenShift URL | String | The URL of the Red Hat OpenShift server. For example: https://192.0.2.0:8443 | No |
| Password | Password | The password used to authenticate with the OpenShift server. | No |
| Project | String | The OpenShift project that contains the application to login. | No |
| Skip TLS Verification | Boolean | Select to not validate the server certificate. If selected, HTTPS connections are not secure. | No |
| Step Flags | String | A list of flags to set when running the login command. Specify each flag on a new line. | No |
| User Name | String | The user name used to authenticate with the OpenShift server. | No |

## New Build

Create a new build by specifying source code

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Access Token | Password | The token used to authenticate with the OpenShift API server. You can use either this property or the User Name and Password properties to authenticate with the server. | No |
| OpenShift URL | String | The URL of the Red Hat OpenShift server. For example: https://192.0.2.0:8443 | No |
| Project | String | The OpenShift project that contains the application to create a new build. | No |
| Sourcecode/Image path | String | The sourcecode used to create the build. It can be a combination of image~sourcecode | No |
| Step Flags | String | A list of flags to set when running the new-build command. Specify each flag on a new line. | No |
| User Name | String | The user name used to authenicate with the OpenShift server. | No |

## Patch DeploymentConfig

Patch/Update a Deployment Config.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Access Token | Password | The token used to authenticate with the OpenShift API server. You can use either this property or the User Name and Password properties to authenticate with the server. | No |
| Deployment Config | String | The name of the current deployment configuration. | Yes |
| OpenShift URL | String | The URL of the Red Hat OpenShift server. For example: https://192.0.2.0:8443 | No |
| Patch JSON | String | The JSON or the fully-qualified path to the JSON file containing the JSON to be used. | Yes |
| Project | String | The OpenShift project that contains the application to run the deployment on. | No |
| Step Flags | String | A list of flags to set when running the patch deployment config command. Specify each flag on a new line. | No |
| User Name | String | The user name used to authenicate with the OpenShift server. | No |

## Patch Secret

Patch secret in OpenShift.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Access Token | Password | The token used to authenticate with the OpenShift API server. You can use either this property or the User Name and Password properties to authenticate with the server. | No |
| App Secrets | String | A list of app secrets to patch. Specify each list item on a new line. At least one Secrets field must be specified. | No |
| OpenShift URL | String | The URL of the Red Hat OpenShift server. For example: https://192.0.2.0:8443 | No |
| Password | Password | The password used to authenticate with the OpenShift server. | No |
| Project | String | The OpenShift project that contains the application to run the deployment on. | No |
| Pull Secrets | String | A list of pull secrets to patch. Specify each list item on a new line. At least one Secrets field must be specified. | No |
| ServiceAccount Name | String | The name of ServiceAccount to create secret for. | Yes |
| Step Flags | String | A list of flags to set when running the patch secret command. Specify each flag on a new line. | No |
| User Name | String | The user name used to authenicate with the OpenShift server. | No |

## Replace DeploymentConfig

Deploy using a new deployment configuration for an existing application in OpenShift.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Access Token | Password | The token used to authenticate with the OpenShift API server. You can use either this property or the User Name and Password properties to authenticate with the server. | No |
| Deployment Config | String | The name of the current deployment configuration. | Yes |
| New Deployment Config JSON | String | The JSON or the fully-qualified path to the JSON file for the new deployment configuration to use. | Yes |
| OpenShift URL | String | The URL of the Red Hat OpenShift server. For example: https://192.0.2.0:8443 | No |
| Password | Password | The password to authenicate with the OpenShift server. | No |
| Project | String | The OpenShift project that contains the application to run the deployment on. | No |
| User Name | String | The user name to authenicate with the OpenShift server. | No |

## Rollback

Roll back an application to a previous deployment.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Access Token | Password | The token used to authenticate with the OpenShift API server. You can use either this property or the User Name and Password properties to authenticate with the server. | No |
| Change Scaling Settings | Boolean | Include the replication controller replica count and selector of the previous deployment in the rollback. | No |
| Change Strategy | Boolean | Include the strategy of the previous deployment in the rollback. | No |
| Change Triggers | Boolean | Include the triggers of the previous deployment in the rollback. | No |
| Deployment Name/Config | String | The name of the previous deployment or deployment configuration to roll back to. | Yes |
| OpenShift URL | String | The URL of the Red Hat OpenShift server. For example: https://192.0.2.0:8443 | No |
| Project | String | The OpenShift project that contains the application to run the roll back on. | No |
| Step Flags | String | A list of flags to set when running the rollback command. Specify each flag on a new line. | No |
| User Name | String | The user name used to authenicate with the OpenShift server. | No |
| Version | String | The specific configuration version to roll back to. Leave blank to roll back to the last successfully completed deployment. This field is ignored when rolling back to a deployment instead of a deployment config. | No |

## Rollout

Start a new rollout, view its status or history, rollback to a previous revision of your app.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Access Token | Password | The token to authenicate with the OpenShift API server. You can use either this property or the User Name and Password properties to authenticate with the server | No |
| Deployment Config or Name | String | The deployment configuration or the name of a deployment depending on the rollout type to use. | Yes |
| OpenShift URL | String | The URL of the Red Hat OpenShift server. For example: https://192.0.2.0:8443 | No |
| Project | String | The OpenShift project that contains the application to run the deployment on. | No |
| Rollout type | Enumeration: | Select a rollout subcommand. | No |
| | | * cancel |
| | | * history |
| | | * latest |
| | | * pause |
| | | * resume |
| | | * retry |
| | | * status |
| | | * undo |
| Step Flags | String | A list of flags to set when running the rollout command. Specify each flag on a new line. | No |
| User Name | String | The user name to authenicate with the OpenShift server. | No |

## Scale

Set a new size for a deployment or replication controller.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Access Token | Password | The token used to authenticate with the OpenShift API server. You can use either this property or the User Name and Password properties to authenticate with the server. | No |
| Number of Replicas | String | The number of replicas to scale to. | Yes |
| OpenShift URL | String | The URL of the Red Hat OpenShift server. For example: https://192.0.2.0:8443 | No |
| Project | String | The OpenShift project that contains the application to scale. | No |
| Resource Name | String | The name of the resource to scale in OpenShift. | Yes |
| Resource Type | Enumeration: | The type of resource to scale in OpenShift. | Yes |
| | | * dc |
| | | * replicationcontrollers |
| Step Flags | String | A list of flags to set when running the scale command. Specify each flag on a new line. | No |
| User Name | String | The user name to access the OpenShift server. | No |

## Set Env

Update environment variables on a pod template or a build config

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Access Token | Password | The token used to authenticate with the OpenShift API server. You can use either this property or the User Name and Password properties to authenticate with the server. | No |
| File Path | String | The filename, directory, or URL to files to use to edit the resource. | No |
| KEY=VALUE/KEY- | String | A list of keys and associated value. Specify each list item in the format key=value on a new line. You can remove the environment variable with KEY-. | No |
| OpenShift URL | String | The URL of the Red Hat OpenShift server. For example: https://192.0.2.0:8443 | No |
| Project | String | The OpenShift project that contains the application to update the environment. | No |
| RESOURCE/NAME | String | A list of resource type and associated object name pairs. Specify each pair in the format resource\_type/name on a new line. | No |
| RESOURCES | String | A list of resource types, separate each resource type with a comma. For example: resource1,resource2,…resourex. | No |
| Step Flags | String | A list of flags to set when running the set env command. Specify each flag on a new line. | No |
| User Name | String | The user name used to authenticate with the OpenShift server. | No |

## Set Image

Update existing container images of resources

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Access Token | Password | The token used to authenticate with the OpenShift API server. You can use either this property or the User Name and Password properties to authenticate with the server. | No |
| CONTAINER_NAME=IMAGE_NAME | String | A list of container and assocaited image name. Specify each pair in the format: container_name=image_name. Specify each list item on a new line. You can update image of all containers with *=image_name. | No |
| File Path | String | The filename, directory, or URL to files used to identify the resource to obtain from the server. | No |
| OpenShift URL | String | The URL of the Red Hat OpenShift server. For example: https://192.0.2.0:8443 | No |
| Project | String | The OpenShift project that contains the application to update the image. | No |
| RESOURCE/NAME | String | A list of resource type and object name pair. Specify each pair in the format: resource/name. Specify each list item on a new line. | No |
| RESOURCES | String | A list of resource types to be specified in the format resource1,resource2,…resourcex. | No |
| Step Flags | String | A list of flags to set when running the set image command. Specify each flag on a new line. | No |
| User Name | String | The user name used to authenticate with the OpenShift server. | No |

## Set Triggers

Set or remove triggers

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Access Token | Password | The token used to authenticate with the OpenShift API server. You can use either this property or the User Name and Password properties to authenticate with the server. | No |
| OpenShift URL | String | The URL of the Red Hat OpenShift server. For example: https://192.0.2.0:8443 | No |
| Project | String | The OpenShift project that contains the application to set/update the triggers. | No |
| RESOURCE/NAME | String | A list of resource type/object name to be specified in the format as shown in the label. Specify each list item on a new line. | Yes |
| Step Flags | String | A list of flags to set when running the set triggers command. Specify each flag on a new line. | No |
| User Name | String | The user name used to authenticate with the OpenShift server. | No |

## Start Build

Start a new build for the provided build configuration or copy an existing build.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Access Token | Password | The token used to authenticate with the OpenShift API server. You can use either this property or the User Name and Password properties to authenticate with the server. | No |
| Build Config | String | The build configuration to be used | No |
| From Build | String | The name of a build to run again. | No |
| OpenShift URL | String | The URL of the Red Hat OpenShift server. For example: https://192.0.2.0:8443 | No |
| Project | String | The OpenShift project that contains the application to start a build. | No |
| Step Flags | String | A list of flags to set when running the start-build command. Specify each flag on a new line. | No |
| User Name | String | The user name used to authenicate with the OpenShift server. | No |

|Back to ...||Latest Version|OpenShift for IBM DevOps Deploy ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[25.1176034](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/openshift/ucd-openshift-25.1176034.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
