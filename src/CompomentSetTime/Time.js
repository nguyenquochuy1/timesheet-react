import React from 'react'

const minOffset = 0;
const maxOffset = 60;
class Time extends React.Component {

constructor(prop) {
    super(prop);
    //const { taskTaskTime } = this.props;   
    const thisYear = (new Date().getFullYear());
    const thisMonth = (new Date().getMonth());
    //const selectedYear = thisYear ;
    
    const thisDay =  20;

        this.state = {
          thisYear: thisYear,
          //selectedYear: taskTaskTime,

          thisMonth : thisMonth,
          selectedMonth : thisMonth + 1 ,

          thisDay : thisDay,
          selectedDay : thisDay + 1 

        }
    }
    onHandleChange = (event) => {
        // Handle Change Here
        //alert(evt.target.value);
        //var target = event.target;
        //var name = target.name;
        //var value = target.value; 
        this.setState({ selectedYear: event.target.value });

        //alert()
        //this.setState({ selectedMonth: event.target.value });

        //this.setState({ selectedDay: evt.target.value});
    };

    

    // decisionOfDisplay(){
    //     if (endDay) {
            
    //     }else if(endDay){
            
    //     }else if(endDay){

    //     }else if(endDay){

    //     }
    // }

    render() {

    const { thisYear} = this.state;
    // const { thisMonth, selectedMonth } = this.state;
    // const { thisDay, selectedDay } = this.state;

    
    const optionsYear = [];
    const optionsMonth = [];
    const optionsDay = [];
    
    for (let i = maxOffset; i > minOffset ; i--) {   
        const year = thisYear + i;
        optionsYear.push(<option key={year} value={year}>{year}</option>);
    }    

    for (let i = minOffset; i <= maxOffset; i++) {
        const n_year = thisYear - i;
        optionsYear.push(<option key={n_year} value={n_year}>{n_year}</option>);
    }

    for (let i = 0; i <= 11 ;i++) {
        const month = 1  +  i; 
        optionsMonth.push(<option key={month} value={month}>{month}</option>);
         
    }

    for (let i = 0; i < 31; i++) {
        const day = 1 + i ;
        optionsDay.push(<option key={day} value={day}>{day}</option>)
    }

    return(
            
        <div className="col-sm-8">
                    <div className="form-group">
                        <select value={this.selectedYear} onChange={this.onHandleChange}>
                            <option>{this.state.thisYear}</option>
                            {optionsYear}
                        </select>
                        <label>年</label>

                        <select>
                            <option>{this.state.selectedMonth}</option>
                            {optionsMonth}
                        </select>

                        <label>月分</label>
                    </div>
                    <div className="inline col-sm-12">
                        <div className="sltFirstMonthDay col-sm-6">
                            <select>
                                <option>{this.state.thisMonth === 0 ? 12 : this.state.thisMonth}</option>
                                {optionsMonth}
                            </select>
                            <label>月</label>　
                            <select>
                                <option>{this.state.thisDay}</option>
                                {optionsDay}
                            </select>
                            <label>日 ～ </label>
                        </div>
                        <div className="sltSecondMonthDay col-sm-6">
                            <select>
                                <option>{this.state.selectedMonth}</option>
                                {optionsMonth}
                            </select>
                            <label>月</label>　
                            <select>
                                <option >{this.state.selectedDay}</option>
                                {optionsDay}
                            </select>
                            <label>日</label>
                        </div>
                </div>
          </div>
            
        )
    }
} 

export default Time;