/*
  Warnings:

  - Made the column `apply_url` on table `Job` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Job" ALTER COLUMN "apply_url" SET NOT NULL;
