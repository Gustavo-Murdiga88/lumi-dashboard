import { randomUUID } from "node:crypto";

export class Entity<T> {
	props: T;

	id: string;

	constructor(props: T & { id?: string }) {
		this.props = props;
		this.id = props?.id ?? randomUUID();
	}
}
