import React, { PropTypes } from 'react';

export default function PersonEditForm({ person, onChange, onClear }) {
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
    onChange: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
};
