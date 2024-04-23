import { useEffect, useRef, useState } from "react";

export function useSearch () {
    const [search, setSearch] = useState('')
    const isFirstInput = useRef(true)

    useEffect(()=> {
        if(isFirstInput.current){
            isFirstInput.current = search === ''
            return
        }
    }, [search])

    return {search, setSearch}
}