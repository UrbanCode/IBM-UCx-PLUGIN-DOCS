
# Microsoft TFS (Team Foundation Server)

Microsoft Team Foundation Server (TFS) is a software development collaboration tool. It includes source control, data collection, reporting, and project tracking.The Microsoft TFS plug-in imports versioned source artifacts from a TFS server. See the [Microsoft TFS\_SCM (Team Foundation Server) plug-in](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/TFS_SCM-SourceConfig/)to import deployable artifacts from the TFM server.

## Requirements

* Microsoft .NET Framework 3.5 must be installed on the agent computer where the plug-in is installed. If it is not installed when you attempt to import version artifacts, the following message is displayed: `Error Creating New Version: Error retrieving latest build`
* This plug-in requires version 6.0 or later of IBM DevOps Deploy.
* For DevOps Deploy 6.0, both the agent and the server must be installed on Microsoft Windows. For DevOps Deploy 6.0.1 or later, only the agent is required to be on a system running Microsoft Windows.

## Compatibility

This plug-in supports Team Foundation Server 2010 – 2017 using XAML builds.

**Note**: XAML builds have been deprecated since TFS 2015 and new ones cannot be created. If using a different TFS build type, use the [Microsoft Visual Studio Team Services (VSTS) plug-in](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/microsoft-visual-studio-team-services-vsts/). The VSTS plug-in supports all build types.

