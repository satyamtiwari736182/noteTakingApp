import './App.css';

import React, { useState } from 'react';
import { styled } from 'styled-components';
import MyNotes from './Components/ MyNotes';
import NoteForm from './Components/NoteForm';
import UserContext from './Context/UserContext';

function Application(props) {

  const [note, setNote] = useState({ id: null, title: "", desc: "" })
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <Heading>NOTES</Heading>
      <Wrapper>
        <UserContext.Provider value={[note, setNote, isEditing, setIsEditing]}>
          <NoteForm />
          <MyNotes />
        </UserContext.Provider>
      </Wrapper>
    </>
  );
}

export default Application;

const Wrapper = styled.div` 
  display: flex;
  justify-content: space-between;
  padding: 2%;
  align-content: center;
  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;

const Heading = styled.h1`
  background: #f2c855;
  padding: 10px;
  color: #fff;
  text-align: center;
`;




