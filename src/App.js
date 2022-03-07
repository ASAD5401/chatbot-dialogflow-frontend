import logo from './logo.svg';
import LoginForm from './components/LogInForm';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { useEffect, useState } from "react"
const axios = require('axios');


function App() {

  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [image,setImage]=useState("")
  console.log(messages)


  function sendMessage(e) {
    e.preventDefault();

    console.log("text: ", text);

    setMessages((prev) => {
      return [{ sender: "user", text: text }, ...prev];
    });


    // const dev = "http://localhost:7001"
    const dev="http://localhost:7001"
    const baseUrl = (window.location.hostname.split(":")[0] === "localhost") ? dev : "";

    axios.post(`${baseUrl}/talktochatbot`, {
      text: text,
    })
      .then((response) => {
        console.log(response.data)
        const res=response.data.text.split('|')
        console.log(res)

        setMessages((prev) => {
          if(res.length>1){
            return [{ sender: "bot", text: res[0],image:res[1]}, ...prev];

          }else{
            return [{ sender: "bot", text: res[0]}, ...prev];

          }
        });
        e.target.reset();
        setText("");

      }).catch(error => {
        console.log("error: ", error);

        setMessages((prev) => {
          return [{ sender: "bot", text: "dummy response from chatbot" }, ...prev,];
        });
        e.target.reset();
        setText("");

      })
  }

  return (
    <div className='main'>
        <Routes>
  <Route exact path="/login" element={<LoginForm />} ></Route>

</Routes>


      <Form onSubmit={sendMessage}>
        <Form.Group
          style={{
            display: "flex",
            justifyContent: "space-between"
          }} className="mb-3" controlId="formBasicEmail">

          <Form.Control
            onChange={(e) => { setText(e.target.value) }}
            type="text"
            placeholder="Enter your message"
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>

      <br />
      <br />
      <br />

      <div style={{ display: "flex", flexDirection: "column" }}>

        {messages?.map((eachMessage, eachMessageIndex) => (
          <div key={`${eachMessageIndex}-message`} style={{
            display: "flex",
            justifyContent: (eachMessage.sender === "user") ? "flex-end" : "flex-start"
          }}>
            <div>{eachMessage.text}</div>
            {(eachMessage.image)?<img className='image' src={eachMessage.image}></img>:<div></div>}
            {/* <img className='image' src={eachMessage.image}></img> */}
          </div>
        ))}

      </div>
    </div>
  );
}

export default App;
