
File Utils for IBM UrbanCode Build - Steps
==========================================

# Steps


### Steps




### Process steps in the File Utils plug-in

* [Copy Directory](#copy_directory)
* [Create .zip File](#create_.zip_file)
* [Create Directories](#create_directories)
* [Create File](#create_file)
* [Delete Files and Directories](#delete_files_and_directories)
* [Flip Line Endings](#flip_line_endings)
* [Monitor File Contents](#monitor_file_contents)
* [Move Directory](#move_directory)
* [Read Properties From XML File](#read_properties_from_xml_file)
* [Read Property File](#read_property_file)
* [Replace Tokens](#replace_tokens)
* [Synchronize Directories](#synchronize_directories)
* [Untar Tarball](#untar_tarball)
* [Unzip](#unzip)
* [Update INI File](#update_ini_file)
* [Update Property File](#update_property_file)
* [Update XML File with XPath](#update_xml_file_with_xpath)


### Copy Directory

Copy the contents of a directory to other directories. This step overwrites files but does not delete files.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Destination Directories | String | A list of directories to copy to, separated by newline characters. | Yes |
| Exclude Files | String | A list of patterns, separated by newline characters, that describe the files to skip. For example, if you specify \*\*/\*.zip, all .zip files in all subdirectories are excluded. | No |
| Include Files | String | A list of patterns, separated by newline characters, that describe the files to copy. The default, \*\*/\*, includes all files. | Yes |
| Rename Rules | String | A list of rules, separated by newline characters, for renaming the files in the destination directories. Use the format FROM->TO. For example, specify a.txt->b.txt to rename files named a.txt to b.txt and use \*.java->\*.java.bak to change file suffixes from .java to .java.bak. Rules are applied in the order that they are specified. No more than one rule is applied to a file. | No |
| Source Directory | String | The directory to copy. | Yes |

### Create .zip File

Create a .zip file.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| .zip File Name | String | Name of the new .zip file. | Yes |
| Base Directory | String | The directory that contains the files to add to the archive. | Yes |
| Case Sensitive | Boolean | Select to use case-sensitive matching. | No |
| Exclude | String | A list of patterns, separated by newline characters, that describe the files and directories to skip. For example: \*\*/\*.txt | No |
| Follow Symlinks | Boolean | Select to follow symlinks when including files. | No |
| Include | String | A list of patterns, separated by newline characters, that describe the files and directories to include. For example: \*\*/\* | Yes |
| Update existing | Boolean | Select to update or overwrite the destination file if a file with that name already exists. | No |

### Create Directories

Create a set of new directories including parent directories.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Directories | String | A list of directories to create, separated by newline characters. | Yes |

### Create File

Create a file.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Contents | String | The contents of the file. | No |
| File Name | String | The name of the file. | Yes |
| Overwrite if exists | Boolean | Select to overwrite an existing file with the same name. | No |

### Delete Files and Directories

Delete files and directories.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Base Directory | String | The base directory where files and directories are deleted. | Yes |
| Case Sensitive | Boolean | Select to use case-sensitive matching. | No |
| Exclude | String | A list of patterns, separated by newline characters, that describe the files and directories to skip when deleting. For example, specify \*\*/\*.txt to skip all .txt files. | No |
| Follow Symlinks | Boolean | Select to follow symlinks when deleting. | No |
| Include | String | A list of patterns, separated by newline characters, that describe the files and directories to delete. For example, specify \*\*/\* to delete all files. | Yes |

### Flip Line Endings

Convert file line endings between UNIX and Microsoft Windows formats.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Ending | Enumeration:
* os
* windows
* unix
| The line ending type to use. | No |
| Excludes | String | A list of patterns, separated by newline characters, that describe the files to skip. | No |
| Includes | String | A list of patterns, separated by newline characters, that describe the files to convert. | Yes |

### Monitor File Contents

Monitor a file for a token. The step continues when the token is found, and fails if the token is not found in the specified time. This step is similar to the UNIX tail command, and ignores content in the file that is present before the step starts.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Directory Offset | String | The directory relative to the current working directory that contains the file to monitor. | No |
| Fail if found | Boolean | Select to configure the step to fail if the regular expression is matched. When selected, the step does not fail when the timeout expires. | No |
| File Name | String | The name of the file to monitor. | Yes |
| Regular Expression | String | A regular expression that describes the token to match in the file. | Yes |
| Timeout (s) | String | The time, in seconds, to wait for a match to the regular expression. The step fails if a match is not found before the timeout expires. | Yes |

### Move Directory

Move the contents of a directory to another directory.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Destination Directory | String | The directory to move to. | Yes |
| Exclude Files | String | A list of patterns, separated by newline characters, that describe the files to skip. For example, if you specify \*\*/\*.zip, all .zip files in all subdirectories are excluded. | No |
| Include Files | String | A list of patterns, separated by newline characters, that describe the files to move. The default, \*\*/\*, includes all files. | Yes |
| Rename Rules | String | A list of rules, separated by newline characters, for renaming the files in the destination directories. Use the format FROM->TO. For example, specify a.txt->b.txt to rename files named a.txt to b.txt and use \*.java->\*.java.bak to change file suffixes from .java to .java.bak. Rules are applied in the order that they are specified. No more than one rule is applied to a file. | No |
| Source Directory | String | The directory to move. | Yes |

### Read Properties From XML File

Parse an XML file to search for properties defined by element names.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Directory Offset | String | The directory relative to the current working directory that contains the files to operate on. | No |
| Fail if no match found | Boolean | Select to configure the step to fail if any of the XPath expressions do not return a match. | No |
| Property Keys | String | A list of elements, separated by newline characters, whose values will be used for properties. Use dot notation to refer to nested elements. For example, specify foo.bar.baz to retrieve the value of the baz element under the bar element under the foo element. | Yes |
| XML File | String | The full path to the XML file to read properties from. | Yes |

### Read Property File

Read properties from a file and set them as output properties for the step.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Directory Offset | String | The directory relative to the current working directory that contains the files to operate on. | No |
| Property File | String | The name of the property file to read. | Yes |

### Replace Tokens

Replace tokens in files using properties.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Directory Offset | String | The directory relative to the current working directory that contains the files to operate on. | No |
| End Token Delimiter | String | The end delimiter character used to identify tokens. | No |
| Exclude Files | String | A list of patterns, separated by commas or spaces, that describe the files to exclude. | No |
| Explicit Tokens | String | A list, separated by newline characters, of explicit tokens to replace in the form of token->value. For example: if you specify mytoken->new\_value, the step replaces mytoken with new\_value. The token delimiter and property prefix settings do not apply. If you specified a value in the Property List field, the explicit tokens are added as additional values to replace, and override any properties that have the same name. You cannot use regular expressions. | No |
| Include Files | String | A list of patterns, separated by commas or spaces, that describe the files to include. | Yes |
| Property File Name | String | The name of the file used to store the replacement name-value pairs. You can use an existing file. If the file does not exist, it is created and then removed when the step completes. | Yes |
| Property List | String | Specify a property value here to use existing property names as tokens to replace in the target files. For example: Specify ``${p:environment/allProperties}`` to use the names of all component environment properties as tokens and the property values as the replacements. Similarly, specify ``${p:component/allProperties}``,``${p:environment/allProperties}`` to use the names of all component and component environment properties as tokens. The token delimiter and property prefix settings apply. If you specify @ for the start and end token delimiters and a property named token1 exists, then the step searches for @token1@ to replace. | No |
| Property Prefix | String | Specify a prefix to use to determine which properties are included in token replacement. Leave blank to include all properties. | No |
| Start Token Delimiter | String | The start delimiter character used to identify tokens. | No |

### Synchronize Directories

Move new files in a source directory to a destination directory, and delete files in the destination directory that are not in the source directory. Synchronization is based on the time stamp of the file.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Destination Directories | String | A list of directories to copy to and synchronize, separated by newline characters. | Yes |
| Exclude Files | String | A list of patterns, separated by newline characters, that describe the files to skip. For example, if you specify \*\*/\*.zip, all .zip files in all subdirectories are excluded. | No |
| Include Files | String | A list of patterns, separated by newline characters, that describe the files to synchronize. The default, \*\*/\*, includes all files. | Yes |
| Overwrite | Boolean | Select to overwrite target files even if they are newer than source files. | No |
| Preserve In Target Exclude Files | String | A list of patterns, separated by newline characters, that describe files to skip for preservation in the target directories. | No |
| Preserve In Target Include Files | String | A list of patterns, separated by newline characters, that describe files to include for preservation in the target directories. | No |
| Source Directory | String | The synchronization source directory. | Yes |

### Untar Tarball

Extract a .tar file.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Extract directory | String | The directory to extract the .tar file to. | No |
| Overwrite files | Boolean | If selected, files are overwritten even if they are newer than files in the .tar file. | No |
| Tarball | String | The .tar file to extract. Use wildcards that are supported by Ant pattern matching to extract multiple .tar files. For example, if you specify json-\*.tar, both json-c-0.10.tar and json-c-0.20.tar are extracted. | Yes |
| Tarball | Enumeration:
* none
* gzip
* bzip2
| Select the compression algorithm for the .tar file. | No |

### Unzip

Extract a .zip file.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| .zip files | String | A list of patterns, separated by commas or spaces, that describe the .zip files to extract. | Yes |
| Exclude Files | String | A list of patterns, separated by commas or spaces, that describe the files in the archive to skip. | No |
| Extract directory | String | The directory to extract the .zip file to. | No |
| Include Files | String | A list of patterns, separated by commas or spaces, that describe the files in the archive to extract. | Yes |
| Overwrite files | Boolean | If selected, files are overwritten even if they are newer than files in the .zip file. | No |

### Update INI File

Update a file in the Microsoft Windows INI format. This step supports property sections.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Add Section Comments | String | Specify a list of comments, separated by newline characters, to add to sections. For example, specify section1=newComment to add newComment in a comment line above the section1 section. | No |
| File Name | String | The name of the file to update. | Yes |
| Remove properties | String | A list of properties to remove, separated by newline characters. To remove properties in subsections, add the full path of the parent sections to the property name, using a backslash (\) as a separator. For example, specify section1\section2\propertyName to remove the propertyName property in the section2 subsection of the section1 section. | No |
| Update properties | String | A list of name-value pairs to update, separated by newline characters. Use the format section\name=value. Comments that precede a property line are added to the property. Comment lines begin with a semicolon (;) or number sign (#). To update properties in subsections, add the full path of the parent sections to the property name, using a backslash (\) as a separator. For example, specify section1\section2\propertyName=value to update the propertyName property in the section2 subsection of the section1 section. | No |
| Use # character for comments | Boolean | Select to use the number sign (#) to indicate a comment. Clear to use the semicolon (;) to indicate a comment. | No |

### Update Property File

Add, remove, or update properties in a properties file.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Add/Update properties | String | A list of name-value pairs, separated by newline characters. This field takes precedence over Additional properties. Use the format property\_name=property\_value. | No |
| Additional properties | String | A list of additional properties, separated by commas. For example, specify ``${p:environment/allProperties}`` to add all environment properties as name-value pairs to the list of properties to update. | No |
| Additional properties prefix | String | Specify a prefix to use to filter the properties specified in Additional properties. The prefix is removed from the property name to form the property that is added to the property file. | No |
| Directory Offset | String | The directory relative to the current working directory that contains the files to operate on. | No |
| File Excludes | String | A list of patterns, separated by newline characters, that describe the property files to skip. | No |
| File Includes | String | A list of patterns, separated by newline characters, that describe the property files to edit. | Yes |
| Remove properties | String | A list of names of properties to remove, separated by newline characters. | No |

### Update XML File with XPath

Update XML files using XPath to locate items to edit.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Destination Directory Offset | String | The directory relative to the current working directory where the edited XML files will be stored. | No |
| Fail if no match found | Boolean | Select to configure the step to fail if any of the XPath expressions do not return a match. | No |
| File Excludes | String | A list of patterns, separated by newline characters, the describe the files to skip. | No |
| File Includes | String | A list of patterns, separated by newline characters, that describe the files to modify. | Yes |
| Insert XML | String | A list of XPath expression-content pairs, separated by newline characters. Use the format expression->content. For example, specify /root/foo->&<bar/&> to insert an empty bar element under all foo elements in the root element. | No |
| Remove | String | A list of XPath expressions, separated by newline characters, that specify elements to remove. For example, specify /root/foo to remove all foo elements under the root element. | No |
| Replace with text | String | A list of XPath expression-replacement pairs, separated by newline characters. Use the format expression->replacement. For example, specify /root/foo/@bar->my\_bar to replace the bar attribute value for all foo elements under the root element with my\_bar. The step does nothing if the specified expression does not exist in the source files. | No |
| Set Attributes | String | A list of XPath expression-content pairs, separated by newline characters. Use the format expression->content. For example, specify /root/foo/@bar->my\_bar to replace the bar attribute value for all foo elements under the root element with my\_bar. The XPath expression must end with the /@name of the attribute to insert or update. | No |
| Source Directory Offset | String | The directory relative to the current working directory that contains the files to operate on. | No |



|Back to ...||Latest Version|File Utils for IBM UrbanCode Build |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[44.754293](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/FileUtils/FileUtils-44.754293.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
