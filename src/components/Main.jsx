import { useState } from 'react';
import Articles from '../data/Articles';

function Header() {

    const [Feed, setFeed] = useState(Articles);

    return (
        <>
            <main>
                <div className="container">

                    <form action="" className='debug'>
                        <input className='debug' type="text" placeholder='ID' />
                        <input className='debug' type="text" placeholder='Author' />
                        <input className='debug' type="text" placeholder='Title' />
                        <input className='debug' type="text" placeholder='State' />

                        <button className='debug'>Search</button>
                    </form>

                    <ul className="feed">
                        {Articles.map(article => (
                            <li key={article.id} className=''>
                                <div className='feedItem'>
                                    <h4>ID</h4>
                                    <button>Modify Title</button>
                                    <button>Delete</button>
                                    <h3>Title</h3>
                                    <p>Content</p>
                                    <p>Author</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
            </main>
        </>
    )
}

export default Header