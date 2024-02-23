import fs from 'fs';
import os from 'os';

const getAWSRegion = () => {
    const awsConfig = `${os.homedir()}\\.aws\\config`;
    if (!fs.existsSync(awsConfig)) {
        console.error('AWS config not found');
        process.exit(0);
    }

    const config = fs.readFileSync(awsConfig, 'utf8');
    const stringConfig = config.toString();
    const regionMatch = stringConfig.match(/region = (.*)/);

    const region = regionMatch ? regionMatch[1] : '';

    return region;
};

export default getAWSRegion;
