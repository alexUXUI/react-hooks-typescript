
import * as React from "react";
import { ComponentA } from './a.component';
import { ComponentB } from './b.component';
import OldSchoolComponent from './oldSchool.component';

const App: React.SFC = (): JSX.Element => {
  return (
    <>
      <OldSchoolComponent />
      <ComponentA />    
      <ComponentB />
    </>
  );
};

export default App;
