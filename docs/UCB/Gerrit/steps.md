
Gerrit - Steps
==============

# Steps


### Steps




### Process steps in the Gerrit plug-in

* [Gerrit Review](#gerrit_review)


### Gerrit Review

Apply a Gerrit review.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Commit | String | The commit in Gerrit that is being reviewed. When using this plugin with Git repository triggers, the value will be in the buildlife/revision property. | No |
| Labels | String | A comma-separated list of NAME=VALUE pairs | No |
| Message | String |  | No |
| Repo URL | String | The repo URL for the Gerrit project. Ex: ssh://user@yourcompany.gerrit.com:29418/path/to/repo.git. When using this plugin with Git repository triggers, the value should be in the buildlife/repo property. | No |
| Review | Enumeration:
| The review level to apply | No |
| Submit | Boolean | Attempt to submit the patchset | No |


