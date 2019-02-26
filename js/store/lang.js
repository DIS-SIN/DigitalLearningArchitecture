// redux reducer for lang
const defaultState = {};

const LOAD_LANG = "LOAD_LANG";

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case LOAD_LANG:
            return payload;
        default:
            return state;
    }
};

export const loadLang = lang => ({
    type: LOAD_LANG,
    payload: lang,
});