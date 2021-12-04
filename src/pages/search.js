const Search = () => {
  const viewSearch = `      
  <section id="Search" class="Box">
  </section>`;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewSearch;

  return divElemt;
};

export default Search;
