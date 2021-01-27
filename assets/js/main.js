import Auth from './classes/Auth.js'
import Request from './classes/Request.js'
import Notification from './classes/Notification.js'
import Profile from './classes/Profile.js'
import Feed from './classes/Feed.js'

// Login
const loginForm = document.getElementById('login-form');
if(loginForm) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const user = { email, password };
        Auth.login(user);
    });
}

// register
const registerForm = document.getElementById('register-form');
if(registerForm) {
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const user = { email, password };
        Auth.register(user);
    });
}

const saludo = document.getElementById('hola')
const name = Auth.user().name
saludo.innerHTML = `Hola, ${name} 👋`


// Invitation
const invitationForm = document.getElementById('invitation-form');
if(invitationForm) {
    invitationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const user = { email };
        Request.inviteUser(user)
            .then(response => {
                if(response.status === 201) {
                    new Notification('success', 'La invitación fue enviada exitósamente.')
                } else {
                    new Notification('danger', 'No se puedo enviar la invitación.')
                }
            })

    });
}


// Profile---------

//update username
const profileForm = document.getElementById('profile-form');
if(profileForm) {
    profileForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const user = Auth.user();
        user.name = name;
        Profile.updateUser(user)
            .then(response => {
                if(response.status === 200) {
                    new Notification('success', 'El usuario se actualizó exitósamente.')
                } else {
                    new Notification('danger', 'Tuvimos problemas al actualizar el usuario.')
                }
            })

    });
}

//update passwords
const passUpdateform = document.getElementById('passUpdate-form')
if(passUpdateform) {
    passUpdateform.addEventListener('submit', (event) => {
        event.preventDefault()
        const password = document.getElementById('pass').value
        const user = Auth.user();
        user.password = password
        Profile.updatePass(user)
        .then(response => {
            if(response.status === 200) {
                new Notification('success', 'La contraseña se actualizó exitósamente.')
            } else {
                new Notification('danger', 'Tuvimos problemas al actualizar la contraseña.')
            }
        })

    })
}
