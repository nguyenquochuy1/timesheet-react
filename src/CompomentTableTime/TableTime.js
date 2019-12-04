import React from 'react';
import SettingTableTime from '../CompomentTableSettingTime/SettingTableTime';

import moment, { locale } from 'moment';

import 'moment/locale/ja';

class TableTime extends React.Component {
  constructor(props){

    super(props);
    this.state = {
      type1 : "text",
      type2 : "file"
    }
  }

  countOfEndDay(thisYear,thisMonth){
    const getendDay = new Date(thisYear,thisMonth,0);
    const endDay = getendDay.getDate();
    return endDay;
  }

   
    render() {

        const optionsDay = [];


        // Thích bắt đầu từ tháng nào thì sửa số trong hàm dưới này
        let currentMonthDateYear = moment();
        ////

        let currentMonth = currentMonthDateYear.get("month");
        let currentYear = currentMonthDateYear.get("year");

        let nextMonthDateYear = currentMonthDateYear.add(1, "month");
        let nextMonth = nextMonthDateYear.get("month");
        let nextMonthYear = nextMonthDateYear.get("year");
        let startDay = 21;
        let endDay = 20;
        var dataRow = [];
        var dataCol = [];
    
        
        let startDateTime = moment([currentYear, currentMonth, startDay]).unix();
        let endDateTime = moment([nextMonthYear, nextMonth, endDay]).unix();

        // for (let i = 20; i < this.countOfEndDay; i++) {
        //   const day = 1 + i ;
        //   optionsDay.push(<td>{day}</td>);
          
        // }


        for (let index = 1; index < 10; index++) {
          
          dataCol.push(
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                );
        }

        

        for (let day = startDateTime; 
            day <= endDateTime; 
            day= moment.unix(day).add(1,"day").unix()) 
          {
            let rowDay = moment.unix(day);
           
            dataRow.push(
            <tr>

              <td>{rowDay.get("date")}</td>
              <td>{rowDay.format("dd",rowDay.day())}</td>
              
              {dataCol}
              <td>
                  <input className="inputTimes" type="file" maxLength={2} />
              </td>
              <td>
                  <input className="inputWork" type="text" maxLength={20} />
              </td>
              <td>
                  <input className="inputTimes" type="text" maxLength={2} />  
              </td>

            </tr>
            );          
          }
        // let elementOfdataRow = dataRow.map((data,index,dataRow) => {
        //     console.log(data);
        //     return data;
        // });

        //console.log(optionsDay);

        return(

            <div className="matchTable">
              <table id="tablecss" className="table table-responsive newtable">
            <tbody>
              <tr className="titlteTable">
                <td colSpan={2}>※就業日</td>
                <td colSpan={2}>※始業時刻</td>
                <td colSpan={2}>※終業時刻</td>
                <td id="noBorderBottom">※休憩</td>
                <td colSpan={2}>時間内時間数</td>
                <td colSpan={2}>時間外時間数
                  <br />
                  休日時間数
                </td>
                <td style={{border: 'none', verticalAlign: 'middle'}}>勤怠管理者</td>
                <td style={{verticalAlign: 'middle'}} colSpan={2}>備考</td>

              </tr>
              
              <tr>
                <td>日</td>
                <td>曜</td>
                <td style={{width: '30px'}}>時</td>
                <td>分</td>
                <td>時</td>
                <td>分</td>
                <td id="noBorderTop">時間(分)</td>
                <td>時</td>
                <td>分</td>
                <td>時</td>
                <td>分</td>
                <td>確認印</td>
                <td>業務内容</td>
                <td>勤怠状況</td>
                <td style={{borderRight: 'none', borderTop:'none'}} />
                <td style={{borderLeft: 'none', borderTop:'none'}} />
              </tr>

              
                
                {dataRow}

              <tr>
                <td colSpan={2} rowSpan={2}><p style={{margin: '0px', paddingTop : '20px'}}>当月</p><p>会計</p></td>
                <td>出勤日数</td>
                <td colSpan={2} style={{textAlign: 'right'}}>日</td>
                <td colSpan={2}>時間外勤務</td>
                <td colSpan={3}><div style={{display: 'inline-flex'}}><p>10</p><p>時間</p><p>10</p><p>分</p></div></td>
                <td>欠勤</td>
                <td style={{textAlign: 'right'}}>日</td>
                <td>振休</td>
                <td style={{textAlign: 'right'}}>日</td>    
              </tr>

              <tr>
                <td>所定労働日数</td>
                <td colSpan={2} style={{textAlign: 'right'}}>日</td>
                <td colSpan={2}>遅刻・早退</td>
                <td colSpan={3}><div style={{display: 'inline-flex'}}><p>10</p><p>時間</p><p>10</p><p>分</p></div></td>
                <td>有給</td>
                <td style={{textAlign: 'right'}}>日</td>
                <td>特休</td>
                <td style={{textAlign: 'right'}}>日</td>
              </tr>

            </tbody>
          </table>
          
          
          <table id="tablecss2" className="table table-responsive newtable">
            <tbody>
              <tr><td style={{paddingTop: '30px', fontSize: '20px', verticalAlign: 'middle', border : 'none', borderRight: '2px solid'}} colSpan={4}>就業時間</td></tr>
              <tr>
                  <td style={{borderTop: '2px solid'}}>平日</td>
                  <SettingTableTime nameOfClass = "breakTime" />
              </tr>

              <tr>
                  <td rowSpan={6} style={{padding: '60px 0px 60px 0px'}}><p>休</p><p>憩</p><p>時</p><p>間</p></td>
                  <SettingTableTime nameOfClass="borderLine"/>
              </tr>
              <tr>
                  <SettingTableTime nameOfClass="borderLine"/>
              </tr>
              <tr>
                  <SettingTableTime nameOfClass="borderLine"/>
              </tr>
              <tr>
                  <SettingTableTime nameOfClass="borderLine"/>
              </tr>
              <tr>
                  <SettingTableTime nameOfClass="borderLine"/>
              </tr>
              <tr>
                  <SettingTableTime nameOfClass="borderLine"/>
                  
              </tr>

              <tr>
                <td>平日実働時間</td>
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

              <td >
                    <textarea  name="txta"  cols={40} rows={33} defaultValue={""} />
              </td>

            </tbody>

          </table>
        </div>
            
        )
    }
}
export default TableTime;





