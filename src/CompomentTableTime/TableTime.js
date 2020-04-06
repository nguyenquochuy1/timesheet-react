import React from 'react';
import TableTime2 from '../CompomentTableTime2/TableTime2';

import moment from 'moment';

import 'moment/locale/ja';

import { DataRow } from './DataRow';



class TableTime extends React.Component {

  

  constructor(props) {
    super(props);
    var { status  } = this.props;
    this.state = {
      status: status,
      // copyNode : '',
      dataPopup: props.dataPopup,
      dataWorkedDay : 0,
      dataWorkHourOverTime : 0,
      dataWorkMinOverTime : 0,

      totalHourOverTime : 0,
      totalMinOverTime : 0,
      overTimesHour: {}
    }
    this.myRef = React.createRef();
   
  }

  updateOverTimesHour = (day, value) =>{
    console.log(day,value)
    this.setState({
      overTimesHour: {
        [day]: value,
        ...this.state.overTimesHour // 
      }
    })
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  UNSAFE_componentWillReceiveProps (nextProps) {
    if(nextProps.dataPopup !== this.state.dataPopup){
      this.setState({
        dataPopup: nextProps.dataPopup
      })
    }
  }

  countOfEndDay(thisYear, thisMonth) {
    const getendDay = new Date(thisYear, thisMonth, 0);
    const endDay = getendDay.getDate();
    return endDay;
  }

  onClickPopup = (event) => {
    event.preventDefault();
    // var copyNode = this.myRefPopup.current.state.value;
    this.props.copyNode();
    // this.setState({
    //   copyNode : copyNode
    // });
  }
  

  copyNode = () => {
    var {dataPopup,dataWorkedDay} = this.state;
    var totalHourOverTime;
    var totalMinOverTime;
    var dataWorkedDay = 0;
    // var stateTotalHourOverTime = this.myRef.current.state.input_8;
    // var stateTotalMinOverTime = this.myRef.current.state.input_9;

    // totalHourOverTime += stateTotalHourOverTime;
    // totalMinOverTime += stateTotalMinOverTime;

    // this.setState({
    //   totalHourOverTime : totalHourOverTime,
    //   totalMinOverTime : totalMinOverTime
    // });
    // // console.log(dataPopup);

    // console.log(stateTotalHourOverTime , stateTotalMinOverTime);
    // console.log(node);

    //Check doi tuong co phai la doi tuong rong hay khong.
    function isEmpty(obj) {
      return Object.keys(obj).length === 0;
    }

    if(!isEmpty(dataPopup) && dataPopup.data1 !== '' ){
      var resultWorkDay = this.myRef.current.onCountWorkDay(); //lấy kết quả của hàm onCountWorkDay trong compoment DataRow 
      // var resultWorkOverTime = this.myRef.current.onCountWorkOverTime();
      this.setState({
        dataWorkedDay : resultWorkDay,
        // dataWorkOverTime : resultWorkOverTime
      });
    }else if(dataPopup.data1 === '' ){
      this.setState({
        dataWorkedDay : dataWorkedDay,
        dataWorkHourOverTime : totalHourOverTime,
        dataWorkMinOverTime  : totalMinOverTime
      });
    }


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
        dataRow.push(
          <DataRow key={day} 
                   day={day} 
                   rowDay={rowDay}
                   currentYear={currentYear}
                   startDateTime={startDateTime}
                   endDateTime={endDateTime}
                   dataPopup={this.state.dataPopup}
                   dataRow = {dataRow} //cai nồi gì đây, này e code hả?  dạ để truyển vào trong datarow ok kệ đi, code như shit
                   ref={this.myRef}
                   updateOverTimesHour={this.updateOverTimesHour}
                   />
        );
      
    }

    // let aaa = dataRow.map((itemRow,index) => {
    //   // if(itemRow.ref.current.state === null){
    //   //   return null;
    //   // }
    //   return itemRow;
    // });

    let totalHourLamthemgio = Object.values(this.state.overTimesHour).reduce((total, item) => {
      return total + item;
    },0)

    // console.log(aaa);

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
                <td colSpan={2} style={{ textAlign: 'right' }}><div style={{ display: 'inline-flex' }}><p>{this.state.dataWorkedDay}</p><p>日</p></div></td>
                <td colSpan={2}>時間外勤務</td>
                <td colSpan={3}><div style={{ display: 'inline-flex' }}><p>{totalHourLamthemgio}</p><p>時間</p><p>{this.state.dataWorkMinOverTime}</p><p>分</p></div></td>
                <td>欠勤</td>
                <td style={{ textAlign: 'right' }}>日</td>
                <td>振休</td>
                <td style={{ textAlign: 'right' }}>日</td>
              </tr>

              <tr>
                <td>所定労働日数</td>
                <td colSpan={2} style={{ textAlign: 'right' }}><p>{this.state.dataWorkedDay}日</p></td>
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
          <button onClick={this.copyNode} type="button" className="btn btn-primary">Samsung</button>  
          <br/>
          <br/>
          <button type="button" className="btn btn-primary">Sony</button>
        </div>

      </div>
    )
  }
}
export default TableTime;





