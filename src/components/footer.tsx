import Link from "next/link"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary py-8 mt-8">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <h2 className="text-lg font-semibold  mb-3">InternNest</h2>
          <p className="mb-4">
            Discover remote internships and entry-level jobs in tech, design, and development. Curated for students, fresh grads, and early-career professionals.
          </p>
          <p className="text-xs text-gray-500">&copy; {currentYear} InternNest. All rights reserved.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Opportunities</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/explore?experience=Internship" className="hover:">Internships</Link>
            </li>
            <li>
              <Link href="/explore?experience=Entry" className="hover:">Entry-Level Jobs</Link>
            </li>
            <li>
              <Link href="/explore?isRemote=true" className="hover:">Remote Roles</Link>
            </li>
            <li>
              <Link href="/explore" className="hover:">Browse All</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className=" font-semibold mb-3">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/blog" className="hover:">Career Blog</Link>
            </li>
            <li>
              <Link href="/tips/resume" className="hover:">Resume Tips</Link>
            </li>
            <li>
              <Link href="/faq" className="hover:">FAQ</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className=" font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:">About internNest</Link>
            </li>
            <li>
              <Link href="/partnerships" className="hover:">Partnerships</Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
