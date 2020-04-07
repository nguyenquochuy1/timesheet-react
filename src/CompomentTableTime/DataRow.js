import React from 'react';
import moment from 'moment';
import JapaneseHolidays from 'japanese-holidays';
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

            countWorkDay : 0,

            // totalHourOverTime : 0,
            // totalMinOverTime : 0
        }
        // this.myRefWorkedDay = React.createRef();
        // this.myRefWorkedDay2 = React.createRef();

        // this._handleKeyPress = this._handleKeyPress.bind(this);
        
    }

    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps 
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.dataPopup)
        const {dataPopup} = nextProps
        if(dataPopup.data1 !=='' && dataPopup.data2 !=='' && dataPopup.data3 !=='' && dataPopup.data4 !==''){
            this.setState({
                input_1: dataPopup.data1,
                input_2: dataPopup.data2,
                input_3: dataPopup.data3,
                input_4: dataPopup.data4,
                inputWork : dataPopup.dataContent,
                inputTimes : dataPopup.dataWorkplace
    
            },() => this.onAutoCalculate());
        }else{
            this.setState({
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
            });
        }
        
    }

    // componentDidMount() {
    //     for (let x in this.refs) {
    //       this.refs[x].onkeypress = (e) => 
    //         this._handleKeyPress(e, this.refs[x]);
    //     }
    //     this.refs.name.focus;
    // }
    


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
        }
        else {
            // console.log("今日は祝日ではありません");
            return false;
        }
        
    }

    // copyNode = () => {
		
	// 	//console.log(node);
    //     this.myRefWorkedDay.current.onCountWorkDay();
    //     // this.myRefWorkedDay2.current.onCountWorkOverTime();
    // }
    

    onCountWorkDay = () => {

        // const checkWorkDay = this.onCheckSatSun();
        var {dataRow,rowDay} = this.props;
        var countedWorkDay = 0;
        var countHoliday = 0;
        var sickedDay = 0;
        var resultDay = 0;
        var resultDay2 = 0; 
        for (var index = 0; index < dataRow.length; index++) {
       
            const element = dataRow[index];
            var checkedDay = element.props.rowDay.format("dd", rowDay.day());
            var checkedDay2 = element.props.rowDay;
            var today = new Date(checkedDay2);
            var holiday = JapaneseHolidays.isHoliday(today);
            // console.log(checkedDay);
            
          

            if(holiday){
                countHoliday = ++countHoliday;
                // console.log(countHoliday);
            }
            
            // if(inputTimes === '有休'){
            //     sickedDay = ++sickedDay;
            //     console.log(sickedDay);
            // }
            
            if(checkedDay !== '土' && checkedDay !== '日'){
                countedWorkDay = ++countedWorkDay;
            }

            resultDay  = countedWorkDay - countHoliday;
            resultDay2 = resultDay - sickedDay;
            // console.log(countedWorkDay);
            
        }
        console.log(resultDay);
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
        }else {
          alert('日本語で内容を書いてください');
          console.log("No Japanese characters");
          this.setState({
            [name]: ''
          })
        }
    }

    checkedKeyBoard = (event)=>{
        var countedTab = 0 ;
        if (event.keyCode === 9) {
            // console.log('aaaaa');
            // countedTab += 1 ;
            // if (countedTab === 4) {
                
            // }

            console.log('sssss')
        }
        return false;
    }

    // _handleKeyPress(e, field) {
    //     // If enter key is pressed, focus next input field.
    //     if (e.keyCode === 13) {
    //       e.preventDefault();
    //       let next = this.refs[field.name].nextSibling;
    //       if (next && next.tagName === "INPUT") {
    //         this.refs[field.name].nextSibling.focus();
    //       }
    //     }
    // }


    onhandleChange = (event) => {

       
        event.preventDefault();
        var target = event.target;
        var name = target.name;
        var value = target.value;

        var checkHour = moment(value,'HH').hour(value).isValid();
        var checkMin = moment(value,'mm').minute(value).isValid();

        if(name === 'input_1' || name === 'input_3'){
            if (checkHour) {
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
            if (checkMin) {    
                this.setState({
                   [name]: value
                  },() => this.onAutoCalculate());
                }
            else{
                   this.setState({
                       [name] : ''
                   });
               }
        }

        
    
       
    }

    // async name(rhourOverTime) {
    //     // let a = await this.onhandleChange();
    //     await this.onhandleChange();
    //     this.props.updateOverTimesHour(this.props.day,rhourOverTime);    
    // }

    

    

    onCheckAnNum(input_1){
        // var hourStart,minStart,hourEnd,minEnd;
        if(input_1 !== ''){
            let number = parseInt(input_1);
            if(Number.isInteger(number)){
                // console.log(number);
                // console.log(typeof(number));
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
        // var totalHourOverTime = 0;
        // var totalMinOverTime = 0;
        if(input_1 === '' || input_2 === '' || input_3 === '' || input_4 === '' ){
            this.setState({
                input_6 : '' ,
                input_7 : '' ,
                input_8 : '' ,
                input_9 : '' ,
            });
        }

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
        
        // if(hourStart >= hourEnd){
        //     alert("時間は間違えました！！！");
        // }
        
        if((rhours < 0) || (rminutes < 0)){
            // alert("時間は間違えました！！！");
            
            this.setState({
                input_6 : '' ,
                input_7 : '' ,
                input_8 : '' ,
                input_9 : '' ,
            });
            // return null;
            
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
            
            
            // totalHourOverTime += rhourOverTime;
            // totalMinOverTime += rminutesOverTime; 
            

            this.setState({
                input_6 : '7',
                input_7 : '45',
                input_8 : rhourOverTime,
                input_9 : rminutesOverTime,
                // totalHourOverTime : totalHourOverTime,
                // totalMinOverTime : totalMinOverTime
            });
            // this.name(rhourOverTime);

            document.addEventListener("keydown", this.checkedKeyBoard, false);
            let checkPressedTab = this.checkedKeyBoard();
            if (checkPressedTab) {
                
                this.props.updateOverTimesHour(this.props.day,rhourOverTime);
            }
            
        }else if(minWork  <= 465 ){
            this.setState({
                input_6 : '0',
                input_7 : '0',
                input_8 : '0',
                input_9 : '0' 
            });
            
        }

        // console.log(totalHourOverTime , totalMinOverTime);
        
    }

    // onCountWorkOverTime(){
    //     var {input_8,countWorkOverTime} = this.state;
    //     for (let index = 0; index < input_8.length; index++) {
    //         const element = input_8[index];
    //         if (element.value) {
    //             countWorkOverTime += element.value; 
    //         }

    //         console.log(input_8);
            
    //     }
    //     console.log(typeof(input_8));
    //     console.log(countWorkOverTime);
    // }



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
                        ref="input_1"
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
                        ref="input_2"
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
                        ref="input_3"
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
                        ref="input_4"
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
                        ref="input_5"
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
                        ref="input_6"
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
                        ref="input_7"
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
                        ref="input_8"
                        // readOnly={this.onCheckSatSun() ? !readOnlyStatus : readOnlyStatus}
                        readOnly={!readOnlyStatus}
                        value={this.onCheckSatSun() ? '' : this.state.input_8}
                    />
                </td>

                <td>
                    <input onChange={this.onhandleChange}
                        className="inputTimes"
                        type="text"
                        maxLength={2}
                        name="input_9"
                        ref="input_9"
                        // readOnly={this.onCheckSatSun() ? !readOnlyStatus : readOnlyStatus}
                        readOnly={!readOnlyStatus}
                        value={this.onCheckSatSun() ? '' : this.state.input_9}
                    />
                </td>

                <td>
                    {this.state.image == null ? 
                        <input
                        onChange={this.onFileSelectHanlder} 
                        name="inputPeople" 
                        className="inputTimes" 
                        type={this.onCheckSatSun() ? 'test' : 'file'} 
                        maxLength={2}
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