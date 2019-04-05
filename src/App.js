import React from 'react';
import './App.css';
import Form from './container/form';
import Card from './component/card';

const CardList = (props) => (
	<div>
  	{props.profiles.map(profile => <Card {...profile}/>)}
	</div>
);

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
   this.setState(prevState => ({
     profiles: [...prevState.profiles, profileData],
   }));
    
  };
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles} />
    	</div>
    );
  }	
}



export default App;
