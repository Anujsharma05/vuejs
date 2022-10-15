let timer;

export default {
    async auth(context, payload) {
        let url;

        if (payload.mode === 'login') {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBLUMT7ccyj59fPWfqVMKeh-2Y0kec0Jxg';
        } else if (payload.mode === 'signup') {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBLUMT7ccyj59fPWfqVMKeh-2Y0kec0Jxg';
        }

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to authenticate');
            throw error;
        }

        const expiresIn = +responseData.expiresIn*1000;
        // const expiresIn = 5000;
        const expirationTime = new Date().getTime() + expiresIn;

        timer = setTimeout(function () {
            context.dispatch('autoLogout');
        }, expiresIn)

        localStorage.setItem('expirationTime', expirationTime);

        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
        })

    },
    async login(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'login'
        });
    },
    async signup(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'signup'
        });
    },
    autoLogin(context) {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        const expirationTime = +localStorage.getItem('expirationTime');
        const remainingTime = expirationTime - new Date().getTime();

        if (remainingTime < 0) {
            return;
        }

        timer = setTimeout(function () {
            context.dispatch('autoLogout');
        }, remainingTime);

       
        if (token && userId) {
            context.commit('setUser', {
                token: token,
                userId: userId
            })
        }
    },
    logout(context) {

        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('expirationTime');

        clearTimeout(timer);

        context.commit('setUser', {
            userId: null,
            token: null
        })
    },
    autoLogout(context) {
        context.dispatch('logout');
        context.commit('setAutoLogout');
    }
}