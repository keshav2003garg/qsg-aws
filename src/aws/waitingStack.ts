import { exec } from 'child_process';

const waitingCFStackToComplete = async (StackId: string) => {
    return new Promise((resolve, reject) => {
        const child = exec(
            `aws cloudformation wait stack-create-complete --stack-name "${StackId}"`,
        );
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
                resolve(stdout.trim());
            } else {
                reject(new Error(stderr.trim()));
            }
        });
    });
};

export default waitingCFStackToComplete;
