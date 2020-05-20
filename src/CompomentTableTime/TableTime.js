import React from 'react';
import TableTime2 from '../CompomentTableTime2/TableTime2';

import moment from 'moment';

import 'moment/locale/ja';

import { DataRow } from './DataRow';



class TableTime extends React.Component {

  constructor(props) {
    super(props);
    var { status, dataPopup } = this.props;
    this.state = {
      status: status,
      dataPopup: dataPopup,
      dataWorkedDay: 0,
      overTimesHour: {},
      overTimesMin: {},
      totalDayWorked : {},
      fastTimeHour : {},
      fastTimeMin : {}
      //aaa : 0
    }
    this.myRef = React.createRef();
  }

  onCheckAnNum(input){
    // var hourStart,minStart,hourEnd,minEnd;
    if(!!input){
        let number = parseInt(input);
        if(Number.isInteger(number)){
            return true; // is a number
        }else{
            return false; // is not a number
        }
    }else{
        return false;
    }  
    
}

  updateOverTimesHour = (day, value, onCheckSatSun) => {
    if(this.props.dataPopup.data1 === ''){
      console.log('aaa');
      return null;
    }else{
      setTimeout(() => {
        
        if(this.onCheckAnNum(value) && !onCheckSatSun){
          this.setState({
            overTimesHour: {
              ...this.state.overTimesHour, // update đối tượng bằng dấu chấm ... -> giá trị day: value sẽ update
              [day]: value,
            }
          },() => console.log(day,value,onCheckSatSun));
        }
      },1000);
    }
  }

  updateOverTimesMin = (day, value , onCheckSatSun) => {
    if(!this.onCheckAnNum(value)){
      //console.log('aaaa');
      return null;
    }else{
      setTimeout(() => {
        if(this.onCheckAnNum(value) && !onCheckSatSun){
          this.setState({
            overTimesMin: {
              ...this.state.overTimesMin, // update đối tượng bằng dấu chấm ... -> giá trị day: value sẽ update
              [day]: value,
            }
          });
        }
      },1000);
    }    
  }


  updateFastTimeHour = (day, value, onCheckSatSun) => {
    if(!this.onCheckAnNum(value)){
      return null;
    }else{
      setTimeout(() => {
      
        if(value !== '' && !onCheckSatSun){
          this.setState({
            fastTimeHour: {
              ...this.state.fastTimeHour, // update đối tượng bằng dấu chấm ... -> giá trị day: value sẽ update
              [day]: value,
            }
          },() => console.log(day,value,onCheckSatSun));
        }
      },1000);
    }
  }

  updateFastTimeMin = (day, value, onCheckSatSun) => {
    if(!this.onCheckAnNum(value)){
      return null;
    }else{
      setTimeout(() => {
      
        if(value !== '' && !onCheckSatSun){
          this.setState({
            fastTimeMin: {
              ...this.state.fastTimeMin, // update đối tượng bằng dấu chấm ... -> giá trị day: value sẽ update
              [day]: value,
            }
          },() => console.log(day,value,onCheckSatSun));
        }
      },1000);
    }
  }

  // updateOverTimesMin = (day, value) => {
  //   //console.log(day,value);
  //   if(value !== ''){
  //     this.setState((prevState) => ({
  //       overTimesMin: {
  //         ...this.state.overTimesMin = prevState  , // update đối tượng bằng dấu chấm ... -> giá trị day: value sẽ update
  //         [day]: value,
  //       }
  //     }));
  //   }
  // }

  // updateOverTimesHour = (day, value) => {
  //   console.log(day,value);
  //   if(value !== ''){
  //     this.setState({
  //       overTimesHour: {
  //         ...this.state.overTimesHour, // update đối tượng bằng dấu chấm ... -> giá trị day: value sẽ update
  //         [day]: value,
  //       }
  //     },() => {this.setState({
  //       overTimesHour: {
  //         ...this.state.overTimesHour, // update đối tượng bằng dấu chấm ... -> giá trị day: value sẽ update
  //         [day]: value,
  //       }
  //     })});
  //   }
  // }

  updateTotalDayWorked = (day , value) => {
    //console.log(day,value);
    if(value !== ''){
      setTimeout(() => {
        this.setState({
          ...this.state.totalDayWorked,
          [day]: value,
          
        }); 
      });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.dataPopup !== this.state.dataPopup) {
      this.setState(
        {
          dataPopup: nextProps.dataPopup
        },
        () => {
          this.setState({
            dataPopup: {}
          },);
        }
      );
    }
    //console.log(nextProps.dataPopup);
    // reset all  当月 会計
    if(nextProps.dataPopup.data1 === ''){
          this.setState({
            dataWorkedDay: 0,
            overTimesHour: 0,
            overTimesMin: 0
      });
    }
  }

  countOfEndDay(thisYear, thisMonth) {
    const getendDay = new Date(thisYear, thisMonth, 0);
    const endDay = getendDay.getDate();
    return endDay;
  }

