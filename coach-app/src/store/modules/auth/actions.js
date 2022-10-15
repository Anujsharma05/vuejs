const API_KEY = 'AIzaSyBLUMT7ccyj59fPWfqVMKeh-2Y0kec0Jxg';

let logoutTime;

export default {
    async login(context, payload) {
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + API_KEY;
        
        const params = {
            method: 'POST',
            'Content-Type': 'application/json',
            body: JSON.stringify(
                {
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                }
            )
        }

        const response = await fetch(url, params);

        if(!response.ok) {
            throw new Error(response.message || 'authentication failed');
        }

        const responseData = await response.json();

        const expiresIn = +responseData.expiresIn*1000;
        logoutTime = new Date().getTime() + expiresIn

        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);

        context.commit('login', {
            token: responseData.idToken,
            userId: responseData.localId
        });        
    },
    autoLogin(context, payload) {
        context.commit('autoLogin', payload);
    },
    logout(context) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        context.commit('logout');
    }
}