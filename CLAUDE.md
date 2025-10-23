# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## MANDATORY COMPLIANCE NOTICE

**These instructions are REQUIRED for all Claude Code operations. Failure to follow these procedures is unacceptable and must be corrected immediately.**

## SESSION STARTUP CHECKLIST - EXECUTE BEFORE ANY OTHER WORK

**Claude Code MUST perform these actions at the start of EVERY session:**

1. **Create or update `claude-actions.md`** with current session header
2. **Verify all required files exist** (README.md, architecture.md, etc.)
3. **Confirm logging structure is in place** and functional
4. **Read and acknowledge these instructions** by stating "CLAUDE.md instructions loaded and acknowledged"
5. **Initialize session log** with timestamp and goals
6. **Use Git for version control** - All code changes tracked via Git commits

**NO OTHER WORK SHALL PROCEED UNTIL THIS CHECKLIST IS COMPLETE**

## Repository Overview

This repository contains comprehensive operational instructions for Claude Code usage, focusing on logging, documentation, and project management procedures.

## Key Information for Claude Code Instances

### Repository Type
Documentation/guidance repository - contains operational procedures rather than a traditional codebase.

### Important Files
- `claude.md` (this file) - Contains detailed operational instructions including:
  - Structured logging requirements and templates
  - Documentation management standards  
  - Security and credential handling procedures
  - File organization standards
  - Quality assurance processes

### Development Workflow
This project uses Git for version control. Focus on:
1. Following the logging and documentation standards outlined below
2. **MANDATORY: Using Git commits for ALL code changes**
3. Maintaining file organization as specified
4. Ensuring security procedures are followed
5. Writing descriptive commit messages that explain the "why" not just the "what"

### Git Version Control (MANDATORY)
**ALL code development MUST be tracked via Git:**

**Git Workflow:**
1. Make changes to files as needed
2. Stage changes: `git add <files>`
3. Commit with descriptive message: `git commit -m "description"`
4. Push to GitHub: `git push origin main`

**Commit Message Guidelines:**
- Use present tense ("Add feature" not "Added feature")
- Be descriptive and explain the purpose
- Reference related issues or tasks if applicable
- Follow git commit best practices

**IMPORTANT: Git replaces the need for version folders - all history is tracked in Git**

---

# Claude Code Comprehensive Instructions

## Core Principles

1. **Always maintain detailed logs** of all actions and results
2. **Keep documentation current** and comprehensive
3. **Ensure transparency** in all operations and decisions
4. **Maintain security** of credentials and sensitive information
5. **Provide clear communication** about progress and issues
6. **NEVER USE EMOJIS** in any code, documentation, or communication

## Error Handling and Troubleshooting

### CRITICAL: Always Check Logs First - NEVER Start from Scratch

**MANDATORY RULE: Before doing ANY work, especially when resuming a session or encountering issues:**

1. **READ `claude-actions.md` COMPLETELY** - This is your changelog/memory
   - See what has already been done
   - Understand the current state of the project
   - Review previous errors and solutions
   - Check what was working and what wasn't
   - **DO NOT re-do work that's already completed**

2. **Check Git history**: `git log --oneline -10`
   - See recent commits
   - Understand what changed and when
   - Identify the current state of the codebase

3. **Review existing files** before creating new ones
   - Use `ls` or file tree to see what exists
   - Read existing files to understand current implementation
   - **NEVER recreate files that already exist**

### When Errors Occur

**MANDATORY PROCEDURE:**

1. **FIRST: Check `claude-actions.md`** - This file serves as the complete changelog and may contain:
   - Recent changes that caused the error
   - Known issues and their solutions
   - Context about what was recently modified
   - Previous error resolutions
   - **What was already tried and what worked/didn't work**

2. **Log the error immediately** in `claude-actions.md`:
   - Full error message and stack trace
   - What action triggered the error
   - Files or components involved
   - Timestamp of occurrence

3. **Analyze the error**:
   - Review recent changes in `claude-actions.md`
   - Check git history: `git log --oneline`
   - Identify what changed before the error appeared
   - **Check if this error was encountered and solved before**

4. **Document the solution**:
   - Log attempted fixes in `claude-actions.md`
   - Document the working solution
   - Add prevention measures for the future

