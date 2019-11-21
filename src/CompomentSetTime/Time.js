import React from 'react'
const minOffset = 0;
const maxOffset = 60;
class Time extends React.Component {

constructor() {
    super();
        
    const thisYear = (new Date().getFullYear());
    const thisMonth = (new Date().getMonth()+1);
    const thisDay =  (new Date().getDay());
        this.state = {
          thisYear: thisYear,
          selectedYear: thisYear,

          thisMonth : thisMonth,
          selectedMonth : thisMonth,

          thisDay : thisDay,
          selectedDay : thisDay

        }
    }
    onHandleChange = (evt) => {
        // Handle Change Here
        //alert(evt.target.value);
        this.setState({ selectedYear: evt.target.value });

        //alert()
        this.setState({ selectedMonth: evt.target.value });
    };

    render() {

    const { thisYear, selectedYear } = this.state;
    const { thisMonth, selectedMonth } = this.state;
    const { thisDay, selectedDay } = this.state;

    const optionsYear = [];
    const optionsMonth = [];
    const optionsDay = [];
    
    for (let i = maxOffset; i > minOffset ; i--) {   
        const year = thisYear + i;
        optionsYear.push(<option value={year}>{year}</option>);
    }    

    for (let i = minOffset; i <= maxOffset; i++) {
        const n_year = thisYear - i;
        optionsYear.push(<option value={n_year}>{n_year}</option>);
    }

    for (let i = 0; i < 12 ;i--){
      const month = 1 - i;
      optionsMonth.push(<option value={month}>{month}</option>);  
    }

    for (let i = 0; i < 31; i++) {
        const day = 1 + i ;
        optionsDay.push(<option value={day}>{day}</option>)
    }

    return(
            
        <div className="col-sm-8">
                    <div className="form-group">
                        <select value={this.selectedYear} onChange={this.onHandleChange}>
                            <option>{this.state.selectedYear}</option>
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
                                <option>{this.state.selectedMonth}</option>
                                {optionsMonth}
                            </select>
                            <label>月</label>　
                            <select>
                                <option>{this.state.selectedDay}</option>
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
                                <option>{this.state.selectedDay}</option>
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