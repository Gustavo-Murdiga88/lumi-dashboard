export function dateFormat(date: string) {
	const [month, year] = date.split(" ");

	return `${month.toLocaleUpperCase()} / ${year}`;
}
