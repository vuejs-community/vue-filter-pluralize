class NotImplementedError extends Error {}

const pluralizeRule0 = (input: number, rules: string[]): string => {
  return rules[0];
};

const pluralizeRule1 = (input: number, rules: string[]): string => {
  return input === 1 ? rules[0] : rules[1];
};

const pluralizeRule2 = (input: number, rules: string[]): string => {
  return (input === 0 || input === 1) ? rules[0] : rules[1];
};

const pluralizeRule3 = (input: number, rules: string[]): string => {
  if (input === 0) {
    return rules[0];
  }

  if (input % 10 === 1 && input !== 11) {
    return rules[1];
  }

  return rules[2];
};

const pluralizeRule4 = (input: number, rules: string[]): string => {
  if (input === 1 || input === 11) {
    return rules[0];
  }

  if (input === 2 || input === 12) {
    return rules[1];
  }

  if (input >= 3 && input <= 19) {
    return rules[2];
  }

  return rules[3];
};

const pluralizeRule5 = (input: number, rules: string[]): string => {
  if (input === 1) {
    return rules[0];
  }

  if (input === 0) {
    return rules[1];
  }

  input %= 100;
  if (input >= 1 && input <= 19) {
    return rules[1];
  }

  return rules[2];
};

const pluralizeRule6 = (input: number, rules: string[]): string => {
  input % 100;
  if (input >= 11 && input <= 19) {
    return rules[1];
  }

  input %= 10;
  if (input === 1) {
    return rules[0];
  }

  if (input === 0) {
    return rules[1];
  }

  return rules[2];
};

const pluralizeRule7 = (input: number, rules: string[]): string => {
  input %= 100;
  if (input >= 5 && input <= 20) {
    return rules[2];
  }

  input %= 10;
  if (input === 1) {
    return rules[0];
  }

  if (input >= 2 && input <= 4) {
    return rules[1];
  }

  return rules[2];
};

const pluralizeRule8 = (input: number, rules: string[]): string => {
  if (input === 1) {
    return rules[0];
  }

  if (input >= 2 && input <= 4) {
    return rules[1];
  }

  return rules[2];
};

export const pluralizeFilter = (langCode: string, input: number, rules: string[]) => {
  input = Math.abs(input);

  switch (langCode) {
    case 'fa': // Persian
    case 'ja': // Japanese
    case 'ko': // Korean
    case 'lo': // Lao
    case 'th': // Thai
    case 'tr': // Turkish
    case 'zh': // Chinese
      return pluralizeRule0(input, rules);
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
      return pluralizeRule1(input, rules);
    case 'fr': // French
    case 'pt-BR': // Brazilian Portuguese
      return pluralizeRule2(input, rules);
    case 'lv': // Latvian
      return pluralizeRule3(input, rules);
    case 'gd': // Scottish Gaelic
      return pluralizeRule4(input, rules);
    case 'ro': // Romanian
      return pluralizeRule5(input, rules);
    case 'lt': // Lithuanian
      return pluralizeRule6(input, rules);
    case 'be': // Belarusian
    case 'bs': // Bosnian
    case 'hr': // Croatian
    case 'ru': // Russian
    case 'sk': // Serbian
    case 'uk': // Ukrainian
      return pluralizeRule7(input, rules);
    case 'cs': // Czech
    case 'sk': // Slovak
      return pluralizeRule8(input, rules);
    default:
      throw new NotImplementedError(`Method with language ${langCode} not implemented`);
  }
};
