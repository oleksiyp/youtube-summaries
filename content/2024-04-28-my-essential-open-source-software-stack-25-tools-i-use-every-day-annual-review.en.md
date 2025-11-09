---
title: >-
  My Essential Open Source Software Stack - 25+ Tools I Use Every Day (Annual
  Review)
date: '2024-04-28'
videoUrl: https://www.youtube.com/watch?v=6t5BQRQJIVY
channelName: Awesome Open Source
channelUrl: https://www.youtube.com/channel/UCwFpzG5MK5Shg_ncAhrgr9g
shortDescription: >-
  This comprehensive annual review showcases 25+ open source tools I rely on
  daily for server management, remote access, home automation, content creation,
  and more. From Webmin and Nginx Proxy Manager for infrastructure, to Home
  Assistant for smart home control, to Shotcut and OBS for video production—each
  tool includes detailed setup guides and documentation links. Whether you're
  building a home lab, starting an MSP, or looking for privacy-focused
  alternatives to commercial software, this curated list covers everything from
  Docker management with Portainer to password security with Vaultwarden. Join
  me as I share why these tools have earned their place in my workflow and how
  you can implement them in yours.
---

# Annual Review of Open Source Software

This video presents a comprehensive annual review of regularly-used open source software tools, covering everything from server management to video editing. The creator emphasizes that detailed installation videos are available for each tool mentioned.

---

## Server Management & Administration

### Webmin
- **Purpose**: Provides a graphical user interface for Linux server management
- **Key Features**:
  - Dashboard showing CPU resources, IP addresses, and system information
  - Extensive left-side menu with options for disk management, file systems, backups, security, and logs
  - Server controls for shutdown, restart, and stop operations
  - Update notifications and reboot reminders
- **Best For**: Users transitioning from Windows Server environments or those less comfortable with command-line interfaces

### Pi-KVM
- **Purpose**: Hardware/software solution for remote KVM (Keyboard, Video, Mouse) access
- Uses Raspberry Pi as the base hardware
- Particularly valuable for managed service providers
- Allows physical machine access from remote locations
- Available as DIY build or pre-assembled unit

---

## Networking & Remote Access

### Nginx Proxy Manager
- **Purpose**: Simplifies reverse proxy setup for home lab services
- **Features**:
  - Easy-to-use graphical interface for managing proxies
  - SSL certificate management with Let's Encrypt integration
  - Access control lists for security
  - IP-based restrictions and authentication options

### NetBird
- **Current VPN solution of choice**
- Built on WireGuard protocol
- **Key Features**:
  - View online/offline status of all machines
  - Configure access rules and user permissions
  - Group-based access controls
  - Secure client data connections
- Will be featured in upcoming "Building an MSP on Open Source" series

---

## Remote Desktop & Support Tools

### MeshCentral
- **Purpose**: Remote monitoring and management (RMM) tool
- **Features**:
  - Browser-based remote desktop access
  - Terminal/command-line access for Windows and Linux
  - File upload/download capabilities
  - Extensive logging and system details
  - Full-screen and multiple viewing options
- **Limitation**: Not yet compatible with Wayland (X11 only currently)
- Planned for MSP series with authentication system integration

### Remotely
- **Purpose**: Desktop support and remote access
- **Features**:
  - Client download page with pre-configured URLs
  - Code-based connection system
  - Two-factor authentication support
  - Browser-based remote control
  - Continues to receive active development
- Company maintained open-source status after acquisition

### Guacamole
- **Purpose**: Browser-based remote desktop gateway
- **Features**:
  - Supports RDP, VNC, and other protocols
  - Connection grouping for admin vs. user access
  - No client software required
  - Access LAN resources through web browser

---

## Container & Virtualization Management

### Portainer
- **Purpose**: Docker container management interface
- **Edition Options**: Community Edition (free) and Business Edition (limited free licenses available)
- **Features**:
  - Visual overview of all containers and their status
  - Start, stop, and restart containers with clicks
  - Log viewing and shell access
  - Image and volume management
- Provides GUI alternative to Docker command-line operations

### LXC Console
- **Purpose**: Management interface for Incus/LXC containers
- **Features**:
  - Multiple server management from single interface
  - Memory usage statistics and resource monitoring
  - Instance configuration management
  - Built-in web console for command-line access
  - IP address visibility for all instances

---

## Authentication & Security

