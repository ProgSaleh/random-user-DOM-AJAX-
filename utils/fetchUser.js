const getUser = async (URL) => {
  const response = await fetch(URL);
  const data = await response.json();
  // console.log(data);
  const person = data.results[0];
  const { phone, email } = person;
  const {
    picture: { large: image },
  } = person;

  const {
    login: { password },
  } = person;
  const {
    name: { first, last },
  } = person;
  const {
    dob: { age },
  } = person;
  const {
    location: {
      street: { number, name },
    },
  } = person;

  return {
    phone,
    email,
    image,
    password,
    name: `${first} ${last}`,
    age,
    street: `${number} ${name}`,
  };
};

export default getUser;
