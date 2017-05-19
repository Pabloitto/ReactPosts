import axios from 'axios';

const TEMPLATE_URL = 'http://reduxblog.herokuapp.com/';

const createApiRequestUrl = (path) => {
    return TEMPLATE_URL + path;
}

export const FETCH_POSTS = 'FETCH_POSTS';
export const SAVE_POST = 'SAVE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

export const fetchPosts = () => {

    const url = createApiRequestUrl('api/posts');

    const request = axios.get(url);

    return {
        type: FETCH_POSTS,
        payload: request
    };
};

export const savePost = (post, onSuccess) => {
    const url = createApiRequestUrl('api/posts');
    const request = axios.post(url, post).then((response) => onSuccess(response.data));
    return {
        type: SAVE_POST,
        payload: request
    };
}

export const fetchPost = (id) => {
    const url = createApiRequestUrl('api/posts/' + id);
    const request = axios.get(url);
    return {
        type: FETCH_POST,
        payload: request
    };
}

export const deletePost = (id, onSuccess) => {
    const url = createApiRequestUrl('api/posts/' + id);
    const request = axios.delete(url).then((response) => {
        onSuccess();
        return response;
    });
    return {
        type: DELETE_POST,
        payload: request
    };
}