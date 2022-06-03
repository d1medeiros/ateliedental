#!/bin/sh

BUCKET_NAME="ateliedentalmm"

aws s3 rm s3://$BUCKET_NAME --recursive

export TF_VAR_bucket_name="${BUCKET_NAME}"
terraform destroy -auto-approve
