
# Artifactory - Usage


To use the Artifactory plug-in, you must create resources and define a deployment process.

For additional information on using Artifactory and DevOps Deploy, see [Integrating Artifactory with IBM DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/07/22/integrating-artifactory-with-ibm-urbancode-deploy)

## Before you begin

The IBM DevOps Deploy agent must be installed on the target system where the artifacts is to be downloaded.

## Using the Artifactory plug-in

Complete the following steps to create resources and define a deployment process.

1. To download the files that are imported from Artifactory to the agent computer, define a resource for the agent.
2. Add the agent to the new resource group.
* Hover over the row for the resource group, click **Actions**, and then select **Add agent**.
3. Create components for the resources. The component process can include any of the plug-in steps: **Download version (Maven build), Download version (non-Maven build)** or **Download NuGet package**.
4. Add the components to the resources.
* Navigate to the resource.
* Click **Actions** >**Add Component**.
* Select the component to use.
5. Create the application.
* Navigate to **Applications**.
* If an application does not exist, click **Create New Application**. You can also use an existing application.
* Enter an application name, and then click **Save**.
* Click the **Components** tab, then add the component that you created previously.
6. Create an application environment.
* On the **Resources** page, click **Create New Environment**.
* Enter an environment name, and then click **Save**.
* Navigate to the environment editor page.
* Click the environment name, and then click **Add Base Resource**. Select the group that you created previously.
7. Create an application process.
* Click the **Processes** tab.
* Add a deploy step.
* Drag the Install Component step to the process editor.
+ Select the component that you created for the resource.
+ Select the process for the component. For example, select **Download My Maven package from Artifactory**.
* Click **Save** to save the process.
8. Run the process to test the new component.
