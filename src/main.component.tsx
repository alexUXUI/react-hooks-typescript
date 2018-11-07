
import * as React from "react";
import { ComponentA } from './a.component';
import { ComponentB } from './b.component';

const App: React.SFC = (): JSX.Element => {
  return (
    <>
      <ComponentA />    
      <ComponentB />
    </>
  );
};

export default App;
