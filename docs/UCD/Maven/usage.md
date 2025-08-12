
# Maven Resolve - Usage


The format that is required by the Artifacts field in the [Maven Resolve](#maven_resolve "Maven Resolve step") step is groupId/artifactId/version/filename. The default value of the Artifacts field is ``${p:component/MavenComponentProperties/groupId}``/``${p:component/MavenComponentProperties/artifactId}``/``${p:version.name}``/``${p:component/MavenComponentProperties/artifactId}``-``${p:version.name}``.``${p:component/MavenComponentProperties/extension}``.

You must configure the component properties that are used in the Artifacts field before you run the [Maven Resolve](#maven_resolve "Maven Resolve step") step. To learn more about component properties, see [Component properties](https://www.ibm.com/docs/en/urbancode-deploy/7.2.3?topic=components-component-properties "Component properties") in the product help. The default value of the Artifacts field uses the following combination of properties for the file name: ``${p:component/MavenComponentProperties/artifactId}``-``${p:version.name}``.``${p:component/MavenComponentProperties/extension}``.Configure the properties so that the file name matches the file name in the Maven repository.

