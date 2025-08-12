
# IBM DevOps Deploy Configuration Management - Troubleshooting

When using the Batch Import Properties step, you must include the component name in the properties file, as shown in the following example code:


```
ComponentName=Component A
name=myName
state=myState

```

If you do not include the component name in the properties file, the following error message is displayed:


```
Error Updating Properties!
java.io.IOException: 404 Not Found
No component for null

```

