import axios from 'axios';

axios
  .get('http://localhost:3000/graphql', {
    params: {
      query: `{
        todos(completed: true) {
          id
          title
          completed
        }
      }`,
    },
  })
  .then((res) => {
    console.log(JSON.stringify(res.data, null, "\t"));
  })
  .catch((err) => {
    console.log(err.response.data);
  });
