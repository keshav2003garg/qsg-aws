import {
    CloudFormationClient,
    CreateStackCommand,
} from '@aws-sdk/client-cloudformation';
import { cloudFormationTemplate } from './cft';
import waitingCFStackToComplete from './waitingStack';

const createCloudFormationStack = async (
    credentials: { accessKeyId: string; secretAccessKey: string },
    region: string,
) => {
    const client = new CloudFormationClient({
        region: region,
        credentials: {
            accessKeyId: credentials.accessKeyId,
            secretAccessKey: credentials.secretAccessKey,
        },
    });
    const command = new CreateStackCommand({
        StackName: 'qsg',
        TemplateBody: JSON.stringify(cloudFormationTemplate),
        Capabilities: [
            'CAPABILITY_AUTO_EXPAND',
            'CAPABILITY_IAM',
            'CAPABILITY_NAMED_IAM',
        ],
    });
    const res = await client.send(command);
    await waitingCFStackToComplete(res.StackId);
};

export { createCloudFormationStack };
