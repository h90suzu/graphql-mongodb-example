import axios from 'axios';

const title = 'new todo';

axios
  .post('http://localhost:3000/graphql', {
    query: `
      mutation M {
        todo: createTodo(title: "${title}") {
          id
          title
          completed
        }
      }
    `,
  })
  .then((res) => {
    console.log(JSON.stringify(res.data, null, "\t"));
  })
  .catch((err) => {
    console.log(err.response.data);
  });
