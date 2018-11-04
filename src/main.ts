import { VueConstructor } from 'vue';
import { version } from '../package.json';
import { pluralize } from './filters/pluralize';

export { pluralize } from './filters/pluralize';

export default {
  install(Vue: VueConstructor): void {
    Vue.filter('pluralize', pluralize);
  },
  version
};
