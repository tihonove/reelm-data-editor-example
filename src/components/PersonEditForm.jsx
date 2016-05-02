import React, { PropTypes } from 'react';

import { Change, Clear } from '../reducers/personReducer';

export default function PersonEditForm({ person, dispatch }) {
    const onChange = data => dispatch({ type: Change, data: data });
    const onClear = () => dispatch({ type: Clear });

    return (<div>
            <div>
                First name:
                <input
                  value={person.fitstName || ''}
                  onChange={e => onChange({ fitstName: e.target.value })} />
            </div>
            <div>
                Last name:
                <input
                  value={person.lastName || ''}
                  onChange={e => onChange({ lastName: e.target.value })} />
            </div>
            <button onClick={onClear}>Clear</button>
        </div>);
}

PersonEditForm.propTypes = {
    person: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
};
