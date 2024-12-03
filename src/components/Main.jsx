import { useState } from 'react';
import Articles from '../data/Articles';


function Main() {

    // Dichiaro un OBJECT di supporto contenente tutte le KEYS da usare come FILTER.
    // Dichiaro anche una variabile che sia il CONCAT dei valori delle KEYS

    const filterKeys = {
        idFilter: 'ID',
    }


    // Tramite USE-STATE imposto tutti i valori di DEFAULT iniziali delle variabili che voglio rendere reattive

    const [Feed, setFeed] = useState(Articles);

    const [idFilter, setIdFilter] = useState('ID');



    // Funzioni HANDLE

    const handleClearFilters = () => {
        setFeed(Articles);
        setIdFilter('ID');
    }


    const clearAll = () => {
        setIdFilter('');
    }


    // MODIFY TITLE
    const modifyTitle = () => {
        console.log('modify title');
    }


    // FILTERS

    const handleIdFilter = (e) => {
        setIdFilter(e.target.value);
    }


    // FORM SUBMIT

    const handleFormSubmit = async (e) => {

        // Impedisce che al SUBMIT venga ricaricata l'intera pagina
        await e.preventDefault();

        // Aggiorno lo USE-STATE dei FILTERS tramite il mio Array di supporto contenente le KEYS

        await setFeed(Articles);

        console.log('You searched for ID: ' + e.target.idFilter.value);

        let filteredFeed = await Feed.filter(item => item.id == idFilter);

        await setFeed(filteredFeed);

        console.log('FEED');
        console.log(Feed);
        console.log('ARTICLES');
        console.log(Articles);
    }



    return (
        <>
            <main>
                <div className="container">

                    <form action="" className='debug' onSubmit={handleFormSubmit}>
                        <input type="text" className='debug' name='idFilter' value={idFilter} onChange={handleIdFilter} onClick={clearAll} />

                        {/* Pur non essendo esplicitato, essendo questo BUTTON dentro il FORM, al CLICK eseguirà il SUBMIT */}
                        <button>Search</button>

                        {/* Assegnando type=button questo bottone al click NON eseguirà il SUBMIT del FORM */}
                        <button type='button' onClick={handleClearFilters}>Clear filters</button>
                    </form>

                    <ul className="feed">
                        {Feed
                            .map((feedItem) => (
                                <li key={feedItem.id} className=''>
                                    <div className='feedItem'>
                                        <h4>{feedItem.id}</h4>

                                        <button
                                            onClick={() => modifyTitle()}
                                        >
                                            Modify Title
                                        </button>

                                        <button
                                            onClick={() => setFeed(Feed.filter(item => item.id != feedItem.id))}
                                        >
                                            Delete
                                        </button>

                                        <h3>{feedItem.title}</h3>
                                        <p>{feedItem.content}</p>
                                        <p>{feedItem.author}</p>
                                    </div>
                                </li>
                            ))}
                    </ul>

                </div>
            </main >
        </>
    )
}

export default Main