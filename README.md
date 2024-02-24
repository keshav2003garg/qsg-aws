# QSG-AWS NPX Script

The npx script utilizes Amazon Web Services (AWS) infrastructure to efficiently process videos by converting them into various quality formats and incorporating subtitles. It simplifies the process of deployment of essential AWS resources onto your account. By leveraging AWS CloudFormation, it automates the creation of resources like API Gateway, Lambda functions, SQS, ECS, and S3. This means that with just one command, you can deploy the entire infrastructure on your AWS account. This user-friendly approach streamlines the setup process, making it easy for users to implement a cost-optimized and scalable video processing solution without the hassle of manual resource creation.

![alt text](https://github.com/keshav2003garg/qsg-aws/tree/main/example/aws-infra.png?raw=true)

## Requirements:

1. **Node.js and NPM:**

    - Ensure Node.js and NPM are installed on your machine.
    - To install, visit [Node.js](https://nodejs.org/).

2. **AWS CLI:**

    - Configure AWS CLI on your machine.
    - Follow the steps in the [AWS CLI Configuration Guide](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).

3. **AWS Account:**
    - Ensure you have an active AWS account.
    - Make sure your AWS access key and secret key are configured on your local system.

## Usage:

1. **Run the Script:**
    - Run the following command to execute the `qsg-aws` script:
        ```bash
        npx qsg-aws
        ```
2. **Follow Prompts:**

    - The script will prompt you with questions regarding deploying infrastructure to your AWS account.

3. **Deployment Confirmation:**

    - If you choose to deploy, the script will initiate the deployment of AWS infrastructure for video processing.

4. **Wait for Completion:**

    - The script will display a processing animation.
    - Wait for the animation to complete, indicating the successful deployment of the AWS infrastructure.

5. **Access API Gateway:**

    - Once the deployment is complete, the script will provide you with the invocation URL for the API Gateway.

6. **Get API Key:**

    - You have to access given AWS Management Console link to view and manage API keys for the deployed API Gateway.

7. **Explore the Deployed Infrastructure:**
    - Visit the AWS Management Console to explore and manage the CloudFormation stacks and other AWS resources created by the script.

## Dependencies

-   [@aws-sdk/client-cloudformation](https://www.npmjs.com/package/@aws-sdk/client-cloudformation): ^3.515.0
-   [@inquirer/prompts](https://www.npmjs.com/package/@inquirer/prompts): ^4.1.0

## Contributing

We welcome contributions! Feel free to contribute by [raising issues](https://github.com/keshav2003garg/quality-subs-generator/issues) or submitting pull requests. Please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please reach out to [Keshav Garg](https://github.com/keshav2003garg). Your input is valuable!
