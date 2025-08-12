
# WebSphere Application Server - Deployment - Troubleshooting


- [WebSphere Application Server - Deployment - Troubleshooting](#websphere-application-server---deployment---troubleshooting)
  - [Troubleshooting](#troubleshooting)
    - [General Troubleshooting](#general-troubleshooting)
    - [Start Server step](#start-server-step)
    - [WebSphere Topology Discovery step](#websphere-topology-discovery-step)
    - [Additional CommandLine Arguments field](#additional-commandline-arguments-field)
    - [File Path field](#file-path-field)
    - [Autodiscovery fails and no logs are available](#autodiscovery-fails-and-no-logs-are-available)

## General Troubleshooting

If a step in this plugin fails, the first check is to verify that it is possible to run wsadmin on the command line, with the same user that runs the step and with the same connection parameters. You should run the wsadmin command on the same system where the UCD agent is running.

1. Determine which user is running the step
   - If the step is running with impersonation, you can see the user and group at the top of the step output.
   - If the step is not running with impersonation, then the user is the one running the agent process. You can find the user by running the Linux/Unix command: **ps -ef | grep java** or looking at the Task Manager in Windows.
2. Login as the user determined in item 1
3. Determine what is the path to wsadmin used by the step. This can be seen looking at the property: **commandPath=C:\IBM\WebSphere\AppServer\profiles\Dmgr01\bin** contained in the step output.
4. Determine what are the connection parameters passed to wsadmin. This can be seen by looking at the properties:

```ini
connType=SOAP
user=wasadmin
host=localhost
port=8879

```

5. Create a sample jython script called ListApplications.jython with this text: **print AdminApp.list()**
6. Specify the arguments for wsadmin based on the connection parameters listed above:
**Windows:** ``*commandPath*\wsadmin.bat -lang jython -conntype *[connType]* -host *[host]* -port *[port]* -user *[user]* -password *[password]* -f ListApplications.jython``
**Unix/Linux** ``*commandPath*/wsadmin -lang jython -conntype *[connType]* -host *[host]* -port *[port]* -user *[user]* -password *[password]* -f ListApplications.jython``

If the connection fails with connType of SOAP, try using a connType of RMI.

If this command fails, contact IBM Support and request WebSphere Application Support to help troubleshooting the wsadmin scripting problem. Consider the following technote as a starting point:

- [Learning more about wsadmin](http://www-01.ibm.com/support/docview.wss?uid=swg21242693)If this command succeeds, but the step fails, contact IBM Support and request DevOps support to help troubleshooting the step. In this case, provide:

- output of the script executed on the command line
- output of clicking on Download All on the process execution page in DevOps Deploy. This action produces a zip file that contains the output of each step in the process.
- additional information can be found at [MustGather: DevOps Deploy WebSphere Deploy and Configure plugins](http://www.ibm.com/support/docview.wss?uid=swg2C1000185)

## Start Server step

The Start Server step works only with WebSphere Application Server Network Deployment. The Start Server step does not work on WebSphere Application Server Base.

## WebSphere Topology Discovery step

You must use the Update from Live Configuration wrapper step to call this step. Do not add this step directly to processes. Click **Configuration Discovery > Update from Live Configuration** in the step palette, and then drag the step to the process diagram. In the **Plugin Step** list, select **WebSphere Topology Discovery**. If you are creating a generic process, specify``${p:resource.path}`` for the **Resource** field. When the process runs, the wrapper step populates the resource tree with the data that is discovered by the WebSphere Topology Discovery step.

Note: If you call this step from a generic process, the resource that you specify must be a cell resource. If you call this step from a component process, the component must be under the cell resource in the resource tree.

## Additional CommandLine Arguments field

The **Additional CommandLine Arguments** field for process steps that install or update applications is a text box. Enter each argument on a separate line of the text box. For example, to send the arguments -javaoption -Xms256m -javaoption -Xmx512m, specify the following text for the **Additional CommandLine Arguments** field:

```ini
-javaoption
-Xms256m
-javaoption
-Xmx512m
```

## File Path field

The **File Path** field for the **Export Application** step must be an absolute path. On Microsoft Windows, specify the path by using forward slashes or double backward slashes. For example: `C:/myapps/exported.ear` or `C:\\myapps\\exported.ear`.

## Autodiscovery fails and no logs are available

If discovery fails and no logs are available, complete this troubleshooting procedure to resolve the issue:

1. If the `wsadmin` file is in a different location than one of the default locations, specify an agent property named **`wsadmin.path`** on the agent. Then, specify the location of the `wsadmin` file as the value of this property: `/opt/IBM/WebSphere/AppServer/bin/wsadmin.sh`.
2. Set the **`websphere.profilePath`** property on the top-level group in your resource tree in the following form: `/opt/IBM/WebSphere/Profiles/,/opt/IBM/WebSphere/Profiles/AppSrv01/bin/wsadmin.sh`.
3. After you set the `**wsadmin.path**` property on the agent and the `**websphere.profilePath**` property on the top-level group in your resource tree (that is, the folder that is to be the parent of the discovered cell), add your agent as a child of the top-level group in your resource tree. The action of adding the agent to the top-level group starts the autodiscovery to run. If you add the properties above both the agent and the top-level group *after* mapping the agent as a child of the top-level group, then discovery does not run, and a new cell folder under your agent is not created. Furthermore, a log for the discovery process is not produced. The cell folder and the log are not produced, because discovery does not run. You must add the properties *before* you map the agent into the top-level group in the resource tree. If you map the agent into your resource tree and then add the described properties, you must remove the agent from your resource tree, and then map it to the resource tree again (the same place is fine) to start the autodiscovery process.

This video also shows provides information about [the autodiscovery process](https://www.urbancode.com/resource/auto-discovery-and-auto-configuration-in-plugins/).
