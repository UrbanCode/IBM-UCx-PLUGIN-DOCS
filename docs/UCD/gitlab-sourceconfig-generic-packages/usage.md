# GitLab Generic Packages - Usage

## Prerequisite
Before you use the plug-in, ensure that:
 - The packages are published.
 - You have the access token ready.
 - The project ID is captured.
 
## Procedure
You will need to define an DevOps Deploy component which defines the source and processes for the GitLab Generic Packages. The component contains the information for importing the artifacts and any processes to implement on the artifacts.

When creating the component, supply information described on the [GitLab Generic Packages Component Properties](steps.md#gitlab-generic-packages-component-properties) step. After the component is created use the **Components** page in the user interface to import a version of the artifacts if automatic import is not selected.

To create a component, complete the following steps. For more information about creating a component, see [Creating components](https://www.ibm.com/docs/en/urbancode-deploy/7.3.1?topic=components-creating "Creating components") in the product documentation.

1. In DevOps Deploy, click **Components** and then click **Create Component**.
2. In the Create Component window, specify a name and description for the component.
3. In the **Source Config Type** list, select **GitLab Generic Packages**.
4. Specify the properties for the component. See [Steps](steps.md#gitlab-generic-packages-component-properties) for property descriptions.
5. Specify the type of version to create by default on version import.
6. Click **Save**.

