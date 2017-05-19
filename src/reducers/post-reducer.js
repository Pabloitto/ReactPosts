import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index';


export default (state = [], action) => {

    switch (action.type) {
        case DELETE_POST:
            return state.filter(item => item.id !== action.payload.data.id);
        case FETCH_POSTS:
            return action.payload.data.filter(item => item.title && item.content);
        case FETCH_POST:
            if (state.length === 0) {
                return [action.payload.data];
            }
            const result = state.map(item => {
                if (item.id === action.payload.data.id) {
                    return action.payload.data;
                }
                return item;
            });
            return result;
    }

    return state;
}