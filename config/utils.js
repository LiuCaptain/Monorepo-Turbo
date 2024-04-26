export const operationTypeText = () => {
  switch (process.env.type) {
    case 'start':
      return '启动';
    case 'build':
      return '构建';
    case 'preview':
      return '预览';
  }
};
