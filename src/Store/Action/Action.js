
import firebase from '../../Service/Service'


const facebooklogin = () => {
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        provider.setCustomParameters({
            'display': 'popup'
        });
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                var user = result.user;
                // let createuser = {
                //     username: user.displayName,
                //     email: user.email,
                //     uid: user.uid
                // }
                // firebase.database().ref('/').child(`users/${user.uid}`).set(createuser)
                //     .then(() => {
                //         dispatch({ type: "SETUSER", payload: createuser })
                //     })
            }).catch(function (error) {
                console.log(error.message)
            });
    }
}
const authuser = () => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                let createuser = {
                    username: user.displayName,
                    email: user.email,
                    uid: user.uid
                }
                firebase.database().ref('/').child(`users/${user.uid}`).set(createuser)
                    .then(() => {
                        dispatch({ type: "SETUSER", payload: createuser })
                    })
            }
            else {
                console.log('no')
            }
        })
    }
}

const getuser = () => {
    return (dispatch) => {
        let users = [];
        firebase.database().ref('/').child('users').on('child_added', (data) => {
            users.push(data.val())
            // console.log("firebaseuser", users )
        })
        dispatch({
            type: "setfirebaseusers", payload: users
        })
    }
}

const logout = () => {
    return (dispatch) => {
        let users = [];
        firebase.database().ref('/').child('users').on('child_added', (data) => {
            users.push(data.val())
            // console.log("firebaseuser", users )
        })
        dispatch({
            type: "setfirebaseusers", payload: users
        })
    }
}

const selectcategoryitem = (term) => {
    return (dispatch) => {
        dispatch({
            type: "categoryitem",
            payload: term,
        })
    }
}


const selectitem = (term) => {
    return (dispatch) => {
        dispatch({
            type: "selectcategory",
            payload: term,
        })
    }
}

export {
    facebooklogin,
    getuser,
    authuser,
    logout,
    selectcategoryitem,
    selectitem
}


