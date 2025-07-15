
import { Fio } from "./Input.style"

const InputComponent = ({type, text, style}) => {

  const inputTypes = ['Fio', 'Number', 'Email'];

  const InputObj = {
    Fio: 'text',
    Number: 'number',
    Email: 'email',
  };

  if(!inputTypes.includes(type)){
    return <h2> Type Xato berildi Input Componentga </h2>
  } else {
    return <Fio placeholder={text} type={InputObj[type]}/>
  }
}

export default InputComponent