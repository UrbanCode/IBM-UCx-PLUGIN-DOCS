
# Jenkins - Overview

Jenkins plug-in is a powerful tool for managing software delivery pipelines in DevOps Velocity.  Deployment teams can  orchestrate the deployment of input builds into controlled environments with defined checks and balances using Jenkins plug-in. 
Jenkins plug-in is a scheduled plug-in that runs every 5 minutes to import any new builds in Jenkins and pull them into DevOps Velocity.  This ensures that you have access to the latest builds and work more efficiently.

The Jenkins plug-in has the following features:

**Importing Jobs and Builds:**
You can use Jenkins plug-in to import jobs and builds from a Jenkins server, which can be provided as an input for the release pipelines in DevOps Velocity. Therefore, you can manage the software delivery process more efficiently.

**Running automation tasks:**
You can use Jenkins plug-in to run Jenkins jobs as an automation task in DevOps Velocity. Running the Jenkins job as an automation task, you can further streamline the software delivery process by automating routine tasks, reducing errors, and minimizing the time required to release the software.

**Integration with deployment pipelines:**
Deployment pipelines in DevOps Velocity is a powerful way to create automated pipelines for deploying software applications.  You can use Jenkins plug-in to add Jenkins jobs as a task within the deployment pipelines and automate the deployment process. 


## Compatibility

Must be running DevOps Velocity version 4.0.9 and later to use the plug-in.

## Versions

DevOps Velocity plug-in images are located in DockerHub. To
view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-jenkins/tags).


## History

### Version 1.1.7

* The Jenkins task in deployment remains incomplete when the Velocity instance goes down during deployment. When the instance comes back online with the new version, the task still does not get marked as complete.

### Version 1.1.5

* Fix xpath job filter
* Use correct username on task completion

### Version 1.1.3

* Fix for Build-Revision mismatch in Jenkins Integration

### Version 1.1.2

* Added support for process parameters coming from Git Parameter and Active Choices plugins
* Warning logs added for skipping unsupported process parameters
### Version 1.1.1

* Default initial sync to 30 days

### Version 1.0.4

* Fixed integration name not showing in pipeline stage task selection.
* Fixed external build link not appearing in deployment plan task.

### Version 1.0.1

* Initial release.


|Back to ...||Latest Version|Jenkins |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.1.7-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-jenkins/ucv-ext-jenkins%3A1.1.7.tar.7z.001)[and 1.1.7-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-jenkins/ucv-ext-jenkins%3A1.1.7.tar.7z.002)|[Readme](README.md)|[Usage](usage.md)|[Downloads](downloads.md)|
