import { useState } from 'react'

function handleSubmit (e) {
  e.preventDefault()
  alert(e.target['my_input'].value)
}
const QuestionForm = () => {
  const [inputValue, setInputValue] = useState('Que voulez-vous savoir?')
  const isInputError = inputValue.includes('f')
  // const checkValue = value => if(!value.includes.)
  return (
    <div>
      <textarea
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={() => alert(inputValue)}>Alertez-moi!</button>
    </div>
  )
}

export default QuestionForm
