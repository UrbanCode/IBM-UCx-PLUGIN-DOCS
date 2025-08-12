
# WebSphere Application Server - Deployment - User permissions

There are three different users that require permissions to run the WebSphere Application Server Deploy plug-in.

1. **Operating system user** that executes the plug-in steps and may launch wsadmin on the same machine where WebSphere Application Server runs. Note this refers to the Deployment Manager in case of Network Deploy. This may be the user that runs the DevOps Deploy agent process, or the impersonating user.
2. **User that is passed to the wsadmin script** and is part of the WebSphere Application Server user registry. This user may be same as the Operating System user in case the registry is the Operating System.
3. **DevOps Deploy user** that launches the process inside DevOps Deploy

Each of these types of users must have different types of permissions:

* Permissions to access (read, write, execute) files on the filesystem
* Permissions to perform actions in WebSphere Application Server, according to the user roles described in: [Administrative Roles](https://www.ibm.com/support/knowledgecenter/en/SSAW57_9.0.0/com.ibm.websphere.nd.multiplatform.doc/ae/rsec_adminroles.html)
* Permissions to read, create, execute objects inside DevOps Deploy

## Discovery of the WebSphere Cell

This task is executed when you add the Agent to a Resource or when you execute the step: **Deployment** > **WebSphere Discovery**

* This task executes the script strong>wasDiscovery.groovy, that requires the permission to access the files in the WebSphere Application Server profile:  `[read, execute] bin/wsadmin.sh or bin\wsadmin.bat [read] properties/portdefs.props`  or files in the WebSphere Application Server installation directory:  `[read, execute] bin/wsadmin.sh or bin\wsadmin.bat [read] properties/profileRegistry.xml`
* This task does not execute wsadmin, and the WebSphere Application Server does not need to be running.
* The DevOps Deploy user that executes this step needs permissions to create Resources in the Resource Tree in DevOps Deploy.

## Topology Discovery

This task is executed when you select the menu: **Actions** > **Configure with WebSphere Topology Discovery** or when you execute the step: **Deployment** > **WebSphere Topology Discovery**

* This task executes the script `wasConfig.groovy`, which requires the permission to access the files in the WebSphere Application Server profile:  `[read, execute] bin/wsadmin.sh or bin\wsadmin.bat`
* This task executes wsadmin, and it needs the WebSphere Application Server to be running. The user passed to the wsadmin command needs permissions to list the properties of the cell, nodes, clusters, cluster members and servers. This requires executing the **AdminControl** and **AdminConfig** wsadmin objects.
* The DevOps Deploy user that executes this step needs permissions to create Resources in the Resource Tree in DevOps Deploy.

## Other steps

* All other steps require the permission to access the files in the WebSphere Application Server profile:  `[read, execute] bin/wsadmin.sh or bin\wsadmin.bat`
* All other steps require the WebSphere Application Server to be running.Depending on the specific step, the user that is passed to wsadmin needs to have specific rights in the WebSphere Application Server security model.
You can find a description of the possible user tthe WebSphere Application Server Knowledge Center: [Administrative Roles](https://www.ibm.com/support/knowledgecenter/en/SSAW57_9.0.0/com.ibm.websphere.nd.multiplatform.doc/ae/rsec_adminroles.html)

The step **Deployment** > **Execute wsadmin script** can execute an arbitrary script, and in general will require a user in the Administrator role.
* The DevOps Deploy user that executes these steps only need to be able to execute the process on the Environment.

