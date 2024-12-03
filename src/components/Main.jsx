import { useState } from 'react';
import Articles from '../data/Articles';

function Header() {

    const [Feed, setFeed] = useState(Articles);

    return (
        <>
            <main>
                <div className="container">

                    <form action="" className='debug'>
                        <input className='debug' type="text" />
                        <button className='debug'>Ricerca</button>
                    </form>




                </div>
            </main>
        </>
    )
}

export default Header