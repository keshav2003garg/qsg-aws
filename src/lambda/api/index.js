import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs';

export async function handler(event) {
    const AWS_REGION = process.env.AWS_REGION;
    const SQS_QUEUE_URL = process.env.SQS_QUEUE_URL;
    const sqs = new SQSClient({ region: AWS_REGION });
    const message = {
        videoURL: event.body.videoURL,
    };
    const command = new SendMessageCommand({
        QueueUrl: SQS_QUEUE_URL,
        MessageBody: JSON.stringify(message),
    });
    const response = await sqs.send(command);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Video sent for processing',
            messageId: response.MessageId,
        }),
    };
}
