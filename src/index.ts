import { VueConstructor } from 'vue';

import { Locales } from './enums/locales';
import { version } from '../package.json';

class NotImplementedError extends Error {}

const pluralizeRule0 = (input: number, case0: string): string => {
  return case0;
};

const pluralizeRule1 = (input: number, case0: string, case1: string): string => {
  return input === 1 ? case0 : case1;
};

const pluralizeRule2 = (input: number, case0: string, case1: string): string => {
  return (input === 0 || input === 1) ? case0 : case1;
};

const pluralizeRule3 = (input: number, case0: string, case1: string, case2: string): string => {
  if (input === 0) {
    return case0;
  }

  if (input % 10 === 1 && input !== 11) {
    return case1;
  }

  return case2;
};

export const pluralize = (locale: string, input: number, cases: string[]) => {
  input = Math.abs(input);

  switch (locale) {
    case Locales.Persian:
    case Locales.Japanese:
    case Locales.Korean:
    case Locales.Lao:
    case Locales.Thai:
    case Locales.Turkish:
    case Locales.Chinese:
      return pluralizeRule0(input, cases[0]);
    case Locales.Catalan:
    case Locales.Danish:
    case Locales.German:
    case Locales.Greek:
    case Locales.English:
    case Locales.Spanish:
    case Locales.Estonian:
    case Locales.Basque:
    case Locales.Finnish:
    case Locales.Faroese:
    case Locales.Frisian:
    case Locales.Hebrew:
    case Locales.Hungarian:
    case Locales.Italian:
    case Locales.Norwegian:
    case Locales.Dutch:
    case Locales.Portuguese:
    case Locales.Swedish:
    case Locales.Vietnamese:
      return pluralizeRule1(input, cases[0], cases[1]);
    case Locales.French:
    case Locales.PortugueseBrazilian:
      return pluralizeRule2(input, cases[0], cases[1]);
    case Locales.Latvian:
      return pluralizeRule3(input, cases[0], cases[1], cases[2]);
    default:
      throw new NotImplementedError(`Method with locale ${locale} not implemented`);
  }
};

export default {
  install(Vue: VueConstructor): void {
    Vue.filter('pluralize', pluralize);
  },
  version
};
