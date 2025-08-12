
# Microsoft TFS Work Items

This plug-in provides steps that enable one to create and update work items in a Microsoft Team Foundation Server from within an IBM DevOps Deploy process. Typically, one would add a comment, update the status, or even open a new work item depending on the outcome of a deploy (i.e. success of failure). The plug-in must be run on an agent where the Microsoft Visual Studio and Team Foundation Server plug-in for Visual Studio have been installed.

**Platform Support:**

* This plug-in is supported to run on all Microsoft Windows operating systems that are supported by both the IBM DevOps Deploy agent and Microsoft Team Foundation Server
* This plug-in is supported to run against Microsoft Team Foundation Server versions 2008, 2010, 2012, 2013 and 2015.


## Available Steps

Create Work Item: Creates a new work item

Change Work Item State: Change the state of an existing work item

Add Comment: Adds a comment to an existing work item

Display Work Item Status: Outputs a summary of a work item(s) to the log

Update Work Item: Update any field in a specified work item, overwriting or appending to the existing value


