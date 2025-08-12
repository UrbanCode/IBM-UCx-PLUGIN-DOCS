
# Groovy - Steps


Process steps in the Groovy plug-in:

* [Run Groovy Script](#run_groovy_script)


## Run Groovy Script

This step runs a groovy script.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Groovy Home | String | The Groovy home directory. The default value is the GROOVY\_HOME environment variable. | Yes |
| Script | String | The Groovy script code to run. Use the**java.util.Properties** Java variable, **outProps** to uploadoutput properties to the server and the **inProps** variable to contain all input properties. | Yes |
| ClassPath | String | List the classpaths to include. Separate multiple classpaths using commas or new lines. | No |



|Back to ...||Latest Version|Groovy ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[16.1155716](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Groovy/ucd-Groovy-16.1155716.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
