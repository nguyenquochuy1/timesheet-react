import React from 'react';
import { fireStore , fireAuth } from '../firebase';
// const name_column1 = '事業所' ;
// const name_column2 = '部者';
// const name_column3 = '氏名';

class InputInfor extends React.Component {
    
    
    constructor(props){
        super(props);
        this.state = {
              
          fullName : '',
          workPart : '',
          workPlace : '',
          userName : '',
          name : ''
        }

    }

    componentDidMount(){
        this.getUserData();
    }

    // componentDidUpdate(prevProps, prevState) {
    //     // check on previous state
    //     // only write when it's different with the new state
    //     if (prevState !== this.state) {
    //       this.writeUserData();
    //     }
    // }
    
    getUserData(){
        
        var uid = fireAuth.currentUser.uid;
        // if(uid !=null){

        // }
        fireStore
				.collection('User').get()
				.then((snapshot) => {
					
					snapshot.forEach((doc) => {
                        console.log(doc.id);
                        if(uid === doc.id ){
                            this.setState({
                                fullName : doc.data().fullName,
                                workPart : doc.data().workPart,
                                workPlace : doc.data().workPlace,
                                userName : doc.data().userName,
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

    writeUserData(checked){
        if(checked === false){
            return false;
        }
        let userId = fireAuth.currentUser.uid;
        let data = {
            fullName : this.state.fullName,
            typeUser : false,
            workPart : this.state.workPart,
            workPlace : this.state.workPlace,
            userName : this.state.userName
        }
        let setDoc = fireStore.collection('User').doc(userId).set(data);
        
        return setDoc;

    }
    
    
    
      
    //   removeData = (developer) => {
    //     const { developers } = this.state;
    //     const newState = developers.filter(data => {
    //       return data.uid !== developer.uid;
    //     });
    //     this.setState({ developers: newState });
    // }
      
    //   updateData = (developer) => {
    //     this.refs.uid.value = developer.uid;
    //     this.refs.name.value = developer.name;
    //     //this.refs.role.value = developer.role;
    // }

    // checkJapanese(event){
    //     event.preventDefault();
        
    //     var regex = /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g; 
    //     var input = this.state.fullName; 
    //     if(regex.test(input)) {
    //         //this.writeUserData(true);
    //         console.log("Japanese characters found")
    //     }
    //     else {
    //         //this.writeUserData(false);
    //         console.log("No Japanese characters");
    //     }
        
    // }


    onHandleChange = (event) =>{
        // if(this.checkJapanese === true){
        //     return false;
        // }
        var target = event.target; 
        var name  = target.name;
        var value = target.value;
        
		this.setState({ 
            [name] : value
        });

        
    }
    onHandleSubmit = (e) => {

        
        e.preventDefault();
        this.writeUserData();
        

        
    }

    render() {
        var {workPlace,workPart,fullName} = this.state;
        
        return(
        <form name="myForm" onSubmit={this.onSubmit}>

            <div className="col-sm-4" style={{paddingBottom : '20px'}}>

            <div className="allLine">

                <div  className="line1">
                    <label className="text-right control-label">事業所 : </label>
                    <input 
                            
                           type="text" 
                           className="form-underline" 
                           name="workPlace"
                           autoComplete = "off"
                           onChange={this.onHandleChange}
                           value = {workPlace}
                    />
                </div>

                <div  className="line1">
                    <label className="text-right control-label">部者 : </label>
                    <input 
                            
                           type="text" 
                           className="form-underline" 
                           name="workPart"
                           autoComplete = "off"
                           onChange={this.onHandleChange}
                           value = {workPart}
                    />
                </div>

                <div  className="line1">
                    <label className="text-right control-label">氏名 : </label>
                    <input 
                           type="text" 
                           className="form-underline" 
                           name="fullName"
                           autoComplete = "off"
                           onChange={this.onHandleChange}
                           value = {fullName}
                    />
                </div>

                
            </div>

            <div className="upload-form__submit">
			    <button type="submit"  className="upload-form__submit__action" onClick={this.onHandleSubmit}>Upload Picture</button>
            </div>
        </div>
        </form>    
          
           
        );
    }
}
export default InputInfor;