5. **If error persists and root cause is unclear**:
   - **Add manual debugging/logging to the code**
   - Insert print/console.log statements at key points
   - Use debugging functions similar to PHP Symfony's `dd()` (dump and die)
   - Examples:
     - Python: `print(f"DEBUG: variable = {variable}")` or `import pdb; pdb.set_trace()`
     - JavaScript: `console.log('DEBUG:', variable)` or `debugger;`
     - Add timestamps to logs: `print(f"[{datetime.now()}] DEBUG: {variable}")`
   - Log function entry/exit points
   - Log variable states before/after transformations
   - **Document what debugging code was added and why**

**CRITICAL RULES:**
- `claude-actions.md` is your changelog AND your memory
- ALWAYS read it before starting ANY work
- NEVER redo work that's already been completed
- NEVER recreate files without checking if they exist
- Git history is your version control - use it!
- When stuck, add manual logging/debugging to understand program flow

## Debugging Strategies

### When Standard Troubleshooting Doesn't Work

If checking logs and git history doesn't reveal the issue, use manual debugging:

### Debug Logging Techniques

**Python Examples:**
```python
# Simple debug print
print(f"DEBUG: Processing item {item_id} at line 42")

# With timestamp
from datetime import datetime
print(f"[{datetime.now().strftime('%H:%M:%S')}] DEBUG: user_data = {user_data}")

# Dump and die (like PHP dd())
import sys
def dd(*args):
    for arg in args:
        print(f"DEBUG DUMP: {arg}")
    sys.exit(1)

# Interactive debugger
import pdb; pdb.set_trace()  # Program pauses here for inspection

# Pretty print complex objects
import pprint
pprint.pprint(complex_object)
```

**JavaScript/Node.js Examples:**
```javascript
// Simple debug log
console.log('DEBUG: Processing item', itemId, 'at line 42');

// With timestamp
console.log(`[${new Date().toISOString()}] DEBUG: userData =`, userData);

// Dump and die equivalent
const dd = (...args) => {
    console.log('DEBUG DUMP:', ...args);
    process.exit(1);
};

// Debugger breakpoint
debugger;  // Program pauses here if DevTools open

// Pretty print
console.dir(complexObject, { depth: null, colors: true });
```

### Debugging Workflow

1. **Add logging at critical points**:
   - Function entry: `print(f"ENTER: functionName({args})")`
   - Function exit: `print(f"EXIT: functionName -> {result}")`
   - Before/after data transformation
   - Inside loops to track iterations
   - Error handlers to capture exception details

2. **Use structured debugging**:
   - Add a `DEBUG` constant/flag to enable/disable debug output
   - Prefix all debug messages with "DEBUG:" for easy filtering
   - Include file name and line number when possible

3. **Document debugging additions**:
   - Log in `claude-actions.md` what debugging code was added
   - Note what you're trying to investigate
   - Record findings from debug output
   - **Remove or disable debug code before final commit** (or keep behind DEBUG flag)

4. **Git commit debugging code separately**:
   - Commit with message like "Add debugging for [issue]"
   - Makes it easy to remove later: `git revert <commit>`

## Logging Requirements

### Primary Log File: `claude-actions.md`

Create and maintain a detailed log file in the project root with the following structure:

```markdown
# Claude Code Action Log

## Project: [Project Name]
**Started:** [Date/Time]  
**Last Updated:** [Date/Time]

---

## Session: [YYYY-MM-DD HH:MM]

### Actions Performed
- [ ] Task description
  - **Status:** [In Progress/Completed/Failed]
  - **Result:** Brief description of outcome
  - **Files Modified:** List of files changed
  - **Time:** [HH:MM - HH:MM]
  - **Notes:** Any important observations or issues

### Code Changes
- **File:** `path/to/file.ext`
  - **Type:** [Created/Modified/Deleted/Renamed]
  - **Purpose:** Reason for change
  - **Impact:** What this change affects
  - **Lines:** [Added: X, Removed: Y]

### Issues Encountered
- **Issue:** Description of problem
  - **Severity:** [Low/Medium/High/Critical]
  - **Solution:** How it was resolved
  - **Prevention:** Steps to avoid in future

### Tests & Validation
- **Test Type:** [Unit/Integration/Manual]
  - **Status:** [Pass/Fail/Skipped]
  - **Coverage:** What was tested
  - **Results:** Brief summary

---
```

### Additional Logging Requirements

1. **Real-time updates** - Update the log immediately after each significant action
2. **Granular detail** - Log individual file changes, not just high-level tasks
3. **Error tracking** - Document all errors with full stack traces when relevant
4. **Performance notes** - Log any performance observations or optimizations
5. **Decision rationale** - Explain why specific approaches were chosen

## MANDATORY VERIFICATION CHECKPOINTS

**After every 3 actions, Claude Code MUST:**

