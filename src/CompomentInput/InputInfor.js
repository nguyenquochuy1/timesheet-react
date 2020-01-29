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
            nameOfInputs : [
                {
                    name  : '事業所 : '
                },
                {
                    name  : '部者 : '
                },                                                                             
                {
                    name  : '氏名 : '
                },
            ],
            developers : []
            

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
    handleSubmit = (event) => {
        event.preventDefault();
        //let uid = this.refs.uid.value;
        let fullName = this.refs.name.value;
        //let role = this.refs.role.value;
        let workPart = this.refs.name.value;
        let workPlace = this.refs.name.value;
      
        if (fullName){
          const { developers } = this.state;
          const devIndex = developers.findIndex(data => {
            //return data.uid === uid 
          });
          developers[devIndex].name = fullName;
          developers[devIndex].name = workPart;
          developers[devIndex].name = workPlace;
        //   developers[devIndex].role = role;
          this.setState({ developers });
        }
        else if (fullName) {
          const uid = new Date().getTime().toString();
          const { developers } = this.state;
          developers.push({ uid, fullName , workPart , workPlace })
          this.setState({ developers });
        }
        
        this.refs.uid.value = '';
        this.refs.name.value = '';
        //this.refs.role.value = '';
        
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

    handleChange = (event) =>{
        var target = event.target;
        var name = event.name;
        var value = event.value;
		this.setState({ 
            [name] : value 
        });
	}

    render() {
        const { developers } = this.state;
        const {nameOfInputs} = this.state;
        let elements = nameOfInputs.map((nameOfInput , index) => {
            return (
                <div key={index} className="line1">
                    <label className="text-right control-label">{nameOfInput.name}</label>
                    <input 
                           key={index} 
                           type="text" 
                           className="form-underline" 
                           name="name"
                           status={this.state.name} 
                           autoComplete = "off"
                           onChange={this.handleChange}
                           ref = {(input)=>{this.name = input}}
                    />
                </div>
            );
        });
        return(
          
        <div className="col-sm-4" style={{paddingBottom : '20px'}}>
            <div className="allLine">

                {elements}
                
            </div>

            <div className="upload-form__submit">
			    <button className="upload-form__submit__action" onClick={this.handleSubmit}>Upload Picture</button>
            </div>
        </div>   
        );
    }
}
export default InputInfor;



