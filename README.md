# InternNest

A Next.js job and internship discovery prototype backed by a Prisma job model.

> Status: early prototype. The repository defines job data and UI foundations; browse, detail, ingestion, and search flows still need to be completed and documented.

## Current model

Each job can include a title, company, location, employment type, experience level, salary, remote flag, source, description, and application URL.

## Stack

- Next.js 15, React 19, and TypeScript
- Prisma with PostgreSQL
- Tailwind CSS, Radix UI, and Lucide

## Run locally

Configure `DATABASE_URL`, then run:

```bash
npm install
npx prisma generate
npm run dev
```

The development server starts at `http://localhost:3000`.

## Next steps

- Finish browse, job-detail, and apply-link flows.
- Add ingestion, search, filters, and freshness checks.
- Add seeded demo data and database setup documentation.

## License

No license file is currently included.