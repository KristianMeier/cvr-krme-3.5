import { useGlobalContext } from '../../Context/AppContext'

export const Modal = ({ title, subtitle }) => {
  const { isModalOpen, closeModal } = useGlobalContext()
  return (
    <div className='modal'>
      <div
        className={`${
          isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
        }`}
      >
        <div className='modal-container'>
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
          <button className='close-modal-middle' onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
