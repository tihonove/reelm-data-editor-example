import { defineReducer } from 'reelm/fluent';
import personReducer from './personReducer';

export const Person = 'Person';

export default defineReducer({})
    .scopedOver(Person, ['person'], personReducer);
