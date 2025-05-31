/*
  Warnings:

  - You are about to drop the `JobRequirement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `JobTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "JobRequirement" DROP CONSTRAINT "JobRequirement_job_id_fkey";

-- DropForeignKey
ALTER TABLE "JobTag" DROP CONSTRAINT "JobTag_job_id_fkey";

-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "apply_url" TEXT;

-- DropTable
DROP TABLE "JobRequirement";

-- DropTable
DROP TABLE "JobTag";
