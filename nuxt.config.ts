import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  srcDir: 'src/',
  dev: true,
  buildModules: ['@nuxt/typescript-build']
};

export default config;
