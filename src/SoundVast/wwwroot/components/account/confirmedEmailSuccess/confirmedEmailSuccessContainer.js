/* eslint-disable import/prefer-default-export */

import { showEmailConfirmationPopup } from '../actions';

export const routeConfig = {
  to: (data) => {
    data.context.store.dispatch(showEmailConfirmationPopup());

    return '/';
  },
};
