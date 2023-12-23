import { app } from "./server";

app()
	.listen({ port: 3001, host: "0.0.0.0" })
	.then(() => {
		console.log(`Server listening on port 3001`);
	});
