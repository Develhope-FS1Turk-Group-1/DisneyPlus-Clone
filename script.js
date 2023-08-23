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

const users = JSON.parse(localStorage.getItem('users')) || [];

const signUp = () => {
    const userMail = signUpEmail.value;
    const userPassword = signUpPassword.value;
    const fullNameValue = fullName.value;
    console.log(userMail);
    if (userMail !== '' && userPassword.length !== '' && fullNameValue !== '') {
        if (!users.some((user) => user.email === userMail)) {
            users.push({fullName: fullNameValue, email: userMail, password: userPassword});
            localStorage.setItem('users', JSON.stringify(users));
            signUpContainer.style.display = 'none';
            backgroundSignUpContainer.style.display = 'none';
        } else {
            alert('You have been registered before.');
        }
    } else {
        alert(
            'Sorry, Password length less than 8 or we are having trouble creating your account. Please re-enter your email and password and try again. If the problem persists, contact Disney+ Support.'
        );
    }
};

const saveSession = () => {
    const userMail = email.value;
    console.log(userMail);
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
            profileName.innerHTML = user.fullName.toUpperCase();
            saveSession();

        } else {
            alert('Password is wrong.');
        }
    } else {
        alert('Invalid email or you have not been register.');
    }
    if (userMail === '' || userPassword === '') {
        alert('Invalid email or you have not been register.');
    }
    if (banner.style.display == 'block') {
        setTimeout(() => {
            banner.style.display = 'none';
        }, 2000);
    }
};

let signUpPopup = () => {
    signUpContainer.style.display = 'flex';
    backgroundSignUpContainer.style.display = 'block';
};

window.addEventListener('click', (e) => {
    if (e.target == backgroundSignUpContainer) {
        backgroundSignUpContainer.style.display = 'none';
        signUpContainer.style.display = 'none';
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
            if (banner.style.display == 'block') {
                setTimeout(() => {
                    banner.style.display = 'none';
                }, 2000);
            }
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
