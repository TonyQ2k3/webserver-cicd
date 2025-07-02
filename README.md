# Simple NodeJS App

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
3. Payload URL: "https://ngrok-url/github-webhook"
4. Content type: "application/json"

## Multi-branch pipeline (recommended)
This pipeline run when there's a commit pushed or merged to any branch, or when a PR is created.

### Step 1: Install plugins
Install the Multibranch Scan Webhook Trigger plugin.

### Step 2: Create Github credential
1. Create a new Jenkins Credential
2. Choose username and password
3. Username: Github user; Password: Github Access Token

### Step 3: Create a job
1. Branch sources: Github
2. Behaviors: 
    + Discover branches: All branches
    + Discover pull requests from origin: The current PR revision
3. Scan repository triggers:
    + Scan by webhook (from Multibranch Scan Webhook Trigger)
    + Trigger token: anything
4. Save

### Step 4: Create a Github Webhook
1. Add a webhook and choose `pull_request` and `push`
2. Payload URL: <Jenkins_URL>/multibranch-webhook-trigger/invoke?token=<token>
  