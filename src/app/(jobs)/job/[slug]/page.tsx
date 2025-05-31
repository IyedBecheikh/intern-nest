import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bookmark, Clock, MapPin, Briefcase, DollarSign } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { formatDistanceToNow } from "date-fns";
import JobDescription from "@/components/job-description";
import Link from "next/link";

type JobDetailsPageProps = {
  params: {
    slug: string;
  };
};

export default async function JobDetailsPage({ params }: JobDetailsPageProps) {

  const job = await prismadb.job.findUnique({
    where: {
      slug: params.slug,
    }

  });

  if (!job) {
    return notFound();
  }



  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <Card className="p-6 space-y-4">
        <div className="flex items-start gap-4">
          {job.logoUrl ? (
            <Image
              src={job.logoUrl}
              alt={`${job.company} logo`}
              className="w-16 h-16 rounded object-contain"
              width={64}
              height={64}
            />
          ) : (
            <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-xl text-muted-foreground">
              {job.company ? job.company.charAt(0).toUpperCase() : "?"}
            </div>
          )}
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{job.title}</h1>
            <p className="text-muted-foreground">{job.company}</p>
            <div className="flex flex-wrap gap-3 text-sm mt-2 text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{job.isRemote ? "Remote" : job.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{formatDistanceToNow(new Date(job.postedAt), { addSuffix: true })}</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                <span>{job.salary || "N/A"}</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Bookmark className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-xs">
            {job.experience}
          </Badge>
          {job.source && (
            <Badge variant="outline" className="text-xs">
              Source: {job.source}
            </Badge>
          )}
        </div>

        <div className="prose max-w-none text-sm leading-relaxed">
          <h2 className="text-lg font-semibold mb-">Job Description:</h2>
          <JobDescription html={job.description} />
        </div>

        <div className="pt-4 flex justify-end">
          <Link href={job.applyUrl || "#"} target="_blank" rel="noopener noreferrer">
            <Button className="bg-blue-500 text-white hover:bg-blue-600">
              Apply Now
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
