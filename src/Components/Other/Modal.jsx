import { useGlobalContext } from '../../Context/AppContext'

export const Modal = ({ title, subtitle, listOne, listTwo }) => {
  const { isModalOpen, closeModal } = useGlobalContext()
  return (
    <div className='modal'>
      <div
        className={`${
          isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
        }`}
      >
        <div className='modal-container'>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
          {listOne && <li>{listOne}</li>}
          {listTwo && <li>{listTwo}</li>}
          <button className='close-modal-middle' onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
