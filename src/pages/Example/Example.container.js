import { connect } from 'react-redux';

import { actions } from '@/store/example';

import Example from './Example.component';

const mapStateToProps = ({ example }) => ({
  example: example.get('example'),
  example2: example.get('example2')
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(actions.example()),
  onSagaClick: () => dispatch(actions.example2(1))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);
