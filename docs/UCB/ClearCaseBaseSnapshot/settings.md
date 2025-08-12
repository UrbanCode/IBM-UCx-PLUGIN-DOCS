
ClearCase Base Snapshot - Settings
==================================

# Settings


### Settings




The following settings are available when you import component versions by using the ClearCase Base Snapshot plug-in.


* [ClearCase Base Snapshot Repository](#clearcase_base_snapshot_repository_role)
* [ClearCase Base Snapshot Source Config](#clearcase_base_snapshot_source_config_role)

### ClearCase Base Snapshot Repository


| Name | Type | Description |
| --- | --- | --- |
| Command Path | String | The fully qualified path of the cleartool executable file. If specified on the PATH statement, this property is not required.  |

### ClearCase Base Snapshot Source Config


| Name | Type | Description |
| --- | --- | --- |
| Changelog Rules | String | The rules from the config spec in the following format: vob-name:path:branch:label. Each individual segment may be parameterized. |
| Check New Config Spec | Boolean | If enabled, compare a new config spec with a user specified config spec. This option allows you to determine if the setcs command was successful, based on the new config spec set on the view rather than the outcome of the setcs command.  |
| Config Spec | String |
The config spec to be used for the new view. Replace any label used in the config spec with a token. For example: replace `/main/LATEST becomes /main/$%LATEST%$/main/test/1.0.3` with `/main/test/$%1.0.3%$`. Place a time token after each element rules that does not load from a particular label, for example: `element* /main/LATEST` should become `element* /main/LATEST $[time.token]`  `element * /main/test/LATEST` should become `element * /main/test/LATEST $[time.token]`  `element * /main/test/1.0.3` should not get a time token.  |
| Create Global Labels | Boolean |
Enable for all labels to be created global. You can specify the versioned object bases (VOB) to create the labels within. If you do not specify any VOBs, the load rules are used to determine all VOBs that are used and the labels are created in those VOBs. |
| Create Label in VOBs | String | A list of of the VOBs where the global labels are created. List each VOB on a separate line. If you are not creating global labels, list all the VOBs used in your config spec or leave the field empty and the load the rules are used to determine where the labels need to be created in order to complete the labeling process successfully. |
| Delete View Private Files During Cleanup | Boolean | Enable for the server to detect and delete any view-private files in the local view.Do not enable this feature if the build script handles cleanup of the view. Only the paths specified in the load rules are checked for view-private files. |
| Exclude Filters | String | Exclude this list of usernames |
| Fail If No Version Selected | Boolean | If enable the populate step fails when a file cannot be found because no version was selected in the configuration specification. **Note:** If this is set to false and a file cannot be found, the label step might fail. |
| File Filters | String | Restrict the changelog to files matching the specified patterns. Start each line with a plus sign (+) to include or a minus sign (-) to exclude files matching the patterns. You can use asterick (\*), double-asterick (\*\*), and question mark (?) as wildcards in the pattern. |
| Global Storage Path (gpath) | String | The value for the -gpath parameter on the mkview command. The value is passed to the command exactly as specified, the viewname is not appended to the value. This property is required, if hostname is specified. |
| Host Storage Path (hpath) | String | The value for the -hpath parameter on the mkview command. The specified value is passed to the command exactly as specified, the viewname is not appended. This property is required, if hostname is specified. |
| Hostname | String | The value for the -host parameter to be used on the mkview command. |
| No-checkout | Boolean | Enable to pass the -nco flag to the quietperiod lshistory call. |
| Repository |  | The name of the ClearCase Repository. |
| Tmode | Enumeration
| The Tmode to use. This property is required, if using a Populate step. |
| Use Tags | Boolean | Enable to create the view as global. This option can cause problems with creating and dropping snapshots, if the same snapshot is on multiple agents. |
| Use VOB Time | Boolean |  |
| VOB Tag Root | String | Specify the VOB tag root. Do not specify starting or trailing slashes. Specify this property if you are running cross-platform builds including Windows and Unix and using multi-component VOBs. The value is usually `vobs`. |
| View Location | String | If strategy is Already Exists, the location of the view is on the local machine. Otherwise, the location of the view storage directory on the ClearCase server where the views are stored. For Windows operating systems, the value is always a UNC path. |
| View Name | String | The name to use for the view when creating and deleting. Each agent must have a unique view name. You can specify a script as the value. For example,  ```${gvy:ProjectLookup.getCurrent().getName()}``_view_``${gvy:AgentHelper.getCurrent().getName()}```. |
| View Strategy | Enumeration
| The view strategy to use. Specify one of the following: Every Time to create a new view every time there is a build Doesnt Exist to create a new view only if one does not exist already Already Exists to not create a new view |



|Back to ...||Latest Version|ClearCase Base Snapshot |||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[14.767774](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/ClearCaseBaseSnapshot/ClearCaseBaseSnapshot-14.767774.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
