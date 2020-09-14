locals {
  lambda_memory = 128
  full        = "${var.vertical}-${var.stack}-${var.project}"

  tags = {
    Vertical    = var.vertical
    Stack       = var.stack
    Project     = var.project
    Name        = local.full
    ManagedBy   = "terraform"
  }
}
