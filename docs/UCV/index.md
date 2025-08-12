---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "IBM DevOps Velocity"
  text: "Plugins Documentation"
  image:
    light: "velocity_black.png"
    dark: "velocity_white.png"
    alt: "DevOps Velocity"
  actions:
    - theme: brand
      text: Get started with IBM DevOps Velocity
      link: https://www.ibm.com/docs/en/devops-velocity/latest?topic=getting-started

    - theme: alt
      text: Learn more about Plug-ins
      link: https://www.ibm.com/docs/en/devops-velocity/latest?topic=functions-introducing-plugins

    - theme: alt
      text: Community
      link: https://community.ibm.com/community/user/blogs/osman-burucu/2022/07/20/using-plug-ins-in-urbancode-velocity

    - theme: alt
      text: Get help
      link: https://www.ibm.com/mysupport/s/?language=en_US


features:
-
  title: Aha!
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Aha! plug-in is used to integrate Aha! application with DevOps Velocity(Velocity). The plug-in extracts the Product Value of an Aha! feature to store it as business value in the Jira issues linked with the Aha! feature and displays it in value streams. The business value associated with the value stream will help you to prioritize your work based on the features that are most valuable for customers. **Note**: Currently you can only see the business value only for the Aha! issues that are linked to a Jira issue in the value stream. New search capability is added to filter the value stream dot consisting of business value using DQL search. You can use issue.businessValue item in the DQL search to filter the value stream dots associated with business value. See, DevOps query language (DQL)."
  link: "plugin/ucv-ext-aha/README"
-
  title: Apache JMeter
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Apache JMeter is a testing tool to analyze and measure web application performance. The JMeter plug-in imports the test results  data in DevOps Velocity metrics."
  link: "plugin/ucv-ext-jmeter/README"
-
  title: Azure DevOps
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Azure DevOps (formerly Microsoft Team Foundation Server (TFS) or Microsoft TFS)provides services to manage end-to-end  flow of a development project. It contains services to share code, track work, and ship software."
  link: "plugin/ucv-ext-azure/README"
-
  title: BitBucket Cloud
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "BitBucket Cloud is a source code version control repository hosting service owned by Atlassian. It contains tools to manage source code for a project."
  link: "plugin/ucv-ext-bitbucket-cloud/README"
-
  title: BitBucket Server
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "BitBucket Server is a source code version control repository hosting service owned by Atlassian. It contains tools to manage source code for a project."
  link: "plugin/ucv-ext-bitbucket-server/README"
-
  title: Black Duck
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Black Duck by Synopsys identifies open source related vulnerabilities in applications and containers. It tracks the open  source in code, mitigate security and license compliance, and automates enforcing open source policies."
  link: "plugin/ucv-ext-blackduck/README"
-
  title: Bottleneck Detection
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The DevOps Velocity bottleneck detection plug-in monitors, detects, and alerts the user to the existence of bottlenecks in a value stream. A value stream bottleneck is a restriction in the local throughput that limits the global throughput of a system. The plug-in process uses work item stage-change data in concert with three individual algorithms in order to detect the presence of a bottleneck. Each individual algorithm monitors a value stream for the presence of a specific type of bottleneck. Detected bottlenecks are written to the metrics collection in the form of a bottleneck location (value stream and stage), detection message for display, and measure of bottleneck severity used for display prioritization."
  link: "plugin/ucv-ext-bottleneck-detection/README"
-
  title: CircleCI
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "CircleCI is a modern continuous integration and continuous delivery (CI/CD) platform. CircleCI automates build, test, and deployment of software."
  link: "plugin/ucv-ext-circleci/README"
-
  title: Code Coverage
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Code Coverage plug-in allows for parsing of data from several code coverage tool. Included are LCOV, Cobertura,  JaCoCo, and Clover data."
  link: "plugin/ucv-ext-coverage-core/README"