1. **Update the action log** with completed work
2. **Verify documentation is current** and reflects changes
3. **Check security compliance** - no credentials exposed
4. **Confirm next steps** are logged and clear
5. **Report any blockers** immediately
6. **Consider Git commit** - commit logical units of work

**After every 10 actions or 30 minutes (whichever comes first):**

1. **Complete progress summary** in action log
2. **Reassess goals** and adjust if needed
3. **Review file organization** compliance
4. **Create Git commit** - commit completed work with descriptive message
5. **Update session status** and timeline estimates

**FAILURE TO PERFORM CHECKPOINTS VIOLATES THESE INSTRUCTIONS**

## Documentation Management

### README.md Updates

Update the project README.md whenever:

- **New features** are added or major changes occur
- **Installation/setup process** changes
- **Dependencies** are added, updated, or removed
- **Configuration requirements** change
- **API endpoints** are modified
- **Breaking changes** are introduced
- **Project structure** is significantly altered

### README.md Structure Requirements

Ensure the README includes:

```markdown
# Project Title

## Overview
Brief description of what the project does

## Features
- List of key features
- Recent additions (with dates)

## Installation
Step-by-step setup instructions

## Configuration
Required environment variables and settings

## Usage
Basic usage examples and common commands

## API Documentation
If applicable, list endpoints and methods

## Development
- Setup for development
- Running tests
- Contributing guidelines

## Troubleshooting
Common issues and solutions

## Changelog
Recent changes and version history

## Credits & Dependencies
Third-party libraries and acknowledgments

---
**Last Updated:** [Date] by Claude Code
**Log File:** See `claude-actions.md` for detailed change history
```

### Documentation Standards

1. **Keep it current** - Update documentation as changes are made, not after
2. **Be specific** - Include exact commands, file paths, and configurations
3. **Add examples** - Provide concrete usage examples
4. **Link related files** - Cross-reference relevant documentation
5. **Version information** - Include version numbers and compatibility notes

## Credential and Security Management

### Credential Documentation: `credentials.md`

Create a secure credentials file with:

```markdown
# Project Credentials & Configuration

**SECURITY WARNING:** This file contains sensitive information. 
**Never commit this file to version control.**

## Environment Variables Required

### Database
- `DATABASE_URL` - Connection string for primary database
- `DATABASE_PASSWORD` - Database password
- `DATABASE_HOST` - Database host address

### API Keys
- `API_KEY_SERVICE_NAME` - Description of what this key is for
- `SECRET_TOKEN` - Purpose and scope of token

### Third-party Services
- `STRIPE_SECRET_KEY` - Payment processing
- `AWS_ACCESS_KEY_ID` - Cloud storage access
- `AWS_SECRET_ACCESS_KEY` - Cloud storage secret

## Configuration Files
- `.env.example` - Template with dummy values
- `.env.local` - Local development settings
- `config/production.yml` - Production configuration template

## Access Information
- **Admin Panel:** [URL] (credentials in password manager)
- **Database Console:** [URL] (use DATABASE_URL)
- **Monitoring:** [URL] (team shared account)

## Security Notes
- All passwords stored in [Password Manager Name]
- API keys have [expiration/rotation schedule]
- Access logs available at [location]

---
**Last Updated:** [Date]
**Review Schedule:** [Frequency - e.g., Monthly]
```

### Security Requirements

1. **Never log sensitive data** in action logs or README files
2. **Use placeholder values** in example configurations
3. **Document security requirements** clearly
4. **Reference external secure storage** for actual credentials
5. **Include security review dates** and procedures

## File Organization Standards

### Required Project Files

Ensure these files exist and are maintained:

```
project-root/
├── .git/                                # Git repository (version control)
├── .gitignore                           # Git exclusions
├── CLAUDE.md                            # This instruction file
├── README.md                            # Main project documentation
├── architecture.md                      # System architecture documentation
├── claude-actions.md                    # Detailed action log (CHANGELOG)
├── credentials.md                       # Credential documentation (gitignored)
├── .env.example                         # Environment template
├── src/                                 # Source code (if applicable)
│   ├── scripts/                         # Python/JS scripts
│   └── utils/                           # Utility functions
├── docs/                                # Additional documentation
│   ├── deployment.md                    # Deployment guide
│   └── troubleshooting.md               # Common issues
├── tests/                               # Test files
└── output/                              # Generated outputs (gitignored)
    ├── data.csv                         # CSV outputs
    └── results.xlsx                     # Excel outputs
```

**IMPORTANT: Use Git for version control - all changes tracked via commits**

