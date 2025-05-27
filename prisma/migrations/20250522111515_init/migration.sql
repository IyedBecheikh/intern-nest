-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "logo_url" TEXT,
    "location" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "posted_at" TIMESTAMP(3) NOT NULL,
    "experience" TEXT NOT NULL,
    "salary" TEXT,
    "is_remote" BOOLEAN,
    "source" TEXT,
    "description" TEXT NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobTag" (
    "id" SERIAL NOT NULL,
    "jobId" INTEGER NOT NULL,
    "tag" TEXT NOT NULL,

    CONSTRAINT "JobTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobRequirement" (
    "id" SERIAL NOT NULL,
    "jobId" INTEGER NOT NULL,
    "requirement" TEXT NOT NULL,

    CONSTRAINT "JobRequirement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Job_slug_key" ON "Job"("slug");

-- AddForeignKey
ALTER TABLE "JobTag" ADD CONSTRAINT "JobTag_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobRequirement" ADD CONSTRAINT "JobRequirement_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;
