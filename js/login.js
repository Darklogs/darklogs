const loginUser = () => {
    // let name = document.getElementById('name').value;
    let email = document.getElementById('email').value; 
    let pass = document.getElementById('pass').value;

      window.location.assign('dashboard.html');

/*    firebase.auth().signInWithEmailAndPassword(email,pass)
        .then(() => {
            window.alert('Login success!');
            window.location.assign('dashboard.html');
        })
        .catch(err => window.alert(err.message)) */
}
