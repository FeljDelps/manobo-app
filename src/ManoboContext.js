import React from 'react';


const ManoboContext = React.createContext({
   clients:[],
   addClient: () => {} 
});

export default ManoboContext;