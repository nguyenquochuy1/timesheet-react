import React from 'react';
import moment from 'moment';
import JapaneseHolidays from 'japanese-holidays';
import { storage } from '../firebase';

import '../App.css';

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
            inputTimes : '',
            
            readOnlyStatus : false,

            image: null,
            url: "",
            progress: 0
        }
    }


    onFileSelectHanlder = (event) =>{
        //console.log(event.target.files[0]);
        if (event.target.files[0]) {
            const image = event.target.files[0];
            this.setState(() => ({ image }));
        }
    }

    onFileUploadHandler = (event) =>{
        const { image } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                // progress function ...
                const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                this.setState({ progress });
            },
            error => {
                // Error function ...
                console.log(error);
            },
            () => {
                // complete function ...
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        this.setState({ url });
                    });
            }
        );
    }
	
    onCheckSatSun = () =>{
        const {rowDay} = this.props;
        var checkDay = rowDay.day();
        var today = new Date(rowDay);
        // console.log(rowDay.get("date"));
        var holiday = JapaneseHolidays.isHoliday(today);
        if(holiday || checkDay === 0 || checkDay === 6) {
            // console.log("今日は " + holiday + " です");
            
            return true;
        } else {
            // console.log("今日は祝日ではありません");
            return false;
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

        

        //const autoChangeTime = [0,1,2,3,4,5,6,7,8,9];

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
                   });
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
        const {readOnlyStatus} = this.state;
        return (

            <tr key={day}>
                <td className={this.onCheckSatSun() ? 'roundCricle' : '' }>{rowDay.get("date")}</td>
                <td>{rowDay.format("dd", rowDay.day())}</td>
                <td>
                    <input onChange={this.onhandleChange}
                        className="inputTimes"
                        type="text"
                        maxLength={2}
                        name="input_1"
                        readOnly={this.onCheckSatSun() ? !readOnlyStatus : readOnlyStatus}
                        value={this.state.input_1}

                    />
                </td>

                <td>
                    <input onChange={this.onhandleChange}
                        className="inputTimes"
                        type="text"
                        maxLength={2}
                        name="input_2"
                        readOnly={this.onCheckSatSun() ? !readOnlyStatus : readOnlyStatus}
                        value={this.state.input_2}
                    />
                </td>

                <td>
                    <input onChange={this.onhandleChange}
                        className="inputTimes"
                        type="text"
                        maxLength={2}
                        name="input_3"
                        readOnly={this.onCheckSatSun() ? !readOnlyStatus : readOnlyStatus}
                        value={this.state.input_3}
                    />
                </td>

                <td>
                    <input onChange={this.onhandleChange}
                        className="inputTimes"
                        type="text"
                        maxLength={2}
                        name="input_4"
                        readOnly={this.onCheckSatSun() ? !readOnlyStatus : readOnlyStatus}
                        value={this.state.input_4}
                    />
                </td>

                <td>
                    <input onChange={this.onhandleChange}
                        className="inputTimes"
                        type="text"
                        maxLength={2}
                        name="input_5"
                        readOnly={this.onCheckSatSun() ? !readOnlyStatus : readOnlyStatus}
                        value={this.onCheckSatSun() ? '' : '60'}

                    />
                </td>

                <td>
                    <input onChange={this.onhandleChange}
                        className="inputTimes"
                        type="text"
                        maxLength={2}
                        name="input_6"
                        readOnly={this.onCheckSatSun() ? !readOnlyStatus : readOnlyStatus}
                        value={this.state.input_6}
                    />
                </td>

                <td>
                    <input onChange={this.onhandleChange}
                        className="inputTimes"
                        type="text"
                        maxLength={2}
                        name="input_7"
                        readOnly={this.onCheckSatSun() ? !readOnlyStatus : readOnlyStatus}
                        value={this.state.input_7}

                    />
                </td>

                <td>
                    <input onChange={this.onhandleChange}
                        className="inputTimes"
                        type="text"
                        maxLength={2}
                        name="input_8"
                        readOnly={this.onCheckSatSun() ? !readOnlyStatus : readOnlyStatus}
                        value={this.state.input_8}

                    />
                </td>

                <td>
                    <input onChange={this.onhandleChange}
                        className="inputTimes"
                        type="text"
                        maxLength={2}
                        name="input_9"
                        readOnly={this.onCheckSatSun() ? !readOnlyStatus : readOnlyStatus}
                        value={this.state.input_9}

                    />
                </td>

                <td>
                    {/* <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" value={this.state.progress}aria-valuemin="0" aria-valuemax="100"/>
                    </div> */}
                    
                    
                    {/* <img
                        refs='images'
                        src={this.state.url || "https://via.placeholder.com/100x200"}
                        alt="Uploaded Images"
                        height="2"
                        width="4"
                        /> */}
                    {this.state.image == null ? 
                        <input
                        onChange={this.onFileSelectHanlder} 
                        name="inputPeople" 
                        className="inputTimes" 
                        type="file" maxLength={2}
                        readOnly={this.onCheckSatSun() ? !readOnlyStatus : readOnlyStatus} 
                        defaultValue={this.state.image}
                        
                    /> : <button onClick={this.onFileUploadHandler} className="waves-effect waves-light btn">Upload</button> 

                            // <img
                            // refs='images'
                            // src={this.state.url || "https://via.placeholder.com/100x200"}
                            // alt="Uploaded Images"
                            // height="70"
                            // width="73"
                            // /> : <button onClick={this.onFileUploadHandler} className="waves-effect waves-light btn">Upload</button>
                    }

                    
                </td>
                <td>
                    <input onChange={this.onCheckJapanese} 
                           name='inputWork' 
                           className="inputWork" 
                           type="text" 
                           maxLength={20}
                           readOnly={this.onCheckSatSun() ? !readOnlyStatus : readOnlyStatus} 
                           value={this.state.inputWork} />
                </td>
                <td>
                    <input onChange={this.onCheckJapanese} 
                           name='inputTimes' 
                           className="inputTimes" 
                           type="text" 
                           maxLength={4}
                           readOnly={this.onCheckSatSun() ? !readOnlyStatus : readOnlyStatus} 
                           value={this.state.inputTimes} />
                </td>

            </tr>
        );
    }

}