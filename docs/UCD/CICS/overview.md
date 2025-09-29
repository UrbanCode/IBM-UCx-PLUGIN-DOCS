# CICS TS - Overview


CICS Transaction Server for z/OS provides scalable, general-purpose, transaction processing solutions for high-volume updates to shared data. Businesses have used CICS to differentiate themselves by creating, extending, and evolving their critical applications.

You can use steps from the CICS TS plug-in for DevOps Deploy, in combination with other plug-ins,to automate the deployment and un-deployment of CICS applications.

In a wider context, the CICS TS plug-in can be used in conjunction with other CICS tooling to automate the build and deployment of CICS artifacts as part of a continuous delivery environment.

## Features

The plug-in includes steps to:

* Install CSD resources, groups, and lists
* Install BAS resources, resource descriptions, and groups
* Discard resources
* Enable and disable resources
* Open and close resources
* New copy and phase in resources
* Make resources available and unavailable
* Check the available, enable,and open status of resources
* Scan pipelines
* Deploy and undeploy a bundle
* Deploy and undeploy an application
* Check the status of an application
* Enable and disable an application
* Make an application available and unavailable

## Compatibility

The CICS TS plug-in is supported to run against any of the following CICS editions:

* IBM CICS Transaction Server for z/OS V5.4, V5.5, V5.6, V6.1, 6.2
* IBM CICS Transaction Server for z/OS Developer Trial V5.4, V5.5, V5.6, V6.1, 6.2
* IBM CICS Transaction Server for z/OS Value Unit Edition V5.4, V5.5, V5.6, V6.1, 6.2

Additionally, you must also have configured a CICS management client interface (CMCI) port, as described in topic [Setting up access for CICS Explorer](https://www.ibm.com/docs/en/cics-ts/6.x?topic=configuring-setting-up-cmci) in the IBM Knowledge Center.

This plug-in requires DevOps Deploy 6.2.5 or later, and the [zOS Utility](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/zos-deploy/) 10 plug-in or later. Using this plug-in requires the DevOps Deploy agent to be running with Java 8; for details of how to upgrade the version of Java used by the agent, see [Changing or updating the JRE of agents](https://www.ibm.com/support/knowledgecenter/SS4GSP_6.2.4/com.ibm.udeploy.doc/topics/jre_change_agent.html).

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

