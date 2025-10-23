# Claude Code Development Workspace

## Overview
This repository serves as a comprehensive workspace for Claude Code development sessions, focusing on logging, documentation, and project management procedures.

## Repository Purpose
- **Primary Use:** Claude Code operational workspace
- **Type:** Documentation and project management repository
- **Focus:** Structured development with comprehensive logging and version control

## Features
- Comprehensive action logging system
- Structured version management for all code development
- Git integration with GitHub
- MCP (Model Context Protocol) server integration
- Automated documentation tracking

## Recent Additions
- **2025-10-23:** Initial repository setup
- **2025-10-23:** Git MCP server configuration
- **2025-10-23:** GitHub repository connection established
- **2025-10-23:** Added CLAUDE.md with mandatory operational procedures
- **2025-10-23:** Created comprehensive documentation (README.md, architecture.md)

## Installation

### Prerequisites
- Node.js (for MCP servers)
- Git
- Claude Code CLI

### Setup
1. Clone this repository:
   ```bash
   git clone https://github.com/Fedutin22/claude-dev-1.git
   cd claude-dev-1
   ```

2. MCP servers are configured automatically through Claude Code:
   - **filesystem**: File system operations
   - **playwright**: Browser automation
   - **git**: Git operations and version control

## Configuration

### Environment Variables
No environment variables required for basic operation.

### MCP Servers
Configured MCP servers:
- `filesystem` - File operations (Desktop, Documents, Downloads)
- `playwright` - Browser automation
- `git` - Git repository operations

## Project Structure

```
claude-dev/
├── .claude/                     # Claude Code configuration
│   └── settings.local.json     # Local settings
├── .gitignore                  # Git exclusions
├── README.md                   # This file
├── architecture.md             # System architecture documentation
├── claude-actions.md           # Detailed action log
└── CLAUDE.md                   # Operational instructions for Claude Code
```

### Version Folder Structure (Mandatory for Code Development)
All Python scripts and code development MUST follow this structure:

```
v1_initial_implementation/      # First iteration with descriptive name
├── script_name.py              # Original script name
├── output.csv                  # Generated outputs
└── output.xlsx

v2_feature_description/         # Subsequent iterations
├── script_name.py              # Same script name maintained
└── ...
```

**Version Naming Convention:**
- Format: `v#_descriptive_name`
- Examples: `v1_initial_implementation`, `v2_add_authentication`, `v3_fix_memory_leak`
- Descriptive names should be git commit-style: brief, lowercase with underscores

## Usage

### Working with Claude Code
This repository is designed to work seamlessly with Claude Code. All development sessions are logged in `claude-actions.md`.

### Action Logging
All significant actions are logged in real-time to `claude-actions.md` including:
- File modifications
- Code changes
- Issues encountered
- Solutions implemented
- Performance notes

### Version Management
When developing code:
1. Create a new version folder: `v#_descriptive_name/`
2. Place all scripts and outputs in that folder
3. Maintain original script names across versions
4. Document changes in `claude-actions.md`

## Documentation

### Key Documentation Files
- **README.md** (this file) - Project overview and usage
- **architecture.md** - System design and architecture
- **CLAUDE.md** - **MANDATORY operational procedures for Claude Code** (contains all required workflows, logging standards, and compliance rules)
- **claude-actions.md** - Detailed session logs

### Documentation Update Policy
Documentation is updated in real-time as changes occur, not retroactively.

## Development

### Git Workflow
1. Make changes in your working directory
2. Stage changes: `git add .`
3. Commit with descriptive message
4. Push to GitHub: `git push origin main`

### Branching Strategy
- **main** - Primary development branch
- Feature branches created as needed for major changes

## Troubleshooting

### Common Issues

**Issue: Git MCP not connecting**
- Solution: Restart Claude Code session
- The Git MCP server connects on-demand within repository context

**Issue: Files not tracked by git**
- Solution: Check `.gitignore` for exclusion rules
- Ensure files are in the correct directory

## API Documentation
Not applicable - this is a documentation repository.

## Changelog

### 2025-10-23
- Initial repository setup
- Git repository initialized in claude-dev folder
- GitHub repository created and connected
- MCP servers configured (filesystem, playwright, git)
- Created comprehensive .gitignore
- Established action logging system

## Credits & Dependencies

### MCP Servers
- `@modelcontextprotocol/server-filesystem` - File system operations
- `@playwright/mcp` - Browser automation
- `@modelcontextprotocol/server-git` - Git operations

### Tools
- Claude Code CLI
- Git
- Node.js/npx

## Security

### Protected Files
The following files are excluded from version control via `.gitignore`:
- `credentials.md` - Credential documentation
- `.env*` - Environment files
- `*.key`, `*.pem` - Key files
- `logs/` - Log files

## Contributing
This is a personal development workspace. Contributions follow the procedures outlined in CLAUDE.md.

## License
Personal project - no specific license.

---

**Last Updated:** 2025-10-23 by Claude Code
**Log File:** See `claude-actions.md` for detailed change history
**Repository:** https://github.com/Fedutin22/claude-dev-1
