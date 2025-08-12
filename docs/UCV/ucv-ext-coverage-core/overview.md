
# Code Coverage - Overview


The Code Coverage plug-in allows for parsing of data from several code coverage tools. It parses
data from LCOV, Cobertura, JaCoCo, and Clover. Data is uploaded to the IBM DevOps Velocity server using an HTTP Post
request.

## Compatibility

The plugin is compatible with following versions:

- IBM UrbanCode Velocity 2.0.x to IBM UrbanCode Velocity 4.0.x
- IBM DevOps Velocity 5.0.x or later


## Versions

IBM DevOps Velocity plug-in images are located in DockerHub. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-coverage-core/tags).

## History

### Version 1.0.44

* **Bug Fix**: Fixed issues with parsing data from the Clover XML format.

### Version 1.0.42

* **Feature enhancement**: Now core coverage plugin accepts user defined record name and dataset name in payload while hitting post call/curl command. If values are not provided by user it will accept default values given by the plugin.

### Version 1.0.38

* Minor fix

### Version 1.0.30

* Bug fix

### Version 1.0.25

* Update plugin version from 0.x.x to 1.x.x format.

### Version 0.0.22

* Initial release

|Back to ...||Latest Version|Code Coverage |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.44-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-coverage-core/ucv-ext-coverage-core%3A1.0.44.tar.7z.001)[and 1.0.44-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-coverage-core/ucv-ext-coverage-core%3A1.0.44.tar.7z.002)|[Readme](README.md)|[Usage](usage.md)|[Downloads](downloads.md)|
