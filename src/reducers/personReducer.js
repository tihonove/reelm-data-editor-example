import { defineReducer } from 'reelm/fluent';

export const Change = 'Change';
export const Clear = 'Clear';

const initialState = {};

export default defineReducer(initialState)
    .on(Change, (person, { data }) => ({ ...person, ...data }))
    .on(Clear, () => initialState);
