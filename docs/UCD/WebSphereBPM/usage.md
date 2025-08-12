
# IBM Business Process Manager (WebSphere BPM) for IBM DevOps Deploy - Usage

* [Deploying to an offline Process Server](https://www.urbancode.com/plugindoc/ibmucd/websphere-bpm/1-2/usage/deployments-offline-process-server/)
* [Deploying to an online Process Server](https://www.urbancode.com/plugindoc/ibmucd/websphere-bpm/1-2/usage/deployments-online-process-server/)
* [Creating Versions without a Build or CI Tool](https://www.urbancode.com/docs/creating-versions-without-a-build-or-ci-tool/): Import IBM Business Process Manager artifacts with our suggested approach.
* [Continuous Integration with DevOps Deploy and IBM Business Process Server](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/07/20/bpserver): Sample deployment architecture and process using IBM WebSphere Application Server (WAS), Business Process Manager (BPM), and Rational Team Concert (RTC).

## Deploying to an offline Process Server

1. To deploy a process application snapshot to an offline Process Server, create a resource that represents the Process Center, and then define the following properties for the resource:
* **profile.root.directory**: The profile root directory of the managed node running the Process Center application. For example, /opt/IBM/BPM/profiles/processCenterNode01.
* **websphere.user**: The WebSphere Application Server administrator user.
* **websphere.password**: The WebSphere Application Server administrator password.
* **websphere.connType**: The connection protocol for WebSphere Application Server. The connection protocol is SOAP, RMI, or NONE.
* **websphere.port**: The port to use with the specified connection type for communication with the application server that is running the Process Center application.
* **offline.server.name**: The name of the offline Process Server, which is set in the Process Center console.
2. Add the agent that is installed on the system that hosts the Process Center to the resource group.
* Hover over the row for the resource group, click **Actions**, and then select **Add agent**.
3. Create a resource that represents the Process Center, and then define the following properties for the resource:
* **profile.root.directory**: The profile root directory of the managed node that runs the Process Center application. For example, /opt/IBM/BPM/profiles/processCenterNode01.
* **websphere.user**: The WebSphere Application Server administrator user.
* **websphere.password**: The WebSphere Application Server administrator password.
* **websphere.connType**: The connection protocol for WebSphere Application Server. The connection protocol is SOAP, RMI, or NONE.
* **websphere.port**: The port to use with the specified connection type for communication with the application server that runs the Process Center application.
4. Add the agent that is installed on the system that hosts the Process Center to the resource group.
* Hover over the row for the resource group, click **Actions**, and then select **Add agent**.
5. Create components for the resources. Create a component for each resource to deploy. In this case, create two components, one for the Process Center resource and one for the Process Server resource.
6. Create the deployment process for each component. The Process Center component process must be of the **Operational (without version)** type. The Process Server component process must be of the **Deployment** type.
7. Include the **Generate offline package** step from this plug-in and the **Create Version** step from the IBM DevOps DeployVersions plug-in in the Process Center component process. The **Create Version** step uploads the generated offline process package as a new version to the component created for the Process Server.
8. Include the **Deploy offline package** step from this plug-in in the Process Server component process.
9. Add the components to the resources.
* Navigate to the resource.
* Click **Actions > Add Component**
* Select the component to use.
10. Create an application.
* Navigate to the Applications page.
* Click **Create New Application**. You can also use an existing application that is attached to the cell to manage.
* Enter an application name, and then click **Save**.
* Click the **Components** tab, and then add the component that you created in step 5.
11. Create an application environment.
* On the Resources page, click **Create New Environment**.
* Enter an environment name, and then click **Save**.
* Navigate to the environment editor.
* Click on the environment name, and then click **Add Base Resource**. Select the group for your Process Center environment.
12. Create an application process of the deployment type.
* Click the **Processes** tab.
* Add a deployment step.
* Drag and drop the **Install Component** step onto the process editor.
+ Select the component that you created for the resource. For example, the component to contain the process application to be deployed.
+ Select the process for the component. For example, select **Online snapshot deployment process**.
* Click **Save**.
13. Run the process to test the new component.

## Deploying to an online Process Server




1. To deploy a process application snapshot to an online Process Server, create a resource that represents the Process Center, and then define the following properties for the resource:
* **profile.root.directory**: The profile root directory of the managed node that runs the Process Center application. For example, /opt/IBM/BPM/profiles/processCenterNode01.
* **websphere.user**: The WebSphere Application Server administrator user.
* **websphere.password**: The WebSphere Application Server administrator password.
* **websphere.connType**: The connection protocol for WebSphere Application Server. The connection protocol is SOAP, RMI, or NONE.
* **websphere.port**: The port to use with the specified connection type for the application server that runs the Process Center application.
2. Add the agent that is installed on the system that hosts the Process Center to the resource group.
* Hover over the row for the resource group, and then click **Actions** **>** **Add agent**.
3. Create components for the resources. Create a component for each resource to deploy. The component processes must be of the **Deployment** type and must include the **Deploy process application snapshot** plug-in step.
4. Add the components to the resources.
* Navigate to the resource.
* Click **Actions > Add Component**.
* Select the component.
5. Create the application.
* Navigate to the Applications page.
* Click **Create New Application**. You can also use an existing application that is attached to the cell to manage.
* Enter an application name, and then click **Save**.
* Click the **Components** tab, then add the component that you created in step 3.
6. Create an application environment.
* On the Resources page, click **Create New Environment**.
* Enter an environment name, and then click **Save**.
* Navigate to the environment editor.
* Click the environment name, and then click **Add Base Resource**. Choose the group for your Process Center environment.
7. Create an application process of the Deployment type.
* Click the **Processes** tab.
* Add a deployment step.
* Drag and drop the **Install Component** step onto the process editor.
+ Select the component that you created for the resource. For example, select a component to contain the process application to deploy.
+ Choose the process for the component. For example, choose **Online snapshot deployment process**.
* Click **Save**.
8. Run the process to test the new component.
