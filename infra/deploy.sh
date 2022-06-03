#!/bin/sh

BUCKET_NAME="ateliedental-test"
export TF_VAR_bucket_name="${BUCKET_NAME}"
terraform apply -auto-approve


cd "../app"
APP_PATH=$(pwd)
echo "entrando em ${APP_PATH}"

echo "preparando front"
npm run build
aws s3 cp build s3://$BUCKET_NAME --recursive
