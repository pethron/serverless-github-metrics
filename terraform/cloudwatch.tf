resource "aws_cloudwatch_event_rule" "every_day" {
  name                = "${local.full}-event-rule"
  description         = "Fires every day"
  schedule_expression = "cron(0 0 * * ? *)"
}

resource "aws_cloudwatch_event_target" "check_foo_every_five_minutes" {
  rule = aws_cloudwatch_event_rule.every_day.name
  target_id = "${local.full}-id"
  arn = aws_lambda_function.lambda.arn
}

resource "aws_cloudwatch_log_group" "log_group" {
  name              = "/aws/lambda/${aws_lambda_function.lambda.function_name}-log-group"
  retention_in_days = 14
}
