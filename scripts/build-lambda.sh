#!/usr/bin/env bash
set -x
set -e

ROOT_DIR="$(pwd)"

OUTPUT_DIR=$ROOT_DIR/dist

LAMBDA_DIR=$OUTPUT_DIR/lambda

mkdir -p "$LAMBDA_DIR"

cd "$LAMBDA_DIR"

zip -r lambda.zip ./*

