
SonarQube (formerly Sonar) - Steps
==================================

# Steps


### Steps




### Process steps in the SonarQube plug-in

* [Run SonarQube](#run_sonarqube)
* [Run SonarQube for .NET](#run_sonarqube_for_.net)


### Run SonarQube

Run SonarQube to get information about source and tests from SonarQube

if(Boolean.valueOf(createPom) && !automation) { errors.automation = Must Specify a Url if Pom is to be created }`` if(Boolean.valueOf(createPom) && !srcDir) { errors.srcDir = Must Specify a Source Directory if Pom is to be created }`` if(Boolean.valueOf(createPom) && !binDir) { errors.binDir = Must Specify an Artifact Directory if Pom is to be created }`` if(Boolean.valueOf(createPom) && !projName) { errors.projName = Must Specify a Project Name if Pom is to be created }`` if(Boolean.valueOf(createPom) && !artifactId) { errors.artifactId = Must Specify an Artifact ID if Pom is to be created }`` if(!Boolean.valueOf(createPom) && ( srcDir || binDir || projName || artifactId)) { errors.srcDir = This must be empty if a POM.xml does not need to be created; errors.binDir = This must be empty if a POM.xml does not need to be created; errors.projName = This must be empty if a POM.xml does not need to be created; errors.artifactId = This must be empty if a POM.xml does not need to be created; }``


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Artifact Directory | String | Relative path from the Pom file to the directory where artifacts are stored if a Pom file needs to be created. | No |
| Artifact ID | String |  | No |
| Create Pom File | Boolean | Required if your project is not a Maven project configured for SonarQube | No |
| Exclude Directories | String | Relative path to the source to be excluded for static analysis. | No |
| Extra Maven Arguments | String | Extra arguments to pass to the maven commandline | No |
| GroupId | String | The Maven Group ID to associate this scan with. | No |
| JVM Properties | String | Properties passed to the JVM (such as adding memory) | No |
| Maven Home | String | The path to the installation of Maven that will be used. Leave blank to use the Maven on the path. | No |
| Model Version | String | The Model Version for this scan. | No |
| Project Name | String | Project Name to be displayed by SonarQube if a Pom file needs to be created. | No |
| SonarQube |  | SonarQube server settings. Select if not included in the Pom | No |
| Source Directory | String | Relative path from the Pom file to directory where source resides if a Pom file needs to be created. | No |
| Version | String | Version identifier of your artifact | No |

### Run SonarQube for .NET

Run SonarQube to get information about source and tests from SonarQube for .NET

if(Boolean.valueOf(createPom) && !automation) { errors.automation = Must Specify a Url if Pom is to be created }`` if(Boolean.valueOf(createPom) && !slnName) { errors.slnName = Must Specify a Solution file (.sln) if Pom is to be created }`` if(Boolean.valueOf(createPom) && !projName) { errors.projName = Must Specify a Project Name if Pom is to be created }`` if(Boolean.valueOf(createPom) && !artifactId) { errors.artifactId = Must Specify an Artifact ID if Pom is to be created }`` if(!Boolean.valueOf(createPom) && ( slnName || projName || artifactId)) { errors.slnName = This must be empty if a POM.xml does not need to be created; errors.projName = This must be empty if a POM.xml does not need to be created; errors.artifactId = This must be empty if a POM.xml does not need to be created; }``


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Artifact ID | String |  | No |
| Create Pom File | Boolean | Required if your project is not a Maven project configured for SonarQube | No |
| Exclude Directories | String | Relative path to the source to be excluded for static analysis. | No |
| Extra Maven Arguments | String | Extra arguments to pass to the maven commandline | No |
| GroupId | String | The Maven Group ID to associate this scan with. | No |
| JVM Properties | String | Properties passed to the JVM (such as adding memory) | No |
| Maven Home | String | The path to the installation of Maven that will be used. Leave blank to use the Maven on the path. | No |
| Model Version | String | The Model Version for this scan. | No |
| Project Name | String | Project Name to be displayed by SonarQube if a Pom file needs to be created. | No |
| Sln Name | String | The name of the sln file which should be located in the working directory. Only used if Create Pom File is checked. Leave blank to default to the first sln file found in the working directory | No |
| SonarQube |  | SonarQube server settings. Select if not included in the Pom | No |
| Use Debug Configuration | Boolean |  | No |
| Version | String | Version identifier of your artifact | No |


### Roles in the SonarQube plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.


* [SonarQube Server Configuration](#sonarqube_server_configuration_role)


### SonarQube Server Configuration


| Name | Type | Description |
| --- | --- | --- |
| Database Driver | String | Optionally specify the JDBC driver to use. |
| Database Password | Password | The password to the SonarQube database (sonar.jdbc.password) |
| Database Url | String | The location of the SonarQube Database (sonar.jdbc.url) |
| Database Username | String | The username with credentials to the SonarQube database (sonar.jdbc.username) |
| SonarQube Url | String | Location to talk to SonarQube. |
| SonarQube Version | String | The version of SonarQube if it is less than 1.8 or want to use a specific version. |



|Back to ...||Latest Version|SonarQube (formerly Sonar) |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[8.838525](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/Sonar/SonarQube-8.838525.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
