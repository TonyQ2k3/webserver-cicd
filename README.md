# API Gateway

## About
Handles comment management

## Installation
1. Install independencies with `npm install`

2. To run locally, run `npm start`

## CI/CD

### Step 1: Install plugins and tools
1. Go to `Manage Jenkins` > `Plugins `
2. Install the NodeJS plugin.
3. Navigate to `Manage Jenkins` > `Tools` > `NodeJS`.
4. Scroll down to `NodeJS` and click `Add NodeJS`.
5. Select verion 21.x.
6. Click Save.

### Step 2: Write the pipeline
1. Add the script in Jenkinsfile

### Step 3: Setup the job
1. In Triggers, select `GitHub hook trigger for GITScm polling`.
2. In Pipeline definition, choose `Pipeline script from SCM`.
3. Choose Git and enter repo URL, set branches to "*/*".

### Step 4: Setup webhook
1. Access GitHub repo
2. Go to `Settings` > `Webhooks`
3. Add "https://ngrok-url/github-web