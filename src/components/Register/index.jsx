import "./style.css";
const { useState } = require("react");

const Register = ({ setUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const submitRender = (event) => {
    event.preventDefault();
    const user = { name, age };
    setUser((oldUsers) => [user, ...oldUsers]);
  };

  const submiteRemove = (event) => {
    event.preventDefault();
    const user = { name, age };
    setUser((oldUsers) => {
      const currentUsers = [...oldUsers];
      const iFound = currentUsers.findIndex((elt) => elt.name === user.name);
      if (iFound > 0) {
        currentUsers.splice(iFound, 1);
        return [...currentUsers];
      }
    });
  };

  return (
    <form className="register-form" onSubmit={submitRender}>
      <input onChange={(event) => setName(event.target.value)} type="text" />
      <input onChange={(event) => setAge(event.target.value)} type="text" />
      <button onSubmit={submitRender} type="submit">
        Register
      </button>
      <button onClick={submiteRemove} type="submit">
        Delete by Name
      </button>
    </form>
  );
};

export default Register;
