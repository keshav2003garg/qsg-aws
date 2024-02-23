import { exec } from 'child_process';

const getInvokeURL = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
        const child = exec(`aws apigateway get-rest-apis`);
        let stdout = '';
        let stderr = '';
        child.stdout.on('data', (data: string) => {
            stdout += data;
        });
        child.stderr.on('data', (data: string) => {
            stderr += data;
        });
        child.on('close', (code: number) => {
            if (code === 0) {
                resolve(stdout);
            } else {
                reject(new Error(stderr.trim()));
            }
        });
    });
};

export default getInvokeURL;
