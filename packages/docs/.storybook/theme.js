import { create } from '@storybook/theming';

export default create({
  base: 'dark',  

  colorPrimary: '#1b305a',
  colorSecondary: '#47c77d',

  // appBg: '#e6ecf0',
  // appContentBg: '#fff',
  // appBorderColor: '#e6ecf0',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Toolbar default and active colors
  // barTextColor: '#e6ecf0',
  // barSelectedColor: '#1b305a',
  // barBg: '#ffda59',

    // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Storybook',
  brandUrl: '/',
  brandImage: 'https://www.justicaeleitoral.jus.br/estrutura-je/img/logo-je.png',
  brandTarget: '_self',
});
