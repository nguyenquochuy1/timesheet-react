import React from 'react';
import SettingTableTime from '../CompomentTableSettingTime/SettingTableTime';

class TableTime2  extends React.Component {
    constructor(props) {
        super(props);
        var {status} = this.props;
        this.state = { 
            status : status
        }
    }
    render() {
        var {status} = this.state;
        if(status === false){
            return false;
        }else{
            console.log(status);
            return (
            <table id="tablecss2" className="table table-responsive newtable">
            <tbody>
               <tr>
                <td style={{fontSize: '20px', verticalAlign: 'middle',paddingTop:'11px'}} colSpan={4}>就業時間</td>
              </tr>
               <tr>
                  <td style={{borderTop: '2px solid'}}>平日</td>
                  <SettingTableTime nameOfClass = "breakTime" />
               </tr>

              <tr>
                  <td rowSpan={1} style={{border:'none'}}><p>休憩時間</p></td>
                  
                  <SettingTableTime nameOfClass="borderLine"/>
                  <SettingTableTime nameOfClass="borderLine"/>
                  <SettingTableTime nameOfClass="borderLine"/>
                  <SettingTableTime nameOfClass="borderLine"/>
                  <SettingTableTime nameOfClass="borderLine"/>
                  <SettingTableTime nameOfClass="borderLine"/>

              </tr>

              <tr>

                <td style={{borderTop:'2px solid'}}>平日実働時間</td>
                <td><div style={{display: 'inline-flex'}}><p>7</p><p>時間</p><p>45</p><p>分</p></div></td>

              </tr>

              <tr>

                <td>休日実働時間</td>
                <td><div style={{display: 'inline-flex'}}><p>7</p><p>時間</p><p>45</p><p>分</p></div></td>

              </tr>

              <tr>

                <td colSpan={2}>所定休日</td>

              </tr>

              <tr>

                <td colSpan={2} >土曜日・ 日曜日・祝祭日</td>

              </tr>
              
              <tr>

                <td colSpan={2}>時間外勤務時間</td>

              </tr>

              <tr>

                <td>平日</td>
                <td><div style={{display: 'inline-flex'}}><p>実働</p><p>8</p><p>時間以上</p></div></td>

              </tr>

              <tr>

                <td>割増単位</td>
                <td><div style={{display: 'inline-flex'}}><p>30</p><p>分</p></div></td>

              </tr>

              <tr>

                <td colSpan={2}>控除</td>

              </tr>

              <tr>
                <td>控除単位</td>
                <td><div style={{display: 'inline-flex'}}><p>30</p><p>分</p></div></td>

              </tr>

              <tr>
                <td className="arroundText" style={{borderRight:'2px solid'}} colSpan={2}>
                  <textarea className="txtInputComment" defaultValue="aaa"></textarea>
                </td>
              </tr>
              

            </tbody>

          </table>
        );
        } 
        
    }
}
 
export default TableTime2 ;