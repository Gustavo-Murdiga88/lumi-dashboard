import { Modal } from "@/components/modal/widget";
import { Form } from "@/modules/invoices/presenter/organisms/form";

export default async function sendAttachments() {
	return (
		<Modal title="Enviar Faturas">
			<Form />
		</Modal>
	);
}
