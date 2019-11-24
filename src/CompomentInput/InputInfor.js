import React from 'react';

const name_column1 = '事業所' ;
const name_column2 = '部者';
const name_column3 = '氏名';


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
            ]

        }

    }

    render() {
        let elements = this.state.nameOfInputs.map((nameOfInput , index) => {
            return (
                <div className="line1">
                    <label className="text-right control-label" key = {nameOfInput.id}>{nameOfInput.name}</label>
                    <input type="text" className="form-underline" ref="name" />
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



