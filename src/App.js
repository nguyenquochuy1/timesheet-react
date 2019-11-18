import React from 'react';

import './App.css';
import Title from './CompomentTitle/Title';
import Time from './CompomentSetTime/Time';
import InputInfor from './CompomentInput/InputInfor';
import TableTime from './CompomentTableTime/TableTime';
import Warning from './ComponentWarning/Warning';
      

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
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <p style={{width: 'max-content', border: '3px solid', fontSize: '20px', marginTop: '20%'}}><strong style={{padding : '10px'}}>締日翌日の午前までに所属長→社長→管理部</strong></p>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <p style={{fontSize: '40px'}}><strong>モラブ阪神工業株式会社</strong></p>
                <table className="table table-responsive newtable">
                  <tbody>
                    <tr>
                      <td style={{verticalAlign: 'middle'}} colSpan={5}>モラブ阪神工業(株)</td>
                    </tr>
                    <tr>
                      <td style={{verticalAlign: 'middle'}} colSpan={3}>関係部署印</td>
                      <td style={{width: '100px', verticalAlign: 'middle'}} colSpan={1} />
                      <td style={{verticalAlign: 'middle'}} colSpan={1}>所属長印</td>
                    </tr>
                    <tr>
                      <td style={{height: '70px', verticalAlign: 'middle'}} />
                      <td style={{height: '70px', verticalAlign: 'middle'}} />
                      <td style={{height: '70px', verticalAlign: 'middle'}} />
                      <td style={{height: '70px', verticalAlign: 'middle'}} />
                      <td style={{height: '70px', verticalAlign: 'middle'}} />
                    </tr>
                  </tbody>
                  </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  
      
    );
  }
}


       

export default App;
