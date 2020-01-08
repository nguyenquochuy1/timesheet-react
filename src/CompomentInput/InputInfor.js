import React from 'react';

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
            name : 'aaa'

        }

    }

    render() {
        let elements = this.state.nameOfInputs.map((nameOfInput , index) => {
            return (
                <div key={index} className="line1">
                    <label className="text-right control-label">{nameOfInput.name}</label>
                    <input key={nameOfInput.id} 
                           type="text" 
                           className="form-underline" 
                           name="name"
                           status={this.state.name} 
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



