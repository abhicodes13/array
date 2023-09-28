
async function getconst() {
  const url = 'https://moviesdatabase.p.rapidapi.com/actors';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aaf412f001mshb16825a0d5065e6p181d8ajsn4a009ea4951a',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  const data = result.results;
   const arrau = document.getElementById("div");
arrau.innerHTML = data.map((list)=>list.primaryName);


} catch (error) {
	console.error(error);
}
}
getconst()
