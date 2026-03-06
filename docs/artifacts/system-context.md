# System Context

**Type:** C4 Context
**Exported:** 2026-03-06T05:19:47.125Z
**Source:** PlanVersion

## Linked Requirements

- 1b2acded-0297-4eda-903e-9f0652e417d3
- ef85d342-3e93-48cc-8faa-b5e4690ace61
- 4cdfa39e-6913-4315-91a4-510b79967e49
- 1c32e5e0-6dd8-429d-b371-7c3324cc7ee2
- d531fa21-6fcd-440a-a8e2-2b3b319c764d
- 2c381a97-49e4-4a78-9721-d425977983c8
- 31dfc3a9-6960-4bfd-b8c3-d0248342d6f0
- 78b814a4-0ea6-4bf5-b2be-e7244af16c4b

## Diagram

```mermaid
C4Context
  UpdateLayoutConfig($c4ShapeInRow="2", $c4BoundaryInRow="1")

  Person(new_user, "New User", "Registers via web")
  Person(donor, "Donor", "Donates via web")
  Person(recipient, "Recipient", "Requests donations via web")
  Person(user_actor, "User", "Manages profile via web")

  System_Boundary(donation_boundary, "Donation Platform") {
    System(web_app, "Web App", "Signup and login<br/>Donation forms and feed<br/>Trace FR-001 FR-002 FR-003 FR-004 FR-005 NFR-002 UC-001")
    System(api_svc, "API Service", "Handles client requests<br/>Authorization and business logic")
    System(auth_svc, "Auth Service", "Secure auth and tokens<br/>Implements NFR-001")
    System(donation_svc, "Donation Service", "Tracks donations<br/>Real time feed and status")
    System(image_svc, "Image Service", "Image upload and basic analysis")
    System(realtime_svc, "Real Time Service", "Pushes feed and status updates<br/>Implements NFR-003")
    System(db, "Primary DB", "Stores users and donations data")
  }

  System_Ext(notification_ext, "Notification Service", "Sends donor alerts")

  Rel(new_user, web_app, "Signs up", "HTTPS")
  Rel(donor, web_app, "Donates food", "HTTPS")
  Rel(recipient, web_app, "Requests donation", "HTTPS")
  Rel(user_actor, web_app, "Updates profile", "HTTPS")

  Rel(web_app, api_svc, "Uses API", "HTTPS")
  Rel(api_svc, auth_svc, "Authenticates", "OAuth2")
  Rel(api_svc, donation_svc, "Manage donations", "HTTPS")
  Rel(donation_svc, db, "Reads and writes", "SQL")
  Rel(donation_svc, realtime_svc, "Push updates", "WebSocket")
  Rel(web_app, image_svc, "Uploads images", "HTTPS")
  Rel(donation_svc, notification_ext, "Send alerts", "SMTP")

  UpdateRelStyle(new_user, web_app, $offsetX="20", $offsetY="-10")
  UpdateRelStyle(donor, web_app, $offsetX="20", $offsetY="10")
  UpdateRelStyle(recipient, web_app, $offsetX="20", $offsetY="30")
```
