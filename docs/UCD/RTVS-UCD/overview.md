
# IBM Rational Test Virtualization Server (RTVS) - Overview


Service Virtualization helps you to automate integration testing in complex application environments early in the development lifecycle. You can use this plug-in to create virtual services that model the services that your application depends on. You can virtualize services that are accessed through various technologies, including HTTP, MQ, JMS, JDBC, TCP/IP, CICS-TG, IMS Connect, SAP, and Software AG web methods. For more information, see the [Supported technologies for testing](http://www.ibm.com/support/knowledgecenter/SSBLQQ_8.7.0/com.ibm.rational.rit.accessibility.doc/topics/c_rit_sup_test.html) topic in the Rational Integration Tester documentation.


To use this plug-in, you must install the Rational Test Virtualization Server. To learn more about its installation, see the [Installing Rational Test Virtualization Server](http://www.ibm.com/support/knowledgecenter/SSBLQQ_8.7.0/com.ibm.rational.rtvs.ref.doc/topics/c_inst_rtvs_overview.html "Installing Rational Test Virtualization Server") section of the IBM Rational Solution for Test Automation documentation.

## Compatibility

This plug-in supports Rational Test Workbench v8.5 or later.

The steps in this plug-in run on any agents that are supported by both the IBM DevOps Deploy and the Rational Test Control Panel Ant client, except for agents on z/OS.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins).

**Note:** You can install this plug-in without migrating or upgrading the last version of the plug-in which was called GreenHat.

## Known limitations

The [Start scenario](#start_scenario) and [Stop scenario](#stop_scenario) steps do not work within a transient environment.

