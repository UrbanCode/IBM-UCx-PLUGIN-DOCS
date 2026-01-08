
# Subversion - Process Steps

## Import Version

Description

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Repository URL | textBox | The location of the Subversion repository. | Yes |
| Watch for tags | checkBox | When selected, tags are used as the basis for new component versions.  			    	Use tags as the basis for new component versions. | No |
| Includes | textAreaBox | A list of name patterns used to match files to include when importing artifacts.  				List each pattern on a separate line. You can use the single (*) and double asterisks (**)  				wildcards to broaden your pattern. The double asterisks (**) indicates every directory and the  				single-asterisk (*) wildcard indicates every file. | No |
| Excludes | textAreaBox | A list of name patterns used to match files to exclude when importing artifacts.  				List each pattern on a separate line. You can use the single (*) and double asterisks (**)  				wildcards to broaden your pattern. The double asterisks (**) indicates every directory and  				the single-asterisk (*) wildcard indicates every file. | No |
| User | textBox | The user name used to authenticate with the Subversion repository. | No |
| Password | secureBox | The password associated with the user name to authenticate with the Subversion repository. | No |
| SVN Path | textBox | The path to the svn executable file on the UrbanCode Deploy server. If you added the  				executable file to the system PATH variable, you can specify the name of the executable file,  				such as svn. If you have not added the executable file to the system PATH variable, specify  				the complete path, such as /usr/bin/svn. | Yes |
| Preserve Execute Permissions | checkBox | For Linux and UNIX operating systems, retain the execute permissions  							of each file. | No |
| Extensions of files to Convert | textBox | A list of file extensions to convert into another character set. Separate each file  				  extenstion with a comma. Specify this property if you have text-type files that must be  				  converted into another character set. Matching file types are converted into the default  				  character set of the system where the agent is located. | No |
| Proxy Hostname | textBox | The hostname of the proxy server if you are connecting to a Subversion repository through a proxy. For example: 8.8.8.8. | No |
| Proxy Port Number | textBox | The port number used by the proxy server for client connections. For example: 80. | No |
| Proxy Username | textBox | The user name use to authenticate with the proxy server if authentication is required. | No |
| Proxy Password | secureBox | The password associated with the user name to authenticate with the proxy server if authentication is required. | No |
| Specific version/tag | textBox |  | No |

