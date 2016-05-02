import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { forwardTo } from 'reelm';

import PersonEditForm from '../components/PersonEditForm';
import { Person } from '../reducers/singlePersonEditReducer';

function SinglePersonEditApplication({
    person, dispatch }) {
    return (<div>
            <PersonEditForm
              person={person}
              dispatch={forwardTo(dispatch, Person)} />
        </div>);
}

SinglePersonEditApplication.propTypes = {
    person: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default connect(
    state => ({ person: state.person })
    )(SinglePersonEditApplication);
