import React from 'react';  
import './style.css'
import moment from 'moment';

class Popup extends React.Component {  
  
    constructor(props){
		
		super(props);
		this.state = {
			input_1 : '',
			input_2 :'',
			input_3 : '',
			input_4 :'',
			content : '',
			workplace : '',
		}
	}

	onClick = (event) => {
		event.preventDefault();
		var {input_1 , input_2 , input_3 ,input_4 ,content , workplace} = this.state;
		console.log(input_1 , input_2 , input_3, input_4 ,content , workplace);
		this.props.dataPopup(input_1, input_2, input_3, input_4, content, workplace);
		this.props.closePopup();
	}


	onCheckJapanese = (event) => {
        event.preventDefault();
        var target = event.target;
        var name = target.name;
        var value = target.value;

        var regex = /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g; 
        //var input = "input string"; 
        if(regex.test(value)) {

        //   console.log("Japanese characters found");
        //   console.log(value)

          this.setState({
            [name]: value
           });
        }
        else {
          alert('日本語で内容を書いてください');
        //   console.log("No Japanese characters");
          this.setState({
            [name]: '',
          })
        }
    }

	onhandleChange = (event) => {
		event.preventDefault();
        var target = event.target;
        var name = target.name;
        var value = target.value;
		this.setState({
			[name] : value
		});

		const re = /^[0-9\b]+$/;
        var checkHour = moment(value,'HH').hour(value).isValid();
        var checkMin = moment(value,'mm').minute(value).isValid();

        if(name === 'input_1' || name === 'input_3'){
            if (checkHour && (value === '' || re.test(value))) {
                this.setState({
                      [name]: value
                  });  // co the truyen () => this.onAutoCalculate(); sau dấu }, 
               }
               else{
                   this.setState({
                       [name] : ''
                   });
               }
             
		}
		
		if(name === 'input_2' || name === 'input_4'){
            if (checkMin && (value === '' || re.test(value))) {
                this.setState({
                   [name]: value
                  });
                
               }else{
                   this.setState({
                       [name] : ''
                   });
               }
            
        }
	}


  	render() {
		var {input_1, input_2, input_3, input_4, content, workplace} = this.state;  
		return (  
    
		<div className='popup'>  
        <div className='popup_inner'>  
            {/* <h1>{this.props.text}</h1>   */}
            <div class="text-right mb-3"><button type="button" class="btn btn-primary" onClick={this.props.closePopup}data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div>
			<div className="auth--container">
			<form>
					
						<label htmlFor="hourStart">始業時</label>
						<input type="text" 
							name="input_1"
							value={input_1}
							maxLength={2}
							required 
							onChange={this.onhandleChange} />

						<label htmlFor="minStart">始業分</label>
						<input type="text" 
							name="input_2" 
							value={input_2}
							maxLength={2}
							required 
							onChange={this.onhandleChange} /> 

						<label htmlFor="hourEnd">終業時</label>
						<input type="text" 
							name="input_3"
							value={input_3}
							maxLength={2}
							required 
							onChange={this.onhandleChange} />

						<label htmlFor="minEnd">終業分</label>
						<input type="text" 
							name="input_4"
							id="fullname" 
							value={input_4}
							maxLength={2}
							required 
							onChange={this.onhandleChange} />    

						<label htmlFor="content">業務内容</label>
						<input type="text"
						 
							name="content" 
							id="email" 
							value={content}
							maxLength={40} 
							required
							onChange={this.onCheckJapanese}  />

						<label htmlFor="text">勤怠状況</label>
						<input
							type="text"
							name="workplace"
							value={workplace}
							maxLength={4}
							required
							onChange={this.onCheckJapanese}  />
						
						<button onClick={this.onClick}  className="general-submit" children="OK" />

					
					</form>
				</div>
				
			</div>  
		</div>  
        );  
    }  
}  

export default Popup;