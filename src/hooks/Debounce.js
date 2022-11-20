import { useState, useEffect } from 'react'
function Debounce(value, delay) {
    const [debounce, setDebounce] = useState(value)

    useEffect(() => {
        const timmer = setTimeout(() => {
            setDebounce(value)
        }, delay)
        return () => {
            clearTimeout(timmer)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])
    return debounce
}

export default Debounce
