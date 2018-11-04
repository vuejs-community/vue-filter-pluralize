import { VueConstructor } from 'vue';
import packageJson from '../package.json';
import { pluralize } from './filters/pluralize';

export default {
  install(Vue: VueConstructor): void {
    Vue.filter('pluralize', pluralize);
  },
  version: packageJson.version
};
