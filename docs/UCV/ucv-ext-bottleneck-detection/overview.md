
# Bottleneck Detection - Overview

## Overview

The Bottleneck Detection plug-in monitors, detects, and provides an alert when bottlenecks are detected in a value stream. A value stream bottleneck is a restriction in the local throughput that limits the global throughput of a system.

The plug-in uses three algorithms each detecting a different type of bottlenecks:

* **Dominant stage bottleneck** – one stage in a value stream has a time-in-stage value greater than or equal to the sum of the time-in-stages of all other stages in that value stream

* **Batching bottleneck** – work items exit a given stage in short time intervals separated by large intervals with no associated activity

* **Inflow/outflow asymmetry bottleneck** – unusually large difference of work items flowing into and out of a stage on a given day

The plugin runs automatically every 24 hours after a manually started run.

At runtime, records for all defined value streams are processed through each bottleneck type algorithm. Bottleneck detection records are returned for each value stream. A value stream can have multiple bottleneck detection records created during a given run, or it may have none. If multiple bottlenecks are found for a given run, only the highest severity bottleneck is displayed. However, all detection records are logged in the database. You can view detected bottlenecks on the All Value Streams page.

For additional information, see [Bottleneck detection](https://devops.hcldoc.com/accelerate/2.3.x/#com.uvelocity.doc/topics/c_bottleneck_detect/) topic in the product documentation.


## Versions

IBM DevOps Velocity plug-in images are located in DockerHub. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-bottleneck-detection/tags).

### History

### Version 1.0.3

* **Removed Manual User Access Key** : From current version onwards this plugin will only support Auto Generated User Access Key feature of Devops Velocity.
* **Minor Enhancement**: We can now identify bottlenecks for individual value streams, resolving the issue of occasionally encountering failures when attempting to identify bottlenecks for all value streams simultaneously.

### Version 1.0.2

* Enhancement

### Version 1.0.1

* Bug Fix


|Back to ...||Latest Version|Bottleneck Detection |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.3-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-bottleneck-detection/ucv-ext-bottleneck-detection%3A1.0.3.tar.7z.001)[and 1.0.3-File 2 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-bottleneck-detection/ucv-ext-bottleneck-detection%3A1.0.3.tar.7z.002)[and 1.0.3-File 3 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-bottleneck-detection/ucv-ext-bottleneck-detection%3A1.0.3.tar.7z.003)[and 1.0.3-File 4 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-bottleneck-detection/ucv-ext-bottleneck-detection%3A1.0.3.tar.7z.004)[and 1.0.3-File 5 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-bottleneck-detection/ucv-ext-bottleneck-detection%3A1.0.3.tar.7z.005)[and 1.0.3-File 6](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-bottleneck-detection/ucv-ext-bottleneck-detection%3A1.0.3.tar.7z.006)|[Readme](README.md)|[Usage](usage.md)|[Downloads](downloads.md)|
