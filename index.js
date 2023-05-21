// Add your code here
// Test-1: Send data

const configrationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    name: "Steve",
    email: "steve@steve.com",
  }),
};

function submitData(userName, userEmail) {
  return fetch("http://localhost:3000/users", configrationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (Object) {
      document.body.textContent = Object["id"];
    })
    .catch(function (error) {
      alert("something went wrong");
      console.log(error.message);
      document.body.textContent = error.message;
    });
}

submitData();
