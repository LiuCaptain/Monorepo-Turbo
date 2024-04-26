import select from '@inquirer/select';
import { execaCommand } from 'execa';
import { bold, greenBright } from 'colorette';
import { operationTypeText } from './config/utils.js';
import { projectList, buildTypeList } from './config/constant.js';

const isStart = process.env.type === 'start';
const isBuild = process.env.type === 'build';
const isPreview = process.env.type === 'preview';

const projectValue = await select({
  message: `请选择要${operationTypeText()}的项目`,
  choices: projectList.map((item) => ({
    name: item.name,
    value: item.value,
    description: item.description,
    disabled: item.disabled
  }))
});

const currentProject = projectList.find((item) => item.value === projectValue);
const environmentList = currentProject.environmentList;
const environmentValue = await select({
  message: `请选择要${operationTypeText()}的环境`,
  choices: environmentList
});

let buildTypeValue = null;
if (isBuild) {
  buildTypeValue = await select({
    message: '请选择你要构建的类型',
    choices: buildTypeList
  });
}

switch (process.env.type) {
  case 'start': {
    const command = `pnpm -F ${projectValue} dev:${environmentValue}`;
    execaCommand(command, { stdio: 'inherit' });
    break;
  }
  case 'build':
    if (buildTypeValue === 'localBuildUpgradation') {
      console.log(bold(greenBright('本地构建并升级项目')));
    } else if (buildTypeValue === 'serverBuildUpgradation') {
      console.log(bold(greenBright('服务端构建并升级项目')));
    }
    break;
  case 'preview': {
    const buildCommand = `pnpm -F ${projectValue} build:${environmentValue}`;
    await execaCommand(buildCommand, { stdio: 'inherit' });
    const previewCommand = `pnpm -F ${projectValue} preview`;
    execaCommand(previewCommand, { stdio: 'inherit' });
  }
}
