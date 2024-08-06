export interface ChildrenProps {
	children: React.ReactNode;
}

export async function wait(time = 1000) {
	return new Promise((resolve) => setTimeout(resolve, time));
}
