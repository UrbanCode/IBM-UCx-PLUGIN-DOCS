
Git for IBM UrbanCode Build - Overview
======================================

# Overview


### Overview



The Git plug-in automates cloning a Git repository, tagging source code, and publishing source code changes to the Changes page of the build life.

### Compatibility

The Git source config plugin for UrbanCode Build is compatible with version 6.1.3 and above.

Supporting GitHub and BitBucket Server repository trigger events requires UrbanCode Build 6.1.4.1 and above.

### Installation

No special steps are required for installation. See [Installing plug-ins in UrbanCode Build](http://www-01.ibm.com/support/knowledgecenter/#!/SS8NMD_6.1.0/com.ibm.ucbuild.doc/topics/plugin_ch.html "Installing plug-ins in UrbanCode Build").

### History

#### Version 27

To fix duplicate committer licenses, we made provisions to use email ids instead of author names.

#### Version 26

Added provision to disable Build triggers on Draft Pull Request.

#### Version 25

Ensure the local git repository’s remote url is up to date before performing a checkout.

#### Version 24

Properly handle charset when reading the response stream in changelog step.

#### Version 23

Ignore BitBucket events related to deleting branches.

#### Version 22

Resolve ``${p:triggeredBranch}`` using data provided in the payload of repo:refs\_changed events from BitBucket Server.

#### Version 21

Add ability to handle repo:refs\_changed and pr:merged events sent by BitBucket Server.

#### Version 20

Add ability to trigger builds in response to repo:push events sent by BitBucket.

#### Version 19

Allow triggering builds for changes in arbitrary branches of a GitHub repository.

#### Version 18

Avoid NullPointerException if the HTTP client fails to execute and throws an exception before returning the response object.

#### Version 17

Prefer using external web URL to construct the target URL in Create GitHub Status step when available.

#### Version 16

Fix incompatibility with UCB 6.1.2.x that was introduced in version 14 and prevented triggering builds in response to push events sent by GitHub.

#### Version 15

Fix intermittent IOException stream closed errors.

#### Version 14

Added support for triggering pre-flight builds for pull request events sent from GitHub. Requires IBM UCB 6.1.3.1 (patched) or later.

#### Version 13

Added new step for creating commit statuses in GitHub. Requires IBM UCB 6.1.3.1 (patched) or later.

#### Version 12

Fixed issue with repository trigger script not resolving parameterized repository base URL.

#### Version 11

Fixed infinite build triggering issue with Github if creating a tag with the same name as an existing branch.

#### Version 10

Support property file encryption.

#### Version 9

Improved handling of user credentials embedded in repository base URL and repository configuration.

#### Version 8

This release includes translated steps and properties.

#### Version 7

This release includes a fix for the triggering script.

#### Version 6

This release includes support for triggering builds by using GitHub or GitLab webhooks.


|Back to ...||Latest Version|Git for IBM UrbanCode Build |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[29.1127031](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/Git/Git-29.1127031.zip)|[Readme](README.md)|[Steps](steps.md)|[Downloads](downloads.md)|
