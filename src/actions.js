import { API_BASE_URL } from './config';

export const TEST = 'TEST';
export const test = () => ({
    type: TEST
});

export const registerUser = (values) => dispatch => {
    return fetch(`${API_BASE_URL}/api/users`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
    })
    .then((res) => {
        console.log(res)
    })
}