
# Groovy - Usage


You can use the Groovy plug-in to run Groovy scripts as IBM DevOps Deploy process steps. See the [Groovy website](http://www.groovy-lang.org/) for information about creating a Groovy script.

* [Step palette](#palette)
* [Examples](#examples)


## **Step palette**

To access this plug-in in the palette, click **Scripting**.


## **Examples**

You can use this plug-in to create a simple or complex step. For example, the following script obtains the date and time, formats that data, and passes it into an output variable that is named **date**. The output variable can be use in a later process step.


```
import java.text.SimpleDateFormat
def today = new Date()
def formattedDate = new SimpleDateFormat("yyyy-MM-dd\_hh-mm-ss").format(today)
println "Setting output property 'date' to '$formattedDate'"
println "Access the time stamp in later steps using \``${p:NameOfThisStep/date}``"
outProps.put("date",formattedDate)

```

