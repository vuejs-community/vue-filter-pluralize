import { VueConstructor } from 'vue';
import { version } from '../package.json';
import { pluralizeFilter } from './filters/pluralize';

export { pluralizeFilter } from './filters/pluralize';

export default {
  install(Vue: VueConstructor): void {
    Vue.filter('pluralize', pluralizeFilter);
  },
  version
};
