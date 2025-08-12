# Milestone Risk Estimator - Overview

## Overview

Milestone risk estimator plug-in for IBM DevOps Velocity estimates value stream management sprint risk and provides estimated result in metrics **P.R.E Risk** (Probabilistic Risk Estimator) which shows the evaluated risk as percentage and **P.R.E Deadline** (Probabilistic Risk Estimator) which shows an estimated deadline. There are two scheduled events ExecuteTrain and ExecutePrediction. ExecuteTrain is for training the model and ExecutePrediction is for predicting the risk of current active sprint. It collects work item data and use them to train the model and predict the risk. The default training frequency is a week and default prediction frequency is a day. Any closed work items are queried for training and open work items of active sprint are queried and used for predicting the risk. At the end of every prediction, the prediction results are inserted as metrics.

## Compatibility

The plugin is compatible with following versions:

- IBM DevOps Velocity 5.0.0 or later


## Versions

IBM DevOps Velocity plug-in images are located in DockerHub. To
view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-milestone-risk-estimator/tags).

### History

### Version 2.0.4

* **Image Size Optimization**: Reduced Docker image size using a multi-stage build and dependency optimizations.
* **Python Packages**: Updated python dependencies used within the plugin.
* **Bug fix**: In Sprint, completeTime was missing. It will now be populated with endTime if available; otherwise, the data will be discarded.
* **Compatibility Notes**: This update provides compatibility only up to Velocity version  5.1.1. It doesn't work above the velocity version 5.1.1.

### Version 2.0.2

* Introduced generation of insights based on the prediction for displaying it as a tool tip for **P.R.E Risk** metric.
* Fixed memory bound issues.

### Version 2.0.1

* Introduced simulation-based prediction of team velocities for more realistic scenarios.
* Expanded support for a broader and customizable range of work item types.
* Enhanced estimation accuracy by incorporating:
  * History of ownership changes.
  * Parent-child relationships among work items.

### Version 1.0.5

* **Bug fix**: Addressed bugs related to empty training datasets and empty prediction datasets.

### Version 1.0.4

* **Bug fix**: Fix related to error logs getting while performing integration - INTERNAL SERVER ERROR.

### Version 1.0.3

* **Bug fix**: Updated graphiql query from PaginationInput to InsightsPaginationInput.

### Version 1.0.1

* Initial release of milestone risk estimator plug-in.


|Back to ...||Latest Version|Milestone Risk Estimator |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[2.0.4](https://hub.docker.com/r/urbancode/ucv-ext-milestone-risk-estimator/tags)|[Readme](README.md)|[Usage](usage.md)|[Downloads](downloads.md)
