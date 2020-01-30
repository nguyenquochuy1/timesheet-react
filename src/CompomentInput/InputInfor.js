import React from 'react';
 import firebase from 'firebase/app';
import  'firebase/database';

// const name_column1 = '事業所' ;
// const name_column2 = '部者';
// const name_column3 = '氏名';


class InputInfor extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            // inputs : [
            //     {
            //         name  : '事業所 : ',
                    
            //     },
            //     {
            //         name  : '部者 : ',
                   
            //     },                                                                             
            //     {
            //         name  : '氏名 : ',
                    
            //     },
            // ],
            // valueOfInput : [
            //     // workPlace = '',
            //     // workPart = '',
            //     // fullName = ''
            // ],
            fullName : "",
            workPart : "",
            workPlace : "",
            //name : ''
            user : []
        }

    }

    // writeUserData = () => {
    //     firebase.database().ref('/').set(this.state);
    //     console.log('DATA SAVED');
    // }

    // writeUserData(userId, fullName, workPart, workPlace, email,imageUrl) {
    //     firebase.database().ref('users/' + userId).set({
    //         fullName : fullName,
    //         //typeUser : 0,
    //         userId : userId,
    //         workPart : workPart,
    //         workPlace : workPlace,
    //         //email : email,
    //         //profile_picture : imageUrl
    //     });
    // }


    // getUserData = () => {
    //     let ref = firebase.database().ref('/');
    //     ref.on('value', snapshot => {
    //       const state = snapshot.val();
    //       this.setState(state);
    //     });
    //     console.log('DATA RETRIEVED');
    // }
    // componentDidMount() {
    //     this.getUserData();
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     // check on previous state
    //     // only write when it's different with the new state
    //     if (prevState !== this.state) {
    //       this.writeUserData();
    //     }
    // }
    onSubmit = (event) => {
        event.preventDefault();
        
        //console.log(event);
        var {fullName} = this.state;
        var {workPart} = this.state;
        var {workPlace} = this.state;
        var {user} = this.state;
        user.push(fullName,workPart,workPlace);

        //console.log(fullName,workPart,workPlace);
        console.log(user);
        
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

    onHandleChange = (event) =>{
        
        var target = event.target; 
        var name  = target.name;
        var value = target.value;
        
		this.setState({ 
            [name] : value
        });
        
        //console.log(target);

        //console.log(name - value);
        
	}

    render() {
        //const { developers } = this.state;
        //const {inputs} = this.state;
        //const {valueOfInput} = this.state;
        // let elements = inputs.map((nameOfInput , index) => {
        //     return (
        //         <div key={index} className="line1">
        //             <label className="text-right control-label">{nameOfInput.name}</label>
        //             <input 
        //                    key={index} 
        //                    type="text" 
        //                    className="form-underline" 
        //                    name={nameOfInput.name}
        //                    autoComplete = "off"
        //                    onChange={this.handleChange}
        //                    value = {valueOfInput}
        //             />
        //         </div>
        //     );
        // });
        return(
        <form onSubmit={this.onSubmit}>
            <div className="col-sm-4" style={{paddingBottom : '20px'}}>
            <div className="allLine">

                {/* {elements} */}

                <div  className="line1">
                    <label className="text-right control-label">事業所 : </label>
                    <input 
                            
                           type="text" 
                           className="form-underline" 
                           name="workPlace"
                           autoComplete = "off"
                           onChange={this.onHandleChange}
                           value = {this.state.workPlace}
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
                           value = {this.state.workPart}
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
                           value = {this.state.fullName}
                    />
                </div>
                
            </div>

            <div className="upload-form__submit">
			    <button type="submit"  className="upload-form__submit__action" onClick={this.handleSubmit}>Upload Picture</button>
            </div>
        </div>
        </form>    
          
           
        );
    }
}
export default InputInfor;



