import { useState } from "react";

export function useQuilllnmput() {
    const [ quillValue, setQuillValue ] = useState("");

    const onChange = (value) => {
        setQuillValue(() => value);
    }

    return [ quillValue, onChange ];
}