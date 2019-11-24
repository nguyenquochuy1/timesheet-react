import React from 'react';

class SettingTableTime extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            checkNameOfClass : "breakTime"
        }
        
    }

    handleChange(event){
        
    }

    render(){

        const checkName = this.state.checkNameOfClass;
      
        return(
            <td className={(checkName===this.props.nameOfClass) ? checkName : this.props.nameOfClass}>
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
        );
    }
}

export default SettingTableTime;