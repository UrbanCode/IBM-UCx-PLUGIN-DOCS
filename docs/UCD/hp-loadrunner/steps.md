
# HP LoadRunner - Process Steps


* [Run Test Scenario](#run_test_scenario)


## Run Test Scenario

Invoke the HP LoadRunner controller using the WLRun command-line utility and analyze the results with the AnalysisUI command-line utility. This step will execute a test scenario, save the results, and generate an HTML report.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| LoadRunner Installation Directory | String | The path to your HP LoadRunner installation directory.This is the parent of the bin directory, which contains both the WLRun and AnalysisUI executable files. Either specify an absolute path(i.e. C:\Program Files (x86)\Micro Focus\LoadRunner) or a path that is relative to your working directory (i.e. LoadRunner). | Yes |
| LoadRunner Results Name | String | The name of the new directory that will contain the results of your test scenario. This directory will be created under the steps working directory. Your HTML report will be created in this directory with the name specified in your analysis template. The default UCD\_ANALYSIS\_TEMPLATE will name the HTML report An\_Report1.html. | Yes |
| Template Name | String | The name of your HP LoadRunner Analysis template. The default value of UCD\_ANALYSIS\_TEMPLATE will import a custom template into the HP LoadRunner Analysis tool. This template is included with the plugin and generates a detailed HTML report in the agents working directory when used during analysis. You may also create your own template in the HP LoadRunner Analysis UI and specify its name to use it during analysis. Please see the plugin documentation for more details. | Yes |
| Test Scenario Path | String | The path to your test scenario file (.LRS file).Either specify an absolute path(i.e. C:\Users\Administrator\Controller\scenario\Test Scenario.lrs) or a path that is relative to your working directory (i.e. Test Scenario.lrs). | Yes |



|Back to ...||Latest Version|HP LoadRunner ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[1.1004896](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/hp-loadrunner/plugins-hp-loadrunner-1.1004896.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
