export const Change = 'Change';
export const Clear = 'Clear';

const initialState = {};

export default function personReducer(person = initialState, action) {
    if (!action) {
        return person;
    }
    if (action.type === Change) {
        person = { ...person, ...action.data };
    }
    if (action.type === Clear) {
        person = initialState;
    }
    return person;
}
