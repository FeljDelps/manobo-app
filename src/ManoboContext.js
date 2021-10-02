import React from 'react';


const ManoboContext = React.createContext({
   leads:[],
   addLead: () => {} 
});

export default ManoboContext;