import type { DefaultTheme } from 'vitepress';
import { BUILD_BASE_DIR } from '../constants';

export const ucb: DefaultTheme.Sidebar = {
    // This sidebar gets displayed when a user
    // is on `plugin/AccuRev` directory.
    [`/${BUILD_BASE_DIR}/AccuRev/`]: [
        {
            text: 'AccuRev',
            items: [
                { text: 'About', link: `${BUILD_BASE_DIR}/AccuRev/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/AccuWork/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Ant/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Artifactory/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/ClearCaseBaseSnapshot/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/ClearCaseUCM/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/ClearQuest/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Clover/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Cobertura/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/CodeStation/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Control/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/CppUnit/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Cucumber/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Docker/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/FileSystem/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/FileUtils/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/FindBugs/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Gerrit/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Git/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Groovy/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/HPFortify/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/HPQualityCenter/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Harvest/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/JIRA/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/JUnit/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Jacoco/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/MSBuild/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/MSTest/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Make/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Maven/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Mercurial/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Mocha/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/NAnt/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/NCover/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/NPM/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/NUnit/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/PMD/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Perforce/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Preflight/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/QTP/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/RTCWorkItems/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Rake/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Rally/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/RationalAppScan/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/RationalTeamConcert/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/ReportPublisher/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Reporting/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Selenium/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Shell/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Sonar/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Sonargraph/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Subversion/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/TFS-WorkItems/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/TFS/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/UCBUtils/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/VisualStudio/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/Xcode/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/bluemix-deployment-risk-analytics/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/checkstyle/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/gradle-2/` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/ibm-dbb` directory.
    [`/${BUILD_BASE_DIR}/ibm-dbb/`]: [
        {
            text: 'IBM Dependency Based Build',
            items: [
                { text: 'About', link: `${BUILD_BASE_DIR}/ibm-dbb/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/ibmucd/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/jac/` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/logigear-testarchitect-2` directory.
    [`/${BUILD_BASE_DIR}/logigear-testarchitect-2/`]: [
        {
            text: 'LogiGear TestArchitect for IBM DevOps Build',
            items: [
                { text: 'About', link: `${BUILD_BASE_DIR}/logigear-testarchitect-2/` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `plugin/salesforce` directory.
    [`/${BUILD_BASE_DIR}/salesforce/`]: [
        {
            text: 'Salesforce',
            items: [
                { text: 'About', link: `${BUILD_BASE_DIR}/salesforce/` },
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
                { text: 'About', link: `${BUILD_BASE_DIR}/urbancode-velocity/` },
                { text: 'Overview', link: `${BUILD_BASE_DIR}/urbancode-velocity/overview` },
                { text: 'Steps', link: `${BUILD_BASE_DIR}/urbancode-velocity/steps` }
            ]
        }
    ],
};