import { SQSClient, DeleteMessageBatchCommand } from '@aws-sdk/client-sqs';

export async function handler(event) {
    const sqs = new SQSClient({ region: process.env.AWS_REGION });
    try {
        const messages = event.Records.map((record) => {
            return {
                Id: record.messageId,
                ReceiptHandle: record.receiptHandle,
            };
        });

        if (messages.length > 0) {
            event.Records.forEach((record) => {
                console.log('SQS Message Body:', record.body);
            });
            const deleteParams = {
                QueueUrl: event.Records[0].eventSourceARN,
                Entries: messages,
            };
            const command = new DeleteMessageBatchCommand(deleteParams);
            await sqs.send(command);
        } else {
            console.log('No messages to process.');
        }

        return 'Success';
    } catch (error) {
        console.error('Error processing SQS messages:', error);
        throw error;
    }
}
