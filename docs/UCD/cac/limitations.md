# Limitations

## With version CAC-3.2
* Notifications in generic process configurations are not supported

## With version CAC-1.0.1172045

* New processes cannot be created in this version.
* Secured properties are not supported. To use secure properties, one may define a secure property in any entity such as component, environment, resource etc and refer that property name in the process property.
* Post-processing Scripts are not fully supported. (Adding or updating the Teams for a post-processing script is not supported even though extracting the script into a file during upload and using that script during download is supported).
* Process names with spaces may not work as expected during upload and hence best avoided or renamed before using with this tool.
* Utility steps like Component-Inventory-Update and Snapshot-Inventory-Update are not supported.