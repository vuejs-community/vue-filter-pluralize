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

export const pluralizeFilter = (input: number, langCode: string, cases: string[]) => {
  input = Math.abs(input);

  switch (langCode) {
    case 'fa': // Persian
    case 'ja': // Japanese
    case 'ko': // Korean
    case 'lo': // Lao
    case 'th': // Thai
    case 'tr': // Turkish
    case 'zh': // Chinese
      return pluralizeRule0(input, ...cases);
    case 'ca': // Catalan
    case 'da': // Danish
    case 'de': // German
    case 'el': // Greek
    case 'en': // English
    case 'es': // Spanish
    case 'et': // Estonian
    case 'eu': // Basque
    case 'fi': // Finnish
    case 'fo': // Faroese
    case 'fy': // Frisian
    case 'he': // Hebrew
    case 'hu': // Hungarian
    case 'it': // Italian
    case 'nb': // Norwegian
    case 'nl': // Dutch
    case 'pt': // Portuguese
    case 'sv': // Swedish
    case 'vi': // Vietnamese
      return pluralizeRule1(input, ...cases);
    case 'fr': // French
    case 'pt-BR': // Brazilian Portuguese
      return pluralizeRule2(input, ...cases);
    case 'lv': // Latvian
      return pluralizeRule3(input, ...cases);
    case 'gd': // Scottish Gaelic
      return pluralizeRule4(input, ...cases);
    case 'ro': // Romanian
      return pluralizeRule5(input, ...cases);
    case 'lt': // Lithuanian
      return pluralizeRule6(input, ...cases);
    case 'be': // Belarusian
    case 'bs': // Bosnian
    case 'hr': // Croatian
    case 'ru': // Russian
    case 'sr': // Serbian
    case 'uk': // Ukrainian
      return pluralizeRule7(input, ...cases);
    case 'cs': // Czech
    case 'sk': // Slovak
      return pluralizeRule8(input, ...cases);
    case 'pl': // Polish
      return pluralizeRule9(input, ...cases);
    case 'sl': // Slovenian
      return pluralizeRule10(input, ...cases);
    default:
      throw new NotImplementedError(`Method with language ${langCode} not implemented`);
  }
};
