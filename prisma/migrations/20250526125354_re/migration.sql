/*
  Warnings:

  - You are about to drop the column `jobId` on the `JobRequirement` table. All the data in the column will be lost.
  - You are about to drop the column `jobId` on the `JobTag` table. All the data in the column will be lost.
  - Added the required column `job_id` to the `JobRequirement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `job_id` to the `JobTag` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "JobRequirement" DROP CONSTRAINT "JobRequirement_jobId_fkey";

-- DropForeignKey
ALTER TABLE "JobTag" DROP CONSTRAINT "JobTag_jobId_fkey";

-- AlterTable
ALTER TABLE "JobRequirement" DROP COLUMN "jobId",
ADD COLUMN     "job_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "JobTag" DROP COLUMN "jobId",
ADD COLUMN     "job_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "JobTag" ADD CONSTRAINT "JobTag_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobRequirement" ADD CONSTRAINT "JobRequirement_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;
