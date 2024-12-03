import { useState } from 'react';
import Articles from '../data/Articles';

function Main() {

    // Tramite USE-STATE imposto tutti i valori di DEFAULT iniziali delle variabili che voglio rendere reattive

    const [Feed, setFeed] = useState(Articles);

    const [idFilter, setIdFilter] = useState('ID');



    // Funzioni HANDLE

    const clearForm = () => {
        setIdFilter('ID');
    }

    const handleIdFilter = (e) => {
        setIdFilter(e.target.value);
    }

    return (
        <>
            <main>
                <div className="container">

                    <form action="" className='debug'>
                        <input type="text" className='debug' value={idFilter} onClick={() => setIdFilter('')} onChange={handleIdFilter} />
                        {/* <input type="text" placeholder='Author' className='debug' />
                        <input type="text" placeholder='Title' className='debug' />
                        <input type="text" placeholder='State' className='debug' /> */}

                        <button>Search</button>
                        <button type='button' onClick={clearForm}>Clear form</button>
                    </form>

                    <ul className="feed">
                        {Feed
                            .filter(article => article.id == idFilter)
                            .map(article => (
                                <li key={article.id} className=''>
                                    <div className='feedItem'>
                                        <h4>{article.id}</h4>
                                        <button>Modify Title</button>
                                        <button>Delete</button>
                                        <h3>{article.title}</h3>
                                        <p>{article.content}</p>
                                        <p>{article.author}</p>
                                    </div>
                                </li>
                            ))}
                    </ul>

                </div>
            </main>
        </>
    )
}

export default Main