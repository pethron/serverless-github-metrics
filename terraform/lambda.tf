data "archive_file" "function_archive" {
  type        = "zip"
  source_dir  = "${path.module}/../dist/lambda"
  output_path = "${path.module}/../dist/lambda/lambda.zip"
}

resource "aws_lambda_layer_version" "layer" {
  filename            = "${path.module}/../dist/layers/layers.zip"
  layer_name          = "${local.full}-layer"
  compatible_runtimes = ["nodejs12.x"]
  source_code_hash    = filebase64sha256("${path.module}/../dist/layers/layers.zip")
}

resource "aws_lambda_function" "lambda" {
  filename      = data.archive_file.function_archive.output_path
  function_name = "${local.full}-lambda"
  role          = aws_iam_role.lambda_role.arn
  handler       = "index.handler"

  # Lambda Runtimes can be found here: https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html
  layers = [aws_lambda_layer_version.layer.arn]
  runtime     = "nodejs12.x"
  timeout     = "30"
  memory_size = local.lambda_memory

  environment {
    variables = {
      OWNER = var.owner
      REPO = var.repo
      AUTH = var.auth
      TABLE = aws_dynamodb_table.dynamodb_table.name
    }
  }
}

resource "aws_lambda_permission" "allow_cloudwatch_to_call_lambda" {
  statement_id = "AllowExecutionFromCloudWatch"
  action = "lambda:InvokeFunction"
  function_name = aws_lambda_function.lambda.function_name
  principal = "events.amazonaws.com"
  source_arn = aws_cloudwatch_event_rule.every_day.arn
}
