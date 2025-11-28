import type { DefaultTheme } from 'vitepress';
import { VELOCITY_BASE_DIR } from '../constants';

export const ucv: DefaultTheme.Sidebar = {
    // This sidebar gets displayed when a user
    // is on `plugin/selenium-ucv` directory.
    [`/${VELOCITY_BASE_DIR}/selenium-ucv/`]: [
        {
            text: 'Selenium', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/selenium-ucv/` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/testcomplete-ucv` directory.
    [`/${VELOCITY_BASE_DIR}/testcomplete-ucv/`]: [
        {
            text: 'TestComplete', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/testcomplete-ucv/` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-agility` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-agility/`]: [
        {
            text: 'Digital.ai Agility', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-agility/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-agility/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-agility/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-agility/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-aha` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-aha/`]: [
        {
            text: 'Aha!', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-aha/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-aha/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-aha/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-aha/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-appscan` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-appscan/`]: [
        {
            text: 'HCL AppScan Enterprise (ASE)', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-appscan/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-appscan/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-appscan/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-appscan/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-asoc` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-asoc/`]: [
        {
            text: 'HCL AppScan on Cloud (ASoC)', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-asoc/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-asoc/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-asoc/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-asoc/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-azure` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-azure/`]: [
        {
            text: 'Azure DevOps', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-azure/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-azure/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-azure/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-azure/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-bitbucket-cloud` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-bitbucket-cloud/`]: [
        {
            text: 'BitBucket Cloud', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-bitbucket-cloud/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-bitbucket-cloud/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-bitbucket-cloud/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-bitbucket-cloud/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-bitbucket-server` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-bitbucket-server/`]: [
        {
            text: 'BitBucket Server', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-bitbucket-server/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-bitbucket-server/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-bitbucket-server/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-bitbucket-server/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-blackduck` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-blackduck/`]: [
        {
            text: 'Black Duck', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-blackduck/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-blackduck/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-blackduck/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-blackduck/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-bottleneck-detection` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-bottleneck-detection/`]: [
        {
            text: 'Bottleneck Detection', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-bottleneck-detection/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-bottleneck-detection/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-bottleneck-detection/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-bottleneck-detection/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-build` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-build/`]: [
        {
            text: 'DevOps Build', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-build/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-build/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-build/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-build/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-circleci` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-circleci/`]: [
        {
            text: 'CircleCI', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-circleci/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-circleci/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-circleci/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-circleci/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-control` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-control/`]: [
        {
            text: 'DevOps Control', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-control/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-control/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-control/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-control/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-coverage-core` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-coverage-core/`]: [
        {
            text: 'Code Coverage', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-coverage-core/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-coverage-core/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-coverage-core/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-coverage-core/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-cucumber` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-cucumber/`]: [
        {
            text: 'Cucumber', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-cucumber/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-cucumber/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-cucumber/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-cucumber/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-cypress` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-cypress/`]: [
        {
            text: 'Cypress', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-cypress/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-cypress/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-cypress/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-cypress/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-dependabot` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-dependabot/`]: [
        {
            text: 'GitHub Dependabot', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-dependabot/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-dependabot/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-dependabot/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-dependabot/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-ewm` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-ewm/`]: [
        {
            text: 'IBM Engineering Workflow Management (EWM)', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-ewm/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-ewm/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-ewm/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-ewm/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-fortify-ssc` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-fortify-ssc/`]: [
        {
            text: 'Fortify SSC', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-fortify-ssc/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-fortify-ssc/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-fortify-ssc/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-fortify-ssc/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-github` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-github/`]: [
        {
            text: 'GitHub', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-github/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-github/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-github/usage` },
                { text: 'GenAI Productivity Metrics', link: `/${VELOCITY_BASE_DIR}/ucv-ext-github/gitHubCopilot` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-github/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-gitlab` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-gitlab/`]: [
        {
            text: 'GitLab', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-gitlab/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-gitlab/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-gitlab/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-gitlab/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-handlebars-reporter` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-handlebars-reporter/`]: [
        {
            text: 'Handlebar Reporter', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-handlebars-reporter/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-handlebars-reporter/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-handlebars-reporter/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-handlebars-reporter/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-jenkins` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-jenkins/`]: [
        {
            text: 'Jenkins', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-jenkins/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-jenkins/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-jenkins/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-jenkins/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-jira-service-management` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-jira-service-management/`]: [
        {
            text: 'Jira Service Management', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-jira-service-management/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-jira-service-management/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-jira-service-management/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-jira-service-management/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-jira` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-jira/`]: [
        {
            text: 'Jira', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-jira/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-jira/overview` },
                { text: 'Custom Field Mapping', link: `/${VELOCITY_BASE_DIR}/ucv-ext-jira/jiraCustom` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-jira/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-jira/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-jmeter` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-jmeter/`]: [
        {
            text: 'Apache JMeter', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-jmeter/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-jmeter/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-jmeter/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-jmeter/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-junit` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-junit/`]: [
        {
            text: 'JUnit', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-junit/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-junit/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-junit/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-junit/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-leankit` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-leankit/`]: [
        {
            text: 'Planview Leankit', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-leankit/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-leankit/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-leankit/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-leankit/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-milestone-risk-estimator` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-milestone-risk-estimator/`]: [
        {
            text: 'Milestone Risk Estimator', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-milestone-risk-estimator/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-milestone-risk-estimator/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-milestone-risk-estimator/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-milestone-risk-estimator/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-njs-unit` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-njs-unit/`]: [
        {
            text: 'Njs-Unit', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-njs-unit/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-njs-unit/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-njs-unit/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-njs-unit/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-onetest-server` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-onetest-server/`]: [
        {
            text: 'Ucv ext onetest server', // No direct match, keeping original
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-onetest-server/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-onetest-server/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-onetest-server/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-onetest-server/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-onetest` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-onetest/`]: [
        {
            text: 'Ucv ext onetest', // No direct match, keeping original
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-onetest/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-onetest/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-onetest/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-onetest/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-plan` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-plan/`]: [
        {
            text: 'DevOps Plan', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-plan/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-plan/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-plan/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-plan/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-rally` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-rally/`]: [
        {
            text: 'Rally', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-rally/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-rally/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-rally/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-rally/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-release-summary-ibm` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-release-summary-ibm/`]: [
        {
            text: 'GenAI summary release-IBM', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-release-summary-ibm/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-release-summary-ibm/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-release-summary-ibm/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-release-summary-ibm/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-release-summary-openai` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-release-summary-openai/`]: [
        {
            text: 'GenAI summary release-OpenAI', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-release-summary-openai/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-release-summary-openai/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-release-summary-openai/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-release-summary-openai/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-rtas` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-rtas/`]: [
        {
            text: 'Ucv ext rtas', // No direct match, keeping original
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-rtas/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-rtas/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-rtas/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-rtas/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-sap-charm` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-sap-charm/`]: [
        {
            text: 'SAP ChaRM', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-sap-charm/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-sap-charm/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-sap-charm/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-sap-charm/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-servicenow` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-servicenow/`]: [
        {
            text: 'ServiceNow', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-servicenow/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-servicenow/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-servicenow/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-servicenow/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-shell` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-shell/`]: [
        {
            text: 'Shell', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-shell/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-shell/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-shell/usage` },
                { text: 'Automation task', link: `/${VELOCITY_BASE_DIR}/ucv-ext-shell/Automation-task` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-shell/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-snyk` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-snyk/`]: [
        {
            text: 'Snyk', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-snyk/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-snyk/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-snyk/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-snyk/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-sonarqube` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-sonarqube/`]: [
        {
            text: 'SonarQube', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-sonarqube/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-sonarqube/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-sonarqube/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-sonarqube/downloads` },
                { text: 'Certificate', link: `/${VELOCITY_BASE_DIR}/ucv-ext-sonarqube/certificate` },
                { text: 'Scripts', link: `/${VELOCITY_BASE_DIR}/ucv-ext-sonarqube/scripts` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-testng` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-testng/`]: [
        {
            text: 'TestNG', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-testng/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-testng/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-testng/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-testng/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-twistlock` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-twistlock/`]: [
        {
            text: 'Twistlock', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-twistlock/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-twistlock/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-twistlock/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-twistlock/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-ucd` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-ucd/`]: [
        {
            text: 'DevOps Deploy', // Updated text (assuming UCD maps to DevOps Deploy)
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-ucd/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-ucd/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-ucd/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-ucd/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-versionone` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-versionone/`]: [
        {
            text: 'CollabNet VersionOne', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-versionone/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-versionone/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-versionone/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-versionone/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-vs-quality` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-vs-quality/`]: [
        {
            text: 'Microsoft Visual Studio Testing', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-vs-quality/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-vs-quality/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-vs-quality/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-vs-quality/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-whitesource` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-whitesource/`]: [
        {
            text: 'WhiteSource', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-whitesource/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-whitesource/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-whitesource/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-whitesource/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ucv-ext-yaml-executor` directory.
    [`/${VELOCITY_BASE_DIR}/ucv-ext-yaml-executor/`]: [
        {
            text: 'YAML Executor', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/ucv-ext-yaml-executor/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/ucv-ext-yaml-executor/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/ucv-ext-yaml-executor/usage` },
                { text: 'Steps', link: `/${VELOCITY_BASE_DIR}/ucv-ext-yaml-executor/steps` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/ucv-ext-yaml-executor/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/urbancode-velocity` directory.
    [`/${VELOCITY_BASE_DIR}/urbancode-velocity/`]: [
        {
            text: 'urbancode-velocity', // Updated text
            items: [
                { text: 'About', link: `/${VELOCITY_BASE_DIR}/urbancode-velocity/` },
                { text: 'Overview', link: `/${VELOCITY_BASE_DIR}/urbancode-velocity/overview` },
                { text: 'Usage', link: `/${VELOCITY_BASE_DIR}/urbancode-velocity/usage` },
                { text: 'Downloads', link: `/${VELOCITY_BASE_DIR}/urbancode-velocity/downloads` }
            ]
        }
    ],
};