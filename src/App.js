import React from 'react';

import './App.css';
import Title from './CompomentTitle/Title';
      

class App extends React.Component{
  render() {
    return (
      <div className="allPage">
        <div className="container-fluid">
        <Title/>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <div className="form-group">
                <select>
                  <option>Year</option>
                  <option value={2020}>2020</option>
                  <option value={2019}>2019</option>
                  <option value={2018}>2018</option>
                  <option value={2017}>2017</option>
                  <option value={2016}>2016</option>
                  <option value={2015}>2015</option>
                  <option value={2014}>2014</option>
                  <option value={2013}>2013</option>
                  <option value={2012}>2012</option>
                  <option value={2011}>2011</option>
                  <option value={2010}>2010</option>
                  <option value={2009}>2009</option>
                  <option value={2008}>2008</option>
                  <option value={2007}>2007</option>
                  <option value={2006}>2006</option>
                  <option value={2005}>2005</option>
                  <option value={2004}>2004</option>
                  <option value={2003}>2003</option>
                  <option value={2002}>2002</option>
                  <option value={2001}>2001</option>
                  <option value={2000}>2000</option>
                  <option value={1999}>1999</option>
                  <option value={1998}>1998</option>
                  <option value={1997}>1997</option>
                  <option value={1996}>1996</option>
                  <option value={1995}>1995</option>
                  <option value={1994}>1994</option>
                  <option value={1993}>1993</option>
                  <option value={1992}>1992</option>
                  <option value={1991}>1991</option>
                  <option value={1990}>1990</option>
                  <option value={1989}>1989</option>
                  <option value={1988}>1988</option>
                  <option value={1987}>1987</option>
                  <option value={1986}>1986</option>
                  <option value={1985}>1985</option>
                  <option value={1984}>1984</option>
                  <option value={1983}>1983</option>
                  <option value={1982}>1982</option>
                  <option value={1981}>1981</option>
                  <option value={1980}>1980</option>
                  <option value={1979}>1979</option>
                  <option value={1978}>1978</option>
                  <option value={1977}>1977</option>
                  <option value={1976}>1976</option>
                  <option value={1975}>1975</option>
                  <option value={1974}>1974</option>
                  <option value={1973}>1973</option>
                  <option value={1972}>1972</option>
                  <option value={1971}>1971</option>
                  <option value={1970}>1970</option>
                  <option value={1969}>1969</option>
                  <option value={1968}>1968</option>
                  <option value={1967}>1967</option>
                  <option value={1966}>1966</option>
                  <option value={1965}>1965</option>
                  <option value={1964}>1964</option>
                  <option value={1963}>1963</option>
                  <option value={1962}>1962</option>
                  <option value={1961}>1961</option>
                  <option value={1960}>1960</option>
                  <option value={1959}>1959</option>
                  <option value={1958}>1958</option>
                  <option value={1957}>1957</option>
                  <option value={1956}>1956</option>
                  <option value={1955}>1955</option>
                  <option value={1954}>1954</option>
                  <option value={1953}>1953</option>
                  <option value={1952}>1952</option>
                  <option value={1951}>1951</option>
                  <option value={1950}>1950</option>
                  <option value={1949}>1949</option>
                  <option value={1948}>1948</option>
                  <option value={1947}>1947</option>
                  <option value={1946}>1946</option>
                  <option value={1945}>1945</option>
                  <option value={1944}>1944</option>
                  <option value={1943}>1943</option>
                  <option value={1942}>1942</option>
                  <option value={1941}>1941</option>
                  <option value={1940}>1940</option>
                  <option value={1939}>1939</option>
                  <option value={1938}>1938</option>
                  <option value={1937}>1937</option>
                  <option value={1936}>1936</option>
                  <option value={1935}>1935</option>
                  <option value={1934}>1934</option>
                  <option value={1933}>1933</option>
                  <option value={1932}>1932</option>
                  <option value={1931}>1931</option>
                  <option value={1930}>1930</option>
                </select>
                <label>年</label>
                <select>
                  <option>Month</option>
                  <option value="January">January</option>
                  <option value="Febuary">Febuary</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <label>月分</label>
              </div>
              <div className="inline col-sm-12">
                <div className="sltFirstMonthDay col-sm-6">
                  <select>
                    <option>Month</option>
                    <option value="January">January</option>
                    <option value="Febuary">Febuary</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                  <label>月</label>　
                  <select>
                    <option>Day</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                    <option value={13}>13</option>
                    <option value={14}>14</option>
                    <option value={15}>15</option>
                    <option value={16}>16</option>
                    <option value={17}>17</option>
                    <option value={18}>18</option>
                    <option value={19}>19</option>
                    <option value={20}>20</option>
                    <option value={21}>21</option>
                    <option value={22}>22</option>
                    <option value={23}>23</option>
                    <option value={24}>24</option>
                    <option value={25}>25</option>
                    <option value={26}>26</option>
                    <option value={27}>27</option>
                    <option value={28}>28</option>
                    <option value={29}>29</option>
                    <option value={30}>30</option>
                    <option value={31}>31</option>
                  </select>
                  <label>日 ～ </label>
                </div>
                <div className="sltSecondMonthDay col-sm-6">
                  <select>
                    <option>Month</option>
                    <option value="January">January</option>
                    <option value="Febuary">Febuary</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                  <label>月</label>　
                  <select>
                    <option>Day</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                    <option value={13}>13</option>
                    <option value={14}>14</option>
                    <option value={15}>15</option>
                    <option value={16}>16</option>
                    <option value={17}>17</option>
                    <option value={18}>18</option>
                    <option value={19}>19</option>
                    <option value={20}>20</option>
                    <option value={21}>21</option>
                    <option value={22}>22</option>
                    <option value={23}>23</option>
                    <option value={24}>24</option>
                    <option value={25}>25</option>
                    <option value={26}>26</option>
                    <option value={27}>27</option>
                    <option value={28}>28</option>
                    <option value={29}>29</option>
                    <option value={30}>30</option>
                    <option value={31}>31</option>
                  </select>
                  <label>日</label>
                </div>
              </div>
            </div>
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
            <table className="table table-responsive newtable">
              <tbody><tr>
                  <td style={{verticalAlign: 'middle'}} colSpan={2}>※就業日</td>
                  <td style={{verticalAlign: 'middle'}} colSpan={2}>※始業時刻</td>
                  <td style={{verticalAlign: 'middle'}} colSpan={2}>※終業時刻</td>
                  <td style={{border: 'none', verticalAlign: 'middle'}}>※休憩</td>
                  <td style={{verticalAlign: 'middle'}} colSpan={2}>時間内時間数</td>
                  <td style={{verticalAlign: 'middle'}} colSpan={2}>時間外時間数
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
                  <td>時間(分)</td>
                  <td>時</td>
                  <td>分</td>
                  <td>時</td>
                  <td>分</td>
                  <td>確認印</td>
                  <td>業務内容</td>
                  <td>勤怠状況</td>
                  <td style={{border: 'none', borderTop: '2px solid'}} />
                  <td style={{borderLeft : 'none'}} />
                </tr>
                <tr>
                  <td>21</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{borderTop: '2px solid'}}>平日</td>
                  <td className="breakTime">
                    <select>
                      <option>hour</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                    </select>
                    <label>:</label>
                    <select>
                      <option>min</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28</option>
                      <option value={29}>29</option>
                      <option value={30}>30</option>
                      <option value={31}>31</option>
                      <option value={1}>32</option>
                      <option value={2}>33</option>
                      <option value={3}>34</option>
                      <option value={4}>35</option>
                      <option value={5}>36</option>
                      <option value={6}>37</option>
                      <option value={7}>38</option>
                      <option value={8}>39</option>
                      <option value={9}>40</option>
                      <option value={10}>41</option>
                      <option value={11}>42</option>
                      <option value={12}>43</option>
                      <option value={13}>44</option>
                      <option value={14}>45</option>
                      <option value={15}>46</option>
                      <option value={16}>47</option>
                      <option value={17}>48</option>
                      <option value={18}>49</option>
                      <option value={19}>50</option>
                      <option value={20}>51</option>
                      <option value={21}>52</option>
                      <option value={22}>53</option>
                      <option value={23}>54</option>
                      <option value={24}>55</option>
                      <option value={25}>56</option>
                      <option value={26}>57</option>
                      <option value={27}>58</option>
                      <option value={28}>59</option>
                      <option value={29}>60</option>
                    </select>
                    <label>～</label>
                    <select>
                      <option>hour</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                    </select>
                    <label>:</label>
                    <select>
                      <option>min</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28</option>
                      <option value={29}>29</option>
                      <option value={30}>30</option>
                      <option value={31}>31</option>
                      <option value={1}>32</option>
                      <option value={2}>33</option>
                      <option value={3}>34</option>
                      <option value={4}>35</option>
                      <option value={5}>36</option>
                      <option value={6}>37</option>
                      <option value={7}>38</option>
                      <option value={8}>39</option>
                      <option value={9}>40</option>
                      <option value={10}>41</option>
                      <option value={11}>42</option>
                      <option value={12}>43</option>
                      <option value={13}>44</option>
                      <option value={14}>45</option>
                      <option value={15}>46</option>
                      <option value={16}>47</option>
                      <option value={17}>48</option>
                      <option value={18}>49</option>
                      <option value={19}>50</option>
                      <option value={20}>51</option>
                      <option value={21}>52</option>
                      <option value={22}>53</option>
                      <option value={23}>54</option>
                      <option value={24}>55</option>
                      <option value={25}>56</option>
                      <option value={26}>57</option>
                      <option value={27}>58</option>
                      <option value={28}>59</option>
                      <option value={29}>60</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>22</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td rowSpan={6} style={{padding: '60px 0px 60px 0px'}}><p>休</p><p>憩</p><p>時</p><p>間</p></td>
                  <td>
                    <select>
                      <option>hour</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                    </select>
                    <label>:</label>
                    <select>
                      <option>min</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28</option>
                      <option value={29}>29</option>
                      <option value={30}>30</option>
                      <option value={31}>31</option>
                      <option value={1}>32</option>
                      <option value={2}>33</option>
                      <option value={3}>34</option>
                      <option value={4}>35</option>
                      <option value={5}>36</option>
                      <option value={6}>37</option>
                      <option value={7}>38</option>
                      <option value={8}>39</option>
                      <option value={9}>40</option>
                      <option value={10}>41</option>
                      <option value={11}>42</option>
                      <option value={12}>43</option>
                      <option value={13}>44</option>
                      <option value={14}>45</option>
                      <option value={15}>46</option>
                      <option value={16}>47</option>
                      <option value={17}>48</option>
                      <option value={18}>49</option>
                      <option value={19}>50</option>
                      <option value={20}>51</option>
                      <option value={21}>52</option>
                      <option value={22}>53</option>
                      <option value={23}>54</option>
                      <option value={24}>55</option>
                      <option value={25}>56</option>
                      <option value={26}>57</option>
                      <option value={27}>58</option>
                      <option value={28}>59</option>
                      <option value={29}>60</option>
                    </select>
                    <label>～</label>
                    <select>
                      <option>hour</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                    </select>
                    <label>:</label>
                    <select>
                      <option>min</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28</option>
                      <option value={29}>29</option>
                      <option value={30}>30</option>
                      <option value={31}>31</option>
                      <option value={1}>32</option>
                      <option value={2}>33</option>
                      <option value={3}>34</option>
                      <option value={4}>35</option>
                      <option value={5}>36</option>
                      <option value={6}>37</option>
                      <option value={7}>38</option>
                      <option value={8}>39</option>
                      <option value={9}>40</option>
                      <option value={10}>41</option>
                      <option value={11}>42</option>
                      <option value={12}>43</option>
                      <option value={13}>44</option>
                      <option value={14}>45</option>
                      <option value={15}>46</option>
                      <option value={16}>47</option>
                      <option value={17}>48</option>
                      <option value={18}>49</option>
                      <option value={19}>50</option>
                      <option value={20}>51</option>
                      <option value={21}>52</option>
                      <option value={22}>53</option>
                      <option value={23}>54</option>
                      <option value={24}>55</option>
                      <option value={25}>56</option>
                      <option value={26}>57</option>
                      <option value={27}>58</option>
                      <option value={28}>59</option>
                      <option value={29}>60</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>23</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td>
                    <select>
                      <option>hour</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                    </select>
                    <label>:</label>
                    <select>
                      <option>min</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28</option>
                      <option value={29}>29</option>
                      <option value={30}>30</option>
                      <option value={31}>31</option>
                      <option value={1}>32</option>
                      <option value={2}>33</option>
                      <option value={3}>34</option>
                      <option value={4}>35</option>
                      <option value={5}>36</option>
                      <option value={6}>37</option>
                      <option value={7}>38</option>
                      <option value={8}>39</option>
                      <option value={9}>40</option>
                      <option value={10}>41</option>
                      <option value={11}>42</option>
                      <option value={12}>43</option>
                      <option value={13}>44</option>
                      <option value={14}>45</option>
                      <option value={15}>46</option>
                      <option value={16}>47</option>
                      <option value={17}>48</option>
                      <option value={18}>49</option>
                      <option value={19}>50</option>
                      <option value={20}>51</option>
                      <option value={21}>52</option>
                      <option value={22}>53</option>
                      <option value={23}>54</option>
                      <option value={24}>55</option>
                      <option value={25}>56</option>
                      <option value={26}>57</option>
                      <option value={27}>58</option>
                      <option value={28}>59</option>
                      <option value={29}>60</option>
                    </select>
                    <label>～</label>
                    <select>
                      <option>hour</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                    </select>
                    <label>:</label>
                    <select>
                      <option>min</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28</option>
                      <option value={29}>29</option>
                      <option value={30}>30</option>
                      <option value={31}>31</option>
                      <option value={1}>32</option>
                      <option value={2}>33</option>
                      <option value={3}>34</option>
                      <option value={4}>35</option>
                      <option value={5}>36</option>
                      <option value={6}>37</option>
                      <option value={7}>38</option>
                      <option value={8}>39</option>
                      <option value={9}>40</option>
                      <option value={10}>41</option>
                      <option value={11}>42</option>
                      <option value={12}>43</option>
                      <option value={13}>44</option>
                      <option value={14}>45</option>
                      <option value={15}>46</option>
                      <option value={16}>47</option>
                      <option value={17}>48</option>
                      <option value={18}>49</option>
                      <option value={19}>50</option>
                      <option value={20}>51</option>
                      <option value={21}>52</option>
                      <option value={22}>53</option>
                      <option value={23}>54</option>
                      <option value={24}>55</option>
                      <option value={25}>56</option>
                      <option value={26}>57</option>
                      <option value={27}>58</option>
                      <option value={28}>59</option>
                      <option value={29}>60</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>24</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td>
                    <select>
                      <option>hour</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                    </select>
                    <label>:</label>
                    <select>
                      <option>min</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28</option>
                      <option value={29}>29</option>
                      <option value={30}>30</option>
                      <option value={31}>31</option>
                      <option value={1}>32</option>
                      <option value={2}>33</option>
                      <option value={3}>34</option>
                      <option value={4}>35</option>
                      <option value={5}>36</option>
                      <option value={6}>37</option>
                      <option value={7}>38</option>
                      <option value={8}>39</option>
                      <option value={9}>40</option>
                      <option value={10}>41</option>
                      <option value={11}>42</option>
                      <option value={12}>43</option>
                      <option value={13}>44</option>
                      <option value={14}>45</option>
                      <option value={15}>46</option>
                      <option value={16}>47</option>
                      <option value={17}>48</option>
                      <option value={18}>49</option>
                      <option value={19}>50</option>
                      <option value={20}>51</option>
                      <option value={21}>52</option>
                      <option value={22}>53</option>
                      <option value={23}>54</option>
                      <option value={24}>55</option>
                      <option value={25}>56</option>
                      <option value={26}>57</option>
                      <option value={27}>58</option>
                      <option value={28}>59</option>
                      <option value={29}>60</option>
                    </select>
                    <label>～</label>
                    <select>
                      <option>hour</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                    </select>
                    <label>:</label>
                    <select>
                      <option>min</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28</option>
                      <option value={29}>29</option>
                      <option value={30}>30</option>
                      <option value={31}>31</option>
                      <option value={1}>32</option>
                      <option value={2}>33</option>
                      <option value={3}>34</option>
                      <option value={4}>35</option>
                      <option value={5}>36</option>
                      <option value={6}>37</option>
                      <option value={7}>38</option>
                      <option value={8}>39</option>
                      <option value={9}>40</option>
                      <option value={10}>41</option>
                      <option value={11}>42</option>
                      <option value={12}>43</option>
                      <option value={13}>44</option>
                      <option value={14}>45</option>
                      <option value={15}>46</option>
                      <option value={16}>47</option>
                      <option value={17}>48</option>
                      <option value={18}>49</option>
                      <option value={19}>50</option>
                      <option value={20}>51</option>
                      <option value={21}>52</option>
                      <option value={22}>53</option>
                      <option value={23}>54</option>
                      <option value={24}>55</option>
                      <option value={25}>56</option>
                      <option value={26}>57</option>
                      <option value={27}>58</option>
                      <option value={28}>59</option>
                      <option value={29}>60</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>25</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td>
                    <select>
                      <option>hour</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                    </select>
                    <label>:</label>
                    <select>
                      <option>min</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28</option>
                      <option value={29}>29</option>
                      <option value={30}>30</option>
                      <option value={31}>31</option>
                      <option value={1}>32</option>
                      <option value={2}>33</option>
                      <option value={3}>34</option>
                      <option value={4}>35</option>
                      <option value={5}>36</option>
                      <option value={6}>37</option>
                      <option value={7}>38</option>
                      <option value={8}>39</option>
                      <option value={9}>40</option>
                      <option value={10}>41</option>
                      <option value={11}>42</option>
                      <option value={12}>43</option>
                      <option value={13}>44</option>
                      <option value={14}>45</option>
                      <option value={15}>46</option>
                      <option value={16}>47</option>
                      <option value={17}>48</option>
                      <option value={18}>49</option>
                      <option value={19}>50</option>
                      <option value={20}>51</option>
                      <option value={21}>52</option>
                      <option value={22}>53</option>
                      <option value={23}>54</option>
                      <option value={24}>55</option>
                      <option value={25}>56</option>
                      <option value={26}>57</option>
                      <option value={27}>58</option>
                      <option value={28}>59</option>
                      <option value={29}>60</option>
                    </select>
                    <label>～</label>
                    <select>
                      <option>hour</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                    </select>
                    <label>:</label>
                    <select>
                      <option>min</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28</option>
                      <option value={29}>29</option>
                      <option value={30}>30</option>
                      <option value={31}>31</option>
                      <option value={1}>32</option>
                      <option value={2}>33</option>
                      <option value={3}>34</option>
                      <option value={4}>35</option>
                      <option value={5}>36</option>
                      <option value={6}>37</option>
                      <option value={7}>38</option>
                      <option value={8}>39</option>
                      <option value={9}>40</option>
                      <option value={10}>41</option>
                      <option value={11}>42</option>
                      <option value={12}>43</option>
                      <option value={13}>44</option>
                      <option value={14}>45</option>
                      <option value={15}>46</option>
                      <option value={16}>47</option>
                      <option value={17}>48</option>
                      <option value={18}>49</option>
                      <option value={19}>50</option>
                      <option value={20}>51</option>
                      <option value={21}>52</option>
                      <option value={22}>53</option>
                      <option value={23}>54</option>
                      <option value={24}>55</option>
                      <option value={25}>56</option>
                      <option value={26}>57</option>
                      <option value={27}>58</option>
                      <option value={28}>59</option>
                      <option value={29}>60</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>26</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td>
                    <select>
                      <option>hour</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                    </select>
                    <label>:</label>
                    <select>
                      <option>min</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28</option>
                      <option value={29}>29</option>
                      <option value={30}>30</option>
                      <option value={31}>31</option>
                      <option value={1}>32</option>
                      <option value={2}>33</option>
                      <option value={3}>34</option>
                      <option value={4}>35</option>
                      <option value={5}>36</option>
                      <option value={6}>37</option>
                      <option value={7}>38</option>
                      <option value={8}>39</option>
                      <option value={9}>40</option>
                      <option value={10}>41</option>
                      <option value={11}>42</option>
                      <option value={12}>43</option>
                      <option value={13}>44</option>
                      <option value={14}>45</option>
                      <option value={15}>46</option>
                      <option value={16}>47</option>
                      <option value={17}>48</option>
                      <option value={18}>49</option>
                      <option value={19}>50</option>
                      <option value={20}>51</option>
                      <option value={21}>52</option>
                      <option value={22}>53</option>
                      <option value={23}>54</option>
                      <option value={24}>55</option>
                      <option value={25}>56</option>
                      <option value={26}>57</option>
                      <option value={27}>58</option>
                      <option value={28}>59</option>
                      <option value={29}>60</option>
                    </select>
                    <label>～</label>
                    <select>
                      <option>hour</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                    </select>
                    <label>:</label>
                    <select>
                      <option>min</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28</option>
                      <option value={29}>29</option>
                      <option value={30}>30</option>
                      <option value={31}>31</option>
                      <option value={1}>32</option>
                      <option value={2}>33</option>
                      <option value={3}>34</option>
                      <option value={4}>35</option>
                      <option value={5}>36</option>
                      <option value={6}>37</option>
                      <option value={7}>38</option>
                      <option value={8}>39</option>
                      <option value={9}>40</option>
                      <option value={10}>41</option>
                      <option value={11}>42</option>
                      <option value={12}>43</option>
                      <option value={13}>44</option>
                      <option value={14}>45</option>
                      <option value={15}>46</option>
                      <option value={16}>47</option>
                      <option value={17}>48</option>
                      <option value={18}>49</option>
                      <option value={19}>50</option>
                      <option value={20}>51</option>
                      <option value={21}>52</option>
                      <option value={22}>53</option>
                      <option value={23}>54</option>
                      <option value={24}>55</option>
                      <option value={25}>56</option>
                      <option value={26}>57</option>
                      <option value={27}>58</option>
                      <option value={28}>59</option>
                      <option value={29}>60</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>27</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td>
                    <select>
                      <option>hour</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                    </select>
                    <label>:</label>
                    <select>
                      <option>min</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28</option>
                      <option value={29}>29</option>
                      <option value={30}>30</option>
                      <option value={31}>31</option>
                      <option value={1}>32</option>
                      <option value={2}>33</option>
                      <option value={3}>34</option>
                      <option value={4}>35</option>
                      <option value={5}>36</option>
                      <option value={6}>37</option>
                      <option value={7}>38</option>
                      <option value={8}>39</option>
                      <option value={9}>40</option>
                      <option value={10}>41</option>
                      <option value={11}>42</option>
                      <option value={12}>43</option>
                      <option value={13}>44</option>
                      <option value={14}>45</option>
                      <option value={15}>46</option>
                      <option value={16}>47</option>
                      <option value={17}>48</option>
                      <option value={18}>49</option>
                      <option value={19}>50</option>
                      <option value={20}>51</option>
                      <option value={21}>52</option>
                      <option value={22}>53</option>
                      <option value={23}>54</option>
                      <option value={24}>55</option>
                      <option value={25}>56</option>
                      <option value={26}>57</option>
                      <option value={27}>58</option>
                      <option value={28}>59</option>
                      <option value={29}>60</option>
                    </select>
                    <label>～</label>
                    <select>
                      <option>hour</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                    </select>
                    <label>:</label>
                    <select>
                      <option>min</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28</option>
                      <option value={29}>29</option>
                      <option value={30}>30</option>
                      <option value={31}>31</option>
                      <option value={1}>32</option>
                      <option value={2}>33</option>
                      <option value={3}>34</option>
                      <option value={4}>35</option>
                      <option value={5}>36</option>
                      <option value={6}>37</option>
                      <option value={7}>38</option>
                      <option value={8}>39</option>
                      <option value={9}>40</option>
                      <option value={10}>41</option>
                      <option value={11}>42</option>
                      <option value={12}>43</option>
                      <option value={13}>44</option>
                      <option value={14}>45</option>
                      <option value={15}>46</option>
                      <option value={16}>47</option>
                      <option value={17}>48</option>
                      <option value={18}>49</option>
                      <option value={19}>50</option>
                      <option value={20}>51</option>
                      <option value={21}>52</option>
                      <option value={22}>53</option>
                      <option value={23}>54</option>
                      <option value={24}>55</option>
                      <option value={25}>56</option>
                      <option value={26}>57</option>
                      <option value={27}>58</option>
                      <option value={28}>59</option>
                      <option value={29}>60</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>28</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td>平日実働時間</td>
                  <td><div style={{display: 'inline-flex'}}><p>7</p><p>時間</p><p>45</p><p>分</p></div></td>
                </tr>
                <tr>
                  <td>29</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td>休日実働時間</td>
                  <td><div style={{display: 'inline-flex'}}><p>7</p><p>時間</p><p>45</p><p>分</p></div></td></tr>
                <tr>
                  <td>30</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td colSpan={2}>所定休日</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td colSpan={2} rowSpan={2}>土曜日・ 日曜日・祝祭日</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td colSpan={2}>時間外勤務時間</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td>平日</td>
                  <td><div style={{display: 'inline-flex'}}><p>実働</p><p>8</p><p>時間以上</p></div></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td>割増単位</td>
                  <td><div style={{display: 'inline-flex'}}><p>30</p><p>分</p></div></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td colSpan={2}>控除</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td>控除単位</td>
                  <td><div style={{display: 'inline-flex'}}><p>30</p><p>分</p></div></td>
                </tr>
                <tr>
                  <td>7</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td colSpan={17} rowSpan={17} style={{padding: '0px'}}>
                    <div>
                      <textarea name="txta" id cols={45} rows={40} defaultValue={""} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                </tr>
                <tr>
                  <td>14</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                </tr>
                <tr>
                  <td>15</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                </tr>
                <tr>
                  <td>16</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                </tr>
                <tr>
                  <td>17</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                </tr>
                <tr>
                  <td>18</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                </tr>
                <tr>
                  <td>19</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                </tr>
                <tr>
                  <td>20</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                </tr>
                <tr>
                  <td>21</td>
                  <td />
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="file" maxLength={2} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{fontSize: '10px', width: '150px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
                  </td>
                  <td style={{padding: '0px'}}>
                    <input style={{width: '70px', height: '40px', textAlign: 'center'}} type="text" maxLength={20} />
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
            <div className="warning">
              <p style={{border: '3px solid', width: '50px'}}><strong>注意点</strong></p><p>※当日の有給休暇は原則として認めません。欠勤扱いとなります。</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <p style={{width: 'max-content', border: '3px solid', fontSize: '20px', marginTop: '20%'}}><strong style={{padding : '10px'}}>締日翌日の午前までに所属長→社長→管理部</strong></p>
              </div>
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
            </div>
          </div>
        </div>
      </div>
      </div>
  
      
    );
  }
}


       

export default App;
