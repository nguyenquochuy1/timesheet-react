import React from 'react';

import './App.css';
import Title from './CompomentTitle/Title';
import Time from './CompomentSetTime/Time';
import InputInfor from './CompomentInput/InputInfor';
import TableTime from './CompomentTableTime/TableTime';
import Warning from './ComponentWarning/Warning';
import ProsessingTest from './CompomentProssesTest/ProsessingTest';
import TableAgree from './CompomentTableAgreement/TableAgree';
      

class App extends React.Component{


  render() {
    return (
      <div className="allPage">
        <div className="container-fluid newstyle">
            <Title/>
            <div className="container">
              <div className="row">
                <Time/>
                <InputInfor/>
                <TableTime/>
                <Warning/>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <ProsessingTest/>
                  <TableAgree/>
                </div>
              </div>
            </div>
          </div>
      </div>
  
      
    );
  }
}
export default App;
