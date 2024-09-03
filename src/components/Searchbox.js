import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const items = [
    {
        id: 0,
        name: 'Html'
    },
    {
        id: 1,
        name: 'JavaScript'
    },
    {
        id: 2,
        name: 'Css'
    },
    {
        id: 3,
        name: 'Bootstrap'
    },
    {
        id: 4,
        name: 'Java'
    },
    {
        id: 5,
        name: 'Python'
    }
]
const handleOnSearch = (string, results) => {
    console.log(string, results)
}

const handleOnHover = (result) => {
    console.log(result)
}

const handleOnSelect = (item) => {
    console.log(item)
}

const handleOnFocus = () => {
    console.log('Focused')
}
const formatResult = (item) => {
    return (
        <>
            <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
        </>
    )
}
function Searchbox() {
    return (
        <div className="App d-none d-lg-block">
            <header className="App-header">
                <div style={{ width: 200 }}>
                    <ReactSearchAutocomplete
                        items={items}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        formatResult={formatResult}
                    />
                </div>
            </header>
        </div>
    )
}

export default Searchbox