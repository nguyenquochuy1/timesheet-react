import React from 'react'
import { fireStore , fireAuth } from '../firebase';


const minOffset = 0;
const maxOffset = 60;

class Time extends React.Component {

constructor(prop) {
    super(prop);

    const thisYear = (new Date().getFullYear());
    const thisMonth = (new Date().getMonth());
    
    const thisDay =  20;

        this.state = {
          thisYear: thisYear,
          
          thisMonth : thisMonth,
          selectedMonth : thisMonth + 1 ,

          thisDay : thisDay,
          selectedDay : thisDay + 1 ,
        
          //timeOfUser : []

        //   userId: ''
        }
    }

    componentDidMount(){
        this.getUserData();
    }
    
    onHandleChange = (event) => {
        // Handle Change Here
        
        var target = event.target;
        var value = target.value;
        this.setState({
            timeOfUser : value
        });

        
    };

    // getTasksData() {
    //     fireStore.collection('User')
    //       .where('user_Id', '==', this.state.userId)
    //       .get()
    //       .then(snapShot => {
    //         let tasks = [];
    //         snapShot.forEach(doc => {
    //           tasks.push({
    //             id: doc.id,
    //             text: doc.data().text
    //           });
    //         });
    //         this.setState({
    //           tasks: tasks
    //         });
    //       });
    //   }

    onHandleSubmit = (event) =>{
        event.preventDefault();
        var {thisYear , thisMonth , selectedMonth , thisDay , selectedDay } = this.state
        console.log(thisYear - thisMonth - selectedMonth - thisDay - selectedDay  );
        this.getTimeUser();
    }

    getTimeUser(){
        let userId = fireAuth.currentUser.uid;
        let {thisYear, thisMonth, selectedMonth, thisDay, selectedDay  } = this.state;
        let data = {
            thisYear , thisMonth , selectedMonth, thisDay, selectedDay
        }
        let setDoc = fireStore.collection('TimeSheet').doc(userId).set(data);
        
        return setDoc;
    }


    getUserData(){
        
        var userId = fireAuth.currentUser.uid;
        // if(uid !=null){

        // }
        fireStore
				.collection('TimeSheet').get()
				.then((snapshot) => {

					snapshot.forEach((doc) => {
                        //console.log(doc.id);
                        if(userId === doc.id ){
                            this.setState({
                                selectedDay : doc.data().selectedDay,
                                selectedMonth : doc.data().selectedMonth,
                                thisDay : doc.data().thisDay,
                                thisMonth : doc.data().thisMonth,
                                thisYear : doc.data().thisYear
                                //name : doc.data()
                            });
                        }
						
						
						//console.log(doc.data());
					});
					
				})
					.catch((err) => {
                    console.log('Error getting documents', err);
				});
    }

    

    

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
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                            <select value={this.selectedYear} onChange={this.onHandleChange}>
                                <option>{this.state.thisYear}</option>
                                {optionsYear}
                            </select>
                            <label>年</label>

                            <select onChange={this.onHandleChange}>
                                <option>{this.state.selectedMonth} </option>
                                {optionsMonth}
                            </select>

                            <label>月分</label>
                </div>

                <div className="inline col-sm-12">
                        <div className="sltFirstMonthDay col-sm-6">
                            <select onChange={this.onHandleChange}>
                                <option>{this.state.thisMonth === 0 ? 12 : this.state.thisMonth}</option>
                                {optionsMonth}
                            </select>
                            <label>月</label>　
                            <select onChange={this.onHandleChange}>
                                <option>{this.state.thisDay}</option>
                                {optionsDay}
                            </select>
                            <label>日 ～ </label>
                        </div>
                        <div className="sltSecondMonthDay col-sm-6">
                            <select onChange={this.onHandleChange}>
                                <option>{this.state.selectedMonth}</option>
                                {optionsMonth}
                            </select>
                            <label>月</label>　
                            <select onChange={this.onHandleChange}>
                                <option >{this.state.selectedDay}</option>
                                {optionsDay}
                            </select>
                            <label>日</label>
                        </div>
                    </div>
                    <button onClick={this.onHandleSubmit}>add</button>
            </form>
   
          </div>
            
        )
    }
} 

export default Time;