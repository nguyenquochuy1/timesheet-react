import React from 'react';
import moment from 'moment';
import JapaneseHolidays from 'japanese-holidays';
import '../App.css';
import '../'

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

        }
       
        
    }

    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps 
    UNSAFE_componentWillReceiveProps(nextProps) {
        // console.log(nextProps.dataPopup)
        const {dataPopup} = nextProps;
        const isPopupDate_1 = (dataPopup.data1 !== undefined) && (dataPopup.data1 !== '');
        const isPopupData = isPopupDate_1 === true && !!dataPopup.data2 && !!dataPopup.data3 && !!dataPopup.data4;
        //var {dataRow} = this.props;

        if(isPopupData){
            //console.log(dataPopup);
            var checkedInputHourStart = (this.state.input_1 === dataPopup.data1) && (this.state.input_2 === dataPopup.data2);
            var checkedInputHourEnd =  (this.state.input_3 === dataPopup.data3) && (this.state.input_4 === dataPopup.data4);
            if (checkedInputHourStart && checkedInputHourEnd){
                this.setState({
                    input_6 : '',
                    input_7 : '',
                    input_8 : '',
                    input_9 : '',
                });
                return null;
            }
            this.setState({
                input_1: dataPopup.data1,
                input_2: dataPopup.data2,
                input_3: dataPopup.data3,
                input_4: dataPopup.data4,
                inputWork : dataPopup.dataContent,
                inputTimes : dataPopup.dataWorkplace
            },() => {this.onAutoCalculate()});
        }
        else{
            for(var key in dataPopup){
                var element = dataPopup[key];
                //console.log(element);
                if(element === ''){
                    this.setState(
                        {
                            input_1: '',
                            input_2: '',
                            input_3: '',
                            input_4: '',
                            input_6: '',
                            input_7: '',
                            input_8: '',
                            input_9: '',
                            inputWork : '',
                            inputTimes : '',

                        }
                    );
                }
            }
        }
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
        }
        else {
            // console.log("今日は祝日ではありません");
            return false;
        }
        
    }
    
    onCheckInputNotYet(){
        var {dataRow} = this.props;
        for (let index = 0; index < dataRow.length; index++){
            const element = dataRow[index].ref.current.state;
            //console.log(element);
            for (var key in element){
                if (element[key] === ''){
                    return false;
                }
                return true;
            }
        }
    }

    // onCheckObject(){
    //     var aaa = 0 ;
    //     if (this.onCheckInputNotYet) {
    //         aaa = ++aaa;
    //     }
    //     return aaa;
    // }

    onCountWorkDay = () => {
        // const checkWorkDay = this.onCheckSatSun();
        var {dataRow,rowDay,dataRowLength} = this.props;
        var countedWorkDay = 0;
        //var sickedDay = 0;
        var resultDay = 0;
        if(this.onCheckInputNotYet() === true){
            for (var index = 0; index < dataRow.length; index++) {
                const element = dataRow[index];
                var checkedDay = element.props.rowDay.format("dd", rowDay.day());
                var checkedDay2 = element.props.rowDay;
                var today = new Date(checkedDay2);
                var holiday = JapaneseHolidays.isHoliday(today);
            
                if(checkedDay === '土' || checkedDay === '日' || holiday){
                    countedWorkDay = ++countedWorkDay;
                }
                resultDay  = dataRowLength -  countedWorkDay;
            }
            console.log(resultDay);
            return resultDay;
        }else{
            return resultDay;
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
        }else {
        //   if(value !== '' ){
        //     return;
        //   }
        
          alert('日本語で内容を書いてください');
          console.log("No Japanese characters");
          
          this.setState({
            [name]: ''
          });
        }
    }


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

    onCheckAnNum(input){
        // var hourStart,minStart,hourEnd,minEnd;
        if(input !== ''){
            let number = parseInt(input);
            if(Number.isInteger(number)){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }  
        
    }

    onTextLength(input_4){
        var maxLength = 2;
        if (input_4.length === maxLength) {
            return true;
        }
        return false;
    }
    // onRowDone(input_4){
    //     var totalDayWorked = 0;
    //     if (this.onTextLength(input_4)) {
    //         totalDayWorked = totalDayWorked + 1;
    //         return totalDayWorked;
    //     }
    //     this.props.updateTotalDayWorked(this.props.day,totalDayWorked);
    // }

    onAutoCalculate = () =>{
        
        var {input_1,input_2,input_3,input_4, input_5} = this.state;
        
        var aaa = 1;
        
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
        if(this.onTextLength(input_4)){

            var hourStart = parseInt(input_1);
            var minStart = parseInt(input_2);
            var hourEnd = parseInt(input_3);
            var minEnd = parseInt(input_4);

            var hourToMinStart = hourStart * 60;
            var allMinStart = hourToMinStart + minStart; 
            var hourToMinEnd = hourEnd * 60 ;
            var allMinEnd = hourToMinEnd + minEnd;
            var relaxTime = input_5;

            var minWork = allMinEnd - allMinStart - relaxTime ; 

            var hours = minWork / 60;
            var rhours = Math.floor(hours);
            var minutes = (hours - rhours) * 60;
            var rminutes = Math.round(minutes);
            
            // if(hourStart >= hourEnd){
            //     alert("時間は間違えました！！！");
            // }
            //this.onRowDone(input_4);
            if((rhours < 0) || (rminutes < 0)){
                // alert("時間は間違えました！！！");
                
                this.setState({
                    input_6 : '' ,
                    input_7 : '' ,
                    input_8 : '' ,
                    input_9 : '' ,
                });
    
            } 
            
            if(minWork > 465) {
                var minWorkOverTime = minWork - 465;
                var hourOverTime = (minWorkOverTime / 60);
                var rhourOverTime = Math.floor(hourOverTime);
                var minutesOverTime = (hourOverTime - rhourOverTime) * 60;
                var rminutesOverTime = Math.round(minutesOverTime);

                // var aaa ; 
                // var bbb ;

                // if(hourEnd < 17){
                //     console.log('ve som roi');
                //     //return false;
                // }
        
                this.setState({
                    input_6 : '7',
                    input_7 : '45',
                    input_8 : rhourOverTime,
                    input_9 : rminutesOverTime,
                }, () => {
                    //this.props.updateOverTimesHour(this.props.day,rhourOverTime)
                });
                //aaa = aaa + 1;

                if (hourStart > 9 && hourEnd <17){
                    console.log('vua di tre vua ve som');
                }else{
                    if (hourStart  > 9) {
                        console.log('di tre roi');
                        //return true;
    
                    }else if(hourEnd < 17){
                        console.log('ve som roi');
                        //return false;
                    }
                }

                this.props.updateOverTimesHour(this.props.day,rhourOverTime,this.onCheckSatSun());
                this.props.updateOverTimesMin(this.props.day,rminutesOverTime,this.onCheckSatSun());
                this.props.updateTotalDayWorked(this.props.day,aaa);
            
            }else if(minWork<=465) {

                if (hourStart > 9 && hourEnd <17){
                    console.log('vua di tre vua ve som');
                }else{
                    if (hourStart  > 9) {
                        console.log('di tre roi');
                        //return true;
    
                    }else if(hourEnd < 17){
                        console.log('ve som roi');
                        //return false;
                    }
                }
                var minFastTime = 465 - minWork;
                    var hourFastTime = minFastTime / 60;
                    var rhourFastTime = Math.floor(hourFastTime);
                    var rminFastTime = Math.round((hourFastTime - rhourFastTime) * 60);
                    //console.log(rhourFastTime,rminFastTime);
                    //console.log(rhourFastTime);
                    this.setState({
                        input_6 : rhourFastTime,
                        input_7 : rminFastTime,
                        input_8 : '0',
                        input_9 : '0' 
                    });
                    this.props.updateFastTimeHour(this.props.day,rhourFastTime,this.onCheckSatSun());
                    this.props.updateFastTimeMin(this.props.day,rminFastTime,this.onCheckSatSun());
                
                
            }
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