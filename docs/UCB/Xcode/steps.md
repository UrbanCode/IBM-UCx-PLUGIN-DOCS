
Xcode - Steps
=============

# Steps


### Steps




### Process steps in the Xcode plug-in

* [Apple Generic Versioning](#apple_generic_versioning)
* [Package Application](#package_application)
* [Xcode Build](#xcode_build)


### Apple Generic Versioning

Apply a marketing or technical version to a project using the agvtool command.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Marketing Version | String | The marketing version to set. | No |
| Version | String | The technical version to set. | No |
| agvtool Path | String | The fully-qualified path of the agvtool command. | Yes |

### Package Application

Package the application to a .ipa file using the xcrun tool.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Name | String | The name of the application to package. Typically, this is the name of the built project. | Yes |
| Developer Name | String | The name of the developer to sign the package. | Yes |
| Keychain Name | String | The name of the keychain to use when signing code. Keychains are in the $HOME/Library/Keychains directory on the agent. | No |
| Keychain Password | Password | The keychain password used to unlock the login keychain for the agent running the build. The password is used only if the keychain is locked. | No |
| Provision Profile | String | The path to the provisioning profile file to embed. | Yes |
| SDK | String | The name or path of the SDK to create the package for. For example: iphoneos | Yes |
| Target | String | The name of the build target to package. | Yes |
| Timeout | String | The number of seconds to keep the keychain unlocked. Set the value to 0 to disable timeout on the keychain. | No |
| xcrun Path | String | The fully-qualified path to the xcrun tool. The default value is /usr/bin/xcrun. | Yes |

### Xcode Build

Build an Xcode project using the xcodebuild command.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| ARCH | String | The architectures to build for each target. The value in this property overrides architectures that are defined in the project. | No |
| Build Active Architecture Only | Boolean | Build only the currently active architecture. If cleared, the ONLY\_ACTIVE\_ARCH=NO parameter is passed to xcodebuild. | No |
| Configuration | String | The name of the configuration to build, typically Debug or Release. Leave blank for the default configuration. | No |
| Keychain Name | String | The name of the keychain to use for signing code. Keychains are in the $HOME/Library/Keychains directory on the agent. This value is required if Perform Code Signing is selected. | No |
| Keychain Password | Password | If the build automatically packages and signs the code, the keychain password to unlock the login keychain for the agent running the build. The password is used only if the keychain is locked. | No |
| Max Parallel Jobs | String | The maximum number of jobs that can be built at the same time. | No |
| Parallelize Targets | Boolean | Build all targets at the same time. | No |
| Perform Code Signing | Boolean | Packaging and code signing occurs automatically during the build. | No |
| Project File | String | The relative path to the project file to build. To build all projects, leave this property blank. | No |
| SDK path | String | The name or path of the base SDK to use with the build. | No |
| Scheme | String | The scheme name to build. | No |
| Target | String | The target name to build. To build all targets, leave this property blank. | No |
| Timeout | String | The number of seconds to keep the keychain unlocked. Set the value to 0 to disable timeout on the keychain. | No |
| Toolchain | String | Use the toolchain with identifier or name. | No |
| Workspace File | String | The relative path to the workspace file to build. To build a project, leave this property blank. | No |
| xcodebuild Path | String | The full path to xcodebuild. | Yes |



|Back to ...||Latest Version|Xcode ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[5.1098513](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/Xcode/Xcode-hcl-5.1098513.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
