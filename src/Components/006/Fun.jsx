import { useState } from "react";


function Fun({spalva, setCount}){

    const [bg, setBg] = useState('green');
    

    const changeB = () => {
        //setBg('crimson');
        
        //setBg(bg === 'green' ? 'crimson' : 'green'); alternatyva 
        setBg(b => b === 'green' ? 'crimson' : 'green');

        console.log(bg);
    }

    const addOne = () => {
       
        setCount(c => c + 1);
        //endins + 3 (uzbaigs)
    }

    return(
        <>
        <h2 style={{color: spalva,
        backgroundColor: bg
    }}>FUN</h2>
    <button onClick={changeB}>Do Red</button>
    <button onClick={addOne}>+ 1</button>
    </>
    );
}

export default Fun;