import React from 'react';

class InputInfor extends React.Component {
    render() {
        return(
        <div className="col-sm-4">
            <div className="allLine">
                <div className="line1">
                    <label className="text-right control-label">事業所</label>
                    <input type="text" className="form-underline" />
                </div>
                <div className="line2">
                    <label className="text-right control-label">部者</label>
                    <input type="text" className="form-underline" />
                </div>
                <div className="line3">
                    <label className="text-right  control-label">氏名</label>
                    <input type="text" className="form-underline" />
                </div>
            </div>
        </div>
                
            
        )
    }
}
export default InputInfor;



