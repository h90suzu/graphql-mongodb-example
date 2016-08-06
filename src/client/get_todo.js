import axios from 'axios';

axios
  .get('http://localhost:3000/graphql', {
    params: {
      query: `{
        todo(id: "559645cd1a38532d14349241") {
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
