
import { JobCard } from "./job-card"

export const Featured = () => {
  return (
    <div className="bg-secondary p-8 rounded-xl w-4/5 mx-auto">
        <h1 className="text-2xl font-bold mb-4">
            Featured Internships and Jobs
        </h1>

        <section className="container py-8 grid gap-6">
        <JobCard
        slug="frontend-intern-google"
        title="Frontend Developer Intern"
        company="Google"
        logoUrl="https://logo.clearbit.com/google.com"
        location="Mountain View, CA"
        type="Internship"
        postedAt="2 days ago"
        experience="Entry-Level"
        salary="$3,000/mo"
        isRemote={true}
        tags={["JavaScript", "React", "Summer 2025"]}
        source="RemoteOK"
      />
        <JobCard
            slug="backend-intern-facebook"
            title="Backend Developer Intern"
            company="Facebook"
            logoUrl="https://logo.clearbit.com/facebook.com"
            location="Menlo Park, CA"
            type="Internship"
            postedAt="1 week ago"
            experience="Entry-Level"
            salary="$3,500/mo"
            isRemote={false}
            tags={["Python", "Django", "Summer 2025"]}
            source="RemoteOK"
        />

        
    </section>
    </div>
  )
}
