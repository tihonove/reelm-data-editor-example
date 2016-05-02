import { defineReducer } from 'reelm/fluent';
import { call } from 'reelm/effects';

import personReducer from './personReducer';

export const Person = 'Person';

export default defineReducer({})
    .scopedOver(Person, ['person'], personReducer)
    .mapEffects(effect => {
        if (effect.type === 'RequestConfirmation') {
            return call(function* () {
                return confirm(effect.text);
            });
        }
        return effect;
    });
