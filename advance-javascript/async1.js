
// api --> https://dummyjson.com/users

// fetch

function getUsers() {

  const res = fetch("https://dummyjson.com/users");

  res
      .then(data => data.json())
      .then(data2 => {
          console.log(data2); // {users : [], skip : , total : }
          const users = data2.users;
          // div --> 
          for (let user of users) {
              const para = document.createElement("p");

              para.innerHTML = user.firstName;

              document.body.appendChild(para);
          }

      })
      .catch((error) => console.log(error));

}



// api-----> https://dummyjson.com/todos


function getTodos() {
  const res = fetch("https://dummyjson.com/todos");
  res
       .then(data => data.json())
      .then(data2 => {
          // add this data to fe
          const todos = data2.todos;

          todos.forEach(todo => {
              const para = document.createElement("p");

              para.innerHTML = todo.todo;

              document.body.appendChild(para);
          });
      })
      .catch(error => console.log(error))
}


//api = https://dummyjson.com/products

function getProducts() {
  const res = fetch("https://dummyjson.com/products");
  res
    .then(data => data.json())
    .then(data2 => {
      console.log(data2); // Contains products array
      const products = data2.products;

      for (let product of products) {
        const para = document.createElement("p");

        // Show the product title
        para.innerHTML = product.title;

        document.body.appendChild(para);
      }
    })
    .catch((error) => console.log(error));
}
