
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ArrowDown } from "lucide-react";


export const Header = () => {
    return (
        <section className="py-18">
            <h1 className="text-4xl font-bold text-center ">
                Find Your Next Remote Internship or Entry-Level Job
            </h1>
            <p className="text-center text-lg mt-4">
                Curated opportunities for students, new grads, and early-career developers and designers.
            </p>
            <form className="mt-8 flex justify-center gap-2">
                <input
                    type="text"
                    placeholder="Search for internships or jobs"
                    className="border border-gray-300 rounded-md px-4 py-2 w-1/3"

                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700"
                >
                    Search
                </button>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="border border-gray-300 rounded-md px-4 py-2">
                            Remote
                            <ArrowDown className="h-4 w-4 ml-2 inline" />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Remote</DropdownMenuItem>
                        <DropdownMenuItem>On-Site</DropdownMenuItem>
                        <DropdownMenuItem>Hybrid</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </form>
        </section>
    )
}
