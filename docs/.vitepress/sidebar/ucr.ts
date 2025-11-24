import type { DefaultTheme } from 'vitepress';
import { RELEASE_BASE_DIR } from '../constants';

export const ucr: DefaultTheme.Sidebar = {
    // This sidebar gets displayed when a user
    // is on `plugin/DeployReport` directory.
    [`/${RELEASE_BASE_DIR}/DeployReport/`]: [
        {
            text: 'Deployment Reports', // Changed title
            items: [
                { text: 'About', link: `/${RELEASE_BASE_DIR}/DeployReport/` },
                { text: 'Overview', link: `/${RELEASE_BASE_DIR}/DeployReport/overview` },
                { text: 'Usage', link: `/${RELEASE_BASE_DIR}/DeployReport/usage` },
                { text: 'Downloads', link: `/${RELEASE_BASE_DIR}/DeployReport/downloads` },
                { text: 'Settings', link: `/${RELEASE_BASE_DIR}/DeployReport/settings` } // Other items
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/RTC` directory.
    [`/${RELEASE_BASE_DIR}/RTC/`]: [
        {
            text: 'Rational Team Concert v6', // Changed title
            items: [
                { text: 'About', link: `/${RELEASE_BASE_DIR}/RTC/` },
                { text: 'Overview', link: `/${RELEASE_BASE_DIR}/RTC/overview` },
                { text: 'Usage', link: `/${RELEASE_BASE_DIR}/RTC/usage` },
                { text: 'Downloads', link: `/${RELEASE_BASE_DIR}/RTC/downloads` },
                { text: 'Settings', link: `/${RELEASE_BASE_DIR}/RTC/settings` } // Other items
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/Rally` directory.
    [`/${RELEASE_BASE_DIR}/Rally/`]: [
        {
            text: 'Rally', // Changed title
            items: [
                { text: 'About', link: `/${RELEASE_BASE_DIR}/Rally/` },
                { text: 'Overview', link: `/${RELEASE_BASE_DIR}/Rally/overview` },
                { text: 'Usage', link: `/${RELEASE_BASE_DIR}/Rally/usage` },
                { text: 'Downloads', link: `/${RELEASE_BASE_DIR}/Rally/downloads` },
                { text: 'Settings', link: `/${RELEASE_BASE_DIR}/Rally/settings` } // Other items
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ibm-urbancode-deploy` directory.
    [`/${RELEASE_BASE_DIR}/ibm-urbancode-deploy/`]: [
        {
            text: 'IBM UrbanCode Deploy', // Changed title
            items: [
                { text: 'About', link: `/${RELEASE_BASE_DIR}/ibm-urbancode-deploy/` },
                { text: 'Overview', link: `/${RELEASE_BASE_DIR}/ibm-urbancode-deploy/overview` },
                { text: 'Usage', link: `/${RELEASE_BASE_DIR}/ibm-urbancode-deploy/usage` },
                { text: 'Downloads', link: `/${RELEASE_BASE_DIR}/ibm-urbancode-deploy/downloads` },
                { text: 'Settings', link: `/${RELEASE_BASE_DIR}/ibm-urbancode-deploy/settings` } // Other items
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/servicenow-4` directory.
    [`/${RELEASE_BASE_DIR}/servicenow-4/`]: [
        {
            text: 'ServiceNow', // Changed title
            items: [
                { text: 'About', link: `/${RELEASE_BASE_DIR}/servicenow-4/` },
                { text: 'Overview', link: `/${RELEASE_BASE_DIR}/servicenow-4/overview` },
                { text: 'Usage', link: `/${RELEASE_BASE_DIR}/servicenow-4/usage` },
                { text: 'Downloads', link: `/${RELEASE_BASE_DIR}/servicenow-4/downloads` },
                { text: 'Steps', link: `/${RELEASE_BASE_DIR}/servicenow-4/steps` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucr-jenkins-ci` directory.
    [`/${RELEASE_BASE_DIR}/ucr-jenkins-ci/`]: [
        {
            text: 'Jenkins for IBM UrbanCode Release', // Changed title
            items: [
                { text: 'About', link: `/${RELEASE_BASE_DIR}/ucr-jenkins-ci/` },
                { text: 'Overview', link: `/${RELEASE_BASE_DIR}/ucr-jenkins-ci/overview` },
                { text: 'Usage', link: `/${RELEASE_BASE_DIR}/ucr-jenkins-ci/usage` },
                { text: 'Steps', link: `/${RELEASE_BASE_DIR}/ucr-jenkins-ci/steps` },
                { text: 'Downloads', link: `/${RELEASE_BASE_DIR}/ucr-jenkins-ci/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucr-plugin-ansible` directory.
    [`/${RELEASE_BASE_DIR}/ucr-plugin-ansible/`]: [
        {
            text: 'Ansible Tower', // Changed title
            items: [
                { text: 'About', link: `/${RELEASE_BASE_DIR}/ucr-plugin-ansible/` },
                { text: 'Overview', link: `/${RELEASE_BASE_DIR}/ucr-plugin-ansible/overview` },
                { text: 'Usage', link: `/${RELEASE_BASE_DIR}/ucr-plugin-ansible/usage` },
                { text: 'Steps', link: `/${RELEASE_BASE_DIR}/ucr-plugin-ansible/steps` },
                { text: 'Downloads', link: `/${RELEASE_BASE_DIR}/ucr-plugin-ansible/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucr-plugin-hp-alm` directory.
    [`/${RELEASE_BASE_DIR}/ucr-plugin-hp-alm/`]: [
        {
            text: 'HP Quality Center (ALM)', // Changed title
            items: [
                { text: 'About', link: `/${RELEASE_BASE_DIR}/ucr-plugin-hp-alm/` },
                { text: 'Overview', link: `/${RELEASE_BASE_DIR}/ucr-plugin-hp-alm/overview` },
                { text: 'Downloads', link: `/${RELEASE_BASE_DIR}/ucr-plugin-hp-alm/downloads` },
                { text: 'Settings', link: `/${RELEASE_BASE_DIR}/ucr-plugin-hp-alm/settings` } // Other items
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucr-plugin-jira` directory.
    [`/${RELEASE_BASE_DIR}/ucr-plugin-jira/`]: [
        {
            text: 'Jira for IBM UrbanCode Release', // Changed title
            items: [
                { text: 'About', link: `/${RELEASE_BASE_DIR}/ucr-plugin-jira/` },
                { text: 'Overview', link: `/${RELEASE_BASE_DIR}/ucr-plugin-jira/overview` },
                { text: 'Downloads', link: `/${RELEASE_BASE_DIR}/ucr-plugin-jira/downloads` },
                { text: 'Settings', link: `/${RELEASE_BASE_DIR}/ucr-plugin-jira/settings` } // Other items
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucr-plugin-nolio` directory.
    [`/${RELEASE_BASE_DIR}/ucr-plugin-nolio/`]: [
        {
            text: 'CA Nolio', // Changed title
            items: [
                { text: 'About', link: `/${RELEASE_BASE_DIR}/ucr-plugin-nolio/` },
                { text: 'Overview', link: `/${RELEASE_BASE_DIR}/ucr-plugin-nolio/overview` },
                { text: 'Downloads', link: `/${RELEASE_BASE_DIR}/ucr-plugin-nolio/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucr-plugin-slack` directory.
    [`/${RELEASE_BASE_DIR}/ucr-plugin-slack/`]: [
        {
            text: 'Slack for IBM UrbanCode Release', // Changed title
            items: [
                { text: 'About', link: `/${RELEASE_BASE_DIR}/ucr-plugin-slack/` },
                { text: 'Overview', link: `/${RELEASE_BASE_DIR}/ucr-plugin-slack/overview` },
                { text: 'Usage', link: `/${RELEASE_BASE_DIR}/ucr-plugin-slack/usage` },
                { text: 'Steps', link: `/${RELEASE_BASE_DIR}/ucr-plugin-slack/steps` },
                { text: 'Downloads', link: `/${RELEASE_BASE_DIR}/ucr-plugin-slack/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucr-plugin-tfs` directory.
    [`/${RELEASE_BASE_DIR}/ucr-plugin-tfs/`]: [
        {
            text: 'Microsoft Team Foundation Server (TFS)', // Changed title
            items: [
                { text: 'About', link: `/${RELEASE_BASE_DIR}/ucr-plugin-tfs/` },
                { text: 'Overview', link: `/${RELEASE_BASE_DIR}/ucr-plugin-tfs/overview` },
                { text: 'Downloads', link: `/${RELEASE_BASE_DIR}/ucr-plugin-tfs/downloads` },
                { text: 'Settings', link: `/${RELEASE_BASE_DIR}/ucr-plugin-tfs/settings` } // Other items
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucr-xl-deploy` directory.
    [`/${RELEASE_BASE_DIR}/ucr-xl-deploy/`]: [
        {
            text: 'XL Deploy', // Changed title
            items: [
                { text: 'About', link: `/${RELEASE_BASE_DIR}/ucr-xl-deploy/` },
                { text: 'Overview', link: `/${RELEASE_BASE_DIR}/ucr-xl-deploy/overview` },
                { text: 'Usage', link: `/${RELEASE_BASE_DIR}/ucr-xl-deploy/usage` },
                { text: 'Steps', link: `/${RELEASE_BASE_DIR}/ucr-xl-deploy/steps` },
                { text: 'Downloads', link: `/${RELEASE_BASE_DIR}/ucr-xl-deploy/downloads` }
            ]
        }
    ],
};