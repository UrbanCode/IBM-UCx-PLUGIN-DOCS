
# IBM Bluemix Auto-Scaling - Steps

## Process steps in the IBM BlueMix Auto-Scaling plug-in

* [Add Auto-Scale Policy to Application](#add_auto-scale_policy_to_application)


## Add Auto-Scale Policy to Application

Attach an Auto-Scale policy to a Bluemix application.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application ID or Name | String | ID or Name of the application that you wish to add the policy to. | Yes |
| Policy | String | Enter full JSON policy or absolute path to the policy file. | Yes |
| Scaling API URL | String | The URL of the target BlueMix Scaling API system, such as https://ScalingAPI.ng.bluemix.net. This is found under the environment variables of the applications Auto-Scaling service. | Yes |



