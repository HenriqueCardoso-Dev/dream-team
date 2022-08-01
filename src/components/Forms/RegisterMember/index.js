import React, {useState} from "react";
import ComboBox from "../ComboBox";
import DefaultButton from "../DefaultButton";
/* import FileInput from "../FileInput"; */
import TextInput from "../TextInput";
import './index.css'

const RegisterMember = (props) => {
  
  const [name, setName] = useState('');
  const [nick, setNick] = useState('');
  const [functionInGame, setFunctionInGame] = useState('');
  const [squad, setSquad] = useState('');
  const [image, setImage] = useState('');

  const player = {
    name,
    nick,
    functionInGame,
    squad,
    image
  }


  const registerMember = (event) => {
    event.preventDefault();
    props.saveMember(player);
    setName('');
    setNick(''),
    setFunctionInGame('');
    setSquad('');
    setImage('');
  }

  return (
    <section className="d-flex justify-content-center">
      <form className="form px-5 py-3" onSubmit={registerMember}>
        <h2>CADASTRO DE MEMBRO</h2>
        <TextInput label="Nome" required={true} value={name} setValue={response => setName(response)}/>
        <TextInput label="Nick" required={true} value={nick} setValue={response => setNick(response)}/>

        <TextInput 
          label="Função" 
          placeholder="Ex.: Awper, Rifler, Entry Fragger..." 
          required={true} 
          value={functionInGame} 
          setValue={response => setFunctionInGame(response)}
        />

        <ComboBox 
          items={props.squads} 
          label="Equipe:" 
          placeholder="Este membro pertence a..." 
          required={true}
          value={squad}
          setValue={response => setSquad(response)}
        />

        <TextInput label="Imagem" required={true} value={image} setValue={response => setImage(response)}/>

        {/* <FileInput/> */}

        <DefaultButton color="success">
          Cadastrar Membro
        </DefaultButton>
        
      </form>
    </section>
  );
}

export default RegisterMember;