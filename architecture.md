# System Architecture Documentation

## Project: Claude Code Development Workspace

**Last Updated:** 2025-10-23
**Version:** 1.0
**Status:** Active Development

---

## Table of Contents
1. [System Overview](#system-overview)
2. [Architecture Principles](#architecture-principles)
3. [Component Architecture](#component-architecture)
4. [Data Flow](#data-flow)
5. [File Organization](#file-organization)
6. [Integration Points](#integration-points)
7. [Security Architecture](#security-architecture)
8. [Version Management System](#version-management-system)
9. [Future Enhancements](#future-enhancements)

---

## System Overview

### Purpose
This workspace serves as a structured development environment for Claude Code operations with emphasis on:
- Comprehensive logging and documentation
- Version-controlled code development
- MCP server integration
- Git-based project management

### Core Components
```
┌─────────────────────────────────────────────────┐
│           Claude Code CLI Interface             │
└────────────────┬────────────────────────────────┘
                 │
    ┌────────────┴────────────┐
    │                         │
┌───▼────┐              ┌────▼─────┐
│  MCP   │              │   Git    │
│Servers │              │ Control  │
└───┬────┘              └────┬─────┘
    │                        │
    │    ┌──────────────────┴─────────────────┐
    │    │                                     │
┌───▼────▼───┐         ┌──────────┐    ┌─────▼──────┐
│ File System│         │ Logging  │    │  GitHub    │
│ Operations │         │  System  │    │ Repository │
└────────────┘         └──────────┘    └────────────┘
```

### Technology Stack
- **CLI Tool:** Claude Code
- **Version Control:** Git
- **Remote Repository:** GitHub
- **MCP Servers:**
  - filesystem (file operations)
  - playwright (browser automation)
  - git (repository operations)
- **Runtime:** Node.js (for MCP servers)

---

## Architecture Principles

### 1. Documentation-First Approach
- All actions are logged in real-time
- Documentation updated immediately with changes
- Transparency in all operations

### 2. Version Control Everything
- Mandatory version folders for all code development
- Git tracking for all project files
- Incremental, traceable changes

### 3. Security by Design
- Credentials never committed to repository
- Sensitive files excluded via .gitignore
- Clear separation of config and secrets

### 4. Structured Organization
- Consistent file naming conventions
- Logical directory structure
- Clear separation of concerns

---

## Component Architecture

### 1. Logging System

**Purpose:** Track all development activities in detail

**Components:**
- `claude-actions.md` - Primary action log
- Real-time update mechanism
- Structured log format with timestamps

**Log Entry Structure:**
```markdown
## Session: [YYYY-MM-DD HH:MM]

### Actions Performed
- [ ] Task description
  - Status: [In Progress/Completed/Failed]
  - Result: Brief description
  - Files Modified: List of changes
  - Time: [HH:MM - HH:MM]
  - Notes: Observations
```

**Update Triggers:**
- File creation/modification
- Git operations
- Error occurrences
- Milestone completion
- Session start/end

### 2. MCP Server Integration

**Architecture:**
```
Claude Code CLI
       ↓
  MCP Protocol
       ↓
┌──────┴──────┐──────┐
│             │      │
filesystem  playwright  git
```

**Server Configurations:**

**Filesystem Server:**
- Command: `npx -y @modelcontextprotocol/server-filesystem`
- Access: Desktop, Documents, Downloads
- Purpose: File read/write operations

**Playwright Server:**
- Command: `npx @playwright/mcp@latest`
- Purpose: Browser automation and testing
- Status: Connected

**Git Server:**
- Command: `npx -y @modelcontextprotocol/server-git`
- Purpose: Git repository operations
- Context: Automatic repository detection

### 3. Version Management System

**Architecture Pattern:**
```
project-root/
├── v1_initial_implementation/
│   ├── script.py
│   └── output.csv
├── v2_feature_addition/
│   ├── script.py
│   └── output.csv
└── v3_bug_fix/
    ├── script.py
    └── output.csv
```

**Version Naming Convention:**
- Format: `v#_descriptive_name`
- Sequential numbering (v1, v2, v3...)
- Git-style descriptions (lowercase, underscores)
- Examples: `v1_initial_implementation`, `v2_add_caching`

**Rules:**
1. Script names preserved across versions
2. All outputs stored with generating script
3. No loose Python files in root
4. Complete working set per version folder

### 4. Documentation System

**Core Documents:**
```
README.md           → Project overview, usage
architecture.md     → This file, system design
CLAUDE.md          → Operational procedures
claude-actions.md  → Detailed action log
```

**Update Policy:**
- Real-time updates as changes occur
- Version information included
- Cross-references maintained
- Last-updated timestamps

---

## Data Flow

### Development Session Flow
```
1. Session Start
   ↓
2. Load CLAUDE.md Instructions
   ↓
3. Initialize/Update claude-actions.md
   ↓
4. Perform Development Tasks
   │
   ├→ File Operations (via filesystem MCP)
   ├→ Git Operations (via git MCP)
   └→ Browser Tasks (via playwright MCP)
   ↓
5. Log All Actions
   ↓
6. Update Documentation
   ↓
7. Commit Changes
   ↓
8. Push to GitHub
   ↓
9. Session End Log
```

### Git Workflow
```
Working Directory
       ↓
   git add
       ↓
  Staging Area
       ↓
  git commit
       ↓
 Local Repository
       ↓
   git push
       ↓
GitHub Repository
```

---

## File Organization

### Directory Structure
```
claude-dev/
├── .claude/                    # Claude Code configuration
│   └── settings.local.json    # Local settings
├── .git/                      # Git repository data
├── v1_*/                      # Version folders (future)
├── v2_*/
├── docs/                      # Additional documentation (future)
├── .gitignore                # Git exclusions
├── README.md                 # Project overview
├── architecture.md           # This file
├── CLAUDE.md                 # Operational instructions
└── claude-actions.md         # Action log
```

### File Naming Conventions
- **Documentation:** kebab-case (`action-log.md`)
- **Version folders:** `v#_descriptive_name`
- **Python scripts:** Original names preserved
- **Logs:** Date-stamped (`2025-10-23-deployment.md`)

---

## Integration Points

### 1. Git Integration
- **Local Repository:** `.git/` in project root
- **Remote:** https://github.com/Fedutin22/claude-dev-1
- **Branch:** main
- **Protocol:** HTTPS

### 2. MCP Server Integration
- **Configuration File:** `~/.claude.json`
- **Protocol:** stdio MCP
- **Runtime:** npx (Node.js)

### 3. Claude Code CLI
- **Command:** `claude`
- **Subcommands:** `mcp add`, `mcp list`, `mcp remove`
- **Config Location:** `~/.claude.json`

---

## Security Architecture

### Protected Information
```
.gitignore excludes:
├── credentials.md
├── .env*
├── *.key
├── *.pem
├── logs/*.log
└── sensitive config files
```

### Security Layers
1. **Git Exclusion:** `.gitignore` prevents commits
2. **Documentation:** `credentials.md` template (not actual creds)
3. **External Storage:** Actual credentials in password manager
4. **Access Control:** GitHub repository permissions

### Credential Management
- **Template:** `credentials.md` (gitignored)
- **Actual Storage:** External password manager
- **Documentation:** References only, no actual secrets
- **Review:** Monthly security audits

---

## Version Management System

### Version Lifecycle
```
1. New Feature/Fix Needed
   ↓
2. Create v#_description/ folder
   ↓
3. Copy/modify scripts
   ↓
4. Test and validate
   ↓
5. Generate outputs in same folder
   ↓
6. Document in claude-actions.md
   ↓
7. Commit version folder
   ↓
8. Push to GitHub
```

### Version Tracking
- **Folder Structure:** Chronological and descriptive
- **Script Continuity:** Original names preserved
- **Output Co-location:** Outputs with generating scripts
- **Documentation:** Changes logged in action log

---

## Future Enhancements

### Planned Improvements
1. **Automated Testing**
   - Test suite for version validation
   - CI/CD pipeline integration

2. **Enhanced Logging**
   - Structured log parsing
   - Log visualization tools
   - Performance metrics tracking

3. **Documentation Automation**
   - Auto-generate changelog from commits
   - Version comparison tools
   - Dependency tracking

4. **Development Tools**
   - Code quality checks
   - Automated version folder creation
   - Template generation scripts

5. **Collaboration Features**
   - Pull request templates
   - Code review checklists
   - Contribution guidelines

### Scalability Considerations
- Modular MCP server expansion
- Multi-project workspace support
- Enhanced version management tools
- Automated documentation generation

---

## Change Log

### Version 1.0 (2025-10-23)
- Initial architecture documentation
- Defined core components and structure
- Established version management system
- Documented MCP server integration
- Created security architecture guidelines

---

## Notes for Maintenance

### Regular Updates Required
- Update this file when:
  - New components are added
  - Architecture patterns change
  - Integration points are modified
  - Security procedures are updated
  - Version management rules change

### Review Schedule
- **Weekly:** Check for outdated information
- **Monthly:** Comprehensive architecture review
- **Per Major Change:** Immediate documentation update

---

**Document Maintainer:** Claude Code
**Review Frequency:** Continuous (updated with each significant change)
**Related Documents:** README.md, CLAUDE.md, claude-actions.md
