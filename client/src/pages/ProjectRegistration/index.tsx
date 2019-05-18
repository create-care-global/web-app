import Main from 'common/components/Main';
import React, {Component} from 'react';

class ProjectRegister extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
        projectName: '',
        microNeed: '',
        itemAmount: '',
        //choice: 
        kidAmount: '',
        importance: '',
        meaning: ''
    }
  }
  //TODO on change
  onChange = (event: any)  => this.setState({ [event.target.name]: event.target.value });
  //TODO on submit
  onSubmit = () => {
    return this.state
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
      <div>
        <input type='radio' value="direct"/> Items to be sent directly
        <input type='radio' value="local"/> Funding to source the item locally
      </div>

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
