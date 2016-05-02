import personReducer from './personReducer';

export const Person = 'Person';

const initialState = {
    person: personReducer(),
};

const personPrefixRegex = new RegExp(`^${Person}\.(.*)`);

export default function singlePersonEditReducer(
    appState = initialState, action) {
    if (!action) {
        return appState;
    }
    if (personPrefixRegex.test(action.type)) {
        const newType = action.type.match(personPrefixRegex).splice(-1)[0];
        appState = {
            ...appState,
            person: personReducer(
                appState.person, { ...action, type: newType }),
        };
    }
    return appState;
}
