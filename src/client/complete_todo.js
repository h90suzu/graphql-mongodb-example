import axios from 'axios';

axios
  .post('http://localhost:3000/graphql', {
    query: `
      mutation M {
        todo: completeTodo(id: "559645cd1a38532d14349246") {
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
