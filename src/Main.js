import React, {useState} from 'react'
import Form from './Form'
import Todo from './Todo'
const Main = () => {
  const [inputs, setInputs] = useState([]);
  const addInput = text => {
    const newInput = text.split('')
    for(let i=0;i<newInput.length;i++) {
      if(newInput[i] === " ")
      delete newInput[i]
    }
    setInputs(newInput)
  }
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <main className="layout">
  <div className={isActive ? "sidebar slide-in" : "sidebar"}>
    <div className="container">
      <h2>Why I should be hired?</h2>
      <p>Everyone has a great reason why they should be hired. Here are ten reasons why I should be hired </p>
      <ul className="hire-me-list">
        <li className="sidebar-list">I love web development and the web!</li>
        <li className="sidebar-list">I am a life long learner</li>
        <li className="sidebar-list">I do not shy away from challenges</li>
        <li className="sidebar-list">You are hiring!</li>
        <li className="sidebar-list">I am a self starter</li>
        <li className="sidebar-list">I am also a team player</li>
        <li className="sidebar-list">You will know the rest when you hire me!</li>
      </ul>
    </div>
    
    <span onClick={handleToggle} id="collapse"><i className="fas fa-arrow-left"></i></span>
  </div>
  <div className={isActive ? "main-body full-width" : "main-body"}>
  <Form addInput={addInput}/>
 <div className="display-showcase">
   <div className="showcase">
   {inputs.map((inp, index) => (
     <Todo key={index} inp={inp} className="showcaseItem"/>
   ))}
  </div>
</div>   
</div>
</main>

  )
}

export default Main
