import firebase from 'firebase';

try {
	var config = {
	    apiKey: "AIzaSyDL3cbVvzUBry1nTkOp_vE-a8Kp1L7RiYU",
	    authDomain: "react-todo-app-c68d8.firebaseapp.com",
	    databaseURL: "https://react-todo-app-c68d8.firebaseio.com",
	    storageBucket: "react-todo-app-c68d8.appspot.com",
	    messagingSenderId: "1048937746495"
	  };

	firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;