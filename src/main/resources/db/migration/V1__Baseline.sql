CREATE TABLE job_application (
    id SERIAL PRIMARY KEY,
    position VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    link VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    status VARCHAR(50) NOT NULL,
    application_date DATE,
    interview_date DATE,
    notes TEXT
);
