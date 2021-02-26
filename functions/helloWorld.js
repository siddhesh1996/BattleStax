exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ hello: "world" })
  }
  // let's return a JSON response that looks like: { hello: "world" }
};
