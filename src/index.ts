import { VueConstructor } from 'vue';

import packageJson from '../package.json';

class NotImplementedError extends Error {}

export const pluralize = (locale: string, input: number, rules: string[]) => {
  throw new NotImplementedError(`Method with locale ${locale} not implemented`);
};

export default {
  install(Vue: VueConstructor): void {
    Vue.filter('pluralize', pluralize);
  },
  version: packageJson.version
};
