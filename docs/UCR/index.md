---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "IBM DevOps Release"
  text: "Plugins Documentation"
  image:
    light: "/release_black.png"
    dark: "/release_white.png"
    alt: "DevOps Release"
  actions:
    - theme: brand
      text: Get started with IBM DevOps Release
      link: https://www.ibm.com/docs/en/devops-release/7.0.0?=overview-devops-release

    - theme: alt
      text: Learn more about Plug-ins
      link: https://www.ibm.com/docs/en/devops-release/7.0.0?topic=functions-plug-ins

    - theme: alt
      text: Community
      link: https://community.ibm.com/
    - theme: alt
      text: Get help
      link: https://www.ibm.com/mysupport/s/?language=en_US


features:
- 
  title: Ansible Tower
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Red Hat© Ansible© Tower centralize and control your IT infrastructure with a visual dashboard, role-based access  control, job scheduling, integrated notifications and graphical inventory management. The Ansible Tower plug-in"
  link: "plugin/ucr-plugin-ansible/README"
-
  title: CA Nolio
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The CA Nolio plug-in provides for the integration of UrbanCode Release with CA Release Automation Server. The plugin  supports sync of Applications, Environments, Application Processes, Snapshots (Deployment Plan), and Inventories. It  also handles the execution of generic processes. Both full and delta synchronization is supported."
  link: "plugin/ucr-plugin-nolio/README"
-
  title: Deployment Reports
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The IBM UrbanCode Release Deployment Reports plugin provides an example of using the UCR plugin framework and Java REST  API client introduced in UCR 6.1.1.0 to generate email based reports. Two example report formats are included, which are  rendered using data extracted from UCR via the REST API and rendered into HTML content via the Apache Velocity template  engine. The reports are delivered using the same email notification configuration used by the main UCR product into  which the plugin is deployed."
  link: "plugin/DeployReport/README"
-
  title: HP Quality Center (ALM)
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The HP ALM plugin for UrbanCode Release provides visibility into project entities, such as defects and requirements,  from the impact analysis view of UrbanCode Release."
  link: "plugin/ucr-plugin-hp-alm/README"
-
  title: IBM UrbanCode Deploy
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The IBM UrbanCode Deploy plug-in provides a full integration between IBM UrbanCode Release and IBM UrbanCode Deploy. It  replaces the built-in integration for versions 6.1.1.5 and later of IBM UrbanCode Release. The plug-in also improves  performance for the first full synchronization and for delta updates on subsequent synchronizations."
  link: "plugin/ibm-urbancode-deploy/README"
-
  title: Jenkins for IBM UrbanCode Release
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Jenkins is a continuous integration server that utilizes a plug-in model to support interactions with other DevOps  products. Jenkins jobs can be synchronized using the Jenkins plug-in for IBM UrbanCode Release with the UrbanCode  Release server allowing Jenkin jobs to be ran as part of a release plan."
  link: "plugin/ucr-jenkins-ci/README"
-
  title: Jira for IBM UrbanCode Release
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Jira is an issue tracking tool. You can use the tool to capture and organize issues, assign work, and track activities.  Issues can be anything from development tasks, code errors, project tasks, help-desk tickets, or human resource request  forms. The JIRA product is developed by Atlassian."
  link: "plugin/ucr-plugin-jira/README"
-
  title: Microsoft Team Foundation Server (TFS)
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Microsoft TFS plugin for UrbanCode Release provides visibility into work items from the impact analysis view of  UrbanCode Release. Visual Studio Team Services (formerly VSO) is also supported."
  link: "plugin/ucr-plugin-tfs/README"
-
  title: Rally
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Rally is an Agile project management tool for planning, scheduling, and tracking iterations and releases."
  link: "plugin/Rally/README"
-
  title: Rational Team Concert v6
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM Rational Team Concert integrates task tracking, source control, and agile planning with continuous builds and a  configurable process to adapt to the way you work. Compatibility:"
  link: "plugin/RTC/README"
-
  title: ServiceNow
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The ServiceNow plug-in allows UrbanCode Release to perform create, read, update and delete operations on ServiceNow  records. This plug-in also evaluates SNOW approvals and resolve UrbanCode Release Deployments phase approvals."
  link: "plugin/servicenow-4/README"
-
  title: Slack for IBM UrbanCode Release
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Slack is a team collaboration tool. This plug-in sends notifications to Slack in a specified channel."
  link: "plugin/ucr-plugin-slack/README"
-
  title: XL Deploy
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The XL Deploy plug-in provides for integration of UrbanCode Release with an XebiaLabs XL Deploy server. The plug-in  imports applications, environments, deployment packages, and deployment tasks from XL Deploy as objects in UrbanCode  Release. Both full and delta synchronization are supported."
  link: "plugin/ucr-xl-deploy/README"
---

