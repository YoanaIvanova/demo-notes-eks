import { useEffect, useState } from 'react';

import axios from 'axios';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { BiNotepad } from 'react-icons/bi';

import NoteCard from './components/NoteCard';
import NoteFormModal from './components/NoteFormModal';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [notes, setNotes] = useState([]);

  const getNotes = () => {
    axios.get(process.env.REACT_APP_API_ENDPOINT).then(res => {
      setNotes(res.data._embedded.notes);
    });
  }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="wrapper">
      <Container>
        <Row>
          <h1 className="mt-5 text-center text-white mb-0"> <BiNotepad size="3rem" /> Demo Notes App</h1>
        </Row>
        <Row className="justify-content-center">
          <Col className="d-flex justify-content-center">
            <NoteFormModal getNotes={getNotes} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          {notes?.map((note, index) => (
            <Col key={index + note.title} xs={12} className="d-flex justify-content-center mt-3 mb-3">
              <NoteCard
                note={note}
                getNotes={getNotes}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
