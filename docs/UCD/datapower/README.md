
# IBM DataPower Configuration Manager

The IBM DevOps Deploy plugin for DataPower Configuration Manager provides the ability to automate updates to DataPower configuration as part of the software delivery process. Configuration information is stored in DataPower export files, which contain the “golden” version of services or objects, along with simple XML files that define the changes necessary for each service in each environment. These XML files can be created or modified using an XML editor. The plugin also allows easy upload of files, including keys and certificates, as well as easy customization of validation credential objects and load balancer groups, among others.

The component-level and application-level processes provided by Deploy fit naturally into the requirements for DataPower configuration management:

* Subsets of DataPower services often follow similar deployment patterns that can be captured in component-level processes. For example, many web service proxies commonly share a frontside handler, a load balancer group, and an LDAP server, and these vary by environment (e.g. SIT, UAT, and PROD). One component-level process would deploy a web service proxy with environment-specific changes specified in XML (e.g. the LDAP server information). Another component-level process would deploy the frontside handler and the load balancer group appropriate to that environment.
* An application process gathers a set of component processes in order to accomplish a full deployment of one or more DataPower services. For example, upload a set of key and certificate files for SSL, deploy a frontside handler and load balancer group, deploy a set of web service proxies that share the frontside handler, load balancer group, and SSL information, and finally run a quick test of the newly deployed services to ensure that they are functioning correctly.

**General Support:**

This plug-in is developed and supported by IBM DevOps with assistance from the IBM DevOps Development Community. The underlying DCM client, which the plugin is based off of, is supported on a best effort basis. Anyone is welcome to contribute to the plug-in or the DCM client on GitHub. Click the *Visit Project* button above to see the source code. To download the latest plug-in or dcm release, navigate to the GitHub repository and click the *release* tab. All new DataPower plug-in versions will be listed there. We suggest that you follow the GitHub repository to stay up-to-date with the latest changes. Older versions can be found on the [Downloads Page](downloads.md).

**Source Code:**

* [GitHub Project](https://github.com/ibm-datapower/datapower-configuration-manager)

**Platform Support:**

* This plugin is supported for the distributed Linux and Windows [operating systems](http://www.ibm.com/software/reports/compatibility/clarity-reports/report/html/softwareReqsForProduct?deliverableId=2406E700824311E5AB634073CD75C1C8&duComponentIds=Miscellaneous_24267CF0824311E5AB634073CD75C1C8) supported by the IBM DevOps Deploy agent
* This plugin supports, via DataPower Configuration Manager, all IBM DataPower appliances currently supported by IBM, with the exception of the XC10, and all supported versions of DataPower firmware


|Back to ...||Latest Version|||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[v27](https://github.com/ibm-datapower/datapower-configuration-manager/releases/download/Datapower27/datapower-v27.zip)|[Overview](overview.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
