import { confirm } from '@inquirer/prompts';

import getAWSCredentials from './src/utils/awsCredentials';
import getAWSRegion from './src/utils/awsRegion';
import printProcessingAnimation from './src/utils/processing';
import { createCloudFormationStack } from './src/aws/createCF';
import getInvokeURL from './src/aws/getInvokeURL';

async function main() {
    try {
        const region = getAWSRegion();
        const credentials = getAWSCredentials();
        const answer = await confirm({
            message:
                'Do you really want to deploy infrastructure on your aws account? \n  Your aws credentials will be automatically picked from your aws config file. \n  Make sure you have the right permissions to deploy infrastructure. \n  This will create a new stack called qsg. \n  This will take a few minutes to complete. \n  Are you sure you want to continue? \n  Press Enter to continue or Ctrl+C to cancel.',
        });
        if (answer) {
            const animation = printProcessingAnimation();
            await createCloudFormationStack(credentials, region);
            clearInterval(animation);
            const api = await getInvokeURL();
            const apiId = JSON.parse(api).items.find(
                (item: { name: string }) =>
                    item.name === 'apiGateway From Stack qsg',
            ).id;
            console.log(
                'Your infrastructure has been deployed successfully.',
                '\n \nNow you can test the API using the following URL.',
                '\nAPI Gateway URL: ',
                `https://${apiId}.execute-api.${region}.amazonaws.com/v1/process-video`,
                '\n\nYou have to use POST method to use the API. There is also a API Key required to use this API',
                `\nYou can find your API Key in the API Gateway console. ConsoleURL: https://${region}.console.aws.amazon.com/apigateway/main/api-keys?region=${region}`,
                '\n\nYou can find the required resources to use this in the given url: https://github.com/keshav2003garg/qsg-aws/tree/main/example',
            );
        } else {
            console.log('\nInfrastructure deployment aborted.');
        }
    } catch (error) {
        if (
            (error as Error).message ===
            'User force closed the prompt with 0 null'
        ) {
            console.log('\nInfrastructure deployment aborted.');
            process.exit(0);
        } else {
            console.error(
                '\n \nInfrastructure deployment failed.',
                `Reason: ${(error as Error).message}`,
            );
        }
        process.exit(0);
    }
}

main();
