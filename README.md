![main-image](https://wsrv.nl/?url=repository-images.githubusercontent.com/282042743/9c891880-fdc0-11ea-8ccc-f3cd9c00e5ae&w=600)

# Dkeeper 
## A decentralized note taking app on IC

Dfinity v0.17.0 and Reactjs v18.2.0

## Intro
This project follows Angella Yu web development course section 434-437. Seperate branch for each section is created.

## How to make it work?
1. Install Nodejs v16.0.0 or higher.
2. Follow [this link](https://internetcomputer.org/docs/current/tutorials/deploy_sample_app#step-1-install-the-internet-computer-ic-sdk) and install Internet computer SDK if you dont already have it.
1. Clone this repo to your machine
2. Cd into the folder and run `npm i` to install all packages.
5. Run `dfx deploy` to deploy canister and `npm start` to start react frontend. 

It will start a server at `http://localhost:8080`, proxying API requests to the replica at port 4943.

### Note on frontend environment variables

If you are hosting frontend code somewhere without using DFX, you may need to make one of the following adjustments to ensure your project does not fetch the root key in production:

- set `DFX_NETWORK` to `ic` if you are using Webpack
- use your own preferred method to replace `process.env.DFX_NETWORK` in the autogenerated declarations
  - Setting `canisters -> {asset_canister_id} -> declarations -> env_override to a string` in `dfx.json` will replace `process.env.DFX_NETWORK` with the string in the autogenerated declarations
- Write your own `createActor` constructor


## Useful links
- [IC Reference](https://internetcomputer.org/docs/current/references/)
- [IC Guide](https://internetcomputer.org/docs/current/developer-docs/)
- [IC Tutorial](https://internetcomputer.org/docs/current/tutorials/)

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/) 
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

## Author
- [@sonukuldeep](https://www.github.com/sonukuldeep)

## 🛠 Skills

[![My Skills](https://skillicons.dev/icons?i=js,ts,html,css,tailwind,sass,nodejs,react,vue,flask,rust,python,php,solidity,mongodb,mysql,prisma,figma,threejs,unity,godot)](https://github.com/sonukuldeep)