  onClickPopup = (event) => {
    event.preventDefault();
    this.props.togglePopup();
    console.log(this.props.togglePopup());
    //if()
  }

  onSumDayWorked = () => {
    var resultWorkDay = this.myRef.current.onCountWorkDay(); //lấy kết quả của hàm onCountWorkDay trong compoment DataRow 
    //console.log(aaa);  
      this.setState({
        dataWorkedDay: resultWorkDay,
      });
  }
  
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

    let startDay = 21; // ngay 21 cua thang nay 
    let endDay = 20;   // ngay 20 cua thang sau

    // let startDay = 1;
    // let endDay = 30;   //render 2 thang liền nhau

    var dataRow = [];

    var hourTimeStart = 9; // start hour work
    var hourTimeEnd = 17;   //end hour work

    var minTimeStart = 0;
    var minTimeEnd = 45;


    let startDateTime = moment([currentYear, currentMonth, startDay, hourTimeStart, minTimeStart]).unix();
    let endDateTime = moment([nextMonthYear, nextMonth, endDay, hourTimeEnd, minTimeEnd]).unix();

    // console.log(startDateTime - endDateTime);

    for (let day = startDateTime;
      day <= endDateTime;
      day = moment.unix(day).add(1, "day").unix()) {

      let rowDay = moment.unix(day);
      //console.log(startDateTime, endDateTime);
      let dataRowLength = dataRow.length + 1;

      dataRow.push(
        <DataRow key={day}
          day={day}
          rowDay={rowDay}
          currentYear={currentYear}
          startDateTime={startDateTime}
          endDateTime={endDateTime}
          dataPopup={this.state.dataPopup}
          dataRow={dataRow}
          dataRowLength={dataRowLength}
          ref={this.myRef}
          updateOverTimesHour={this.updateOverTimesHour}
          updateOverTimesMin={this.updateOverTimesMin}
          updateTotalDayWorked = {this.updateTotalDayWorked}
          updateFastTimeHour = {this.updateFastTimeHour}
          updateFastTimeMin = {this.updateFastTimeMin}
          
        />
      );
    }

    let totalDayWorked2 =  Object.values(this.state.totalDayWorked).reduce((total, item)=>{
      console.log(total,item);
      return total + item;
    },0);

    let totalHourLamthemgio = Object.values(this.state.overTimesHour).reduce((total, item) => {
      return total + item;
    }, 0);

    let totalMinLamthemgio = Object.values(this.state.overTimesMin).reduce((total, item) => {
      return total + item;
    }, 0);

    totalHourLamthemgio += Math.floor(totalMinLamthemgio / 60)
    totalMinLamthemgio = totalMinLamthemgio % 60

    let totalHourVeSom = Object.values(this.state.fastTimeHour).reduce((total, item) => {
      return total + item;
    }, 0);

    let totalMinVeSom = Object.values(this.state.fastTimeMin).reduce((total, item) => {
      return total + item;
    }, 0);

    totalHourVeSom += Math.floor(totalMinVeSom / 60)
    totalMinVeSom = totalMinVeSom % 60
    

    //console.log(this.state.overTimesHour);

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
                <td colSpan={2} style={{ textAlign: 'right' }}><div style={{ display: 'inline-flex' }}><p>{totalDayWorked2}</p><p>日</p></div></td>
                <td colSpan={2}>時間外勤務</td>
                <td colSpan={3}><div style={{ display: 'inline-flex' }}><p>{totalHourLamthemgio}</p><p>時間</p><p>{totalMinLamthemgio}</p><p>分</p></div></td>
                <td>欠勤</td>
                <td style={{ textAlign: 'right' }}>{0} 日</td>
                <td>振休</td>
                <td style={{ textAlign: 'right' }}>{0} 日</td>
              </tr>

              <tr>
                <td>所定労働日数</td>
                <td colSpan={2} style={{ textAlign: 'right' }}><p>{this.state.dataWorkedDay}日</p></td>
                <td colSpan={2}>遅刻・早退</td>
                <td colSpan={3}><div style={{ display: 'inline-flex' }}><p>{totalHourVeSom}</p><p>時間</p><p>{totalMinVeSom}</p><p>分</p></div></td>
                <td>有給</td>
                <td style={{ textAlign: 'right' }}>{0} 日</td>
                <td>特休</td>
                <td style={{ textAlign: 'right' }}>{0} 日</td>
              </tr>

            </tbody>
          </table>

          <TableTime2 status={this.state.status} />
        </div>

        <div className="btn-group">
          <button onClick={this.onClickPopup} type="button" className="btn btn-primary">Apple</button>
          <br />
          <br />
          <button onClick={this.onSumDayWorked} type="button" className="btn btn-primary">Samsung</button>
          <br />
          <br />
          <button type="button" className="btn btn-primary">Sony</button>
        </div>

      </div>
    )
  }
}
export default TableTime;





