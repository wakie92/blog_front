import firebase, { provider } from '../../config/init-firebase';

export const formatDate = (dateData: string) => {
  const formatted: Date = new Date(dateData);
  const year: number = formatted.getFullYear();
  let month: number | string = formatted.getMonth() + 1;
  let day: number | string = formatted.getDate();
  month = Number(month) < 10 ? `0${month}` : month;
  day = Number(day) < 10 ? `0${day}` : day;

  return `${year}년 ${month}월 ${day}일`;
};  

export const setItem = (key: string, obj: object) => {
  return sessionStorage.setItem(key, JSON.stringify(obj));
};

export const getItem = (key: string) => {
  return sessionStorage.getItem(JSON.parse(key));
};

export const removeExp = (str: string) => {
  const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi
  if(regExp.test(str)) {
    const result = str.replace(regExp, '');
    return result;
  } return str;
} 

export const loginPopup = () => {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    const token = JSON.stringify(result.credential.toJSON());
    sessionStorage.setItem("idToken", token);
  }).catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
  });
}

export const logoutFn = () => {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log('logout');
    sessionStorage.removeItem("idToken");
  }).catch(function(error) {
    // An error happened.
  });
}
