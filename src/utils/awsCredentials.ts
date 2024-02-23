import fs from 'fs';
import os from 'os';

const getAWSCredentials = () => {
    const awsCredentials = `${os.homedir()}\\.aws\\credentials`;
    if (!fs.existsSync(awsCredentials)) {
        console.error('AWS credentials not found');
        process.exit(0);
    }

    const credentials = fs.readFileSync(awsCredentials, 'utf8');
    const stringCredentials = credentials.toString();
    const accessKeyIdMatch = stringCredentials.match(
        /aws_access_key_id = (.*)/,
    );
    const secretAccessKeyMatch = stringCredentials.match(
        /aws_secret_access_key = (.*)/,
    );

    const accessKeyId = accessKeyIdMatch ? accessKeyIdMatch[1] : '';
    const secretAccessKey = secretAccessKeyMatch ? secretAccessKeyMatch[1] : '';

    return {
        accessKeyId,
        secretAccessKey,
    };
};

export default getAWSCredentials;
