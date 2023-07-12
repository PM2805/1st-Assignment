fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((data) => {
        const tableBody = document.querySelector("#photoTable tbody");

        data.forEach((posts) => {
            const row = document.createElement("tr");

            row.innerHTML = `<td>${posts.userId}</td>
            <td>${posts.id}</td>
            <td>${posts.title}</td>
            <td>${posts.body}</td>`;
            tableBody.appendChild(row);
        });
      })
    .catch((error) => {
        console.log("abc");
      });



     