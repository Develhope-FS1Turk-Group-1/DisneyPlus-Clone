let loginContainer = document.getElementById('loginContainer');
let backgroundContainer = document.getElementById('backgroundContainer');


let loginfunc = () => {
    loginContainer.style.display = 'flex';
    backgroundContainer.style.display = 'block';
};

window.addEventListener('click', (e) => {
    if (e.target == backgroundContainer) {
        backgroundContainer.style.display = 'none';
        loginContainer.style.display = 'none';
        email.value=""
        password.value=""
        email.style.border="1px solid black"
        password.style.border="1px solid black"
        fullName.style.border="1px solid black"
        signUpEmail.style.border="1px solid black"
        loginError.style.display="none"
        signUpPassword.style.border="1px solid black"
        signError.style.display="none"
        registeredError.style.display="none"
    }
});

/*---------------- LOGIN INPUT SCRIPTS ---------------*/

const email = document.getElementById('emailInput');
const password = document.getElementById('passwordInput');
const signUpEmail = document.getElementById('signUpEmailInput');
const signUpPassword = document.getElementById('signUpPasswordInput');
const signUpContainer = document.getElementById('signUpContainer');
const backgroundSignUpContainer = document.getElementById('backgroundSignUpContainer');
const fullName = document.getElementById('fullName');
const banner = document.querySelector('.banner');
const headerContainer = document.getElementById('headerContainer');
const loginHeaderContainer = document.getElementById('loginHeaderContainer');
const profileName = document.getElementById('profileName');
const signError = document.getElementById('signError');
const loginError = document.getElementById('loginError');
const wrongPasswordError = document.getElementById('wrongPasswordError');
const registeredError = document.getElementById('registeredError');
const bannerSignUp = document.querySelector('.bannerSignUp');
const backgroundRegisterContainer = document.getElementById('backgroundRegisterContainer');
const RegisterContainer = document.getElementById('RegisterContainer');
const mainContainer = document.querySelector('.main');
const loginBody = document.querySelector('#loginBody');


const users = JSON.parse(localStorage.getItem('users')) || [];

const signUp = () => {
    const userMail = signUpEmail.value;
    const userPassword = signUpPassword.value;
    const fullNameValue = fullName.value;
    if (userMail !== '' && userPassword.length > 7 && fullNameValue !== '') {
        if (!users.some((user) => user.email === userMail)) {
            users.push({fullName: fullNameValue, email: userMail, password: userPassword});
            localStorage.setItem('users', JSON.stringify(users));
            signUpContainer.style.display = 'none';
            backgroundSignUpContainer.style.display = 'none';
            bannerSignUp.style.display="block"
        } else {
            registeredError.style.display ="block"
        }
    } else {
        //border: 1px solid rgb(255, 85, 76);
        fullName.style.border=" 1px solid rgb(255, 85, 76)"
        signUpEmail.style.border=" 1px solid rgb(255, 85, 76)"
        signUpPassword.style.border=" 1px solid rgb(255, 85, 76)"
        signError.style.display="block"
    }
    if (bannerSignUp.style.display == 'block') {
        setTimeout(() => {
            bannerSignUp.style.display = 'none';
        }, 2000);
    }
};

const saveSession = () => {
    const userMail = email.value;
    const sessionData = {
        userMail: userMail,
    };
    localStorage.setItem('session', JSON.stringify(sessionData));
};

