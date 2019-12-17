import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'todoist-clone-9468e.firebaseapp.com',
  databaseURL: 'https://todoist-clone-9468e.firebaseio.com',
  projectId: 'todoist-clone-9468e',
  storageBucket: 'todoist-clone-9468e.appspot.com',
  messagingSenderId: '878807275653',
  appId: '1:878807275653:web:f6aa10d34b24c4750ef1ec'
})

export default firebaseConfig
