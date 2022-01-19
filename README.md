# Radfx
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Purpose

The goal of this project is to create a management system for scheduling particle accelerator time.


## Documentation
[link_coming]


## Required Tools
- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [A github account](https://github.com/)


## Recomended IDE
- [VSCode](https://code.visualstudio.com/)


## Detailed steps
### Set up your local development environment
1. Create a Github Account
2. Install Node.js
3. Install Git 
4. Install VSCode


### Get the code running on your local development environment
1. Fork the main Github Repo for the project
    1. [instructions](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
2. Clone your fork in VSCode using one of the two following methods
    1. [instructions using vscode gui](https://docs.microsoft.com/en-us/visualstudio/get-started/tutorial-open-project-from-repo?view=vs-2019)
    2. terminal commands
```bash
git clone insert-your-forked-repo-location-here
cd radfx
npm install --legacy-peer-deps
npm run dev
```
3. Install your dependancies using a terminal command
```bash
npm install --legacy-peer-deps
npm run dev
```
4. Start your localhost development server using a terminal
```bash
npm run dev
```
5. Open a browser and view the site for development at [http:localhost:3000](http:localhost:3000)
"You can instantly see changes that you make to the code in your browser"

### Configure user info for git if this is your first time using git on your computer
configure git by using the following commands in a terminal. replace "John Doe" wiath your name and johndoe@example.com with your email"
```bash
git config --global user.name "John Doe"\
git config --global user.email johndoe@example.com
```


### configure the upstream for your pulls for a newly cloned repository
In a terminal, cd to the root folder for the project and configure the upstream for your pulls.
```bash
git remote add upstream https://github.com/JesusPatino-stack/radfx.git
git fetch upstream
git checkout main
git merge upstream/main
git pull upstream main
```
 
### learn more about git
[game](https://learngitbranching.js.org/)  


### learn more about git in vscode
[https://code.visualstudio.com/docs/editor/github](https://code.visualstudio.com/docs/editor/github)


## learn more about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

##[for Any further questions](https://www.google.com/)