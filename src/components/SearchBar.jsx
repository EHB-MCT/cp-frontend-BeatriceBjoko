function SearchBar() {
	return (
		<div className="searchbar-wrapper">
			<div className="searchbar">
				<input type="text" placeholder="Search for a topic" />
				<button>Search</button>
			</div>
			<div className="searchbar-line" />
		</div>
	);
}

export default SearchBar;
