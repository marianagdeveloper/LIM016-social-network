const Publications = () => {
  const viewPublications = `
    <h1>PUBLICATIONS PUBLIC</h1>
    <p>All publications</p>
  `;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewPublications;

  return divElemt;
};

export default Publications;
