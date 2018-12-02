// Reacts Context API allows A firebase instance once at the top of the component hierarchy.
import React from 'react';

// createContext() function creates two components.  FirebaseContext.Provider provides one Firebase instance at top of comp tree.
// FirebaseContext.Consumer component used to retrieve firebase instance if needed. 

const FirebaseContext = React.createContext(null);
//  implement this higher-order component
export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );

export default FirebaseContext;