import React from 'react';
import moment from 'moment';
export class DataRow extends React.Component {
    constructor(props){
        super(props);
        // const {input_1, input_2, input_3, }
        this.state ={
            input_1 : '',
            input_2 : '',
            input_3 : '',
            input_4 : '',
            input_6 : '',
            input_7 : '',
            input_8 : '',
            input_9 : ''
            
        }
    }

    // checkTime(value){
    // var {input_1, input_2, input_3, input_4, input_6, input_7, input_8, input_9} = this.state;
    // var checkHour = moment(value,'HH').hour(value).isValid();
    // var checkMin = moment(value,'mm').minute(value).isValid();
    //     if((checkHour === input_1) || (checkHour === input_3) || (checkHour)){
    //     // console.log(checkHour  , checkMin);
    //     }
    // }
    onhandleChange = (event) => {
        var event = event.target;
        var name = event.name;
        var value = event.value;

        const re = /^[0-9\b]+$/;

        var checkHour = moment(value,'HH').hour(value).isValid();

        if (checkHour &&(value === '' || re.test(value))) {
         
         this.setState({
            
            [name]: value

           });
        }

        //console.log(checkHour, checkMin);
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

}