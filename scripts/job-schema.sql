-- Main jobs table
CREATE TABLE jobs (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  logo_url TEXT,
  location TEXT NOT NULL,
  type TEXT NOT NULL,
  posted_at TIMESTAMP NOT NULL,
  experience TEXT NOT NULL,
  salary TEXT,
  is_remote BOOLEAN,
  source TEXT,
  description TEXT NOT NULL
);

-- Tags table (many-to-one with jobs)
CREATE TABLE job_tags (
  id SERIAL PRIMARY KEY,
  job_id INTEGER NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
  tag TEXT NOT NULL
);

-- Requirements table (many-to-one with jobs)
CREATE TABLE job_requirements (
  id SERIAL PRIMARY KEY,
  job_id INTEGER NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
  requirement TEXT NOT NULL
);
