import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import PersonEditForm from '../components/PersonEditForm';
import { Change as PersonChange } from '../reducers/personReducer';
import { Clear as PersonClear } from '../reducers/personReducer';

function SinglePersonEditApplication({
    person, onPersonChange, onPersonClear }) {
    return (<div>
            <PersonEditForm
              person={person}
              onChange={onPersonChange}
              onClear={onPersonClear}/>
        </div>);
}

SinglePersonEditApplication.propTypes = {
    person: PropTypes.object.isRequired,
    onPersonChange: PropTypes.func.isRequired,
    onPersonClear: PropTypes.func.isRequired,
};

export default connect(
    state => ({ person: state }),
    dispatch => ({
        onPersonChange: data => dispatch({ type: PersonChange, data: data }),
        onPersonClear: () => dispatch({ type: PersonClear }),
    }))(SinglePersonEditApplication);