### Authentik
- **Purpose**: Single sign-on (SSO) solution
- **Supported Protocols**: LDAP, SAML, OIDC
- **Features**:
  - Centralized application access
  - User authentication management
  - Application portal for quick access to authorized systems
- Integration planned for MSP infrastructure series

### Vaultwarden
- **Purpose**: Password management (Bitwarden fork built on Rust)
- **Features**:
  - Lighter weight than official Bitwarden
  - Compatible with Bitwarden clients and browser extensions
  - Two-factor authentication token storage
  - Self-hosted encrypted password vault
  - Family sharing capabilities
  - Professional and business editions available

---

## Data & Analytics

### Metabase
- **Purpose**: Business intelligence and reporting dashboard
- **Use Case Example**: Tracking eBay business sales, shipping costs, and trends over time
- **Features**:
  - Visual dashboards with charts and graphs
  - Click-based interface for building reports
  - Tax information tracking
  - Trend analysis across months and years
  - Professional versions available for business use
- Excellent tool for data-driven business decisions

---

## Home Automation

### Home Assistant
- **Purpose**: Open-source home automation platform
- **Key Benefits**:
  - Local control without cloud dependency
  - Privacy-focused alternative to Google, Apple, Amazon solutions
  - Extensive automation capabilities
- **Features**:
  - Camera integration (doorbell, security cameras)
  - Web-based configuration (minimal YAML editing required)
  - Dashboard customization
  - Automation rules and triggers
- Significant improvements in ease-of-use over the years

---

## Productivity & Collaboration

### Nextcloud
- **Purpose**: Self-hosted cloud storage and collaboration platform
- **Core Features**:
  - Document storage and syncing
  - Family calendar management
  - Task management and to-do lists
  - Extensive extension ecosystem
- **Setup**: Using Nextcloud All-in-One (AIO) with Authentik integration
- Successfully migrated data multiple times with stable performance

### Rocket.Chat
- **Purpose**: Community communication platform
- **Access**: discuss.opensourcesawesome.com
- **Features**:
  - Direct messaging and group chats
  - SSO login options
  - Video sharing and discussions
  - Community support forum
- Used for connecting with audience and providing support

### BookStack
- **Purpose**: Documentation and knowledge management
- **Organizational Structure**: Shelves → Books → Chapters → Pages
- **Features**:
  - Powerful search functionality
  - Step-by-step instruction storage
  - Video reference linking
  - Show notes organization
- Authentik integration for secure access

---

## Note-Taking & Knowledge Management

### Trilium Notes
- **Purpose**: Hierarchical note-taking application
- **Features**:
  - Fast search and navigation
  - Electron-based client (cross-platform)
  - Self-hosted sync server
  - Flexible file storage options
- **Use Cases**: Movie tracking lists, project notes, personal knowledge base
- Comparable to Obsidian with built-in syncing

### Matrix/Dendrite Server
- **Purpose**: Federated communication platform
- **Use Case**: Family messaging system
- **Features**:
  - Private, self-hosted messaging
  - Desktop and mobile clients
  - Group chat functionality
  - Real-time notifications
- Secure alternative to commercial messaging platforms

---

## Content Creation Tools

### Shotcut
- **Purpose**: Video editing software
- **Why Chosen Over Alternatives**: 
  - Simpler workflow than DaVinci Resolve or Adobe products
  - Fast performance
  - Straightforward learning curve
- **Features**:
  - Timeline-based editing
  - Clip management and rearrangement
  - Multiple view configurations
  - Audio/video meters
  - Regular updates with new features
- Used weekly for video production

### OBS (Open Broadcaster Software)
- **Purpose**: Screen recording and streaming
- **Advantages Over Previous Tool**: Wayland desktop support (crucial as X11 support phases out)
- Replaced Simple Screen Recorder due to better compatibility
- Essential for content creation workflow

---

## Supporting the Community

The creator emphasizes several ways to support open source projects:
1. **Express gratitude**: Post thank-you messages on GitHub or project forums
2. **Financial support**: Donate or purchase business licenses when possible
3. **Spread awareness**: Share projects with others who might benefit
4. **Provide feedback**: Help developers understand user needs

**Additional Resources**: All mentioned tools have detailed setup videos and documentation available, with links provided in the video description.

**Upcoming Content**: Part 2 of this review series plus "Building an MSP on Open Source" series featuring several of these tools in integrated workflows.
