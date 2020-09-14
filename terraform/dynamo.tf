resource "aws_dynamodb_table" "dynamodb_table" {
  name           = "${local.full}-table"
  billing_mode   = "PROVISIONED"
  read_capacity  = 5
  write_capacity = 5
  hash_key       = "date"

  attribute {
    name = "date"
    type = "S"
  }

  tags = local.tags
}
