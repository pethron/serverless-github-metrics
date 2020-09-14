import { DynamoDB } from 'aws-sdk';
import { Metrics } from "./scrape/dto";

export async function write(table: string, metrics: Metrics): Promise<any> {
    const today = new Date()
    const calendar = { date: today.toISOString().substring(0,10) }

    const item = { ...calendar, ...metrics.globals }
    const dynamo = new DynamoDB.DocumentClient({apiVersion: '2012-08-10', region: 'eu-west-1'});
    return dynamo.put({
        TableName: table,
        Item: item
    }).promise();
}
