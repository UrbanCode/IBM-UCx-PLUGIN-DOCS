
# Microsoft TFS_SCM (Team Foundation Server)

The Microsoft TFS\_SCM plug-in imports version artifacts from a Team Foundation Server (TFS) server. TFS is supported both as a source of builds with the [TFS plug-in](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/TFS-SourceConfig/), and by direct retrieval of deployable artifacts from source control.

**Note:** Microsoft .NET Framework 3.5 must be installed on the agent computer where the plug-in is installed. If Microsoft .NET Framework 3.5 is not installed on the agent computer, the following error message is displayed when you attempt to import version artifacts: Error Creating New Version: Error retrieving latest build.

Compatibility

* This plug-in supports Visual Studio Online.
* This plug-in supports Team Foundation Server 2010 – 2017.
* This plug-in requires version 6.0 or later of IBM DevOps Deploy.
* For DevOps Deploy 6.0, both the agent and the server must be installed on Microsoft Windows. For DevOps Deploy 6.0.1 or later, only the agent is required to be on a system that is running Microsoft Windows.