-
  title: CollabNet VersionOne
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "CollabNet VersionOne is a web-based project management tool. It manages the entire software development life cycle."
  link: "plugin/ucv-ext-versionone/README"
-
  title: Cucumber
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Cucumber is a software testing tool that runs automated acceptance tests written in a behavior-driven development (BDD)  style. BDD testing focuses on the behaviour of the product."
  link: "plugin/ucv-ext-cucumber/README"
-
  title: Cypress
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Cypress provides a testing framework for the Java programming language. The Cypress plug-in imports the test results data in DevOps Velocity metrics."
  link: "plugin/ucv-ext-cypress/README"
-
  title: DevOps Build
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "DevOps Build is a distributed, multi-platform, enterprise-scale build management tool for configuring and running software builds. The DevOps Build plug-in for IBM DevOps Velocity imports build data from DevOps Build into IBM DevOps Velocity. Build activities can be mapped in the IBM DevOps Velocity pipeline and build results can be tracked from the pipeline."
  link: "plugin/ucv-ext-build/README"
-
  title: DevOps Control
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "DevOps Control is a Git repository hosting service. The DevOps Control plug-in enables users to import Git artifacts by querying pull requests and commit, facilitating seamless integration and management of project resources."
  link: "plugin/ucv-ext-control/README"
-
  title: DevOps Deploy
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "DevOps Deploy is engineered to handle the most complex deployment situations with push-button automation and controlled auditing needed in production. DevOps Deploy automates application deployments across varying IT environments. The Deploy Plugin for DevOps Velocity imports deployment data from DevOps Deploy into DevOps Velocity. Applications in DevOps Deploy can be mapped in the DevOps Velocity pipeline and the application versions can be tracked from the pipeline."
  link: "plugin/ucv-ext-ucd/README"
-
  title: DevOps Plan
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "DevOps Plan is a comprehensive change tracking system for software development environments. The DevOps Plan plug-in provides an integration with DevOps Plan server to import and synchronize DevOps Plan issues into an IBM DevOps Velocity server."
  link: "plugin/ucv-ext-plan/README"
-
  title: DevOps Test
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The DevOps Test tool provides automated software testing. This plug-in provides integration of Functional, Performance and Web UI test results (JSON) into the IBM DevOps Velocity."
  link: "plugin/ucv-ext-onetest/README"
-
  title: DevOps Test Hub
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "DevOps Test Hub is a web-based continuous testing platform built on modern, cloud native technologies that enables test teams to run a breadth of tests that includes API, functional, and performance tests and to benefit from a holistic view of test progress"
  link: "plugin/ucv-ext-onetest-server/README"
-
  title: Digital.ai Agility
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Digital.ai.Agility is Enterprise level planning and tracking platform to build agile practices that scale across the  enterprise."
  link: "plugin/ucv-ext-agility/README"
-
  title: Fortify SSC
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Fortify Software security center (SSC) enables teams with the application security program automation capabilities. It enables to manage, develop, and provide security for the software protection activities."
  link: "plugin/ucv-ext-fortify-ssc/README"
