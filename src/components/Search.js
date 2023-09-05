import React from 'react'

export default function Search(props) {
    // get the value of the input field
    // pass it to the parent component
    // clear the input field
    const {handleSearch} = props
    const [input, setInput] = React.useState('')
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleSearch(input)
        setInput('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={input} onChange={handleChange} />
            <button type='submit'>Search</button>
        </form>
    )
}