const login = () => {
    let userMail = email.value;
    let userPassword = password.value;
    const user = users.find((user) => user.email === userMail);
    if (user) {
        if (user.password === userPassword) {
            backgroundContainer.style.display = 'none';
            loginContainer.style.display = 'none';
            banner.innerHTML = `Logged in as ${user.fullName}.`;
            banner.style.display = 'block';
            headerContainer.style.display = 'none';
            loginHeaderContainer.style.display = 'block';
            mainContainer.style.display = 'none';
            loginBody.style.display = 'block';
            profileName.innerHTML = user.fullName.toUpperCase();
            saveSession();
        } else {
            password.style.border=" 1px solid rgb(255, 85, 76)"
            wrongPasswordError.style.display="block"
            mainContainer.style.display = 'block';
            loginBody.style.display = 'none';
            //alert('Password is wrong.');
        }
    } else if (userMail == '' || userPassword == '') {
        email.style.border=" 1px solid rgb(255, 85, 76)"
        password.style.border=" 1px solid rgb(255, 85, 76)"
        loginError.style.display="block"
        // alert('Invalid email or you have not been register.');
    } else {
        backgroundRegisterContainer.style.display="block"
        RegisterContainer.style.display="flex"
    }

    if (banner.style.display == 'block') {
        setTimeout(() => {
            banner.style.display = 'none';
        }, 2000);
    }
};
window.addEventListener('click', (e) => {
    if (e.target == backgroundRegisterContainer) {
        backgroundRegisterContainer.style.display = 'none';
        RegisterContainer.style.display = 'none';
    }
});
/*---------------- ERROR MESSAGE SCRIPTS ---------------*/
const inputs = document.getElementsByName("inputs")

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keypress", ()=>{
        email.style.border="1px solid black"
        password.style.border="1px solid black"
        fullName.style.border="1px solid black"
        signUpEmail.style.border="1px solid black"
        loginError.style.display="none"
        signUpPassword.style.border="1px solid black"
        signError.style.display="none"
        registeredError.style.display="none"
    })
}

let tryAgain = () =>{
    backgroundRegisterContainer.style.display = 'none';
    RegisterContainer.style.display = 'none';
}
/*---------------- ERROR MESSAGE SCRIPTS ---------------*/

let signUpPopup = () => {
    signUpEmail.value = email.value
    signUpContainer.style.display = 'flex';
    backgroundSignUpContainer.style.display = 'block';
    backgroundRegisterContainer.style.display = 'none';
    RegisterContainer.style.display = 'none';
    backgroundContainer.style.display = 'none';
    loginContainer.style.display = 'none';
};



window.addEventListener('click', (e) => {
    if (e.target == backgroundSignUpContainer) {
        backgroundSignUpContainer.style.display = 'none';
        signUpContainer.style.display = 'none';
        fullName.value=""
        signUpEmail.value=""
        signUpPassword.value=""
        email.style.border="1px solid black"
        password.style.border="1px solid black"
        fullName.style.border="1px solid black"
        signUpEmail.style.border="1px solid black"
        loginError.style.display="none"
        signUpPassword.style.border="1px solid black"
        signError.style.display="none"
        registeredError.style.display="none" 
    }
});

// Checking session information when the page loads.
window.onload = () => {
    const sessionData = localStorage.getItem('session');
    if (sessionData) {
        const session = JSON.parse(sessionData);
        // How to log in using login credentials.
        // For example, displaying the username or populating the page with relevant content.
        const user = users.find((user) => session.userMail === user.email);
        if (user) {
            profileName.innerHTML = user.fullName;
            banner.innerHTML = `Logged in as ${user.fullName}.`;
            banner.style.display = 'block';
            headerContainer.style.display = 'none';
            loginHeaderContainer.style.display = 'block';
            mainContainer.style.display = 'none';
            loginBody.style.display = 'block';
            if (banner.style.display == 'block') {
                setTimeout(() => {
                    banner.style.display = 'none';
                }, 2000);
            }
        } else {
            mainContainer.style.display = 'block';
            loginBody.style.display = 'none';
        }
    }
};


// Clear session information when the user logs out.
const logout=()=> {
    localStorage.removeItem('session');
    window.location.reload();
    // You can also add other exit processes.
}

/*
let shouldLogout = true;

// Tarayıcıdan ayrılmadan önce yapılacak işlemleri tanımla
window.addEventListener('beforeunload',  ()=> {
    if (shouldLogout) {
        // Kullanıcı sekme kapatırken oturumu kapatma işlemleri
        localStorage.removeItem('session');
        // Diğer çıkış işlemlerini buraya ekleyebilirsiniz
    }
});

// Sayfa yenilendiğinde oturum kapatma işlemini engelleme
window.addEventListener('beforeunload', function (event) {
    shouldLogout = false;
});
*/



/*---------------- END OF THE LOGIN INPUT SCRIPTS ---------------*/

/*---------------- TOP OF THE LOGOUT INPUT SCRIPTS ---------------*/

/*---------------- END OF THE LOGOUT INPUT SCRIPTS ---------------*/
