import Main from 'common/components/Main';
import React, {Component} from 'react';


class ProjectRegister extends Component<{}, any>  {
  constructor(props: any) {
    super(props);
    this.state = {
        projectName: '',
        microNeed: '',
        itemAmount: '',
        fundingChoice: '', 
        kidAmount: '',
        importance: '',
        meaning: ''
    }
  }
  //On change of input field, update the field
  onChange = (event: any)  => this.setState({ [event.target.name]: event.target.value });
  
  //On submit of form, send state to the back end to be stored
  onSubmit = () => {
    return this.state
  }

  //On clicking radio button choice, select the type of funding
  onRadioChange = (event: any) => {
      this.setState({
          fundingChoice: event.target.value
      });
  }

  render() {
  return (
    <Main>
      <h1>Project registration</h1>
      <input 
        type='text' 
        name='projectName' 
        placeholder='project name' 
        onChange={this.onChange}
      />
      {/*TODO multiple microneeds*/}
      <h3>What is your MicroNeed</h3>
      <span>
        <input 
            type='text' 
            name='microNeed' 
            placeholder='Microneed' 
            onChange={this.onChange}
          />
        <input type='text' name='itemAmount' placeholder='Number Of Items' />
      </span>

      <h3>Are you looking for:</h3>
      {/* TODO add unordered list for the radio buttons
    https://magnusbenoni.com/radio-buttons-react/*/ }
      <ul>
        <li>
            <input 
                type='radio' 
                value="direct"
                onChange={this.onRadioChange}
                checked={this.state.fundingChoice==="direct"}
            /> Items to be sent directly
        </li>
        <li>
            <input 
                type='radio' 
                value="local"
                onChange={this.onRadioChange}
                checked={this.state.fundingChoice==="local"}
            /> Funding to source the item locally
        </li>
      </ul>

      <h3>How many kids will this help</h3>
      <input 
        type='text' 
        name="kidAmount" 
        placeholder="Amount of kids helped" 
        onChange={this.onChange}
      />

      {/*TODO word limitation*/}
      <h3>Why is this so important(150 words)</h3>
      <textarea 
        name="importance" 
        placeholder="Importance of the project" 
        onChange={this.onChange}
      />

      <h3>If we can meet this need, what will it mean for your kids?(150 words)</h3>
      <textarea  
        name='meaning' 
        placeholder='Meaning to the kids' 
        onChange={this.onChange}
      />

      <button onClick={this.onSubmit} />
    </Main>
  )}
};

export default ProjectRegister;
