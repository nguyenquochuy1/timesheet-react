import React from 'react';
import TableTime2 from '../CompomentTableTime2/TableTime2';

import moment from 'moment';

import 'moment/locale/ja';

import { DataRow } from './DataRow'
import TimeSheet from '../CompomentTimeSheet/TimeSheet';

class TableTime extends React.Component {


  constructor(props) {
    super(props);
    var { status } = this.props;
    this.state = {
  
      status: status,

    }
  }

  countOfEndDay(thisYear, thisMonth) {
    const getendDay = new Date(thisYear, thisMonth, 0);
    const endDay = getendDay.getDate();
    return endDay;
  }

  onClickPopup = () => {
    var newTimeSheet = new TimeSheet();
    var onTurnOnPopup = newTimeSheet.togglePopup();

    return onTurnOnPopup;

  }

  // checkTime(value){
  //   var parseNum = parseInt(value); 

  //   var checkHour = moment(value,'HH').hour(parseNum).isValid();
  //   var checkMin = moment(value,'mm').minute(parseNum).isValid();
  //   // console.log(checkHour  , checkMin);
  // }
  render() {

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
    

    var hourTimeStart = 9; // start hour work
    var hourTimeEnd = 17;   //end hour work

    var minTimeStart = 0;
    var minTimeEnd = 45;


    let startDateTime = moment([currentYear, currentMonth, startDay, hourTimeStart, minTimeStart]).unix();
    let endDateTime = moment([nextMonthYear, nextMonth, endDay, hourTimeEnd, minTimeEnd]).unix();
    

    for (let day = startDateTime;
      day <= endDateTime;
      day = moment.unix(day).add(1, "day").unix()) {
        
        let rowDay = moment.unix(day);
        //console.log(startDateTime, endDateTime);
        dataRow.push(
          <DataRow key={day} day={day} 
                   rowDay={rowDay}
                   currentYear={currentYear}
                   startDateTime={startDateTime}
                   endDateTime={endDateTime}
                   />
        );
      
    }

    return (

      <div>
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
                <td style={{ border: 'none', verticalAlign: 'middle' }}>勤怠管理者</td>
                <td style={{ verticalAlign: 'middle' }} colSpan={2}>備考</td>

              </tr>

              <tr>
                <td>日</td>
                <td>曜</td>
                <td style={{ width: '30px' }}>時</td>
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
                <td colSpan={2} rowSpan={2}><p style={{ margin: '0px', paddingTop: '20px' }}>当月</p><p>会計</p></td>
                <td>出勤日数</td>
                <td colSpan={2} style={{ textAlign: 'right' }}>日</td>
                <td colSpan={2}>時間外勤務</td>
                <td colSpan={3}><div style={{ display: 'inline-flex' }}><p>10</p><p>時間</p><p>10</p><p>分</p></div></td>
                <td>欠勤</td>
                <td style={{ textAlign: 'right' }}>日</td>
                <td>振休</td>
                <td style={{ textAlign: 'right' }}>日</td>
              </tr>

              <tr>
                <td>所定労働日数</td>
                <td colSpan={2} style={{ textAlign: 'right' }}>日</td>
                <td colSpan={2}>遅刻・早退</td>
                <td colSpan={3}><div style={{ display: 'inline-flex' }}><p>10</p><p>時間</p><p>10</p><p>分</p></div></td>
                <td>有給</td>
                <td style={{ textAlign: 'right' }}>日</td>
                <td>特休</td>
                <td style={{ textAlign: 'right' }}>日</td>
              </tr>

            </tbody>
          </table>

          <TableTime2 status={this.state.status} />
        </div>

        <div className="btn-group">
          <button onClick={this.onClickPopup} type="button" className="btn btn-primary">Apple</button> 
          <br/>
          <br/>
          <button type="button" className="btn btn-primary">Samsung</button>  
          <br/>
          <br/>
          <button type="button" className="btn btn-primary">Sony</button>
        </div>

      </div>
    )
  }
}
export default TableTime;





