
# AccuRev SCM - Overview


The AccuRev source configuration plug-in supports creating components from AccuRev promote transactions, issues, snapshots, and workspaces.

## Compatibility

This plug-in requires version 6.2 or later of DevOps Deploy and version 7.0.1 or later of AccuRev SCM.

To use this plug-in, you must install the AccuRev `accurev` command-line tool on the runtime agent. [Full `accurev` cli directions can be found here.](https://supportline.microfocus.com/Documentation/books/AccuRev/AccuRev/7.0.1/accurev-701-cliusersguide-en.pdf)

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps products").

## History

### Version 9

* APAR PH24084: Resolved class (FileListerBuilder$Permissions) not found dependency issue.

### Version 6

* APAR PI89045: add support for setting isFinished flag flag when importing versions.

### Version 5

* Fixes APAR PI87707, a regression where the user who requested a manual version import was not being tracked.

### Version 4

* The -H serverUrl flag (AccurRev URL) has been added to all commands for complete remote AccuRev server access.
* Specify a Workspace Stream to retrieve its current contents. Version name will be time stamped with date and time. Issues, Snapshots, and Transaction properties will be ignored.
* Defunct files contained in Issues will be ignored with a warning.

### Version 3

* Issues are only identified if changes are partially or completely in the specified stream.
* Snapshots are only identified if they are a direct child of the specified stream.

### Version 2

* The Import Promote Transactions, Import Issues, and Import Snapshots checkboxes are now unselected by default.
* When the Import Snapshots checkbox is selected, only the latest created snapshot is imported.
* Issue imports are now sorted numerically rather than alphabetically.
* On manual import, a Version Name Tag value is available to differentiate newly imported versions.

### Version 1

* Initial release of the AccuRev Source Config plug-in importing Promote Transaction, Issue Change set, and Snapshot artifacts.

