import { Locales } from './enums/locales.ts';

type VueConstructor = {
  filter(id: string, definition?: Function): Function;
};

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

const pluralizeRule4 = (input: number, case0: string, case1: string, case2: string, case3: string): string => {
  if (input === 1 || input === 11) {
    return case0;
  }

  if (input === 2 || input === 12) {
    return case1;
  }

  if (input >= 3 && input <= 19) {
    return case2;
  }

  return case3;
};

const pluralizeRule5 = (input: number, case0: string, case1: string, case2: string): string => {
  if (input === 1) {
    return case0;
  }

  if (input === 0) {
    return case1;
  }

  input %= 100;
  if (input >= 1 && input <= 19) {
    return case1;
  }

  return case2;
};

const pluralizeRule6 = (input: number, case0: string, case1: string, case2: string): string => {
  input %= 100;
  if (input >= 11 && input <= 19) {
    return case1;
  }

  input %= 10;
  if (input === 1) {
    return case0;
  }

  if (input === 0) {
    return case1;
  }

  return case2;
};

const pluralizeRule7 = (input: number, case0: string, case1: string, case2: string): string => {
  input %= 100;
  if (input >= 5 && input <= 20) {
    return case2;
  }

  input %= 10;
  if (input === 1) {
    return case0;
  }

  if (input >= 2 && input <= 4) {
    return case1;
  }

  return case2;
};

const pluralizeRule8 = (input: number, case0: string, case1: string, case2: string): string => {
  if (input === 1) {
    return case0;
  }

  if (input >= 2 && input <= 4) {
    return case1;
  }

  return case2;
};

const pluralizeRule9 = (input: number, case0: string, case1: string, case2: string): string => {
  if (input === 1) {
    return case0;
  }

  if (input >= 12 && input <= 14) {
    return case2;
  }

  input %= 10;
  if (input >= 2 && input <= 4) {
    return case1;
  }

  return case2;
};

const pluralizeRule10 = (input: number, case0: string, case1: string, case2: string, case3: string): string => {
  input %= 100;
  if (input === 1) {
    return case0;
  }

  if (input === 2) {
    return case1;
  }

  if (input === 3 || input === 4) {
    return case2;
  }

  return case3;
};

export const pluralize = (locale: Locales, input: number, cases: string[]) => {
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
    case Locales.GaelicScottish:
      return pluralizeRule4(input, cases[0], cases[1], cases[2], cases[3]);
    case Locales.Romanian:
      return pluralizeRule5(input, cases[0], cases[1], cases[2]);
    case Locales.Lithuanian:
      return pluralizeRule6(input, cases[0], cases[1], cases[2]);
    case Locales.Belarusian:
    case Locales.Bosnian:
    case Locales.Croatian:
    case Locales.Russian:
    case Locales.Serbian:
    case Locales.Ukrainian:
      return pluralizeRule7(input, cases[0], cases[1], cases[2]);
    case Locales.Czech:
    case Locales.Slovak:
      return pluralizeRule8(input, cases[0], cases[1], cases[2]);
    case Locales.Polish:
      return pluralizeRule9(input, cases[0], cases[1], cases[2]);
    case Locales.Slovenian:
      return pluralizeRule10(input, cases[0], cases[1], cases[2], cases[3]);
    default:
      throw new NotImplementedError(`Method with locale ${locale} not implemented`);
  }
};

export default {
  install(Vue: VueConstructor): void {
    Vue.filter('pluralize', pluralize);
  }
};
