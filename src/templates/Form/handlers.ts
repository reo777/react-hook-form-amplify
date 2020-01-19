import {delay} from 'blend-promise-utils';

export const submit = async (value: any, e: any) => {
  await delay(350);
  window.alert(JSON.stringify(value));
};
