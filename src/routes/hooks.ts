import _useMount from 'react-use/esm/useMount';

import utils from './../lib/utils';

export const useMount = (
  setLoading: (loading: boolean) => void,
  setIsAuthed: (authed: boolean) => void
) => {
  _useMount(async () => {
    let result = false;
    try {
      const user = await utils.amplify.getUser();

      result = true;
    } catch (err) {
      console.error(err);
      result = false;
    } finally {
      setIsAuthed(result);
      setLoading(false);
    }
  });
};
