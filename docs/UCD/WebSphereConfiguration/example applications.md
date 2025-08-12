
# WebSphere Application Server - Configure - Example Applications



You can work with two types of applications:

* [Example IBM DevOps Deploy applications](#UCD-example)
* [Example WebSphere Application Server plug-in example applications](#WAS_plugin-ex)

## Example IBM DevOps Deploy applications

### Plants by WebSphere

The `Plants1_artifacts.zip` file contains an example IBM DevOps Deploy application that creates and configures a WebSphere cluster, and then installs the PlantsByWebSphere application on the cluster. The processes in the DevOps Deploy application use the multiplicity feature to create the cluster. See [Installing Plants by WebSphere](https://community.ibm.com/community/user/wasdevops/blogs/osman-burucu/2022/06/16/example-installing-the-plantsbywebsphere-applicati).

## Example WebSphere Application Server plug-in example applications

The WebSphere Application Server Configure plug-in includes applications that you can use as examples for managing WebSphere Application Server configurations in IBM DevOps Deploy.

These applications are only examples. Tailor these applications for your specific needs. Do not use the environments that are included in the example applications. Instead, create new environments that are based on the examples. If you use the examples, and upgrade the plug-in all changes made to the Templates, Application, and Components will be overwritten (changes like adding Component or Application Properties, or adding Teams). If you want to use the examples object rename all of them. Renaming them will prevent the objects from being overwritten when the plug-in is being upgraded. The plug-in upgrade will then create new objects with the original name.

This application includes processes that demonstrate how to manage WebSphere Application Server configurations with IBM DevOps Deploy. Examine this application to learn more about using the plug-in to work with WebSphere Application Server configurations. This application works with the sample processes that are included with the plug-in. This application is installed with the WebSphere Application Server Configure plug-in.

### WebSphere Configuration Example Migration Application

This application does not include processes. Use this application instead of the previous application to migrate versions of WebSphere Application Server with IBM DevOps Deploy. This application is not installed with the WebSphere Application Server Configure plug-in. You must manually import this application into IBM DevOps Deploy. [Download the application (JSON file)](https://github.com/UrbanCode/IBM-UCD-PLUGINS/blob/main/files/WebSphereConfiguration/SampleApplications/WebSphereConfigurationExampleMigrationApplication.json).

To learn more about migrating versions, see [Migrating WebSphere Application Server versions with IBM DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/osman-burucu/2023/01/04/migrating-websphere-application-server-versions-wi).

### WebSphere Configuration Example Application Snippets for Individual Configuration Objects

This application includes processes to apply and remove configuration snippets when you use the approach where you manage individual configuration objects with snippets. This application is not installed with the WebSphere Application Server Configure plug-in. You must manually import this application into IBM DevOps Deploy, and then edit the processes to work with your components. [Download the application (JSON file)](https://github.com/UrbanCode/IBM-UCD-PLUGINS/blob/main/files/WebSphereConfiguration/SampleApplications/WebSphereConfigurationExampleSnippetApplication.json).

For more information, see [Applying and removing partial configurations](https://community.ibm.com/community/user/wasdevops/blogs/osman-burucu/2022/07/06/applying-and-removing-partial-configurations) article. Also, see the WebSphere Configuration Partial Apply step on the **Steps** tab.

.

