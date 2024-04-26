import { operationTypeText } from './utils.js';

export const projectList = [
  {
    name: 'React Project',
    value: 'react-project',
    description: '一个 React 项目 Demo',
    disabled: false,
    environmentList: [
      {
        name: `${operationTypeText()}项目测试环境`,
        value: 'test',
        disabled: false
      },
      {
        name: `${operationTypeText()}项目生产环境`,
        value: 'production',
        disabled: false
      }
    ]
  },
  {
    name: 'Vue Project',
    value: 'vue-project',
    description: '一个 Vue 项目 Demo',
    disabled: false,
    environmentList: [
      {
        name: `${operationTypeText()}项目测试环境`,
        value: 'test',
        disabled: false
      },
      {
        name: `${operationTypeText()}项目生产环境`,
        value: 'production',
        disabled: false
      }
    ]
  }
];

export const buildTypeList = [
  {
    name: '本地构建并升级项目',
    value: 'localBuildUpgradation',
    description: '本地构建完成后并升级更新项目',
    disabled: false
  },
  {
    name: '服务端构建并升级项目',
    value: 'serverBuildUpgradation',
    description: '服务端构建完成后并升级更新项目',
    disabled: false
  }
];
