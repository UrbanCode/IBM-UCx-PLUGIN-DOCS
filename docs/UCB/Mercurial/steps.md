
Mercurial - Steps
=================

# Steps


### Steps




### Process steps in the Mercurial plug-in

* [Mercurial Changelog](#mercurial_changelog)
* [Mercurial Checkout](#mercurial_checkout)
* [Mercurial Cleanup](#mercurial_cleanup)
* [Mercurial Create Tag](#mercurial_create_tag)
* [Mercurial Quiet Period](#mercurial_quiet_period)


### Mercurial Changelog

Perform a Mercurial changelog and publish the results.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Changes URL | String |  | No |
| End Date | String | End changelog at this date (yyyy-MM-dd HH:mm:ss z OR E MMM dd HH:mm:ss zzz yyyy OR milliseconds since Unix Epoch) | No |
| End Revision | String | End changelog at this revision | No |
| Source Config |  |  | No |
| Start BuildLife Id | String | The ID of the start buildlife. This plugin will look for changes since that buildlife. | No |
| Start Date | String | Start changelog at this date (yyyy-MM-dd HH:mm:ss z OR E MMM dd HH:mm:ss zzz yyyy OR milliseconds since Unix Epoch) | No |
| Start Revision | String | Start changelog at this revision | No |

### Mercurial Checkout

Perform a Mercurial clone and checkout of the workflows source


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Branch | String | Override the branch to check out | No |
| Clean Workspace | Boolean | Erase all files from the worksapce before performing checkout | No |
| Date | String | Date of sourcecode to checkout (yyyy-MM-dd HH:mm:ss z OR E MMM dd HH:mm:ss zzz yyyy OR milliseconds since Unix Epoch). Defaults to the requested build date for the workflow. | No |
| Remote Name | String | Override the remote name from which to check out | No |
| Revision | String | Override the revision to check out | No |
| Source Config |  |  | No |

### Mercurial Cleanup

Perform a cleanup of the Mercurial working directory


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Source Config |  |  | No |

### Mercurial Create Tag

Create a tag in Mercurial of the specified working copy.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Message | String | A message for the commit | Yes |
| Push Tag | Boolean | Immediately push the new tag back to the remote | No |
| Source Config |  |  | No |
| Tag | String | The tag name to create | No |

### Mercurial Quiet Period

Perform a Mercurial changelog for quiet period detection and publish most recent change date within the period.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| End Date | String | End changelog at this date (yyyy-MM-dd HH:mm:ss z OR E MMM dd HH:mm:ss zzz yyyy OR milliseconds since Unix Epoch) | No |
| Source Config |  |  | No |
| Start Date | String | Start changelog at this date (yyyy-MM-dd HH:mm:ss z OR E MMM dd HH:mm:ss zzz yyyy OR milliseconds since Unix Epoch) | No |


### Roles in the Mercurial plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.


* [Mercurial Repository](#mercurial_repository_role)
* [Mercurial Source Config](#mercurial_source_config_role)


### Mercurial Repository

A placeholder for using the hg scm system. The remote repository is configured on a per workflow basis.



| Name | Type | Description |
| --- | --- | --- |
| Command Path | String | The location of the Mercurial command if not on the systems PATH |
| Password | Password | The password to use for http(s) access repositories |
| Password Script | String | If you wish to use a script or property lookups for your password, leave the Password field blank and enter it here. |
| Repository Base URL | String | A url prefix for source configurations to specify a relative path to the hg repository (e.g. https://hg.example.com/repos/or ssh://hg.example.com/repos/) |
| Username | String | The username to use for http(s) access repositories |

### Mercurial Source Config


| Name | Type | Description |
| --- | --- | --- |
| Branch | String | The remote branch name to check out (defaults to default) |
| Directory Offset | String | Directory Offset from the current job working directory. (Use . to clone into the current working directory) |
| Exclude Users | String | Exclude this list of usernames |
| File Filters | String | Restrict changelog to files matching these patterns. Lines start with + to include, andto exclude.Wildcards \*, \*\*, and ? are allowed. |
| Remote URL | String | The path to the project repository. May be either absolute e.g. https://hg.example.com/repos/example/or ssh://hg.example.com/repos/example/, or relatative to the repository base url e.g. example |
| Repository |  | Select the Mercurial Repository |



|Back to ...||Latest Version|Mercurial |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[6.753091](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/Mercurial/Mercurial-6.753091.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
