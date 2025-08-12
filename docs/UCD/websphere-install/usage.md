
# WebSphere Application Server - Install - Usage


**Setting up the DevOps Deploy application**

An IBM DevOps Deploy application and several components are imported when you install the IBM WebSphere Application ServerInstall plug-in. The application includes processes that install and uninstall WebSphere Application Server Network Deployment and IBM HTTP Server. The application is intended as an example. You must create similar applications, by using the provided application as a reference, or customize the application to suit your needs.

The provided IBM DevOps Deploy application uses IBM Installation Manager to install WebSphere Application Server and IBM HTTP Server. IBM Installation Manager must be installed on the target system. The provided application uses a source repository to install WebSphere Application Server, instead of a response file. You can set up a source repository on a network and access the repository by using a URL of the form http://server.example.com/product/repository. Alternately, install the files on a computer and access the files by using an absolute path, such as C:\installation\_files\repository.config. For more information, see [Repositories](http://www-01.ibm.com/support/knowledgecenter/SSDV2W_1.8.5/com.ibm.silentinstall12.doc/topics/r_repository_types.html) in the IBM Installation Manager help.

The provided IBM DevOps Deploy application demonstrates how you can use an IBM Installation Manager response file to install IBM HTTP Server. A response file is an XML file that contains information on how to complete the installation process. You create a response file by recording your responses when you use IBM Installation Manager to install a product. For more information, see [Response files](http://www-01.ibm.com/support/knowledgecenter/SSDV2W_1.8.5/com.ibm.silentinstall12.doc/topics/c_silent_response_files.html) in the IBM Installation Manager documentation.

To run the sample application, complete the following steps:

1. Set up an IBM DevOps Deploy server, version 6.1.1.2 or later.
2. Install the IBM WebSphere Application ServerDeploy plug-in, version 76 or later.
3. Install the IBM Installation Manager plug-in, version 3 or later.
4. Install the IBM WebSphere Application ServerInstall plug-in.
5. Install an IBM DevOps Deploy agent on the host where you plan to install WebSphere Application Server.
6. Install IBM Installation Manager on the host where you plan to install WebSphere Application Server.
7. In IBM DevOps Deploy, go to the Settings page, then click **Statuses**. Under Inventory Statuses, click **Add Status**. In the Add Status window, specify the name Installed and then click **Save**.
8. Go to the Resources page and then click **Create Top-Level Group** to add a top-level group to the resource tree.
9. Select the new top-level group and then select **Add Agent** from the **Actions** list.
10. Under the agent, click **Actions > Add Component** and then add each of the new components:
* IBM HTTP Server
* WebSphereND
* WebSphereDeployment Manager
* WebSphereNode
11. Create versions for the imported components. You can use the udclient command-line tool to create versions. To learn more about the command-line client, see [Installing the command line client](http://www-01.ibm.com/support/knowledgecenter/SS4GSP_7.1.1/com.ibm.udeploy.reference.doc/topics/cli_install.html) topic in the product help. Commands for the udclient tool look similar to the following text: udclient -username admin -password admin -weburl `https://localhost:8443` createVersion -component "IBM HTTP Server" -name 8.5.5000.20130514\_1044
12. The process for the IBM HTTP Server component requires that you add artifacts to the component version. The IBM HTTP Server component requires an Installation Manager response file, which is used to install IBM HTTP Server. Name the response file responseFile.xml. The IBM HTTP Server component version name must be a valid installation package name. For example, 8.5.5000.20130514\_1044 is a valid package name. An example response file is included in the WebSphere Application ServerInstall plug-in archive file. Commands that use the udclient tool to add artifacts to component versions look similar to the following text. udclient -username admin -password admin -weburl `https://localhost:8443` addVersionFiles -component "IBM HTTP Server" -version 8.5.5000.20130514\_1044 -base /tmp/IHS\_response
13. Go to the Applications page, click **WebSphere Application Server Cell**, and then click the **WebSphere Application Server Install** environment.
14. Click **Add Base Resources** and then select the top-level group, agent, and all four components.
15. Click **Configuration > Environment Properties**, and then enter values for all properties.
16. Go to the Components page, and then click **WebSphereND > Versions**. Click the version that you created, and then click **Configuration > Version Properties**. Specify the **Installation Manager Repository** and **Version Name**. The version name must be a format similar to the following text: com.ibm.websphere.ND.v85\_8.5.5000.20130514\_1044.
17. On the Components page, click **IBM HTTP Server > Versions**. Click the version that you created, and then click **Configuration > Version Properties**. Specify the **Installation Manager Repository**.
18. On the Components page, click **WebSphereDeployment Manager > Configuration > Component Properties**. Review the default values and change the values as needed.
19. On the Components page, click **WebSphereNode > Configuration > Component Properties**. Review the default values and change the values as needed.
20. Go to the Applications page, then click **WebSphere Application Server Cell**. Click **Request Process** for the environment, clear **Only Changed Versions**, and select **Install** from the **Process** list. Click **Choose Versions**, and then select **for all > latest available.** Click **OK**, and then click **Submit**.
