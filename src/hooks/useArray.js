import { useState } from "react";

const useArray = (defaultValue) => {
    const [array, setArray] = useState(defaultValue);
    function insert(element) {
        setArray(a => [...a, element]);
    }
    function filter(callBack) {
        setArray(a => a.filter(callBack));
    }
    function update(index, element) {
        setArray(a => [...a.slice(0, index), element, ...a.slice(index + 1, a.length)]);
    }
    function remove(index) {
        setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
    }
    function clear() {
        setArray([]);
    }
    return { array, insert, filter, update, remove, clear, set: setArray };
}

export default useArray;