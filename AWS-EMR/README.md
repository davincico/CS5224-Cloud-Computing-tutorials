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

### Using the EMR Cluster
#### 1. AWS Console
1. Go to EMR cluster > steps > add steps
2. Choose Spark application + cluster mode
3. Application location select your script in the S3
4. Spark-submit options EMPTY
5. Arguments field:
   1. ```--data_source s3://amzn-s3-demo-bucket/food_establishment_data.csv``` 
   2. ```--output_uri s3://amzn-s3-demo-bucket/myOutputFolder```

After add step, wait for status to change from pending to running to completed (about 1 min)

Check the S3 Bucket for output folder:
- _SUCCESS file (ignore)
- results csv

#### 2. AWS CLI
```python
aws sts get-caller-identity

aws emr list-clusters --cluster-states WAITING	

aws emr add-steps \
--cluster-id <myClusterId> \
--steps Type=Spark,Name="<My Spark Application>",ActionOnFailure=CONTINUE,Args=[<s3://amzn-s3-demo-bucket/health_violations.py>,--data_source,<s3://amzn-s3-demo-bucket/food_establishment_data.csv>,--output_uri,<s3://amzn-s3-demo-bucket/MyOutputFolder>]							
# Returns step ID

# Query step ID to see status "COMPLETE"
aws emr describe-step --cluster-id <myClusterId> --step-id <s-1XXXXXXXXXXA>							

```
Output of the spark step will be in the S3 bucket /output folder.