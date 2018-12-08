import { connect } from 'react-redux';

import { actions } from '@/store/example';

import Example from './Example.component';

const mapStateToProps = ({ example }) => ({
  example: example.get('example')
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(actions.example())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);
