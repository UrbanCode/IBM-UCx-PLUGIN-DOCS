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
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/cac/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/7-zip` directory.
    [`/${DEPLOY_BASE_DIR}/7-zip/`]: [
        {
            text: '7 zip',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/7-zip/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/7-zip/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/7-zip/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/7-zip/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/7-zip/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/ASOC` directory.
    [`/${DEPLOY_BASE_DIR}/ASOC/`]: [
        {
            text: 'ASOC',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ASOC/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ASOC/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/ASOC/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/ASOC/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/AccuRevSourceConfig` directory.
    [`/${DEPLOY_BASE_DIR}/AccuRevSourceConfig/`]: [
        {
            text: 'AccuRevSourceConfig',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/AccuRevSourceConfig/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/AccuRevSourceConfig/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/AccuRevSourceConfig/usage` },
                { text: 'Steps and roles', link: `/${DEPLOY_BASE_DIR}/AccuRevSourceConfig/steps and roles` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/AccuRevSourceConfig/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/AgentScript` directory.
    [`/${DEPLOY_BASE_DIR}/AgentScript/`]: [
        {
            text: 'AgentScript',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/AgentScript/` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/AgentScript/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/AmazonEC2` directory.
    [`/${DEPLOY_BASE_DIR}/AmazonEC2/`]: [
        {
            text: 'AmazonEC2',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/AmazonEC2/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/AmazonEC2/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/AmazonEC2/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/AmazonEC2/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/AmazonEC2/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/Ant` directory.
    [`/${DEPLOY_BASE_DIR}/Ant/`]: [
        {
            text: 'Ant',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Ant/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Ant/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/Ant/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Ant/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Ant/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/Apache` directory.
    [`/${DEPLOY_BASE_DIR}/Apache/`]: [
        {
            text: 'Apache',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Apache/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Apache/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/Apache/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Apache/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Apache/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/Artifactory` directory.
    [`/${DEPLOY_BASE_DIR}/Artifactory/`]: [
        {
            text: 'Artifactory',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Artifactory/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Artifactory/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/Artifactory/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Artifactory/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Artifactory/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/ArtifactorySourceConfig` directory.
    [`/${DEPLOY_BASE_DIR}/ArtifactorySourceConfig/`]: [
        {
            text: 'ArtifactorySourceConfig',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ArtifactorySourceConfig/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ArtifactorySourceConfig/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/ArtifactorySourceConfig/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/ArtifactorySourceConfig/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/ArtifactorySourceConfig/downloads` },
                { text: 'Roles', link: `/${DEPLOY_BASE_DIR}/ArtifactorySourceConfig/roles` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/Autosys` directory.
    [`/${DEPLOY_BASE_DIR}/Autosys/`]: [
        {
            text: 'Autosys',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Autosys/` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Autosys/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/AzureDevopsSourceconfig` directory.
    [`/${DEPLOY_BASE_DIR}/AzureDevopsSourceconfig/`]: [
        {
            text: 'AzureDevopsSourceconfig',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/AzureDevopsSourceconfig/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/AzureDevopsSourceconfig/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/AzureDevopsSourceconfig/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/AzureDevopsSourceconfig/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/AzureDevopsSourceconfig/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/BizTalk` directory.
    [`/${DEPLOY_BASE_DIR}/BizTalk/`]: [
        {
            text: 'BizTalk',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/BizTalk/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/BizTalk/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/BizTalk/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/BizTalk/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/CICS-CM` directory.
    [`/${DEPLOY_BASE_DIR}/CICS-CM/`]: [
        {
            text: 'CICS CM',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/CICS-CM/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/CICS-CM/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/CICS-CM/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/CICS-CM/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/CICS-CM/downloads` },
                { text: 'Component_templates', link: `/${DEPLOY_BASE_DIR}/CICS-CM/component_templates` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/CICS` directory.
    [`/${DEPLOY_BASE_DIR}/CICS/`]: [
        {
            text: 'CICS',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/CICS/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/CICS/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/CICS/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/CICS/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/CICS/downloads` },
                { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/CICS/troubleshooting` },
                { text: 'Component_templates', link: `/${DEPLOY_BASE_DIR}/CICS/component_templates` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/Chef` directory.
    [`/${DEPLOY_BASE_DIR}/Chef/`]: [
        {
            text: 'Chef',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Chef/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Chef/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/Chef/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Chef/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Chef/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/ClearCaseSourceConfig` directory.
    [`/${DEPLOY_BASE_DIR}/ClearCaseSourceConfig/`]: [
        {
            text: 'ClearCaseSourceConfig',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ClearCaseSourceConfig/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ClearCaseSourceConfig/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/ClearCaseSourceConfig/usage` },
                { text: 'Steps and roles', link: `/${DEPLOY_BASE_DIR}/ClearCaseSourceConfig/steps and roles` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/ClearCaseSourceConfig/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/Cognos` directory.
    [`/${DEPLOY_BASE_DIR}/Cognos/`]: [
        {
            text: 'Cognos',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Cognos/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Cognos/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Cognos/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Cognos/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/DBUpgrader` directory.
    [`/${DEPLOY_BASE_DIR}/DBUpgrader/`]: [
        {
            text: 'DBUpgrader',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/DBUpgrader/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/DBUpgrader/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/DBUpgrader/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/DBUpgrader/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/DBUpgrader/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/DeployTools` directory.
    [`/${DEPLOY_BASE_DIR}/DeployTools/`]: [
        {
            text: 'DeployTools',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/DeployTools/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/DeployTools/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/DeployTools/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/DeployTools/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/DimensionsSourceConfig` directory.
    [`/${DEPLOY_BASE_DIR}/DimensionsSourceConfig/`]: [
        {
            text: 'DimensionsSourceConfig',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/DimensionsSourceConfig/` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/DimensionsSourceConfig/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/DockerSourceConfig` directory.
    [`/${DEPLOY_BASE_DIR}/DockerSourceConfig/`]: [
        {
            text: 'DockerSourceConfig',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/DockerSourceConfig/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/DockerSourceConfig/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/DockerSourceConfig/usage` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/DockerSourceConfig/downloads` },
                { text: 'Settings', link: `/${DEPLOY_BASE_DIR}/DockerSourceConfig/settings` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/F5` directory.
    [`/${DEPLOY_BASE_DIR}/F5/`]: [
        {
            text: 'F5',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/F5/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/F5/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/F5/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/F5/downloads` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/FileNet-CaseManager/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/FileNet-CaseManager/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/FileNet-CaseManager/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/FileNet-CaseManager/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/FileNet-CaseManager/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/FileSystemSourceConfig` directory.
    [`/${DEPLOY_BASE_DIR}/FileSystemSourceConfig/`]: [
        {
            text: 'FileSystemSourceConfig',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/FileSystemSourceConfig/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/FileSystemSourceConfig/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/FileSystemSourceConfig/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/FileSystemSourceConfig/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/FileSystemSourceConfig/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/FileSystemVersionedSourceConfig` directory.
    [`/${DEPLOY_BASE_DIR}/FileSystemVersionedSourceConfig/`]: [
        {
            text: 'FileSystemVersionedSourceConfig',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/FileSystemVersionedSourceConfig/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/FileSystemVersionedSourceConfig/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/FileSystemVersionedSourceConfig/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/FileSystemVersionedSourceConfig/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/FileSystemVersionedSourceConfig/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/FileUtils` directory.
    [`/${DEPLOY_BASE_DIR}/FileUtils/`]: [
        {
            text: 'FileUtils',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/FileUtils/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/FileUtils/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/FileUtils/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/FileUtils/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/FileUtils/downloads` },
                { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/FileUtils/troubleshooting` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/GitSourceConfig` directory.
    [`/${DEPLOY_BASE_DIR}/GitSourceConfig/`]: [
        {
            text: 'GitSourceConfig',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/GitSourceConfig/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/GitSourceConfig/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/GitSourceConfig/usage` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/GitSourceConfig/downloads` },
                { text: 'Settings', link: `/${DEPLOY_BASE_DIR}/GitSourceConfig/settings` },
                { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/GitSourceConfig/troubleshooting` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/Groovy` directory.
    [`/${DEPLOY_BASE_DIR}/Groovy/`]: [
        {
            text: 'Groovy',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Groovy/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Groovy/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/Groovy/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Groovy/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Groovy/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/HCLDevOpsTestHub` directory.
    [`/${DEPLOY_BASE_DIR}/HCLDevOpsTestHub/`]: [
        {
            text: 'HCLDevOpsTestHub',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/HCLDevOpsTestHub/` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/HCLDevOpsTestHub/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/HCLDevOpsTestPerf` directory.
    [`/${DEPLOY_BASE_DIR}/HCLDevOpsTestPerf/`]: [
        {
            text: 'HCLDevOpsTestPerf',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/HCLDevOpsTestPerf/` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/HCLDevOpsTestPerf/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/HCLDevOpsTestUI` directory.
    [`/${DEPLOY_BASE_DIR}/HCLDevOpsTestUI/`]: [
        {
            text: 'HCLDevOpsTestUI',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/HCLDevOpsTestUI/` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/HCLDevOpsTestUI/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/HCLDevOpsTestUIWebUI` directory.
    [`/${DEPLOY_BASE_DIR}/HCLDevOpsTestUIWebUI/`]: [
        {
            text: 'HCLDevOpsTestUIWebUI',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/HCLDevOpsTestUIWebUI/` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/HCLDevOpsTestUIWebUI/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/HCLDevOpsTestVirtualization` directory.
    [`/${DEPLOY_BASE_DIR}/HCLDevOpsTestVirtualization/`]: [
        {
            text: 'HCLDevOpsTestVirtualization',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/HCLDevOpsTestVirtualization/` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/HCLDevOpsTestVirtualization/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/HCLOneTestAPI` directory.
    [`/${DEPLOY_BASE_DIR}/HCLOneTestAPI/`]: [
        {
            text: 'HCLOneTestAPI',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/HCLOneTestAPI/` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/HCLOneTestAPI/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/HCLOneTestPerf` directory.
    [`/${DEPLOY_BASE_DIR}/HCLOneTestPerf/`]: [
        {
            text: 'HCLOneTestPerf',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/HCLOneTestPerf/` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/HCLOneTestPerf/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/HCLOneTestUI` directory.
    [`/${DEPLOY_BASE_DIR}/HCLOneTestUI/`]: [
        {
            text: 'HCLOneTestUI',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/HCLOneTestUI/` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/HCLOneTestUI/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/HCLOneTestVirtualization` directory.
    [`/${DEPLOY_BASE_DIR}/HCLOneTestVirtualization/`]: [
        {
            text: 'HCLOneTestVirtualization',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/HCLOneTestVirtualization/` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/HCLOneTestVirtualization/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/HCLOneTestWebUI` directory.
    [`/${DEPLOY_BASE_DIR}/HCLOneTestWebUI/`]: [
        {
            text: 'HCLOneTestWebUI',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/HCLOneTestWebUI/` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/HCLOneTestWebUI/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/HPQualityCenter` directory.
    [`/${DEPLOY_BASE_DIR}/HPQualityCenter/`]: [
        {
            text: 'HPQualityCenter',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/HPQualityCenter/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/HPQualityCenter/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/HPQualityCenter/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/HPQualityCenter/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/HPQualityCenter/downloads` },
                { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/HPQualityCenter/troubleshooting` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/IBMDevOpsTestHub` directory.
    [`/${DEPLOY_BASE_DIR}/IBMDevOpsTestHub/`]: [
        {
            text: 'IBMDevOpsTestHub',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/IBMDevOpsTestHub/` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/IBMDevOpsTestHub/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/IBMDevOpsTestPerf` directory.
    [`/${DEPLOY_BASE_DIR}/IBMDevOpsTestPerf/`]: [
        {
            text: 'IBMDevOpsTestPerf',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/IBMDevOpsTestPerf/` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/IBMDevOpsTestPerf/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/IBMDevOpsTestUI` directory.
    [`/${DEPLOY_BASE_DIR}/IBMDevOpsTestUI/`]: [
        {
            text: 'IBMDevOpsTestUI',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/IBMDevOpsTestUI/` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/IBMDevOpsTestUI/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/IBMDevOpsTestUIWebUI` directory.
    [`/${DEPLOY_BASE_DIR}/IBMDevOpsTestUIWebUI/`]: [
        {
            text: 'IBMDevOpsTestUIWebUI',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/IBMDevOpsTestUIWebUI/` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/IBMDevOpsTestUIWebUI/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/IBMDevOpsTestVirtualization` directory.
    [`/${DEPLOY_BASE_DIR}/IBMDevOpsTestVirtualization/`]: [
        {
            text: 'IBMDevOpsTestVirtualization',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/IBMDevOpsTestVirtualization/` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/IBMDevOpsTestVirtualization/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/IIS-AdminScripts` directory.
    [`/${DEPLOY_BASE_DIR}/IIS-AdminScripts/`]: [
        {
            text: 'IIS AdminScripts',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/IIS-AdminScripts/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/IIS-AdminScripts/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/IIS-AdminScripts/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/IIS-AdminScripts/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/IIS-AppCmd` directory.
    [`/${DEPLOY_BASE_DIR}/IIS-AppCmd/`]: [
        {
            text: 'IIS AppCmd',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/IIS-AppCmd/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/IIS-AppCmd/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/IIS-AppCmd/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/IIS-AppCmd/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/IIS-MSDeploy` directory.
    [`/${DEPLOY_BASE_DIR}/IIS-MSDeploy/`]: [
        {
            text: 'IIS MSDeploy',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/IIS-MSDeploy/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/IIS-MSDeploy/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/IIS-MSDeploy/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/IIS-MSDeploy/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/IIS-MSDeploy/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/IMSz` directory.
    [`/${DEPLOY_BASE_DIR}/IMSz/`]: [
        {
            text: 'IMSz',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/IMSz/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/IMSz/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/IMSz/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/IMSz/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/IMSz/downloads` },
                { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/IMSz/troubleshooting` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/Informatica` directory.
    [`/${DEPLOY_BASE_DIR}/Informatica/`]: [
        {
            text: 'Informatica',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Informatica/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Informatica/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/Informatica/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Informatica/steps` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/JBoss` directory.
    [`/${DEPLOY_BASE_DIR}/JBoss/`]: [
        {
            text: 'JBoss',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/JBoss/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/JBoss/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/JBoss/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/JBoss/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/JBoss/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/JIRA` directory.
    [`/${DEPLOY_BASE_DIR}/JIRA/`]: [
        {
            text: 'JIRA',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/JIRA/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/JIRA/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/JIRA/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/JIRA/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/JIRA/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/LinuxSystemTools` directory.
    [`/${DEPLOY_BASE_DIR}/LinuxSystemTools/`]: [
        {
            text: 'LinuxSystemTools',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/LinuxSystemTools/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/LinuxSystemTools/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/LinuxSystemTools/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/LinuxSystemTools/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/LinuxSystemTools/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/MFPFC` directory.
    [`/${DEPLOY_BASE_DIR}/MFPFC/`]: [
        {
            text: 'MFPFC',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/MFPFC/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/MFPFC/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/MFPFC/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/MFPFC/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/MSI` directory.
    [`/${DEPLOY_BASE_DIR}/MSI/`]: [
        {
            text: 'MSI',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/MSI/` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/MSI/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/Maven` directory.
    [`/${DEPLOY_BASE_DIR}/Maven/`]: [
        {
            text: 'Maven',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Maven/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Maven/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/Maven/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Maven/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Maven/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/MavenSourceConfig` directory.
    [`/${DEPLOY_BASE_DIR}/MavenSourceConfig/`]: [
        {
            text: 'MavenSourceConfig',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/MavenSourceConfig/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/MavenSourceConfig/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/MavenSourceConfig/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/MavenSourceConfig/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/MavenSourceConfig/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/MicrosoftSSIS` directory.
    [`/${DEPLOY_BASE_DIR}/MicrosoftSSIS/`]: [
        {
            text: 'MicrosoftSSIS',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/MicrosoftSSIS/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/MicrosoftSSIS/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/MicrosoftSSIS/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/MicrosoftSSIS/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/Netscaler` directory.
    [`/${DEPLOY_BASE_DIR}/Netscaler/`]: [
        {
            text: 'Netscaler',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Netscaler/` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Netscaler/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/OpenShiftSourceConfig` directory.
    [`/${DEPLOY_BASE_DIR}/OpenShiftSourceConfig/`]: [
        {
            text: 'OpenShiftSourceConfig',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/OpenShiftSourceConfig/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/OpenShiftSourceConfig/overview` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/OpenShiftSourceConfig/downloads` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/PHPCLI/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/PHPCLI/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/PHPCLI/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/PHPCLI/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/PHPCLI/downloads` },
                { text: 'Setup', link: `/${DEPLOY_BASE_DIR}/PHPCLI/setup` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/PerforceSourceConfig` directory.
    [`/${DEPLOY_BASE_DIR}/PerforceSourceConfig/`]: [
        {
            text: 'PerforceSourceConfig',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/PerforceSourceConfig/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/PerforceSourceConfig/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/PerforceSourceConfig/usage` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/PerforceSourceConfig/downloads` },
                { text: 'Settings', link: `/${DEPLOY_BASE_DIR}/PerforceSourceConfig/settings` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/PvcsSourceConfig` directory.
    [`/${DEPLOY_BASE_DIR}/PvcsSourceConfig/`]: [
        {
            text: 'PvcsSourceConfig',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/PvcsSourceConfig/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/PvcsSourceConfig/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/PvcsSourceConfig/usage` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/PvcsSourceConfig/downloads` },
                { text: 'Settings', link: `/${DEPLOY_BASE_DIR}/PvcsSourceConfig/settings` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/QTP` directory.
    [`/${DEPLOY_BASE_DIR}/QTP/`]: [
        {
            text: 'QTP',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/QTP/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/QTP/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/QTP/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/QTP/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/RAM` directory.
    [`/${DEPLOY_BASE_DIR}/RAM/`]: [
        {
            text: 'RAM',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/RAM/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/RAM/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/RAM/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/RAM/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/RAM/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/RAMSourceConfig` directory.
    [`/${DEPLOY_BASE_DIR}/RAMSourceConfig/`]: [
        {
            text: 'RAMSourceConfig',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/RAMSourceConfig/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/RAMSourceConfig/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/RAMSourceConfig/usage` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/RAMSourceConfig/downloads` },
                { text: 'Settings', link: `/${DEPLOY_BASE_DIR}/RAMSourceConfig/settings` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/RFT-UCD` directory.
    [`/${DEPLOY_BASE_DIR}/RFT-UCD/`]: [
        {
            text: 'RFT UCD',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/RFT-UCD/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/RFT-UCD/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/RFT-UCD/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/RFT-UCD/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/RFT-UCD/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/RFT-WebUI-UCD` directory.
    [`/${DEPLOY_BASE_DIR}/RFT-WebUI-UCD/`]: [
        {
            text: 'RFT WebUI UCD',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/RFT-WebUI-UCD/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/RFT-WebUI-UCD/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/RFT-WebUI-UCD/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/RFT-WebUI-UCD/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/RFT-WebUI-UCD/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/RIT-UCD` directory.
    [`/${DEPLOY_BASE_DIR}/RIT-UCD/`]: [
        {
            text: 'RIT UCD',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/RIT-UCD/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/RIT-UCD/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/RIT-UCD/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/RIT-UCD/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/RIT-UCD/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/RPM` directory.
    [`/${DEPLOY_BASE_DIR}/RPM/`]: [
        {
            text: 'RPM',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/RPM/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/RPM/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/RPM/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/RPM/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/RPM/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/RPT-UCD` directory.
    [`/${DEPLOY_BASE_DIR}/RPT-UCD/`]: [
        {
            text: 'RPT UCD',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/RPT-UCD/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/RPT-UCD/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/RPT-UCD/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/RPT-UCD/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/RPT-UCD/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/RTAS-UCD` directory.
    [`/${DEPLOY_BASE_DIR}/RTAS-UCD/`]: [
        {
            text: 'RTAS UCD',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/RTAS-UCD/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/RTAS-UCD/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/RTAS-UCD/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/RTAS-UCD/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/RTAS-UCD/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/RTVS-UCD` directory.
    [`/${DEPLOY_BASE_DIR}/RTVS-UCD/`]: [
        {
            text: 'RTVS UCD',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/RTVS-UCD/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/RTVS-UCD/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/RTVS-UCD/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/RTVS-UCD/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/RTVS-UCD/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/Rally` directory.
    [`/${DEPLOY_BASE_DIR}/Rally/`]: [
        {
            text: 'Rally',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Rally/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Rally/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Rally/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Rally/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/Remedy` directory.
    [`/${DEPLOY_BASE_DIR}/Remedy/`]: [
        {
            text: 'Remedy',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Remedy/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Remedy/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Remedy/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Remedy/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/SAP-CTS` directory.
    [`/${DEPLOY_BASE_DIR}/SAP-CTS/`]: [
        {
            text: 'SAP CTS',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/SAP-CTS/` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/SAP-CTS/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/SQL-JDBC` directory.
    [`/${DEPLOY_BASE_DIR}/SQL-JDBC/`]: [
        {
            text: 'SQL JDBC',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/SQL-JDBC/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/SQL-JDBC/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/SQL-JDBC/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/SQL-JDBC/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/SQL-JDBC/downloads` },
                { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/SQL-JDBC/troubleshooting` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/SQLCmd` directory.
    [`/${DEPLOY_BASE_DIR}/SQLCmd/`]: [
        {
            text: 'SQLCmd',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/SQLCmd/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/SQLCmd/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/SQLCmd/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/SQLCmd/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/SQLCmd/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/SQLPlus` directory.
    [`/${DEPLOY_BASE_DIR}/SQLPlus/`]: [
        {
            text: 'SQLPlus',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/SQLPlus/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/SQLPlus/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/SQLPlus/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/SQLPlus/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/SQLPlus/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/Selenium` directory.
    [`/${DEPLOY_BASE_DIR}/Selenium/`]: [
        {
            text: 'Selenium',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Selenium/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Selenium/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/Selenium/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Selenium/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Selenium/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/ServiceControlManager` directory.
    [`/${DEPLOY_BASE_DIR}/ServiceControlManager/`]: [
        {
            text: 'ServiceControlManager',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ServiceControlManager/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ServiceControlManager/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/ServiceControlManager/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/ServiceControlManager/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/ServiceNow` directory.
    [`/${DEPLOY_BASE_DIR}/ServiceNow/`]: [
        {
            text: 'ServiceNow',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ServiceNow/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ServiceNow/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/ServiceNow/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/ServiceNow/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/ServiceNow/downloads` },
                { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/ServiceNow/troubleshooting` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/Sharepoint` directory.
    [`/${DEPLOY_BASE_DIR}/Sharepoint/`]: [
        {
            text: 'Sharepoint',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Sharepoint/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Sharepoint/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Sharepoint/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Sharepoint/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/Shell` directory.
    [`/${DEPLOY_BASE_DIR}/Shell/`]: [
        {
            text: 'Shell',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Shell/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Shell/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/Shell/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Shell/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Shell/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/Subversion-export` directory.
    [`/${DEPLOY_BASE_DIR}/Subversion-export/`]: [
        {
            text: 'Subversion export',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Subversion-export/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Subversion-export/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/Subversion-export/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Subversion-export/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Subversion-export/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/SubversionSourceConfig` directory.
    [`/${DEPLOY_BASE_DIR}/SubversionSourceConfig/`]: [
        {
            text: 'SubversionSourceConfig',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/SubversionSourceConfig/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/SubversionSourceConfig/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/SubversionSourceConfig/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/SubversionSourceConfig/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/SubversionSourceConfig/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/SystemInformation` directory.
    [`/${DEPLOY_BASE_DIR}/SystemInformation/`]: [
        {
            text: 'SystemInformation',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/SystemInformation/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/SystemInformation/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/SystemInformation/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/SystemInformation/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/TFS-SourceConfig` directory.
    [`/${DEPLOY_BASE_DIR}/TFS-SourceConfig/`]: [
        {
            text: 'TFS SourceConfig',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/TFS-SourceConfig/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/TFS-SourceConfig/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/TFS-SourceConfig/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/TFS-SourceConfig/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/TFS-SourceConfig/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/TFS_SCM-SourceConfig` directory.
    [`/${DEPLOY_BASE_DIR}/TFS_SCM-SourceConfig/`]: [
        {
            text: 'TFS_SCM SourceConfig',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/TFS_SCM-SourceConfig/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/TFS_SCM-SourceConfig/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/TFS_SCM-SourceConfig/usage` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/TFS_SCM-SourceConfig/downloads` },
                { text: 'Settings', link: `/${DEPLOY_BASE_DIR}/TFS_SCM-SourceConfig/settings` },
                { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/TFS_SCM-SourceConfig/troubleshooting` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/TeamCitySourceConfig` directory.
    [`/${DEPLOY_BASE_DIR}/TeamCitySourceConfig/`]: [
        {
            text: 'TeamCitySourceConfig',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/TeamCitySourceConfig/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/TeamCitySourceConfig/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/TeamCitySourceConfig/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/TeamCitySourceConfig/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/TeamCitySourceConfig/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/Tomcat` directory.
    [`/${DEPLOY_BASE_DIR}/Tomcat/`]: [
        {
            text: 'Tomcat',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Tomcat/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Tomcat/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/Tomcat/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Tomcat/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Tomcat/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/UrbanCodePackageManager` directory.
    [`/${DEPLOY_BASE_DIR}/UrbanCodePackageManager/`]: [
        {
            text: 'UrbanCodePackageManager',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/UrbanCodePackageManager/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/UrbanCodePackageManager/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/UrbanCodePackageManager/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/UrbanCodePackageManager/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/UrbancodeVFS` directory.
    [`/${DEPLOY_BASE_DIR}/UrbancodeVFS/`]: [
        {
            text: 'UrbancodeVFS',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/UrbancodeVFS/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/UrbancodeVFS/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/UrbancodeVFS/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/UrbancodeVFS/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/WLDeploy` directory.
    [`/${DEPLOY_BASE_DIR}/WLDeploy/`]: [
        {
            text: 'WLDeploy',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WLDeploy/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WLDeploy/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/WLDeploy/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WLDeploy/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WLDeploy/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/WSRR` directory.
    [`/${DEPLOY_BASE_DIR}/WSRR/`]: [
        {
            text: 'WSRR',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WSRR/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WSRR/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/WSRR/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WSRR/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WSRR/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/WebLogic-WLST` directory.
    [`/${DEPLOY_BASE_DIR}/WebLogic-WLST/`]: [
        {
            text: 'WebLogic WLST',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WebLogic-WLST/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WebLogic-WLST/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WebLogic-WLST/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WebLogic-WLST/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/WebLogicSecurityMgmt` directory.
    [`/${DEPLOY_BASE_DIR}/WebLogicSecurityMgmt/`]: [
        {
            text: 'WebLogicSecurityMgmt',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WebLogicSecurityMgmt/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WebLogicSecurityMgmt/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/WebLogicSecurityMgmt/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WebLogicSecurityMgmt/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WebLogicSecurityMgmt/downloads` },
                { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/WebLogicSecurityMgmt/troubleshooting` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/WebSphereBPM` directory.
    [`/${DEPLOY_BASE_DIR}/WebSphereBPM/`]: [
        {
            text: 'WebSphereBPM',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WebSphereBPM/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WebSphereBPM/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/WebSphereBPM/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WebSphereBPM/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WebSphereBPM/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/WebSphereBPMSourceConfig` directory.
    [`/${DEPLOY_BASE_DIR}/WebSphereBPMSourceConfig/`]: [
        {
            text: 'WebSphereBPMSourceConfig',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WebSphereBPMSourceConfig/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WebSphereBPMSourceConfig/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/WebSphereBPMSourceConfig/usage` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WebSphereBPMSourceConfig/downloads` },
                { text: 'Settings', link: `/${DEPLOY_BASE_DIR}/WebSphereBPMSourceConfig/settings` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/WebSphereCommerce` directory.
    [`/${DEPLOY_BASE_DIR}/WebSphereCommerce/`]: [
        {
            text: 'WebSphereCommerce',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WebSphereCommerce/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WebSphereCommerce/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/WebSphereCommerce/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WebSphereCommerce/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WebSphereCommerce/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/WebSphereConfiguration` directory.
    [`/${DEPLOY_BASE_DIR}/WebSphereConfiguration/`]: [
        {
            text: 'WebSphereConfiguration',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WebSphereConfiguration/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WebSphereConfiguration/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/WebSphereConfiguration/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WebSphereConfiguration/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WebSphereConfiguration/downloads` },
                { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/WebSphereConfiguration/troubleshooting` },
                { text: 'Example applications', link: `/${DEPLOY_BASE_DIR}/WebSphereConfiguration/example applications` },
                { text: 'Example processes', link: `/${DEPLOY_BASE_DIR}/WebSphereConfiguration/example processes` },
                { text: 'Roles', link: `/${DEPLOY_BASE_DIR}/WebSphereConfiguration/roles` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/WebSphereLiberty` directory.
    [`/${DEPLOY_BASE_DIR}/WebSphereLiberty/`]: [
        {
            text: 'WebSphereLiberty',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WebSphereLiberty/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WebSphereLiberty/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/WebSphereLiberty/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WebSphereLiberty/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WebSphereLiberty/downloads` },
                { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/WebSphereLiberty/troubleshooting` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/WebSphereMQ` directory.
    [`/${DEPLOY_BASE_DIR}/WebSphereMQ/`]: [
        {
            text: 'WebSphereMQ',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WebSphereMQ/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WebSphereMQ/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WebSphereMQ/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WebSphereMQ/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/WebSphereMessageBroker-CMP` directory.
    [`/${DEPLOY_BASE_DIR}/WebSphereMessageBroker-CMP/`]: [
        {
            text: 'WebSphereMessageBroker CMP',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WebSphereMessageBroker-CMP/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WebSphereMessageBroker-CMP/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/WebSphereMessageBroker-CMP/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WebSphereMessageBroker-CMP/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WebSphereMessageBroker-CMP/downloads` },
                { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/WebSphereMessageBroker-CMP/troubleshooting` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/WebSpherePortal` directory.
    [`/${DEPLOY_BASE_DIR}/WebSpherePortal/`]: [
        {
            text: 'WebSpherePortal',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WebSpherePortal/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WebSpherePortal/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/WebSpherePortal/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WebSpherePortal/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WebSpherePortal/downloads` },
                { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/WebSpherePortal/troubleshooting` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/Websphere` directory.
    [`/${DEPLOY_BASE_DIR}/Websphere/`]: [
        {
            text: 'Websphere',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/Websphere/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/Websphere/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/Websphere/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/Websphere/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/Websphere/downloads` },
                { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/Websphere/troubleshooting` },
                { text: 'Roles', link: `/${DEPLOY_BASE_DIR}/Websphere/roles` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WinRSAgentInstall/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WinRSAgentInstall/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WinRSAgentInstall/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WinRSAgentInstall/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/WindowsFailoverCluster` directory.
    [`/${DEPLOY_BASE_DIR}/WindowsFailoverCluster/`]: [
        {
            text: 'WindowsFailoverCluster',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WindowsFailoverCluster/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WindowsFailoverCluster/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WindowsFailoverCluster/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WindowsFailoverCluster/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/WindowsSystemTools` directory.
    [`/${DEPLOY_BASE_DIR}/WindowsSystemTools/`]: [
        {
            text: 'WindowsSystemTools',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/WindowsSystemTools/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/WindowsSystemTools/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/WindowsSystemTools/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/WindowsSystemTools/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/WindowsSystemTools/downloads` },
                { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/WindowsSystemTools/troubleshooting` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/air-plugin-CASCM/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/air-plugin-CASCM/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/air-plugin-CASCM/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/air-plugin-CASCM/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/air-plugin-RTC-scm` directory.
    [`/${DEPLOY_BASE_DIR}/air-plugin-RTC-scm/`]: [
        {
            text: 'Air plugin RTC scm',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/air-plugin-RTC-scm/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/air-plugin-RTC-scm/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/air-plugin-RTC-scm/usage` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/air-plugin-RTC-scm/downloads` },
                { text: 'Settings', link: `/${DEPLOY_BASE_DIR}/air-plugin-RTC-scm/settings` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/air-worklight` directory.
    [`/${DEPLOY_BASE_DIR}/air-worklight/`]: [
        {
            text: 'Air worklight',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/air-worklight/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/air-worklight/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/air-worklight/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/air-worklight/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/air-worklight/downloads` },
                { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/air-worklight/troubleshooting` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/ansible` directory.
    [`/${DEPLOY_BASE_DIR}/ansible/`]: [
        {
            text: 'Ansible',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ansible/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ansible/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/ansible/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/ansible/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/ansible/downloads` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/apiconnect/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/apiconnect/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/apiconnect/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/apiconnect/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/apiconnect/downloads` },
                { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/apiconnect/troubleshooting` },
                { text: 'Tutorials', link: `/${DEPLOY_BASE_DIR}/apiconnect/tutorials` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/appscan/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/appscan/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/appscan/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/appscan/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/argocd` directory.
    [`/${DEPLOY_BASE_DIR}/argocd/`]: [
        {
            text: 'Argocd',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/argocd/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/argocd/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/argocd/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/argocd/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/argocd/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/aspera` directory.
    [`/${DEPLOY_BASE_DIR}/aspera/`]: [
        {
            text: 'Aspera',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/aspera/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/aspera/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/aspera/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/aspera/downloads` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/aws-lambda/` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/aws-lambda/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/bigfix` directory.
    [`/${DEPLOY_BASE_DIR}/bigfix/`]: [
        {
            text: 'Bigfix',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/bigfix/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/bigfix/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/bigfix/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/bigfix/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/bluemix-autoscale` directory.
    [`/${DEPLOY_BASE_DIR}/bluemix-autoscale/`]: [
        {
            text: 'Bluemix autoscale',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/bluemix-autoscale/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/bluemix-autoscale/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/bluemix-autoscale/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/bluemix-autoscale/downloads` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/cloud-foundry-ibm-containers/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/cloud-foundry-ibm-containers/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/cloud-foundry-ibm-containers/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/cloud-foundry-ibm-containers/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/cloud-foundry-ibm-containers/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/cloud-foundry` directory.
    [`/${DEPLOY_BASE_DIR}/cloud-foundry/`]: [
        {
            text: 'Cloud foundry',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/cloud-foundry/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/cloud-foundry/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/cloud-foundry/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/cloud-foundry/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/cloud-foundry/downloads` },
                { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/cloud-foundry/troubleshooting` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/cognos-analytics/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/cognos-analytics/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/cognos-analytics/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/cognos-analytics/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/cognos-analytics/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/cyberark` directory.
    [`/${DEPLOY_BASE_DIR}/cyberark/`]: [
        {
            text: 'Cyberark',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/cyberark/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/cyberark/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/cyberark/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/cyberark/steps` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/datapower` directory.
    [`/${DEPLOY_BASE_DIR}/datapower/`]: [
        {
            text: 'Datapower',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/datapower/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/datapower/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/datapower/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/datapower/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/datapower/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/datastage` directory.
    [`/${DEPLOY_BASE_DIR}/datastage/`]: [
        {
            text: 'Datastage',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/datastage/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/datastage/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/datastage/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/datastage/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/datastage/downloads` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/docker-compose/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/docker-compose/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/docker-compose/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/docker-compose/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/docker-plugin` directory.
    [`/${DEPLOY_BASE_DIR}/docker-${DEPLOY_BASE_DIR}/`]: [
        {
            text: 'Docker plugin',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/docker-${DEPLOY_BASE_DIR}/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/docker-${DEPLOY_BASE_DIR}/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/docker-${DEPLOY_BASE_DIR}/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/docker-${DEPLOY_BASE_DIR}/downloads` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/general-utilities/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/general-utilities/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/general-utilities/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/general-utilities/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/general-utilities/downloads` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/gitlab-generic-packages/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/gitlab-generic-packages/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/gitlab-generic-packages/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/gitlab-generic-packages/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/gitlab-generic-packages/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/gitlab-sourceconfig-generic-packages` directory.
    [`/${DEPLOY_BASE_DIR}/gitlab-sourceconfig-generic-packages/`]: [
        {
            text: 'Gitlab sourceconfig generic packages',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/gitlab-sourceconfig-generic-packages/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/gitlab-sourceconfig-generic-packages/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/gitlab-sourceconfig-generic-packages/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/gitlab-sourceconfig-generic-packages/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/gitlab-sourceconfig-generic-packages/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/hp-loadrunner` directory.
    [`/${DEPLOY_BASE_DIR}/hp-loadrunner/`]: [
        {
            text: 'Hp loadrunner',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/hp-loadrunner/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/hp-loadrunner/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/hp-loadrunner/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/hp-loadrunner/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/hp-loadrunner/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/ibm-ace` directory.
    [`/${DEPLOY_BASE_DIR}/ibm-ace/`]: [
        {
            text: 'Ibm ace',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ibm-ace/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ibm-ace/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/ibm-ace/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/ibm-ace/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/ibm-ace/downloads` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ibm-installation-manager/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ibm-installation-manager/overview` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ibm-instana/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ibm-instana/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/ibm-instana/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/ibm-instana/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/ibm-instana/downloads` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ibm-maximo/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ibm-maximo/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/ibm-maximo/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/ibm-maximo/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/ibm-maximo/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/ibm-mq-for-z-os-generate-mqsc-commands` directory.
    [`/${DEPLOY_BASE_DIR}/ibm-mq-for-z-os-generate-mqsc-commands/`]: [
        {
            text: 'Ibm mq for z os generate mqsc commands',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ibm-mq-for-z-os-generate-mqsc-commands/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ibm-mq-for-z-os-generate-mqsc-commands/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/ibm-mq-for-z-os-generate-mqsc-commands/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/ibm-mq-for-z-os-generate-mqsc-commands/steps` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/ibm-odm-source-config` directory.
    [`/${DEPLOY_BASE_DIR}/ibm-odm-source-config/`]: [
        {
            text: 'Ibm odm source config',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ibm-odm-source-config/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ibm-odm-source-config/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/ibm-odm-source-config/usage` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/ibm-odm-source-config/downloads` },
                { text: 'Settings', link: `/${DEPLOY_BASE_DIR}/ibm-odm-source-config/settings` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/ibm-odm` directory.
    [`/${DEPLOY_BASE_DIR}/ibm-odm/`]: [
        {
            text: 'Ibm odm',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ibm-odm/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ibm-odm/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/ibm-odm/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/ibm-odm/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/ibm-odm/downloads` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ibm-rational-quality-manager-rqm/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ibm-rational-quality-manager-rqm/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/ibm-rational-quality-manager-rqm/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/ibm-rational-quality-manager-rqm/steps` },
                { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/ibm-rational-quality-manager-rqm/troubleshooting` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/iis-configuration/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/iis-configuration/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/iis-configuration/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/iis-configuration/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/iis-configuration/downloads` },
                { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/iis-configuration/troubleshooting` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/infosphere-isd` directory.
    [`/${DEPLOY_BASE_DIR}/infosphere-isd/`]: [
        {
            text: 'Infosphere isd',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/infosphere-isd/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/infosphere-isd/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/infosphere-isd/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/infosphere-isd/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/java-shell` directory.
    [`/${DEPLOY_BASE_DIR}/java-shell/`]: [
        {
            text: 'Java shell',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/java-shell/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/java-shell/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/java-shell/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/java-shell/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/java-shell/downloads` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/jenkins-pipeline-ud-${DEPLOY_BASE_DIR}/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/jenkins-pipeline-ud-${DEPLOY_BASE_DIR}/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/jenkins-pipeline-ud-${DEPLOY_BASE_DIR}/usage` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/jenkins-pipeline-ud-${DEPLOY_BASE_DIR}/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/jenkins-ud-plugin` directory.
    [`/${DEPLOY_BASE_DIR}/jenkins-ud-${DEPLOY_BASE_DIR}/`]: [
        {
            text: 'Jenkins ud plugin',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/jenkins-ud-${DEPLOY_BASE_DIR}/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/jenkins-ud-${DEPLOY_BASE_DIR}/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/jenkins-ud-${DEPLOY_BASE_DIR}/usage` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/jenkins-ud-${DEPLOY_BASE_DIR}/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/kubernetes` directory.
    [`/${DEPLOY_BASE_DIR}/kubernetes/`]: [
        {
            text: 'Kubernetes',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/kubernetes/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/kubernetes/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/kubernetes/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/kubernetes/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/kubernetes/downloads` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/mesos-marathon/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/mesos-marathon/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/mesos-marathon/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/mesos-marathon/downloads` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/mulesoft/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/mulesoft/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/mulesoft/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/mulesoft/downloads` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/nexus-source-config/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/nexus-source-config/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/nexus-source-config/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/nexus-source-config/downloads` },
                { text: 'Configuration', link: `/${DEPLOY_BASE_DIR}/nexus-source-config/configuration` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/nexus` directory.
    [`/${DEPLOY_BASE_DIR}/nexus/`]: [
        {
            text: 'Nexus',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/nexus/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/nexus/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/nexus/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/nexus/downloads` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/nuget-source-config/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/nuget-source-config/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/nuget-source-config/usage` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/nuget-source-config/downloads` },
                { text: 'Settings', link: `/${DEPLOY_BASE_DIR}/nuget-source-config/settings` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/onetest-server` directory.
    [`/${DEPLOY_BASE_DIR}/onetest-server/`]: [
        {
            text: 'Onetest server',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/onetest-server/` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/onetest-server/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/openshift` directory.
    [`/${DEPLOY_BASE_DIR}/openshift/`]: [
        {
            text: 'Openshift',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/openshift/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/openshift/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/openshift/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/openshift/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/openshift/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/optim` directory.
    [`/${DEPLOY_BASE_DIR}/optim/`]: [
        {
            text: 'Optim',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/optim/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/optim/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/optim/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/optim/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/plugin-air-Android` directory.
    [`/${DEPLOY_BASE_DIR}/plugin-air-Android/`]: [
        {
            text: 'Plugin air Android',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/plugin-air-Android/` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/plugin-air-Android/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/plugin-air-OSB-Configuration-Management` directory.
    [`/${DEPLOY_BASE_DIR}/plugin-air-OSB-Configuration-Management/`]: [
        {
            text: 'Plugin air OSB Configuration Management',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/plugin-air-OSB-Configuration-Management/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/plugin-air-OSB-Configuration-Management/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/plugin-air-OSB-Configuration-Management/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/plugin-air-OSB-Configuration-Management/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/plugin-air-RTC-WorkItems` directory.
    [`/${DEPLOY_BASE_DIR}/plugin-air-RTC-WorkItems/`]: [
        {
            text: 'Plugin air RTC WorkItems',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/plugin-air-RTC-WorkItems/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/plugin-air-RTC-WorkItems/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/plugin-air-RTC-WorkItems/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/plugin-air-RTC-WorkItems/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/plugin-air-TFS-WorkItems` directory.
    [`/${DEPLOY_BASE_DIR}/plugin-air-TFS-WorkItems/`]: [
        {
            text: 'Plugin air TFS WorkItems',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/plugin-air-TFS-WorkItems/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/plugin-air-TFS-WorkItems/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/plugin-air-TFS-WorkItems/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/plugin-air-TFS-WorkItems/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/plugin-air-TFS-WorkItems/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/plugin-air-WLI-Resource-Management` directory.
    [`/${DEPLOY_BASE_DIR}/plugin-air-WLI-Resource-Management/`]: [
        {
            text: 'Plugin air WLI Resource Management',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/plugin-air-WLI-Resource-Management/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/plugin-air-WLI-Resource-Management/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/plugin-air-WLI-Resource-Management/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/plugin-air-WLI-Resource-Management/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/plugin-air-WLI-Resource-Management/downloads` },
                { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/plugin-air-WLI-Resource-Management/troubleshooting` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/plugin-air-WLS-Resource-Management` directory.
    [`/${DEPLOY_BASE_DIR}/plugin-air-WLS-Resource-Management/`]: [
        {
            text: 'Plugin air WLS Resource Management',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/plugin-air-WLS-Resource-Management/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/plugin-air-WLS-Resource-Management/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/plugin-air-WLS-Resource-Management/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/plugin-air-WLS-Resource-Management/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/plugin-air-WebLogic-Application-Deployment` directory.
    [`/${DEPLOY_BASE_DIR}/plugin-air-WebLogic-Application-Deployment/`]: [
        {
            text: 'Plugin air WebLogic Application Deployment',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/plugin-air-WebLogic-Application-Deployment/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/plugin-air-WebLogic-Application-Deployment/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/plugin-air-WebLogic-Application-Deployment/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/plugin-air-WebLogic-Application-Deployment/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/plugin-air-WebLogic-Application-Deployment/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/powershell-integration` directory.
    [`/${DEPLOY_BASE_DIR}/powershell-integration/`]: [
        {
            text: 'Powershell integration',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/powershell-integration/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/powershell-integration/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/powershell-integration/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/powershell-integration/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/powershell-integration/downloads` },
                { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/powershell-integration/troubleshooting` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/resource-utilities/` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/resource-utilities/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/salesforce` directory.
    [`/${DEPLOY_BASE_DIR}/salesforce/`]: [
        {
            text: 'Salesforce',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/salesforce/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/salesforce/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/salesforce/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/salesforce/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/salesforce/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/send-smtp-email` directory.
    [`/${DEPLOY_BASE_DIR}/send-smtp-email/`]: [
        {
            text: 'Send smtp email',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/send-smtp-email/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/send-smtp-email/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/send-smtp-email/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/send-smtp-email/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/send-smtp-email/downloads` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/sourceconfig-github-release/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/sourceconfig-github-release/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/sourceconfig-github-release/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/sourceconfig-github-release/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/sourceconfig-nexus-v3` directory.
    [`/${DEPLOY_BASE_DIR}/sourceconfig-nexus-v3/`]: [
        {
            text: 'Sourceconfig nexus v3',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/sourceconfig-nexus-v3/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/sourceconfig-nexus-v3/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/sourceconfig-nexus-v3/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/sourceconfig-nexus-v3/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/sourceconfig-nexus-v3/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/sourceconfig-npm` directory.
    [`/${DEPLOY_BASE_DIR}/sourceconfig-npm/`]: [
        {
            text: 'Sourceconfig npm',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/sourceconfig-npm/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/sourceconfig-npm/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/sourceconfig-npm/usage` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/sourceconfig-npm/downloads` },
                { text: 'Settings', link: `/${DEPLOY_BASE_DIR}/sourceconfig-npm/settings` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/sybase` directory.
    [`/${DEPLOY_BASE_DIR}/sybase/`]: [
        {
            text: 'Sybase',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/sybase/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/sybase/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/sybase/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/sybase/downloads` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/uBuild/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/uBuild/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/uBuild/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/uBuild/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/uBuild/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/uBuildSourceConfig` directory.
    [`/${DEPLOY_BASE_DIR}/uBuildSourceConfig/`]: [
        {
            text: 'UBuildSourceConfig',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/uBuildSourceConfig/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/uBuildSourceConfig/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/uBuildSourceConfig/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/uBuildSourceConfig/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/uBuildSourceConfig/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/uDeploy-Application` directory.
    [`/${DEPLOY_BASE_DIR}/uDeploy-Application/`]: [
        {
            text: 'UDeploy Application',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/uDeploy-Application/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/uDeploy-Application/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/uDeploy-Application/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/uDeploy-Application/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/uDeploy-Application/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/uDeploy-Component` directory.
    [`/${DEPLOY_BASE_DIR}/uDeploy-Component/`]: [
        {
            text: 'UDeploy Component',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/uDeploy-Component/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/uDeploy-Component/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/uDeploy-Component/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/uDeploy-Component/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/uDeploy-Component/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/uDeploy-Environment` directory.
    [`/${DEPLOY_BASE_DIR}/uDeploy-Environment/`]: [
        {
            text: 'UDeploy Environment',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/uDeploy-Environment/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/uDeploy-Environment/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/uDeploy-Environment/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/uDeploy-Environment/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/uDeploy-Environment/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/uDeploy-Process` directory.
    [`/${DEPLOY_BASE_DIR}/uDeploy-Process/`]: [
        {
            text: 'UDeploy Process',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/uDeploy-Process/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/uDeploy-Process/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/uDeploy-Process/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/uDeploy-Process/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/uDeploy-Process/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/uDeploy-Resource` directory.
    [`/${DEPLOY_BASE_DIR}/uDeploy-Resource/`]: [
        {
            text: 'UDeploy Resource',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/uDeploy-Resource/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/uDeploy-Resource/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/uDeploy-Resource/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/uDeploy-Resource/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/uDeploy-Resource/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/uDeploy-System` directory.
    [`/${DEPLOY_BASE_DIR}/uDeploy-System/`]: [
        {
            text: 'UDeploy System',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/uDeploy-System/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/uDeploy-System/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/uDeploy-System/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/uDeploy-System/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/uDeploy-Version` directory.
    [`/${DEPLOY_BASE_DIR}/uDeploy-Version/`]: [
        {
            text: 'UDeploy Version',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/uDeploy-Version/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/uDeploy-Version/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/uDeploy-Version/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/uDeploy-Version/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/uDeployConfigManagement` directory.
    [`/${DEPLOY_BASE_DIR}/uDeployConfigManagement/`]: [
        {
            text: 'UDeployConfigManagement',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/uDeployConfigManagement/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/uDeployConfigManagement/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/uDeployConfigManagement/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/uDeployConfigManagement/downloads` },
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/ucr-${DEPLOY_BASE_DIR}/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/ucr-${DEPLOY_BASE_DIR}/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/ucr-${DEPLOY_BASE_DIR}/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/ucr-${DEPLOY_BASE_DIR}/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/ucr-${DEPLOY_BASE_DIR}/downloads` }
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
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/web-utilities/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/web-utilities/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/web-utilities/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/web-utilities/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/web-utilities/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/webseal` directory.
    [`/${DEPLOY_BASE_DIR}/webseal/`]: [
        {
            text: 'Webseal',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/webseal/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/webseal/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/webseal/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/webseal/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/websphere-install` directory.
    [`/${DEPLOY_BASE_DIR}/websphere-install/`]: [
        {
            text: 'Websphere install',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/websphere-install/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/websphere-install/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/websphere-install/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/websphere-install/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/websphere-install/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/zOS-external-artifact-download` directory.
    [`/${DEPLOY_BASE_DIR}/zOS-external-artifact-download/`]: [
        {
            text: 'ZOS external artifact download',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/zOS-external-artifact-download/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/zOS-external-artifact-download/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/zOS-external-artifact-download/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/zOS-external-artifact-download/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/zOS-external-artifact-download/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/zOSFileSourceConfig` directory.
    [`/${DEPLOY_BASE_DIR}/zOSFileSourceConfig/`]: [
        {
            text: 'ZOSFileSourceConfig',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/zOSFileSourceConfig/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/zOSFileSourceConfig/overview` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/zOSFileSourceConfig/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/zos-dataset-writer` directory.
    [`/${DEPLOY_BASE_DIR}/zos-dataset-writer/`]: [
        {
            text: 'Zos dataset writer',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/zos-dataset-writer/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/zos-dataset-writer/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/zos-dataset-writer/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/zos-dataset-writer/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/zos-dataset-writer/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/zos-deploy` directory.
    [`/${DEPLOY_BASE_DIR}/zos-deploy/`]: [
        {
            text: 'Zos deploy',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/zos-deploy/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/zos-deploy/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/zos-deploy/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/zos-deploy/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/zos-deploy/downloads` },
                { text: 'Troubleshooting', link: `/${DEPLOY_BASE_DIR}/zos-deploy/troubleshooting` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/zos-ftp` directory.
    [`/${DEPLOY_BASE_DIR}/zos-ftp/`]: [
        {
            text: 'Zos ftp',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/zos-ftp/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/zos-ftp/overview` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/zos-ftp/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/zos-ftp/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/zos-ibm-integration-bus-ucd` directory.
    [`/${DEPLOY_BASE_DIR}/zos-ibm-integration-bus-ucd/`]: [
        {
            text: 'Zos ibm integration bus ucd',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/zos-ibm-integration-bus-ucd/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/zos-ibm-integration-bus-ucd/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/zos-ibm-integration-bus-ucd/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/zos-ibm-integration-bus-ucd/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/zos-ibm-integration-bus-ucd/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/zos-multi-generate-artifact-info` directory.
    [`/${DEPLOY_BASE_DIR}/zos-multi-generate-artifact-info/`]: [
        {
            text: 'Zos multi generate artifact info',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/zos-multi-generate-artifact-info/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/zos-multi-generate-artifact-info/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/zos-multi-generate-artifact-info/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/zos-multi-generate-artifact-info/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/zos-multi-generate-artifact-info/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/zos-replacetokens-uss` directory.
    [`/${DEPLOY_BASE_DIR}/zos-replacetokens-uss/`]: [
        {
            text: 'Zos replacetokens uss',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/zos-replacetokens-uss/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/zos-replacetokens-uss/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/zos-replacetokens-uss/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/zos-replacetokens-uss/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/zos-replacetokens-uss/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/zos-rexx` directory.
    [`/${DEPLOY_BASE_DIR}/zos-rexx/`]: [
        {
            text: 'Zos rexx',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/zos-rexx/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/zos-rexx/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/zos-rexx/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/zos-rexx/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/zos-rexx/downloads` }
            ]
        }
    ],

    // This sidebar gets displayed when a user
    // is on `${DEPLOY_BASE_DIR}/zosmf` directory.
    [`/${DEPLOY_BASE_DIR}/zosmf/`]: [
        {
            text: 'Zosmf',
            items: [
                { text: 'About', link: `/${DEPLOY_BASE_DIR}/zosmf/` },
                { text: 'Overview', link: `/${DEPLOY_BASE_DIR}/zosmf/overview` },
                { text: 'Usage', link: `/${DEPLOY_BASE_DIR}/zosmf/usage` },
                { text: 'Steps', link: `/${DEPLOY_BASE_DIR}/zosmf/steps` },
                { text: 'Downloads', link: `/${DEPLOY_BASE_DIR}/zosmf/downloads` }
            ]
        }
    ],
};