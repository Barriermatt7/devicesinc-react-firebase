import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App';

// the Firebase module (folder) provides a Firebase instance to the entire application 
import Firebase, { FirebaseContext } from './components/Firebase';

// create the Firebase instance with the Firebase class and pass it as value prop to the React’s Context:
ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root'),
    );

serviceWorker.unregister();