-
  title: GenAI summary release IBM
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The GenAI Summary Release - IBM plugin for IBM DevOps Velocity is designed to streamline and enhance your workflow by automatically generating concise business value summaries for candidate releases. Leveraging cutting-edge generative AI technology, this plugin interprets issue data to provide meaningful summaries that can be directly used in your business communications. |Back to ...||GenAI summary release-IBM|Latest Version| | :---: | :---: | :---: | :---: | |[All Plugins](../index.md)|[Top](#contents)|[Readme](ucv-ext-release-summary-ibm/README.md)|[1.0.7](https://hub.docker.com/r/urbancode/ucv-ext-release-summary-ibm/tags)|"
  link: "plugin/ucv-ext-release-summary-ibm/README"
-
  title: GenAI summary release OpenAI
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The GenAI Summary Release - OpenAI plugin for IBM DevOps Velocity is designed to streamline and enhance your workflow by automatically generating concise business value summaries for candidate releases. Leveraging cutting-edge generative AI technology, this plugin interprets issue data to provide meaningful summaries that can be directly used in your business communications. |Back to ...||GenAI summary release-OpenAI|Latest Version| | :---: | :---: | :---: | :---: | |[All Plugins](../index.md)|[Top](#contents)|[Readme](ucv-ext-release-summary-openai/README.md)|[1.0.3](https://hub.docker.com/r/urbancode/ucv-ext-release-summary-openai/tags)|"
  link: "plugin/ucv-ext-release-summary-openai/README"
-
  title: GitHub
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "GitHub is a Git repository hosting service. It provides tools to manage artifacts on the Git repository. The GitHub  plug-in imports Git artifacts based on queries for issues, commits and pull requests."
  link: "plugin/ucv-ext-github/README"
-
  title: GitHub Dependabot
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Github Dependabot plug-in scans package dependency vulnerabilities as Dependabot alerts from GitHub."
  link: "plugin/ucv-ext-dependabot/README"
-
  title: GitLab
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "GitLab provides management of git repositories. The GitLab plug-in imports issues, commits, merge requests and builds  from a GitLab server."
  link: "plugin/ucv-ext-gitlab/README"
-
  title: HCL AppScan Enterprise (ASE)
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "AppScan Enterprise delivers scalable application security testing and risk management capabilities, to help enterprises  manage risk and compliance. AppScan enables security, DevOps teams to collaborate, establish policies, and perform  testing throughout the application development lifecycle. The AppScan Enterprise plug-in imports scan results to  insights."
  link: "plugin/ucv-ext-appscan/README"
-
  title: HCL AppScan on Cloud (ASoC)
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "HCL AppScan on Cloud (ASoC) is an application security offering that allows you to scan a web URL for security  vulnerabilities."
  link: "plugin/ucv-ext-asoc/README"
-
  title: Handlebar Reporter
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Handlebars is a simple templating language. It can be used to generate HTML or other text formats from a template and  input object."
  link: "plugin/ucv-ext-handlebars-reporter/README"
-
  title: IBM DevOps Test Hub
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "IBM DevOps Test Hub is a fully-containerized (Docker) server component used by test teams to consolidate  testing from each of the Test Workbench products into a single view."
  link: "plugin/ucv-ext-rtas/README"
-
  title: IBM Engineering Workflow Management (EWM)
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The IBM Engineering Workflow Management (EWM) plug-in, previously known as the IBM Rational Team Concert, provides  integration with the IBM Workflow Management (EWM) server. This plug-in imports work items from an IBM EWM server to an  DevOps Velocity value stream map."
  link: "plugin/ucv-ext-ewm/README"
-
  title: Jenkins
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "A new plug-in for Jenkins works as any other plug-ins of DevOps Velocity. The old plugin has been renamed to Jenkins (Legacy). The Jenkins plug-in pull jobs from Jenkins and provide as an Input to the release pipelines and as an automation task in deployment plan."
  link: "plugin/ucv-ext-jenkins/README"
-
  title: JUnit
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "JUnit provides a testing framework for the Java programming language. The JUnit plug-in imports the test results data into IBM DevOps Velocity metrics dashboard."
  link: "plugin/ucv-ext-junit/README"
-
  title: Jira
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Jira is an issue tracking product, developed by Atlassian. The Jira plug-in provides an integration with Jira to import  and work with Jira work items."
  link: "plugin/ucv-ext-jira/README"
-
  title: Jira Service Management
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Jira Service Management is an issue tracking product, developed by Atlassian. The Jira Service Management plug-in provides an integration with Jira Service Management to import and work with Jira Service Management incidents."
  link: "plugin/ucv-ext-jira-service-management/README"
-
  title: Microsoft Visual Studio Testing
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Microsoft Visual Studio is a testing framework which is used to define and run unit tests to verify and maintain code integerty."
  link: "plugin/ucv-ext-vs-quality/README"
-
  title: Milestone Risk Estimator
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Milestone Risk Estimator plug-in represents an innovative Machine Learning(ML) solution designed to enhance value stream management by providing accurate sprint risk estimates. The projected outcomes are presented through metrics, enabling more effective sprint management for increased productivity."
  link: "plugin/ucv-ext-milestone-risk-estimator/README"
-
  title: Njs-Unit
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "You can visualize unit test results for given applications or value streams or teams in graphical format on the insight page."
  link: "plugin/ucv-ext-njs-unit/README"
-
  title: Planview Leankit
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Planview Leankit plugin processes incoming data from Planview LeanKit server."
  link: "plugin/ucv-ext-leankit/README"
-
  title: Rally
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Rally is an Agile project management tool for planning, scheduling, and tracking iterations and releases. The Rally  plug-in provides for integration with a Rally server. It imports Rally artifacts into the DevOps Velocity server."
  link: "plugin/ucv-ext-rally/README"
-
  title: SAP ChaRM
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The SAP ChaRM plug-in will sync SAP Normal Changes in SAP's Change Request Management with Jira issues ."
  link: "plugin/ucv-ext-sap-charm/README"
-
  title: Selenium
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: ""
  link: "plugin/selenium-ucv/README"
-
  title: ServiceNow
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The ServiceNow plug-in for IBM DevOps Velocity automates the importing of ServiceNow incident management(Beta),  change management and problem management data from a ServiceNow server."
  link: "plugin/ucv-ext-servicenow/README"
-
  title: Shell
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Shell plug-in for IBM DevOps Velocity automates the task in releases."
  link: "plugin/ucv-ext-shell/README"
-
  title: Snyk
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The Snyk plug-in scans GitHub , GitLab and Bitbucket repositories package dependency vulnerabilities from Snyk . Works on top of existing GiHub , GitLab or Bitbucket integraions."
  link: "plugin/ucv-ext-snyk/README"
-
  title: SonarQube
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "SonarQube is an open source tool suite to measure and analyze the quality of source code. It focuses on the following  code quality areas, which are referred to as the “7 axes of code quality”: comments, architecture and design,  duplication, coding rules, potential bugs, unit tests, and complexity."
  link: "plugin/ucv-ext-sonarqube/README"
-
  title: TestComplete
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: ""
  link: "plugin/testcomplete-ucv/README"
-
  title: TestNG
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "TestNG is a testing framework for Java programming. This plug-in provides integration of testing results into the  DevOps Velocity server."
  link: "plugin/ucv-ext-testng/README"
-
  title: Twistlock
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "Twistlock provides container security. It is a rule-based access control policy system for Docker and Kubernetes  containers. The Twistlock plug-in imports the Twistlock data in DevOps Velocity metrics."
  link: "plugin/ucv-ext-twistlock/README"
-
  title: urbancode-velocity
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "With this Jenkins plugin, you can run Jenkins jobs as a part of a deployment plan in DevOps Velocity. You can run jobs that will trigger the creation of a version in a Velocity Pipeline as well as persist properties on that version that can be used as input properties in other Jenkins builds. This plugin will pass along important data from Git to the Velocity Pipeline."
  link: "plugin/urbancode-velocity/README"
-
  title: WhiteSource
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "WhiteSource identifies all open source components and their dependencies in software. WhiteSource secures software from vulnerabilities and enforces license policies throughout the software development lifecycle. The WhiteSource plug-in retrieves WhiteSource scan results and displays the License Risks and Security Vulnerabilities in IBM DevOps Velocity metric displays."
  link: "plugin/ucv-ext-whitesource/README"
-
  title: YAML Executor
  icon:
    light: "/runProcess-dark.png"
    dark: "/runProcess-white.png"
  details: "The YAML Executor plug-in automates the initial setup process for integrating different CI/CD tools into DevOps Velocity. You can define the integration configurations in a YAML file and apply it in DevOps Velocity to automate the integration process."
  link: "plugin/ucv-ext-yaml-executor/README"
---

