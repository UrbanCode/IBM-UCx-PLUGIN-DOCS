
# Microsoft IIS MS-Deploy (Azure App Service) - Usage


## Integrating with Azure App Service

To use the plug-in with an Azure App Service website, complete the following steps to download the publish profile for the website:

1. Log in to the [Microsoft Azure Portal](https://portal.azure.com/ "Microsoft Azure Portal").
2. In the left hand navigation pane, select **App Services**, and then select your web app from the list. The overview of your website is displayed. The navigation at the top of the page includes **Settings**, **Tools**, and the **Get Publish Profile** push button.
3. Click **Get Publish Profile** to download your Web Apps publish profile, which contains the information required to use your Web App as a target for the `msdeploy` command.

The following example describes deploying a website from the local file system to an Azure Web App:

1. Download the publish profile of the Azure Web App as described previously.
2. Add the msdeploy step from the Microsoft IIS MS-Deploy plug-in to your deployment process in IBM DevOps Deploy.
1. In the **Verb** field, enter `sync`.
2. In the **Source Provider Type** field, enter `IisApp`.
3. In the **Provider Source** field, enter the path to the website on your local computer. For example, enter `C:\www\ContosBooks`.
4. In the **Destination Provider Type** field, enter `IisApp`.
5. In the **Provider Destination** field, enter text similar to the following text, which is based on the <publishData><publishProfile> element with the publishMethod=MSDeploy attribute in the downloaded publish profile: `'OGContosBooks',ComputerName='https://ogcontosbooks.scm.azurewebsites.net/msdeploy.axd',UserName='$OGContosBooks',Password='************************************************************',IncludeAcls='False',AuthType='Basic'`
* First, in single quotes, specify the msdeploySite value.
* Set the ComputerName attribute to the publishUrl/msdeploy.axd value. Include the schema, either http:// or https://, and remove the port number from the publishUrl value.
* Set the UserName attribute to the userName value.
* Set the Password attribute to the userPWD value.
* Specify `Basic` for the AuthType attribute.
* Set the IncludeAcls attribute to `false` if you do not want to preserve ACLS permissions.
6. In the **Options String** field, enter the following text:
* -enableRule:DoNotDeleteRule (This preserves files on the Azure Web App and only replaces existing files. If not set, all files in the Azure Web App are deleted before the local files are uploaded.)
* -allowUntrusted (This allows an untrusted server certificate when using SSL.)
7. In the **Command Path** field, enter the full path to the directory where the msdeploy executable is stored. For example, enter `C:\Program Files\IIS\Microsoft Web Deploy V3\`.
3. Click **OK** to save the step properties, and then save the process.
4. Run the configured step as part of a deployment process. The local website is deployed to your Azure Web App.

|Back to ...||Latest Version|Microsoft IIS MS-Deploy (Azure App Service) ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[6.1164186](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/IIS-MSDeploy/ucd-IIS-MSDeploy-6.1164186.zip)|[Readme](README.md)|[Overview](overview.md)|[Steps](steps.md)|[Downloads](downloads.md)|
