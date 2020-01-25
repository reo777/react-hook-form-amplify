import {delay} from 'blend-promise-utils';

export const submit = async (value: any, e: any) => {
  window.alert(JSON.stringify(value));
};
