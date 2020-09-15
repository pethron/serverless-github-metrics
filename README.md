# Github Serverless Metrics

> Keep track of how your github repository stats are performing and build its history.

> Serverless solution written in TypeScript; deployed on AWS Lambda and DynamoDB with Terraform.

This project creates:
 - an AWS Lambda function that runs every day at midnight
 - an AWS DynamoDB table to keep track of the records for each day

### Note :warning:
All variables are passed through environment variables in the .env file
