#!/usr/bin/env node

const fs = require('fs-extra');
const { execSync } = require('child_process');
const path = require('path');

const createDirectory = (dirname) => {
  if (fs.existsSync(dirname)) {
    console.error(`Error: Directory '${dirname}' already exists.`);
    return false;
  }

  try {
    fs.mkdirSync(dirname);
    process.chdir(dirname);
    console.log(`Created directory: ${dirname}`);
    return true;
  } catch (err) {
    console.error(`Error: Failed to create directory '${dirname}': ${err.message}`);
    return false;
  }
};

const copyTemplate = () => {
  console.log('Copying template...');
  const templatePath = path.join(__dirname, 'templates');
  const destinationPath = process.cwd();
  fs.copySync(templatePath, destinationPath);
  console.log('Template copied successfully!\n');
};

const installDependencies = () => {
  console.log('Installing dependencies...');
  process.chdir('frontend');
  execSync('npm install', { stdio: 'inherit' });
  execSync('npm install @mui/material @emotion/react @emotion/styled', { stdio: 'inherit' });
  execSync('npm install antd d3 --save', { stdio: 'inherit' })
  process.chdir('../backend');
  execSync('npm install', { stdio: 'inherit' });
};

const main = () => {
  if (process.argv.length !== 3) {
    console.error('Usage: npx sqrpress_571 <directory_name>');
    process.exit(1);
  }
  const projectName = process.argv[2];
  if (!createDirectory(projectName)) return;
  copyTemplate();
  installDependencies();
  console.log('Project created successfully!');
};

main();
