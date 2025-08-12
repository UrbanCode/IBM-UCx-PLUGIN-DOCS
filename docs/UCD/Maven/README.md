
# Maven Resolve

Maven is a software project management and comprehension tool. Based on the concept of a project object model (POM), Maven can manage a project’s build, reporting, and documentation from a central piece of information.

The Maven plug-in supports resolving artifacts from a maven repository.

**Note:** For supporting Maven snapshot resolution, version 9+ is required, as well as version 13+ of the [Maven Source Config plug-in](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/MavenSourceConfig/).If you are not using the Maven Source Config plug-in, the feature can function by manually or programmatically setting a version property named ‘baseVersion’, with the non-timestamped name (ie., 1.0.0-SNAPSHOT), on the component version.


## Available Steps

Maven ResolveResolve artifacts from maven.


