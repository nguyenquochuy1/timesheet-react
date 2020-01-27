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
                    id: 1,
                    name  : '事業所'
                },

                {
                    id: 2,
                    name  : '部者'
                },

                {
                    id: 3,
                    name  : '氏名'
                }
            ],
            developers : []
            

        }

    }

    writeUserData = () => {
        firebase.database().ref('/').set(this.state);
        console.log('DATA SAVED');
    }

    getUserData = () => {
        let ref = firebase.database().ref('/');
        ref.on('value', snapshot => {
          const state = snapshot.val();
          this.setState(state);
        });
        console.log('DATA RETRIEVED');
    }
    componentDidMount() {
        this.getUserData();
    }
    componentDidUpdate(prevProps, prevState) {
        // check on previous state
        // only write when it's different with the new state
        if (prevState !== this.state) {
          this.writeUserData();
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let name = this.refs.name.value;
        //let role = this.refs.role.value;
        let uid = this.refs.uid.value;
      
        if (uid && name){
          const { developers } = this.state;
          const devIndex = developers.findIndex(data => {
            return data.uid === uid 
          });
          developers[devIndex].name = name;
        //   developers[devIndex].role = role;
          this.setState({ developers });
        }
        else if (name) {
          const uid = new Date().getTime().toString();
          const { developers } = this.state;
          developers.push({ uid, name })
          this.setState({ developers });
        }
      
        this.refs.name.value = '';
        //this.refs.role.value = '';
        this.refs.uid.value = '';
    }
      
      removeData = (developer) => {
        const { developers } = this.state;
        const newState = developers.filter(data => {
          return data.uid !== developer.uid;
        });
        this.setState({ developers: newState });
    }
      
      updateData = (developer) => {
        this.refs.uid.value = developer.uid;
        this.refs.name.value = developer.name;
        //this.refs.role.value = developer.role;
    }

    render() {
        const { developers } = this.state;
        let elements = this.state.nameOfInputs.map((nameOfInput , index) => {
            return (
                <div key={index} className="line1">
                    <label className="text-right control-label">{nameOfInput.name}</label>
                    <input key={nameOfInput.id} 
                           type="text" 
                           className="form-underline" 
                           name="name"
                           status={this.state.name} 
                           autoComplete = "off"
                    />
                </div>
            );
        });
        return(
          
        <div className="col-sm-4" style={{paddingBottom : '20px'}}>
            <div className="allLine">

                {elements}
                
            </div>
        </div>   
        );
    }
}
export default InputInfor;



