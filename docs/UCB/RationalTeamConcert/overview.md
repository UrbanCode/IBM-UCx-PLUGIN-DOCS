
Rational Team Concert SCM - Overview
====================================

# Overview


### Overview




The Rational Team Concert SCM plug-in automates populating an Rational Team Concert (RTC) workspace, creating a snapshot, and publishing source changes to the **Changes** tab of the BuildLife.

This plug-in includes the following steps:

* [RTC Changelog](#rtc_changelog)
* [RTC Checkout](#rtc_checkout)
* [RTC Cleanup](#rtc_cleanup)
* [RTC Create Baseline](#rtc_create_baseline)
* [RTC Quiet Period](#rtc_quiet_period)


### Step palette

To access this plug-in in the palette, click **SCM** > **Rational Team Concert**.

### Compatibility

The steps in this plug-in run on all supported platforms.

### Installation

No special steps are required for installation. See [Installing plug-ins in UrbanCode products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in UrbanCode products").

### History

#### Version 20.752930, released on March 9, 2016

Version RTC-scm-20.752930 includes the following features and fixes:

* Added RPX dependency.

#### Version 19.672547

Version 19.672547 includes the following features and fixes:

* Added retries to RTC commands when certain errors occur.
* Updated Changelog and Quiet Period steps to use the date that a change was added to the stream.

#### Version 19.612820

Version 19.612820 includes the following features and fixes:

* Fixed an issue where communication with the UrbanCode Build server would fail if it was running with an IBM JDK and IBM JRE.

|Back to ...||Latest Version|Rational Team Concert SCM |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[24.1013888](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/RationalTeamConcert/RTC-scm-24.1013888.zip)|[Readme](README.md)|[Steps and Settings](steps and settings.md)|[Downloads](downloads.md)|
