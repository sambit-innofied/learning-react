import { createContext, useState } from "react";

export const ConterContext = createContext(null);

export const CounterProvider = (props) => {
  return <ConterContext.Provider>
    {props.children}
    </ConterContext.Provider>;
};
