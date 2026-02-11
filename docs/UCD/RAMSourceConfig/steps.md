# Process Steps

## Import Version

Creates a new component version and imports artifacts

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Repository URL | textBox | The location of the Rational Asset Manager repository. To find  				the repository URL, log on to Rational Asset Manager from a web browser. Click  				Help > Extensions. The repository URL is displayed in the Repository location field. | Yes |
| User | textBox |  | No |
| Password | secureBox |  | No |
| Unique ID | textBox |  | Yes |
| Version Pattern | textBox | A regular expression that represents the version of the  				Rational Asset Manager asset to load as a component source. If set,  				only versions with names matching the regular expression will be imported.  				For example, (1\.[0-9]+).* matches versions such as 1.2 and 1.2.3.4A.  				If the expression matches more than one version, all versions are imported,  				up to the number in the Latest Build Count field. | No |
| State | textBox | The state of the Rational Asset Manager asset to load as a  				component source. States are defined in lifecycles in Rational Asset Manager.  				Specify a value to limit the component to only assets with the specified state. | No |
| Query | textBox | The query to use to select an asset to load. Use this field                              	only if you want to specify the asset with a complex query. | No |
| Latest Build Count | textBox | The number of the search results to load. By default, only  				the most applicable result is loaded. To load more than one  				version or state of the asset, specify the number to load. | Yes |
| Extensions of files to Convert | textBox | A list of file extensions to convert into another character set.  				Separate each file extenstion with a comma. Specify this property if you have  				text-type files that must be converted into another character set. Matching  				file types are converted into the default character set of the system where  				the agent is located. | No |
| Charset | textBox | The character set to convert files types listed in the Extensions of  				files to Convert property. If this property is not specified, the default or system  				character set of the system where the agent is located is used. | No |
| Include Dependent | checkBox | Import related assets that the asset depends on. | No |
| Preserve Execute Permissions | checkBox | For Linux and UNIX operating systems, retain the execute permissions  				for each file. | No |
| Specific version | textBox |  | No |

