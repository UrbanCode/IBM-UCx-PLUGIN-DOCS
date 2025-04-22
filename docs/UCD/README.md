# Welcome to Devops Deploy Integration Components

## Contents

- Tools
	- [Process As A Code](https://urbancode.github.io/plugin-docs-paac/)

- [List of all Plugins](#list-of-all-plugins)
	- [7-Zip  \[community plugin\]](#7-zip--community-plugin)
	- [AccuRev SCM](#accurev-scm)
	- [Actifio  \[partner plugin\]](#actifio--partner-plugin)
	- [Amazon EC2](#amazon-ec2)
	- [Amazon Web Services (AWS) Lambda  \[community plugin\]](#amazon-web-services-aws-lambda--community-plugin)
	- [Ansible](#ansible)
	- [Apache Ant](#apache-ant)
	- [Apache HTTP Server](#apache-http-server)
	- [Apache Hadoop  \[community plugin\]](#apache-hadoop--community-plugin)
	- [Apache Tomcat](#apache-tomcat)
	- [App Connect Enterprise](#app-connect-enterprise)
	- [Apple Xcode  \[community plugin\]](#apple-xcode--community-plugin)
	- [Apprenda  \[partner plugin\]](#apprenda--partner-plugin)
	- [Argo CD](#argocd)
	- [Artifactory](#artifactory)
	- [Artifactory Source Config](#artifactory-source-config)
	- [ASOC \[community plugin\]](#asoc-community-plugin)
	- [Aspera](#aspera)
	- [Autosys](#autosys)
	- [Avnet Talos  \[partner plugin\]](#avnet-talos--partner-plugin)
	- [Azure DevOps Sourceconfig](#azure-devops-sourceconfig)
	- [BMC Remedy Action Request System](#bmc-remedy-action-request-system)
	- [Box  \[community plugin\]](#box--community-plugin)
	- [CA SCM (formerly Harvest)](#ca-scm-formerly-harvest)
	- [CICS CM (Beta)](#cics-cm-beta)
	- [CICS TS](#cics-ts)
	- [Chef](#chef)
	- [Citrix NetScaler](#citrix-netscaler)
	- [Cloud Foundry \[community plugin\]](#Cloud-Foundry--community-plugin)
	- [Cloudant  \[community plugin\]](#cloudant--community-plugin)
	- [CyberArk  \[partner plugin\]](#cyberark--partner-plugin)
	- [DBmaestro \[partner plugin\]](#dbmaestro-partner-plugin)
	- [Datical DB  \[partner plugin\]](#datical-db--partner-plugin)
	- [Dimensions](#dimensions)
	- [Docker](#docker)
	- [Docker Compose](#docker-compose)
	- [Docker Registry](#docker-registry)
	- [F5 BIG-IP](#f5-big-ip)
	- [File System](#file-system)
	- [File System (Versioned)](#file-system-versioned)
	- [File Utils](#file-utils)
	- [FileNet - IBM Case Manager](#filenet---ibm-case-manager)
	- [Git](#git)
	- [Git Install  \[community plugin\]](#git-install--community-plugin)
	- [GitLab-Generic-Packages](#gitlab-generic-packages)
	- [GitLab-Sourceconfig-Generic-Packages](#gitlab-sourceconfig-generic-packages)
	- [GitHub-Release](#github-release)
	- [Google Android SDK](#google-android-sdk)
	- [Groovy](#groovy)
	- [HCL DevOps Test Hub](#hcl-devops-test-hub)
	- [HCL DevOps Test Performance](#hcl-devops-test-performance)
	- [HCL DevOps Test UI](#hcl-devops-test-ui)
	- [HCL DevOps Test UI WebUI](#hcl-devops-test-ui-webui)
	- [HCL DevOps Test Virtualization](#hcl-devops-test-virtualization)
	- [HCL OneTest API](#hcl-onetest-api)
	- [HCL OneTest Performance](#hcl-onetest-performance)
	- [HCL OneTest Server](#hcl-onetest-server)
	- [HCL OneTest UI](#hcl-onetest-ui)
	- [HCL OneTest Virtualization](#hcl-onetest-virtualization)
	- [HCL OneTest WebUI](#hcl-onetest-webui)
	- [HP LoadRunner](#hp-loadrunner)
	- [HP Unified Functional Testing (QTP)](#hp-unified-functional-testing-qtp)
	- [IBM API Connect](#ibm-api-connect)
	- [IBM AppScan Enterprise](#ibm-appscan-enterprise)
	- [IBM BigFix](#ibm-bigfix)
	- [IBM Bluemix Auto-Scaling](#ibm-bluemix-auto-scaling)
	- [IBM Business Process Manager (WebSphere BPM)](#ibm-business-process-manager-websphere-bpm)
	- [IBM Business Process Manager (WebSphere BPM) for IBM DevOps Deploy](#ibm-business-process-manager-websphere-bpm-for-ibm-devops-deploy)
	- [IBM Cognos](#ibm-cognos)
	- [IBM Cognos Analytics](#ibm-cognos-analytics)
	- [IBM Containers](#ibm-containers)
	- [IBM DataPower Configuration Manager](#ibm-datapower-configuration-manager)
	- [IBM Db2 for z/OS Package](#ibm-db2-for-zos-package)
	- [IBM DevOps Test Hub](#ibm-devops-test-hub)
	- [IBM DevOps Test Performance](#ibm-devops-test-performance)
	- [IBM DevOps Test UI](#ibm-devops-test-ui)
	- [IBM DevOps Test UI WebUI](#ibm-devops-test-ui-webui)
	- [IBM DevOps Test Virtualization](#ibm-devops-test-virtualization)
	- [IBM Globalization Pipeline  \[community plugin\]](#ibm-globalization-pipeline--community-plugin)
	- [IBM IMS](#ibm-ims)
	- [IBM InfoSphere DataStage](#ibm-infosphere-datastage)
	- [IBM InfoSphere Optim](#ibm-infosphere-optim)
	- [IBM Installation Manager](#ibm-installation-manager)
	- [IBM Instana](#ibm-instana)
	- [IBM Integration Bus (IIB) plugin Deploy step for zOS](#ibm-integration-bus-iib-plugin-deploy-step-for-zos)
	- [IBM Integration Bus (formerly WebSphere Message Broker) - CMP](#ibm-integration-bus-formerly-websphere-message-broker---cmp)
	- [IBM MQ for z/OS - Generate MQSC Commands \[community plugin\]](#ibm-mq-for-zos---generate-mqsc-commands-community-plugin)
	- [IBM MaaS360  \[community plugin\]](#ibm-maas360--community-plugin)
	- [IBM Maximo](#ibm-maximo)
	- [IBM MobileFirst Platform (formerly Worklight)](#ibm-mobilefirst-platform-formerly-worklight)
	- [IBM MobileFirst Platform Foundation on IBM Containers](#ibm-mobilefirst-platform-foundation-on-ibm-containers)
	- [IBM Operational Decision Manager (ODM)](#ibm-operational-decision-manager-odm)
	- [IBM Operational Decision Manager (ODM) Source Config](#ibm-operational-decision-manager-odm-source-config)
	- [IBM Rational Asset Manager](#ibm-rational-asset-manager)
	- [IBM Rational Asset Manager for IBM DevOps Deploy](#ibm-rational-asset-manager-for-ibm-devops-deploy)
	- [IBM Rational Automation Framework for WebSphere  \[community plugin\]](#ibm-rational-automation-framework-for-websphere--community-plugin)
	- [IBM Rational ClearCase](#ibm-rational-clearcase)
	- [IBM Rational ClearQuest  \[community plugin\]](#ibm-rational-clearquest--community-plugin)
	- [IBM Rational Functional Tester (RFT)](#ibm-rational-functional-tester-rft)
	- [IBM Rational Integration Tester (RIT)](#ibm-rational-integration-tester-rit)
	- [IBM Rational Performance Tester (RPT)](#ibm-rational-performance-tester-rpt)
	- [IBM Rational Quality Manager (RQM)](#ibm-rational-quality-manager-rqm)
	- [IBM Rational Team Concert - Build](#ibm-rational-team-concert---build)
	- [IBM Rational Team Concert - SCM](#ibm-rational-team-concert---scm)
	- [IBM Rational Team Concert Work Items](#ibm-rational-team-concert-work-items)
	- [IBM Rational Test Automation Server (RTAS)](#ibm-rational-test-automation-server-rtas)
	- [IBM Rational Test Virtualization Server (RTVS)](#ibm-rational-test-virtualization-server-rtvs)
	- [IBM Rational Test Workbench Web UI Tester](#ibm-rational-test-workbench-web-ui-tester)
	- [IBM Security Access Manager (WebSEAL)  \[community plugin\]](#ibm-security-access-manager-webseal--community-plugin)
	- [IBM Sterling B2B Integrator  \[community plugin\]](#ibm-sterling-b2b-integrator--community-plugin)
	- [IBM DevOps Build](#ibm-devops-build)
	- [IBM DevOps DBUpgrader](#ibm-devops-dbupgrader)
	- [IBM DevOps Deploy Agent Package for Dynamic Cloud Environments](#ibm-devops-deploy-agent-package-for-dynamic-cloud-environments)
	- [IBM DevOps Deploy Applications](#ibm-devops-deploy-applications)
	- [IBM DevOps Deploy Components](#ibm-devops-deploy-components)
	- [IBM DevOps Deploy Configuration Management](#ibm-devops-deploy-configuration-management)
	- [IBM DevOps Deploy Environments](#ibm-devops-deploy-environments)
	- [IBM DevOps Deploy General Utilites](#ibm-devops-deploy-general-utilites)
	- [IBM DevOps Deploy Process](#ibm-devops-deploy-process)
	- [IBM DevOps Deploy Resources](#ibm-devops-deploy-resources)
	- [IBM DevOps Deploy System](#ibm-devops-deploy-system)
	- [IBM DevOps Deploy Tools](#ibm-devops-deploy-tools)
	- [IBM DevOps Deploy Versioned File Storage](#ibm-devops-deploy-versioned-file-storage)
	- [IBM DevOps Deploy Versions](#ibm-devops-deploy-versions)
	- [IBM DevOps PHP CLI Tool  \[community plugin\]](#ibm-devops-php-cli-tool--community-plugin)
	- [IBM DevOps Package Manager](#ibm-devops-package-manager)
	- [IBM DevOps Release](#ibm-devops-release)
	- [IBM DevOps uBuild](#ibm-devops-ubuild)
	- [IBM VDP  \[partner plugin\]](#ibm-vdp--partner-plugin)
	- [IBM WebSphere Commerce](#ibm-websphere-commerce)
	- [IBM WebSphere Liberty](#ibm-websphere-liberty)
	- [IBM WebSphere Portal](#ibm-websphere-portal)
	- [IBM WebSphere Service Registry and Repository](#ibm-websphere-service-registry-and-repository)
	- [IBM Workload Automation  \[community plugin\]](#ibm-workload-automation--community-plugin)
	- [IBM-MQ](#ibm-mq)
	- [InfoSphere-ISD](#infosphere-isd)
	- [Informatica  \[community plugin\]](#informatica--community-plugin)
	- [JBoss Application Server](#jboss-application-server)
	- [JBoss-ON  \[community plugin\]](#jboss-on--community-plugin)
	- [JIRA for IBM DevOps Deploy](#jira-for-ibm-devops-deploy)
	- [Jenkins Job Manager  \[community plugin\]](#jenkins-job-manager--community-plugin)
	- [Jenkins Pipeline](#jenkins-pipeline)
	- [Jenkins Publisher](#jenkins-publisher)
	- [Kubernetes](#kubernetes)
	- [Linux System Tools](#linux-system-tools)
	- [Liquibase  \[community plugin\]](#liquibase--community-plugin)
	- [LogiGear TestArchitect  \[community plugin\]](#logigear-testarchitect--community-plugin)
	- [Maven](#maven)
	- [Maven Resolve](#maven-resolve)
	- [Mesos Marathon](#mesos-marathon)
	- [MicroFocus ALM (formerly HP Quality Center)](#microfocus-alm-formerly-hp-quality-center)
	- [Microsoft BizTalk](#microsoft-biztalk)
	- [Microsoft IIS - Configure](#microsoft-iis---configure)
	- [Microsoft IIS AdminScripts](#microsoft-iis-adminscripts)
	- [Microsoft IIS AppCmd](#microsoft-iis-appcmd)
	- [Microsoft IIS MS-Deploy (Azure App Service)](#microsoft-iis-ms-deploy-azure-app-service)
	- [Microsoft SQL Server SQLCmd](#microsoft-sql-server-sqlcmd)
	- [Microsoft SSIS](#microsoft-ssis)
	- [Microsoft SharePoint](#microsoft-sharepoint)
	- [Microsoft Software Installer (MSI)](#microsoft-software-installer-msi)
	- [Microsoft TFS (Team Foundation Server)](#microsoft-tfs-team-foundation-server)
	- [Microsoft TFS Work Items](#microsoft-tfs-work-items)
	- [Microsoft TFS\_SCM (Team Foundation Server)](#microsoft-tfs_scm-team-foundation-server)
	- [Microsoft Visual Studio Team Services (VSTS)  \[partner plugin\]](#microsoft-visual-studio-team-services-vsts--partner-plugin)
	- [Microsoft Windows Failover Clusters](#microsoft-windows-failover-clusters)
	- [Microsoft Windows Services](#microsoft-windows-services)
	- [Microsoft Windows System Tools](#microsoft-windows-system-tools)
	- [Mulesoft](#mulesoft)
	- [NPM](#npm)
	- [New Relic  \[community plugin\]](#new-relic--community-plugin)
	- [Nexus](#nexus)
	- [Nexus Repository Manager V3](#nexus-repository-manager-v3)
	- [Nexus Source Config](#nexus-source-config)
	- [Node-RED  \[community plugin\]](#node-red--community-plugin)
	- [Node.js  \[community plugin\]](#nodejs--community-plugin)
	- [NuGet](#nuget)
	- [OpenShift](#openshift)
	- [OpenShift for IBM DevOps Deploy](#openshift-for-ibm-devops-deploy)
	- [Oracle SQLPlus](#oracle-sqlplus)
	- [Oracle Service Bus Configuration Management](#oracle-service-bus-configuration-management)
	- [Oracle WebLogic Application Deployment](#oracle-weblogic-application-deployment)
	- [Oracle WebLogic Integration Resource Management](#oracle-weblogic-integration-resource-management)
	- [Oracle WebLogic Scripting Tool (WLST)](#oracle-weblogic-scripting-tool-wlst)
	- [Oracle WebLogic Server Resource Management](#oracle-weblogic-server-resource-management)
	- [Oracle WebLogic Server Security Management](#oracle-weblogic-server-security-management)
	- [Oracle WebLogic WLDeploy](#oracle-weblogic-wldeploy)
	- [PVCS](#pvcs)
	- [Perforce Helix](#perforce-helix)
	- [PowerShell](#powershell)
	- [Property Utils  \[community plugin\]](#property-utils--community-plugin)
	- [Puppet  \[community plugin\]](#puppet--community-plugin)
	- [RPM](#rpm)
	- [Rally for IBM DevOps Deploy](#rally-for-ibm-devops-deploy)
	- [Resource Utilities](#resource-utilities)
	- [SAP Change and Transport System (CTS)](#sap-change-and-transport-system-cts)
	- [SQL-JDBC](#sql-jdbc)
	- [Salesforce](#salesforce)
	- [Selenium](#selenium)
	- [Send SMTP Email](#send-smtp-email)
	- [ServiceNow](#servicenow)
	- [Shell](#shell)
	- [Siebel  \[community plugin\]](#siebel--community-plugin)
	- [Skytap Automation Pack  \[partner plugin\]](#skytap-automation-pack--partner-plugin)
	- [Slack  \[community plugin\]](#slack--community-plugin)
	- [Subversion](#subversion)
	- [Subversion-Export](#subversion-export)
	- [Sybase](#sybase)
	- [System Information](#system-information)
	- [TIBCO  \[partner plugin\]](#tibco--partner-plugin)
	- [TeamCity](#teamcity)
    - [Terraform](https://urbancode.github.io/plugin-docs-terraform-iaac/)
	- [Text Utility  \[community plugin\]](#text-utility--community-plugin)
	- [VMware AirWatch  \[community plugin\]](#vmware-airwatch--community-plugin)
	- [Venafi  \[community plugin\]](#venafi--community-plugin)
	- [Web Utilities](#web-utilities)
	- [WebSphere Application Server - Configure](#websphere-application-server---configure)
	- [WebSphere Application Server - Deployment](#websphere-application-server---deployment)
	- [WebSphere Application Server - Install](#websphere-application-server---install)
	- [WinRS Agent Install](#winrs-agent-install)
	- [CyberArk](#cyberark)
	- [eggPlant  \[partner plugin\]](#eggplant--partner-plugin)
	- [z/OS Dataset Writer](#zos-dataset-writer)
	- [z/OS External Artifact Repository](#zos-external-artifact-repository)
	- [z/OS FTP Utility](#zos-ftp-utility)
	- [z/OS File Source Config](#zos-file-source-config)
	- [z/OS Management Facility](#zos-management-facility)
	- [z/OS Multi Generate Artifact Information](#zos-multi-generate-artifact-information)
	- [z/OS Shell \[Deprecated\]](#zos-shell-deprecated)
	- [z/OS USS Utility \[Deprecated\]](#zos-uss-utility-deprecated)
	- [z/OS Utility](#zos-utility)
	- [z/OS Rexx Executor](#zos-rexx-executor)

# List of all Plugins

## 7-Zip  [community plugin]

The 7-Zip plug-in is a community plug-in. Community plug-ins are open source projects that are developed and supported by the IBM DevOps development community.

---

|Back to ...||7-Zip |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](7-zip/README.md)|[0]()|

## AccuRev SCM

AccuRev is a client/server based source configuration management tool developed by AccuRev Inc. and maintained by MicroFocus.

---

|Back to ...||AccuRev SCM |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](AccuRevSourceConfig/README.md)|[9.1100795](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/AccuRevSourceConfig/AccuRevSourceConfig-9.1100795.zip)|

## Actifio  [partner plugin]

This plugin allows process steps to be created that leverage the instant mount capabilities for databases that Actifio’s data management platform provides. Downloads

---

|Back to ...||Actifio |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](actifio/README.md)|[0]()|

## Amazon EC2

Amazon Elastic Compute Cloud (EC2) provides virtual compute resources to users for running their own applications and allows scalable deployments. This plug-in provides steps for launching instances, terminating instances, associating IP addresses, waiting for instances, creating a security group, and getting the public DNS for the Amazon EC2 tool. The Amazon [AWS SDK](http://aws.amazon.com/sdkforjava/) is required and must be downloaded from Amazon separately. The[DevOps Deploy Blueprint Designer](/product/deploy/blueprint-designer/) can interact with AWS in a more declarative manner, and should be considered as a possible alternative to this plugin.

---

|Back to ...||Amazon EC2 |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](AmazonEC2/README.md)|[6.1100863](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/AmazonEC2/AmazonEC2-6.1100863.zip)|

## Amazon Web Services (AWS) Lambda  [community plugin]

Amazon Web Services (AWS) Lambda provides on demand computing power for any application or service. Amazon manages the provisioning environments or servers. The AWS Lambda plugin enables you to create, delete, and invoke Lambda functions. The [AWS command line interface](https://aws.amazon.com/cli/) is required to run this plug-in and must be downloaded and installed separately. Source Code:

---

|Back to ...||Amazon Web Services (AWS) Lambda |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](aws-lambda/README.md)|[1.920392](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/aws-lambda/aws-lambda-1.920392.zip)|

## Ansible

The Ansible plugin enables seamless integration of Ansible environment into the DevOps Deploy deployment process, allowing you to execute various commands. It offers a wide range of modules, each of which can be used as discrete steps within your automation pipeline. For any missing commands, you can execute them through the AShell plugin step.

---

|Back to ...||Ansible |Latest Version|
| :---: | :---: | :---: |:------------:|
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ansible/README.md)|[55.1173239](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Ansible/ucd-plugins-ansible-55.1173239.zip)|

## Apache Ant

Apache Ant is a command line tool that is used to automate the build and deployment of applications. This plug-in calls the Ant executable to run one or more targets defined in a specified Ant script file, and is very useful for quickly integrating legacy automation into your DevOps Deploy Processes. IBM DevOps Deploy agents include a distribution of Ant, which is used by default, but other versions can be used by providing the path to the Ant installation directory in your Process Step.

---

|Back to ...||Apache Ant |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](Ant/README.md)|[10.1154069](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Ant/ucd-Ant-10.1154069.zip)|

## Apache HTTP Server

The Apache HTTP Server is an open-source HTTP server that can be used on UNIX and Microsoft Windows operating systems. The Apache HTTP Server was developed by the Apache Software Foundation. The Apache HTTP Server provides a secure, efficient and extensible server that provides HTTP services that are compatible with the current HTTP standards. With the steps that this plug-in provides IBM DevOps Deploy processes can start and stop the Apache web servers.

---

|Back to ...||Apache HTTP Server |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](Apache/README.md)|[4.1154066](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Apache/ucd-Apache-4.1154066.zip)|

## Apache Hadoop  [community plugin]

The Apache Hadoop software library is a framework that allows for the distributed processing of large data sets across clusters of computers using simple programming models. It is designed to scale up from single servers to thousands of machines, each offering local computation and storage. Rather than rely on hardware to deliver high-availability, the library itself is designed to detect and handle failures at the application layer, so delivering a highly-available service on top of a cluster of computers, each of which may be prone to failures. This plug-in enables you to run a Hadoop application on a NamedNode as part of an DevOps Deploy process.

---

|Back to ...||Apache Hadoop |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](apache-hadoop/README.md)|[0]()|

## Apache Tomcat

Apache Tomcat is an open source web server and servlet container that is developed by the Apache Software Foundation (ASF). Tomcat implements the Java Servlet and the JavaServer Pages (JSP) specifications from Oracle Corporation, and provides a pure Java HTTP web server environment for Java code to run.

---

|Back to ...||Apache Tomcat |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](Tomcat/README.md)|[8.1150600](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Tomcat/ucd-Tomcat-8.1150600.zip)|

## App Connect Enterprise

IBM App Connect Enterprise (ACE) combines the technologies of IBM Integration Bus with IBM App Connect Professional and cloud native technologies, creating a platform that supports the full breadth of integration needs across a modern digital enterprise. The ACE plug-in allows you to automate an integration bus environment.

---

|Back to ...||App Connect Enterprise |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ibm-ace/README.md)|[13.1174437](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/ibm-ace/ucd-plugins-ibm-ace-13.1174437.zip)|


## Apple Xcode  [community plugin]

Overview The Apple Xcode plug-in includes steps that manage the continuous delivery of Apple iOS applications by interacting with simulators and devices. These steps include tasks that are related to installing and removing the application on devices and simulators, and running tests as part of a DevOps solution. The plug-in also includes steps for creating and deleting simulators.

---

|Back to ...||Apple Xcode |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](apple-xcode/README.md)|[0]()|

## Apprenda  [partner plugin]

The Apprenda plugin for IBM DevOps Deploy enables deployment of applications to Apprenda private PaaS and binding of Bluemix applications and services for Hybrid Cloud deployments. The plugin can be obtained on the releases tab of the GitHub project.

---

|Back to ...||Apprenda |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](apprenda/README.md)|[0]()|

## ArgoCD

Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes. The Argo CD plug-in provides the ability to interact with Argo CD applications within IBM DevOps Deploy.

---

|Back to ...||ArgoCD |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](argocd/README.md)|[4.1167795](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/argocd/ucd-plugins-argocd-4.1167795.zip)|

## Artifactory

Artifactory provides repository management for various types of resources. The Artifactory plug-in integrates with the Artifactory repository to import Maven, Gradle, Ivy, and NuGet artifacts, add properties to files and folders, modify build status, and more.

---

|Back to ...||Artifactory |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](Artifactory/README.md)|[25.1167143](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Artifactory/ucd-Artifactory-25.1167143.zip)|

## Artifactory Source Config

The Artifactory source configuration plug-in includes steps to complete the following tasks:

---

|Back to ...||Artifactory Source Config |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ArtifactorySourceConfig/README.md)|[33.1167705](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/ArtifactorySourceConfig/ucd-ArtifactorySourceConfig-33.1167705.zip)|


## ASOC [community plugin]

The AppScan On Cloud plug-in includes steps to complete the following tasks:

---

|Back to ...||HCL-ASOC UCD PLugin for UCD |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ASOC/README.md)|[14.1152459](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/ASOC/ucd-HCL-ASoC-UCD-14.1152459.zip)|


## Aspera

Overview The Aspera plug-in uses the Aspera ascp (Aspera secure copy) client to upload and download files to and from an Aspera server. The Aspera ascp client uses the FASP transfer protocol, which can outperform TCP-based file transfer protocols such as FTP and HTTP. For more information about FASP transfer technology, see the [Aspera website](https://www.ibm.com/products/aspera).

---

|Back to ...||Aspera |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](aspera/README.md)|[3.1100729](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/aspera/aspera-3.1100729.zip)|

## Autosys

CA Workload Automation AutoSys Edition is a workload automation tool. Previous versions of the tool were released as Unicenter AutoSys Job Management.

---

|Back to ...||Autosys |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](Autosys/README.md)|[3.937202](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Autosys/Autosys-3.937202.zip)|

## Avnet Talos  [partner plugin]

Talos is a middleware configuration automation tool that integrates with a variety of cloud providers as well as IBM DevOps Deploy and is intended to automate configuration changes and application deployments across both commercial and open source middleware platforms and appliances eliminating the need to write custom scripts for each type of middleware. Talos includes:

---

|Back to ...||Avnet Talos |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](avnet-talos/README.md)|[0]()|

## Azure DevOps Sourceconfig

The Microsoft Azure DevOps source configuration plugin automates importing version artifacts from a Azure DevOps server.

---

|Back to ...||Azure DevOps Sourceconfig |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](AzureDevopsSourceconfig/README.md)|[1.1112501](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/AzureDevopsSourceconfig/plugins-sourceconfig-azure-1.1112501.zip)|

## BMC Remedy Action Request System

Create, update, and check entries in BMC Remedy Action Request System. The plug-in depends on the arapi.jar file that is installed with BMC Remedy Action Request System and the path to that file must be specified as a step property (the plug-in should be run on the same system BMC Remedy Action Request System is installed on).

---

|Back to ...||BMC Remedy Action Request System |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](Remedy/README.md)|[5.1056545](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Remedy/Remedy-5.1056545.zip)|

## Box  [community plugin]

Box is a file sharing and management cloud service. Using Box you can create, edit, review, and securely share documents and files on any device. This plug-in is developed and supported by the DevOps Deploy Community on the IBM® DevOps Services platform. Click **Visit Project** at the top of the page to navigate to the project for further information.

---

|Back to ...||Box |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](box/README.md)|[0]()|

## CA SCM (formerly Harvest)

The CA SCM plug-in enables you to import artifacts as component version This DevOps Deploy plug-in works with all current supported versions of CA Harvest SCM.

---

|Back to ...||CA SCM (formerly Harvest) |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](air-plugin-CASCM/README.md)|[3.860070](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/air-plugin-CASCM/air-plugin-CASCM-3.860070.zip)|

## CICS CM (Beta)

**Note:** This plug-in is a beta release. The functionality and compatibility are subject to change. This information is for planning purposes only. The information herein is subject to change or removal without notice before the products described may become available.

---

|Back to ...||CICS CM (Beta) |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](CICS-CM/README.md)|[0](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/CICS-CM/UCD_CM_Plugin.zip)|

## CICS TS

CICS® Transaction Server for z/OS provides scalable, general-purpose, transaction processing solutions for high-volume updates to shared data. Businesses have used CICS to differentiate themselves by creating, extending, and evolving their critical applications.

---

|Back to ...||CICS TS |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](CICS/README.md)|[45.20240620-1707](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/CICS/cics-45.20240620-1707.zip)|

## Chef

This plug-in provides steps that enable you to integrate existing automation for Chef into your IBM DevOps Deploy Processes. The plug-in ships with an embedded version of Chef Solo (11.16.4-1), which can be installed and used to execute a node or you can specify a different installation of Chef to use, but the plug-in step must execute on a system where Chef is accessible locally.

---

|Back to ...||Chef |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](Chef/README.md)|[3.1056568](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Chef/Chef-3.1056568.zip)|

## Citrix NetScaler

Citrix NetScaler is a platform that includes the following features: load balancing and content switching, data compression, content caching, SSL acceleration, network optimization, application visibility and application security. The NetScaler plug-in includes steps to enable and disable servers, server groups, and services on NetScaler servers.

---

|Back to ...||Citrix NetScaler |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](Netscaler/README.md)|[8.858051](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Netscaler/Netscaler-8.858051.zip)|

## Cloud Foundry [community plugin]

The Cloud Foundry plug-in uses the CloudFoundry command line utility to interact with applications in a target Cloud Foundry system.

---

|Back to ...||Cloud Foundry |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](cloud-foundry/README.md)|[35.1122072](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/cloud-foundry/cloud-foundry-35.1122072.zip)|

## Cloudant  [community plugin]

The Cloudant Plugin is an automation based plugin. It is used to manage documents stored in Cloudant. This plug-in is developed and supported by the DevOps Deploy Community on the IBM DevOps Services platform. Click the “Visit Project” button at the top of the page to navigate to the project for further information.

---

|Back to ...||Cloudant |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](cloudant/README.md)|[0]()|

## CyberArk  [partner plugin]

CyberArk Application Identity Manager, part of the CyberArk Privileged Account Security Solution, enables organizations to protect critical business systems by eliminating hard-coded credentials from application scripts, configuration files and software code, and removing SSH keys from servers where they are used by applications and scripts. Application Identity Manager offers agent and agentless deployment options to best meet the security and availability requirements of various business applications. The product is built on the CyberArk Shared Technology Platform, delivering scalability, high availability and centralized management and reporting.

---

|Back to ...||CyberArk |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](cyberark/README.md)|[4.1098501](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/cyberark/cyberark-4.1098501.zip)|

## DBmaestro [partner plugin]

![DBmaetro Logo](logo-300x74.png)DBmaestro TeamWork is the leading DevOps for Database solution that brings true continuous delivery – complete with the best practices proven effective for application development – to the database. DBmaestro TeamWork integration with IBM DevOps Deploy, can help your team to safely include the database component within the existing deployment processes of the application tiers from building (generating the upgrade SQL scripts) to verifying the environments are identical (no drifts) to deploying (executing the planned upgrade SQL scripts) while documenting the changes. Benefits:

---

|Back to ...||DBmaestro |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](dbmaestro/README.md)|[0]()|

## Datical DB  [partner plugin]

Datical DB automates and simplifies deployment and configuration of database schema updates for organizations that struggle with database schema change across the Application Release Lifecycle. Datical DB is used by people who develop, deploy, and maintain applications and/or have DevOps, Agile, Cloud or Big Data initiatives.

---

|Back to ...||Datical DB |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](datical-db/README.md)|[0]()|

## Dimensions

The Dimensions Source Config plug-in enables you to manually or automatically import artifacts from a Dimensions CM into an IBM DevOps Deploy Component version.

---

|Back to ...||Dimensions |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](DimensionsSourceConfig/README.md)|[10.1100948](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/DimensionsSourceConfig/DimensionsSourceConfig-10.1100948.zip)|

## Docker

Docker automates the deployment of applications inside Linux containers. This plug-in maps Docker images to components in IBM DevOps Deploy. The included component template provides a process for running Docker containers. This automation plug-in requires the Docker source configuration plug-in. The IBM-supported source config plug-in is available [here](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/DockerSourceConfig/ "Docker Source Config Plugin").

---

|Back to ...||Docker |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](docker-plugin/README.md)|[11.1154926](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/docker-plugin/ucd-docker-plugin-11.1154926.zip)|

## Docker Compose

The Docker Compose plug-in for IBM DevOps Deploy automates deployment and resource creation for services. Unsure where to begin? Visit [Getting Started with IBM DevOps Deploy and Containers](https://community.ibm.com/community/user/wasdevops/blogs/osman-burucu/2022/07/22/getting-started-with-devops-deploy-and-containe/).

---

|Back to ...||Docker Compose |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](docker-compose/README.md)|[24.1174442](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/docker-compose/docker-compose-24.1174442.zip)|

## Docker Registry

Use the Docker source configuration plug-in to manually or automatically create component versions from a Docker registry or the IBM Container Service. The plug-in works by detecting Docker registry image tags and creating associated component versions for the tag. Unsure where to begin? Visit [Getting Started with IBM DevOps Deploy and Containers](https://community.ibm.com/community/user/wasdevops/blogs/osman-burucu/2022/07/22/getting-started-with-devops-deploy-and-containe/).

---

|Back to ...||Docker Registry |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](DockerSourceConfig/README.md)|[44.1167750](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/DockerSourceConfig/ucd-DockerSourceConfig-44.1167750.zip)|

## F5 BIG-IP

This plug-in provides steps to interact with F5’s BIG-IP family of products. The plug-in communicates with the BIG-IP systems by using the iControl API.

---

|Back to ...||F5 BIG-IP |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](F5/README.md)|[24.1107123](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/F5/F5-24.1107123.zip)|

## File System

The File System source config plug-in enables one to manually import artifacts from the file system into a folder. The artifacts are not stored into version folder, using this plug-in you must manually create versions. To import artifacts into version folders, use the [File System (Versioned)](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/FileSystemVersionedSourceConfig/) plug-in. Compatibility

---

|Back to ...||File System |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](FileSystemSourceConfig/README.md)|[13.1155763](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/FileSystemSourceConfig/ucd-FileSystemSourceConfig-13.1155763.zip)|

## File System (Versioned)

The File System (Versioned) source config plug-in imports source artifacts with versions from a file system. You can manually or automatically import artifacts from the file system into a directory structure that represents the artifact versions. Compatibility

---

|Back to ...||File System (Versioned) |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](FileSystemVersionedSourceConfig/README.md)|[19.1155762](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/FileSystemVersionedSourceConfig/ucd-FileSystemVersionedSourceConfig-19.1155762.zip)|

## File Utils

The File Utils plug-in provides useful steps for manipulating files and directories.

---

|Back to ...||File Utils |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](FileUtils/README.md)| [100.1175039](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/FileUtils/ucd-FileUtils-100.1175039.zip)|

## FileNet - IBM Case Manager

IBM Case Manager simplifies the job of designing and building a case management system and provides a graphical user interface for case workers to easily manage cases. IBM Case Manager is deployed in an application server, and uses FileNet P8 to access and store content and solution assets. The IBM Case Manager plug-in for DevOps deploy utilizes the configmgr\_cl command-line interface to automate the tasks normally completed via the configmgr UI.All of the steps were tested with IBM Case Manager version 5.3.1. In order for all commands to function properly, version 5.2.1 or later is required.

---

|Back to ...||FileNet - IBM Case Manager |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](FileNet-CaseManager/README.md)|[1.1100878](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/FileNet-CaseManager/FileNet-CaseManager-1.1100878.zip)|

## Git

The Git source config plug-in enables you to manually or automatically import artifacts from a Git source-code management (SCM) repository into an IBM DevOps Deploy Component version. This plug-in interacts with Git by using the git command line interface, which must be available locally.

---

|Back to ...||Git |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](GitSourceConfig/README.md)|[28.1164116](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/GitSourceConfig/ucd-GitSourceConfig-28.1164116.zip)|

## Git Install  [community plugin]

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. Leverage this plugin to install Git on a target server.

---

|Back to ...||Git Install |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](git-install/README.md)|[0]()|

## GitLab-Generic-Packages  

Gitlab Generic Packages automation plufgin.
Initial release of this plugin.

---

|Back to ...||Gitlab Generic Packages |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](gitlab-generic-packages/README.md)|[1.1155527](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/gitlab-generic-packages/ucd-plugins-gitlab-generic-packages-1.1155527.zip)|

## GitLab-Sourceconfig-Generic-Packages  

Gitlab Generic Packages
Initial release of this plugin.

---

|Back to ...||Gitlab Generic Packages |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](gitlab-sourceconfig-generic-packages/README.md)|[3.1158910](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/gitlab-sourceconfig-generic-packages/ucd-plugins-sourceconfig-gitlab-generic-packages-3.1158910.zip)|


## GitHub-Release

The GitHub Release plug-in is a source configuration plug-in that creates a component version on the DevOps Deploy server for a specified GitHub repository release being imported. The plug-in can be used to import ZIP and TAR artifacts from GitHub.

---

|Back to ...||GitHub-Release |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](sourceconfig-github-release/README.md)|[5.1154619](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/sourceconfig-github-release/ucd-GitHubReleaseSourceConfig-5.1154619.zip)|

## Google Android SDK

View a demo of this plug-in [here](https://www.youtube.com/watch?v=Qrw8hz8Jv9c) The Android SDK plug-in includes steps to achieve continuous delivery of Android applications by interacting with emulators and physical devices. Refer to the PDF documentation for details on software requirements and usage. The plug-in includes process steps that are related to the following categories:

---

|Back to ...||Google Android SDK |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](plugin-air-Android/README.md)|[3.1107122](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/plugin-air-Android/plugin-air-Android-3.1107122.zip)|


## Groovy

Groovy is an object-oriented programming language for the Java platform and the language of choice for writing IBM DevOps Deploy plug-ins. The DevOps Deploy agent comes with a version of Groovy that is preinstalled, which can be used to run your script or you can specify a different installation to use. Platform Support

---

|Back to ...||Groovy |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](Groovy/README.md)|[15.1151773](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Groovy/ucd-Groovy-15.1151773.zip)|

## HCL DevOps Test Hub

HCL DevOps Test Hub (Test Hub) brings together test data, test environments, and test runs and reports into a single, web-based browser for testers and non-testers. This plug-in integrate Test Hub with DevOps Deploy to automate the process of test runs.

---

|Back to ...||HCL DevOps Test Hub |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](HCLDevOpsTestHub/README.md)|[4.2](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/HCLDevOpsTestHub/DTHub-DD-HCL-4.2.zip)|

## HCL DevOps Test Performance

HCL DevOps Test Performance is a performance testing solution that validates the scalability of web and server applications. Test Performance identifies the presence and cause of system performance bottlenecks and reduces load testing complexity. The HCL DevOps Test Performance plug-in for DevOps Deploy provides a step to run performance tests on the same system in which Test Performance is installed.

---

|Back to ...||HCL DevOps Test Performance |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](HCLDevOpsTestPerf/README.md)|[10.2](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/HCLDevOpsTestPerf/DTPerf-DD-HCL-10.2.zip)|

## HCL DevOps Test UI

HCL DevOps Test UI (Test UI) is an automated functional testing and regression testing tool. This software provides automated testing capabilities for functional, regression, GUI, and data-driven testing. You can use the Functional Test perspective to test the Java, SAP, and other HTML applications.
The IBM DevOps Deploy plug-in for Test UI includes process steps for running the Functional test scripts on DevOps Deploy agent computers remotely.

---

|Back to ...||HCL DevOps Test UI |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](HCLDevOpsTestUI/README.md)|[7.2](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/HCLDevOpsTestUI/DTUI-FunctionalTest-DD-HCL-7.2.zip)|

## HCL DevOps Test UI-WebUI

HCL DevOps Test UI is an automated functional testing and regression testing tool. This software provides automated testing capabilities for functional, regression, GUI, and data-driven testing. You can use the Functional Test perspective to test the Java, SAP, and other HTML applications.
The IBM DevOps Deploy plug-in for HCL DevOps Test UI - WebUI includes process steps for running the Web UI tests on DevOps Deploy agent computers remotely.

---

|Back to ...||HCL DevOps Test UI-WebUI |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](HCLDevOpsTestUIWebUI/README.md)|[12.2](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/HCLDevOpsTestUIWebUI/DTUI-UITest-DD-HCL-12.2.zip)|

## HCL DevOps Test Virtualization

HCL DevOps Test Virtualization is a software that is used for creating, maintaining, publishing, and running message-based stubs and database stubs.
You can use this plug-in to integrate DevOps Test Vitualization server with DevOps Deploy to execute virtual services from the DevOps Deploy server.

---

|Back to ...||HCL DevOps Test Virtualization |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](HCLDevOpsTestVirtualization/README.md)|[5.2](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/HCLDevOpsTestVirtualization/DTVirtualization-DD-HCL-5.2.zip)|

## HCL OneTest API

The HCL OneTest API plug-in for DevOps Deploy provides a step to run integration tests on the same system in which HCL OneTest API is installed.

---

|Back to ...||HCL OneTest API |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](HCLOneTestAPI/README.md)|[5.0](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/HCLOneTestAPI/HOT-API-UCD-5.0.zip)|

## HCL OneTest Performance

The HCL OneTest Performance plug-in for DevOps Deploy provides a step to run performance tests on the same system in which HCL OneTest Performance is installed.

---

|Back to ...||HCL OneTest Performance |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](HCLOneTestPerf/README.md)|[9.3](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/HCLOneTestPerf/HOT-PERF-UCD-9.3.zip)|

## HCL OneTest Server

The HCL OneTest Server plug-in for DevOps Deploy provides a step to Run HCL OneTest Server test.

---

|Back to ...||HCL OneTest Server |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](onetest-server/README.md)|[3.3](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/HCLOneTestServer/OTS-UCD-3.3.zip)|

## HCL OneTest UI

The HCL OneTest UI plug-in for DevOps Deploy provides a step to run functional tests on the same system in which HCL OneTest UI is installed.

---

|Back to ...||HCL OneTest UI |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](HCLOneTestUI/README.md)|[6.1](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/HCLOneTestUI/HOT-UI-UCD-FunctionalTest-6.1.zip)|

## HCL OneTest Virtualization

The HCL OneTest Virtualization plug-in for DevOps Deploy provides a step to Run HCL OneTest virtualization.

---

|Back to ...||HCL OneTest Virtualization |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](HCLOneTestVirtualization/README.md)|[4.0](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/HCLOneTestVirtualization/HOT-Virtualization-UCD-4.0.zip)|

## HCL OneTest WebUI

The HCL OneTest WebUI plug-in for DevOps Deploy provides a step to run functional tests on the same system in which HCL OneTest WebUI is installed.

---

|Back to ...||HCL OneTest WebUI |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](HCLOneTestWebUI/README.md)|[11.1](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/HCLOneTestWebUI/HOT-UI-UCD-UITest-11.1.zip)|

## HP LoadRunner

The HP LoadRunner plugin provides steps to integrate with HP LoadRunner. Using this plugin you can run test scenarios, analyze the results, and generate a reports.

---

|Back to ...||HP LoadRunner |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](hp-loadrunner/README.md)|[1.1004896](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/hp-loadrunner/plugins-hp-loadrunner-1.1004896.zip)|

## HP Unified Functional Testing (QTP)

HP QuickTest Professional provides functional and regression test automation for software applications and environments, and can be used for enterprise quality assurance. The QTP plugin executes QTP tests and can set a status of fail on a deployment if a test fails.

---

|Back to ...||HP Unified Functional Testing (QTP) |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](QTP/README.md)|[7.1154086](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/QTP/ucd-QTP-7.1154086.zip)|

## IBM API Connect

IBM API Connection is an application programming interface (API) management platform that uses Loopback to create, assemble, and manage web APIs. The IBM API Connection plug-in provides steps to publish API Definitions and Loopback Apps to an API Connect server. This plug-in communicates to API Connect through the use of the API command-line toolkit(apic).

---

|Back to ...||IBM API Connect |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](apiconnect/README.md)|[8.1171240](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/apiconnect/ucd-apiconnect-8.1171240.zip)|

## IBM AppScan Enterprise

IBM AppScan Enterprise enables organizations to mitigate application security risk and achieve regulatory compliance. This plug-in includes steps to run AppScan Enterprise scans and retrieve scan results in IBM DevOps Deploy processes.

---

|Back to ...||IBM AppScan Enterprise |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](appscan/README.md)|[27.1174441](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/appscan/ucd-appscan-27.1174441.zip)|

## IBM BigFix

IBM BigFix helps reduce the time, cost and risk of managing virtually any mix of endpoints leveraging out-of-the-box automation scripts. It streamlines asset discovery, software distribution, and power management. It also provides the critical capability to manage and secure servers–whether they’re physical, virtual or remotely located. Use the IBM BigFix plug-in to start BigFix actions from IBM DevOps Deploy processes.

---

|Back to ...||IBM BigFix |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](bigfix/README.md)|[2.1174440](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/bigfix/bigfix-2.1174440.zip)|

## IBM Bluemix Auto-Scaling

This plug-in provides steps to interact with the Auto-Scaling for Bluemix service by using the REST API. Currently the plug-in supports attaching an Auto-Scaling policy to a Bluemix application with authorization support from the IBM Containers plug-in.

---

|Back to ...||IBM Bluemix Auto-Scaling |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](bluemix-autoscale/README.md)|[2.1174433](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/bluemix-autoscale/bluemix-autoscale-2.1174433.zip)|

## IBM Business Process Manager (WebSphere BPM)

IBM Business Process Manager is a comprehensive business process management platform, providing full visibility and insight to managing business processes. It provides tooling and a runtime environment for process design, execution, monitoring and optimization, along with basic system integration support. The product can be configured to support various levels of complexity and involvement with business process management.

---

|Back to ...||IBM Business Process Manager (WebSphere BPM) |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](WebSphereBPMSourceConfig/README.md)|[8.1056527](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WebSphereBPMSourceConfig/WebSphereBPMSourceConfig-8.1056527.zip)|

## IBM Business Process Manager (WebSphere BPM) for IBM DevOps Deploy

IBM Business Process Manager is a comprehensive business process management platform, providing full visibility and insight to managing business processes. It provides tooling and a runtime environment for process design, execution, monitoring and optimization, along with basic system integration support. The product can be configured to support various levels of complexity and involvement with business process management. Plugin to deploy process application snapshots on an online or offline Process Server. Refer to the Documentation Usage page for walkthroughs.

---

|Back to ...||IBM Business Process Manager (WebSphere BPM) for IBM DevOps Deploy |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](WebSphereBPM/README.md)|[13.1100894](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WebSphereBPM/WebSphereBPM-13.1100894.zip)|

## IBM Cognos

The IBM Cognos plug-in exports and imports content to and from a Cognos content store. This plug-in is based on the Cognos 10.2 SDK.

---

|Back to ...||IBM Cognos |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](Cognos/README.md)|[12.1175694](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Cognos/ucd-Cognos-12.1175694.zip)|

## IBM Cognos Analytics

The Cognos Analytics plug-in provides integration with a Cognos Analytics server to automate importing and exporting Cognos store content. This plug-in supports Cognos Analytics 11.1.

---

|Back to ...||IBM Cognos Analytics |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](cognos-analytics/README.md)|[1.1107117](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/cognos-analytics/Cognos-Analytics-1.1107117.zip)|

## IBM Containers

The IBM Containers plug-in uses the Cloud Foundry IBM® Containers command-line utility (cf ic) to interact with containers running in IBM Bluemix®.

---

|Back to ...||IBM Containers |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](cloud-foundry-ibm-containers/README.md)|[6.1103420](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/cloud-foundry-ibm-containers/cloud-foundry-containers-6.1103420.zip)|

## IBM DataPower Configuration Manager

The IBM DevOps Deploy plugin for DataPower Configuration Manager provides the ability to automate updates to DataPower configuration as part of the software delivery process. Configuration information is stored in DataPower export files, which contain the “golden” version of services or objects, along with simple XML files that define the changes necessary for each service in each environment. These XML files can be created or modified using an XML editor. The plugin also allows easy upload of files, including keys and certificates, as well as easy customization of validation credential objects and load balancer groups, among others. The component-level and application-level processes provided by Deploy fit naturally into the requirements for DataPower configuration management:

---

|Back to ...||IBM DataPower Configuration Manager |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](datapower/README.md)|[datapower-v27](https://github.com/ibm-datapower/datapower-configuration-manager/releases/download/Datapower27/datapower-v27.zip)|

## IBM Db2 for z/OS Package

This package includes a white paper and an importable sample template that describes a process to deploy applications that use Db2 for z/OS. The deployment process covers the tasks for the following activities:

---

|Back to ...||IBM Db2 for z/OS Package |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ibm-db2-for-z-os-package/README.md)|[0]()|

## IBM DevOps Test Hub

IBM DevOps Test Hub (Test Hub) brings together test data, test environments, and test runs and reports into a single, web-based browser for testers and non-testers. This plug-in integrate Test Hub with DevOps Deploy to automate the process of test runs.

---

|Back to ...||IBM DevOps Test Hub |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](IBMDevOpsTestHub/README.md)|[4.2](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/IBMDevOpsTestHub/DTHub-DD-IBM-4.2.zip)|

## IBM DevOps Test Performance

IBM DevOps Test Performance is a performance testing solution that validates the scalability of web and server applications. Test Performance identifies the presence and cause of system performance bottlenecks and reduces load testing complexity. The IBM DevOps Test Performance plug-in for DevOps Deploy provides a step to run performance tests on the same system in which Test Performance is installed.

---

|Back to ...||IBM DevOps Test Performance |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](IBMDevOpsTestPerf/README.md)|[10.2](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/IBMDevOpsTestPerf/DTPerf-DD-IBM-10.2.zip)|

## IBM DevOps Test UI

IBM DevOps Test UI (Test UI) is an automated functional testing and regression testing tool. This software provides automated testing capabilities for functional, regression, GUI, and data-driven testing. You can use the Functional Test perspective to test the Java, SAP, and other HTML applications.
The IBM DevOps Deploy plug-in for Test UI includes process steps for running the Functional test scripts on DevOps Deploy agent computers remotely.

---

|Back to ...||IBM DevOps Test UI |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](IBMDevOpsTestUI/README.md)|[7.2](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/IBMDevOpsTestUI/DTUI-FunctionalTest-DD-IBM-7.2.zip)|

## IBM DevOps Test UI-WebUI

IBM DevOps Test UI is an automated functional testing and regression testing tool. This software provides automated testing capabilities for functional, regression, GUI, and data-driven testing. You can use the Functional Test perspective to test the Java, SAP, and other HTML applications.
The IBM DevOps Deploy plug-in for IBM DevOps Test UI - WebUI includes process steps for running the Web UI tests on DevOps Deploy agent computers remotely.

---

|Back to ...||IBM DevOps Test UI-WebUI |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](IBMDevOpsTestUIWebUI/README.md)|[12.2](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/IBMDevOpsTestUIWebUI/DTUI-UITest-DD-IBM-12.2.zip)|

## IBM DevOps Test Virtualization

IBM DevOps Test Virtualization is a software that is used for creating, maintaining, publishing, and running message-based stubs and database stubs.
You can use this plug-in to integrate DevOps Test Vitualization server with DevOps Deploy to execute virtual services from the DevOps Deploy server.

---

|Back to ...||IBM DevOps Test Virtualization |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](IBMDevOpsTestVirtualization/README.md)|[5.2](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/IBMDevOpsTestVirtualization/DTVirtualization-DD-IBM-5.2.zip)|

## IBM Globalization Pipeline  [community plugin]

IBM Globalization Pipeline is an IBM Bluemix service that provides rapid machine translation for application developers. IBM Globalization Pipeline plugin for DevOps Deploy is a component for you to integrate IBM Globalization Pipeline into your build and deploy process. It takes English resource files as input, and provides real time machine translation for the following languages: Simplified Chinese, Traditional Chinese, French, German, Italian, Japanese, Korean, Portuguese, Spanish, and Arabic. It allows application developers to leverage the machine translation output by invoking the restful API or downloading the translation.

---

|Back to ...||IBM Globalization Pipeline |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ibm-globalization-pipeline/README.md)|[0]()|

## IBM IMS

IBM Information Management System (IMS), built on IBM System z, is the lowest cost transaction and hierarchical database management system for mission critical OLTP. This plug-in facilitates the simplification of IMS-related operations and automation of IMS application deployment, ultimately allowing you to take advantage of the design process, versioning, and approvals support in IBM DevOps Deploy for continuous delivery in an agile environment.

---

|Back to ...||IBM IMS |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](IMSz/README.md)|[1](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/IMSz/IMS_Plugin_v1.zip)|

## IBM InfoSphere DataStage

IBM InfoSphere DataStage integrates data across multiple systems using a high performance parallel framework, and it supports extended metadata management and enterprise connectivity. The scalable platform provides more flexible integration of all types of data, including big data at rest (Hadoop-based) or in motion (stream-based), on distributed and mainframe platforms. This InfoSphere DataStage plugin allows for the import and export of .isx and .dsx files.

---

|Back to ...||IBM InfoSphere DataStage |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](datastage/README.md)|[10.1164467](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/datastage/ucd-datastage-10.1164467.zip)|

## IBM InfoSphere Optim

IBM InfoSphere Optim Test Data Management allows users to extract and mask test data from production to safely test their code. This plugin runs test data management commands through InfoSphere Optim.

---

|Back to ...||IBM InfoSphere Optim |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](optim/README.md)|[3.868971](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/optim/optim-3.868971.zip)|

## IBM Installation Manager

IBM Installation Manager is a tool that you can use to install and maintain IBM software packages. Wizards guide you through the steps to install, modify, update, roll back, or uninstall IBM products. Use Installation Manager to install individual software packages on your local computer, or in conjunction with the IBM Packaging Utility to install software for an enterprise scenario. See the [IBM Installation Manager product help](http://www.ibm.com/support/knowledgecenter/SSDV2W/) to review feature details for all versions of Installation Manager and Packaging Utility.

---

|Back to ...||IBM Installation Manager |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ibm-installation-manager/README.md)|[0]()|

## IBM Instana 

Instana is an automated Application Performance Management (APM) solution designed specifically for the challenges of managing microservice and cloud-native applications.

---

|Back to ...||IBM Instana  |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ibm-instana/README.md)|[2.1158245](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/ibm-instana/ucd-Instana-2.1158245.zip)|


## IBM Integration Bus (IIB) plugin Deploy step for zOS

IBM Integration Bus, from the WebSphere product family, enables business information to flow between disparate applications across multiple hardware and software platforms. The plug-in includes only deploy step from original [IBM Integration plugin](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/WebSphereMessageBroker-CMP/) optimized to improve CPU time.

---

|Back to ...||IBM Integration Bus (IIB) plugin Deploy step for zOS |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](zos-ibm-integration-bus-ucd/README.md)|[1.1162414](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/zos-ibm-integration-bus-ucd/ucd-zOS-WebSphereMessageBroker-CMP-1.1162414.zip)|

## IBM Integration Bus (formerly WebSphere Message Broker) - CMP

IBM Integration Bus, from the WebSphere product family, enables business information to flow between disparate applications across multiple hardware and software platforms. The plug-in includes steps that can be used when designing a component process to deploy broker archives and to start, stop or delete message flows by using the IBM Integration API. For information on usage, including a sample of how to install IBM Integration Bus using IBM DevOps Deploy, see [How to automate IBM Integration Bus installation and deployments using IBM DevOps Deploy and Chef](https://www.urbancode.com/resource/how-to-automate-ibm-integration-bus-installation-and-deployments-using-ibm-devops-deploy-and-chef/). This plugin supports versions 9 & 10 of IBM Integration Bus (IIB). We no longer support WebSphere Message Broker (Versions 7 & 8). If you are looking for support for WebSphere Message Broker, please download a version of this plugin that is less than version 40.

---

|Back to ...||IBM Integration Bus (formerly WebSphere Message Broker) - CMP |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](WebSphereMessageBroker-CMP/README.md)|[47.1156618](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WebSphereMessageBroker-CMP/WebSphereMessageBroker-CMP-47.1156618.zip)|

## IBM MQ for z/OS - Generate MQSC Commands \[community plugin\]

IBM MQ for z/OS – Generate MQSC Commands

---

|        Back to ...         || IBM MQ for z/OS - Generate MQSC Commands |                       Latest Version                       |
|:--------------------------:|:----------------------------------------:|:----------------------------------------------------------:| :---: |
| [All Plugins](../index.md) |             [Top](#contents)             | [Readme](ibm-mq-for-z-os-generate-mqsc-commands/README.md) |[0]()|

## IBM MaaS360  [community plugin]

This plug-in provides access to utilities that are related to integrating with IBM MaaS360 via web services. For example, you can use this plug-in to request an authentication token. This plug-in is developed and supported by the DevOps Deploy Community on the IBM® DevOps Services platform. Click **Visit Project** at the top of the page to navigate to the project for further information.

---

|Back to ...||IBM MaaS360 |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ibm-maas360/README.md)|[0]()|

## IBM Maximo

The Maximo plugin allows the user to upload and deploy configuration using migration manager.

---

|Back to ...||IBM Maximo |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ibm-maximo/README.md)|[1.1088514](https://github.com/UrbanCode/IBM-UCD-PLUGINS/raw/main/files/maximo/plugins-maximo-1.1088514.zip)|

## IBM MobileFirst Platform (formerly Worklight)

The IBM MobileFirst Platform plug-in provides functionality for deploying artifacts to an IBM MobileFirst Platform Server. Provides support for deploying mobile application artifacts to an IBM MobileFirst Platform Server. You can use IBM DevOps Deploy to define a DevOps deployment solution for IBM MobileFirst mobile artifacts. By defining a deployment using IBM DevOps Deploy with the IBM MobileFirst Platform plugin, mobile teams can respond to feedback faster and have a repeatable process with reduced risk. Check out how to go from manual to continuous automated deployment of mobile MobileFirst Platform applications in this [article](http://www.ibm.com/developerworks/rational/library/worklight-mobile-devops/index.html).

---

|Back to ...||IBM MobileFirst Platform (formerly Worklight) |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](air-worklight/README.md)|[13.1174444](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/air-worklight/ucd-ibm-mobilefirst-13.1174444.zip)|

## IBM MobileFirst Platform Foundation on IBM Containers

The IBM MobileFirst Platform Foundation on IBM Containers plug-in includes steps to create database dependencies, build containers, run containers, and deploy artifacts to an IBM MobileFirst Server that is running in a container. You can use IBM DevOps Deploy to define a DevOps deployment solution for your MobileFirst Platform Foundation artifacts. Using this type of solution, mobile teams can typically respond to feedback faster and have a repeatable process with reduced risk.

---

|Back to ...||IBM MobileFirst Platform Foundation on IBM Containers |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](MFPFC/README.md)|[1.0](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/MFPFC/MobileFirstContainerAutomate-1.0.zip)|

## IBM Operational Decision Manager (ODM)

Overview IBM® Operational Decision Manager (ODM) is a full-featured, easy-to-use platform for capturing, automating, and governing frequent, repeatable business decisions. It consists of two components, IBM Decision Center and IBM Decision Server. They form the platform for managing and executing business rules and business events to help you make decisions faster, improve responsiveness, minimize risks, and seize opportunities.

---

|Back to ...||IBM Operational Decision Manager (ODM) |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ibm-odm/README.md)|[15.1174432](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/ibm-odm/ucd-ibm-odm-15.1174432.zip)|

## IBM Operational Decision Manager (ODM) Source Config

The IBM Operational Decision Manager (ODM) source configuration plug-in includes steps to complete the following tasks:

---

|Back to ...||IBM Operational Decision Manager (ODM) Source Config |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ibm-odm-source-config/README.md)|[14.1149407](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/ibm-odm-source-config/ucd-ibm-odm-source-config-14.1149407.zip)|

## IBM Rational Asset Manager

This plug-in provides steps that enable you to work with Rational Asset Manager assets in your IBM DevOps Deploy Processes.

---

|Back to ...||IBM Rational Asset Manager |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](RAM/README.md)|[0](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/RAM/com.ibm.udeploy.plugin.ram.zip)|

## IBM Rational Asset Manager for IBM DevOps Deploy

IBM Rational Asset Manager (RAM) is a collaborative software development asset management tool used to identify, manage and govern the design, development and consumption of software assets. The IBM Rational Asset Manager plug-in automates importing artifacts from Rational Asset Manager projects.

---

|Back to ...||IBM Rational Asset Manager for IBM DevOps Deploy |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](RAMSourceConfig/README.md)|[14.1153919](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/RAMSourceConfig/ucd-RAMSourceConfig-14.1153919.zip)|

## IBM Rational Automation Framework for WebSphere  [community plugin]

IBM Rational Automation Framework for WebSphere provides capabilities to accomplish the complex tasks involved in managing your WebSphere environment. The product is designed specifically to automate installation and patching, configuration change management, and application deployment. It supports WebSphere Application Server, IBM HTTP Server, and WebSphere Portal products as target systems. This plugin exposes steps to call a Rational Automation Framework action or automation plan.

---

|Back to ...||IBM Rational Automation Framework for WebSphere |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ibm-rational-automation-framework-for-websphere/README.md)|[0]()|

## IBM Rational ClearCase

The IBM Rational Clearcase plug-in enables you to manually or automatically import artifacts from a ClearCase respository into an IBM DevOps Deploy Component version, using either Dynamic or Snapshot Views. The plug-in supports both Base ClearCase and Unified Change Management (UCM) source-code management system.

---

|Back to ...||IBM Rational ClearCase |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ClearCaseSourceConfig/README.md)|[16.1154103](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/ClearCaseSourceConfig/ucd-ClearCaseSourceConfig-16.1154103.zip)|

## IBM Rational ClearQuest  [community plugin]

IBM Rational ClearQuest is a fully customizable database workflow application development and production system. It provides flexible change and defect tracking, customizable processes, near real-time reporting and lifecycle traceability for better visibility and control of the software development lifecycle. IBM Rational ClearQuest provides scalable, multiplatform support to any size organization so you can continue to customize processes as your development needs evolve. The IBM Rational ClearQuest plug-in contains a simple step to add Related Change Requests to records.

---

|Back to ...||IBM Rational ClearQuest |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ibm-rational-clearquest/README.md)|[0]()|

## IBM Rational Functional Tester (RFT)

IBM Rational Functional Tester is an automated functional testing and regression testing tool. This software provides automated testing capabilities for functional, regression, GUI, and data-driven testing. With the Web UI Test perspective, you can test the modern Web UI applications that use HTML5, Dojo, and jQuery frameworks. You can use the Functional Test perspective to test the Java, SAP, and other HTML applications.

---

|Back to ...||IBM Rational Functional Tester (RFT) |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](RFT-UCD/README.md)|[6.1](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/RFT-UCD/RFT-UCD-FunctionalTest-6.1.zip)|

## IBM Rational Integration Tester (RIT)

The Green Hat plug-in for IBM DevOps Deploy that was shipped earlier has been split into the following two parts in the current release:

---

|Back to ...||IBM Rational Integration Tester (RIT) |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](RIT-UCD/README.md)|[5.0](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/RIT-UCD/RIT-UCD-5.0.zip)|

## IBM Rational Performance Tester (RPT)

IBM® Rational® Performance Tester is a performance testing solution that validates the scalability of web and server applications. Rational Performance Tester identifies the presence and cause of system performance bottlenecks and reduces load testing complexity. With the IBM Rational Test Workbench – Performance Tester plugin for DevOps Deploy, you can automate the execution of tests, compound tests, and schedules.

---

|Back to ...||IBM Rational Performance Tester (RPT) |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](RPT-UCD/README.md)|[9.3](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/RPT-UCD/RPT-UCD-9.3.zip)|

## IBM Rational Quality Manager (RQM)

The Rational Quality Manager plugin invokes Rational Quality Manager test suites or test cases to run automatic test scripts.

---

|Back to ...||IBM Rational Quality Manager (RQM) |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ibm-rational-quality-manager-rqm/README.md)|[11.1101668](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/RationalQualityManager/RQM-11.1101668.zip)|

## IBM Rational Team Concert - Build

No source configuration plug-in is required to use Rational Team Concert builds in IBM DevOps Deploy.  View a demo of this capability [here](https://youtu.be/1WSpLKsekr0). Read about a full deployment architecture and process using WAS, BPM, and RTC [here](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/07/20/bpserver).

---

|Back to ...||IBM Rational Team Concert - Build |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ibm-rational-team-concert-build/README.md)|[0]()|

## IBM Rational Team Concert - SCM

The Rational Team Concert SCM source configuration extracts files from the Rational Team Concert SCM into an DevOps Deploy component version. The source files can be pulled from a snapshot or live stream. For supported platforms, and additional information, refer to the plug-in documentation link on the right.

---

|Back to ...||IBM Rational Team Concert - SCM |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](air-plugin-RTC-scm/README.md)|[8.1101694](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/air-plugin-RTC-scm/air-plugin-RTC-scm-8.1101694.zip)|

## IBM Rational Team Concert Work Items

The RTC Work Items plugin provides steps for the build to comment and change the status of work items found in RTC.

---

|Back to ...||IBM Rational Team Concert Work Items |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](plugin-air-RTC-WorkItems/README.md)|[15.1142216](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/plugin-air-RTC-WorkItems/ucd-plugin-air-RTC-WorkItems-15.1142216.zip)|

## IBM Rational Test Automation Server (RTAS)

The Rational Test Automation Server plug-in provides for integration with an Rational Test Automation Server server to automate tests within a deployment process using DevOps Deploy.

---

|Back to ...||IBM Rational Test Automation Server (RTAS) |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](RTAS-UCD/README.md)|[3.3](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/RTAS-UCD/RTAS-UCD-3.3.zip)|

## IBM Rational Test Virtualization Server (RTVS)

The Green Hat plug-in for DevOps Deploy that was shipped earlier has been split into the following two parts in the current release:

---

|Back to ...||IBM Rational Test Virtualization Server (RTVS) |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](RTVS-UCD/README.md)|[4.0](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/RTVS-UCD/RTVS-UCD-4.0.zip)|

## IBM Rational Test Workbench Web UI Tester

IBM® Rational® Test Workbench provides a comprehensive test automation solution for functional testing, regression testing, integration technologies and performance and scalability testing. It helps you build intelligent and interconnected enterprise applications that can be deployed on traditional and cloud infrastructures.  With the IBM Rational Test Workbench Web UI Tester plugin for DevOps Deploy, you can automate the execution of functional tests and compound tests. This plugin cannot be used with the Rational Test Workbench Web UI Tester Starter Edition.

---

|Back to ...||IBM Rational Test Workbench Web UI Tester |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](RFT-WebUI-UCD/README.md)|[11.1](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/RFT-WebUI-UCD/RFT-UCD-UITest-11.1.zip)|

## IBM Security Access Manager (WebSEAL)  [community plugin]

IBM Security Access Manager enables businesses to more securely adopt web, mobile, and cloud technologies and simplifies user access management for employees and consumers. It simplifies and secures user experiences with single sign-on across applications and protects critical assets using strong multi-factor authentication and risk-based access. It also enables the mobile enterprise with mobile access control policies that integrate with mobile device management, mobile application development and malware detection solutions. Furthermore, it helps bridge the access control gap between on-premise and cloud environments. This community supported plug-in will update a Reverse Proxy’s configuration entry.

---

|Back to ...||IBM Security Access Manager (WebSEAL) |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](webseal/README.md)|[1.769633](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/webseal/webseal-1.769633.zip)|

## IBM Sterling B2B Integrator  [community plugin]

IBM Sterling B2B Integrator integrates critical B2B processes, transactions, and relationships. This plug-in includes steps to manage and automate the functionality and configuration of an IBM Sterling B2B Integrator server.

---

|Back to ...||IBM Sterling B2B Integrator |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ibm-sterling-b2b-integrator/README.md)|[0]()|

## IBM DevOps Build

Get artifacts from IBM DevOps Build.

---

|Back to ...||IBM DevOps Build |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](uBuildSourceConfig/README.md)|[12.1131550](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/uBuildSourceConfig/ucd-uBuildSourceConfig-12.1131550.zip)|

## IBM DevOps DBUpgrader

The DBUpgrader plug-in helps to manage database changes including schema updates and rollbacks. The plug-in uses a proprietary formatted XML file in conjunction with a version table in your database that tracks what changes have been applied. This plug-in is used when performing upgrades of IBM DevOps Deploy Applications.

---

|Back to ...||IBM DevOps DBUpgrader |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](DBUpgrader/README.md)|[5.1151802](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/DBUpgrader/ucd-DBUpgrader-5.1151802.zip)|

## IBM DevOps Deploy Agent Package for Dynamic Cloud Environments

The Install IBM® DevOps Deploy Agent package automatically installs agents on cloud resources. When you provision an environment from the cloud system, this script package installs an agent on each node in the cloud resource request. Then, these agents contact the IBM DevOps Deploy server and the server adds them to the environment.

---

|Back to ...||IBM DevOps Deploy Agent Package for Dynamic Cloud Environments |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](AgentScript/README.md)|[6.2.0.2](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/AgentScript/ibm-ucd-agent-script-package-6.2.0.2.zip)|

## IBM DevOps Deploy Applications

IBM DevOps Deploy is an *Application Deployment Automation* tool that provides facilities for modeling your applications, including its components, run-time environments and automated processes. Applications are the central point of focus of IBM DevOps Deploy and this plug-in provides steps for interacting with Applications on the Deploy server.  **Platform Support:**

---

|Back to ...||IBM DevOps Deploy Applications |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](uDeploy-Application/README.md)|[87.1155713](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/uDeploy-Application/ucd-uDeploy-Application-87.1155713.zip)|

## IBM DevOps Deploy Components

DevOps Deploy application release automation tool. For more information, see [DevOps Deploy](https://www.ibm.com/cloud/urbancode) Component for creating and managing IBM DevOps Deploy components.

---

|Back to ...||IBM DevOps Deploy Components |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](uDeploy-Component/README.md)|[81.1155712](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/uDeploy-Component/ucd-uDeploy-Component-81.1155712.zip)|

## IBM DevOps Deploy Configuration Management

Configuration templating system built into DevOps Deploy. Configuration Templates are text files held within DevOps Deploy that have placeholders for variable configuration. This plugin writes out these configuration files at deployment time substituting in environment or target specific properties. This plugin will also read in properties from a file.

---

|Back to ...||IBM DevOps Deploy Configuration Management |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](uDeployConfigManagement/README.md)|[20.1155711](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/uDeployConfigManagement/ucd-uDeployConfigManagement-20.1155711.zip)|

## IBM DevOps Deploy Environments

IBM DevOps Deploy is an application release automation tool. For more information, see [DevOps Deploy](https://www.ibm.com/cloud/urbancode). Plugin for creating and managing IBM DevOps Deploy environments.

---

|Back to ...||IBM DevOps Deploy Environments |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](uDeploy-Environment/README.md)|[89.1159271](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/uDeploy-Environment/ucd-uDeploy-Environment-89.1159271.zip)|

## IBM DevOps Deploy General Utilites

This plugin provides various utilities for use in your DevOps Deploy process.

---

|Back to ...||IBM DevOps Deploy General Utilites |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](general-utilities/README.md)|[5.1155731](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/general-utilities/general-utilities-5.1155731.zip)|

## IBM DevOps Deploy Process

This IBM® DevOps Deploy Process plug-in supports interaction with processes and process requests within IBM DevOps Deploy. Using this plug-in, you can create or remove a link on a process request that can direct users to supplementary information related to the process execution.

---

|Back to ...||IBM DevOps Deploy Process |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](uDeploy-Process/README.md)|[14.1155709](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/uDeploy-Process/ucd-uDeploy-Process-14.1155709.zip)|

## IBM DevOps Deploy Resources

IBM DevOps Deploy is an application release automation tool. For more information, see [DevOps Deploy](https://www.ibm.com/cloud/urbancode). This plug-in manages resources in IBM DevOps Deploy.

---

|Back to ...||IBM DevOps Deploy Resources |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](uDeploy-Resource/README.md)|[86.1155708](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/uDeploy-Resource/ucd-uDeploy-Resource-86.1155708.zip)|

## IBM DevOps Deploy System

IBM DevOps Deploy application release automation tool. For more information, see [DevOps Deploy](https://www.ibm.com/cloud/urbancode) Plugin for managing IBM DevOps Deploy system properties and global settings.

---

|Back to ...||IBM DevOps Deploy System |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](uDeploy-System/README.md)|[65.1102020](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/uDeploy-System/uDeploy-System-65.1102020.zip)|

## IBM DevOps Deploy Tools

The Deploy Tools plug-in provides several steps that help verify the successful deployment of an application.

---

|Back to ...||IBM DevOps Deploy Tools |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](DeployTools/README.md)|[9.1056566](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/DeployTools/DeployTools-9.1056566.zip)|

## IBM DevOps Deploy Versioned File Storage

The IBM DevOps Versioned File Storage plug-in includes steps to upload and download artifacts. Use this plug-in with IBM DevOps Deploy to upload artifacts to an DevOps Deploy versioned file storage repository.

---

|Back to ...||IBM DevOps Deploy Versioned File Storage |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](UrbancodeVFS/README.md)|[48.1172096](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/UrbancodeVFS/ucd-UrbancodeVFS-48.1172096.zip)|

## IBM DevOps Deploy Versions

This plugin provides capabilities for editing Component Versions in IBM DevOps Deploy.

---

|Back to ...||IBM DevOps Deploy Versions |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](uDeploy-Version/README.md)|[71.1132358](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/uDeploy-Version/ucd-uDeploy-Version-71.1132358.zip)|

## IBM DevOps PHP CLI Tool  [community plugin]

The IBM Urban Code PHP CLI tool provides the following capabilities:

---

|Back to ...||IBM DevOps PHP CLI Tool |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](PHPCLI/README.md)|[6.714879](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/PHPCLI/SubversionSourceConfig-6.714879.zip)|

## IBM DevOps Package Manager

Plugin integration for DevOps Package Manager.

---

|Back to ...||IBM DevOps Package Manager |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](UrbanCodePackageManager/README.md)|[3.455115](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/UrbanCodePackageManager/Urbancode_Package_Manager-3.455115.zip)|

## IBM DevOps Release

This plug-in provides several steps for retrieving and updating information in IBM DevOps Release from your IBM DevOps Deploy processes, allowing for tighter integration and easier tracking of release status.

---

|Back to ...||IBM DevOps Release |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ucr-plugin/README.md)|[9.1056530](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/ucr-plugin/ucr-plugin-9.1056530.zip)|

## IBM DevOps uBuild

The IBM DevOps Build plugin for Deploy provides steps to download artifacts from DevOps Build and run uBuild workflows.

---

|Back to ...||IBM DevOps uBuild |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](uBuild/README.md)|[8.1056531](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/uBuild/uBuild-8.1056531.zip)|

## IBM VDP  [partner plugin]

The plugin allows process steps to be created that leverage the instant mount capabilities for Microsoft SQL Server and Oracle that IBM’s VDP data management platform provides. Downloads:

---

|Back to ...||IBM VDP |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ibm-vdp/README.md)|[0]()|

## IBM WebSphere Commerce

The WebSphere Commerce plug-in enables you to do the following on the WebSphere Commerce cells: Download, configure and deploy a server deployment package to a WebSphere Commerce server.

---

|Back to ...||IBM WebSphere Commerce |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](WebSphereCommerce/README.md)|[6.1100872](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WebSphereCommerce/WebSphereCommerce-6.1100872.zip)|

## IBM WebSphere Liberty

This plug-in includes steps for installing and updating applications in the IBM WebSphere Liberty Profile, working with the profile configuration and managing Liberty collectives.

---

|Back to ...||IBM WebSphere Liberty |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](WebSphereLiberty/README.md)|[23.1174431](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WebSphereLiberty/ucd-WebSphereLiberty-23.1174431.zip)|

## IBM WebSphere Portal

WebSphere Portal is a framework that includes a runtime server, services, tools, and other features. WebSphere Portal is used to integrate enterprises into a single, customizable interface called a portal. An enterprise portal combines components, applications, processes, and content from a wide variety of sources into a unified presentation, which users can access from a wide variety of devices. The WebSphere Portal plug-in deploys WebSphere Portal artifacts such as themes, skins, portlets, and Portal Application Archive files.

---

|Back to ...||IBM WebSphere Portal |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](WebSpherePortal/README.md)|[8.1100783](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WebSpherePortal/WebSpherePortal-8.1100783.zip)|

## IBM WebSphere Service Registry and Repository

This WSRR (WebSphere Service Registry and Repository) plug-in enables you to do the following:

---

|Back to ...||IBM WebSphere Service Registry and Repository |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](WSRR/README.md)|[9.1056551](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WSRR/WSRR-9.1056551.zip)|

## IBM Workload Automation  [community plugin]

The IBM Workload Automation plug-in is a facility provided to help you moving workload automation definitions from one environment to another, in a distributed or z/OS environment. You can download a job stream definition from the Dynamic Workload Console, then IBM DevOps Deploy applies the appropriate environment parameters for the importing process that is performed by the plug-in’s steps. The IBM Workload Automation plug-in is a community plug-in. Community plug-ins are open source projects that are developed and supported by the IBM DevOps Development Community. Click Visit Project at the top of the page to go to the project for further information.

---

|Back to ...||IBM Workload Automation |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ibm-workload-automation/README.md)|[0]()|

## IBM-MQ

IBM® MQ is robust messaging middleware that simplifies and accelerates the integration of diverse applications and business data across multiple platforms. IBM MQ facilitates the assured, secure and reliable exchange of information between applications, systems, services and file by sending and receiving message data via messaging queues, thereby simplifying the creation and maintenance of business applications. It delivers Universal Messaging with a broad set of offerings to meet enterprise-wide messaging needs, as well as connectivity for the internet of things and mobile devices. With this plugin, you can directly interact with WebSphere MQ with dozens of out of the box steps.

---

|Back to ...||IBM-MQ |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](WebSphereMQ/README.md)|[13.1154095](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WebSphereMQ/ucd-WebSphereMQ-13.1154095.zip)|

## InfoSphere-ISD

The InfoSphere Information Services Director (ISD) plugin integrates with IBM InfoSphere Information Services Director to allow exporting and importing projects, applications, and/or services.

---

|Back to ...||InfoSphere-ISD |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](infosphere-isd/README.md)|[1.1003048](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/infosphere-isd/plugins-infosphere-isd-1.1003048.zip)|

## Informatica  [community plugin]

Overview Informatica PowerCenter is an enterprise data integration platform. This is a community plugin.

---

|Back to ...||Informatica |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](Informatica/README.md)|[v31](https://github.com/UrbanCode/Informatica-UCD/releases/download/31/Informatica-UCD-v31.ad2156b.zip)|

## JBoss Application Server

JBoss Application Server is a open-source application server for Java EE. This plug-in interacts with the jboss-cli command line tool to provide access to JBoss operational and configuration tasks through the IBM DevOps Deploy process designer.

---

|Back to ...||JBoss Application Server |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](JBoss/README.md)|[25.1155393](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/JBoss/ucd-JBoss-25.1155393.zip)|

## JBoss-ON  [community plugin]

JBoss Operations Network (JBoss ON) is network management software for deploying, managing, and monitoring JBoss middleware as well as Apache Tomcat, Apache HTTP Server, and other applications and services. The JBoss ON plug-in interacts with the rhq-cli command-line tool to provide access to JBoss ON management tasks. The rhq-cli tool is typically installed in your server’s management GUI. For details on how the plug-in is constructed, how it works internally, or how to extend it yourself, see the README.md file that is contained in the project. Downloads:

---

|Back to ...||JBoss-ON |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](jboss-on/README.md)|[0]()|

## JIRA for IBM DevOps Deploy

JIRA is an issue tracking tool. You can use the tool to capture and organize issues, assign work, and track activities. Issues can be anything from development tasks, code errors, project tasks, help-desk tickets, or human resource request forms. The JIRA product is developed by Atlassian. For JIRA version older than v5.0, please use plugin v5. The JIRA plug-in provides integrations with JIRA. You can create and update issues, add comments to an issue, and create reports.

---

|Back to ...||JIRA for IBM DevOps Deploy |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](JIRA/README.md)|[19.1167047](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/JIRA/ucd-JIRA-19.1167047.zip)|

## Jenkins Job Manager  [community plugin]

This IBM DevOps Deploy Jenkins Job Manager plug-in provides support to manage Jenkins Jobs.

---

|Back to ...||Jenkins Job Manager |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](jenkins-job-manager/README.md)|[0]()|

## Jenkins Pipeline

The Jenkins Pipeline plug-in allows for interaction with DevOps Deploy components, such as creating a component and publish artifacts to version.

---

|Back to ...||Jenkins Pipeline |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](jenkins-pipeline-ud-plugin/README.md)|[2.28](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/jenkins-pipeline-ud-plugin/ibm-ucdeploy-build-steps-2.28.1161061.hpi)|

## Jenkins Publisher

Jenkins is a continuous integration server that supports interactions with other technologies by using a plug-in model. This plug-in is installed into the Jenkins server and provides the ability to publish artifacts into an IBM DevOps Deploy component as a post-build action.

---

|Back to ...||Jenkins Publisher |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](jenkins-ud-plugin/README.md)|[1.16.1107398](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/jenkins-ud-plugin/ibm-ucdeploy-publisher-1.16.1107398.hpi)|

## Kubernetes

Kubernetes is an open-source system for automating deployment, operations, and scaling of containerized applications. The Kubernetes plug-in provides the ability to interact with Kubernetes resources within IBM DevOps Deploy.

---

|Back to ...||Kubernetes |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](kubernetes/README.md)|[32.1154499](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/kubernetes/ucd-kubernetes-32.1154499.zip)|

## Linux System Tools

Developed by DevOps deploy, the Linux Tools plugin allows Urban CodeDeploy to automate various Linux system commands; such as rebooting the operating system and setting file permissions.

---

|Back to ...||Linux System Tools |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](LinuxSystemTools/README.md)|[14.1154088](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/LinuxSystemTools/ucd-LinuxSystemTools-14.1154088.zip)|

## Liquibase  [community plugin]

Liquibase is an open source tool that brings source control for tracking, managing and applying database schema changes. This plug-in is developed and supported by the DevOps Deploy Community on IBM DevOps GitHub organization. Click the “Visit Project” button at the top of the page to navigate to the project for source code, the plug-in distributable, and further information.

---

|Back to ...||Liquibase |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](liquibase/README.md)|[0]()|

## LogiGear TestArchitect  [community plugin]

The LogiGear TestArchitect plug-in for IBM DevOps Deploy and Build provides steps to run tests using the TestArchitect command line interface.

---

|Back to ...||LogiGear TestArchitect |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](logigear-testarchitect/README.md)|[0]()|

## Maven

Apache Maven provides developers a complete build lifecycle framework. It is used to automate the build process based on a project object model (POM). Maven also generates reports and stores documents with its POM repository. The Maven plug-in automates downloading artifacts from Maven repositories.

---

|Back to ...||Maven |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](MavenSourceConfig/README.md)|[30.1167665](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/MavenSourceConfig/ucd-MavenSourceConfig-30.1167665.zip)|

## Maven Resolve

Maven is a software project management and comprehension tool. Based on the concept of a project object model (POM), Maven can manage a project’s build, reporting, and documentation from a central piece of information. The Maven plug-in supports resolving artifacts from a maven repository.

---

|Back to ...||Maven Resolve |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](Maven/README.md)|[11.1167755](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Maven/ucd-Maven-11.1167755.zip)|

## Mesos Marathon

The Mesos Marathon plug-in uses the Marathon REST API to interact with and manipulate applications and tasks within a Marathon instance.

---

|Back to ...||Mesos Marathon |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](mesos-marathon/README.md)|[4.1174443](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/mesos-marathon/mesos-marathon-4.1174443.zip)|

## MicroFocus ALM (formerly HP Quality Center)

The HP Quality Center Plugin enables you to add interactions with an HP Quality Center server into your IBM DevOps Deploy Processes. Typically, this is for the purpose of running tests and adding a status to a Component Version that will either allow or deny it from being promoted to the next Environment in your SDLC. This plug-in uses Visual Basic scripts to connect to the HP Quality Center server and must run on a system that has access to OTAClient.dll.

---

|Back to ...||MicroFocus ALM (formerly HP Quality Center) |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](HPQualityCenter/README.md)|[16.1011648](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/HPQualityCenter/HPQualityCenter-16.1011648.zip)|

## Microsoft BizTalk

Microsoft’s BizTalk Server is an Enterprise Service Bus. It is designed to enable remote systems to communicate based on business rules defined in the BizTalk application. The BizTalk Plugin is an automation based plugin. It is used during deployment to import both Biztalk applications as well as bindings, uninstall Biztalk applications, remove Biztalk applications, and execute Biztalk run-book automations.The BizTalk plugin relies on powershell and the bts executable to import new or updated BizTalk applications, start and stop BizTalk applications, and remove or uninstall BizTalk Applications.

---

|Back to ...||Microsoft BizTalk |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](BizTalk/README.md)|[7.869016](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/BizTalk/BizTalk-7.869016.zip)|

## Microsoft IIS - Configure

To get started with the plug-in, read the [plug-in documentation](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/iis-configuration/overview.html) and watch the tutorial video: You can use the Microsoft IIS – Configure plug-in to manage Microsoft’s Internet Information Services (IIS) configurations and applications. The plug-in includes steps to discover configurations and package them into .zip files by using Microsoft Web Deploy, which must be installed on the agent computer. You can modify the configuration files that are produced in the .zip archive file that the plug-in creates. The .zip file created by the plug-in is the same format that is created by the Microsoft Web Deploy package provider. You can use the tokenization steps that the plug-in provides to modify the configuration files to work with multiple environments. After you modify a configuration, you can apply it to the original environment or to a different environment. You can work with entire Microsoft IIS configurations, or at a specific scope such as Sites, Apps, or App Pools.

---

|Back to ...||Microsoft IIS - Configure |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](iis-configuration/README.md)|[13.1127381](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/iis-configuration/ucd-IIS-Configuration-13.1127381.zip)|

## Microsoft IIS AdminScripts

Microsoft’s IIS 6 is a web server application packaged with Windows server 2003. The IIS-AdminScripts plugin allows IBM DevOps Deploy to automate IIS6 configuration changes during a deployment.

---

|Back to ...||Microsoft IIS AdminScripts |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](IIS-AdminScripts/README.md)|[10.1154089](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/IIS-AdminScripts/ucd-IIS-AdminScripts-10.1154089.zip)|

## Microsoft IIS AppCmd

The IIS-AppCmd plugin is an automation based plugin. It is used during the deployment to automate configuration changes to IIS versions 7 – 8. Microsoft’s IIS 7 is packaged with Windows Server 2008. Microsoft’s IIS 7.5 is packaged with Windows Server 2008r2. Microsoft’s IIS 8 is packaged with Windows Server 2010.

---

|Back to ...||Microsoft IIS AppCmd |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](IIS-AppCmd/README.md)|[8.1154620](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/IIS-AppCmd/ucd-IIS-AppCmd-8.1154620.zip)|

## Microsoft IIS MS-Deploy (Azure App Service)

The Web Deploy tool (msdeploy) simplifies the migration, management and deployment of IIS web servers, web applications, websites, and Azure App Service websites. The MSDeploy plug-in automates synchronizing and deleting servers, sites, applications, packages, and starting, stopping and recycling application pools by using the msdeploy tool.

---

|Back to ...||Microsoft IIS MS-Deploy (Azure App Service) |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](IIS-MSDeploy/README.md)|[6.1164186](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/IIS-MSDeploy/ucd-IIS-MSDeploy-6.1164186.zip)|

## Microsoft SQL Server SQLCmd

With the sqlcmd utility, you can enter Transact-SQL statements, system procedures, and script files at the command prompt. You can enter these statements in Query Editor in SQLCMD mode, in a Windows script file, or in an operating system (Cmd.exe) job step of an SQL Server Agent job. This utility uses OLE DB to execute Transact-SQL batches. SQLCMD is a command line application that comes with Microsoft SQL Server, and exposes the management features of SQL Server.

---

|Back to ...||Microsoft SQL Server SQLCmd |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](SQLCmd/README.md)|[10.1154073](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/SQLCmd/ucd-SQLCmd-10.1154073.zip)|

## Microsoft SSIS

The Microsoft SSIS plug-in provides deployment automation of packages to SQL database servers that can work alone or with other deployed packages to provide solutions to complex business needs. The testing was done using DevOps Deploy 6.1.0.1.

---

|Back to ...||Microsoft SSIS |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](MicrosoftSSIS/README.md)|[2.1005733](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/MicrosoftSSIS/MicrosoftSSIS-2.1005733.zip)|

## Microsoft SharePoint

Microsoft SharePoint is a web application platform for common enterprise web requirements. The Microsoft SharePoint plug-in for IBM DevOps Deploy includes steps to deploy .wsp and .cmp files. It is compatible with SharePoint Server 2007, 2010, 2013, and 2016.

---

|Back to ...||Microsoft SharePoint |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](Sharepoint/README.md)|[8.1056539](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Sharepoint/Sharepoint-8.1056539.zip)|

## Microsoft Software Installer (MSI)

Microsoft Software Installer (MSI) is a software component that is used for the installation, maintenance, and removal of software on Microsoft Windows systems. The Microsoft Software Installer plug-in installs and uninstalls MSI and runs MSIexec.

---

|Back to ...||Microsoft Software Installer (MSI) |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](MSI/README.md)|[3.911818](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/MSI/MSI-3.911818.zip)|

## Microsoft TFS (Team Foundation Server)

Microsoft Team Foundation Server (TFS) is a software development collaboration tool. It includes source control, data collection, reporting, and project tracking.The Microsoft TFS plug-in imports versioned source artifacts from a TFS server. See the [Microsoft TFS\_SCM (Team Foundation Server) plug-in](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/TFS_SCM-SourceConfig/)to import deployable artifacts from the TFM server. Requirements

---

|Back to ...||Microsoft TFS (Team Foundation Server) |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](TFS-SourceConfig/README.md)|[22.1131551](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/TFS-SourceConfig/ucd-TFS-SourceConfig-25.1154010.zip)|

## Microsoft TFS Work Items

This plug-in provides steps that enable one to create and update work items in a Microsoft Team Foundation Server from within an IBM DevOps Deploy process. Typically, one would add a comment, update the status, or even open a new work item depending on the outcome of a deploy (i.e. success of failure). The plug-in must be run on an agent where the Microsoft Visual Studio and Team Foundation Server plug-in for Visual Studio have been installed.

---

|Back to ...||Microsoft TFS Work Items |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](plugin-air-TFS-WorkItems/README.md)|[3.1056533](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/plugin-air-TFS-WorkItems/TFS-WorkItems-3.1056533.zip)|

## Microsoft TFS_SCM (Team Foundation Server)

The Microsoft TFS\_SCM plug-in imports version artifacts from a Team Foundation Server (TFS) server. TFS is supported both as a source of builds with the [TFS plug-in](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/TFS-SourceConfig/), and by direct retrieval of deployable artifacts from source control.

---

|Back to ...||Microsoft TFS_SCM (Team Foundation Server) |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](TFS_SCM-SourceConfig/README.md)|[17.1154009](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/TFS_SCM-SourceConfig/ucd-TFS_SCM-SourceConfig-17.1154009.zip)|

## Microsoft Visual Studio Team Services (VSTS)  [partner plugin]

The Microsoft Visual Studio Team Services (VSTS) extension provides the ability to import artifacts into IBM DevOps Deploy from Team Foundation Server (TFS). This extension is installed into TFS or VSO, not IBM DevOps Deploy.

---

|Back to ...||Microsoft Visual Studio Team Services (VSTS) |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](microsoft-visual-studio-team-services-vsts/README.md)|[0]()|

## Microsoft Windows Failover Clusters

A failover cluster is a group of independent computers that work together to increase the availability of applications and services. The clustered servers (called nodes) are connected by physical cables and by software. If one of the cluster nodes fails, another node begins to provide service (a process known as failover).

---

|Back to ...||Microsoft Windows Failover Clusters |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](WindowsFailoverCluster/README.md)|[6.1103479](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WindowsFailoverCluster/WindowsFailoverCluster-6.1103479.zip)|

## Microsoft Windows Services

This plugin manipulates Windows Services. On Microsoft Windows operating systems, a Windows service is a long-running executable that performs specific functions and which is designed not to require user intervention. Windows services can be configured to start when the operating system is booted and run in the background as long as Windows is running, or they can be started manually when required. This plugin makes this easy. The Service Control Manager plugin is an automation based plugin. It is used during the deployment to automate Windows Services.

---

|Back to ...||Microsoft Windows Services |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ServiceControlManager/README.md)|[12.1155989](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/ServiceControlManager/ucd-ServiceControlManager-12.1155989.zip)|

## Microsoft Windows System Tools

This is an DevOps developed plugin for performing various Windows tasks. The Windows System Tools Plugin automates various Windows system tasks.

---

|Back to ...||Microsoft Windows System Tools |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](WindowsSystemTools/README.md)|[24.1127383](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WindowsSystemTools/ucd-WindowsSystemTools-24.1127383.zip)|

## Mulesoft

MuleSoft is a middleware technology that connects an enterprise. It provides secure connectivity between multiple applications, data, and devices with an application programming interface to create a single user interface. The MuleSoft plug-in automates the deployment of MuleSoft applications to a Mulesoft target.

---

|Back to ...||Mulesoft |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](mulesoft/README.md)|[2.1175635](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/mulesoft/ucd-plugins-mulesoft-2.1175635.zip)|

## NPM

NPM (Node Package Manager) is a package manager for the JavaScript programming language. NPM includes command-line client that interacts with a remote registry. Using the command-line interface, you can use and distribute JavaScript modules that are available on the registry. The Node Package Manager (NPM) source configuration plug-in uses the NPM command-line interface to import NPM packages as TAR files into component versions.

---

|Back to ...||NPM |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](sourceconfig-npm/README.md)|[3.1053076](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/sourceconfig-npm/sourceconfig-npm-3.1053076.zip)|

## New Relic  [community plugin]

New Relic provides application performance management, allowing you to monitor, troubleshoot, and configure applications. This plugin sends deployment notifications to New Relic. This plug-in is developed and supported by the DevOps Deploy Community on the IBM DevOps Services platform. Click the “Visit Project” button at the top of the page to navigate to the project for further information.

---

|Back to ...||New Relic |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](new-relic/README.md)|[0]()|

## Nexus

Nexus is a repository manager, developed by SonaType, designed to store artifacts and cache remote repositories while providing universal package support. This plug-in integrates with Nexus to interact with artifacts hosted in the Nexus repository.

---

|Back to ...||Nexus |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](nexus/README.md)|[3.1101667](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/nexus/Nexus-3.1101667.zip)|

## Nexus Repository Manager V3

Nexus is a repository manager, developed by SonaType, designed to store artifacts and cache remote repositories while providing universal package support. This plug-in integrates with Nexus to retrieve artifacts hosted in a Maven repository using IBM DevOps Deploy’s import mechanism.

---

|Back to ...||Nexus Repository Manager V3 |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](sourceconfig-nexus-v3/README.md)|[5.1164218](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/sourceconfig-nexus-v3/ucd-sourceconfig-nexus-v3-5.1164218.zip)|

## Nexus Source Config

Nexus is a repository manager, developed by SonaType, designed to store artifacts and cache remote repositories while providing universal package support. This plug-in integrates with Nexus to retrieve artifacts hosted in a Maven repository using IBM DevOps Deploy’s import mechanism.

---

|Back to ...||Nexus Source Config |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](nexus-source-config/README.md)|[4.1053075](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/nexus-source-config/Nexus-Source-Config-4.1053075.zip)|

## Node-RED  [community plugin]

Node-RED provides a browser-based flow editor that makes it easy to wire together flows using the wide range nodes in the palette. Flows can be then deployed to the runtime in a single-click. JavaScript functions can be created within the editor using the rich capabilities of the embedded Eclipse Orion. Upload this plugin to support the management of Node-RED.

---

|Back to ...||Node-RED |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](node-red/README.md)|[0]()|

## Node.js  [community plugin]

Node.js is a platform built on Chrome’s JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices. Upload this plugin to IBM DevOps Deploy to install and configure Nodejs.

---

|Back to ...||Node.js |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](node-js/README.md)|[0]()|

## NuGet

NuGet is an open-source package manager designed by Microsoft Corporation. The NuGet source configuation plug-in imports versioned source artifacts from a NuGet repository.

---

|Back to ...||NuGet |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](nuget-source-config/README.md)|[17.1154071](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/nuget-source-config/ucd-nuget-source-config-17.1154071.zip)|

## OpenShift

Use the OpenShift source configuration plug-in to manually or automatically create component versions from an OpenShift registry. The plug-in works by detecting OpenShift registry image tags and creating associated component versions for the tag.

---

|Back to ...||OpenShift Source|Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](OpenShiftSourceConfig/README.md)|[6.1034331](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/OpenShiftSourceConfig/OpenShiftSourceConfig-6.1034331.zip)|

## OpenShift for IBM DevOps Deploy

OpenShift provides application lifecycle management functionality and DevOps tooling, and is built around a core of Docker container packaging and Kubernetes container cluster management. Origin provides a complete open source application container platform. This plug-in provides the ability to interact with OpenShift applications within IBM DevOps Deploy.

---

|Back to ...||OpenShift Automation |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](openshift/README.md)|[23.1168147](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/openshift/ucd-openshift-23.1168147.zip)|

## Oracle SQLPlus

SQL\*Plus (commonly known as sqlplus) is an Oracle database client that can run SQL and PL/SQL commands and display their results. SQL\*Plus is the default, the simplest and the most basic Oracle utility, with a basic command-line interface, commonly used by users, administrators, and programmers. The SQL\*Plus plugin allows uDeploy to execute SQL scripts during a deployment.

---

|Back to ...||Oracle SQLPlus |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](SQLPlus/README.md)|[24.1163812](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/SQLPlus/ucd-SQLPlus-24.1163812.zip)|

## Oracle Service Bus Configuration Management

Oracle Service Bus connects, mediates, and manages interactions between services and applications. The plug-in provides steps to support automated application and import of Oracle Service Bus configurations. Use the provided steps in your processes. They are self-contained.

---

|Back to ...||Oracle Service Bus Configuration Management |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](plugin-air-OSB-Configuration-Management/README.md)|[13.914640](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/plugin-air-OSB-Configuration-Management/plugin-air-OSB-Configuration-Management-13.914640.zip)|

## Oracle WebLogic Application Deployment

The Oracle Weblogic Server is an application server for building and deploying enterprise JAVA application programs. The Oracle WebLogic Application Deployment plug-in provides processes to deploy, redeploy, and undeploy applications on a WebLogic server. Steps are also provided to start and stop deployed applications. The plug-in includes a component template to assist in setting up deployment automation.

---

|Back to ...||Oracle WebLogic Application Deployment |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](plugin-air-WebLogic-Application-Deployment/README.md)|[8.1061630](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/plugin-air-WebLogic-Application-Deployment/plugin-air-WebLogic-Application-Deployment-8.1061630.zip)|

## Oracle WebLogic Integration Resource Management

The WebLogic Integration Resource Management plug-in includes steps that allow you to create, update, and delete WebLogic Integration objects. This plug-in allows you to automate the creation, update, and deletion of objects within WebLogic Integration:

---

|Back to ...||Oracle WebLogic Integration Resource Management |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](plugin-air-WLI-Resource-Management/README.md)|[35.1056548](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/plugin-air-WLI-Resource-Management/plugin-air-WLI-Resource-Management-35.1056548.zip)|

## Oracle WebLogic Scripting Tool (WLST)

The WebLogic Scripting Tool (WLST) plug-in provides steps to automate the following deployment and management operations:

---

|Back to ...||Oracle WebLogic Scripting Tool (WLST) |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](WebLogic-WLST/README.md)|[9.1100786](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WebLogic-WLST/WebLogic-WLST-9.1100786.zip)|

## Oracle WebLogic Server Resource Management

This plug-in provides steps to support automated deployment of various WebLogic server resources, such as connection factories, quotas, templates, queues, JDBC data sources, file stores, and subdeployments. Each step is self-contained. That is, connection credentials that are required to connect to the WebLogic server is contained in each step. All Step properties include location information for the following required files:

---

|Back to ...||Oracle WebLogic Server Resource Management |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](plugin-air-WLS-Resource-Management/README.md)|[6.1056547](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/plugin-air-WLS-Resource-Management/plugin-air-WLS-Resource-Management-6.1056547.zip)|

## Oracle WebLogic Server Security Management

The Oracle WebLogic Server security features provide end-to-end security for applications on the WebLogic server. The Oracle WebLogic Server Security Management plug-in provides processes to work with WebLogic Server security configurations. Steps are provided to create and manage role mappers, roles, realms, and authentication providers.

---

|Back to ...||Oracle WebLogic Server Security Management |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](WebLogicSecurityMgmt/README.md)|[2.504117](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WebLogicSecurityMgmt/WLS-Security-Management-2.504117.zip)|

## Oracle WebLogic WLDeploy

The **wldeploy** Ant task is used to complete **weblogic.Deployer** functions by using attributes that are specified in an Ant XML file. You can use the **wldeploy** Ant task with other WebLogic Server Ant tasks to create a single Ant build script. With the Oracle WeblLogic WLDeploy plug-in, you can run a **wldeploy** Ant task as part of a deployment process. This plug-in also provides steps for other deployment actions such as: undeploy, deploy, and redeploy. It also can be used to start and stop WebLogic servers and clusters.

---

|Back to ...||Oracle WebLogic WLDeploy |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](WLDeploy/README.md)|[26.1175365](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WLDeploy/ucd-WLDeploy-26.1175365.zip)|

## PVCS

Serena PVCS is a version management tool that provides a built-in file server and configuration control. The PVCS source configuration plug-in automates downloading artifacts from PVCS, creating new component versions, and importing artifacts.

---

|Back to ...||PVCS |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](PvcsSourceConfig/README.md)|[7.1026780](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/PvcsSourceConfig/PvcsSourceConfig-7.1026780.zip)|

## Perforce Helix

Perforce is a commercial, proprietary, centralized revision control system developed by Perforce Software, Inc. Use this source configuration plug-in to manually or automatically import artifacts from the Perforce Helix server into an IBM DevOps Deploy component version.

---

|Back to ...||Perforce Helix |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](PerforceSourceConfig/README.md)|[9.1026768](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/PerforceSourceConfig/PerforceSourceConfig-9.1026768.zip)|

## PowerShell

The PowerShell plug-in provides a step for running user-defined PowerShell scripts. The following features are included in the initial release:

---

|Back to ...||PowerShell |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](powershell-integration/README.md)|[9.1025820](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/powershell-integration/PowerShell-Integration-9.1025820.zip)|

## Property Utils  [community plugin]

The Property Utils plug-in is an automation based plugin that provides steps for collecting IBM DevOps properties. The Property Utils plug-in is a community plug-in. Community plug-ins are open source projects that are developed and supported by the IBM DevOps development community. Click **Visit Project** at the top of the page to go to the project for further information.

---

|Back to ...||Property Utils |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](property-utils/README.md)|[0]()|

## Puppet  [community plugin]

Puppet is a declarative, model-based approach to IT automation, helping you manage infrastructure throughout its lifecycle, from provisioning and configuration to orchestration and reporting. Using Puppet, you can easily automate repetitive tasks, quickly deploy critical applications, and proactively manage change, scaling from 10s of servers to 1000s, on-premise or in the cloud. This plug-in enables you to apply puppet manifests, or call a puppet agent.

---

|Back to ...||Puppet |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](puppet/README.md)|[0]()|

## RPM

The RPM Package Manager (RPM) is a toolset used to install a single package, track files added by the package on the system, and remove files using a single command. Distributed with the Red Hat Linux distribution and its derivatives. The RPM plug-in automates installing, updating, and uninstalling RPM packages.

---

|Back to ...||RPM |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](RPM/README.md)|[4.1100816](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/RPM/RPM-4.1100816.zip)|

## Rally for IBM DevOps Deploy

Rally is an agile project management tool for the enterprise. This plug-in includes steps to update Rally issues for bug or feature tracking.

---

|Back to ...||Rally for IBM DevOps Deploy |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](Rally/README.md)|[6.1056546](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Rally/Rally-6.1056546.zip)|

## Resource Utilities

The Resource Utilities plug-in supplements the existing IBM DevOps Deploy resources plugin with additional steps to help manage large resource trees and the properties on resources in large trees. This is an open source plug-in and is developed and supported by the IBM DevOps Deploy Community on GitHub. At this time, not all the required jars are available for public use and therefore, are missing from the GitHub repository. To retrieve a working plugin, please use the ‘download’ link at the top of this page.

---

|Back to ...||Resource Utilities |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](resource-utilities/README.md)|[1.0](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/resource-utilities/Resource-Utilities-UCD-1.0.zip)|

## SAP Change and Transport System (CTS)

This plug-in is designed to interact with the SAP Change and Transport System.

---

|Back to ...||SAP Change and Transport System (CTS) |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](SAP-CTS/README.md)|[3.1079021](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/SAP-CTS/SAP-CTS-3.1079021.zip)|

## SQL-JDBC

The SQL-JDBC plugin is a database-independent plug-in. It allows users to run SQL scripts in a specific order using JDBC drivers. The SQL-JDBC plugin is an automation based plugin. It is executed as part of the deployment to help manage database changes.

---

|Back to ...||SQL-JDBC |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](SQL-JDBC/README.md)|[13.1154072](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/SQLJDBC/ucd-SQL-JDBC-13.1154072.zip)|

## Salesforce

The Salesforce plug-in for IBM DevOps Deploy uses the Force.com Migration Tool to perform file-based deployment of metadata changes and Apex classes. These artifacts typically progress through a lifecycle in which IBM DevOps Deploy environments are mapped to Salesforce.com organizations.

---

|Back to ...||Salesforce |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](salesforce/README.md)|[10.1138575](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/SalesForce/ucd-salesforce-10.1138575.zip)|

## Selenium

Selenium is a testing tool which automates web applications.It can also be used to automate basic browser functions and administration tasks. The Selenium plug-in runs Selenese HTML files with Selenium RC or WebDriver.

---

|Back to ...||Selenium |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](Selenium/README.md)|[9.1154067](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Selenium/ucd-Selenium-9.1154067.zip)|

## Send SMTP Email

This community plugin provides a mechanism to send SMTP emails in your deployment process.

---

|Back to ...||Send SMTP Email |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](send-smtp-email/README.md)|[3](https://github.com/UrbanCode/Send-SMTP-Email-UCD/releases/download/v3.0/smtp-email-open-3.zip)|

## ServiceNow

- Check Records

---

|Back to ...||ServiceNow |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ServiceNow/README.md)|[40.1168551](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/ServiceNow/ucd-ServiceNow-40.1168551.zip)|


## Shell

A shell is software that provides an interface for users of an operating system that provides access to the services of a kernel.Operating system shells typically fall into 1 of 2 categories: command line and graphical. Command-line shells provide a command-line interface (CLI) to the operating system, while graphical shells provide a graphical user interface (GUI). In either category, the primary purpose of the shell is to call or start another program. Shells frequently have more capabilities such as viewing the contents of directories. With the Shell plug-in, you can run custom shell scripts during the deployment process.

---

|Back to ...||Shell |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](Shell/README.md)|[21.1167618](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Shell/ucd-Shell-21.1167618.zip)|

## Siebel  [community plugin]

Siebel is a customer relationship management (CRM) system that is produced by Oracle. The Siebel plug-in is a community supported plug-in. Community plug-ins are open source projects that are developed and supported by the IBM DevOps development community. Click **Visit Project** at the top of the page to go to the project for further information.

---

|Back to ...||Siebel |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](siebel/README.md)|[0]()|

## Skytap Automation Pack  [partner plugin]

Skytap expands the devops flexibility of IBM DevOps Deploy with the Skytap Automation Pack for DevOps Deploy. The integration with IBM DevOps Deploy enables customers to use scalable, elastic, on-demand cloud resources to meet fluctuating and unpredictable demand for IBM DevOps Deploy workflows.

---

|Back to ...||Skytap Automation Pack |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](skytap-automation-pack/README.md)|[0]()|

## Slack  [community plugin]

Slack is a team collaboration tool. This plug-in sends deployment notifications to Slack in a specified channel.

---

|Back to ...||Slack |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](slack/README.md)|[0]()|

## Subversion

Subversion is an open source version control software. It is used to maintain current and previous versions of source code, web pages, and documentation. The Subversion source configuration plug-in automates importing artifacts from a Subversion repository.

---

|Back to ...||Subversion |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](SubversionSourceConfig/README.md)|[26.1159798](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/SubversionSourceConfig/ucd-SubversionSourceConfig-26.1159798.zip)|

## Subversion-Export

Subversion is an open source version control system. Developers use Subversion to maintain current and historical versions of files such as source code, web pages, and documentation. This plug-in allows IBM DevOps Deploy to checkout and export code from Subversion.

---

|Back to ...||Subversion-Export |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](Subversion-export/README.md)|[5.1100775](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Subversion-export/Subversion-export-5.1100775.zip)|

## Sybase

This plugin integrates with SAP ASE, originally known as Sybase SQL Server, which is a relational database server. The plugin uses the Interactive SQL parser (isql) utility to integrate with Sybase and execute SQL commands.

---

|Back to ...||Sybase |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](sybase/README.md)|[6.1100960](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/sybase/plugins-sybase-6.1100960.zip)|

## System Information

The System Information plugin includes a variety of checks to perform against the operating system. These steps can be used to verify that a deployment can succeed or has succeeded.

---

|Back to ...||System Information |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](SystemInformation/README.md)|[5.1122816](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/SystemInformation/SystemInformation-5.1122816.zip)|

## TIBCO  [partner plugin]

A plugin for management of TIBCO applications – includes steps for deployment, configuration, export etc. The plugin to provides smooth and transparent interaction between TIBCO Administrator and IBM DevOps Deploy tool. It automates the app management process for TIBCO applications by providing simplified process.

---

|Back to ...||TIBCO |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](tibco/README.md)|[0]()|

## TeamCity

TeamCity is a build management and continuous integration tool which supports a variety of version control systems and build runners. The TeamCity server manages committed code changes, builds, real-time build information received from build agents, and build artifacts. The TeamCity plug-in automates downloading artifacts from TeamCity projects.

---

|Back to ...||TeamCity |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](TeamCitySourceConfig/README.md)|[20.1153959](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/TeamCitySourceConfig/ucd-TeamCitySourceConfig-20.1153959.zip)|

## Text Utility  [community plugin]

The Text-Utils plug-in for IBM DevOps Deploy offers various ways to modify files.

---

|Back to ...||Text Utility |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](text-utility/README.md)|[0]()|

## VMware AirWatch  [community plugin]

The VMWare AirWatch allows a user to access work applications and data from a mobile phone. This plug-in enables IBM DevOps Deploy to deploy an IPA to an AirWatch instance and assign an IPA to a group.

---

|Back to ...||VMware AirWatch |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](vmware-airwatch/README.md)|[0]()|

## Venafi  [community plugin]

The Venafi Trust Protection Platform provides continuous monitoring and control over keys and certificates across different devices. The Venafi plug-in for IBM DevOps Deploy contains various steps to control Venafi certificates.

---

|Back to ...||Venafi |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](venafi/README.md)|[0]()|

## Web Utilities

The Web Utilities plug-in includes steps for interacting with web sites and web services.

---

|Back to ...||Web Utilities |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](web-utilities/README.md)|[18.1151823](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/web-utilities/ucd-web-utilities-18.1151823.zip)|

## WebSphere Application Server - Configure

To learn more about different solutions for WebSphere Application Server, see [Frequently Asked Questions about IBM DevOps Deploy solutions for WebSphere Application Server](https://community.ibm.com/community/user/wasdevops/blogs/osman-burucu/2023/03/03/frequently-asked-questions-about-ibm-devops-dep/ "Frequently Asked Questions about IBM DevOps Deploy solutions for WebSphere Application Server").  Starting with version 14 of the WebSphere Application Server – Configure plug-in for IBM DevOps Deploy, you can use JSON files to manage WebSphere Application Server configuration.

---

|Back to ...||WebSphere Application Server - Configure |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](WebSphereConfiguration/README.md)|[94.1165946](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WebSphereConfiguration/ucd-WebSphereConfiguration-94.1165946.zip)|

## WebSphere Application Server - Deployment

The WebSphere Application Server – Deployment plug-in provides a number of steps for deploying application files to and performing administrative tasks for WebSphere Application Server. The plug-in also contains a number of steps that are related to configuration management, such as creating data sources and JMS requests. These configuration steps are deprecated; instead, use the WebSphere Application Server – Configure plug-in for all configuration-related activities. To learn more about different solutions for WebSphere Application Server, see [Frequently Asked Questions about IBM DevOps Deploy solutions for WebSphere Application Server](https://community.ibm.com/community/user/wasdevops/blogs/osman-burucu/2023/03/03/frequently-asked-questions-about-ibm-devops-dep/ "Frequently Asked Questions about IBM DevOps Deploy solutions for WebSphere Application Server").

---

|Back to ...||WebSphere Application Server - Deployment |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](Websphere/README.md)|[131.1165947](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Websphere/ucd-WebSphere-131.1165947.zip)|


## WebSphere Application Server - Install

The IBM WebSphere Application Server – Install plug-in includes a sample application that automates a standard installation of WebSphere Application Server Network Deployment. This application is provided as an example and must be modified or used as a guide for creating your own installation process. The plug-in also includes steps that are related to installing WebSphere Application Server.

---

|Back to ...||WebSphere Application Server - Install |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](websphere-install/README.md)|[11.1154050](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/websphere-install/ucd-WAS-Install-11.1154050.zip)|

## WinRS Agent Install

Plugin for installing agent to remote windows machine using WinRS.

---

|Back to ...||WinRS Agent Install |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](WinRSAgentInstall/README.md)|[12.1131558](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WinRSAgentInstall/ucd-WinRSAgentInstall-12.1131558.zip)|

## CyberArk

CyberArk Application Identity Manager, part of the CyberArk Privileged Account Security Solution, enables organizations to protect critical business systems by eliminating hard-coded credentials from application scripts, configuration files and software code, and removing SSH keys from servers where they are used by applications and scripts. Application Identity Manager offers agent and agentless deployment options to best meet the security and availability requirements of various business applications. The product is built on the CyberArk Shared Technology Platform, delivering scalability, high availability and centralized management and reporting.

This is a partner plugin.

---

|        Back to ...         ||     CyberArk     |        Latest Version        |
|:--------------------------:|:----------------:|:----------------------------:| :---: |
| [All Plugins](../index.md) | [Top](#contents) | [Readme](cyberark/README.md) |[4.1098501](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/cyberark/cyberark-4.1098501.zip)|

## eggPlant  [partner plugin]

The eggPlant Functional test tool from TestPlant enables you to execute synthetic transactions or functional tests from an IBM DevOps Deploy Process

---

|        Back to ...         ||     eggPlant     |        Latest Version         |
|:--------------------------:|:----------------:|:-----------------------------:|:------:|
| [All Plugins](../index.md) | [Top](#contents) | [Readme](eggplant/README.md)  | [0]()  )  |

## z/OS Dataset Writer

Apart from copying content to a mainframe dataset, this plug-in provides the following features:

---

|        Back to ...         || z/OS Dataset Writer |             Latest Version             |
|:--------------------------:|:-------------------:|:--------------------------------------:| :---: |
| [All Plugins](../index.md) |  [Top](#contents)   | [Readme](zos-dataset-writer/README.md) |[4.1162523](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/zos-dataset-writer/ucd-plugins-zos-dataset-writer-4.1162523.zip)|

## z/OS External Artifact Repository

The External Artifact Repository plug-in includes the step to download artifacts from a Nexus or JFrog Artifactory repository into an DevOps z/OS type component.

---

|        Back to ...         |                  |         z/OS External Artifact Repository          |                                                                  Latest Version                                                                   |
|:--------------------------:|:----------------:|:--------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------:|
| [All Plugins](../index.md) | [Top](#contents) | [Readme](zOS-external-artifact-download/README.md) | [12.1174510](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/zOS-external-artifact-download/ucd-ExtArtRepo-12.1174510.zip) |

## z/OS FTP Utility

The zOS FTP plug-in automates the importing of hierarchical file system (HFS) artifacts from another z/OS logical partition (LPAR).

---

|        Back to ...         || z/OS FTP Utility |       Latest Version        |
|:--------------------------:|:----------------:|:---------------------------:| :---: |
| [All Plugins](../index.md) | [Top](#contents) | [Readme](zos-ftp/README.md) |[2.1173218](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/zos-ftp/zos-ftp-2.1173218.zip)|

## z/OS File Source Config

The z/OS File Source Config plug-in automates uploading data sets, UNIX files and generic artifacts from a z/OS system into a component version. New component versions are created based on the input [ship list](http://www.ibm.com/support/knowledgecenter/SS4GSP_6.2.2/com.ibm.udeploy.doc/topics/zos_shiplistfiles.html). The  z/OS File Source Config plug-in provides a Web UI to run the version import commands from the the z/OS deployment tools.

---

|        Back to ...         || z/OS File Source Config |             Latest Version              |
|:--------------------------:|:-----------------------:|:---------------------------------------:| :---: |
| [All Plugins](../index.md) |    [Top](#contents)     | [Readme](zOSFileSourceConfig/README.md) |[8.1174630](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/zOSFileSourceConfig/ucd-zOSFileSourceConfig-8.1174630.zip)|

## z/OS Management Facility

The z/OS Management Facility (zOSMF) plug-in provides functions to discover software instances provisioned by [z/OSMF Cloud Provisioning](https://www.ibm.com/systems/z/os/zos/features/zosmf/) or [z/OS Provisioning Toolkit](https://developer.ibm.com/mainframe/products/zospt/).  The zOS Management Facility plug-in includes steps to create and manage z/OSMF workflows and software service templates.

---

|        Back to ...         || z/OS Management Facility |      Latest Version       |
|:--------------------------:|:------------------------:|:-------------------------:| :---: |
| [All Plugins](../index.md) |     [Top](#contents)     | [Readme](zosmf/README.md) |[15.1174435](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/zosmf/ucd-zosmf-15.1174435.zip)|

## z/OS Multi Generate Artifact Information

The z/OS Multi Generate Artifact Information plug-in scans version artifacts and generates text based on a template. The output text can be used as an input property to subsequent steps. Use this plug-in to process data sets or members in a component version. You can also use the **Generate Artifact Information** step to select a set of artifacts to process by applying filters on data set names, member names, deployment types, and custom properties on each output property.

---

|        Back to ...         || z/OS Multi Generate Artifact Information |                    Latest Version                    |
|:--------------------------:|:----------------------------------------:|:----------------------------------------------------:| :---: |
| [All Plugins](../index.md) |             [Top](#contents)             | [Readme](zos-multi-generate-artifact-info/README.md) |[9.1168826](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/zos-multi-generate-artifact-info/ucd-plugins-zos-multi-generate-artifact-info-9.1168826.zip)|

## z/OS Shell [Deprecated]

> **Deprecation Notice**: The z/OS Shell plugin is deprecated. It is recommended to use the [Shell plugin](#Shell) instead.

The z/OS Shell plug-in is for the z/OS only operating system. It performs the same functions as the [Shell plug-in](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/Shell/) for DevOps Deploy. The plug-in reduces the CPU consumption in the z/OS environment by using Java code instead of Groovy code.

---

|        Back to ...         ||    z/OS Shell    |         Latest Version         |
|:--------------------------:|:----------------:|:------------------------------:| :---: |
| [All Plugins](../index.md) | [Top](#contents) | [Readme](java-shell/README.md) |[2.1133862](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/java-shell/ucd-java-shell-2.1133862.zip)|

## z/OS USS Utility [Deprecated]

> **Deprecation Notice**: The z/OS USS Utility plugin is deprecated. It is recommended to use `Replace Tokens` step from [File Utils](#file-utils) plugin instead.

The z/OS USS Utility plug-in automates working with USS files on the z/OS operating system. This plug-in supports working with the IBM z/OS version 2.2 and later and requires DevOps Deploy agent on the z/OS server.

---

|        Back to ...         || z/OS USS Utility |              Latest Version               |
|:--------------------------:|:----------------:|:-----------------------------------------:| :---: |
| [All Plugins](../index.md) | [Top](#contents) | [Readme](zos-replacetokens-uss/README.md) |[1.1162235](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/zos-replacetokens-uss/ucd-plugins-zos-replacetokens-uss-1.1162235.zip)|

## z/OS Utility

The z/OS Utility plug-in includes steps for retrieving and deploying IBM z/OS artifacts. It is installed and upgraded as part of the IBM DevOps Deploy server. This plugin will work with all the supported versions of UCD server/agents. There are some new features that are only supported if the agent is upgraded to those versions. If you attempt to use the feature that is not enabled for a version, process might fail with the message to upgrade the agent.  This plug-in requires agents that run on the z/OS platform.

---

|        Back to ...         ||   z/OS Utility   |         Latest Version         |
|:--------------------------:|:----------------:|:------------------------------:| :---: |
| [All Plugins](../index.md) | [Top](#contents) | [Readme](zos-deploy/README.md) |[97.1175894](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/zos-deploy/ucd-zos-deploy-97.1175894.zip)|

## z/OS Rexx Executor

The z/OS Rexx Executor plugin executes REXX program from a Dataset (or) specified inline in the plugin.

---

|        Back to ...         |                  |      z/OS Rexx Executor      |                                                         Latest Version                                                          |
|:--------------------------:|:----------------:|:----------------------------:|:-------------------------------------------------------------------------------------------------------------------------------:|
| [All Plugins](../index.md) | [Top](#contents) | [Readme](zos-rexx/README.md) | [2.1168947](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/zos-rexx/ucd-plugins-zos-rexx-2.1168947.zip) |
