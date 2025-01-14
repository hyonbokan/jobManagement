# Job Application Tracker

<div align="center">
  <img src="media/job_application_demo.gif" alt="Job Application Demo" style="max-width: 300px; height: auto;" />
</div>

A full-stack web application for tracking job applications and managing related data efficiently. The project integrates a **Spring Boot** backend with a **React** frontend, showcasing comprehensive RESTful API implementation, and an intuitive user interface.

---

## Key Features

- **Job Application Management**
  - Add, edit, delete, and view detailed job application records.
  - Track job application status (e.g., Applied, Interviewing, Accepted, Rejected, Unanswered).

<!-- - **Notifications**
  - Real-time notifications for job interviews scheduled within the next week, three days, and one day. -->

- **Statistics and Insights**
  - Interactive graphs and visualizations to analyze application trends.
  - Dashboard displaying total applications, interviews scheduled, and status distribution.

- **Search and Filtering**
  - Search job applications by position, company, or keywords.
  <!-- - Filter applications by status. -->

---

## Backend Overview

The backend, powered by **Spring Boot**, provides REST API to handle job application data and notifications.

### Technologies & Techniques

- **Spring Boot**: Backend framework for building RESTful APIs.
- **Spring Data JPA**: Database operations with repository abstraction.
- **PostgreSQL**: Relational database for storing application data.
- **Flyway**: Database versioning and migration.
<!-- - **WebSocket Integration**: Real-time notification delivery. -->
<!-- - **Cron Jobs**: Automates status updates (e.g., marking applications as unanswered). -->
- **Data Validation**: Ensures data integrity using `@NotBlank`, `@Size`, etc.
- **Error Handling**: Centralized exception management using `@ControllerAdvice`.

### Key Endpoints

| Endpoint                          | Description                                |
|-----------------------------------|--------------------------------------------|
| **Job Applications**              |                                            |
| `GET /job-applications`           | Fetch all job applications                 |
| `POST /job-applications/create-application`          | Create a new job application               |
| `PUT /job-applications/{id}`      | Update a specific job application          |
| `DELETE /job-applications/{id}`   | Delete a specific job application          |
| **Statistics**                    |                                            |
| `GET /stats/summary`          | Fetch application statistics summary       |
| `GET /stats/by-status`        | Fetch application counts by status         |
| `GET /stats/count-by-date`    | Fetch application trends over time         |

### Backend Structure

```plaintext
src/main/java/com/example/jobmanagement
├── controller      # REST Controllers
├── dto             # Data Transfer Objects
├── entity          # JPA Entities
├── repository      # Data Access Layer
├── service         # Business Logic Layer
├── util            # Utility Classes (e.g., WebSocket Configuration)
├── config          # Security and Application Configurations
```

## Frontend Overview

The frontend, developed using **React**, is designed for simplicity, usability, and seamless interaction with the backend.

---

### Technologies & Techniques

- **React**: Component-based architecture for dynamic UIs.
- **Material-UI (MUI)**: Modern, accessible, and responsive UI components.
- **React Router**: Manages page navigation and routing.
- **Axios**: Simplifies API requests and error handling.
- **ReactMarkdown**: Renders job descriptions and notes in Markdown format.
- **Recharts**: Used for creating interactive charts and graphs.

---

### Pages & Features

| Page                | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| **Home Page**       | Displays all job applications with options to add, edit, and delete records. |
| **Application Details** | Detailed view of a job application with editable fields.                  |
| **Statistics Page** | Graphs and charts showing application trends and status distribution.       |

---

### UI Design

The design emphasizes clarity and responsiveness:
- **Navbar**: Left-aligned, collapsible navigation bar for quick access to pages.
- **Status Chips**: Colored indicators for different application statuses.
- **Interactive Graphs**: Visual representation of trends and statistics using **Recharts**.

---

### Frontend Structure
The directory structure organizes the code for scalability and maintainability:

```plaintext
src/
├── api              # API interaction logic
├── components       # Reusable components (e.g., JobTable, StatusChip, Notification)
├── pages            # Main pages (e.g., HomePage, StatsPage)
├── routes           # Route management
├── App.jsx          # Entry point
```