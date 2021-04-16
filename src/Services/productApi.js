
const url = "https://run.mocky.io/v3/bf175661-5e9f-4112-8580-d587759ff72e";
const getData = async () => {
  const data= await (await fetch(url)).json()
  return data;
};

export default getData ;
