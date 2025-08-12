
# IBM WebSphere Portal - Process Steps

* [Deploy Portal WAR](#deploy_portal_war)
* [Deploy Theme](#deploy_theme)
* [Execute ConfigEngine command](#execute_configengine_command)
* [Install PAA](#install_paa)
* [Invoke XMLAccess script](#invoke_xmlaccess_script)


## Deploy Portal WAR

Deploys a WAR on a WebSphere Portal server


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application WAR file name | String | The name of the application WAR file. If left blank, the name of the component is used | No |
| Application context root | String | Specify the applications context root. If left blank, /wps/``${Application display name}`` is used as the default application context root | No |
| Application display name | String | Specify application display name in the administative console. If left blank, the default display name used is constructed using the uid of the application mentioned in the portlet.xml file in the WAR. The logic to construct the display name is to replace all whitespace characters in the uid by an underscore character \_ and prefix PA\_ to it | No |
| Portal Server context root | String | Specify the portal servers context root. If left blank, /wps is used as the default portal server context root | No |
| Use soap.client.props file | Boolean | Use soap.client.props file for Portal administrator credential | No |
| Virtual Portal context | String | If deploying the WAR on a virtual portal, specify the virtual portal context root | No |
| Virtual Portal hostname | String | If deploying the WAR on a virtual portal, specify the virtual portal hostname | No |
| WebSphere Portal server installation home | String | Portal installation home | No |
| WebSphere Portal server profile home | String | Portal server profile home | No |
| WebSphere portal server administrator password | Password | WebSphere portal server administrator user password | No |
| WebSphere portal server administrator username | String | WebSphere portal server administrator username | No |
| WebSphere portal server configuration port | String | WebSphere portal server configuration port | No |

## Deploy Theme

Deploys the static contents of a theme along with the related skins on a WebSphere Portal server



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Portal Server context root | String | Specify the portal servers context root. If left blank, /wps is used as the default portal server context root | No |
| Theme context root | String | The context root of the web application representing the theme. If left blank, the name of the WAR/ZIP filename containing the theme artifacts is used. | No |
| Theme default skin | String | The uniquename of the skin to be used as the default skin for this theme. If left blank, the first child directory of the themes/skins directory is used. | No |
| Theme layout directory | String | The directory in the theme WAR/ZIP file under the /themes directory that contains the theme layout details | No |
| Theme resource root | String | The resource root entry for the theme. If left blank, the name of the WAR/ZIP filename containing the theme artifacts is used. | No |
| Theme static content file name | String | The name of the file containing the theme static contents. Valid file extensions are .war and .zip. The default extension is .war. If left blank, the name of the component is used. | No |
| Theme template directory | String | The name of the directory in the theme WAR/ZIP file that contains the theme template. All theme templates are usually placed under the /themes directory in the WAR/ZIP file. If left blank, the first child directory of the /themes directory is used. | No |
| Theme title | String | The theme title in different locales of choice. Format: LOCALE=TITLE,[LOCALE=TITLE]. Supply the theme title in different locales as a comma separated list of locale title pairs. All leading and trailing whitespace characters in the pairs will be ignored. If left blank, the default locale used is en and title is set to the name of the component. | No |
| Theme unique name | String | The uniquename for this theme within the Portal server. If left blank, the uniquename is computed as followsthe string com.ibm.urbancode.customTheme. is prefixed to the WAR/ZIP filename containing the theme artifacts. | No |
| Use soap.client.props file | Boolean | Use soap.client.props file for Portal administrator credential | No |
| Virtual Portal context | String | If invoking on a virtual portal, specify the virtual portal context root | No |
| Virtual Portal hostname | String | If invoking on a virtual portal, specify the virtual portal hostname | No |
| WebSphere Portal server installation home | String | Portal installation home | No |
| WebSphere Portal server profile home | String | Portal server profile home | No |
| WebSphere portal server administrator password | Password | WebSphere portal server administrator user password | No |
| WebSphere portal server administrator username | String | WebSphere portal server administrator username | No |
| WebSphere portal server configuration port | String | WebSphere portal server configuration port | No |

## Execute ConfigEngine command

Executes the specified ConfigEngine command on a WebSphere Portal server


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| ConfigEngine command | String | The ConfigEngine command to execute. If left blank, the component name is used | No |
| Options | String | Format: NAME=VALUE,[NAME=VALUE]. Supply the name value pairs to be used as arguments to the ConfigEngine tool. This argument can be supplied multiple times for all of the additional parameters used by the ConfigEngine. All leading and trailing whitespace characters in the name value will be ignored. Do not specify the WAS and Portal administrator credentials here. | No |
| Use wkplc.properties file | Boolean | If selected, the wkplc.properties file is used to read WAS and Portal administrator passwords from | No |
| WebSphere Portal server profile home | String | Portal server profile home | No |
| WebSphere application server administrator password | Password | WebSphere application server administrator user password | No |
| WebSphere portal server administrator password | Password | WebSphere portal server administrator user password | No |

## Install PAA

Installs a portal application archive (.paa) on a WebSphere Portal server


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional CommandLine Arguments | String | New line separated list of additional commandline arguments to pass to the deploy-paa command (i.e. -DforceDeploy=true) | No |
| Assembly name | String | Name of the portal assembly to deploy. If left blank, the name of the component is used | No |
| Create WCM properties file | Boolean | If selected, the WCM properties file is created in the paa/``${appName}`` directory | No |
| Maximum time in minutes to wait for node synchronization | String | If installing on a clustered environment, define this value for the deploy-paa task | No |
| Maximum time in minutes to wait for wplc-wait-for-sync-to-complete task | String | If installing on a clustered environment, define this value for the deploy-paa task | No |
| PAA filename | String | Name of the .paa file to install. If left blank, the name of the component is used | No |
| Use wkplc.properties file | Boolean | If selected, the wkplc.properties file is used to read WAS and Portal administrator passwords from | No |
| Virtual Portal context | String | If installing on a virtual portal, include the virtual portal context | No |
| Virtual Portal host name | String | If installing on a virtual portal, include the virtual portal host name | No |
| WebSphere Portal server profile home | String | Portal server profile home | No |
| WebSphere application server administrator password | Password | WebSphere application server administrator user password | No |
| WebSphere portal server administrator password | Password | WebSphere portal server administrator user password | No |

## Invoke XMLAccess script

Executes an XMLAccess script on a WebSphere Portal server


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Portal Server context root | String | Specify the portal servers context root. If left blank, /wps is used as the default portal server context root | No |
| Use soap.client.props file | Boolean | Use soap.client.props file for Portal administrator credential | No |
| Virtual Portal context | String | If invoking on a virtual portal, specify the virtual portal context root | No |
| Virtual Portal hostname | String | If invoking on a virtual portal, specify the virtual portal hostname | No |
| WebSphere Portal server profile home | String | Portal server profile home | No |
| WebSphere portal server administrator password | Password | WebSphere portal server administrator user password | No |
| WebSphere portal server administrator username | String | WebSphere portal server administrator username | No |
| WebSphere portal server configuration port | String | WebSphere portal server configuration port | No |
| XML script file name | String | The name of the file containing the XML script for XMLAccess tool. If left blank, the name of the component is used. | No |



|Back to ...||Latest Version|IBM WebSphere Portal |||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[8.1100783](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WebSpherePortal/WebSpherePortal-8.1100783.zip)|[Readme](README.md)|[Overview](overview.md)|[Troubleshooting](troubleshooting.md)|[Usage](usage.md)|[Downloads](downloads.md)|
