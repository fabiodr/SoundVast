import { reducer as form } from 'redux-form';
import reduceReducers from 'reduce-reducers';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FORM_SUBMIT_PENDING': {
      const forms = [...state.forms];

      forms[action.form].isSubmitting = true;

      return {
        ...state,
        forms,
      };
    }
    default: return state;
  }
};

export default reduceReducers(form, reducer);
