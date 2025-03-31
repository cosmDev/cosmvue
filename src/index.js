#!/usr/bin/env node

import { execSync } from 'child_process'
import inquirer from 'inquirer'
import chalk from 'chalk'


const templates = {
  "Vite + Vue 3": "npm create vite@latest cosmvue-template -- --template vue",
  "Vuetify": "npm create vuetify@latest"
  //"Vue CLI": "vue create my-vue-app",
  //"Nuxt 3": "npx nuxi init my-nuxt-app",
  //"Quasar": "npm create quasar@latest my-quasar-app",
};

async function main() {
  console.log(chalk.green("Welcome to CosmVue Template Installer!"));
  
  const { template } = await inquirer.prompt([
    {
      type: "list",
      name: "template",
      message: "Choose a CosmVue template to install:",
      choices: Object.keys(templates)
    }
  ]);

  console.log(chalk.blue(`Installing ${template}...`));
  
  try {
    execSync(templates[template], { stdio: "inherit" });
    console.log(chalk.green("Installation successful!")); 
  } catch (error) {
    console.error(chalk.red("Error installing template:"), error);
  }
}

main();
