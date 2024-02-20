import React, {useContext, useState, createContext} from 'react';

export const Appcontext = createContext();
export const Appprovider = props => {
  const [islogin, setIsLogin] = useState(false);
  const [produce, setProduce] = useState([]);
  const [id, setId] = useState([]);

  return (
    <Appcontext.Provider
      value={{
        islogin,
        setIsLogin,
        produce,
        setProduce,
        id,
        setId,
      }}>
      {props.children}
    </Appcontext.Provider>
  );
};
