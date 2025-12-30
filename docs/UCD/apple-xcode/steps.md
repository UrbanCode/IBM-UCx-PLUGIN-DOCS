# Apple Xcode - Process Steps

* [Install Application](#install_application)
* [Remove Application](#remove_application)
* [UI Test](#ui_test)
* [Unit Test](#unit_test)
* [xcrun](#xcrun)
* [Create Simulator](#create_simulator)
* [Delete Simulator](#delete_simulator)
* [Start Simulator](#start_simulator)
* [Stop Simulator](#stop_simulator)
## Install Application

Installs the iOS application (an .ipa or .app file).

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Application Path | textBox | The path to the iOS application (an .app or .ipa file) to install on the target, for example, myApp.app or /tmp/myApp.app. The default value is the application property that is configured in the component properties. | Yes |
| Device Identifier | textBox | The unique device identifier of the physical device or simulator to install the application on. If the device identifier is specified, then the Simulator Name and Target OS values are not used. If the process includes the Create Simulator step, then the deviceID output property can be used to identify the simulator that was created, for example, ${p?:Create Simulator/deviceID}. | No |
| Simulator Name | textBox | The name of the simulator to use, for example, myIphone. Note: Both the Simulator Name and Target OS must be specified when the Device Identifier is not specified. | No |
| Target OS | textBox | The target OS, for example, 7.1 or 8.1. | No |
| Simulator Device Type | textBox | The simulator Device Type string from Xcode, for example, iPhone 6 Plus or Resizable iPad. Note: This property is optional. It's used in case more than one simulator have the same name and same target OS. | No |
| Reinstall | checkBox | Reinstalls the app. You must select this option if the app is already installed on the target. Otherwise, the step fails. | No |
| Path to xcrun | textBox | If you have more than one version of Xcode installed, use this property to specify the alternate path, for example, /Applications/Xcode 1.app. If the value is not specified, the value from the system path is used. | No |
| Timeout | textBox | The amount of time (in milliseconds) to attempt to install the app on the target device. By default, the step uses a timeout of 5 minutes. This property does not apply to simulators. | No |

## Remove Application

Removes the iOS application.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Bundle Identifier | textBox | The bundle identifier of the application to remove, for example, com.example.appName. The default value is the bundle identifier that is configured in the component properties. | Yes |
| Device Identifier | textBox | The unique device identifier of the physical device or simulator to remove the application from. If the device identifier is specified, then the Simulator Name and Target OS values are not used. If the process includes the Create Simulator step, then the deviceID output property can be used to identify the simulator that was created, for example, ${p?:Create Simulator/deviceID}. | No |
| Simulator Name | textBox | The name of the simulator to use, for example, myIphone. Note: Both the Simulator Name and Target OS must be specified when the Device Identifier is not specified. | No |
| Target OS | textBox | The target OS, for example, 7.1 or 8.1. | No |
| Simulator Device Type | textBox | The simulator Device Type string from Xcode, for example, iPhone 6 Plus or Resizable iPad. Note: This property is optional. It's used in case more than one simulator have the same name and same target OS. | No |
| Path to xcrun | textBox | If you have more than one version of Xcode installed, use this property to specify the alternate path, for example, /Applications/Xcode 1.app. If the value is not specified, the value from the system path is used. | No |
| Timeout | textBox | The amount of time (in milliseconds) to attempt to uninstall the app on the target device. By default, the step uses a timeout of 5 minutes. This property does not apply to simulators. | No |

## UI Test

Runs the specified test case that simulates a user who is interacting with an application.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Application Path | textBox | The path to the iOS application (an .app or .ipa file) to test on the target, for example, myApp.app or /tmp/myApp.app. The default value is the application property that is configured in the component properties. | Yes |
| Test Script | textBox | The test script file (.js) to run. | Yes |
| Output Directory | textBox | The directory for test output. The directory must exist before you specify it. If the path that you specify for output does not exist, the process fails. | Yes |
| Device Identifier | textBox | The unique device identifier of the physical device or simulator to run the test on. If you are testing on a device, then you must first install the app. If the device identifier is specified, then the Simulator Name and Target OS values are not used. If the process includes the Create Simulator step, then the deviceID output property can be used to identify the simulator that was created, for example, ${p?:Create Simulator/deviceID}. | No |
| Simulator Name | textBox | The name of the simulator to use, for example, myIphone. Note: Both the Simulator Name and Target OS must be specified when the Device Identifier is not specified. | No |
| Target OS | textBox | The target OS, for example, 7.1 or 8.1. | No |
| Simulator Device Type | textBox | The simulator Device Type string from Xcode, for example, iPhone 6 Plus or Resizable iPad. Note: This property is optional. It's used in case more than one simulator have the same name and same target OS. | No |
| Path to Xcode | textBox | The path to the Xcode installation. If no value is specified, the default value, /Applications/Xcode.app, is used. | No |
| Trace Template | textBox | The path, which is specified as relative to the Xcode installation path, for the .tracetemplate file to use when the UI test is run. If no value is specified, a default value of /Contents/Applications/Instruments.app/ Contents/PlugIns/AutomationInstrument.bundle/Contents/ Resources/Automation.tracetemplate is used. | No |
| Path to xcrun | textBox | If you have more than one version of Xcode installed, use this property to specify the alternate path, for example, /Applications/Xcode 1.app. If the value is not specified, the value from the system path is used. | No |
| Timeout | textBox | A timeout (in milliseconds), after which the UI test is stopped. By default, the step does not time out. | No |

## Unit Test

Runs the specified unit test against the application.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Project Name | textBox | The name of the project to use for testing. | No |
| Workspace Name | textBox | The name of the workspace to use for testing. If a project is specified, the workspace value is not used. | No |
| Scheme Name | textBox | The name of the scheme to use for testing. | Yes |
| Destination String | textAreaBox | A line-separated list or file of targets for testing on. Each target is a string in xcodebuild syntax, for example, the list might be similar to this string: "platform=iOS Simulator,name=iPhone,OS=8.1". If the destination string is specified, the device identifier, simulator type, and target OS are not used. | No |
| Device Identifier | textBox | The unique device identifier of the physical device or simulator to run the test on. If the device identifier is specified, then the Simulator Name and target OS values are not used. If the process includes the Create Simulator step, then the deviceID output property can be used to identify the simulator that was created, for example, ${p?:Create Simulator/deviceID}. | No |
| Simulator Name | textBox | The name of the simulator to use, for example, myIphone. | No |
| Target OS | textBox | The target OS, for example, 7.1 or 8.1. Note: If no target OS is specified, the most recent default value is used. | No |
| Simulator Device Type | textBox | The simulator Device Type string from Xcode, for example, iPhone 6 Plus or Resizable iPad. Note: This property is optional. It's used in case more than one simulator have the same name and same target OS. | No |
| Destination Search Timeout | textBox | The amount of time to search for the test target. If the target is not located, the step fails. The system default value is used if no value is specified. (See "man xcodebuild" for details). | No |
| Path to xcrun | textBox | If you have more than one version of Xcode installed, use this property to specify the alternate path, for example, /Applications/Xcode 1.app. If the value is not specified, the value from the system path is used. | No |
| Timeout | textBox | A timeout (in milliseconds), after which the unit test stops. By default, the step does not time out. | No |

## xcrun

Runs the iOS xcrun command.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Path to xcrun | textBox | If you have more than one version of Xcode installed, use this property to specify the alternate path, for example, /Applications/Xcode 1.app. If the value is not specified, the value from the system path is used. | No |
| Additional Arguments | textAreaBox | Additional arguments for the xcrun tool. The format can be a path to a file or a new line-separated list of arguments. For example, the arguments might look like this string: /opt/test.properties or --show-sdk-path. | No |
| Timeout | textBox | The amount of time (in milliseconds) to attempt to run the xcrun command on the target. By default, the step does not time out. | No |

## Create Simulator

Creates a simulator.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Simulator Name | textBox | The name of the simulator to create, for example, myIphone. | Yes |
| Target OS | textBox | The target OS, for example, 7.1 or 8.1. | Yes |
| Simulator Device Type | textBox | The simulator Device Type string from Xcode, for example, iPhone 6 Plus or Resizable iPad. | Yes |
| Path to xcrun | textBox | If you have more than one version of Xcode installed, use this property to specify the alternate path, for example, /Applications/Xcode 1.app. If the value is not specified, the value from the system path is used. | No |

## Delete Simulator

Deletes a simulator.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Device Identifier | textBox | The unique device identifier of the simulator to be deleted. If the device identifier is specified, then the Simulator Name and target OS values are not used. If the process includes the Create Simulator step, then the deviceID output property can be used to identify the simulator that was created, for example, ${p?:Create Simulator/deviceID}. | No |
| Simulator Name | textBox | The name of the simulator to delete, for example, myIphone. Note: Both the Simulator Name and Target OS must be specified when the Device Identifier is not specified. | No |
| Target OS | textBox | The target OS, for example, 7.1 or 8.1. | No |
| Simulator Device Type | textBox | The simulator Device Type string from Xcode, for example, iPhone 6 Plus or Resizable iPad. Note: This property is optional. It's used in case more than one simulator have the same name and same target OS. | No |
| Path to xcrun | textBox | If you have more than one version of Xcode installed, use this property to specify the alternate path, for example, /Applications/Xcode 1.app. If the value is not specified, the value from the system path is used. | No |

## Start Simulator

Starts a simulator. The step fails if a simulator is already running.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Device Identifier | textBox | The unique device identifier of the simulator to start. If the device identifier is specified, then the Simulator Name and target OS values are not used. If the process includes the Create Simulator step, then the deviceID output property can be used to identify the simulator that was created, for example, ${p?:Create Simulator/deviceID}. | No |
| Simulator Name | textBox | The name of the simulator to use, for example, myIphone. Note: Both the Simulator Name and Target OS must be specified when the Device Identifier is not specified. | No |
| Target OS | textBox | The target OS, for example, 7.1 or 8.1. | No |
| Simulator Device Type | textBox | The simulator Device Type string from Xcode, for example, iPhone 6 Plus or Resizable iPad. Note: This property is optional. It's used in case more than one simulator have the same name and same target OS. | No |
| Path to Xcode | textBox | The path to the Xcode installation. If no value is specified, the default value, /Applications/Xcode.app, is used. | No |
| Path to xcrun | textBox | If you have more than one version of Xcode installed, use this property to specify the alternate path, for example, /Applications/Xcode 1.app. If the value is not specified, the value from the system path is used. | No |
| Startup Polling Maximum Retries | textBox | The maximum number of times to attempt polling for a simulator startup every 10 seconds. The default value is 10. | Yes |

## Stop Simulator

Stops the simulator. The step fails if no simulator is running.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |

