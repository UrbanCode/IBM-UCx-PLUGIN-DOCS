# Text Utility - Process Steps

* [Search and Replace](#search_and_replace)
* [Search and Replace with Regex](#search_and_replace_with_regex)
* [Append text to a file](#append_text_to_a_file)
* [Check file contains string](#check_file_contains_string)
* [Convert file from XML to JSON](#convert_file_from_xml_to_json)
## Search and Replace

Search for a string, replace it with another and write to the file.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| File path | textBox | The full path to the text file to be edited. | Yes |
| Search string | textAreaBox | The string that the plugin will search for. | Yes |
| Replacement string | textAreaBox | The string that the plugin will replace all occurances of the search string with. | Yes |

## Search and Replace with Regex

Search for a string with regular expressions, replace it with another and write to the file.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| File path | textBox | The full path to the text file to be edited. | Yes |
| Search string | textAreaBox | The string that the plugin will search for. | Yes |
| Replacement string | textAreaBox | The string that the plugin will replace all occurances of the search string with. | Yes |

## Append text to a file

Appends a specific string to the end of a file

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| File path | textBox | The full path to the text file to be edited. | Yes |
| Text | textAreaBox | The text to be appended to the file. | Yes |
| Start on new line? | checkBox | If true, add a new line before the text string. | No |

## Check file contains string

Check if a file contains the specified string

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| File path | textBox | The full path to the text file to be searched. | Yes |
| Search String | textAreaBox | The string that the process will look for. | Yes |

## Convert file from XML to JSON

Convert file from XML format to JSON format

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Input XML File path | textBox | The full path to the XML file to be converted | Yes |
| Output JSON File path | textBox | The full path for the new JSON formatted file | Yes |

