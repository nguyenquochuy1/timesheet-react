import React from 'react';
import TableTime2 from '../CompomentTableTime2/TableTime2';

import moment from 'moment';

import 'moment/locale/ja';
import Chance from 'chancejs';

class TableTime extends React.Component {
  constructor(props){
    super(props);
    var {status} = this.props;
    this.state = {
      // type1 : "text",
      // type2 : "file",
      status : status,
      time : []
    }
  }

  countOfEndDay(thisYear,thisMonth){
    const getendDay = new Date(thisYear,thisMonth,0);
    const endDay = getendDay.getDate();
    return endDay;
  }

  onChange = (event,callback) => {
    var target = event.target;
    //var id = target.id;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]:value
    });
    
    console.log(name);
    console.log(value);
    

  }

  

  // setInputFilter(textbox, function(value) {
  //   return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 500);
  // });
  




  // s4() {
  //   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); //floor la ham lam tron chu so.
  // }

  // generateID() {
    
  //   return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
  //     this.s4() + this.s4() + this.s4();
      

  // }

    // generateID(){
    //   const chance = new Chance();
    //   const resultChance =  chance.string(); // "x(gAy#yo0^"
    //   return resultChance;
    //   //console.log(chance.string());
    //   //return result;
    // }

   
    render() {

        // const optionsDay = [];


        // Thích bắt đầu từ tháng nào thì sửa số trong hàm dưới này
        let currentMonthDateYear = moment();
        ////

        //console.log(currentMonthDateYear);

        let currentMonth = currentMonthDateYear.get("month");
        let currentYear = currentMonthDateYear.get("year");

        let nextMonthDateYear = currentMonthDateYear.add(1, "month");
        let nextMonth = nextMonthDateYear.get("month");
        let nextMonthYear = nextMonthDateYear.get("year");
        let startDay = 21;
        let endDay = 20;
        var dataRow = [];
        var dataCol = [];

        var hourTimeStart = 9; // start hour work
        var hourTimeEnd = 17;   //end hour work

        var minTimeStart = 0; 
        var minTimeEnd = 45;
    
        
        let startDateTime = moment([currentYear, currentMonth, startDay,hourTimeStart,minTimeStart]).unix();
         //console.log(moment().format("HH",startDateTime));
        let endDateTime = moment([nextMonthYear, nextMonth, endDay,hourTimeEnd,minTimeEnd]).unix();
         //console.log(moment().format("mm",endDateTime));
        for (let index = 1; index < 10; index++) {
          var {time} = this.state;
          dataCol.push(
                <td key={index}>
                  <input onChange={this.onChange} 
                         className="inputTimes" 
                         type="text" 
                         maxLength={2} 
                         name='time'
                         value={time}
                          />
                </td>
                );
                //console.log(index);
        }

        

        for (let day = startDateTime; 
            day <= endDateTime; 
            day= moment.unix(day).add(1,"day").unix()) 
          {
            let rowDay = moment.unix(day);
           
            dataRow.push(
            <tr key={day}>

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
          
          
          <TableTime2 status = {this.state.status}/>

        </div>
            
        )
    }
}
export default TableTime;





