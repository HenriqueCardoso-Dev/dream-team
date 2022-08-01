import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import RegisterMember from './components/Forms/RegisterMember';
import NavBar from './components/NavBar/NavBar';

const App = () => {

  const squads = [
    {label: 'Line Principal', id: '0'},
    {label: 'Managers', id: '1'},
    {label: 'Coach', id: '2'},
    {label: 'Inverstidores', id: '3'},
    {label: 'Reservas', id: '4'},
    {label: 'Criadores de Conteúdo', id: '5'},
    {label: 'Marketing', id: '6'}
  ];
  
  const [members, setMembers] = useState([]);

  const addNewMember = (member) => {
    setMembers([...members, member]);
  }

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home squads={squads} members={members}/>} />

        <Route path="/register-member" element={<RegisterMember saveMember={member => addNewMember(member)} squads={squads}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
