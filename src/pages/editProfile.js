const EditProfile = () => {
  const viewEditProfile = `  <section id="EditProfile" class="Box">
  </section>`;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewEditProfile;

  return divElemt;
};

export default EditProfile;
