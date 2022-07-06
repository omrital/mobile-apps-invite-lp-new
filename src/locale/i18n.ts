import {TranslationKey} from "./index";
import _ from "lodash";

const texts = require('./messages_en.json');

export const i18n = (key: TranslationKey, params?: object): string => {
  let text: string = texts[key];

  if (!text) {
    return `error: not text found for key: ${key.toString()}`;
  }
  _.forOwn(params, (value, key) => {
    text = text.replace(`{{${key}}}`, value);
  });
  return text;
};
