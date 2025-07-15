import {
  CallParrent,
  CallGlobal,
  CloseIcon,
  CallButton,
  CallInput,
  CallTitle,
} from "../Navbar.styles";
import ArrowRightIcon from "../icons/ArrowRightIcon";
const CallModal = ({ isOpen, onClose }) => (
  <CallParrent $isActive={isOpen}>
    <CallGlobal $isActive={isOpen}>
      <CloseIcon className="fa-solid fa-xmark" onClick={onClose} />
      <CallTitle>Заполните, и мы перезвоним</CallTitle>
      <CallInput type="text" name="fio" placeholder="ФИО" />
      <CallInput type="tel" name="tel" placeholder="Телефон" />
      <CallButton>
        Весь каталог <ArrowRightIcon />
      </CallButton>
    </CallGlobal>
  </CallParrent>
)

export default CallModal;