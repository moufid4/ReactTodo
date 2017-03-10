import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDL3cbVvzUBry1nTkOp_vE-a8Kp1L7RiYU",
    authDomain: "react-todo-app-c68d8.firebaseapp.com",
    databaseURL: "https://react-todo-app-c68d8.firebaseio.com",
    storageBucket: "react-todo-app-c68d8.appspot.com",
    messagingSenderId: "1048937746495"
  };

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
	app: {
		name: 'Todo App',
		version: '1.0.0'
	},
	isRunning: true,
	user: {
		name: 'Moufid',
		age: 33
	}
});