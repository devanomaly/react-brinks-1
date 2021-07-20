import { useState } from "react"
import Modal from "./Modal"
import Backdrop from "./Backdrop"

function Todo(props) {
  const [modalIsOpen, setModalisOpen] = useState(false)
  const deleteHandler = _ => setModalisOpen(true)
  const closeModalHandler = _ => setModalisOpen(false)
  const cancelDelete = _ => closeModalHandler()
  const confirmDelete = _ => { console.log("deletado"); closeModalHandler() }
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {modalIsOpen && <Modal onCancel={cancelDelete} onConfirm={confirmDelete} />}
      {/* {modalIsOpen ? <Modal /> : null} */}
      {/* completamente equivalentes as duas linhas anteriores! */}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  )
}
export default Todo