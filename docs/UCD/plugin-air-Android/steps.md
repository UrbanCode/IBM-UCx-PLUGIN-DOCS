# Google Android SDK - Process Steps

## Install Application

Installs the Android APK application.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SDK Installation Path | textBox | The path to the Android SDK installation. For example, C:\android-sdk. | Yes |
| Application Path | textBox | The Android application package (.apk) to be installed on the target. | Yes |
| Install Into | selectBox | Install the application into an emulator or physical device. When you use the "Serial Number" option, specify a serial number in the "Serial Number" property. | No |
| Serial Number | textBox | The serial number of the device or emulator to use. The "Install into" property must be set to "Serial Number". | No |
| Reinstall | checkBox | Reinstall the app and keep existing data. | No |
| Additional Arguments | textAreaBox | Allows for providing additional arguments that are not provided in the step properties for the adb install command. The format can be a path to a file or a space-separated list of arguments. For example, C:\test.properties or -l -s. | No |

## Remove Application

Removes the Android application.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SDK Installation Path | textBox | The path to the Android SDK installation. For example, C:\android-sdk. | Yes |
| Package Name | textBox | The package name of the application to be removed. | Yes |
| Uninstall From | selectBox | Removes the application from an emulator or physical device. When you use the "Serial Number" option, specify a serial number in the "Serial Number" property. | No |
| Serial Number | textBox | The serial number of the device or emulator to use. The "Install into" property must be set to "Serial Number". | No |
| Keep Data | checkBox | Keep data and cache directories. | No |

## Random UI Test

Runs the monkey command for random UI Testing.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SDK Installation Path | textBox | The path to the Android SDK installation. For example, C:\android-sdk. | Yes |
| Test Against | selectBox | Tests the application on an emulator or physical device. When you use the "Serial Number" option, specify a serial number in the "Serial Number" property. | No |
| Serial Number | textBox | The serial number of the device or emulator to use. The "Install into" property must be set to "Serial Number". | No |
| Event Count | textBox | The number of events to send to the test. | Yes |
| Additional Arguments | textAreaBox | Allows for providing additional arguments that are not provided in the step properties for the adb shell monkey command. The format can be a path to a file or a space separated list of arguments. For example, C:\test.properties or -v --throttle 100. | No |
| Timeout | textBox | A timeout (in milliseconds), after which the Random UI test is stopped. By default, the step does not time out when no value is specified. | No |

## UI Test

Runs the specified UI test against the application.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SDK Installation Path | textBox | The path to the Android SDK installation. For example, C:\android-sdk. | Yes |
| JAR Files | textAreaBox | The JAR files that contain the UI tests. The format is a space-separated list of files. | Yes |
| Push to Target Path | textAreaBox | The path on the target where to push the JAR files. If no path is provided, existing resources on the target are used. | No |
| Test Classes | textAreaBox | The class or package name for the test to run. The format can be a path to a file or a space-separated list of classes. | Yes |
| Test Against | selectBox | Runs the UI test against an emulator or physical device. When you use the "Serial Number" option, specify a serial number in the "Serial Number" property. | No |
| Serial Number | textBox | The serial number of the device or emulator to use. The "Install into" property must be set to "Serial Number". | No |
| Additional Arguments | textAreaBox | Allows for providing additional arguments that are not provided in the step properties for the adb shell am instrument command. The format can be a path to a file or a space-separated list of arguments. For example, C:\test.properties or -e outputFormat simple. | No |
| Clean Up JAR Files | checkBox | Remove the JAR files when the step is complete. If the step fails to run the tests or the timeout is exceeded, the cleanup still occurs. | No |
| Timeout | textBox | A timeout (in milliseconds), after which the UI test are stopped. By default, the step does not time out when no value is specified. | No |

## Unit Test

Runs the specified unit test against the application.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SDK Installation Path | textBox | The path to the Android SDK installation. For example, C:\android-sdk. | Yes |
| Package Name | textBox | The package name for the tests. | Yes |
| Runner Class | textBox | The class name for the instrumented test runner. | Yes |
| Test Against | selectBox | Runs the unit test against an emulator or physical device. When you use the "Serial Number" option, specify a serial number in the "Serial Number" property. | No |
| Serial Number | textBox | The serial number of the device or emulator to use. The "Install into" property must be set to "Serial Number". | No |
| Raw Format | checkBox | Output the results in raw format. | No |
| Additional Arguments | textAreaBox | Allows for providing additional arguments that are not provided in the step properties for the adb shell am instrument command. The format can be a path to a file or a space-separated list of arguments. For example, C:\test.properties or -e key value --no-windows-animation. | No |
| Timeout | textBox | A timeout (in milliseconds), after which the Unit test is stopped. By default, the step does not time out when no value is specified. | No |

