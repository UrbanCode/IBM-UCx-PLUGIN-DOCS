
# IBM DevOps Deploy Versions - Process Steps


* [Add Status to Version](#add_status_to_version)
* [Add Version Link](#add_version_link)
* [Create Version](#create_version)
* [Get Version Properties](#get_version_properties)
* [Remove Status from Version](#remove_status_from_version)
* [Get Version Status Information](#get_version_status_information)


## Add Status to Version

Add a status to a Component Version


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Status | String | The status to be applied to the Component Version. | No |

## Add Version Link

Creates or removes a link on a component version which can direct users to supplementary information related to the execution.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component Name | String | Name or ID of the version’s component. Ignored if ‘Version ID’ is selected. | No |
| Link Title | String | The link text which the user can click on. | Yes |
| Make Priority | Boolean | When checked, prioritize the link by placing it in the page header for quicker access. | No |
| URL | String | The website the user will be directed to when the link title is clicked. | Yes |
| Version Name/ID | String | Name or ID of version where link will be assigned. Ignored if ‘Component’s latest version’ is selected | Yes |

## Create Version

Create a Component Version and optionally upload files into it.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component Name | String | The name of the component whose version to remove the status from. | Yes |
| Excludes | String | The patterns to exclude files to upload. | No |
| Includes | String | The patterns to match files to upload. The wildcard \*\* indicates every directory and the wildcard \* indicates every file. So the pattern dist/\*\*/\* would retrieve the entire file tree underneath the dist directory. | Yes |
| Save File Execute Bits | Boolean | When enabled, file execute bits are saved with the files. | No |
| Upload Files | Boolean | Upload files from the current working directory to the version after creation? | No |
| Version Name | String | The name of the version to remove the status from. | Yes |

## Get Version Properties

Get the properties of a specific Version in the output properties of this step.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component | String | (Optional) The name or ID of the component whose version has desired properties. | No |
| Version | String | The name or ID of the version with desired properties. If specifying a version name, you must specify a component. | Yes |

## Remove Status from Version

Remove a status from a Component Version


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Status | String | The status to be removed from the Component Version. | No |

## Get Version Status Information

Retrieve the status information for a Version and sets the output properties: versionLatestStatus, versionStatuses, and versionStatusIds. The versionStatuses and versionStatusIds. properties will contain a comman-separated-values list of all statuses on the Version. Optionally, print a message and fail this step unless a required Status is present on the Version.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Version Name | String | Name or ID of the version to get Status information.| Yes |
| Component Name | String | Name or ID of the version's component. Required if Version is provided by name.| No |
| Required Status | String | Fail this step unless the given Status Name/ID is present on the Version.| No |



