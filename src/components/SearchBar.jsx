function SearchBar({ searchTerm, setSearchTerm }) {
	return (
		<div className="searchbar-wrapper">
			<div className="searchbar">
				<input type="text" placeholder="Search for a topic" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
				<button>Search</button>
			</div>
			<div className="searchbar-line" />
		</div>
	);
}

export default SearchBar;
