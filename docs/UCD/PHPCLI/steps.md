
# IBM DevOps PHP CLI Tool - Steps

**Run DevOps PHP CLI .php**

cd $DevOps PHP CLI php DevOps PHP CLI .php action argument




| **Action** | **Argument** | **Description** |
| addTeamToComponent | [required] Team name or ID[optional] Component name or ID | Add a component to a team. If the component is not passed as argument, all the components available in DevOps Deploywill be added to the team. |
| addTeamToResource | [required] Team name or ID[optional] Resource name or ID | Add a resource to a team. If the resource is not passed as argument, all the resources available in DevOps Deploywill be added to the team. |
| backup |  | Run a complete back up of DevOps Deploy. |
| createSnapshot | [required] Snapshot JSON file | Create a snapshot based on a JSON file that includes information about snapshot name, application, list of component versions. |
| createVersion | [required] Component name or component ID[required] Version Name
[optional] Description | Create a new component version |
| createVersionAndSnapshot | [required] Snapshot configuration (PHP or JSON) | Get a PHP or JSON file which includes the snapshot configuration. Gets the component versions listed and creates them. After that, it creates the snapshot. |
| exportEnvironmentProperties | [required] Environment id | Export the environment properties in a JSON file |
| importEnvironmentProperties | [required] Environment id[required] Path of the json file exported with the exportEnvironmentProperties | Import the environment properties of a given a JSON file into a uDeploy environment |
| promoteConfig | [optional] If a directory is provided, restore configuration from there[optional] If argument clean is passed, remove new environments imported from application | Upgrade an existing DevOps Deployconfiguration from a directory or from another DevOps Deployserver based on origin and destination servers set in servers.config.php |
| promoteSnapshot | [required] Snapshot name[optional] configuration file
[optional] artifacts directory | Promotes a snapshot from one DevOps Deployserver to a second one, based on the details set in the configuration file. If artifacts are needed, thy will be taken from the artifacts directory set as 3rd argument. |
| requestStatus | [required] ID of process request | Returns the current status of a requested process. |
| restore | [required] Source path for restore[optional] If argument clean is passed, remove new environments imported from application | Run a complete restore of DevOps Deployfrom a structured folder. |
| restoreApplication | [required] Path to Application JSON file **or** path to Application folder | Restore an application from JSON file or application and its components from a folder. |
| restoreComponent | [required] Path to component JSON file | Restore a component from a JSON file, creating it. |
| restoreComponentTemplate | [required] Path to component template JSON file | Restore a component template from a JSON file, creating it. |
| run | [required] Path to JSON file | Requests an application process according to the details set in the JSON file passed as argument |
| runAndWait | [required] Path to JSON file | Requests an application process according to the details set in the JSON file passed as argument. Polls the request until its completed. Returns completion status. |
| upgradeApplication | [required] Path to Application JSON file **or** path to Application folder | Upgrade an existing application from JSON file or application and its components from a folder. Creates the application (and relative components) if missing in target uDeploy server. |
| upgradeComponent | [required] Path to component JSON file[optional] upgradeTemplate
[optional] upgradeProcess | Upgrade an existing component form a JSON file. Creates the component if missing in target DevOps Deployserver. If the arguments upgradeTemplate and/or upgradeProcess are set after file path, template and processes are upgraded too. |
| upgradeComponentTemplate | [required] Path to component template JSON file | Upgrade a component template from a JSON file. Creates the component template if missing in target DevOps Deployserver. |
| ver |  | Prints information about DevOps PHP CLI version and supported DevOps Deployversions |
| waitRequestCompletion | [required] ID of process request | Polls the request until its completed. Returns completion status. |


|Back to ...||Latest Version|IBM DevOps PHP CLI Tool |||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[6.714879](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/PHPCLI/SubversionSourceConfig-6.714879.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Setup](setup.md)|[Downloads](downloads.md)|
