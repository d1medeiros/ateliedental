

variable "region" {
  description = "AWS region"
  default     = "us-east-1"
  type        = string
}

variable "availability_zone" {
  type = string
  default = "us-east-1a"
}

variable "tag" {
  default = "ateliedental"
}

variable "bucket_name" {
  type = string
}

variable "domain" {
  default = "marcoateliedental.com"
}
