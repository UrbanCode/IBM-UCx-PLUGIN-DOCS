
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

