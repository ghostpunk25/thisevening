import { StatisticsList } from 'componets/StatisticsList/StatisticsList';
import { Section } from '../Section/Section';
import data from '../../data.json';
import { Box } from 'componets/Box/Box';
import React from 'react';
import { Counter } from 'componets/Counter/Counter';
import { Form } from 'componets/Form/Form';
import { LoginForm } from 'componets/LoginForm/LoginForm';
import { FormFormik } from 'componets/FormFormik/FormFormik';
import { Dropdown } from 'componets/Dropdown/Dropdown';
import { Feedback } from 'componets/Feedback/Feetback';
import { Phonebook } from 'componets/Phonebook/Phonebook';
import { PhonebookV1 } from 'componets/PhonebookV1/PhonebookV1';
import { Example } from 'componets/Player/Example/Example';
import { Reader } from 'componets/Reader/Reader';
import readerList from "../../reader.json"
import { PokemonFormik } from 'componets/Pokemon/PokemonFormik/PokemonFormik';
import { PokemonApi } from 'componets/Pokemon/PokemonApi/PokemonApi';
import { MaterialsForm } from 'componets/Materials/MaterialsForm/MaterialsForm';
import * as API from '../../services/api';
import { MaterialsList } from 'componets/Materials/MaterialsList/MaterialsList';
import { Searchbar } from 'componets/Pixabay/Searchbar/Searchbar';
import { PixabayInfo } from 'componets/Pixabay/PixabayInfo/PixabayInfo';



class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    materials: [],
    pixabayName: '',
  };

  // componentDidMount() {

  //   const saveContacts = localStorage.getItem('contacts');
  //   if (saveContacts) {
  //     const pars = JSON.parse(saveContacts)
  //     this.setState({
  //       contacts: pars,
  //     })
  //   };
  // };

  async componentDidMount() {
    try {
      const materials = await API.getMaterial();
      this.setState({ materials });
    } catch (err) {
      console.log(err);
    };
  };

  pixabayName = (name) => {
    this.setState({
      pixabayName: name,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    };
  };

  addMaterial = async (values) => {
    try {
      const material = await API.addMaterial(values);
      this.setState(prevState => ({
        materials: [...prevState.materials, material]
      }))
    } catch (err) {
      console.log(err);
    };
  };

  deleteMaterial = async (id) => {
    try {
      await API.deleteMaterial(id)
      this.setState(prevState => ({
        materials: prevState.materials.filter(material => material.id !== id)
      }))
    } catch (err) {
      console.log(err);
    };
  };

  putMaterial = async (fields) => {
    try {
      const updateMaterial = await API.putMaterial(fields)
      this.setState(prevProps => ({
        materials: prevProps.materials.map(material => material.id === fields.id ? updateMaterial : material)
      }));
    } catch (err) {
      console.log(err);
    };
  };

  pokemonName = name => {
    this.setState({
      name
    });
  };

  dataForm = contact => {
    console.log(contact);
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  formData = contact => {
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  contactsDelete = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  chengeFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {

    const normalizedFilter = this.state.filter.toLowerCase();
    const vsisibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));

    return (
      <Box py='8' px='4' bg='smallBlue' height='100%'>
        <Section title='Upload stats'>
          <StatisticsList
            items={data}
          />
        </Section>
        <Counter />
        <Form onSubmit={this.dataForm} />
        <LoginForm />
        <FormFormik />
        <Dropdown />
        <Feedback />
        <Phonebook onSubmit={this.formData} contacts={vsisibleContacts} contactsDelete={this.contactsDelete} filter={this.state.filter} chengeFilter={this.chengeFilter} />
        <PhonebookV1 filter={this.state.filter} chengeFilter={this.chengeFilter} contactsDelete={this.contactsDelete} contacts={vsisibleContacts} onSubmit={this.formData} />
        <Example />
        <Reader items={readerList} />
        <PokemonFormik pokemonName={this.pokemonName} />
        <PokemonApi pokemonName={this.state.name} />
        <MaterialsForm onSubmit={this.addMaterial} />
        <MaterialsList onUpdate={this.putMaterial} items={this.state.materials} onDelete={this.deleteMaterial} />
        <Searchbar onSubmit={this.pixabayName} />
        <PixabayInfo pixabayName={this.state.pixabayName} />
      </Box>
    );
  };
};

export default App;


