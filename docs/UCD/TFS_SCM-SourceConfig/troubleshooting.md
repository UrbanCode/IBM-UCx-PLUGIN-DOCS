
# Microsoft TFS_SCM (Team Foundation Server) - Troubleshooting


Unable to delete temporary workspace

The server does not have the privileges that are required to delete the local temp file. This error message does not affect the standard operation of the plug-in.

Error Creating New Version: TFS Map Workspace Error: An argument error occurred: The workspace name <workspace\_name> matches more than one cached workspace. Try adding the workspace owner to the workspace spec to match a specific workspace.

This error can occur if you switch users or if you create more than one workspace with the same name under your agent user account. If you switched users and see this error message, run the command tf workspaces /remove:\* to clear the cache. If you created more than one workspace with the same name, delete the redundant workspace and then clear the cache.

Error Creating New Version: Error retrieving latest build.

Install Microsoft .NET Framework 3.5 on the agent computer where the plug-in is installed.

