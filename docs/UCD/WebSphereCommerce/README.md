
# IBM WebSphere Commerce

The WebSphere Commerce plug-in enables you to do the following on the WebSphere Commerce cells: Download, configure and deploy a server deployment package to a WebSphere Commerce server.

**Note:** Use this plug-in to deploy customizations to a WebSphere Commerce instance. This plug-in does not provide installation or configuration processes for WebSphere Commerce.

The plug-in provides steps that enables you to automate deployment of server deployment packages.

* Download server deployment package
* Configure server deployment settings
* Run server deployment process

The following steps are an overview of the process that you follow:

* Create resources. For the deployment of a server deployment package to a commerce server, you have to populate resources manually. You can view the resources you create in the Resources view. Each resource corresponds to the WebSphere Commerce server.
* Define components, applications, and environments to automate deployment.
* Deploy.

The IBM DevOps Deploy plug-in for WebSphere Commerce works with WebSphere Commerce versions 7.0 and earlier. All editions, which include Express, Enterprise and Professional, are supported.


## Available Steps

Refer to the documentation for a comprehensive list of available steps.


## Sample Component Template

This plug-in provides a sample component template that includes sample processes. The goal of this component template is to demonstrate how to use the steps to complete a deployment to WebSphere Commerce. The component template must be modified to work in your environment. See the documentation for a more in-depth look at the sample processes.

**Prerequisites:**

* This plug-in requires [IBM Websphere Application Server – Deployment](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/Websphere/) version 80 or higher to run.

**Impersonation:**

+ The impersonating user must have access rights to both the WebSphere Application Server profile directory and the IBM DevOps Deploy agent directory. For example, if the WebSphere user is named wasusr with the group wasgrp, and the agent user is named ucdusr with the group ucdrgp, the user wasusr must be a member of the group ucdgrp. You can restrict the WebSphere Application Server profile directory so that only the WebSphere user has read, write, and execute permissions; the group and other users do not need any permissions. In this case, the WebSphere user starts all WebSphere processes.

You can restrict the agent directory in the following ways:

- The agent user has read, write, and execute permissions everywhere.
- The group has read and execute permissions everywhere and write permissions in the var/ subfolder.
- Other users have no access.

By default, configure the impersonation settings with the following values:

+ User: WebSphere user
+ Password: [empty]
+ Group: WebSphere group

* There is no need to select the “Always use default impersonation” check box unless a Resource overrides it in an incompatible way.

