
# IBM WebSphere Service Registry and Repository - Usage

## This section elaborates on the procedure to be followed to use this plug-in.

Before you begin, you must have

1. Installed and started your WSRR server, you can refer to <http://pic.dhe.ibm.com/infocenter/sr/v8r0/index.jsp>.
2. Installed and started your DevOps Deploy Server, you can refer to <http://coltrane-new.rtp.raleigh.ibm.com/ucdeploy/index.jsp>.
3. Installed DevOps Deploy Agent on the machine which the WSRR server locates.
4. Started the DevOps Deploy Agent which connects to the DevOps Deploy Server.
5. Load the WSRR plug-in into the DevOps Deploy Server.

### Register Web Services to a WebSphere Service Registry and Repository server

* Prepare CSV and WSDL files that describe the web services.
* The CSV file **must** contain the following exact headers:
  * Name
  * Description
  * Version
  * Status
  * Date in Production
  * Owner
  * Endpoint URL
  * Documentation Filename
  * WSDL Filename
  * Namespace
  * Service ID
* Create a resource that represents the WebSphere Service Registry and Repository server.
* Add the agent that is installed on the system hosting the WebSphere Service Registry and Repository server to the resource group.
  * Hover over the row for the resource group, click **Actions**, and then select **Add agent**.
* Create components for the resources. The components must include the CSV files and WSDL folders. Create one component for each resource to deploy.
  * Create component processes of type **Deployment**. In the corresponding component deployment process, add a Register Service step, and enter parameters such as csvFile, wsdlPath, hostname, port, username, password, and so on.
    * -csvFile is the complete file name of the CSV file to import.
    * -wsdlPath is the complete path to a directory containing the WSDL and XSD documents. By default, the wsdlPath parameter is the current directory.
    * -hostname is the host name or IP address of the WebSphere Service Registry and Repository server. By default, the hostname parameter is localhost.
    * -port is the Service Registry WC_defaulthost port, which is the port on which the Service Registry Web UI is hosted. Typically, in standalone environments this port number is 9080 for secure communication and 9443 for non-secure communication. By default, the port parameter is 9433.
* Add the components to the resources.
  * Navigate to the resource.
  * Click **Actions > Add Component**.
  * Select the component to add.
* Create the application.
  * Navigate to **Applications**.
  * If an application does not exist, click **Create New Application**. You can also use an existing application that is attached to the cell to manage.
  * Enter an application name, then click **Save**.
  * Click the **Components** tab, then add the components to the application.
* Create an application environment.
  * On the **Resources** page, click **Create New Environment**.
  * Enter an environment name, then click **Save**.
  * Navigate to the environment editing page.
  * Click on the environment name, then click **Add Base Resource**. Select the group for the Process Center environment.
* Create an application process of type **Deployment**.
  * Click the **Processes** tab.
  * Add a deployment step.
  * Drag and drop the Install Component step into the process editor.
    * Select the component to install from the list of components that you created for the resource. For example, you created a component to contain the process application to deploy.
    * Choose the process for the component.
  * Click **Save**.
  * Save the process.
* Run the deployment process and check the corresponding status and log information.

### Load, activate or delete Configuration Profile

* Load, activate or delete Configuration Profile on a WebSphere Service Registry and Repository server

1. For loading, activating or deleting a Configuration Profile on a WebSphere Service Registry and Repository server, create a resource that represents the WebSphere Service Registry and Repository server.
2. Add the agent that is installed on the system hosting the WebSphere Service Registry and Repository server to the resource group.
   * Hover over the row for the resource group, click **Actions**, and then select **Add agent**.
3. Create components for the resources. Create one component for each resource to deploy.
   * Create the component process of type **Deployment**. Drag and drop steps such as Load Configuration Profile, Activate Configuration Profile, and Delete Configuration Profile into the deployment process. Configure any input parameters that are required by the steps.
4. Add the components to the resource.
   * Navigate to the resource.
   * Click **Actions > Add Component**
   * Select the component to add.
   1. Create the application.
   * Navigate to **Applications**.
   * If an application does not exist, click **Create New Application**. You can also use an existing application that is attached to the cell to manage.
   * Enter an application name, then click **Save**.
   * Click the **Components** tab, then add the components.
5. Create an application environment.
   * On the **Resources** page, click **Create New Environment**.
   * Enter an environment name, then click **Save**.
   * Navigate to the environment editing page.
   * Click the environment name, then click **Add Base Resource**. Choose the group for the Process Center environment.
6. Create an application process of type **Deployment**.
   * Click the **Processes** tab.
   * Add a deployment step.
   * Drag and drop the Install Component step onto the process editor.
     * Select the component to use. You created this component for the resource. For example, you created a component to contain the process application to be deployed.
   * Choose the process for the component.
   * Click **Save**.
7. Save the process. You can then run the deployment process and check the status and logs for each step.
8. Check the new Configuration Profile status on the WebSphere Service Registry and Repository server.

|          Back to ...          |                                |                                               Latest Version                                                | IBM WebSphere Service Registry and Repository |                         |                   |                           |
| :---------------------------: | :----------------------------: | :---------------------------------------------------------------------------------------------------------: | :-------------------------------------------: | :---------------------: | :---------------: | :-----------------------: |
| [All Plugins](../../index.md) | [Deploy Plugins](../README.md) | [9.1056551](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WSRR/WSRR-9.1056551.zip) |              [Readme](README.md)              | [Overview](overview.md) | [Steps](steps.md) | [Downloads](downloads.md) |
