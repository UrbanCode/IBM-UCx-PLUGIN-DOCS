
# Digital.ai Agility - Overview


The Digital.io Agility plug-in provides the integration with Digital.io Agility server. The plug-in imports work items from a Digital.io Agility server and provides a single view consisting of all the work items in DevOps Velocity value stream map.

## Compatibility

This plug-in requires the following:

* Digital.io Agility Server Version 21.0 or later

The table below lists the compatible versions of the Agility plug-in and IBM DevOps Velocity:

| DevOps Velocity Version | Agility DevOps Plug-in Versions |
| --- | --- |
| 5.2.5 or later | 1.0.41 |

## Versions

IBM DevOps Velocity plug-in images are located in DockerHub. To view available plug-in versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-agility/tags).

## History

### Version 1.0.41

* **Vulnerability fix**: Addressed and resolved Whitesource-reported vulnerabilities.
* **Enhancement**: Added support for Team and Teamspace fields in plugin integrations. These fields can now be configured during plugin setup and integration.
* **Technical upgrade**: Upgraded the NPM Wrapper package to the latest supported version.

### Version 1.0.29

* **Removed manual user access key:** Starting with this version, the plugin supports only the auto-generated user access key feature in DevOps Velocity.
* **Restricted installation on older versions:** You can install Digital.ai Agility Plugin 1.0.29 only on DevOps Velocity 3.0.0 or later.
* **Added category:** Application Lifecycle Management (ALM) is now the plugin category for Digital.ai Agility.
* **Added Initial Sync Date field:** The Add Integration page now includes the Initial Sync Date field under Hidden Properties. This optional field is used only for the first synchronization.

### Version 1.0.26

* **Clarifying delimitation**: For the properties used in index.js file clarified delimitation problem . Updated label information and description as comma separated list must be used. So that it is more clear while integrating.

### Version 1.0.20

* User access key related changes.

### Version 1.0.11

* Auto-generated User Access Key support added (support starts with IBM DevOps Velocity version 2.4.0 or later)

### Version 1.0.0

* Initial release.