## ADB

Runs the Android Debug Bridge command.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SDK Installation Path | textBox | The path to the Android SDK installation. For example, C:\android-sdk. | Yes |
| Additional Arguments | textAreaBox | Allows for providing additional arguments that are not provided in the step properties for the adb command. The format can be a path to a file or a space-separated list of arguments. For example, C:\test.properties or devices. | No |
| Timeout | textBox | A timeout (in milliseconds), after which the ADB process command is stopped. By default, the step does not time out when no value is specified. | No |

## Android

Runs the Android tool command.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SDK Installation Path | textBox | The path to the Android SDK installation. For example, C:\android-sdk. | Yes |
| Additional Arguments | textAreaBox | Allows for providing additional arguments that are not provided in the step properties for the Android command. The format can be a path to a file or a space-separated list of arguments. For example, C:\test.properties or list targets. | Yes |
| Timeout | textBox | A timeout (in milliseconds), after which the Android process command is stopped. By default the step does not time out when no value is specified. | No |

## Create Emulator

Creates an emulator.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SDK Installation Path | textBox | The path to the Android SDK installation. For example, C:\android-sdk. | Yes |
| Emulator Name | textBox | The name of the emulator to create. | Yes |
| Target ID | textBox | The target ID to create the emulator with. | Yes |
| CPU | textBox | The CPU or ABI of the emulator to create. If the target contains more than one, this value must be specified. | No |
| Force Creation | checkBox | Force the creation of the emulator. | No |
| Create Snapshot | checkBox | Create a snapshot for the emulator. This process can help improve emulator startup performance. | No |
| Additional Arguments | textAreaBox | Allows for providing additional arguments that are not provided in the step properties for the emulator creation command. The format can be a path to a file or a space-separated list of arguments. For example, C:\test.properties or -c 512M. | No |

## Remove Emulator

Removes an emulator.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SDK Installation Path | textBox | The path to the Android SDK installation. For example, C:\android-sdk. | Yes |
| Emulator Name | textBox | The name of the emulator to create. | Yes |

## Start Emulator

Starts an emulator.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SDK Installation Path | textBox | The path to the Android SDK installation. For example, C:\android-sdk. | Yes |
| Emulator Name | textBox | The name of the emulator to start. | Yes |
| Load from Snapshot | checkBox | Specifies whether to load the emulator from a snapshot on startup. This process can help improve emulator startup performance. | No |
| Additional Arguments | textAreaBox | Allows for providing additional arguments that are not provided in the step properties for the emulator creation command. The format can be a path to a file or a space-separated list of arguments. For example, C:\test.properties or -c 512M. | No |
| Snapshot Name | textBox | The name of the snapshot to load. | No |
| Output File | textBox | Redirects the output from the emulator startup to a file. | No |
| Maximum Concurrent Emulators | textBox | Specify the maximum number of concurrent emulators that can run on the agent computer. If no value is specified at the agent level, a maximum of four emulators is used. | Yes |
| Concurrent Emulator Maximum Retries | textBox | The maximum number of times to attempt polling every 20 seconds before retrying to start an emulator when the limit of concurrent emulators has been reached. The default value is 4. | Yes |
| Startup Polling Maximum Retries | textBox | The maximum number of times to attempt polling for emulator startup every 20 seconds. The default value is 15. | Yes |

## Stop Emulator

Stops an emulator.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SDK Installation Path | textBox | The path to the Android SDK installation. For example, C:\android-sdk. | Yes |
| Target | selectBox | Specifies the emulator to stop. When you use the "Serial Number" option, specify a serial number in the "Serial Number" property. | No |
| Serial Number | textBox | The serial number of the emulator to stop. The "Target" property must be set to "Serial Number". | No |
| Save to Snapshot | checkBox | Saves the emulator snapshot on shutdown. | No |
| Snapshot Name | textBox | The name of the snapshot to save. The default value that is used, default-boot, loads automatically on emulator startup. Otherwise, the name must be specified. | No |

