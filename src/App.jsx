
import { useState } from "react";
import Layout from "./components/Layout"
import './index.css';
import ShowModal from "./components/ShowModal";
import ModalCode from "./components/ModalCode";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [secondModal,setSecondModal]=useState(false)
  const handleLoginClick = () => {
    setIsModalOpen(true);

  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const secondCloseClick=()=>{
    setSecondModal(false)
  }

  const showSecondModal=()=>{
    setSecondModal(true)
    setIsModalOpen(false)
  }

  return (
    <main>
      <Layout handleLoginClick={handleLoginClick} />
      {isModalOpen && <ShowModal showSecondModal={showSecondModal} handleCloseModal={handleCloseModal}/> }
      {secondModal && <ModalCode secondCloseClick={secondCloseClick}/>}
    </main>
  )
}

export default App;
