
# IBM WebSphere Commerce - Usage


To create resources and define deployment processes for use with commerce servers, complete the following steps.

**Before you begin**

The IBM DevOps Deploy agent must be installed on the system that hosts the WebSphere Commerce server.

**Procedure**

1. In IBM DevOps Deploy, create a resource that represents the WebSphere Commerce server.
2. Add the agent that is installed on the system hosting the WebSphere Commerce server to the resource group.
* Hover over the row for the resource group, and then click **Actions** **> Add agent**.
3. Create components for the resources. Create one component for each resource to deploy. Specify the **Deployment** type for the component process.
4. Add the components to the resource.
* Navigate to the resource.
* Click **Actions > Add Component**, and then select the component to use.
5. Create an application.
* Navigate to the Applications page.
* Click **Create Application**. (You can also use an existing application that is attached to the cell to manage.)
* Enter an application name, and then click **Save**.
* Click the **Components** tab, and then add the component that was created in the previous step.
6. Create an application environment.
* On the Resources page, click **Create New Environment**.
* Enter an environment name, and then click **Save**.
* Navigate to the environment editing page.
* Click the environment name, and then click **Add Base Resource**. Select the group for the Process Center environment.
7. Create an application process of the **Deployment** type.
* Click the **Processes** tab.
* Add a deploy step.
* Drag and drop the **Install Component** step onto the process editor.
* Select the component that you created for the resource. For example, select the component that contains the process application to deploy.
* Select the process for the component. For example, select **Profit Margin package deployment process**.
* Click **Save**.
8. Run the process to test the new component.
