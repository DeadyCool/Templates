import axios from 'axios'

export class AccountService  {

    login(usr, pwd) {
        const result = 0;
        return axios.post('api/Accout/login', {
            ClientId: usr,
            Password: pwd
        }).then(function (response) {
            var response = response.data;
            sessionStorage.setItem('accessToken', response.data.accessToken);
            sessionStorage.setItem('expiresIn', addSeconds(response.data.expiresIn));
            sessionStorage.setItem('scope', response.data.scope);
            console.log(response);
            return response.code;
        }).catch(function () { return -1; });

    }

   hasExpire = () => {
       var date = new Date();
       return date > this.expiresIn();
    }

    expiresIn = () => new Date(sessionStorage.getItem('expiresIn'));

    accessToken = () => sessionStorage.getItem('accessToken');
}

function addSeconds(numOfSeconds, date = new Date()) {
    date.setSeconds(date.getSeconds() + numOfSeconds);
    return date;
}