### File Naming Conventions

1. **Python scripts**: Use snake_case (`data_processor.py`, `web_scraper.py`)
2. **Documentation files**: Use kebab-case (`action-log.md`, `deployment-guide.md`)
3. **Time-sensitive logs**: Include dates (`2025-10-23-deployment.md`)
4. **Descriptive naming**: Be clear about purpose (`database-migration-notes.md`)
5. **Group related files** in appropriate directories (src/, docs/, tests/)
6. **Configuration files**: Use standard names (`.env`, `config.json`, `.gitignore`)

## Communication and Reporting

### Progress Updates

Provide regular updates including:

1. **Current status** - What's being worked on
2. **Completed tasks** - What was finished
3. **Blockers** - What's preventing progress
4. **Next steps** - What's planned next
5. **Timeline estimates** - When tasks will be complete

### Issue Reporting

When problems occur:

1. **Log immediately** in `claude-actions.md`
2. **Include full context** - what led to the issue
3. **Document attempted solutions** - what was tried
4. **Provide reproduction steps** if applicable
5. **Suggest preventive measures** for the future

## Quality Assurance

### Before Each Session Ends

1. **Update all logs** with session activities
2. **Commit documentation changes** if using version control
3. **Verify critical files** are properly updated
4. **Check for security issues** in any new files
5. **Confirm next session preparation** is complete

### Weekly Reviews

1. **Review `claude-actions.md`** for completeness
2. **Update README.md** if any major changes occurred
3. **Verify credentials documentation** is current
4. **Check for outdated information** in all docs
5. **Plan upcoming work** based on logged progress

## Emergency Procedures

### If Something Goes Wrong

1. **Stop current operations** immediately
2. **Log the issue** with timestamp and full details
3. **Assess impact** - what systems/features are affected
4. **Document recovery steps** as they're performed
5. **Update preventive measures** to avoid recurrence

### Recovery Documentation

Create incident reports including:

- **Timeline** of events
- **Root cause** analysis
- **Impact assessment**
- **Resolution steps** taken
- **Lessons learned**
- **Process improvements** implemented

---

## Templates and Examples

### Daily Log Entry Template

```markdown
## Session: 2024-03-15 09:30

### Goals
- [ ] Implement user authentication
- [ ] Update API documentation
- [ ] Fix database migration issue

### Actions Performed
- [x] Created user model and migration
  - **Files:** `models/user.js`, `migrations/001_create_users.sql`
  - **Time:** 09:30 - 10:15
  - **Result:** Successfully created with email/password fields

- [ ] Implement login endpoint (In Progress)
  - **Status:** 60% complete
  - **Blocker:** Need to configure JWT secret
  - **Next:** Add JWT configuration to environment

### Issues & Solutions
- **Issue:** Migration failed due to existing table
  - **Solution:** Added IF NOT EXISTS clause
  - **Prevention:** Always check existing schema first

### Next Session Preparation
- Configure JWT_SECRET in environment
- Test login endpoint thoroughly
- Update API documentation with new endpoints
```

## USER ENFORCEMENT GUIDELINES

**Users should reference this file to ensure Claude Code compliance:**

### At Session Start:
- Ask Claude to confirm: "Have you read and will you follow the CLAUDE.md instructions?"
- Verify Claude creates `claude-actions.md` before starting work
- Expect the startup checklist to be completed first

### During Sessions:
- Reference CLAUDE.md: "Follow the procedures in CLAUDE.md"
- Check that action logs are being maintained in real-time
- Verify checkpoint compliance every 10-15 minutes
- Ask for progress summaries if not provided automatically

### Quality Control:
- Review `claude-actions.md` for completeness
- Ensure all file changes are properly documented
- Verify security procedures are being followed
- Request clarification if procedures are not followed

### If Non-Compliance Occurs:
1. **Stop current work immediately**
2. **Point to specific CLAUDE.md requirement being violated**
3. **Request immediate correction and compliance**
4. **Resume work only after compliance is restored**

---

## AUTOMATIC COMPLIANCE TRIGGERS

**Claude Code instances MUST automatically:**

- Create `claude-actions.md` if it doesn't exist
- Log every file modification immediately
- Perform verification checkpoints without prompting
- Update documentation in real-time
- Report issues and blockers immediately
- Maintain security standards throughout

**NON-NEGOTIABLE: These are not suggestions but mandatory operational requirements**

---

This comprehensive instruction set ensures consistent, thorough documentation and logging practices for all Claude Code operations.
- always use all available tools and/or mcp servers to achieve a goal