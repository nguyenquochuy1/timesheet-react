import React from 'react';
import TableTime2 from '../CompomentTableTime2/TableTime2';

import moment from 'moment';

import 'moment/locale/ja';

class TableTime extends React.Component {


  // static defaultProps = {
  //   task: {}
  // }
  
  constructor(props){
    super(props);
    //const { task } = this.props;
    var {status} = this.props;
    this.state = {
      // type1 : "text",
      // type2 : "file",
      status : status,
      startHour : '',
      startMin : '',
      input_1: '',
      input_2 : ''
    }
  }

  countOfEndDay(thisYear,thisMonth){
    const getendDay = new Date(thisYear,thisMonth,0);
    const endDay = getendDay.getDate();
    return endDay;
  }

  // checkTime(value){
  //   var parseNum = parseInt(value); 
    
  //   var checkHour = moment(value,'HH').hour(parseNum).isValid();
  //   var checkMin = moment(value,'mm').minute(parseNum).isValid();
  //   // console.log(checkHour  , checkMin);
  // }

  // isNumberKey = (evt,value) =>{
  //   var charCode = (value) ? value : evt.keyCode
  //   if (charCode > 31 && (charCode < 48 || charCode > 57))
  //       return false;
  //   return true;
  // }


  // checkOnlyNumber(value){
  //   var letter=/^[0-9]+$/;
  //   if(value.match(letter)){
  //     console.log('ko phai so');
  //     return null;
      
  //   }
  //   console.log('la so')
    // this.setState({
    //   [name]: value
    // });
  //}
  // onKeyPress = (event) => {
  //   const keyCode = event.keyCode || event.which;
  //   const keyValue = String.fromCharCode(keyCode);
  //    if (/\+|-/.test(keyValue))
  //      event.preventDefault();
  //  }


  onhandleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const re = /^[0-9\b]+$/;
      if (value === '' || re.test(value)) {
         this.setState({
            [name]: value

        })
      }
    
  }

  // s4(){
  //   return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1); //floor la ham lam tron chu so.
  // }
  // generateID(){
  //   return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +this.s4() + '-' + 
  //   this.s4() + this.s4()  +this.s4() ;
  // }

  onhandleClick = (data) => {
    data.preventDefault();
    //this.props.onSubmit(this.state);   
    var {name} = this.state;
    //name.push(data);
    this.setState({
      name : data  // new : this.state.old kieu nhu update task
    });
    console.log(name);
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
        let startDay = 21;
        let endDay = 20;
        var dataRow = [];
        // var dataCol = [];

        var hourTimeStart = 9; // start hour work
        var hourTimeEnd = 17;   //end hour work

        var minTimeStart = 0; 
        var minTimeEnd = 45;
    
        
        let startDateTime = moment([currentYear, currentMonth, startDay,hourTimeStart,minTimeStart]).unix();
         //console.log(moment().format("HH",startDateTime));
        let endDateTime = moment([nextMonthYear, nextMonth, endDay,hourTimeEnd,minTimeEnd]).unix();
         //console.log(moment().format("mm",endDateTime));
        // for (let index = 1; index < 10; index++) {
        //   dataCol.push(
        //         <td key={index}>
        //           <input onChange={this.onhandleChange} 
        //                  className="inputTimes" 
        //                  type="text" 
        //                  maxLength={2} 
        //                  name={`input_${index}`} 

        //                   />
        //         </td>
        //         );
        //         //console.log(index);
        // }

        

        for (let day = startDateTime; 
            day <= endDateTime; 
            day= moment.unix(day).add(1,"day").unix()) 
          {
            let rowDay = moment.unix(day);
            var{startHour,name} = this.state;
            //var inputName = this.generateID();
            dataRow.push(
            <tr key={day}>

              <td>{rowDay.get("date")}</td>
              <td>{rowDay.format("dd",rowDay.day())}</td>

              {/* {dataCol} */}

                <td>
                  <input onChange={this.onhandleChange} 
                         className="inputTimes" 
                         type="text" 
                         maxLength={2} 
                         name='input_1'
                         value={this.state.input_1}
                         
                          />
                </td>

                <td>
                  <input onChange={this.onhandleChange} 
                         className="inputTimes" 
                         type="text" 
                         maxLength={2} 
                         name="input_2"
                         value={this.state.input_2}
                          />
                </td>

                <td>
                  <input onChange={this.onhandleChange} 
                         className="inputTimes" 
                         type="text" 
                         maxLength={2} 
                         name="input_3" 

                          />
                </td>

                <td>
                  <input onChange={this.onhandleChange} 
                         className="inputTimes" 
                         type="text" 
                         maxLength={2} 
                         name="input_4" 

                          />
                </td>

                <td>
                  <input onChange={this.onhandleChange} 
                         className="inputTimes" 
                         type="text" 
                         maxLength={2} 
                         name="input_5" 
                         readOnly
                          />
                </td>

                <td>
                  <input onChange={this.onhandleChange} 
                         className="inputTimes" 
                         type="text" 
                         maxLength={2} 
                         name="input_6" 

                          />
                </td>

                <td>
                  <input onChange={this.onhandleChange} 
                         className="inputTimes" 
                         type="text" 
                         maxLength={2} 
                         name="input_7" 

                          />
                </td>

                <td>
                  <input onChange={this.onhandleChange} 
                         className="inputTimes" 
                         type="text" 
                         maxLength={2} 
                         name="input_8" 

                          />
                </td>

                <td>
                  <input onChange={this.onhandleChange} 
                         className="inputTimes" 
                         type="text" 
                         maxLength={2} 
                         name="input_9" 

                          />
                </td>

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

            <div className="btn-group">
                <button onClick={this.onhandleClick} type="button" className="btn btn-primary">Apple</button>
                <button type="button" className="btn btn-primary">Samsung</button>
                <button type="button" className="btn btn-primary">Sony</button>
            </div>

          </div>  
        )
    }
}
export default TableTime;





