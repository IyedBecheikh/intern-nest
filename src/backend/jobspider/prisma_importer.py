import os
import psycopg2

def insert_job(job_data):
    conn = psycopg2.connect(database="InternNest",password="azerty")
    cur = conn.cursor()

    cur.execute("""
        INSERT INTO "Job" (slug, title, company, location, type, posted_at, experience, description, source, is_remote, logo_url)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        ON CONFLICT (slug) DO UPDATE
        SET title = EXCLUDED.title,
            company = EXCLUDED.company,
            logo_url = EXCLUDED.logo_url,
            location = EXCLUDED.location,
            type = EXCLUDED.type,
            posted_at = EXCLUDED.posted_at,
            experience = EXCLUDED.experience,
            description = EXCLUDED.description,
            source = EXCLUDED.source,
            is_remote = EXCLUDED.is_remote
    """, (
        job_data["slug"],
        job_data["title"],
        job_data["company"],
        job_data["location"],
        job_data["type"],
        job_data["posted_at"],
        job_data["experience"],
        job_data["description"],
        job_data["source"],
        job_data["is_remote"],
        job_data["logo_url"],
    ))

    conn.commit()
    cur.close()
    conn.close()
