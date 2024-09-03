import { IoIosAddCircle } from 'react-icons/io'
import { IoIosCloseCircle } from 'react-icons/io'

interface OpenCloseIconsProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const OpenCloseIcons = ({ isOpen, setIsOpen }: OpenCloseIconsProps) => {
  return (
    <>
      {isOpen ? (
        <IoIosCloseCircle
          onClick={() => setIsOpen(!isOpen)}
          size={40}
          className="close-icon"
        />
      ) : (
        <IoIosAddCircle
          onClick={() => setIsOpen(!isOpen)}
          size={40}
          className="add-icon"
        />
      )}
    </>
  )
}

export default OpenCloseIcons
