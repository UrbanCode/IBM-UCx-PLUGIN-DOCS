
# Apache Tomcat - Usage

If you have multiple Tomcat instances, you can specify the instance to use in the Start Tomcat step. The step includes properties for specifying the CATALINA\_BASE and CATALINA\_HOME variables.

For Tomcat 7 and later, ```${p:tomcat.manager.url}``` needs to contain /text at the end, such as `ManagerURL : http://localhost:8080/manager/text`. The manager user must also be added to the role manager-script in order to run ant tasks without CSRF denial (403 Errors).

## Step palette

To access this plugin in the palette, click **Application Server** > **Java** > **Tomcat**.

## **Tutorials**

The Deploying a simple web application tutorial in the DevOps Deploy documentation uses the Apache Tomcat as the application server in [Lesson 2: Creating component processes](https://www.ibm.com/docs/en/urbancode-deploy/7.1.2?topic=tutorials-deploying-simple-web-application).


