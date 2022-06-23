import { useState } from 'react'

const useInput = (name) => {
    const [value , setValue] = useState('')
    
    const onChange = (e) =>  setValue(e.target.value)
    
    return {value , onChange , name}
}
export default useInput