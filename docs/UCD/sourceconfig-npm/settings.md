
# NPM - Settings

## Process steps in the NPM plug-in

* [Import Version](#import_version)


## Import Version

Import NPM packages as TAR files.

This step has no input properties.


## Roles in the NPM plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.


* [ComponentProperties](#componentproperties_role)
* [ImportProperties](#importproperties_role)


## ComponentProperties


| Name | Type | Description | Reference |
| --- | --- | --- | --- |
| Import All Versions | Boolean | Specify to import all versions of the specified package. By default only the latest version is imported. |
``${p:component/ComponentProperties/allVersions}`` |
| Log4j Logging Level | Enumeration:
| The level of Log4j messages to output to the console. Specify ALL, TRACE, DEBUG, INFO, WARN, ERROR, FATAL, or OFF. |
``${p:component/ComponentProperties/loggerLevel}`` |
| NPM CLI Path | String | The path to the NPM executable file, if not specified on the system PATH environment variable. |
``${p:component/ComponentProperties/cliPath}`` |
| Package Name | String | The name of the NPM package to import. To specify a scope by prepending @<scope\_name>/ to the package name. This associates the specified scope with your registry. |
``${p:component/ComponentProperties/package}`` |
| Password | Password | The password to authenticate with the registry. |
``${p:component/ComponentProperties/password}`` |
| Registry URL | String | The fully-qualified URL of the NPM registry. For example https://registry.npmjs.org/. |
``${p:component/ComponentProperties/registryUrl}`` |
| Username | String | The user name to authenticate with the registry. |
``${p:component/ComponentProperties/username}`` |

## ImportProperties


| Name | Type | Description | Reference |
| --- | --- | --- | --- |
| Version to Import | String | The version of a package to import. |  |


