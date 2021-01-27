const BASE_URL = 'https://matter-app.herokuapp.com/api/v1';

export default class Profile {
    static updateUser(user) {
        console.log(user)
        return fetch(`${BASE_URL}/users/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    static updatePass(user) {
        console.log(user)
        return fetch(`${BASE_URL}/users/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }
}