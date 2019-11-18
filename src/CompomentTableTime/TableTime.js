import React from 'react';

class TableTime extends React.Component {
    render() {
        return(

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
            
              
            
        )
    }
}
export default TableTime;





