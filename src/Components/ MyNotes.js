import { useContext, useEffect, useState } from "react";
import UserContext from "../Context/UserContext";
import NoteCard from "./NoteCard";
import { styled } from "styled-components";

const MyNotes = () => {
    const [note, setNote, isEditing, setIsEditing] = useContext(UserContext);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        if (localStorage.key(0) !== "note")
            localStorage.setItem("note", "[]");
        setNotes(JSON.parse(localStorage.getItem("note")));
    }, []);

    useEffect(() => {
        setNotes(prev => {
            if (note.id !== null) {
                let flag = 0;

                let noteList = prev.map(noteData => {
                    if (noteData.id === note.id) {
                        flag = 1;
                        return note;
                    }
                    return noteData;
                })

                if (flag === 1) {
                    localStorage.setItem("note", JSON.stringify([...noteList]));
                    return noteList;
                }

                localStorage.setItem("note", JSON.stringify([...prev, note]));
                return [...prev, note];
            }
            return prev;
        });


    }, [note])


    const handleEdit = (editNote) => {
        setNote(editNote);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        const noteList = notes.filter(noteData => noteData.id !== id);
        setNotes(noteList);
        localStorage.setItem("note", JSON.stringify(noteList));
    }

    return <Container>
        {notes.map((note, i) => <NoteCard key={i} note={note} handleDelete={handleDelete} handleEdit={handleEdit} />)}
    </Container>

}
export default MyNotes;


const Container = styled.div`
    flex:4;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1050px) {
    margin-top: 20px;
  }
    @media (max-width: 700px) {
    display: block;
  }
`;