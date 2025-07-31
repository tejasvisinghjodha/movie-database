import search from "./assets/search.svg"
export default function Search(props) {
    return (
        <div className="search">
            <div>
                <img src={search} alt="" />
                <input type="text"
                    placeholder="Search through 300+ movies online"
                    value={props.searchTerm}
                    onChange={(event) => props.setSearchTerm(event.target.value)}
                />
            </div>
        </div>
    )
}