'use client'

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle
} from "@/components/ui/sheet"
import {
    Bookmark,
    Clock,
    MapPin,
    Briefcase,
    DollarSign
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type JobCardProps = {
    slug: string
    title: string
    company: string
    logoUrl?: string
    location: string
    type: string
    postedAt: string
    experience: string
    salary?: string
    isRemote?: boolean
    tags?: string[]
    source?: string
}

export const JobCard = ({
    slug,
    title,
    company,
    logoUrl,
    location,
    type,
    postedAt,
    experience,
    salary,
    isRemote,
    tags = [],
    source,
}: JobCardProps) => {
    const [open, setOpen] = useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <Card className="p-4 flex flex-col md:flex-row items-start justify-between gap-4 hover:shadow-lg transition-shadow">
                <div className="flex gap-4 items-start w-full">
                    {logoUrl ? (
                        <Image
                            src={logoUrl}
                            alt={`${company} logo`}
                            className="w-12 h-12 rounded object-contain"
                            width={48}
                            height={48}
                        />
                    ) : (
                        <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-sm text-muted-foreground">
                            {company.charAt(0).toUpperCase()}
                        </div>
                    )}
                    <div className="flex flex-col gap-1 w-full">
                        <Link href={`/job/${slug}`}>
                            <h3 className="text-lg font-semibold hover:underline">{title}</h3>
                        </Link>
                        <p className="text-sm text-muted-foreground">{company}</p>
                        <div className="flex flex-wrap gap-2 text-sm mt-1">
                            <div className="flex items-center gap-1 text-muted-foreground">
                                <MapPin className="w-4 h-4" />
                                <span>{isRemote ? "Remote" : location}</span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                                <Briefcase className="w-4 h-4" />
                                <span>{type}</span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                                <Clock className="w-4 h-4" />
                                <span>{postedAt}</span>
                            </div>
                            {experience && (
                                <Badge variant="outline" className="text-xs">
                                    {experience}
                                </Badge>
                            )}
                            {salary && (
                                <div className="flex items-center gap-1 text-muted-foreground">
                                    <DollarSign className="w-4 h-4" />
                                    <span>{salary}</span>
                                </div>
                            )}
                        </div>
                        <div className="flex gap-2 mt-2 flex-wrap">
                            {tags.map(tag => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                </Badge>
                            ))}
                            {source && (
                                <Badge variant="outline" className="text-xs">
                                    Source: {source}
                                </Badge>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex gap-2 items-center mt-2 md:mt-0">
                    <SheetTrigger asChild>
                        <Button size="sm" className="bg-blue-500 text-white hover:bg-blue-600">
                            View
                        </Button>
                    </SheetTrigger>
                    <Button variant="ghost" size="icon">
                        <Bookmark className="w-5 h-5" />
                    </Button>
                </div>
            </Card>

            <SheetContent className="overflow-y-auto p-6 max-w-md">
                <SheetTitle className="sr-only">
                    {title}
                </SheetTitle>
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="text-muted-foreground">{company}</p>

                    <div className="flex flex-wrap gap-2 text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{isRemote ? "Remote" : location}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                            <Briefcase className="w-4 h-4" />
                            <span>{type}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{postedAt}</span>
                        </div>
                        {experience && (
                            <Badge variant="outline" className="text-xs">
                                {experience}
                            </Badge>
                        )}
                        {salary && (
                            <div className="flex items-center gap-1 text-muted-foreground">
                                <DollarSign className="w-4 h-4" />
                                <span>{salary}</span>
                            </div>
                        )}
                    </div>

                    <div className="flex gap-2 mt-2 flex-wrap">
                        {tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                            </Badge>
                        ))}
                        {source && (
                            <Badge variant="outline" className="text-xs">
                                Source: {source}
                            </Badge>
                        )}
                    </div>

                    <Button asChild className="mt-4 w-full" onClick={() => setOpen(false)}>
                        <Link href={`/job/${slug}`}>Open Full Page</Link>
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}
