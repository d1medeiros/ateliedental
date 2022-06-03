#!/bin/sh

BUCKET_NAME="ateliedental-test"

aws s3 rm s3://$BUCKET_NAME --recursive

export TF_VAR_bucket_name="${BUCKET_NAME}"
terraform destroy -auto-approve
