
# Apple Xcode

## Overview

The Apple Xcode plug-in includes steps that manage the continuous delivery of Apple iOS applications by interacting with simulators and devices. These steps include tasks that are related to installing and removing the application on devices and simulators, and running tests as part of a DevOps solution. The plug-in also includes steps for creating and deleting simulators.

This plug-in is developed and supported by the DevOps Deploy Community on the IBM® DevOps Services platform.

## Downloads

* [Apple-Xcode plug-in distribution](https://github.com/UrbanCode/Apple-Xcode-UCD/releases)
* [Source project](https://github.com/UrbanCode/Apple-Xcode-UCD)

If you encounter issues with the plug-in, or want to send feedback:

* See the [plug-in documentation](https://developer.ibm.com/urbancode/plugindoc/ibmucd/apple-xcode-plug/1-2/).
* Watch the [plug-in demo video](http://youtu.be/kHD46_kCvnI).
* Ask Apple-Xcode plug-in specific questions on the [GitHub Issues](https://github.com/UrbanCode/Apple-Xcode-UCD/issues) page.
* For general plug-in issues, submit questions to our [Community discussions page](https://community.ibm.com/community/user/wasdevops/urbancode-discussion). Use the following tags: DevOps | ucdev | plugins

## Steps

The plug-in includes steps for creating and deleting simulators, and for starting and stopping the simulator:

* [Create Simulator](http://developer.ibm.com/urbancode/plugindoc/ibmucd/apple-xcode-plug/1-2/steps/#create_simulator "Create Simulator")
* [Delete Simulator](https://developer.ibm.com/urbancode/plugindoc/ibmucd/apple-xcode-plug/1-2/steps/#delete_simulator "Delete Simulator")
* [Start Simulator](https://developer.ibm.com/urbancode/plugindoc/ibmucd/apple-xcode-plug/1-2/steps/#start_simulator "Start Simulator")
* [Stop Simulator](https://developer.ibm.com/urbancode/plugindoc/ibmucd/apple-xcode-plug/1-2/steps/#stop_simulator "Stop Simulator")

The plug-in also includes steps that are related to installing and removing iOS applications from devices or simulators:

* [Install Application](https://developer.ibm.com/urbancode/plugindoc/ibmucd/apple-xcode-plug/1-2/steps/#install_application "Install Application")
* [Remove Application](https://developer.ibm.com/urbancode/plugindoc/ibmucd/apple-xcode-plug/1-2/steps/#remove_application "Remove Application")

The plug-in also includes steps that are related to testing applications:

* [UI Test](https://developer.ibm.com/urbancode/plugindoc/ibmucd/apple-xcode-plug/1-2/steps/#ui_test "UI Test")
* [Unit Test](https://developer.ibm.com/urbancode/plugindoc/ibmucd/apple-xcode-plug/1-2/steps/#unit_test "Unit Test")

With the [xcrun](https://developer.ibm.com/urbancode/plugindoc/ibmucd/apple-xcode-plug/1-2/steps/#xcrun "xcrun") step, you can access the `xcrun` command-line tools:

* [xcrun](https://developer.ibm.com/urbancode/plugindoc/ibmucd/apple-xcode-plug/1-2/steps/#xcrun "xcrun")

**Important**: When you use steps from the Apple Xcode plug-in for IBM DevOps Deploy (either in the same process or separate processes running at the same time), you must acquire and release a lock to prevent these steps from running in parallel since some actions can hang. For more information about the Acquire Lock and Release Lock steps, see [Acquire Lock](https://www.ibm.com/docs/en/urbancode-deploy/7.2.3?topic=reference-acquire-lock "Acquire Lock") and [Release Lock](https://www.ibm.com/docs/en/urbancode-deploy/7.2.3?topic=reference-release-lock "Release Lock").

To view a video demonstration of the Apple Xcode 1 plug-in, see [http://youtu.be/kHD46\_kCvnI](http://youtu.be/kHD46_kCvnI "http://youtu.be/kHD46_kCvnI")

**Compatibility**

The DevOps Deploy automation plug-in for Apple Xcode works with Xcode version 6.1.0.

This plug-in requires version 6.0.1 or later of IBM DevOps Deploy.

This plug-in is supported to run only on an agent that is started from and running on Mac OS X. You must install Xcode 6.1.0 on the agent computer.

**Important**: Start the agent from a Terminal prompt. **Restriction**: The agent must run on a computer that is configured to use English as the system language.

**Installation**

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

|Back to ...||Latest Version|
| :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[0]()|
