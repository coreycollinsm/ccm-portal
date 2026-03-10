# CCM Analytics Portal

Internal analytics dashboard for **coreycollinsm.com**.

The portal provides a visual interface for exploring analytics events collected by the **ccm-api** backend, including website visits, attribution sources, and user interaction events.

This project demonstrates building a **product-facing analytics dashboard** on top of a custom event ingestion system.

The portal will eventually be deployed at:

portal.coreycollinsm.com

<br>
<br>

# Purpose

The **CCM Analytics Portal** is the frontend interface for a lightweight analytics system designed to track and analyze behavior on the portfolio site.

The backend API collects event data including:

- Anonymous website visits
- Attribution sources
- UTM parameters
- Button click interactions
- Session-level behavior events

This portal provides tools to explore and interpret that data.

<br>
<br>

# Key Features (Planned)

**Analytics Overview**

- Total website visits
- Visits by day
- Top pages
- Top acquisition sources

**Attribution Tracking**

- UTM campaign tracking
- Custom source parameters
- Traffic breakdown by channel

**User Behavior**

- Button click event tracking
- Component-level interaction analytics
- Page-level engagement insights

**Session Insights**

- Anonymous session-level visit data
- Event correlation between visits and actions

**Data Exploration**

- Filter events by page, source, or date range
- Inspect individual analytics records
- View raw event payloads

<br>
<br>

# System Architecture

**Frontend (coreycollinsm.com)**

- Sends analytics events on page load and UI interactions
- Captures attribution parameters and session identifiers

**Backend API (ccm-api)**

- Receives analytics events
- Stores events in MongoDB
- Handles deduplication and session correlation

**Portal (this repo)**

- Queries analytics endpoints
- Visualizes event data
- Provides filtering and analysis tools

<br>
<br>

# Tech Stack

**Frontend**

- Next.js
- React
- TypeScript
- Tailwind CSS (planned)

**Backend Integration**

- Node.js API
- REST endpoints
- MongoDB Atlas

**Deployment**

- Vercel or Netlify (planned)

<br>
<br>

# Related Repositories

### ccm-api

Backend API responsible for analytics ingestion, contact processing, and integrations.

https://github.com/coreycollinsm/ccm-api

### coreycollinsm

Portfolio website which generates analytics events.

https://github.com/coreycollinsm/coreycollinsm

<br>
<br>

# Development Roadmap

**Initial Portal**

- Analytics overview dashboard
- Visit counts and traffic sources
- Button click event visualization

**Expanded Analytics**

- Session timelines
- UTM campaign reporting
- Conversion event tracking

**Future Features**

- Funnel analysis
- Heatmap-style interaction reporting
- Exportable analytics reports

<br>
<br>

# Screenshots

TODO — Add screenshots of the dashboard once the portal UI is implemented.

<br>
<br>

# Author

Corey Collins
Full Stack Developer

Portfolio
https://coreycollinsm.com

LinkedIn
https://www.linkedin.com/in/coreycollinsm/
