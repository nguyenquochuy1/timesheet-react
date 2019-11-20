import React from 'react'
const minOffset = 0;
const maxOffset = 60;
class Time extends React.Component {

    

    constructor() {
        super();
        
        const thisYear = (new Date().getFullYear());
        const thisMonth = 12;
        const thisDay = (new Date().getDay());
        
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

    for (let i = 0; i < thisMonth ;i++){
      const month = thisMonth - i;
      optionsMonth.push(<option value={month}>{month}</option>);  
    }

    for (let i = 0; i < 30; i++) {
        const day = thisDay + i ;
        optionsDay.push(<option value={day}>{day}</option>)
    }

    return(
            
        <div className="col-sm-8">
                    <div className="form-group">
                        <select value={this.selectedYear} onChange={this.onHandleChange}>
                            <option></option>
                            {optionsYear}
                        </select>
                        <label>年</label>

                        <select>
                            <option>Month</option>
                            {optionsMonth}
                        </select>

                        <label>月分</label>
                    </div>
                    <div className="inline col-sm-12">
                        <div className="sltFirstMonthDay col-sm-6">
                            <select>
                                <option>Month</option>
                                {optionsMonth}
                            </select>
                            <label>月</label>　
                            <select>
                                <option>Day</option>
                                {optionsDay}
                            {/* <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                            <option value={13}>13</option>
                            <option value={14}>14</option>
                            <option value={15}>15</option>
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                            <option value={18}>18</option>
                            <option value={19}>19</option>
                            <option value={20}>20</option>
                            <option value={21}>21</option>
                            <option value={22}>22</option>
                            <option value={23}>23</option>
                            <option value={24}>24</option>
                            <option value={25}>25</option>
                            <option value={26}>26</option>
                            <option value={27}>27</option>
                            <option value={28}>28</option>
                            <option value={29}>29</option>
                            <option value={30}>30</option>
                            <option value={31}>31</option> */}
                            </select>
                            <label>日 ～ </label>
                        </div>
                        <div className="sltSecondMonthDay col-sm-6">
                            <select>
                            <option>Month</option>
                            <option value="January">January</option>
                            <option value="Febuary">Febuary</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                            </select>
                            <label>月</label>　
                            <select>
                            <option>Day</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                            <option value={13}>13</option>
                            <option value={14}>14</option>
                            <option value={15}>15</option>
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                            <option value={18}>18</option>
                            <option value={19}>19</option>
                            <option value={20}>20</option>
                            <option value={21}>21</option>
                            <option value={22}>22</option>
                            <option value={23}>23</option>
                            <option value={24}>24</option>
                            <option value={25}>25</option>
                            <option value={26}>26</option>
                            <option value={27}>27</option>
                            <option value={28}>28</option>
                            <option value={29}>29</option>
                            <option value={30}>30</option>
                            <option value={31}>31</option>
                            </select>
                            <label>日</label>
                        </div>
                </div>
          </div>
            
        )
    }
} 

export default Time;