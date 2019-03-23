import { CYRILLIC_PATTERN_MESSAGE, EMAIL_PATTERN_MESSAGE } from './validation-messages-list';

export const EMAIL_PATTERN = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}$';
export const CYRILLIC_PATTERN = '^[А-Яа-яЁё\\s]+$';

export const PATTERNS_LIST: Array<{ PATTERN: string, MESSAGE: string }> = [
  {
    PATTERN: EMAIL_PATTERN,
    MESSAGE: EMAIL_PATTERN_MESSAGE
  }, {
    PATTERN: CYRILLIC_PATTERN,
    MESSAGE: CYRILLIC_PATTERN_MESSAGE
  }
];
