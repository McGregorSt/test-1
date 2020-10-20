import React, {useState} from "react";

import './mainMenu.css'
import MenuElm from "./MenuElm/MenuElm";


const MainMenu = () => {

    const menuElms = [
        'Main',
        'Gallery',
        'Articles',
        'Videos'
    ]

    const [clicked, setClicked] = useState('')

    const onClickHandler = (e, elm) => {
      console.log(elm)
      const newElm = elm
      setClicked(() => newElm)
      console.log(clicked)
    }

    const menuElmsDisplay = menuElms.map((elm, id) => <MenuElm key={id} elm={elm} clickMenuBtn={(e) => onClickHandler(e, elm)} />)

  return (
      <div className='menuBar'>
          <div className='menuBarElm'>
            {menuElmsDisplay}
          </div>
      </div>
  )
};

export default MainMenu;
