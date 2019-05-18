import Box from '@material-ui/core/Box';
import Block from 'common/components/Block';
import H1 from 'common/components/H1';
import H2 from 'common/components/H2';
import Main from 'common/components/Main';
import Paper from 'common/components/Paper';
import TextInput from 'common/components/TextInput';
import React, { Component } from 'react';

class ProjectRegister extends Component<{}, any> {
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
    };
  }
  // On change of input field, update the field
  onChange = (event: any) =>
    this.setState({ [event.target.name]: event.target.value })

  // On submit of form, send state to the back end to be stored
  onSubmit = () => {
    return this.state;
  }

  // On clicking radio button choice, select the type of funding
  onRadioChange = (event: any) => {
    this.setState({
      fundingChoice: event.target.value
    });
  }

  render() {
    return (
      <Main>
        <Box mt={2} />
        <Block size="md">
          <Paper>
            <H1>Project registration</H1>
            <TextInput
              name="title"
              placeholder="Name of your project"
              label="Project name"
              onChange={this.onChange}
            />

            <H2>What is your MicroNeed</H2>
            <TextInput
              name="microNeed"
              placeholder="MicroNeed of your project"
              label="MicroNeed"
              onChange={this.onChange}
            />
            <TextInput
              name="numberOfItems"
              placeholder="Number of items"
              label="Number of items"
              onChange={this.onChange}
              type="number"
            />

            <H2>Are you looking for:</H2>
            {/* TODO add unordered list for the radio buttons
    https://magnusbenoni.com/radio-buttons-react/*/}
            <ul>
              <li>
                <input
                  type="radio"
                  value="direct"
                  onChange={this.onRadioChange}
                  checked={this.state.fundingChoice === 'direct'}
                />{' '}
                Items to be sent directly
              </li>
              <li>
                <input
                  type="radio"
                  value="local"
                  onChange={this.onRadioChange}
                  checked={this.state.fundingChoice === 'local'}
                />{' '}
                Funding to source the item locally
              </li>
            </ul>

            <H2>How many kids will this help</H2>
            <input
              type="text"
              name="kidAmount"
              placeholder="Amount of kids helped"
              onChange={this.onChange}
            />

            {/*TODO word limitation*/}
            <H2>Why is this so important(150 words)</H2>
            <textarea
              name="importance"
              placeholder="Importance of the project"
              onChange={this.onChange}
            />

            <H2>
              If we can meet this need, what will it mean for your kids?(150
              words)
            </H2>
            <textarea
              name="meaning"
              placeholder="Meaning to the kids"
              onChange={this.onChange}
            />
            <br />
            <button onClick={this.onSubmit}>Submit</button>
          </Paper>
        </Block>
      </Main>
    );
  }
}

export default ProjectRegister;
