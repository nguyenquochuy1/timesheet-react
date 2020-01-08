import React from 'react';


const minOffset = 0;
const maxOfHours = 24;
const maxOfMin = 60;
class SettingTableTime extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            checkNameOfClass : "breakTime"
        }
        
    }

    render(){

        const checkName = this.state.checkNameOfClass;
        const optionsHours = [];
        const optionsMins = [];

        for (let i = minOffset; i < maxOfHours ;i++) {
          const hour = 1  +  i;
          optionsHours.push(<option key={hour} value={hour}>{hour}</option>);  
        }

        for (let i = minOffset; i < maxOfMin ;i++) {
          const min = 0  +  i;
          optionsMins.push(<option key={min} value={min}>{min}</option>);  
        }

        return(
              <td className={(checkName===this.props.nameOfClass) ? checkName : this.props.nameOfClass}>
                  <select>
                    <option>hour</option>
                    {optionsHours}
                  </select>
                  <label>:</label>
                  <select>
                    <option>min</option>
                    {optionsMins}
                  </select>
                  <label>～</label>
                  <select>
                    <option>hour</option>
                    {optionsHours}
                  </select>
                  <label>:</label>
                  <select>
                    <option>min</option>
                    {optionsMins}
                  </select>
            </td>

        );
    }
}

export default SettingTableTime;