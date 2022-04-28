import axios from "axios";

useEffect(() => {
	// axios
	// 	.get("https://jsonplaceholder.typicode.com/users")
	// 	.then((res) => console.log(res))
	// 	.catch((err) => console.log(err));

	fetch("https://jsonplaceholder.typicode.com/todos/1")
		.then((response) => response.json())
		.then((json) => console.log(json));
}, []);
