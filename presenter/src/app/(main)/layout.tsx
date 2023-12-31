import { Search } from "lucide-react";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/avatar/widget";
import { Nav } from "@/modules/main/presenter/organisms/nav";

export default function MainLayout({ children }: { children: ReactNode }) {
	return (
		<main className="flex h-full min-h-screen flex-col gap-8 p-4 lg:p-6">
			<header className="flex items-center justify-between rounded-lg border border-zinc-300 p-4">
				<Nav />
				<div className="flex items-center gap-4 lg:gap-20">
					<Button
						variant="ghost"
						aria-label="pesquisar"
						className="flex lg:hidden"
					>
						<span className="sr-only">pesquisar</span>
						<Search />
					</Button>

					<div className="flex items-center gap-4">
						<span className="text-[12px] font-semibold">Lumi Dashboard</span>
						<Avatar
							src="https://uploads-ssl.webflow.com/62f9249c43126cafce10bc33/62fd12497ffcb83b28ea3309_logo-lumi-white.svg"
							alt="Lumi"
						/>
					</div>
				</div>
			</header>
			<section className="flex flex-1 flex-col gap-6 rounded-lg border-[2px] border-zinc-300 p-3 md:p-8">
				{children}
			</section>
		</main>
	);
}
