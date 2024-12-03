import { useState } from 'react';
import Articles from '../data/Articles';

function Header() {

    const [Articles, setArticles] = useState(Articles);

    return (
        <>
            <main>
                <div className="container">

                </div>
            </main>
        </>
    )
}

export default Header