import React from 'react';
import moment from 'moment';

export class DataRow extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            input_1 : '',
            input_2 : '',
            input_3 : '',
            input_4 : '',
            input_6 : '',
            input_7 : '',
            input_8 : '',
            input_9 : '',
            inputPeople : '',
            inputWork: '',
            inputTimes : ''
            
        }
    }


    onCheckJapanese = (event) => {
        event.preventDefault();
        var target = event.target;
        var name = target.name;
        var value = target.value;

        var regex = /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g; 
        //var input = "input string"; 
        if(regex.test(value)) {
          console.log("Japanese characters found");
          console.log(value)
          this.setState({
            
            [name]: value

           });
        }
        else {
          alert('日本語で内容を書いてください');
          console.log("No Japanese characters");
          this.setState({
            [name]: '',
            
          })
        }
    }


    onhandleChange = (event) => {

        var target = event.target;
        var name = target.name;
        var value = target.value;

        const re = /^[0-9\b]+$/;
        var checkHour = moment(value,'HH').hour(value).isValid();
        var checkMin = moment(value,'mm').minute(value).isValid();

        const autoChangeTime = [0,1,2,3,4,5,6,7,8,9];

        //const itemChange = autoChangeTime.map((item,index) => {return item[index]});

        
        // console.log(itemChange);

        if(name === 'input_1' || name === 'input_3' || name === 'input_6' || name === 'input_8'){
            if (checkHour && (value === '' || re.test(value))) {
                
                this.setState({
                   [name]: value
                  });
               }else{
                   this.setState({
                       [name] : ''
                   })
               }
        }

        if(name === 'input_2' || name === 'input_4' || name === 'input_7' || name === 'input_9'){
            if (checkMin && (value === '' || re.test(value))) {
                this.setState({
                   [name]: value
                  });
               }else{
                   this.setState({
                       [name] : ''
                   })
               }
        }
    }

    render() {
        const {day,rowDay} = this.props;
        return (
            <tr key={day}>
                <td>{rowDay.get("date")}</td>
                <td>{rowDay.format("dd", rowDay.day())}</td>
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
                        value={this.state.input_3}
                    />
                </td>

                <td>
                    <input onChange={this.onhandleChange}
                        className="inputTimes"
                        type="text"
                        maxLength={2}
                        name="input_4"
                        value={this.state.input_4}
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
                        value={this.state.input_6}
                    />
                </td>

                <td>
                    <input onChange={this.onhandleChange}
                        className="inputTimes"
                        type="text"
                        maxLength={2}
                        name="input_7"
                        value={this.state.input_7}

                    />
                </td>

                <td>
                    <input onChange={this.onhandleChange}
                        className="inputTimes"
                        type="text"
                        maxLength={2}
                        name="input_8"
                        value={this.state.input_8}

                    />
                </td>

                <td>
                    <input onChange={this.onhandleChange}
                        className="inputTimes"
                        type="text"
                        maxLength={2}
                        name="input_9"
                        value={this.state.input_9}

                    />
                </td>

                <td>
                    <input name="inputPeople" className="inputTimes" type="file" maxLength={2} defaultValue={this.state.inputPeople}  />
                </td>
                <td>
                    <input onChange={this.onCheckJapanese} 
                           name='inputWork' 
                           className="inputWork" 
                           type="text" 
                           maxLength={20} 
                           value={this.state.inputWork} />
                </td>
                <td>
                    <input onChange={this.onCheckJapanese} 
                           name='inputTimes' 
                           className="inputTimes" 
                           type="text" maxLength={4} 
                           value={this.state.inputTimes} />
                </td>

            </tr>
        );
    }

}