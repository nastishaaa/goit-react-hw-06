export default function SearchBox() {

    const handleSubmit = (ev) => {
        ev.preventDefault()
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder="Contact..."
                required />
                <input type="tel" 
                placeholder="Phone number..."
                required />
                <button type="submit">Add contact</button>
            </form>
        </>
    )
}