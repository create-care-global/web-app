import Box from '@material-ui/core/Box';
import Block from 'common/components/Block';
import Button from 'common/components/Button';
import H1 from 'common/components/H1';
import Main from 'common/components/Main';
import Paper from 'common/components/Paper';
import Select from 'common/components/Select';
import TextArea from 'common/components/TextArea';
import TextInput from 'common/components/TextInput';
import React, { Component } from 'react';

class ProjectRegister extends Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: '',
      microNeed: '',
      numberOfItems: '',
      sourceOfItems: '',
      estimatedCost: '',
      amountOfKidsHelped: '',
      whyIsThisImportant: '',
      meaningToTheKids: '',
      personalMessage: ''
    };
  }
  // On change of input field, update the field
  onChange = (event: any) =>
    this.setState({ [event.target.name]: event.target.value })

  // On submit of form, send state to the back end to be stored
  onSubmit = () => {
    // console.log(this.state);
    // return this.state;
  }

  // On clicking radio button choice, select the type of funding
  onRadioChange = (event: any) => {
    this.setState({
      fundingChoice: event.target.value
    });
  }

  render() {
    const {
      title,
      microNeed,
      numberOfItems,
      sourceOfItems,
      estimatedCost,
      amountOfKidsHelped,
      whyIsThisImportant,
      meaningToTheKids,
      personalMessage
    } = this.state;

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
              value={title}
            />

            <TextInput
              name="microNeed"
              label="What is your MicroNeed"
              onChange={this.onChange}
              value={microNeed}
            />
            <TextInput
              name="numberOfItems"
              label="How many of those items do you need?"
              onChange={this.onChange}
              type="number"
              value={numberOfItems}
            />

            <Select
              name="sourceOfItems"
              value={sourceOfItems}
              options={[
                { value: '', label: 'Select option' },
                { value: 'DIRECT', label: 'Items to be sent directly to you' },
                { value: 'LOCAL', label: 'Funding to source the item locally' },
                {
                  value: 'OTHER',
                  label: 'Funding to source the item somewhere else'
                }
              ]}
              onChange={this.onChange}
            />
            <TextInput
              name="estimatedCost"
              label="Estimated cost (if you have a sense)?"
              onChange={this.onChange}
              type="number"
              value={estimatedCost}
            />
            <TextInput
              name="amountOfKidsHelped"
              label="How many of those items do you need?"
              onChange={this.onChange}
              type="number"
              value={amountOfKidsHelped}
            />
            <TextArea
              label={'Why is this important? (150 words)'}
              onChange={this.onChange}
              name="whyIsThisImportant"
              rows={4}
              value={whyIsThisImportant}
            />
            <TextArea
              label={
                'If we can meet this need, what will it mean for your kids? (150 words)'
              }
              onChange={this.onChange}
              name="meaningToTheKids"
              rows={4}
              value={meaningToTheKids}
            />
            <TextArea
              label={
                'Anything else you\'d like to share with potential SOLVERs (e.g. personal message)?'
              }
              onChange={this.onChange}
              name="personalMessage"
              rows={4}
              value={personalMessage}
            />

            <Button onClick={this.onSubmit}>Submit</Button>
          </Paper>
        </Block>
      </Main>
    );
  }
}

export default ProjectRegister;
