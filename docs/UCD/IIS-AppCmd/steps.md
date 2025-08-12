
# Microsoft IIS AppCmd - Process Steps


* [AppCmd](#appcmd)
* [Create Application](#create_application)
* [Create Application Pool](#create_application_pool)
* [Create Site](#create_site)
* [Create Virtual Directory](#create_virtual_directory)
* [Create or update application from XML](#create_or_update_application_from_xml)
* [Delete Application](#delete_application)
* [Delete Application Pool](#delete_application_pool)
* [Delete Site](#delete_site)
* [Delete Virtual Directory](#delete_virtual_directory)
* [Recycle Application Pool](#recycle_application_pool)
* [Start Application Pool](#start_application_pool)
* [Start Site](#start_site)
* [Stop Application Pool](#stop_application_pool)
* [Stop Site](#stop_site)


## AppCmd

Run an arbitrary appcmd command.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Arguments | String | A newline separted list of arguments to be added to the appcmd call. e.g. /arg1:val1\n/arg2:val2\n/arg3:val3 | No |
| Command | String | The command to be run using appcmd. | Yes |
| Command Path | String | The directory location of the AppCmd command-line executable: e.g., C:\Windows\system32\inetsrv\ | No |
| Identifier | String | The identifier for the object if required. | No |
| Object Type | String | The object type that the command should be run against. | Yes |
| Timeout | Integer | Timeout, in seconds, at which the step will fail if action is not yet complete. | No |

## Create Application

Create an Application in IIS.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Arguments | String | A newline separted list of arguments to be added to the appcmd call. e.g. /arg1:val1\n/arg2:val2\n/arg3:val3 | No |
| Command Path | String | The directory location of the AppCmd command-line executable: e.g., C:\Windows\system32\inetsrv\ | No |
| Parent Site | String | The Parent site the application should be created under, e.g. Default Web Site. | Yes |
| Virtual Path | String | The virtual path that this application should be created under. | Yes |
| Timeout | Integer | Timeout, in seconds, at which the step will fail if action is not yet complete. | No |

## Create Application Pool

Create an Application Pool in IIS.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Pool Name | String | The name of the Application Pool to create. | Yes |
| Arguments | String | A newline separted list of arguments to be added to the appcmd call. e.g. /arg1:val1\n/arg2:val2\n/arg3:val3 | No |
| Command Path | String | The directory location of the AppCmd command-line executable: e.g., C:\Windows\system32\inetsrv\ | No |
| Timeout | Integer | Timeout, in seconds, at which the step will fail if action is not yet complete. | No |

## Create Site

Create a new Web Site in IIS.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Arguments | String | A newline separted list of arguments to be added to the appcmd call. e.g. /arg1:val1\n/arg2:val2\n/arg3:val3 | No |
| Command Path | String | The directory location of the AppCmd command-line executable: e.g., C:\Windows\system32\inetsrv\ | No |
| Site Name | String | The name of the Web Site to create, e.g. DefaultWebSite. | Yes |
| Timeout | Integer | Timeout, in seconds, at which the step will fail if action is not yet complete. | No |

## Create Virtual Directory

Create a new Virtual Directory in IIS.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Arguments | String | A newline separted list of arguments to be added to the appcmd call. e.g. /arg1:val1\n/arg2:val2\n/arg3:val3 | No |
| Command Path | String | The directory location of the AppCmd command-line executable: e.g., C:\Windows\system32\inetsrv\ | No |
| Parent Application | String | Application identifier under which this virtual directory is created. | Yes |
| Path | String | The physical path of the virtual directory. | No |
| Virtual Path | String | The virtual path of the virtual directory. | Yes |
| Timeout | Integer | Timeout, in seconds, at which the step will fail if action is not yet complete. | No |

## Create or update application from XML

Create or update existing application using user supplied XML


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Name | String | The application name. | Yes |
| Application XML | String | Enter the application configuration XML here or provide a path to a file below. | No |
| Application XML File | String | Enter a path to a file that contains the application configuration XML or provide the contents above. | No |
| Command Path | String | The directory location of the AppCmd command-line executable: e.g., C:\Windows\system32\inetsrv\ | No |
| Timeout | Integer | Timeout, in seconds, at which the step will fail if action is not yet complete. | No |

## Delete Application

Delete an Application from IIS.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Arguments | String | A newline separted list of arguments to be added to the appcmd call. e.g. /arg1:val1\n/arg2:val2\n/arg3:val3 | No |
| Command Path | String | The directory location of the AppCmd command-line executable: e.g., C:\Windows\system32\inetsrv\ | No |
| ID | String | The Application path or URL of the application to delete, e.g. Default Web Site/Application. | Yes |
| Timeout | Integer | Timeout, in seconds, at which the step will fail if action is not yet complete. | No |

## Delete Application Pool

Delete an Application Pool from IIS.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Pool Name | String | The name of the Application Pool to delete. | Yes |
| Arguments | String | A newline separted list of arguments to be added to the appcmd call. e.g. /arg1:val1\n/arg2:val2\n/arg3:val3 | No |
| Command Path | String | The directory location of the AppCmd command-line executable: e.g., C:\Windows\system32\inetsrv\ | No |
| Timeout | Integer | Timeout, in seconds, at which the step will fail if action is not yet complete. | No |

## Delete Site

Delete a Web Site from IIS.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Arguments | String | A newline separted list of arguments to be added to the appcmd call. e.g. /arg1:val1\n/arg2:val2\n/arg3:val3 | No |
| Command Path | String | The directory location of the AppCmd command-line executable: e.g., C:\Windows\system32\inetsrv\ | No |
| Site Name | String | The name of the Web Site to delete, e.g. DefaultWebSite. | Yes |
| Timeout | Integer | Timeout, in seconds, at which the step will fail if action is not yet complete. | No |

## Delete Virtual Directory

Delete a Virtual Directory from IIS.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Arguments | String | A newline separted list of arguments to be added to the appcmd call. e.g. /arg1:val1\n/arg2:val2\n/arg3:val3 | No |
| Command Path | String | The directory location of the AppCmd command-line executable: e.g., C:\Windows\system32\inetsrv\ | No |
| Virtual Directory Path | String | Virtual Directory Path or URL to be deleted, e.g. Default Web Site/subdir. | Yes |
| Timeout | Integer | Timeout, in seconds, at which the step will fail if action is not yet complete. | No |

## Recycle Application Pool

Recycle an Application Pool in IIS.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Pool Name | String | The name of the Application Pool to recycle. | Yes |
| Arguments | String | A newline separted list of arguments to be added to the appcmd call. e.g. /arg1:val1\n/arg2:val2\n/arg3:val3 | No |
| Command Path | String | The directory location of the AppCmd command-line executable: e.g., C:\Windows\system32\inetsrv\ | No |
| Timeout | Integer | Timeout, in seconds, at which the step will fail if action is not yet complete. | No |

## Start Application Pool

Start an Application Pool in IIS.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Pool Name | String | The name of the Application Pool to start. | Yes |
| Arguments | String | A newline separted list of arguments to be added to the appcmd call. e.g. /arg1:val1\n/arg2:val2\n/arg3:val3 | No |
| Command Path | String | The directory location of the AppCmd command-line executable: e.g., C:\Windows\system32\inetsrv\ | No |
| Timeout | Integer | Timeout, in seconds, at which the step will fail if action is not yet complete. | No |

## Start Site

Start a Web Site in IIS.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Arguments | String | A newline separted list of arguments to be added to the appcmd call. e.g. /arg1:val1\n/arg2:val2\n/arg3:val3 | No |
| Command Path | String | The directory location of the AppCmd command-line executable: e.g., C:\Windows\system32\inetsrv\ | No |
| Site Name | String | The name of the Web Site to delete, e.g. DefaultWebSite. | Yes |
| Timeout | Integer | Timeout, in seconds, at which the step will fail if action is not yet complete. | No |

## Stop Application Pool

Stop an Application Pool in IIS.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Pool Name | String | The name of the Application Pool to stop. | Yes |
| Arguments | String | A newline separted list of arguments to be added to the appcmd call. e.g. /arg1:val1\n/arg2:val2\n/arg3:val3 | No |
| Command Path | String | The directory location of the AppCmd command-line executable: e.g., C:\Windows\system32\inetsrv\ | No |
| Timeout | Integer | Timeout, in seconds, at which the step will fail if action is not yet complete. | No |

## Stop Site

Stop a Web Site in IIS.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Arguments | String | A newline separted list of arguments to be added to the appcmd call. e.g. /arg1:val1\n/arg2:val2\n/arg3:val3 | No |
| Command Path | String | The directory location of the AppCmd command-line executable: e.g., C:\Windows\system32\inetsrv\ | No |
| Site Name | String | The name of the Web Site to delete, e.g. DefaultWebSite. | Yes |
| Timeout | Integer | Timeout, in seconds, at which the step will fail if action is not yet complete. | No |


