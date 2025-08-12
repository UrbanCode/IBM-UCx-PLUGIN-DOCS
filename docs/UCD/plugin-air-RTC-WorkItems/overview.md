
# IBM Rational Team Concert Work Items - Overview

This plug-in includes steps that work with work items in IBM Rational Team Concert. The [Add Work Item Comments](steps#add_work_item_comments) step adds comments to a work item. The [Change Work Item Status](steps#change_work_item_status) step changes the status of a work item. The [Check Work Item Status](steps#check_work_item_status) step adds comments to a work item

## Compatibility

This plug-in requires version 6.0 or later of IBM DevOps Deploy.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## Documentation

Read about a full deployment architecture and process using WAS, BPM, and RTC [here](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/07/20/bpserver).

## History
### Version 15

Fixed the Add-comments step failure.

### Version 14

Log4j issue addressed.


### Version 13

Fixes APAR PH10100Rational Team Concert Work Items plugin UnknownHostException

### Version 12

Identify Filed Against based on `hierarchicalName` rather than `title`. This modification may force some users to update the Filed Against field with the full `hierarchial` name rather than a shortened `title` name. This change ensures there is no confusion when specifying the Filed Against category.

### Version 11

Multiple work items can be specified in the Change Work Item Status and Add Work Item Comments steps.

### Version 10

* Added support for the oslc\_cm namespace in the Additional Work Item attributes property.
* If the rtc\_cm: is added to the beginning an Additional Work Item attribute property, it will now be properly added to the new work item.
* If no namespace is specified, rtc\_cm will still be assumed.

### Version 9

* Fixes APAR PI76916Parallel Add Comment steps to the same work item will no longer fail with a 409 error.
* Update error output for potential invalid username or password specification.

### Version 8

Fixes APAR PI74392z/OS encoding issue with Check Work Item Status step.

### Version 7

Various bug fixes.

Added Debug, Work Item Description, and Work Item Tags properties to the Create Work Item step.

Set Work Item ID as a Create Work Item output property.

### Version 6

Support property file encryption.

### Version 5

Added Create Work Item step.

Fixes APAR PI68389Invalid recognition of non-generic path element.

### Version 4

Added Check Work Item Status step.

