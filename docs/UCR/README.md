
# Welcome to UrbanCode Release Plugins

## Contents

- [Welcome to UrbanCode Release Plugins](#welcome-to-urbancode-release-plugins)
	- [Contents](#contents)
- [List of all Plugins](#list-of-all-plugins)
	- [Ansible Tower](#ansible-tower)
	- [CA Nolio](#ca-nolio)
	- [Deployment Reports](#deployment-reports)
	- [HP Quality Center (ALM)](#hp-quality-center-alm)
	- [IBM UrbanCode Deploy](#ibm-urbancode-deploy)
	- [Jenkins for IBM UrbanCode Release](#jenkins-for-ibm-urbancode-release)
	- [Jira for IBM UrbanCode Release](#jira-for-ibm-urbancode-release)
	- [Microsoft Team Foundation Server (TFS)](#microsoft-team-foundation-server-tfs)
	- [Rally](#rally)
	- [Rational Team Concert v6](#rational-team-concert-v6)
	- [ServiceNow](#servicenow)
	- [Slack for IBM UrbanCode Release](#slack-for-ibm-urbancode-release)
	- [XL Deploy](#xl-deploy)

# List of all Plugins

## Ansible Tower

The Red Hat© Ansible© Tower centralize and control your IT infrastructure with a visual dashboard, role-based access  control, job scheduling, integrated notifications and graphical inventory management. The Ansible Tower plug-in

---

|Back to ...||Ansible Tower |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ucr-plugin-ansible/README.md)|[3.1145832](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/ucr-plugin-ansible/ucr-plugin-ansible-tower-3.1145832.zip)|

## CA Nolio

The CA Nolio plug-in provides for the integration of UrbanCode Release with CA Release Automation Server. The plugin  supports sync of Applications, Environments, Application Processes, Snapshots (Deployment Plan), and Inventories. It  also handles the execution of generic processes. Both full and delta synchronization is supported.

---

|Back to ...||CA Nolio |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ucr-plugin-nolio/README.md)|[4.1036957](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/ucr-plugin-nolio/ucr-plugin-nolio-4.1036957.zip)|

## Deployment Reports

The IBM UrbanCode Release Deployment Reports plugin provides an example of using the UCR plugin framework and Java REST  API client introduced in UCR 6.1.1.0 to generate email based reports. Two example report formats are included, which are  rendered using data extracted from UCR via the REST API and rendered into HTML content via the Apache Velocity template  engine. The reports are delivered using the same email notification configuration used by the main UCR product into  which the plugin is deployed.

---

|Back to ...||Deployment Reports |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](DeployReport/README.md)|[7.1018228](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/DeployReport/ucr-plugin-deployment-reports-7.1018228.zip)|

## HP Quality Center (ALM)

The HP ALM plugin for UrbanCode Release provides visibility into project entities, such as defects and requirements,  from the impact analysis view of UrbanCode Release.

---

|Back to ...||HP Quality Center (ALM) |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ucr-plugin-hp-alm/README.md)|[5.942932](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/ucr-plugin-hp-alm/HP-ALM-5.942932.zip)|

## IBM UrbanCode Deploy

The IBM UrbanCode Deploy plug-in provides a full integration between IBM UrbanCode Release and IBM UrbanCode Deploy. It  replaces the built-in integration for versions 6.1.1.5 and later of IBM UrbanCode Release. The plug-in also improves  performance for the first full synchronization and for delta updates on subsequent synchronizations.

---

|Back to ...||IBM UrbanCode Deploy |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ibm-urbancode-deploy/README.md)|[10.1175503](https://github.com/UrbanCode/IBM-UCR-PLUGINS/blob/main/files/ucr-plugin-deploy/ucr-plugin-deploy-10.1175503.zip)|

## Jenkins for IBM UrbanCode Release

Jenkins is a continuous integration server that utilizes a plug-in model to support interactions with other DevOps  products. Jenkins jobs can be synchronized using the Jenkins plug-in for IBM UrbanCode Release with the UrbanCode  Release server allowing Jenkin jobs to be ran as part of a release plan.

---

|Back to ...||Jenkins for IBM UrbanCode Release |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ucr-jenkins-ci/README.md)|[2.1124702](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/ucr-jenkins-ci/plugins-ucr-jenkins-ci-2.1124702.zip)|

## Jira for IBM UrbanCode Release

Jira is an issue tracking tool. You can use the tool to capture and organize issues, assign work, and track activities.  Issues can be anything from development tasks, code errors, project tasks, help-desk tickets, or human resource request  forms. The JIRA product is developed by Atlassian.

---

|Back to ...||Jira for IBM UrbanCode Release |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ucr-plugin-jira/README.md)|[18.1079383](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/ucr-plugin-jira/ucr-plugin-jira-18.1079383.zip)|

## Microsoft Team Foundation Server (TFS)

The Microsoft TFS plugin for UrbanCode Release provides visibility into work items from the impact analysis view of  UrbanCode Release. Visual Studio Team Services (formerly VSO) is also supported.

---

|Back to ...||Microsoft Team Foundation Server (TFS) |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ucr-plugin-tfs/README.md)|[5.953540](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/ucr-plugin-tfs/ucr-plugin-tfs-5.953540.zip)|

## Rally

Rally is an Agile project management tool for planning, scheduling, and tracking iterations and releases.

---

|Back to ...||Rally |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](Rally/README.md)|[2.690437](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/Rally/ucr-plugin-rally-2.690437.zip)|

## Rational Team Concert v6

IBM Rational Team Concert integrates task tracking, source control, and agile planning with continuous builds and a  configurable process to adapt to the way you work. Compatibility:

---

|Back to ...||Rational Team Concert v6 |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](RTC/README.md)|[3.969559](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/RTC/ucr-plugin-rtc-3.969559.zip)|

## ServiceNow

The ServiceNow plug-in allows UrbanCode Release to perform create, read, update and delete operations on ServiceNow  records. This plug-in also evaluates SNOW approvals and resolve UrbanCode Release Deployments phase approvals.

---

|Back to ...||ServiceNow |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](servicenow-4/README.md)|[0]()|

## Slack for IBM UrbanCode Release

Slack is a team collaboration tool. This plug-in sends notifications to Slack in a specified channel.

---

|Back to ...||Slack for IBM UrbanCode Release |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ucr-plugin-slack/README.md)|[3.1105509](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/ucr-plugin-slack/ucr-plugin-slack-3.1105509.zip)|

## XL Deploy

The XL Deploy plug-in provides for integration of UrbanCode Release with an XebiaLabs XL Deploy server. The plug-in  imports applications, environments, deployment packages, and deployment tasks from XL Deploy as objects in UrbanCode  Release. Both full and delta synchronization are supported.

---

|Back to ...||XL Deploy |Latest Version|
| :---: | :---: | :---: | :---: |
|[All Plugins](../index.md)|[Top](#contents)|[Readme](ucr-xl-deploy/README.md)|[6.1039808](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/ucr-xl-deploy/plugins-ucr-xl-deploy-6.1039808.zip)|
