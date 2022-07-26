import { useEffect } from "react";

function Kv({c, i}){

    // console.log('As gyvas', i)

    useEffect(() => {
        console.log('As gyvas', i);
        return () => {
            console.log('Numiro', i);
        }

    }, [i]); 

    return (
        <div className="kv" style={{
            backgroundColor: c + '66',
            borderColor: c
        }}></div>

    )

}

export default Kv;