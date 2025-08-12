import { defineConfig } from 'vitepress'

// Directory name for plugins
const VELOCITY_BASE_DIR = 'UCV';
const DEPLOY_BASE_DIR = 'UCD';
const BUILD_BASE_DIR = 'UCB';
const RELEASE_BASE_DIR = 'UCR';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/IBM-UCx-PLUGIN-DOCS-BETA/",
  title: "DevOps Plugins",
  description: "UrbanCode related Plug-In documentation site",
  appearance: "dark",
  lastUpdated: true,
  vite: {
    build: {
      chunkSizeWarningLimit: 4000, // Set your desired limit in KB
    },
    assetsInclude: ['**/*.PNG', '**/*.png']
  },
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/UrbanCode/IBM-UCx-PLUGIN-DOCS-BETA/edit/main/docs/:path'
    },
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    sidebar: {
      // This sidebar gets displayed when a user
      // is on `plugin/DeployReport` directory.
      [`/${RELEASE_BASE_DIR}/DeployReport/`]: [
        {
          text: 'Deployment Reports', // Changed title
          items: [
            { text: 'About', link: `${RELEASE_BASE_DIR}/DeployReport/README` },
            { text: 'Overview', link: `${RELEASE_BASE_DIR}/DeployReport/overview` },
            { text: 'Usage', link: `${RELEASE_BASE_DIR}/DeployReport/usage` },
            { text: 'Downloads', link: `${RELEASE_BASE_DIR}/DeployReport/downloads` },
            { text: 'Settings', link: `${RELEASE_BASE_DIR}/DeployReport/settings` } // Other items
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/RTC` directory.
      [`/${RELEASE_BASE_DIR}/RTC/`]: [
        {
          text: 'Rational Team Concert v6', // Changed title
          items: [
            { text: 'About', link: `${RELEASE_BASE_DIR}/RTC/README` },
            { text: 'Overview', link: `${RELEASE_BASE_DIR}/RTC/overview` },
            { text: 'Usage', link: `${RELEASE_BASE_DIR}/RTC/usage` },
            { text: 'Downloads', link: `${RELEASE_BASE_DIR}/RTC/downloads` },
            { text: 'Settings', link: `${RELEASE_BASE_DIR}/RTC/settings` } // Other items
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Rally` directory.
      [`/${RELEASE_BASE_DIR}/Rally/`]: [
        {
          text: 'Rally', // Changed title
          items: [
            { text: 'About', link: `${RELEASE_BASE_DIR}/Rally/README` },
            { text: 'Overview', link: `${RELEASE_BASE_DIR}/Rally/overview` },
            { text: 'Usage', link: `${RELEASE_BASE_DIR}/Rally/usage` },
            { text: 'Downloads', link: `${RELEASE_BASE_DIR}/Rally/downloads` },
            { text: 'Settings', link: `${RELEASE_BASE_DIR}/Rally/settings` } // Other items
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ibm-urbancode-deploy` directory.
      [`/${RELEASE_BASE_DIR}/ibm-urbancode-deploy/`]: [
        {
          text: 'IBM UrbanCode Deploy', // Changed title
          items: [
            { text: 'About', link: `${RELEASE_BASE_DIR}/ibm-urbancode-deploy/README` },
            { text: 'Overview', link: `${RELEASE_BASE_DIR}/ibm-urbancode-deploy/overview` },
            { text: 'Usage', link: `${RELEASE_BASE_DIR}/ibm-urbancode-deploy/usage` },
            { text: 'Downloads', link: `${RELEASE_BASE_DIR}/ibm-urbancode-deploy/downloads` },
            { text: 'Settings', link: `${RELEASE_BASE_DIR}/ibm-urbancode-deploy/settings` } // Other items
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/servicenow-4` directory.
      [`/${RELEASE_BASE_DIR}/servicenow-4/`]: [
        {
          text: 'ServiceNow', // Changed title
          items: [
            { text: 'About', link: `${RELEASE_BASE_DIR}/servicenow-4/README` },
            { text: 'Overview', link: `${RELEASE_BASE_DIR}/servicenow-4/overview` },
            { text: 'Usage', link: `${RELEASE_BASE_DIR}/servicenow-4/usage` },
            { text: 'Steps', link: `${RELEASE_BASE_DIR}/servicenow-4/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucr-jenkins-ci` directory.
      [`/${RELEASE_BASE_DIR}/ucr-jenkins-ci/`]: [
        {
          text: 'Jenkins for IBM UrbanCode Release', // Changed title
          items: [
            { text: 'About', link: `${RELEASE_BASE_DIR}/ucr-jenkins-ci/README` },
            { text: 'Overview', link: `${RELEASE_BASE_DIR}/ucr-jenkins-ci/overview` },
            { text: 'Usage', link: `${RELEASE_BASE_DIR}/ucr-jenkins-ci/usage` },
            { text: 'Steps', link: `${RELEASE_BASE_DIR}/ucr-jenkins-ci/steps` },
            { text: 'Downloads', link: `${RELEASE_BASE_DIR}/ucr-jenkins-ci/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucr-plugin-ansible` directory.
      [`/${RELEASE_BASE_DIR}/ucr-plugin-ansible/`]: [
        {
          text: 'Ansible Tower', // Changed title
          items: [
            { text: 'About', link: `${RELEASE_BASE_DIR}/ucr-plugin-ansible/README` },
            { text: 'Overview', link: `${RELEASE_BASE_DIR}/ucr-plugin-ansible/overview` },
            { text: 'Usage', link: `${RELEASE_BASE_DIR}/ucr-plugin-ansible/usage` },
            { text: 'Steps', link: `${RELEASE_BASE_DIR}/ucr-plugin-ansible/steps` },
            { text: 'Downloads', link: `${RELEASE_BASE_DIR}/ucr-plugin-ansible/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucr-plugin-hp-alm` directory.
      [`/${RELEASE_BASE_DIR}/ucr-plugin-hp-alm/`]: [
        {
          text: 'HP Quality Center (ALM)', // Changed title
          items: [
            { text: 'About', link: `${RELEASE_BASE_DIR}/ucr-plugin-hp-alm/README` },
            { text: 'Overview', link: `${RELEASE_BASE_DIR}/ucr-plugin-hp-alm/overview` },
            { text: 'Downloads', link: `${RELEASE_BASE_DIR}/ucr-plugin-hp-alm/downloads` },
            { text: 'Settings', link: `${RELEASE_BASE_DIR}/ucr-plugin-hp-alm/settings` } // Other items
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucr-plugin-jira` directory.
      [`/${RELEASE_BASE_DIR}/ucr-plugin-jira/`]: [
        {
          text: 'Jira for IBM UrbanCode Release', // Changed title
          items: [
            { text: 'About', link: `${RELEASE_BASE_DIR}/ucr-plugin-jira/README` },
            { text: 'Overview', link: `${RELEASE_BASE_DIR}/ucr-plugin-jira/overview` },
            { text: 'Downloads', link: `${RELEASE_BASE_DIR}/ucr-plugin-jira/downloads` },
            { text: 'Settings', link: `${RELEASE_BASE_DIR}/ucr-plugin-jira/settings` } // Other items
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucr-plugin-nolio` directory.
      [`/${RELEASE_BASE_DIR}/ucr-plugin-nolio/`]: [
        {
          text: 'CA Nolio', // Changed title
          items: [
            { text: 'About', link: `${RELEASE_BASE_DIR}/ucr-plugin-nolio/README` },
            { text: 'Overview', link: `${RELEASE_BASE_DIR}/ucr-plugin-nolio/overview` },
            { text: 'Downloads', link: `${RELEASE_BASE_DIR}/ucr-plugin-nolio/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucr-plugin-slack` directory.
      [`/${RELEASE_BASE_DIR}/ucr-plugin-slack/`]: [
        {
          text: 'Slack for IBM UrbanCode Release', // Changed title
          items: [
            { text: 'About', link: `${RELEASE_BASE_DIR}/ucr-plugin-slack/README` },
            { text: 'Overview', link: `${RELEASE_BASE_DIR}/ucr-plugin-slack/overview` },
            { text: 'Usage', link: `${RELEASE_BASE_DIR}/ucr-plugin-slack/usage` },
            { text: 'Steps', link: `${RELEASE_BASE_DIR}/ucr-plugin-slack/steps` },
            { text: 'Downloads', link: `${RELEASE_BASE_DIR}/ucr-plugin-slack/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucr-plugin-tfs` directory.
      [`/${RELEASE_BASE_DIR}/ucr-plugin-tfs/`]: [
        {
          text: 'Microsoft Team Foundation Server (TFS)', // Changed title
          items: [
            { text: 'About', link: `${RELEASE_BASE_DIR}/ucr-plugin-tfs/README` },
            { text: 'Overview', link: `${RELEASE_BASE_DIR}/ucr-plugin-tfs/overview` },
            { text: 'Downloads', link: `${RELEASE_BASE_DIR}/ucr-plugin-tfs/downloads` },
            { text: 'Settings', link: `${RELEASE_BASE_DIR}/ucr-plugin-tfs/settings` } // Other items
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucr-xl-deploy` directory.
      [`/${RELEASE_BASE_DIR}/ucr-xl-deploy/`]: [
        {
          text: 'XL Deploy', // Changed title
          items: [
            { text: 'About', link: `${RELEASE_BASE_DIR}/ucr-xl-deploy/README` },
            { text: 'Overview', link: `${RELEASE_BASE_DIR}/ucr-xl-deploy/overview` },
            { text: 'Usage', link: `${RELEASE_BASE_DIR}/ucr-xl-deploy/usage` },
            { text: 'Steps', link: `${RELEASE_BASE_DIR}/ucr-xl-deploy/steps` },
            { text: 'Downloads', link: `${RELEASE_BASE_DIR}/ucr-xl-deploy/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/AccuRev` directory.
      [`/${BUILD_BASE_DIR}/AccuRev/`]: [
        {
          text: 'AccuRev',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/AccuRev/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/AccuRev/overview` },
            { text: 'Settings', link: `${BUILD_BASE_DIR}/AccuRev/settings` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/AccuRev/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/AccuWork` directory.
      [`/${BUILD_BASE_DIR}/AccuWork/`]: [
        {
          text: 'AccuWork',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/AccuWork/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/AccuWork/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/AccuWork/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/AccuWork/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Ant` directory.
      [`/${BUILD_BASE_DIR}/Ant/`]: [
        {
          text: 'Ant',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Ant/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Ant/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/Ant/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Ant/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Artifactory` directory.
      [`/${BUILD_BASE_DIR}/Artifactory/`]: [
        {
          text: 'Artifactory for IBM DevOps Build',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Artifactory/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Artifactory/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/Artifactory/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Artifactory/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ClearCaseBaseSnapshot` directory.
      [`/${BUILD_BASE_DIR}/ClearCaseBaseSnapshot/`]: [
        {
          text: 'ClearCase Base Snapshot',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/ClearCaseBaseSnapshot/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/ClearCaseBaseSnapshot/overview` },
            { text: 'Usage', link: `${BUILD_BASE_DIR}/ClearCaseBaseSnapshot/usage` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/ClearCaseBaseSnapshot/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/ClearCaseBaseSnapshot/downloads` },
            { text: 'Settings', link: `${BUILD_BASE_DIR}/ClearCaseBaseSnapshot/settings` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ClearCaseUCM` directory.
      [`/${BUILD_BASE_DIR}/ClearCaseUCM/`]: [
        {
          text: 'ClearCase UCM',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/ClearCaseUCM/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/ClearCaseUCM/overview` },
            { text: 'Usage', link: `${BUILD_BASE_DIR}/ClearCaseUCM/usage` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/ClearCaseUCM/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/ClearCaseUCM/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ClearQuest` directory.
      [`/${BUILD_BASE_DIR}/ClearQuest/`]: [
        {
          text: 'ClearQuest',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/ClearQuest/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/ClearQuest/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/ClearQuest/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/ClearQuest/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Clover` directory.
      [`/${BUILD_BASE_DIR}/Clover/`]: [
        {
          text: 'Clover',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Clover/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Clover/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/Clover/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Clover/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Cobertura` directory.
      [`/${BUILD_BASE_DIR}/Cobertura/`]: [
        {
          text: 'Cobertura',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Cobertura/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Cobertura/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/Cobertura/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Cobertura/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/CodeStation` directory.
      [`/${BUILD_BASE_DIR}/CodeStation/`]: [
        {
          text: 'CodeStation',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/CodeStation/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/CodeStation/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/CodeStation/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/CodeStation/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Control` directory.
      [`/${BUILD_BASE_DIR}/Control/`]: [
        {
          text: 'Control',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Control/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Control/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/Control/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Control/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/CppUnit` directory.
      [`/${BUILD_BASE_DIR}/CppUnit/`]: [
        {
          text: 'CppUnit',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/CppUnit/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/CppUnit/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/CppUnit/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/CppUnit/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Cucumber` directory.
      [`/${BUILD_BASE_DIR}/Cucumber/`]: [
        {
          text: 'Cucumber',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Cucumber/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Cucumber/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/Cucumber/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Cucumber/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Docker` directory.
      [`/${BUILD_BASE_DIR}/Docker/`]: [
        {
          text: 'Docker Build',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Docker/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Docker/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/Docker/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Docker/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/FileSystem` directory.
      [`/${BUILD_BASE_DIR}/FileSystem/`]: [
        {
          text: 'File System for IBM DevOps Build',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/FileSystem/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/FileSystem/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/FileSystem/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/FileSystem/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/FileUtils` directory.
      [`/${BUILD_BASE_DIR}/FileUtils/`]: [
        {
          text: 'File Utils for IBM DevOps Build',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/FileUtils/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/FileUtils/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/FileUtils/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/FileUtils/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/FindBugs` directory.
      [`/${BUILD_BASE_DIR}/FindBugs/`]: [
        {
          text: 'FindBugs',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/FindBugs/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/FindBugs/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/FindBugs/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/FindBugs/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Gerrit` directory.
      [`/${BUILD_BASE_DIR}/Gerrit/`]: [
        {
          text: 'Gerrit',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Gerrit/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Gerrit/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/Gerrit/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Gerrit/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Git` directory.
      [`/${BUILD_BASE_DIR}/Git/`]: [
        {
          text: 'Git for IBM DevOps Build',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Git/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Git/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/Git/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Git/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Groovy` directory.
      [`/${BUILD_BASE_DIR}/Groovy/`]: [
        {
          text: 'Groovy for IBM DevOps Build',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Groovy/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Groovy/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/Groovy/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Groovy/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/HPFortify` directory.
      [`/${BUILD_BASE_DIR}/HPFortify/`]: [
        {
          text: 'HP Fortify',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/HPFortify/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/HPFortify/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/HPFortify/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/HPFortify/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/HPQualityCenter` directory.
      [`/${BUILD_BASE_DIR}/HPQualityCenter/`]: [
        {
          text: 'HP Quality Center',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/HPQualityCenter/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/HPQualityCenter/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/HPQualityCenter/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/HPQualityCenter/downloads` },
            { text: 'Troubleshooting', link: `${BUILD_BASE_DIR}/HPQualityCenter/troubleshooting` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Harvest` directory.
      [`/${BUILD_BASE_DIR}/Harvest/`]: [
        {
          text: 'CA Harvest SCM',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Harvest/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Harvest/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/Harvest/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Harvest/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/JIRA` directory.
      [`/${BUILD_BASE_DIR}/JIRA/`]: [
        {
          text: 'JIRA for IBM DevOps Build',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/JIRA/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/JIRA/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/JIRA/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/JIRA/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/JUnit` directory.
      [`/${BUILD_BASE_DIR}/JUnit/`]: [
        {
          text: 'JUnit for IBM DevOps Build',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/JUnit/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/JUnit/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/JUnit/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/JUnit/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Jacoco` directory.
      [`/${BUILD_BASE_DIR}/Jacoco/`]: [
        {
          text: 'JaCoCo',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Jacoco/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Jacoco/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/Jacoco/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Jacoco/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/MSBuild` directory.
      [`/${BUILD_BASE_DIR}/MSBuild/`]: [
        {
          text: 'MSBuild',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/MSBuild/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/MSBuild/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/MSBuild/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/MSBuild/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/MSTest` directory.
      [`/${BUILD_BASE_DIR}/MSTest/`]: [
        {
          text: 'MSTest',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/MSTest/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/MSTest/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/MSTest/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/MSTest/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Make` directory.
      [`/${BUILD_BASE_DIR}/Make/`]: [
        {
          text: 'Make',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Make/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Make/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/Make/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Make/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Maven` directory.
      [`/${BUILD_BASE_DIR}/Maven/`]: [
        {
          text: 'Maven for IBM DevOps Build',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Maven/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Maven/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/Maven/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Maven/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Mercurial` directory.
      [`/${BUILD_BASE_DIR}/Mercurial/`]: [
        {
          text: 'Mercurial',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Mercurial/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Mercurial/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/Mercurial/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Mercurial/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Mocha` directory.
      [`/${BUILD_BASE_DIR}/Mocha/`]: [
        {
          text: 'Mocha',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Mocha/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Mocha/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/Mocha/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Mocha/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/NAnt` directory.
      [`/${BUILD_BASE_DIR}/NAnt/`]: [
        {
          text: 'NAnt',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/NAnt/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/NAnt/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/NAnt/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/NAnt/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/NCover` directory.
      [`/${BUILD_BASE_DIR}/NCover/`]: [
        {
          text: 'NCover',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/NCover/README` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/NCover/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/NPM` directory.
      [`/${BUILD_BASE_DIR}/NPM/`]: [
        {
          text: 'NPM for IBM DevOps Build',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/NPM/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/NPM/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/NPM/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/NPM/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/NUnit` directory.
      [`/${BUILD_BASE_DIR}/NUnit/`]: [
        {
          text: 'NUnit',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/NUnit/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/NUnit/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/NUnit/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/NUnit/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/PMD` directory.
      [`/${BUILD_BASE_DIR}/PMD/`]: [
        {
          text: 'PMD',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/PMD/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/PMD/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/PMD/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/PMD/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Perforce` directory.
      [`/${BUILD_BASE_DIR}/Perforce/`]: [
        {
          text: 'Perforce',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Perforce/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Perforce/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/Perforce/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Perforce/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Preflight` directory.
      [`/${BUILD_BASE_DIR}/Preflight/`]: [
        {
          text: 'Preflight',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Preflight/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Preflight/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/Preflight/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Preflight/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/QTP` directory.
      [`/${BUILD_BASE_DIR}/QTP/`]: [
        {
          text: 'QTP',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/QTP/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/QTP/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/QTP/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/QTP/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/RTCWorkItems` directory.
      [`/${BUILD_BASE_DIR}/RTCWorkItems/`]: [
        {
          text: 'Rational Team Concert Work Items',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/RTCWorkItems/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/RTCWorkItems/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/RTCWorkItems/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/RTCWorkItems/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Rake` directory.
      [`/${BUILD_BASE_DIR}/Rake/`]: [
        {
          text: 'Rake',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Rake/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Rake/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/Rake/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Rake/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Rally` directory.
      [`/${BUILD_BASE_DIR}/Rally/`]: [
        {
          text: 'Rally for IBM DevOps Build',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Rally/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Rally/overview` },
            { text: 'Steps and settings', link: `${BUILD_BASE_DIR}/Rally/steps and settings` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Rally/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/RationalAppScan` directory.
      [`/${BUILD_BASE_DIR}/RationalAppScan/`]: [
        {
          text: 'IBM Security AppScan Source',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/RationalAppScan/README` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/RationalAppScan/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/RationalTeamConcert` directory.
      [`/${BUILD_BASE_DIR}/RationalTeamConcert/`]: [
        {
          text: 'Rational Team Concert SCM',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/RationalTeamConcert/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/RationalTeamConcert/overview` },
            { text: 'Steps and settings', link: `${BUILD_BASE_DIR}/RationalTeamConcert/steps and settings` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/RationalTeamConcert/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ReportPublisher` directory.
      [`/${BUILD_BASE_DIR}/ReportPublisher/`]: [
        {
          text: 'Report Publisher',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/ReportPublisher/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/ReportPublisher/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/ReportPublisher/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/ReportPublisher/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Reporting` directory.
      [`/${BUILD_BASE_DIR}/Reporting/`]: [
        {
          text: 'Reporting',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Reporting/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Reporting/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/Reporting/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Reporting/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Selenium` directory.
      [`/${BUILD_BASE_DIR}/Selenium/`]: [
        {
          text: 'Selenium for IBM DevOps Build',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Selenium/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Selenium/overview` },
            { text: 'Usage', link: `${BUILD_BASE_DIR}/Selenium/usage` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/Selenium/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Selenium/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Shell` directory.
      [`/${BUILD_BASE_DIR}/Shell/`]: [
        {
          text: 'Shell for IBM DevOps Build',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Shell/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Shell/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/Shell/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Shell/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Sonar` directory.
      [`/${BUILD_BASE_DIR}/Sonar/`]: [
        {
          text: 'SonarQube (formerly Sonar)',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Sonar/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Sonar/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/Sonar/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Sonar/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Sonargraph` directory.
      [`/${BUILD_BASE_DIR}/Sonargraph/`]: [
        {
          text: 'Sonargraph',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Sonargraph/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Sonargraph/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/Sonargraph/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Sonargraph/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Subversion` directory.
      [`/${BUILD_BASE_DIR}/Subversion/`]: [
        {
          text: 'Subversion for IBM DevOps Build',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Subversion/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Subversion/overview` },
            { text: 'Steps and settings', link: `${BUILD_BASE_DIR}/Subversion/steps and settings` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Subversion/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/TFS-WorkItems` directory.
      [`/${BUILD_BASE_DIR}/TFS-WorkItems/`]: [
        {
          text: 'TFS Work Items',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/TFS-WorkItems/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/TFS-WorkItems/overview` },
            { text: 'Steps and settings', link: `${BUILD_BASE_DIR}/TFS-WorkItems/steps and settings` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/TFS-WorkItems/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/TFS` directory.
      [`/${BUILD_BASE_DIR}/TFS/`]: [
        {
          text: 'Team Foundation Server',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/TFS/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/TFS/overview` },
            { text: 'Steps and settings', link: `${BUILD_BASE_DIR}/TFS/steps and settings` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/TFS/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/UCBUtils` directory.
      [`/${BUILD_BASE_DIR}/UCBUtils/`]: [
        {
          text: 'UCB Utilities',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/UCBUtils/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/UCBUtils/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/UCBUtils/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/UCBUtils/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/VisualStudio` directory.
      [`/${BUILD_BASE_DIR}/VisualStudio/`]: [
        {
          text: 'Visual Studio',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/VisualStudio/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/VisualStudio/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/VisualStudio/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/VisualStudio/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Xcode` directory.
      [`/${BUILD_BASE_DIR}/Xcode/`]: [
        {
          text: 'Xcode',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/Xcode/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/Xcode/overview` },
            { text: 'Usage', link: `${BUILD_BASE_DIR}/Xcode/usage` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/Xcode/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/Xcode/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/bluemix-deployment-risk-analytics` directory.
      [`/${BUILD_BASE_DIR}/bluemix-deployment-risk-analytics/`]: [
        {
          text: 'DevOps Insights – Deployment Risk Analytics (DRA)',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/bluemix-deployment-risk-analytics/README` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/bluemix-deployment-risk-analytics/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/checkstyle` directory.
      [`/${BUILD_BASE_DIR}/checkstyle/`]: [
        {
          text: 'Checkstyle',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/checkstyle/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/checkstyle/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/checkstyle/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/checkstyle/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/gradle-2` directory.
      [`/${BUILD_BASE_DIR}/gradle-2/`]: [
        {
          text: 'Gradle for IBM DevOps Build',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/gradle-2/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ibm-dbb` directory.
      [`/${BUILD_BASE_DIR}/ibm-dbb/`]: [
        {
          text: 'IBM Dependency Based Build',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/ibm-dbb/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/ibm-dbb/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/ibm-dbb/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/ibm-dbb/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ibmucd` directory.
      [`/${BUILD_BASE_DIR}/ibmucd/`]: [
        {
          text: 'IBM DevOps Deploy for IBM DevOps Build',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/ibmucd/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/ibmucd/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/ibmucd/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/ibmucd/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/jac` directory.
      [`/${BUILD_BASE_DIR}/jac/`]: [
        {
          text: 'Job As Code',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/jac/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/logigear-testarchitect-2` directory.
      [`/${BUILD_BASE_DIR}/logigear-testarchitect-2/`]: [
        {
          text: 'LogiGear TestArchitect for IBM DevOps Build',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/logigear-testarchitect-2/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/salesforce` directory.
      [`/${BUILD_BASE_DIR}/salesforce/`]: [
        {
          text: 'Salesforce',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/salesforce/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/salesforce/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/salesforce/steps` },
            { text: 'Downloads', link: `${BUILD_BASE_DIR}/salesforce/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/urbancode-velocity` directory.
      [`/${BUILD_BASE_DIR}/urbancode-velocity/`]: [
        {
          text: 'DevOps Velocity',
          items: [
            { text: 'About', link: `${BUILD_BASE_DIR}/urbancode-velocity/README` },
            { text: 'Overview', link: `${BUILD_BASE_DIR}/urbancode-velocity/overview` },
            { text: 'Steps', link: `${BUILD_BASE_DIR}/urbancode-velocity/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/7-zip` directory.
      [`/${DEPLOY_BASE_DIR}/7-zip/`]: [
        {
          text: '7 zip',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/7-zip/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/7-zip/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/7-zip/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/7-zip/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/7-zip/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/ASOC` directory.
      [`/${DEPLOY_BASE_DIR}/ASOC/`]: [
        {
          text: 'ASOC',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/ASOC/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ASOC/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/ASOC/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/ASOC/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/AccuRevSourceConfig` directory.
      [`/${DEPLOY_BASE_DIR}/AccuRevSourceConfig/`]: [
        {
          text: 'AccuRevSourceConfig',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/AccuRevSourceConfig/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/AccuRevSourceConfig/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/AccuRevSourceConfig/README` },
            { text: 'Steps and roles', link: `/${DEPLOY_BASE_DIR}/AccuRevSourceConfig/steps and roles` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/AccuRevSourceConfig/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/AgentScript` directory.
      [`/${DEPLOY_BASE_DIR}/AgentScript/`]: [
        {
          text: 'AgentScript',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/AgentScript/downloads` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/AgentScript/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/AmazonEC2` directory.
      [`/${DEPLOY_BASE_DIR}/AmazonEC2/`]: [
        {
          text: 'AmazonEC2',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/AmazonEC2/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/AmazonEC2/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/AmazonEC2/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/AmazonEC2/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/AmazonEC2/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/Ant` directory.
      [`/${DEPLOY_BASE_DIR}/Ant/`]: [
        {
          text: 'Ant',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Ant/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Ant/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/Ant/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Ant/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/Ant/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/Apache` directory.
      [`/${DEPLOY_BASE_DIR}/Apache/`]: [
        {
          text: 'Apache',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Apache/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Apache/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/Apache/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Apache/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/Apache/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/Artifactory` directory.
      [`/${DEPLOY_BASE_DIR}/Artifactory/`]: [
        {
          text: 'Artifactory',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Artifactory/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Artifactory/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/Artifactory/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Artifactory/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/Artifactory/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/ArtifactorySourceConfig` directory.
      [`/${DEPLOY_BASE_DIR}/ArtifactorySourceConfig/`]: [
        {
          text: 'ArtifactorySourceConfig',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/ArtifactorySourceConfig/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ArtifactorySourceConfig/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/ArtifactorySourceConfig/README` },
            { text: 'Roles', link: `/${DEPLOY_BASE_DIR}/ArtifactorySourceConfig/roles` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/ArtifactorySourceConfig/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/ArtifactorySourceConfig/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/Autosys` directory.
      [`/${DEPLOY_BASE_DIR}/Autosys/`]: [
        {
          text: 'Autosys',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Autosys/downloads` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/Autosys/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/AzureDevopsSourceconfig` directory.
      [`/${DEPLOY_BASE_DIR}/AzureDevopsSourceconfig/`]: [
        {
          text: 'AzureDevopsSourceconfig',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/AzureDevopsSourceconfig/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/AzureDevopsSourceconfig/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/AzureDevopsSourceconfig/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/AzureDevopsSourceconfig/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/AzureDevopsSourceconfig/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/BizTalk` directory.
      [`/${DEPLOY_BASE_DIR}/BizTalk/`]: [
        {
          text: 'BizTalk',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/BizTalk/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/BizTalk/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/BizTalk/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/BizTalk/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/CICS-CM` directory.
      [`/${DEPLOY_BASE_DIR}/CICS-CM/`]: [
        {
          text: 'CICS CM',
          items: [
            { text: 'Component_templates', link: `/${DEPLOY_BASE_DIR}/CICS-CM/component_templates` },
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/CICS-CM/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/CICS-CM/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/CICS-CM/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/CICS-CM/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/CICS-CM/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/CICS` directory.
      [`/${DEPLOY_BASE_DIR}/CICS/`]: [
        {
          text: 'CICS',
          items: [
            { text: 'Component_templates', link: `/${DEPLOY_BASE_DIR}/CICS/component_templates` },
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/CICS/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/CICS/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/CICS/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/CICS/steps` },
            { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/CICS/troubleshooting` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/CICS/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/Chef` directory.
      [`/${DEPLOY_BASE_DIR}/Chef/`]: [
        {
          text: 'Chef',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Chef/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Chef/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/Chef/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Chef/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/Chef/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/ClearCaseSourceConfig` directory.
      [`/${DEPLOY_BASE_DIR}/ClearCaseSourceConfig/`]: [
        {
          text: 'ClearCaseSourceConfig',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/ClearCaseSourceConfig/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ClearCaseSourceConfig/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/ClearCaseSourceConfig/README` },
            { text: 'Steps and roles', link: `/${DEPLOY_BASE_DIR}/ClearCaseSourceConfig/steps and roles` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/ClearCaseSourceConfig/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/Cognos` directory.
      [`/${DEPLOY_BASE_DIR}/Cognos/`]: [
        {
          text: 'Cognos',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Cognos/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Cognos/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/Cognos/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Cognos/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/DBUpgrader` directory.
      [`/${DEPLOY_BASE_DIR}/DBUpgrader/`]: [
        {
          text: 'DBUpgrader',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/DBUpgrader/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/DBUpgrader/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/DBUpgrader/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/DBUpgrader/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/DBUpgrader/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/DeployTools` directory.
      [`/${DEPLOY_BASE_DIR}/DeployTools/`]: [
        {
          text: 'DeployTools',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/DeployTools/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/DeployTools/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/DeployTools/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/DeployTools/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/DimensionsSourceConfig` directory.
      [`/${DEPLOY_BASE_DIR}/DimensionsSourceConfig/`]: [
        {
          text: 'DimensionsSourceConfig',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/DimensionsSourceConfig/downloads` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/DimensionsSourceConfig/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/DockerSourceConfig` directory.
      [`/${DEPLOY_BASE_DIR}/DockerSourceConfig/`]: [
        {
          text: 'DockerSourceConfig',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/DockerSourceConfig/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/DockerSourceConfig/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/DockerSourceConfig/README` },
            { text: 'Settings', link: `/${DEPLOY_BASE_DIR}/DockerSourceConfig/settings` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/DockerSourceConfig/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/F5` directory.
      [`/${DEPLOY_BASE_DIR}/F5/`]: [
        {
          text: 'F5',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/F5/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/F5/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/F5/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/F5/steps` },
            { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/F5/troubleshooting` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/FileNet-CaseManager` directory.
      [`/${DEPLOY_BASE_DIR}/FileNet-CaseManager/`]: [
        {
          text: 'FileNet CaseManager',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/FileNet-CaseManager/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/FileNet-CaseManager/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/FileNet-CaseManager/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/FileNet-CaseManager/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/FileNet-CaseManager/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/FileSystemSourceConfig` directory.
      [`/${DEPLOY_BASE_DIR}/FileSystemSourceConfig/`]: [
        {
          text: 'FileSystemSourceConfig',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/FileSystemSourceConfig/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/FileSystemSourceConfig/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/FileSystemSourceConfig/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/FileSystemSourceConfig/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/FileSystemSourceConfig/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/FileSystemVersionedSourceConfig` directory.
      [`/${DEPLOY_BASE_DIR}/FileSystemVersionedSourceConfig/`]: [
        {
          text: 'FileSystemVersionedSourceConfig',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/FileSystemVersionedSourceConfig/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/FileSystemVersionedSourceConfig/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/FileSystemVersionedSourceConfig/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/FileSystemVersionedSourceConfig/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/FileSystemVersionedSourceConfig/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/FileUtils` directory.
      [`/${DEPLOY_BASE_DIR}/FileUtils/`]: [
        {
          text: 'FileUtils',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/FileUtils/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/FileUtils/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/FileUtils/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/FileUtils/steps` },
            { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/FileUtils/troubleshooting` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/FileUtils/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/GitSourceConfig` directory.
      [`/${DEPLOY_BASE_DIR}/GitSourceConfig/`]: [
        {
          text: 'GitSourceConfig',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/GitSourceConfig/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/GitSourceConfig/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/GitSourceConfig/README` },
            { text: 'Settings', link: `/${DEPLOY_BASE_DIR}/GitSourceConfig/settings` },
            { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/GitSourceConfig/troubleshooting` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/GitSourceConfig/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/Groovy` directory.
      [`/${DEPLOY_BASE_DIR}/Groovy/`]: [
        {
          text: 'Groovy',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Groovy/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Groovy/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/Groovy/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Groovy/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/Groovy/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/HCLDevOpsTestHub` directory.
      [`/${DEPLOY_BASE_DIR}/HCLDevOpsTestHub/`]: [
        {
          text: 'HCLDevOpsTestHub',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/HCLDevOpsTestHub/downloads` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/HCLDevOpsTestHub/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/HCLDevOpsTestPerf` directory.
      [`/${DEPLOY_BASE_DIR}/HCLDevOpsTestPerf/`]: [
        {
          text: 'HCLDevOpsTestPerf',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/HCLDevOpsTestPerf/downloads` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/HCLDevOpsTestPerf/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/HCLDevOpsTestUI` directory.
      [`/${DEPLOY_BASE_DIR}/HCLDevOpsTestUI/`]: [
        {
          text: 'HCLDevOpsTestUI',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/HCLDevOpsTestUI/downloads` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/HCLDevOpsTestUI/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/HCLDevOpsTestUIWebUI` directory.
      [`/${DEPLOY_BASE_DIR}/HCLDevOpsTestUIWebUI/`]: [
        {
          text: 'HCLDevOpsTestUIWebUI',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/HCLDevOpsTestUIWebUI/downloads` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/HCLDevOpsTestUIWebUI/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/HCLDevOpsTestVirtualization` directory.
      [`/${DEPLOY_BASE_DIR}/HCLDevOpsTestVirtualization/`]: [
        {
          text: 'HCLDevOpsTestVirtualization',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/HCLDevOpsTestVirtualization/downloads` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/HCLDevOpsTestVirtualization/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/HCLOneTestAPI` directory.
      [`/${DEPLOY_BASE_DIR}/HCLOneTestAPI/`]: [
        {
          text: 'HCLOneTestAPI',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/HCLOneTestAPI/downloads` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/HCLOneTestAPI/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/HCLOneTestPerf` directory.
      [`/${DEPLOY_BASE_DIR}/HCLOneTestPerf/`]: [
        {
          text: 'HCLOneTestPerf',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/HCLOneTestPerf/downloads` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/HCLOneTestPerf/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/HCLOneTestUI` directory.
      [`/${DEPLOY_BASE_DIR}/HCLOneTestUI/`]: [
        {
          text: 'HCLOneTestUI',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/HCLOneTestUI/downloads` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/HCLOneTestUI/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/HCLOneTestVirtualization` directory.
      [`/${DEPLOY_BASE_DIR}/HCLOneTestVirtualization/`]: [
        {
          text: 'HCLOneTestVirtualization',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/HCLOneTestVirtualization/downloads` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/HCLOneTestVirtualization/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/HCLOneTestWebUI` directory.
      [`/${DEPLOY_BASE_DIR}/HCLOneTestWebUI/`]: [
        {
          text: 'HCLOneTestWebUI',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/HCLOneTestWebUI/downloads` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/HCLOneTestWebUI/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/HPQualityCenter` directory.
      [`/${DEPLOY_BASE_DIR}/HPQualityCenter/`]: [
        {
          text: 'HPQualityCenter',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/HPQualityCenter/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/HPQualityCenter/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/HPQualityCenter/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/HPQualityCenter/steps` },
            { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/HPQualityCenter/troubleshooting` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/HPQualityCenter/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/IBMDevOpsTestHub` directory.
      [`/${DEPLOY_BASE_DIR}/IBMDevOpsTestHub/`]: [
        {
          text: 'IBMDevOpsTestHub',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/IBMDevOpsTestHub/downloads` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/IBMDevOpsTestHub/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/IBMDevOpsTestPerf` directory.
      [`/${DEPLOY_BASE_DIR}/IBMDevOpsTestPerf/`]: [
        {
          text: 'IBMDevOpsTestPerf',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/IBMDevOpsTestPerf/downloads` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/IBMDevOpsTestPerf/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/IBMDevOpsTestUI` directory.
      [`/${DEPLOY_BASE_DIR}/IBMDevOpsTestUI/`]: [
        {
          text: 'IBMDevOpsTestUI',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/IBMDevOpsTestUI/downloads` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/IBMDevOpsTestUI/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/IBMDevOpsTestUIWebUI` directory.
      [`/${DEPLOY_BASE_DIR}/IBMDevOpsTestUIWebUI/`]: [
        {
          text: 'IBMDevOpsTestUIWebUI',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/IBMDevOpsTestUIWebUI/downloads` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/IBMDevOpsTestUIWebUI/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/IBMDevOpsTestVirtualization` directory.
      [`/${DEPLOY_BASE_DIR}/IBMDevOpsTestVirtualization/`]: [
        {
          text: 'IBMDevOpsTestVirtualization',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/IBMDevOpsTestVirtualization/downloads` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/IBMDevOpsTestVirtualization/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/IIS-AdminScripts` directory.
      [`/${DEPLOY_BASE_DIR}/IIS-AdminScripts/`]: [
        {
          text: 'IIS AdminScripts',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/IIS-AdminScripts/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/IIS-AdminScripts/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/IIS-AdminScripts/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/IIS-AdminScripts/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/IIS-AppCmd` directory.
      [`/${DEPLOY_BASE_DIR}/IIS-AppCmd/`]: [
        {
          text: 'IIS AppCmd',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/IIS-AppCmd/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/IIS-AppCmd/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/IIS-AppCmd/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/IIS-AppCmd/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/IIS-MSDeploy` directory.
      [`/${DEPLOY_BASE_DIR}/IIS-MSDeploy/`]: [
        {
          text: 'IIS MSDeploy',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/IIS-MSDeploy/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/IIS-MSDeploy/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/IIS-MSDeploy/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/IIS-MSDeploy/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/IIS-MSDeploy/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/IMSz` directory.
      [`/${DEPLOY_BASE_DIR}/IMSz/`]: [
        {
          text: 'IMSz',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/IMSz/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/IMSz/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/IMSz/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/IMSz/steps` },
            { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/IMSz/troubleshooting` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/IMSz/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/Informatica` directory.
      [`/${DEPLOY_BASE_DIR}/Informatica/`]: [
        {
          text: 'Informatica',
          items: [
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Informatica/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/Informatica/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Informatica/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/Informatica/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/JBoss` directory.
      [`/${DEPLOY_BASE_DIR}/JBoss/`]: [
        {
          text: 'JBoss',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/JBoss/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/JBoss/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/JBoss/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/JBoss/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/JBoss/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/JIRA` directory.
      [`/${DEPLOY_BASE_DIR}/JIRA/`]: [
        {
          text: 'JIRA',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/JIRA/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/JIRA/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/JIRA/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/JIRA/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/JIRA/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/LinuxSystemTools` directory.
      [`/${DEPLOY_BASE_DIR}/LinuxSystemTools/`]: [
        {
          text: 'LinuxSystemTools',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/LinuxSystemTools/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/LinuxSystemTools/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/LinuxSystemTools/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/LinuxSystemTools/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/LinuxSystemTools/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/MFPFC` directory.
      [`/${DEPLOY_BASE_DIR}/MFPFC/`]: [
        {
          text: 'MFPFC',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/MFPFC/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/MFPFC/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/MFPFC/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/MFPFC/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/MSI` directory.
      [`/${DEPLOY_BASE_DIR}/MSI/`]: [
        {
          text: 'MSI',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/MSI/downloads` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/MSI/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/Maven` directory.
      [`/${DEPLOY_BASE_DIR}/Maven/`]: [
        {
          text: 'Maven',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Maven/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Maven/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/Maven/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Maven/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/Maven/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/MavenSourceConfig` directory.
      [`/${DEPLOY_BASE_DIR}/MavenSourceConfig/`]: [
        {
          text: 'MavenSourceConfig',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/MavenSourceConfig/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/MavenSourceConfig/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/MavenSourceConfig/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/MavenSourceConfig/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/MavenSourceConfig/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/MicrosoftSSIS` directory.
      [`/${DEPLOY_BASE_DIR}/MicrosoftSSIS/`]: [
        {
          text: 'MicrosoftSSIS',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/MicrosoftSSIS/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/MicrosoftSSIS/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/MicrosoftSSIS/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/MicrosoftSSIS/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/Netscaler` directory.
      [`/${DEPLOY_BASE_DIR}/Netscaler/`]: [
        {
          text: 'Netscaler',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Netscaler/downloads` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/Netscaler/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/OpenShiftSourceConfig` directory.
      [`/${DEPLOY_BASE_DIR}/OpenShiftSourceConfig/`]: [
        {
          text: 'OpenShiftSourceConfig',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/OpenShiftSourceConfig/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/OpenShiftSourceConfig/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/OpenShiftSourceConfig/README` },
            { text: 'Settings', link: `/${DEPLOY_BASE_DIR}/OpenShiftSourceConfig/settings` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/PHPCLI` directory.
      [`/${DEPLOY_BASE_DIR}/PHPCLI/`]: [
        {
          text: 'PHPCLI',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/PHPCLI/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/PHPCLI/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/PHPCLI/README` },
            { text: 'Setup', link: `/${DEPLOY_BASE_DIR}/PHPCLI/setup` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/PHPCLI/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/PHPCLI/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/PerforceSourceConfig` directory.
      [`/${DEPLOY_BASE_DIR}/PerforceSourceConfig/`]: [
        {
          text: 'PerforceSourceConfig',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/PerforceSourceConfig/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/PerforceSourceConfig/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/PerforceSourceConfig/README` },
            { text: 'Settings', link: `/${DEPLOY_BASE_DIR}/PerforceSourceConfig/settings` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/PerforceSourceConfig/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/PvcsSourceConfig` directory.
      [`/${DEPLOY_BASE_DIR}/PvcsSourceConfig/`]: [
        {
          text: 'PvcsSourceConfig',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/PvcsSourceConfig/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/PvcsSourceConfig/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/PvcsSourceConfig/README` },
            { text: 'Settings', link: `/${DEPLOY_BASE_DIR}/PvcsSourceConfig/settings` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/PvcsSourceConfig/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/QTP` directory.
      [`/${DEPLOY_BASE_DIR}/QTP/`]: [
        {
          text: 'QTP',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/QTP/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/QTP/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/QTP/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/QTP/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/RAM` directory.
      [`/${DEPLOY_BASE_DIR}/RAM/`]: [
        {
          text: 'RAM',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/RAM/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/RAM/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/RAM/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/RAM/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/RAM/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/RAMSourceConfig` directory.
      [`/${DEPLOY_BASE_DIR}/RAMSourceConfig/`]: [
        {
          text: 'RAMSourceConfig',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/RAMSourceConfig/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/RAMSourceConfig/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/RAMSourceConfig/README` },
            { text: 'Settings', link: `/${DEPLOY_BASE_DIR}/RAMSourceConfig/settings` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/RAMSourceConfig/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/RFT-UCD` directory.
      [`/${DEPLOY_BASE_DIR}/RFT-UCD/`]: [
        {
          text: 'RFT UCD',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/RFT-UCD/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/RFT-UCD/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/RFT-UCD/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/RFT-UCD/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/RFT-UCD/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/RFT-WebUI-UCD` directory.
      [`/${DEPLOY_BASE_DIR}/RFT-WebUI-UCD/`]: [
        {
          text: 'RFT WebUI UCD',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/RFT-WebUI-UCD/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/RFT-WebUI-UCD/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/RFT-WebUI-UCD/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/RFT-WebUI-UCD/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/RFT-WebUI-UCD/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/RIT-UCD` directory.
      [`/${DEPLOY_BASE_DIR}/RIT-UCD/`]: [
        {
          text: 'RIT UCD',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/RIT-UCD/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/RIT-UCD/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/RIT-UCD/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/RIT-UCD/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/RIT-UCD/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/RPM` directory.
      [`/${DEPLOY_BASE_DIR}/RPM/`]: [
        {
          text: 'RPM',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/RPM/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/RPM/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/RPM/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/RPM/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/RPM/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/RPT-UCD` directory.
      [`/${DEPLOY_BASE_DIR}/RPT-UCD/`]: [
        {
          text: 'RPT UCD',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/RPT-UCD/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/RPT-UCD/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/RPT-UCD/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/RPT-UCD/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/RPT-UCD/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/RTAS-UCD` directory.
      [`/${DEPLOY_BASE_DIR}/RTAS-UCD/`]: [
        {
          text: 'RTAS UCD',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/RTAS-UCD/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/RTAS-UCD/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/RTAS-UCD/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/RTAS-UCD/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/RTAS-UCD/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/RTVS-UCD` directory.
      [`/${DEPLOY_BASE_DIR}/RTVS-UCD/`]: [
        {
          text: 'RTVS UCD',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/RTVS-UCD/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/RTVS-UCD/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/RTVS-UCD/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/RTVS-UCD/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/RTVS-UCD/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/Rally` directory.
      [`/${DEPLOY_BASE_DIR}/Rally/`]: [
        {
          text: 'Rally',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Rally/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Rally/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/Rally/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Rally/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/Remedy` directory.
      [`/${DEPLOY_BASE_DIR}/Remedy/`]: [
        {
          text: 'Remedy',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Remedy/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Remedy/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/Remedy/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Remedy/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/SAP-CTS` directory.
      [`/${DEPLOY_BASE_DIR}/SAP-CTS/`]: [
        {
          text: 'SAP CTS',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/SAP-CTS/downloads` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/SAP-CTS/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/SQL-JDBC` directory.
      [`/${DEPLOY_BASE_DIR}/SQL-JDBC/`]: [
        {
          text: 'SQL JDBC',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/SQL-JDBC/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/SQL-JDBC/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/SQL-JDBC/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/SQL-JDBC/steps` },
            { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/SQL-JDBC/troubleshooting` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/SQL-JDBC/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/SQLCmd` directory.
      [`/${DEPLOY_BASE_DIR}/SQLCmd/`]: [
        {
          text: 'SQLCmd',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/SQLCmd/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/SQLCmd/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/SQLCmd/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/SQLCmd/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/SQLCmd/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/SQLPlus` directory.
      [`/${DEPLOY_BASE_DIR}/SQLPlus/`]: [
        {
          text: 'SQLPlus',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/SQLPlus/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/SQLPlus/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/SQLPlus/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/SQLPlus/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/SQLPlus/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/Selenium` directory.
      [`/${DEPLOY_BASE_DIR}/Selenium/`]: [
        {
          text: 'Selenium',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Selenium/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Selenium/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/Selenium/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Selenium/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/Selenium/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/ServiceControlManager` directory.
      [`/${DEPLOY_BASE_DIR}/ServiceControlManager/`]: [
        {
          text: 'ServiceControlManager',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/ServiceControlManager/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ServiceControlManager/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/ServiceControlManager/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/ServiceControlManager/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/ServiceNow` directory.
      [`/${DEPLOY_BASE_DIR}/ServiceNow/`]: [
        {
          text: 'ServiceNow',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/ServiceNow/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ServiceNow/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/ServiceNow/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/ServiceNow/steps` },
            { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/ServiceNow/troubleshooting` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/ServiceNow/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/Sharepoint` directory.
      [`/${DEPLOY_BASE_DIR}/Sharepoint/`]: [
        {
          text: 'Sharepoint',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Sharepoint/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Sharepoint/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/Sharepoint/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Sharepoint/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/Shell` directory.
      [`/${DEPLOY_BASE_DIR}/Shell/`]: [
        {
          text: 'Shell',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Shell/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Shell/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/Shell/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Shell/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/Shell/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/Subversion-export` directory.
      [`/${DEPLOY_BASE_DIR}/Subversion-export/`]: [
        {
          text: 'Subversion export',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Subversion-export/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Subversion-export/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/Subversion-export/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Subversion-export/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/Subversion-export/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/SubversionSourceConfig` directory.
      [`/${DEPLOY_BASE_DIR}/SubversionSourceConfig/`]: [
        {
          text: 'SubversionSourceConfig',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/SubversionSourceConfig/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/SubversionSourceConfig/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/SubversionSourceConfig/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/SubversionSourceConfig/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/SubversionSourceConfig/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/SystemInformation` directory.
      [`/${DEPLOY_BASE_DIR}/SystemInformation/`]: [
        {
          text: 'SystemInformation',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/SystemInformation/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/SystemInformation/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/SystemInformation/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/SystemInformation/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/TFS-SourceConfig` directory.
      [`/${DEPLOY_BASE_DIR}/TFS-SourceConfig/`]: [
        {
          text: 'TFS SourceConfig',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/TFS-SourceConfig/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/TFS-SourceConfig/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/TFS-SourceConfig/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/TFS-SourceConfig/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/TFS-SourceConfig/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/TFS_SCM-SourceConfig` directory.
      [`/${DEPLOY_BASE_DIR}/TFS_SCM-SourceConfig/`]: [
        {
          text: 'TFS_SCM SourceConfig',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/TFS_SCM-SourceConfig/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/TFS_SCM-SourceConfig/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/TFS_SCM-SourceConfig/README` },
            { text: 'Settings', link: `/${DEPLOY_BASE_DIR}/TFS_SCM-SourceConfig/settings` },
            { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/TFS_SCM-SourceConfig/troubleshooting` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/TFS_SCM-SourceConfig/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/TeamCitySourceConfig` directory.
      [`/${DEPLOY_BASE_DIR}/TeamCitySourceConfig/`]: [
        {
          text: 'TeamCitySourceConfig',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/TeamCitySourceConfig/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/TeamCitySourceConfig/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/TeamCitySourceConfig/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/TeamCitySourceConfig/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/TeamCitySourceConfig/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/Tomcat` directory.
      [`/${DEPLOY_BASE_DIR}/Tomcat/`]: [
        {
          text: 'Tomcat',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Tomcat/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Tomcat/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/Tomcat/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Tomcat/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/Tomcat/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/UrbanCodePackageManager` directory.
      [`/${DEPLOY_BASE_DIR}/UrbanCodePackageManager/`]: [
        {
          text: 'UrbanCodePackageManager',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/UrbanCodePackageManager/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/UrbanCodePackageManager/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/UrbanCodePackageManager/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/UrbanCodePackageManager/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/UrbancodeVFS` directory.
      [`/${DEPLOY_BASE_DIR}/UrbancodeVFS/`]: [
        {
          text: 'UrbancodeVFS',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/UrbancodeVFS/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/UrbancodeVFS/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/UrbancodeVFS/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/UrbancodeVFS/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/WLDeploy` directory.
      [`/${DEPLOY_BASE_DIR}/WLDeploy/`]: [
        {
          text: 'WLDeploy',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WLDeploy/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WLDeploy/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/WLDeploy/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WLDeploy/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/WLDeploy/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/WSRR` directory.
      [`/${DEPLOY_BASE_DIR}/WSRR/`]: [
        {
          text: 'WSRR',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WSRR/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WSRR/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/WSRR/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WSRR/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/WSRR/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/WebLogic-WLST` directory.
      [`/${DEPLOY_BASE_DIR}/WebLogic-WLST/`]: [
        {
          text: 'WebLogic WLST',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WebLogic-WLST/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WebLogic-WLST/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/WebLogic-WLST/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WebLogic-WLST/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/WebLogicSecurityMgmt` directory.
      [`/${DEPLOY_BASE_DIR}/WebLogicSecurityMgmt/`]: [
        {
          text: 'WebLogicSecurityMgmt',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WebLogicSecurityMgmt/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WebLogicSecurityMgmt/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/WebLogicSecurityMgmt/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WebLogicSecurityMgmt/steps` },
            { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/WebLogicSecurityMgmt/troubleshooting` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/WebLogicSecurityMgmt/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/WebSphereBPM` directory.
      [`/${DEPLOY_BASE_DIR}/WebSphereBPM/`]: [
        {
          text: 'WebSphereBPM',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WebSphereBPM/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WebSphereBPM/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/WebSphereBPM/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WebSphereBPM/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/WebSphereBPM/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/WebSphereBPMSourceConfig` directory.
      [`/${DEPLOY_BASE_DIR}/WebSphereBPMSourceConfig/`]: [
        {
          text: 'WebSphereBPMSourceConfig',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WebSphereBPMSourceConfig/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WebSphereBPMSourceConfig/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/WebSphereBPMSourceConfig/README` },
            { text: 'Settings', link: `/${DEPLOY_BASE_DIR}/WebSphereBPMSourceConfig/settings` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/WebSphereBPMSourceConfig/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/WebSphereCommerce` directory.
      [`/${DEPLOY_BASE_DIR}/WebSphereCommerce/`]: [
        {
          text: 'WebSphereCommerce',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WebSphereCommerce/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WebSphereCommerce/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/WebSphereCommerce/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WebSphereCommerce/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/WebSphereCommerce/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/WebSphereConfiguration` directory.
      [`/${DEPLOY_BASE_DIR}/WebSphereConfiguration/`]: [
        {
          text: 'WebSphereConfiguration',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WebSphereConfiguration/downloads` },
            { text: 'Example applications', link: `/${DEPLOY_BASE_DIR}/WebSphereConfiguration/example applications` },
            { text: 'Example processes', link: `/${DEPLOY_BASE_DIR}/WebSphereConfiguration/example processes` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WebSphereConfiguration/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/WebSphereConfiguration/README` },
            { text: 'Roles', link: `/${DEPLOY_BASE_DIR}/WebSphereConfiguration/roles` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WebSphereConfiguration/steps` },
            { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/WebSphereConfiguration/troubleshooting` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/WebSphereConfiguration/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/WebSphereLiberty` directory.
      [`/${DEPLOY_BASE_DIR}/WebSphereLiberty/`]: [
        {
          text: 'WebSphereLiberty',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WebSphereLiberty/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WebSphereLiberty/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/WebSphereLiberty/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WebSphereLiberty/steps` },
            { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/WebSphereLiberty/troubleshooting` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/WebSphereLiberty/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/WebSphereMQ` directory.
      [`/${DEPLOY_BASE_DIR}/WebSphereMQ/`]: [
        {
          text: 'WebSphereMQ',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WebSphereMQ/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WebSphereMQ/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/WebSphereMQ/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WebSphereMQ/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/WebSphereMessageBroker-CMP` directory.
      [`/${DEPLOY_BASE_DIR}/WebSphereMessageBroker-CMP/`]: [
        {
          text: 'WebSphereMessageBroker CMP',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WebSphereMessageBroker-CMP/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WebSphereMessageBroker-CMP/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/WebSphereMessageBroker-CMP/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WebSphereMessageBroker-CMP/steps` },
            { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/WebSphereMessageBroker-CMP/troubleshooting` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/WebSphereMessageBroker-CMP/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/WebSpherePortal` directory.
      [`/${DEPLOY_BASE_DIR}/WebSpherePortal/`]: [
        {
          text: 'WebSpherePortal',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WebSpherePortal/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WebSpherePortal/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/WebSpherePortal/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WebSpherePortal/steps` },
            { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/WebSpherePortal/troubleshooting` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/WebSpherePortal/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/Websphere` directory.
      [`/${DEPLOY_BASE_DIR}/Websphere/`]: [
        {
          text: 'Websphere',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Websphere/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Websphere/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/Websphere/README` },
            { text: 'Roles', link: `/${DEPLOY_BASE_DIR}/Websphere/roles` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Websphere/steps` },
            { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/Websphere/troubleshooting` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/Websphere/usage` },
            { text: 'User permissions', link: `/${DEPLOY_BASE_DIR}/Websphere/user permissions` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/WinRSAgentInstall` directory.
      [`/${DEPLOY_BASE_DIR}/WinRSAgentInstall/`]: [
        {
          text: 'WinRSAgentInstall',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WinRSAgentInstall/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WinRSAgentInstall/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/WinRSAgentInstall/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WinRSAgentInstall/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/WindowsFailoverCluster` directory.
      [`/${DEPLOY_BASE_DIR}/WindowsFailoverCluster/`]: [
        {
          text: 'WindowsFailoverCluster',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WindowsFailoverCluster/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WindowsFailoverCluster/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/WindowsFailoverCluster/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WindowsFailoverCluster/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/WindowsSystemTools` directory.
      [`/${DEPLOY_BASE_DIR}/WindowsSystemTools/`]: [
        {
          text: 'WindowsSystemTools',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WindowsSystemTools/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WindowsSystemTools/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/WindowsSystemTools/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WindowsSystemTools/steps` },
            { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/WindowsSystemTools/troubleshooting` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/WindowsSystemTools/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/actifio` directory.
      [`/${DEPLOY_BASE_DIR}/actifio/`]: [
        {
          text: 'Actifio',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/actifio/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/air-plugin-CASCM` directory.
      [`/${DEPLOY_BASE_DIR}/air-plugin-CASCM/`]: [
        {
          text: 'Air plugin CASCM',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/air-plugin-CASCM/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/air-plugin-CASCM/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/air-plugin-CASCM/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/air-plugin-CASCM/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/air-plugin-RTC-scm` directory.
      [`/${DEPLOY_BASE_DIR}/air-plugin-RTC-scm/`]: [
        {
          text: 'Air plugin RTC scm',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/air-plugin-RTC-scm/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/air-plugin-RTC-scm/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/air-plugin-RTC-scm/README` },
            { text: 'Settings', link: `/${DEPLOY_BASE_DIR}/air-plugin-RTC-scm/settings` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/air-plugin-RTC-scm/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/air-worklight` directory.
      [`/${DEPLOY_BASE_DIR}/air-worklight/`]: [
        {
          text: 'Air worklight',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/air-worklight/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/air-worklight/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/air-worklight/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/air-worklight/steps` },
            { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/air-worklight/troubleshooting` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/air-worklight/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/ansible` directory.
      [`/${DEPLOY_BASE_DIR}/ansible/`]: [
        {
          text: 'Ansible',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/ansible/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ansible/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/ansible/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/ansible/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/ansible/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/apache-hadoop` directory.
      [`/${DEPLOY_BASE_DIR}/apache-hadoop/`]: [
        {
          text: 'Apache hadoop',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/apache-hadoop/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/apiconnect` directory.
      [`/${DEPLOY_BASE_DIR}/apiconnect/`]: [
        {
          text: 'Apiconnect',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/apiconnect/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/apiconnect/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/apiconnect/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/apiconnect/steps` },
            { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/apiconnect/troubleshooting` },
            { text: 'Tutorials', link: `/${DEPLOY_BASE_DIR}/apiconnect/tutorials` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/apiconnect/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/apple-xcode` directory.
      [`/${DEPLOY_BASE_DIR}/apple-xcode/`]: [
        {
          text: 'Apple xcode',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/apple-xcode/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/apprenda` directory.
      [`/${DEPLOY_BASE_DIR}/apprenda/`]: [
        {
          text: 'Apprenda',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/apprenda/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/appscan` directory.
      [`/${DEPLOY_BASE_DIR}/appscan/`]: [
        {
          text: 'Appscan',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/appscan/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/appscan/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/appscan/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/appscan/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/argocd` directory.
      [`/${DEPLOY_BASE_DIR}/argocd/`]: [
        {
          text: 'Argocd',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/argocd/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/argocd/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/argocd/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/argocd/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/argocd/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/aspera` directory.
      [`/${DEPLOY_BASE_DIR}/aspera/`]: [
        {
          text: 'Aspera',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/aspera/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/aspera/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/aspera/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/aspera/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/avnet-talos` directory.
      [`/${DEPLOY_BASE_DIR}/avnet-talos/`]: [
        {
          text: 'Avnet talos',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/avnet-talos/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/aws-lambda` directory.
      [`/${DEPLOY_BASE_DIR}/aws-lambda/`]: [
        {
          text: 'Aws lambda',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/aws-lambda/downloads` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/aws-lambda/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/bigfix` directory.
      [`/${DEPLOY_BASE_DIR}/bigfix/`]: [
        {
          text: 'Bigfix',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/bigfix/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/bigfix/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/bigfix/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/bigfix/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/bluemix-autoscale` directory.
      [`/${DEPLOY_BASE_DIR}/bluemix-autoscale/`]: [
        {
          text: 'Bluemix autoscale',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/bluemix-autoscale/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/bluemix-autoscale/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/bluemix-autoscale/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/bluemix-autoscale/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/box` directory.
      [`/${DEPLOY_BASE_DIR}/box/`]: [
        {
          text: 'Box',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/box/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/cloud-foundry-ibm-containers` directory.
      [`/${DEPLOY_BASE_DIR}/cloud-foundry-ibm-containers/`]: [
        {
          text: 'Cloud foundry ibm containers',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/cloud-foundry-ibm-containers/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/cloud-foundry-ibm-containers/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/cloud-foundry-ibm-containers/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/cloud-foundry-ibm-containers/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/cloud-foundry-ibm-containers/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/cloud-foundry` directory.
      [`/${DEPLOY_BASE_DIR}/cloud-foundry/`]: [
        {
          text: 'Cloud foundry',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/cloud-foundry/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/cloud-foundry/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/cloud-foundry/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/cloud-foundry/steps` },
            { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/cloud-foundry/troubleshooting` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/cloud-foundry/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/cloudant` directory.
      [`/${DEPLOY_BASE_DIR}/cloudant/`]: [
        {
          text: 'Cloudant',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/cloudant/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/cognos-analytics` directory.
      [`/${DEPLOY_BASE_DIR}/cognos-analytics/`]: [
        {
          text: 'Cognos analytics',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/cognos-analytics/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/cognos-analytics/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/cognos-analytics/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/cognos-analytics/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/cognos-analytics/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/cyberark` directory.
      [`/${DEPLOY_BASE_DIR}/cyberark/`]: [
        {
          text: 'Cyberark',
          items: [
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/cyberark/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/cyberark/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/cyberark/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/cyberark/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/datapower` directory.
      [`/${DEPLOY_BASE_DIR}/datapower/`]: [
        {
          text: 'Datapower',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/datapower/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/datapower/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/datapower/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/datapower/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/datapower/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/datastage` directory.
      [`/${DEPLOY_BASE_DIR}/datastage/`]: [
        {
          text: 'Datastage',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/datastage/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/datastage/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/datastage/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/datastage/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/datastage/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/datical-db` directory.
      [`/${DEPLOY_BASE_DIR}/datical-db/`]: [
        {
          text: 'Datical db',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/datical-db/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/dbmaestro` directory.
      [`/${DEPLOY_BASE_DIR}/dbmaestro/`]: [
        {
          text: 'Dbmaestro',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/dbmaestro/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/docker-compose` directory.
      [`/${DEPLOY_BASE_DIR}/docker-compose/`]: [
        {
          text: 'Docker compose',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/docker-compose/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/docker-compose/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/docker-compose/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/docker-compose/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/docker-plugin` directory.
      [`/${DEPLOY_BASE_DIR}/docker-${DEPLOY_BASE_DIR}/`]: [
        {
          text: 'Docker plugin',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/docker-${DEPLOY_BASE_DIR}/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/docker-${DEPLOY_BASE_DIR}/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/docker-${DEPLOY_BASE_DIR}/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/docker-${DEPLOY_BASE_DIR}/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/eggplant` directory.
      [`/${DEPLOY_BASE_DIR}/eggplant/`]: [
        {
          text: 'Eggplant',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/eggplant/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/general-utilities` directory.
      [`/${DEPLOY_BASE_DIR}/general-utilities/`]: [
        {
          text: 'General utilities',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/general-utilities/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/general-utilities/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/general-utilities/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/general-utilities/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/general-utilities/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/git-install` directory.
      [`/${DEPLOY_BASE_DIR}/git-install/`]: [
        {
          text: 'Git install',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/git-install/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/gitlab-generic-packages` directory.
      [`/${DEPLOY_BASE_DIR}/gitlab-generic-packages/`]: [
        {
          text: 'Gitlab generic packages',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/gitlab-generic-packages/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/gitlab-generic-packages/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/gitlab-generic-packages/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/gitlab-generic-packages/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/gitlab-generic-packages/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/gitlab-sourceconfig-generic-packages` directory.
      [`/${DEPLOY_BASE_DIR}/gitlab-sourceconfig-generic-packages/`]: [
        {
          text: 'Gitlab sourceconfig generic packages',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/gitlab-sourceconfig-generic-packages/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/gitlab-sourceconfig-generic-packages/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/gitlab-sourceconfig-generic-packages/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/gitlab-sourceconfig-generic-packages/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/gitlab-sourceconfig-generic-packages/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/hp-loadrunner` directory.
      [`/${DEPLOY_BASE_DIR}/hp-loadrunner/`]: [
        {
          text: 'Hp loadrunner',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/hp-loadrunner/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/hp-loadrunner/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/hp-loadrunner/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/hp-loadrunner/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/hp-loadrunner/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/ibm-ace` directory.
      [`/${DEPLOY_BASE_DIR}/ibm-ace/`]: [
        {
          text: 'Ibm ace',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/ibm-ace/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ibm-ace/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/ibm-ace/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/ibm-ace/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/ibm-ace/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/ibm-db2-for-z-os-package` directory.
      [`/${DEPLOY_BASE_DIR}/ibm-db2-for-z-os-package/`]: [
        {
          text: 'Ibm db2 for z os package',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/ibm-db2-for-z-os-package/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/ibm-globalization-pipeline` directory.
      [`/${DEPLOY_BASE_DIR}/ibm-globalization-pipeline/`]: [
        {
          text: 'Ibm globalization pipeline',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/ibm-globalization-pipeline/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/ibm-installation-manager` directory.
      [`/${DEPLOY_BASE_DIR}/ibm-installation-manager/`]: [
        {
          text: 'Ibm installation manager',
          items: [
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ibm-installation-manager/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/ibm-installation-manager/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/ibm-installation-manager/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/ibm-instana` directory.
      [`/${DEPLOY_BASE_DIR}/ibm-instana/`]: [
        {
          text: 'Ibm instana',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/ibm-instana/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ibm-instana/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/ibm-instana/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/ibm-instana/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/ibm-instana/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/ibm-maas360` directory.
      [`/${DEPLOY_BASE_DIR}/ibm-maas360/`]: [
        {
          text: 'Ibm maas360',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/ibm-maas360/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/ibm-maximo` directory.
      [`/${DEPLOY_BASE_DIR}/ibm-maximo/`]: [
        {
          text: 'Ibm maximo',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/ibm-maximo/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ibm-maximo/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/ibm-maximo/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/ibm-maximo/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/ibm-maximo/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/ibm-mq-for-z-os-generate-mqsc-commands` directory.
      [`/${DEPLOY_BASE_DIR}/ibm-mq-for-z-os-generate-mqsc-commands/`]: [
        {
          text: 'Ibm mq for z os generate mqsc commands',
          items: [
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ibm-mq-for-z-os-generate-mqsc-commands/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/ibm-mq-for-z-os-generate-mqsc-commands/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/ibm-mq-for-z-os-generate-mqsc-commands/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/ibm-mq-for-z-os-generate-mqsc-commands/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/ibm-odm-source-config` directory.
      [`/${DEPLOY_BASE_DIR}/ibm-odm-source-config/`]: [
        {
          text: 'Ibm odm source config',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/ibm-odm-source-config/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ibm-odm-source-config/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/ibm-odm-source-config/README` },
            { text: 'Settings', link: `/${DEPLOY_BASE_DIR}/ibm-odm-source-config/settings` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/ibm-odm-source-config/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/ibm-odm` directory.
      [`/${DEPLOY_BASE_DIR}/ibm-odm/`]: [
        {
          text: 'Ibm odm',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/ibm-odm/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ibm-odm/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/ibm-odm/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/ibm-odm/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/ibm-odm/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/ibm-rational-automation-framework-for-websphere` directory.
      [`/${DEPLOY_BASE_DIR}/ibm-rational-automation-framework-for-websphere/`]: [
        {
          text: 'Ibm rational automation framework for websphere',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/ibm-rational-automation-framework-for-websphere/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/ibm-rational-clearquest` directory.
      [`/${DEPLOY_BASE_DIR}/ibm-rational-clearquest/`]: [
        {
          text: 'Ibm rational clearquest',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/ibm-rational-clearquest/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/ibm-rational-quality-manager-rqm` directory.
      [`/${DEPLOY_BASE_DIR}/ibm-rational-quality-manager-rqm/`]: [
        {
          text: 'Ibm rational quality manager rqm',
          items: [
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ibm-rational-quality-manager-rqm/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/ibm-rational-quality-manager-rqm/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/ibm-rational-quality-manager-rqm/steps` },
            { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/ibm-rational-quality-manager-rqm/troubleshooting` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/ibm-rational-quality-manager-rqm/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/ibm-rational-team-concert-build` directory.
      [`/${DEPLOY_BASE_DIR}/ibm-rational-team-concert-build/`]: [
        {
          text: 'Ibm rational team concert build',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/ibm-rational-team-concert-build/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/ibm-sterling-b2b-integrator` directory.
      [`/${DEPLOY_BASE_DIR}/ibm-sterling-b2b-integrator/`]: [
        {
          text: 'Ibm sterling b2b integrator',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/ibm-sterling-b2b-integrator/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/ibm-vdp` directory.
      [`/${DEPLOY_BASE_DIR}/ibm-vdp/`]: [
        {
          text: 'Ibm vdp',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/ibm-vdp/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/ibm-workload-automation` directory.
      [`/${DEPLOY_BASE_DIR}/ibm-workload-automation/`]: [
        {
          text: 'Ibm workload automation',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/ibm-workload-automation/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/iis-configuration` directory.
      [`/${DEPLOY_BASE_DIR}/iis-configuration/`]: [
        {
          text: 'Iis configuration',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/iis-configuration/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/iis-configuration/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/iis-configuration/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/iis-configuration/steps` },
            { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/iis-configuration/troubleshooting` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/iis-configuration/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/infosphere-isd` directory.
      [`/${DEPLOY_BASE_DIR}/infosphere-isd/`]: [
        {
          text: 'Infosphere isd',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/infosphere-isd/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/infosphere-isd/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/infosphere-isd/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/infosphere-isd/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/java-shell` directory.
      [`/${DEPLOY_BASE_DIR}/java-shell/`]: [
        {
          text: 'Java shell',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/java-shell/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/java-shell/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/java-shell/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/java-shell/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/java-shell/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/jboss-on` directory.
      [`/${DEPLOY_BASE_DIR}/jboss-on/`]: [
        {
          text: 'Jboss on',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/jboss-on/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/jenkins-job-manager` directory.
      [`/${DEPLOY_BASE_DIR}/jenkins-job-manager/`]: [
        {
          text: 'Jenkins job manager',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/jenkins-job-manager/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/jenkins-pipeline-ud-plugin` directory.
      [`/${DEPLOY_BASE_DIR}/jenkins-pipeline-ud-${DEPLOY_BASE_DIR}/`]: [
        {
          text: 'Jenkins pipeline ud plugin',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/jenkins-pipeline-ud-${DEPLOY_BASE_DIR}/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/jenkins-pipeline-ud-${DEPLOY_BASE_DIR}/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/jenkins-pipeline-ud-${DEPLOY_BASE_DIR}/README` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/jenkins-pipeline-ud-${DEPLOY_BASE_DIR}/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/jenkins-ud-plugin` directory.
      [`/${DEPLOY_BASE_DIR}/jenkins-ud-${DEPLOY_BASE_DIR}/`]: [
        {
          text: 'Jenkins ud plugin',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/jenkins-ud-${DEPLOY_BASE_DIR}/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/jenkins-ud-${DEPLOY_BASE_DIR}/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/jenkins-ud-${DEPLOY_BASE_DIR}/README` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/jenkins-ud-${DEPLOY_BASE_DIR}/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/kubernetes` directory.
      [`/${DEPLOY_BASE_DIR}/kubernetes/`]: [
        {
          text: 'Kubernetes',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/kubernetes/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/kubernetes/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/kubernetes/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/kubernetes/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/kubernetes/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/liquibase` directory.
      [`/${DEPLOY_BASE_DIR}/liquibase/`]: [
        {
          text: 'Liquibase',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/liquibase/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/logigear-testarchitect` directory.
      [`/${DEPLOY_BASE_DIR}/logigear-testarchitect/`]: [
        {
          text: 'Logigear testarchitect',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/logigear-testarchitect/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/mesos-marathon` directory.
      [`/${DEPLOY_BASE_DIR}/mesos-marathon/`]: [
        {
          text: 'Mesos marathon',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/mesos-marathon/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/mesos-marathon/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/mesos-marathon/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/mesos-marathon/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/microsoft-visual-studio-team-services-vsts` directory.
      [`/${DEPLOY_BASE_DIR}/microsoft-visual-studio-team-services-vsts/`]: [
        {
          text: 'Microsoft visual studio team services vsts',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/microsoft-visual-studio-team-services-vsts/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/mulesoft` directory.
      [`/${DEPLOY_BASE_DIR}/mulesoft/`]: [
        {
          text: 'Mulesoft',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/mulesoft/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/mulesoft/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/mulesoft/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/mulesoft/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/new-relic` directory.
      [`/${DEPLOY_BASE_DIR}/new-relic/`]: [
        {
          text: 'New relic',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/new-relic/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/nexus-source-config` directory.
      [`/${DEPLOY_BASE_DIR}/nexus-source-config/`]: [
        {
          text: 'Nexus source config',
          items: [
            { text: 'Configuration', link: `/${DEPLOY_BASE_DIR}/nexus-source-config/configuration` },
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/nexus-source-config/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/nexus-source-config/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/nexus-source-config/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/nexus-source-config/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/nexus` directory.
      [`/${DEPLOY_BASE_DIR}/nexus/`]: [
        {
          text: 'Nexus',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/nexus/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/nexus/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/nexus/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/nexus/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/node-js` directory.
      [`/${DEPLOY_BASE_DIR}/node-js/`]: [
        {
          text: 'Node js',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/node-js/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/node-red` directory.
      [`/${DEPLOY_BASE_DIR}/node-red/`]: [
        {
          text: 'Node red',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/node-red/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/nuget-source-config` directory.
      [`/${DEPLOY_BASE_DIR}/nuget-source-config/`]: [
        {
          text: 'Nuget source config',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/nuget-source-config/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/nuget-source-config/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/nuget-source-config/README` },
            { text: 'Settings', link: `/${DEPLOY_BASE_DIR}/nuget-source-config/settings` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/nuget-source-config/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/onetest-server` directory.
      [`/${DEPLOY_BASE_DIR}/onetest-server/`]: [
        {
          text: 'Onetest server',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/onetest-server/downloads` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/onetest-server/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/openshift` directory.
      [`/${DEPLOY_BASE_DIR}/openshift/`]: [
        {
          text: 'Openshift',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/openshift/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/openshift/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/openshift/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/openshift/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/openshift/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/optim` directory.
      [`/${DEPLOY_BASE_DIR}/optim/`]: [
        {
          text: 'Optim',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/optim/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/optim/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/optim/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/optim/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/plugin-air-Android` directory.
      [`/${DEPLOY_BASE_DIR}/plugin-air-Android/`]: [
        {
          text: 'Plugin air Android',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/plugin-air-Android/downloads` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/plugin-air-Android/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/plugin-air-OSB-Configuration-Management` directory.
      [`/${DEPLOY_BASE_DIR}/plugin-air-OSB-Configuration-Management/`]: [
        {
          text: 'Plugin air OSB Configuration Management',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/plugin-air-OSB-Configuration-Management/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/plugin-air-OSB-Configuration-Management/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/plugin-air-OSB-Configuration-Management/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/plugin-air-OSB-Configuration-Management/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/plugin-air-RTC-WorkItems` directory.
      [`/${DEPLOY_BASE_DIR}/plugin-air-RTC-WorkItems/`]: [
        {
          text: 'Plugin air RTC WorkItems',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/plugin-air-RTC-WorkItems/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/plugin-air-RTC-WorkItems/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/plugin-air-RTC-WorkItems/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/plugin-air-RTC-WorkItems/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/plugin-air-TFS-WorkItems` directory.
      [`/${DEPLOY_BASE_DIR}/plugin-air-TFS-WorkItems/`]: [
        {
          text: 'Plugin air TFS WorkItems',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/plugin-air-TFS-WorkItems/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/plugin-air-TFS-WorkItems/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/plugin-air-TFS-WorkItems/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/plugin-air-TFS-WorkItems/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/plugin-air-TFS-WorkItems/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/plugin-air-WLI-Resource-Management` directory.
      [`/${DEPLOY_BASE_DIR}/plugin-air-WLI-Resource-Management/`]: [
        {
          text: 'Plugin air WLI Resource Management',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/plugin-air-WLI-Resource-Management/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/plugin-air-WLI-Resource-Management/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/plugin-air-WLI-Resource-Management/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/plugin-air-WLI-Resource-Management/steps` },
            { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/plugin-air-WLI-Resource-Management/troubleshooting` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/plugin-air-WLI-Resource-Management/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/plugin-air-WLS-Resource-Management` directory.
      [`/${DEPLOY_BASE_DIR}/plugin-air-WLS-Resource-Management/`]: [
        {
          text: 'Plugin air WLS Resource Management',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/plugin-air-WLS-Resource-Management/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/plugin-air-WLS-Resource-Management/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/plugin-air-WLS-Resource-Management/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/plugin-air-WLS-Resource-Management/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/plugin-air-WebLogic-Application-Deployment` directory.
      [`/${DEPLOY_BASE_DIR}/plugin-air-WebLogic-Application-Deployment/`]: [
        {
          text: 'Plugin air WebLogic Application Deployment',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/plugin-air-WebLogic-Application-Deployment/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/plugin-air-WebLogic-Application-Deployment/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/plugin-air-WebLogic-Application-Deployment/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/plugin-air-WebLogic-Application-Deployment/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/plugin-air-WebLogic-Application-Deployment/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/powershell-integration` directory.
      [`/${DEPLOY_BASE_DIR}/powershell-integration/`]: [
        {
          text: 'Powershell integration',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/powershell-integration/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/powershell-integration/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/powershell-integration/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/powershell-integration/steps` },
            { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/powershell-integration/troubleshooting` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/powershell-integration/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/property-utils` directory.
      [`/${DEPLOY_BASE_DIR}/property-utils/`]: [
        {
          text: 'Property utils',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/property-utils/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/puppet` directory.
      [`/${DEPLOY_BASE_DIR}/puppet/`]: [
        {
          text: 'Puppet',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/puppet/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/resource-utilities` directory.
      [`/${DEPLOY_BASE_DIR}/resource-utilities/`]: [
        {
          text: 'Resource utilities',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/resource-utilities/downloads` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/resource-utilities/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/salesforce` directory.
      [`/${DEPLOY_BASE_DIR}/salesforce/`]: [
        {
          text: 'Salesforce',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/salesforce/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/salesforce/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/salesforce/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/salesforce/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/salesforce/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/send-smtp-email` directory.
      [`/${DEPLOY_BASE_DIR}/send-smtp-email/`]: [
        {
          text: 'Send smtp email',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/send-smtp-email/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/send-smtp-email/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/send-smtp-email/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/send-smtp-email/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/send-smtp-email/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/siebel` directory.
      [`/${DEPLOY_BASE_DIR}/siebel/`]: [
        {
          text: 'Siebel',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/siebel/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/skytap-automation-pack` directory.
      [`/${DEPLOY_BASE_DIR}/skytap-automation-pack/`]: [
        {
          text: 'Skytap automation pack',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/skytap-automation-pack/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/slack` directory.
      [`/${DEPLOY_BASE_DIR}/slack/`]: [
        {
          text: 'Slack',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/slack/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/sourceconfig-github-release` directory.
      [`/${DEPLOY_BASE_DIR}/sourceconfig-github-release/`]: [
        {
          text: 'Sourceconfig github release',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/sourceconfig-github-release/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/sourceconfig-github-release/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/sourceconfig-github-release/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/sourceconfig-github-release/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/sourceconfig-nexus-v3` directory.
      [`/${DEPLOY_BASE_DIR}/sourceconfig-nexus-v3/`]: [
        {
          text: 'Sourceconfig nexus v3',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/sourceconfig-nexus-v3/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/sourceconfig-nexus-v3/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/sourceconfig-nexus-v3/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/sourceconfig-nexus-v3/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/sourceconfig-nexus-v3/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/sourceconfig-npm` directory.
      [`/${DEPLOY_BASE_DIR}/sourceconfig-npm/`]: [
        {
          text: 'Sourceconfig npm',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/sourceconfig-npm/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/sourceconfig-npm/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/sourceconfig-npm/README` },
            { text: 'Settings', link: `/${DEPLOY_BASE_DIR}/sourceconfig-npm/settings` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/sourceconfig-npm/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/sybase` directory.
      [`/${DEPLOY_BASE_DIR}/sybase/`]: [
        {
          text: 'Sybase',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/sybase/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/sybase/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/sybase/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/sybase/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/text-utility` directory.
      [`/${DEPLOY_BASE_DIR}/text-utility/`]: [
        {
          text: 'Text utility',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/text-utility/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/tibco` directory.
      [`/${DEPLOY_BASE_DIR}/tibco/`]: [
        {
          text: 'Tibco',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/tibco/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/uBuild` directory.
      [`/${DEPLOY_BASE_DIR}/uBuild/`]: [
        {
          text: 'UBuild',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/uBuild/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/uBuild/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/uBuild/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/uBuild/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/uBuild/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/uBuildSourceConfig` directory.
      [`/${DEPLOY_BASE_DIR}/uBuildSourceConfig/`]: [
        {
          text: 'UBuildSourceConfig',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/uBuildSourceConfig/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/uBuildSourceConfig/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/uBuildSourceConfig/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/uBuildSourceConfig/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/uBuildSourceConfig/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/uDeploy-Application` directory.
      [`/${DEPLOY_BASE_DIR}/uDeploy-Application/`]: [
        {
          text: 'UDeploy Application',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/uDeploy-Application/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/uDeploy-Application/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/uDeploy-Application/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/uDeploy-Application/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/uDeploy-Application/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/uDeploy-Component` directory.
      [`/${DEPLOY_BASE_DIR}/uDeploy-Component/`]: [
        {
          text: 'UDeploy Component',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/uDeploy-Component/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/uDeploy-Component/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/uDeploy-Component/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/uDeploy-Component/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/uDeploy-Component/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/uDeploy-Environment` directory.
      [`/${DEPLOY_BASE_DIR}/uDeploy-Environment/`]: [
        {
          text: 'UDeploy Environment',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/uDeploy-Environment/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/uDeploy-Environment/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/uDeploy-Environment/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/uDeploy-Environment/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/uDeploy-Environment/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/uDeploy-Process` directory.
      [`/${DEPLOY_BASE_DIR}/uDeploy-Process/`]: [
        {
          text: 'UDeploy Process',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/uDeploy-Process/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/uDeploy-Process/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/uDeploy-Process/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/uDeploy-Process/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/uDeploy-Process/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/uDeploy-Resource` directory.
      [`/${DEPLOY_BASE_DIR}/uDeploy-Resource/`]: [
        {
          text: 'UDeploy Resource',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/uDeploy-Resource/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/uDeploy-Resource/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/uDeploy-Resource/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/uDeploy-Resource/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/uDeploy-Resource/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/uDeploy-System` directory.
      [`/${DEPLOY_BASE_DIR}/uDeploy-System/`]: [
        {
          text: 'UDeploy System',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/uDeploy-System/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/uDeploy-System/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/uDeploy-System/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/uDeploy-System/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/uDeploy-Version` directory.
      [`/${DEPLOY_BASE_DIR}/uDeploy-Version/`]: [
        {
          text: 'UDeploy Version',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/uDeploy-Version/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/uDeploy-Version/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/uDeploy-Version/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/uDeploy-Version/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/uDeployConfigManagement` directory.
      [`/${DEPLOY_BASE_DIR}/uDeployConfigManagement/`]: [
        {
          text: 'UDeployConfigManagement',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/uDeployConfigManagement/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/uDeployConfigManagement/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/uDeployConfigManagement/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/uDeployConfigManagement/steps` },
            { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/uDeployConfigManagement/troubleshooting` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/ucr-plugin` directory.
      [`/${DEPLOY_BASE_DIR}/ucr-${DEPLOY_BASE_DIR}/`]: [
        {
          text: 'Ucr plugin',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/ucr-${DEPLOY_BASE_DIR}/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ucr-${DEPLOY_BASE_DIR}/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/ucr-${DEPLOY_BASE_DIR}/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/ucr-${DEPLOY_BASE_DIR}/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/ucr-${DEPLOY_BASE_DIR}/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/venafi` directory.
      [`/${DEPLOY_BASE_DIR}/venafi/`]: [
        {
          text: 'Venafi',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/venafi/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/vmware-airwatch` directory.
      [`/${DEPLOY_BASE_DIR}/vmware-airwatch/`]: [
        {
          text: 'Vmware airwatch',
          items: [
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/vmware-airwatch/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/web-utilities` directory.
      [`/${DEPLOY_BASE_DIR}/web-utilities/`]: [
        {
          text: 'Web utilities',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/web-utilities/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/web-utilities/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/web-utilities/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/web-utilities/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/web-utilities/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/webseal` directory.
      [`/${DEPLOY_BASE_DIR}/webseal/`]: [
        {
          text: 'Webseal',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/webseal/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/webseal/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/webseal/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/webseal/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/websphere-install` directory.
      [`/${DEPLOY_BASE_DIR}/websphere-install/`]: [
        {
          text: 'Websphere install',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/websphere-install/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/websphere-install/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/websphere-install/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/websphere-install/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/websphere-install/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/zOS-external-artifact-download` directory.
      [`/${DEPLOY_BASE_DIR}/zOS-external-artifact-download/`]: [
        {
          text: 'ZOS external artifact download',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/zOS-external-artifact-download/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/zOS-external-artifact-download/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/zOS-external-artifact-download/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/zOS-external-artifact-download/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/zOS-external-artifact-download/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/zOSFileSourceConfig` directory.
      [`/${DEPLOY_BASE_DIR}/zOSFileSourceConfig/`]: [
        {
          text: 'ZOSFileSourceConfig',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/zOSFileSourceConfig/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/zOSFileSourceConfig/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/zOSFileSourceConfig/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/zos-dataset-writer` directory.
      [`/${DEPLOY_BASE_DIR}/zos-dataset-writer/`]: [
        {
          text: 'Zos dataset writer',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/zos-dataset-writer/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/zos-dataset-writer/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/zos-dataset-writer/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/zos-dataset-writer/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/zos-dataset-writer/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/zos-deploy` directory.
      [`/${DEPLOY_BASE_DIR}/zos-deploy/`]: [
        {
          text: 'Zos deploy',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/zos-deploy/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/zos-deploy/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/zos-deploy/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/zos-deploy/steps` },
            { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/zos-deploy/troubleshooting` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/zos-deploy/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/zos-ftp` directory.
      [`/${DEPLOY_BASE_DIR}/zos-ftp/`]: [
        {
          text: 'Zos ftp',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/zos-ftp/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/zos-ftp/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/zos-ftp/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/zos-ftp/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/zos-ibm-integration-bus-ucd` directory.
      [`/${DEPLOY_BASE_DIR}/zos-ibm-integration-bus-ucd/`]: [
        {
          text: 'Zos ibm integration bus ucd',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/zos-ibm-integration-bus-ucd/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/zos-ibm-integration-bus-ucd/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/zos-ibm-integration-bus-ucd/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/zos-ibm-integration-bus-ucd/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/zos-ibm-integration-bus-ucd/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/zos-multi-generate-artifact-info` directory.
      [`/${DEPLOY_BASE_DIR}/zos-multi-generate-artifact-info/`]: [
        {
          text: 'Zos multi generate artifact info',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/zos-multi-generate-artifact-info/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/zos-multi-generate-artifact-info/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/zos-multi-generate-artifact-info/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/zos-multi-generate-artifact-info/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/zos-multi-generate-artifact-info/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/zos-replacetokens-uss` directory.
      [`/${DEPLOY_BASE_DIR}/zos-replacetokens-uss/`]: [
        {
          text: 'Zos replacetokens uss',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/zos-replacetokens-uss/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/zos-replacetokens-uss/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/zos-replacetokens-uss/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/zos-replacetokens-uss/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/zos-replacetokens-uss/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/zos-rexx` directory.
      [`/${DEPLOY_BASE_DIR}/zos-rexx/`]: [
        {
          text: 'Zos rexx',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/zos-rexx/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/zos-rexx/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/zos-rexx/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/zos-rexx/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/zos-rexx/usage` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `${DEPLOY_BASE_DIR}/zosmf` directory.
      [`/${DEPLOY_BASE_DIR}/zosmf/`]: [
        {
          text: 'Zosmf',
          items: [
            { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/zosmf/downloads` },
            { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/zosmf/overview` },
            { text: 'README', link: `/${DEPLOY_BASE_DIR}/zosmf/README` },
            { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/zosmf/steps` },
            { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/zosmf/usage` }
          ]
        }
      ],
      // This sidebar gets displayed when a user
      // is on `plugin/selenium-ucv` directory.
      [`/${VELOCITY_BASE_DIR}/selenium-ucv/`]: [
        {
          text: 'Selenium', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/selenium-ucv/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/testcomplete-ucv` directory.
      [`/${VELOCITY_BASE_DIR}/testcomplete-ucv/`]: [
        {
          text: 'TestComplete', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/testcomplete-ucv/README` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-agility` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-agility/`]: [
        {
          text: 'Digital.ai Agility', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-agility/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-agility/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-agility/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-agility/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-aha` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-aha/`]: [
        {
          text: 'Aha!', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-aha/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-aha/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-aha/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-aha/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-appscan` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-appscan/`]: [
        {
          text: 'HCL AppScan Enterprise (ASE)', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-appscan/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-appscan/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-appscan/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-appscan/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-asoc` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-asoc/`]: [
        {
          text: 'HCL AppScan on Cloud (ASoC)', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-asoc/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-asoc/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-asoc/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-asoc/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-azure` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-azure/`]: [
        {
          text: 'Azure DevOps', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-azure/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-azure/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-azure/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-azure/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-bitbucket-cloud` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-bitbucket-cloud/`]: [
        {
          text: 'BitBucket Cloud', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-bitbucket-cloud/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-bitbucket-cloud/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-bitbucket-cloud/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-bitbucket-cloud/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-bitbucket-server` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-bitbucket-server/`]: [
        {
          text: 'BitBucket Server', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-bitbucket-server/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-bitbucket-server/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-bitbucket-server/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-bitbucket-server/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-blackduck` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-blackduck/`]: [
        {
          text: 'Black Duck', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-blackduck/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-blackduck/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-blackduck/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-blackduck/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-bottleneck-detection` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-bottleneck-detection/`]: [
        {
          text: 'Bottleneck Detection', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-bottleneck-detection/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-bottleneck-detection/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-bottleneck-detection/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-bottleneck-detection/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-build` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-build/`]: [
        {
          text: 'DevOps Build', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-build/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-build/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-build/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-build/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-circleci` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-circleci/`]: [
        {
          text: 'CircleCI', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-circleci/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-circleci/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-circleci/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-circleci/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-control` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-control/`]: [
        {
          text: 'DevOps Control', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-control/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-control/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-control/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-control/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-coverage-core` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-coverage-core/`]: [
        {
          text: 'Code Coverage', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-coverage-core/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-coverage-core/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-coverage-core/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-coverage-core/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-cucumber` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-cucumber/`]: [
        {
          text: 'Cucumber', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-cucumber/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-cucumber/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-cucumber/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-cucumber/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-cypress` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-cypress/`]: [
        {
          text: 'Cypress', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-cypress/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-cypress/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-cypress/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-cypress/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-dependabot` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-dependabot/`]: [
        {
          text: 'GitHub Dependabot', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-dependabot/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-dependabot/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-dependabot/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-dependabot/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-ewm` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-ewm/`]: [
        {
          text: 'IBM Engineering Workflow Management (EWM)', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-ewm/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-ewm/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-ewm/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-ewm/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-fortify-ssc` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-fortify-ssc/`]: [
        {
          text: 'Fortify SSC', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-fortify-ssc/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-fortify-ssc/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-fortify-ssc/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-fortify-ssc/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-github` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-github/`]: [
        {
          text: 'GitHub', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-github/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-github/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-github/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-github/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-gitlab` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-gitlab/`]: [
        {
          text: 'GitLab', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-gitlab/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-gitlab/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-gitlab/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-gitlab/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-handlebars-reporter` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-handlebars-reporter/`]: [
        {
          text: 'Handlebar Reporter', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-handlebars-reporter/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-handlebars-reporter/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-handlebars-reporter/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-handlebars-reporter/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-jenkins` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-jenkins/`]: [
        {
          text: 'Jenkins', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-jenkins/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-jenkins/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-jenkins/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-jenkins/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-jira-service-management` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-jira-service-management/`]: [
        {
          text: 'Jira Service Management', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-jira-service-management/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-jira-service-management/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-jira-service-management/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-jira-service-management/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-jira` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-jira/`]: [
        {
          text: 'Jira', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-jira/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-jira/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-jira/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-jira/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-jmeter` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-jmeter/`]: [
        {
          text: 'Apache JMeter', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-jmeter/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-jmeter/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-jmeter/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-jmeter/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-junit` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-junit/`]: [
        {
          text: 'JUnit', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-junit/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-junit/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-junit/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-junit/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-leankit` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-leankit/`]: [
        {
          text: 'Planview Leankit', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-leankit/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-leankit/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-leankit/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-leankit/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-milestone-risk-estimator` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-milestone-risk-estimator/`]: [
        {
          text: 'Milestone Risk Estimator', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-milestone-risk-estimator/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-milestone-risk-estimator/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-milestone-risk-estimator/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-milestone-risk-estimator/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-njs-unit` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-njs-unit/`]: [
        {
          text: 'Njs-Unit', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-njs-unit/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-njs-unit/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-njs-unit/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-njs-unit/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-onetest-server` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-onetest-server/`]: [
        {
          text: 'Ucv ext onetest server', // No direct match, keeping original
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-onetest-server/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-onetest-server/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-onetest-server/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-onetest-server/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-onetest` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-onetest/`]: [
        {
          text: 'Ucv ext onetest', // No direct match, keeping original
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-onetest/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-onetest/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-onetest/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-onetest/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-plan` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-plan/`]: [
        {
          text: 'DevOps Plan', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-plan/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-plan/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-plan/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-plan/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-rally` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-rally/`]: [
        {
          text: 'Rally', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-rally/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-rally/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-rally/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-rally/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-release-summary-ibm` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-release-summary-ibm/`]: [
        {
          text: 'GenAI summary release-IBM', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-release-summary-ibm/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-release-summary-ibm/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-release-summary-ibm/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-release-summary-ibm/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-release-summary-openai` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-release-summary-openai/`]: [
        {
          text: 'GenAI summary release-OpenAI', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-release-summary-openai/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-release-summary-openai/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-release-summary-openai/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-release-summary-openai/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-rtas` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-rtas/`]: [
        {
          text: 'Ucv ext rtas', // No direct match, keeping original
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-rtas/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-rtas/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-rtas/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-rtas/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-sap-charm` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-sap-charm/`]: [
        {
          text: 'SAP ChaRM', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-sap-charm/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-sap-charm/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-sap-charm/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-sap-charm/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-servicenow` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-servicenow/`]: [
        {
          text: 'ServiceNow', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-servicenow/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-servicenow/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-servicenow/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-servicenow/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-shell` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-shell/`]: [
        {
          text: 'Shell', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-shell/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-shell/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-shell/usage` },
            { text: 'Automation task', link: `${VELOCITY_BASE_DIR}/ucv-ext-shell/Automation-task` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-shell/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-snyk` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-snyk/`]: [
        {
          text: 'Snyk', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-snyk/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-snyk/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-snyk/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-snyk/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-sonarqube` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-sonarqube/`]: [
        {
          text: 'SonarQube', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-sonarqube/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-sonarqube/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-sonarqube/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-sonarqube/downloads` },
            { text: 'Certificate', link: `${VELOCITY_BASE_DIR}/ucv-ext-sonarqube/certificate` },
            { text: 'Scripts', link: `${VELOCITY_BASE_DIR}/ucv-ext-sonarqube/scripts` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-testng` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-testng/`]: [
        {
          text: 'TestNG', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-testng/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-testng/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-testng/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-testng/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-twistlock` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-twistlock/`]: [
        {
          text: 'Twistlock', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-twistlock/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-twistlock/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-twistlock/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-twistlock/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-ucd` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-ucd/`]: [
        {
          text: 'DevOps Deploy', // Updated text (assuming UCD maps to DevOps Deploy)
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-ucd/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-ucd/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-ucd/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-ucd/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-versionone` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-versionone/`]: [
        {
          text: 'CollabNet VersionOne', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-versionone/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-versionone/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-versionone/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-versionone/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-vs-quality` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-vs-quality/`]: [
        {
          text: 'Microsoft Visual Studio Testing', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-vs-quality/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-vs-quality/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-vs-quality/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-vs-quality/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-whitesource` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-whitesource/`]: [
        {
          text: 'WhiteSource', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-whitesource/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-whitesource/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-whitesource/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-whitesource/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucv-ext-yaml-executor` directory.
      [`/${VELOCITY_BASE_DIR}/ucv-ext-yaml-executor/`]: [
        {
          text: 'YAML Executor', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/ucv-ext-yaml-executor/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/ucv-ext-yaml-executor/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/ucv-ext-yaml-executor/usage` },
            { text: 'Steps', link: `${VELOCITY_BASE_DIR}/ucv-ext-yaml-executor/steps` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/ucv-ext-yaml-executor/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/urbancode-velocity` directory.
      [`/${VELOCITY_BASE_DIR}/urbancode-velocity/`]: [
        {
          text: 'urbancode-velocity', // Updated text
          items: [
            { text: 'About', link: `${VELOCITY_BASE_DIR}/urbancode-velocity/README` },
            { text: 'Overview', link: `${VELOCITY_BASE_DIR}/urbancode-velocity/overview` },
            { text: 'Usage', link: `${VELOCITY_BASE_DIR}/urbancode-velocity/usage` },
            { text: 'Downloads', link: `${VELOCITY_BASE_DIR}/urbancode-velocity/downloads` }
          ]
        }
      ]
    },
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/UrbanCode/IBM-UCx-PLUGIN-DOCS-BETA' }
    ],
    footer: {
      copyright: "©️ IBM Corp. 2011, 2017. <br> ©️ HCL Technologies Limited 2018, 2025.",

    }
  }
})
