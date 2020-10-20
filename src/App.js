import React, { useState } from "react";
import "./App.css";


import Header from "./components/header/header";
import InputForm from "./components/InputForm/InputForm";
import Light from "./components/Light/Light";
import MainMenu from "./components/mainMenu/MainMenu";
import MovieDisplay from "./components/MovieDisplay/MovieDisplay";
import MovieTicket from "./components/MovieDisplay/MovieTicket/MovieTicket"

function App() {

  const [isOn, setIsOn] = useState(true)

  const [newTitle, setNewTitle] = useState()
  const [newNumber, setNewNumber] = useState()
  const [ticket, setTicket] = useState([])
  
  const onTitleChangeHandler = (e) => {
    setNewTitle(e.target.value)
  } 
  const onNumberChangeHandler = (e) => {
    setNewNumber(e.target.value)
  } 
  
  const onClickHandler = (e) => {
    console.log('click', newTitle, newNumber)
    setTicket([...ticket, {title: newTitle, number: newNumber}])
  }

  const onTicketClick = (e, id) => {
    console.log('ticketClick', ticket, e.target)
  }

  const turnOnHandler = () => {
    setIsOn(!isOn)
  }


  const movieDisplay = ticket.map(({ title, number}, index) => (
    <MovieTicket key={`${title}${number}`} movieTitle={title} movieNumber={number} ticketClick={onTicketClick} id={index}/>
  ))
  // const ticketDisplay = ticket.map(elm => (
  //   console.log('elm', elm)
  // ))

  return (
    <div>
      <Header />
      <MainMenu />
      <Light styles={isOn ? 'isOn' : 'isOff'} turnOn={turnOnHandler}/>
      <InputForm 
        clicked={() => onClickHandler()}
        onTitleChange={(e) => onTitleChangeHandler(e)}
        onNumberChange={(e) => onNumberChangeHandler(e)}
        />
      { movieDisplay }

    </div>
  );
}

export default App;
