import type { DefaultTheme } from 'vitepress';
import { DEPLOY_BASE_DIR } from '../constants';

export const ucd: DefaultTheme.Sidebar = {

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/cac` directory.
    [`/${DEPLOY_BASE_DIR}/cac/`]: [
        {
            text: 'Configuration As Code',
            items: [
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/cac/` },
                { text: 'Integrations', link: `/${DEPLOY_BASE_DIR}/cac/integrations` },
                { text: 'Limitations', link: `/${DEPLOY_BASE_DIR}/cac/limitations` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/cac/usage` },
                { text: 'Download', link: `/${DEPLOY_BASE_DIR}/cac/download` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/7-zip/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ASOC/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/AccuRevSourceConfig/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/AgentScript/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/AmazonEC2/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Ant/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Apache/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Artifactory/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ArtifactorySourceConfig/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Autosys/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/AzureDevopsSourceconfig/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/BizTalk/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/CICS-CM/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/CICS/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Chef/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ClearCaseSourceConfig/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Cognos/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/DBUpgrader/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/DeployTools/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/DimensionsSourceConfig/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/DockerSourceConfig/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/F5/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/FileNet-CaseManager/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/FileSystemSourceConfig/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/FileSystemVersionedSourceConfig/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/FileUtils/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/GitSourceConfig/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Groovy/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/HCLDevOpsTestHub/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/HCLDevOpsTestPerf/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/HCLDevOpsTestUI/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/HCLDevOpsTestUIWebUI/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/HCLDevOpsTestVirtualization/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/HCLOneTestAPI/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/HCLOneTestPerf/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/HCLOneTestUI/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/HCLOneTestVirtualization/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/HCLOneTestWebUI/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/HPQualityCenter/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/IBMDevOpsTestHub/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/IBMDevOpsTestPerf/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/IBMDevOpsTestUI/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/IBMDevOpsTestUIWebUI/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/IBMDevOpsTestVirtualization/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/IIS-AdminScripts/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/IIS-AppCmd/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/IIS-MSDeploy/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/IMSz/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Informatica/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/JBoss/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/JIRA/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/LinuxSystemTools/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/MFPFC/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/MSI/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Maven/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/MavenSourceConfig/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/MicrosoftSSIS/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Netscaler/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/OpenShiftSourceConfig/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/PHPCLI/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/PerforceSourceConfig/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/PvcsSourceConfig/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/QTP/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/RAM/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/RAMSourceConfig/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/RFT-UCD/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/RFT-WebUI-UCD/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/RIT-UCD/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/RPM/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/RPT-UCD/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/RTAS-UCD/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/RTVS-UCD/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Rally/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Remedy/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/SAP-CTS/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/SQL-JDBC/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/SQLCmd/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/SQLPlus/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Selenium/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ServiceControlManager/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ServiceNow/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Sharepoint/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Shell/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Subversion-export/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/SubversionSourceConfig/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/SystemInformation/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/TFS-SourceConfig/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/TFS_SCM-SourceConfig/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/TeamCitySourceConfig/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Tomcat/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/UrbanCodePackageManager/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/UrbancodeVFS/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WLDeploy/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WSRR/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WebLogic-WLST/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WebLogicSecurityMgmt/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WebSphereBPM/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WebSphereBPMSourceConfig/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WebSphereCommerce/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WebSphereConfiguration/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WebSphereLiberty/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WebSphereMQ/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WebSphereMessageBroker-CMP/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WebSpherePortal/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Websphere/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WinRSAgentInstall/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WindowsFailoverCluster/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WindowsSystemTools/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/actifio/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/air-plugin-CASCM/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/air-plugin-RTC-scm/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/air-worklight/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ansible/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/apache-hadoop/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/apiconnect/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/apple-xcode/` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/apprenda` directory.
    [`/${DEPLOY_BASE_DIR}/apprenda/`]: [
        {
            text: 'Apprenda',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/apprenda/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/appscan/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/argocd/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/aspera/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/avnet-talos/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/aws-lambda/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/bigfix/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/bluemix-autoscale/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/box/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/cloud-foundry-ibm-containers/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/cloud-foundry/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/cloudant/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/cognos-analytics/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/cyberark/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/datapower/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/datastage/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/datical-db/` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/dbmaestro` directory.
    [`/${DEPLOY_BASE_DIR}/dbmaestro/`]: [
        {
            text: 'Dbmaestro',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/dbmaestro/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/docker-compose/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/docker-${DEPLOY_BASE_DIR}/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/eggplant/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/general-utilities/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/git-install/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/gitlab-generic-packages/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/gitlab-sourceconfig-generic-packages/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/hp-loadrunner/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ibm-ace/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ibm-db2-for-z-os-package/` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/ibm-globalization-pipeline` directory.
    [`/${DEPLOY_BASE_DIR}/ibm-globalization-pipeline/`]: [
        {
            text: 'Ibm globalization pipeline',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ibm-globalization-pipeline/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ibm-installation-manager/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ibm-instana/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ibm-maas360/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ibm-maximo/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ibm-mq-for-z-os-generate-mqsc-commands/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ibm-odm-source-config/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ibm-odm/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ibm-rational-automation-framework-for-websphere/` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/ibm-rational-clearquest` directory.
    [`/${DEPLOY_BASE_DIR}/ibm-rational-clearquest/`]: [
        {
            text: 'Ibm rational clearquest',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ibm-rational-clearquest/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ibm-rational-quality-manager-rqm/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ibm-rational-team-concert-build/` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/ibm-sterling-b2b-integrator` directory.
    [`/${DEPLOY_BASE_DIR}/ibm-sterling-b2b-integrator/`]: [
        {
            text: 'Ibm sterling b2b integrator',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ibm-sterling-b2b-integrator/` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/ibm-vdp` directory.
    [`/${DEPLOY_BASE_DIR}/ibm-vdp/`]: [
        {
            text: 'Ibm vdp',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ibm-vdp/` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/ibm-workload-automation` directory.
    [`/${DEPLOY_BASE_DIR}/ibm-workload-automation/`]: [
        {
            text: 'Ibm workload automation',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ibm-workload-automation/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/iis-configuration/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/infosphere-isd/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/java-shell/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/jboss-on/` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/jenkins-job-manager` directory.
    [`/${DEPLOY_BASE_DIR}/jenkins-job-manager/`]: [
        {
            text: 'Jenkins job manager',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/jenkins-job-manager/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/jenkins-pipeline-ud-${DEPLOY_BASE_DIR}/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/jenkins-ud-${DEPLOY_BASE_DIR}/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/kubernetes/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/liquibase/` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/logigear-testarchitect` directory.
    [`/${DEPLOY_BASE_DIR}/logigear-testarchitect/`]: [
        {
            text: 'Logigear testarchitect',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/logigear-testarchitect/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/mesos-marathon/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/microsoft-visual-studio-team-services-vsts/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/mulesoft/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/new-relic/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/nexus-source-config/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/nexus/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/node-js/` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/node-red` directory.
    [`/${DEPLOY_BASE_DIR}/node-red/`]: [
        {
            text: 'Node red',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/node-red/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/nuget-source-config/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/onetest-server/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/openshift/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/optim/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/plugin-air-Android/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/plugin-air-OSB-Configuration-Management/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/plugin-air-RTC-WorkItems/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/plugin-air-TFS-WorkItems/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/plugin-air-WLI-Resource-Management/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/plugin-air-WLS-Resource-Management/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/plugin-air-WebLogic-Application-Deployment/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/powershell-integration/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/property-utils/` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/puppet` directory.
    [`/${DEPLOY_BASE_DIR}/puppet/`]: [
        {
            text: 'Puppet',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/puppet/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/resource-utilities/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/salesforce/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/send-smtp-email/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/siebel/` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/skytap-automation-pack` directory.
    [`/${DEPLOY_BASE_DIR}/skytap-automation-pack/`]: [
        {
            text: 'Skytap automation pack',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/skytap-automation-pack/` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/slack` directory.
    [`/${DEPLOY_BASE_DIR}/slack/`]: [
        {
            text: 'Slack',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/slack/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/sourceconfig-github-release/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/sourceconfig-nexus-v3/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/sourceconfig-npm/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/sybase/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/text-utility/` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/tibco` directory.
    [`/${DEPLOY_BASE_DIR}/tibco/`]: [
        {
            text: 'Tibco',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/tibco/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/uBuild/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/uBuildSourceConfig/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/uDeploy-Application/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/uDeploy-Component/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/uDeploy-Environment/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/uDeploy-Process/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/uDeploy-Resource/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/uDeploy-System/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/uDeploy-Version/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/uDeployConfigManagement/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ucr-${DEPLOY_BASE_DIR}/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/venafi/` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/vmware-airwatch` directory.
    [`/${DEPLOY_BASE_DIR}/vmware-airwatch/`]: [
        {
            text: 'Vmware airwatch',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/vmware-airwatch/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/web-utilities/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/webseal/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/websphere-install/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/zOS-external-artifact-download/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/zOSFileSourceConfig/` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/zos-dataset-writer/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/zos-deploy/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/zos-ftp/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/zos-ibm-integration-bus-ucd/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/zos-multi-generate-artifact-info/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/zos-replacetokens-uss/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/zos-rexx/` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/zosmf/` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/zosmf/steps` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/zosmf/usage` }
            ]
        }
    ],
};