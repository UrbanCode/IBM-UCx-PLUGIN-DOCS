# CodeRabbit - Overview

The CodeRabbit plug-in is designed to sync code review metrics into DevOps Velocity. It operates primarily through a scheduled background event that queries the CodeRabbit API and uploads the results for insights analytics.

## Pre-requisite

* **GitHub Integration Required**: Because CodeRabbit only provides the metrics, you must also integrate the GitHub plug-in to fetch the corresponding pull request details.
GitHub plug-in version 1.5.15 or later is supported.

## Compatibility

The following table lists the compatible versions of the CodeRabbit plug-in and DevOps Velocity:

| DevOps Velocity Version | CodeRabbit plug-in version |
| --- | --- |
| 5.2.7 or later | 1.0.1 |

## Versions

The DevOps Velocity plug-in images are located in DockerHub. For available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-coderabbit/tags).

## History

### Version 1.0.1

* **Initial release**: The CodeRabbit plug-in syncs code review data (Accepted and Rejected comments) into DevOps Velocity as GenAI PR Events metrics.
