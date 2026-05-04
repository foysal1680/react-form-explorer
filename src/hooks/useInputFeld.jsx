import { useState } from "react";

const useInputFeld = () => {
    const [filedValue, setFiledValue] = useState('');

    const handleChange = (e) => {
        setFiledValue(e.target.value);
    }

    return [filedValue, handleChange];
  
};

export default useInputFeld;