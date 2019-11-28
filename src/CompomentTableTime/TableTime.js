import React from 'react';
import SettingTableTime from '../CompomentTableSettingTime/SettingTableTime';


class TableTime extends React.Component {
  constructor(props){

    super(props);
    this.state = {
      nameOfInputs : [
          

      ]
    }
  }

  countOfEndDay(thisYear,thisMonth){
    const getendDay = new Date(thisYear,thisMonth,0);
    const endDay = getendDay.getDate();
    return endDay;
  }

   
    render() {

        const optionsDay = [];

        for (let i = 20; i < this.countOfEndDay; i++) {
          const day = 1 + i ;
          optionsDay.push(<td>{day}</td>);
          
        }

        console.log(optionsDay);

        return(

            <table id="tablecss" className="table table-responsive newtable">
            <tbody>
              <tr className="titlteTable">
                <td colSpan={2}>※就業日</td>
                <td colSpan={2}>※始業時刻</td>
                <td colSpan={2}>※終業時刻</td>
                <td id="noBorderBottom">※休憩</td>
                <td colSpan={2}>時間内時間数</td>
                <td colSpan={2}>時間外時間数
                  <br />
                  休日時間数
                </td>
                <td style={{border: 'none', verticalAlign: 'middle'}}>勤怠管理者</td>
                <td style={{verticalAlign: 'middle'}} colSpan={2}>備考</td>
                <td style={{paddingTop: '30px', fontSize: '20px', verticalAlign: 'middle', border : 'none', borderRight: '2px solid'}} colSpan={4}>就業時間</td>
              </tr>
              <tr>
                <td>日</td>
                <td>曜</td>
                <td style={{width: '30px'}}>時</td>
                <td>分</td>
                <td>時</td>
                <td>分</td>
                <td id="noBorderTop">時間(分)</td>
                <td>時</td>
                <td>分</td>
                <td>時</td>
                <td>分</td>
                <td>確認印</td>
                <td>業務内容</td>
                <td>勤怠状況</td>
                <td style={{borderTop: 'none',borderRight:'none',borderBottom:'none',borderLeft: 'none',borderImage: 'initial'}} />
                <td style={{borderLeft: 'none', borderTop:'none'}} />
              </tr>

              
              <tr>

                <td>21</td>

                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td >
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={20} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />  
                </td>

                <td style={{borderTop: '2px solid'}}>平日</td>

                <SettingTableTime nameOfClass = "breakTime" />

              </tr>


              <tr>
                
                <td>22</td>

                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>

                <td rowSpan={6} style={{padding: '60px 0px 60px 0px'}}><p>休</p><p>憩</p><p>時</p><p>間</p></td>

                <SettingTableTime nameOfClass="borderLine"/>

              </tr>

              <tr>

                <td>23</td>
                
                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>

                <SettingTableTime nameOfClass="borderLine"/>

              </tr>

              <tr>

                <td>24</td>

                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>

                <SettingTableTime nameOfClass="borderLine"/>
                
              </tr>

              <tr>

                <td>25</td>
                <td></td> 
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
                
                <SettingTableTime nameOfClass="borderLine"/>

              </tr>
              <tr>
                
                <td>26</td>
                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
                
                <SettingTableTime nameOfClass="borderLine"/>

              </tr>

              <tr>
                <td>27</td>
                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
                
                <SettingTableTime nameOfClass="borderLine"/>

              </tr>

              <tr>
                <td>28</td>
                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
                <td>平日実働時間</td>
                <td><div style={{display: 'inline-flex'}}><p>7</p><p>時間</p><p>45</p><p>分</p></div></td>
              </tr>

              <tr>
                <td>29</td>
                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
                <td>休日実働時間</td>
                <td><div style={{display: 'inline-flex'}}><p>7</p><p>時間</p><p>45</p><p>分</p></div></td></tr>

              <tr>
                <td>30</td>
                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
                <td colSpan={2}>所定休日</td>

              </tr>

              <tr>
                <td>31</td>
                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
                <td colSpan={2} rowSpan={2}>土曜日・ 日曜日・祝祭日</td>
              </tr>

              <tr>
                <td>1</td>
                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
                <td colSpan={2}>時間外勤務時間</td>
              </tr>

              <tr>
                <td>3</td>
                <td></td> 
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
                <td>平日</td>
                <td><div style={{display: 'inline-flex'}}><p>実働</p><p>8</p><p>時間以上</p></div></td>
              </tr>

              <tr>
                <td>4</td>
                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
                <td>割増単位</td>
                <td><div style={{display: 'inline-flex'}}><p>30</p><p>分</p></div></td>
              </tr>

              <tr>
                <td>5</td>
                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
                <td colSpan={2}>控除</td>
              </tr>

              <tr>
                <td>6</td>
                <td />
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
                <td>控除単位</td>
                <td><div style={{display: 'inline-flex'}}><p>30</p><p>分</p></div></td>
              </tr>

              <tr>
                <td>7</td>
                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
                <td colSpan={17} rowSpan={17} >
                    <textarea  name="txta"  cols={40} rows={33} defaultValue={""} />
                </td>
              </tr>

              <tr>
                <td>8</td>
                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>

              </tr>

              <tr>

                <td>9</td>
                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
              </tr>

              <tr>
                <td>10</td>
                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
              </tr>

              <tr>
                <td>11</td>
                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
              </tr>

              <tr>
                <td>12</td>
                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
              </tr>
              
              <tr>
                <td>13</td>
                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
              </tr>
              <tr>
                <td>14</td>
                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
              </tr>
              <tr>
                <td>15</td>
                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
              </tr>
              <tr>
                <td>16</td>
                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
              </tr>
              <tr>
                <td>17</td>
                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
              </tr>
              <tr>
                <td>18</td>
                <td></td> 
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
              </tr>
              <tr>
                <td>19</td>
                <td ></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
              </tr>
              <tr>
                <td>20</td>
                <td></td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={2} />
                </td>
                <td>
                  <input className="inputTimes" type="file" maxLength={2} />
                </td>
                <td>
                  <input className="inputWork" type="text" maxLength={2}/>
                </td>
                <td>
                  <input className="inputTimes" type="text" maxLength={20} />
                </td>
              </tr>
              
              <tr>
                <td colSpan={2} rowSpan={2}><p style={{margin: '0px', paddingTop : '20px'}}>当月</p><p>会計</p></td>
                <td>出勤日数</td>
                <td colSpan={2} style={{textAlign: 'right'}}>日</td>
                <td colSpan={2}>時間外勤務</td>
                <td colSpan={3}><div style={{display: 'inline-flex'}}><p>10</p><p>時間</p><p>10</p><p>分</p></div></td>
                <td>欠勤</td>
                <td style={{textAlign: 'right'}}>日</td>
                <td>振休</td>
                <td style={{textAlign: 'right'}}>日</td>    
              </tr>

              <tr>
                <td>所定労働日数</td>
                <td colSpan={2} style={{textAlign: 'right'}}>日</td>
                <td colSpan={2}>遅刻・早退</td>
                <td colSpan={3}><div style={{display: 'inline-flex'}}><p>10</p><p>時間</p><p>10</p><p>分</p></div></td>
                <td>有給</td>
                <td style={{textAlign: 'right'}}>日</td>
                <td>特休</td>
                <td style={{textAlign: 'right'}}>日</td>
              </tr>

            </tbody>
          </table> 
            
        )
    }
}
export default TableTime;





