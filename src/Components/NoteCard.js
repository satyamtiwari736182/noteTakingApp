import React from 'react'
import { styled } from 'styled-components'

const NoteCard = ({ note, handleDelete, handleEdit }) => {
    return (
        <Card>
            <h1>{note.title}</h1>
            <div>{note.desc}</div>
            <ButtonWrapper>
                <Button onClick={() => handleEdit(note)}>Edit</Button>
                <DeleteButton onClick={() => handleDelete(note.id)}>Delete</DeleteButton>
            </ButtonWrapper>
        </Card>
    )
}

export default NoteCard
const Card = styled.div`
    max-width: 49%;
    border: 2px solid green;
    display: flex;
    flex-direction: column;
    padding: 7px;
    margin:0 2px 2px 0;
    
    justify-content: space-between;
    font-family: sans-serif;
    h1{
        text-align: center;
        margin-bottom: 8px;
    }
    @media (max-width: 700px) {
    max-width: 100%;
  }
`;
const ButtonWrapper = styled.div`
text-align: center;
margin:7px 0;
`;

const Button = styled.button`
    padding: 10px 15px;
    border: none;
    background-color: #f0eb54;
    font-size: 14px;
    border-radius: 5px;
    margin: 0 5px 0  0;
    cursor: pointer;
    &:hover{
        background-color: #e3e30b;
    }

`;

const DeleteButton = styled(Button)`
background-color: #cf3827;

color: #fff;
&:hover{
    background-color: #9e210e;
}
`;
