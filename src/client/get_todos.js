import axios from 'axios';

axios
  .get('http://localhost:3000/graphql', {
    params: {
      query: `{
        todos {
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
    console.log(err);
  });
