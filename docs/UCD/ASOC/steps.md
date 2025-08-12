
# IBM AppScan Enterprise - Process Steps

IBM UCD has a free installable plugin for AppScan on Cloud. This plug-in includes steps to do each of the following on the AppScan server:

* Create ASoC Presence
* Delete ASoC Presence
* Start ASoC Presence
* Start Android Mobile Analyzer ASoC Scan
* Start Dynamic Analyzer ASoC Scan
* Start Static Analyzer ASoC Scan
* Start iOS Analyzer ASoC Scan
* Stop ASoC Presence


Each IBM UCD plugin step must be configured with the ASoC Application ID, Key ID, and Key Secret.

The static analyzer step also requires an IRX file, which points to either the IRX file to be uploaded for scanning, or the directory that contains the files or other locations to scan. The field accepts scan configuration files, eclipse workspaces, as well as .jar, .war, and .ear file types. In addition to the Application ID, Key ID, and Key Secret, the dynamic analyzer step requires the URL  for the location to scan. If the page requires a login, the application login credentials must also be provided.


|Back to ...||Latest Version||||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[14.1152459](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/ASOC/ucd-HCL-ASoC-UCD-14.1152459.zip)|[Overview](overview.md)|[Steps](steps.md)|[Downloads](downloads.md)|

