import React from 'react';

class Warning extends React.Component {
    render() {
        return(
            
            <div className="warning">
                <p style={{border: '3px solid', width: '50px'}}><strong>注意点</strong></p><p>※当日の有給休暇は原則として認めません。欠勤扱いとなります。</p>
            </div>
            
        )
    }
}
export default Warning;