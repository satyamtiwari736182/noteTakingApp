import { useContext, useEffect, useState } from "react";
import UserContext from "../Context/UserContext";
import styled from 'styled-components';

function NoteForm({ addEntryToPhoneBook }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [note, setNote, isEditing, setIsEditing] = useContext(UserContext);
    useEffect(() => {
        if (isEditing) {
            setTitle(note.title);
            setDescription(note.desc);
        }
    }, [isEditing]);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title !== "" && description) {
            setNote({ id: Math.floor(Math.random() * 100000), title: title, desc: description })
            setTitle("")
            setDescription("")
        }
    }
    const handleSave = () => {
        if (title !== "" && description !== "") {
            setNote({ id: note.id, title: title, desc: description })
            setTitle("")
            setDescription("")
            setIsEditing(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <Editor>
                <input
                    name='title'
                    type='text'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="Enter Note title"
                    required
                />

                <textarea
                    name='description'
                    type='textarea'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    placeholder="Enter note description"
                    required
                />

                <ButtonWrapper>
                    {!isEditing ? <button type='submit' onClick={handleSubmit}>Add Note</button> :
                        isEditing && <button onClick={handleSave}>Save</button>}

                    <button type='reset'
                        onClick={() => {
                            setTitle("")
                            setDescription("")
                        }}
                    >Reset</button>
                </ButtonWrapper>

            </Editor>
        </form>
    )
}

export default NoteForm;

const Editor = styled.div`
margin:0 10px;
flex:2;
input, textarea{
    background-color: #f5faf6;
    margin-bottom: 5px;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    font-family: sans-serif;
    font-size: medium;
    outline: none;
    border: none;
    box-shadow: 2px 2px 2px 2px #e4e6e3;
}
textarea {
    min-height: 300px;
    resize: none;
}
button{
    margin-top: 10px;
    padding: 10px 15px;
    border: none;
    background-color: lightseagreen;
    font-size: 14px;
    border-radius: 5px;
    margin: 0 5px 0  0;
    cursor: pointer;
    &:hover{
        background-color: darkseagreen;
    }
 }

`;

const ButtonWrapper = styled.div`
text-align: center;
`;