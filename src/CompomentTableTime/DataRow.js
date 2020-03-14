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
            input_5 : 60,
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
            progress: 0,

            countWorkDay : 0
        }
        this.myRefWorkedDay = React.createRef();
    }

    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps 
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.dataPopup)
        const {dataPopup} = nextProps
        this.setState({
            input_1: dataPopup.data1,
            input_2: dataPopup.data2,
            input_3: dataPopup.data3,
            input_4: dataPopup.data4,
            inputWork : dataPopup.dataContent,
            inputTimes : dataPopup.dataWorkplace

        },() => this.onAutoCalculate());
    }
    


    // onFileSelectHanlder = (event) =>{
    //     //console.log(event.target.files[0]);
    //     if (event.target.files[0]) {
    //         const image = event.target.files[0];
    //         this.setState(() => ({ image }));
    //     }
    // }

    // onFileUploadHandler = (event) =>{
    //     const { image } = this.state;
    //     const uploadTask = storage.ref(`images/${image.name}`).put(image);
    //     uploadTask.on(
    //         "state_changed",
    //         snapshot => {
    //             // progress function ...
    //             const progress = Math.round(
    //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //             );
    //             this.setState({ progress });
    //         },
    //         error => {
    //             // Error function ...
    //             console.log(error);
    //         },
    //         () => {
    //             // complete function ...
    //             storage
    //                 .ref("images")
    //                 .child(image.name)
    //                 .getDownloadURL()
    //                 .then(url => {
    //                     this.setState({ url });
    //                 });
    //         }
    //     );
    // }
	
    onCheckSatSun = () =>{
        const {rowDay} = this.props;
        var checkDay = rowDay.day();
        var today = new Date(rowDay);
        var holiday = JapaneseHolidays.isHoliday(today);

        if(holiday || checkDay === 0 || checkDay === 6) {
            // console.log("今日は " + holiday + " です"); 
            return true;
        } else {
            // console.log("今日は祝日ではありません");
            return false;
        }
        
    }

    copyNode = () => {
		
		//console.log(node);
		this.myRefWorkedDay.current.onCountWorkDay();
    }
    

    onCountWorkDay = () => {

        

        const checkWorkDay = this.onCheckSatSun();
        
        var {dataRow,rowDay} = this.props;
        var countedWorkDay = 0;
        var countHoliday = 0;
        var resultDay = 0;
        for (var index = 0; index < dataRow.length; index++) {
            
            const element = dataRow[index];
            var checkedDay = element.props.rowDay.format("dd", rowDay.day());
            var checkedDay2 = element.props.rowDay;
            var today = new Date(checkedDay2);
            var holiday = JapaneseHolidays.isHoliday(today);
            // console.log(checkedDay);
            
          

            if(holiday){
                countHoliday = ++countHoliday;
                console.log(countHoliday);
            }
            
            
            if(checkedDay !== '土' && checkedDay !== '日'){
                countedWorkDay = ++countedWorkDay;
                
            }

            resultDay = countedWorkDay - countHoliday;

            
        }

        return resultDay;
        
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
        event.preventDefault();
        var target = event.target;
        var name = target.name;
        var value = target.value;

        const re = /^[0-9\b]+$/;
        var checkHour = moment(value,'HH').hour(value).isValid();
        var checkMin = moment(value,'mm').minute(value).isValid();

        if(name === 'input_1' || name === 'input_3'){
            if (checkHour && (value === '' || re.test(value))) {
                this.setState({
                      [name]: value
                  },() => this.onAutoCalculate());  // co the truyen () => this.onAutoCalculate(); sau dấu }, 
               }
               
               else{
                   this.setState({
                       [name] : ''
                   });
               }
            //    console.log(typeof(value));
        }

        if(name === 'input_2' || name === 'input_4'){
            if (checkMin && (value === '' || re.test(value))) {
                this.setState({
                   [name]: value
                  },() => this.onAutoCalculate());
                
               }else{
                   this.setState({
                       [name] : ''
                   });
               }
        }

        // this.onAutoCalculate();
    }

    onCheckAnNum(input_1){
        // var hourStart,minStart,hourEnd,minEnd;
        if(input_1 !== ''){
            let number = parseInt(input_1);
            if(Number.isInteger(number)){
                // console.log(number);
                console.log(typeof(number));
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }  
        
    }

    onAutoCalculate(){

        var {input_1,input_2,input_3,input_4, input_5} = this.state;
    
        if(!this.onCheckAnNum(input_1) || !this.onCheckAnNum(input_2) || !this.onCheckAnNum(input_3) || !this.onCheckAnNum(input_4)){
            return null;
        }    
        //console.log(this.onCheckAnNum(input_1));

        var hourStart = parseInt(input_1);
        var minStart = parseInt(input_2);
        var hourEnd = parseInt(input_3);
        var minEnd = parseInt(input_4);

        var hourToMinStart = hourStart * 60;
        var allMinStart = hourToMinStart + minStart; 
        var hourToMinEnd = hourEnd * 60 ;
        var allMinEnd = hourToMinEnd + minEnd;
        var relaxTime = input_5;
        //var minWorkOverTime = parseInt(input_6) * 60 + parseInt(input_7);

        var minWork = allMinEnd - allMinStart - relaxTime ; 

        var hours = (minWork / 60);
        var rhours = (Math.floor(hours)).toString();
        var minutes = (hours - rhours) * 60;
        var rminutes = (Math.round(minutes)).toString();
    
        if((rhours < 0) || (rminutes < 0)){
            alert("時間は間違えました！！！");
            this.setState({
                input_6 : '' ,
                input_7 : '' ,
                input_8 : '' ,
                input_9 : '' ,
            });
            return null;
            
        } else{
            this.setState({
                input_6 : rhours,
                input_7 : rminutes
            });
        }
        

        if(minWork > 465){
            var minWorkOverTime = minWork - 465;
            var hourOverTime = (minWorkOverTime / 60);
            var rhourOverTime = Math.floor(hourOverTime);
            var minutesOverTime = (hourOverTime - rhourOverTime) * 60;
            var rminutesOverTime = Math.round(minutesOverTime);

            this.setState({
                input_6 : '7',
                input_7 : '45',
                input_8 : rhourOverTime,
                input_9 : rminutesOverTime
            });
        }else if(minWork  <= 465 ){
            this.setState({
                input_8 : '0',
                input_9 : '0' 
            });
        }
        
    }



    render() {
        const {day,rowDay} = this.props;
        const {readOnlyStatus} = this.state;
        return (

            <tr id={this.onCheckSatSun() ? 'roundCricle' : '' } key={day}>
                <td  className={this.onCheckSatSun() ? 'roundCricle' : '' }>{rowDay.get("date")}</td>
                <td>{rowDay.format("dd", rowDay.day())}</td>
                <td>
                    <input onChange={this.onhandleChange}
                        className="inputTimes"
                        type="text"
                        maxLength={2}
                        name="input_1"
                        readOnly={this.onCheckSatSun() ? !readOnlyStatus : readOnlyStatus}
                        value={this.onCheckSatSun() ? '' : this.state.input_1}
                    />
                </td>

                <td>
                    <input onChange={this.onhandleChange}
                        className="inputTimes"
                        type="text"
                        maxLength={2}
                        name="input_2"
                        readOnly={this.onCheckSatSun() ? !readOnlyStatus : readOnlyStatus}
                        value={this.onCheckSatSun() ? '' : this.state.input_2}
                    />
                </td>

                <td>
                    <input onChange={this.onhandleChange}
                        className="inputTimes"
                        type="text"
                        maxLength={2}
                        name="input_3"
                        readOnly={this.onCheckSatSun() ? !readOnlyStatus : readOnlyStatus}
                        value={this.onCheckSatSun() ? '' : this.state.input_3}
                    />
                </td>

                <td>
                    <input onChange={this.onhandleChange}
                        className="inputTimes"
                        type="text"
                        maxLength={2}
                        name="input_4"
                        readOnly={this.onCheckSatSun() ? !readOnlyStatus : readOnlyStatus}
                        value={this.onCheckSatSun() ? '' : this.state.input_4}
                    />
                </td>

                <td>
                    <input onChange={this.onhandleChange}
                        className="inputTimes"
                        type="text"
                        maxLength={2}
                        name="input_5"
                        readOnly={this.onCheckSatSun() ? !readOnlyStatus : readOnlyStatus}
                        value={this.onCheckSatSun() ? '' : this.state.input_5}
                    />
                </td>

                <td>
                    <input onChange={this.onhandleChange}
                        className="inputTimes"
                        type="text"
                        maxLength={2}
                        name="input_6"
                        readOnly={!readOnlyStatus}
                        value={this.onCheckSatSun() ? '' : this.state.input_6}
                    />
                </td>

                <td>
                    <input onChange={this.onhandleChange}
                        className="inputTimes"
                        type="text"
                        maxLength={2}
                        name="input_7"
                        readOnly={!readOnlyStatus}
                        value={this.onCheckSatSun() ? '' : this.state.input_7}

                    />
                </td>

                <td>
                    <input onChange={this.onhandleChange}
                        className="inputTimes"
                        type="text"
                        maxLength={2}
                        name="input_8"
                        readOnly={this.onCheckSatSun() ? !readOnlyStatus : readOnlyStatus}
                        value={this.onCheckSatSun() ? '' : this.state.input_8}
                    />
                </td>

                <td>
                    <input onChange={this.onhandleChange}
                        className="inputTimes"
                        type="text"
                        maxLength={2}
                        name="input_9"
                        readOnly={this.onCheckSatSun() ? !readOnlyStatus : readOnlyStatus}
                        value={this.onCheckSatSun() ? '' : this.state.input_9}
                    />
                </td>

                <td>
                    

                    {this.state.image == null ? 
                        <input
                        onChange={this.onFileSelectHanlder} 
                        name="inputPeople" 
                        className="inputTimes" 
                        type="file" maxLength={2}
                        readOnly={this.onCheckSatSun() ? !readOnlyStatus : readOnlyStatus} 
                        defaultValue={this.state.image}
                        
                    /> : <button onClick={this.onFileUploadHandler} className="waves-effect waves-light btn">Upload</button> 
                    }

                </td>

                <td>
                    <input onChange={this.onCheckJapanese} 
                           name='inputWork' 
                           className="inputWork" 
                           type="text" 
                           maxLength={20}
                           readOnly={this.onCheckSatSun() ? !readOnlyStatus : readOnlyStatus}
                           value={this.onCheckSatSun() ? '' : this.state.inputWork} />
                </td>
                <td>
                    <input onChange={this.onCheckJapanese} 
                           name='inputTimes' 
                           className="inputTimes" 
                           type="text" 
                           maxLength={4}
                           readOnly={this.onCheckSatSun() ? !readOnlyStatus : readOnlyStatus} 
                           value={this.onCheckSatSun() ? '' : this.state.inputTimes} />
                </td>

            </tr>
        );
    }

}