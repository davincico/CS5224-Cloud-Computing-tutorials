# AWS EMR Apache PySpark Tutorial
Guide:
Main: https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-gs.html
https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-input.html

Sample dataset
https://docs.aws.amazon.com/emr/latest/ManagementGuide/samples/food_establishment_data.zip
```
name,inspection_result,inspection_closed_business,violation_type,violation_points
100 LB CLAM,Unsatisfactory,FALSE,BLUE,5
100 PERCENT NUTRICION,Unsatisfactory,FALSE,BLUE,5
7-ELEVEN #2361-39423A,Complete,FALSE,,0
```

Steps:
1. Upload ```health_violations.py``` into S3
2. Upload csv to S3 ```aws-emr-demo-spark```
3. Change cluster logs to your S3 with /logs appended
4. SSH key to cluster ```emr1.pem```