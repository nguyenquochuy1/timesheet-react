import React from 'react';

class TableAgree extends React.Component {
    render() {
        return(
            
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <p style={{fontSize: '40px'}}><strong>モラブ阪神工業株式会社</strong></p>
                <table className="table table-responsive newtable">
                <tbody>
                    <tr>
                    <td style={{verticalAlign: 'middle'}} colSpan={5}>モラブ阪神工業(株)</td>
                    </tr>
                    <tr>
                    <td style={{verticalAlign: 'middle'}} colSpan={3}>関係部署印</td>
                    <td style={{width: '100px', verticalAlign: 'middle'}} colSpan={1} />
                    <td style={{verticalAlign: 'middle'}} colSpan={1}>所属長印</td>
                    </tr>
                    <tr>
                    <td style={{height: '70px', verticalAlign: 'middle'}} />
                    <td style={{height: '70px', verticalAlign: 'middle'}} />
                    <td style={{height: '70px', verticalAlign: 'middle'}} />
                    <td style={{height: '70px', verticalAlign: 'middle'}} />
                    <td style={{height: '70px', verticalAlign: 'middle'}} />
                    </tr>
                </tbody>
                </table>
          </div>
            
        )
    }
}
export default TableAgree;