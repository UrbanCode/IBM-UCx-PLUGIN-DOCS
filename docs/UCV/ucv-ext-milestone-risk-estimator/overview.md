# Milestone Risk Estimator - Overview

## Overview

Milestone risk estimator plug-in for IBM DevOps Velocity (**Velocity**) estimates value stream management sprint risk and provides estimated result in metrics **P.R.E Risk** (Probabilistic Risk Estimator) which shows the evaluated risk as percentage and **P.R.E Deadline** (Probabilistic Risk Estimator) which shows an estimated deadline. There are two scheduled events ExecuteTrain and ExecutePrediction. ExecuteTrain is for training the model and ExecutePrediction is for predicting the risk of current active sprint. It collects work item data and use them to train the model and predict the risk. The default training frequency is a week and default prediction frequency is a day. Any closed work items are queried for training and open work items of active sprint are queried and used for predicting the risk. At the end of every prediction, the prediction results are inserted as metrics.

## Compatability

Must be running **Velocity** version 5.0.0 and later to use the plug-in.


## Versions

### History

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
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.5](https://hub.docker.com/r/urbancode/ucv-ext-milestone-risk-estimator/tags)|[Readme](README.md)|[Usage](usage.md)|[Downloads](downloads.md)
