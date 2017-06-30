import { reduxForm } from 'redux-form';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import UploadFileForm from './form';
import { submit } from './formActions';
import { getGenres } from '../../../../genre/genreActions';

export const mapStateToProps = ({ genre }, { name }) => ({
  initialValues: {
    name: name.replace(/\.[^/.]+$/, ''),
    genres: genre.genres,
  },
});

const mapDispatchToProps = dispatch => ({
  getGenres: () => getGenres()(dispatch),
  onSubmit: (values) => {
    const formData = new FormData();

    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    return dispatch(submit(formData));
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getGenres();
    },
  }),
  // TODO: https://github.com/erikras/redux-form/issues/3048
  reduxForm({}),
)(UploadFileForm);
