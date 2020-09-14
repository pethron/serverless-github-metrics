variable "aws_region" {
  type    = string
  default = "eu-west-1"
}

variable "aws_profile" {
  type    = string
  default = "default"
}

variable "vertical" { }
variable "stack" { }
variable "project" { }

variable "owner" { }
variable "repo" {}
variable "auth" { }

data "aws_region" "current" {}
data "aws_caller_identity" "current" {}
