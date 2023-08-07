import { useState } from "react";


const useToggle = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);
    function toggleValue() {
        setValue(a => !a);
    }
    return [value, toggleValue];
}

export default useToggle
