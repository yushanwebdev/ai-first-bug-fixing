# Bug Fixing Process

This document outlines the standardized process for fixing bugs in the project, ensuring consistency, quality, and proper traceability.

## Overview

The bug fixing process follows these key steps:

1. **Analysis** - Understand the bug and its impact
2. **Implementation** - Create a fix following coding standards
3. **Testing** - Validate the fix works correctly
4. **Documentation** - Create a proper PR with required information
5. **Review** - Submit for code review and approval

## Step-by-Step Process

### 1. Analysis Phase

**Objective**: Understand the bug completely before implementing a fix.

**Actions**:

- Read the bug description carefully
- Reproduce the issue locally
- Identify the root cause
- Determine the scope of the fix
- Consider potential side effects

**Deliverables**:

- Clear understanding of what's broken
- Identification of the problematic code
- Assessment of impact on users

### 2. Implementation Phase

**Objective**: Create a fix that resolves the issue without introducing new problems.

**Actions**:

- Create a new branch following the naming convention: `bugfix/[JIRA-ID]-brief-description`
- Implement the fix using existing code patterns
- Ensure the fix is minimal and focused
- Follow the project's coding standards
- Add comments if the fix is complex

**Branch Naming Convention**:

```
bugfix/[JIRA-ID]-brief-description
```

**Examples**:

- `bugfix/BLOTT-1200-amount-two-decimals`
- `bugfix/SPOT-1184-favourite-amount-formatting`
- `bugfix/SPOT-1185-email-validation`

### 3. Testing Phase

**Objective**: Ensure the fix works correctly and doesn't break existing functionality.

**Actions**:

- Test the fix manually
- Verify the bug is resolved
- Check for regression issues
- Test edge cases
- Run linting and type checking
- Ensure code formatting is correct

**Testing Checklist**:

- [ ] Manual testing completed
- [ ] ESLint validation passed
- [ ] TypeScript compilation passed
- [ ] Prettier formatting applied
- [ ] No regression issues found
- [ ] Edge cases considered
- [ ] Follows existing code patterns

### 4. Documentation Phase

**Objective**: Create a clear, comprehensive PR that explains the fix.

**Actions**:

- Commit with proper message format: `fix(JIRA-ID): brief description`
- Create PR using the bug fix template
- Fill out all required sections
- Include Jira ticket link
- Provide clear before/after examples

**Commit Message Format**:

```
fix(JIRA-ID): brief description of the fix
```

**Examples**:

- `fix(BLOTT-1200): always display amount with two decimal places`
- `fix(SPOT-1184): ensure favourite amounts display with two decimal places`
- `fix(SPOT-1185): add proper email validation on login screen`

### 5. Review Phase

**Objective**: Get approval and merge the fix.

**Actions**:

- Submit PR for review
- Address any feedback from reviewers
- Ensure all checks pass
- Merge after approval

## PR Template Structure

Every bug fix PR must include:

### Required Sections

1. **Jira Link** - Direct link to the original ticket
2. **Problem** - Clear description of the bug and its impact
3. **Root Cause** - Technical explanation of what was causing the issue
4. **Solution** - Bullet points of changes made
5. **Testing** - Checklist of validation completed
6. **Changes Made** - List of modified files with brief descriptions
7. **Expected Result** - Before/after examples showing the fix

### Example PR Structure

```markdown
## 🔗 Jira Link

[TICKET-ID](link) - Brief title

## 📋 Problem

[Description of the bug]

## 🔍 Root Cause

[Technical explanation]

## ✅ Solution

- [Change 1]
- [Change 2]

## 🧪 Testing

- [x] Manual testing completed
- [x] ESLint validation passed
- [x] TypeScript compilation passed
- [x] Prettier formatting applied
- [x] No regression issues found
- [x] Follows existing code patterns

## 📝 Changes Made

**File**: [filename]

- [Description of changes]

## 🎯 Expected Result

**Before**: [Previous behavior]
**After**: [New behavior]
```

## Quality Standards

### Code Quality

- Follow existing code patterns and conventions
- Keep changes minimal and focused
- Add comments for complex logic
- Ensure proper error handling
- Use appropriate data types

### Testing Requirements

- Always test manually before submitting
- Verify the fix resolves the original issue
- Check for potential side effects
- Test edge cases and error conditions
- Ensure no regression in related functionality

### Documentation Standards

- Use clear, concise language
- Provide specific examples
- Include all required sections
- Link to the original Jira ticket
- Use proper markdown formatting

## Common Pitfalls to Avoid

### ❌ Don't Do This

- Skip the analysis phase
- Make changes without understanding the root cause
- Ignore existing code patterns
- Submit without testing
- Use vague commit messages
- Forget to include Jira ticket links
- Make unrelated changes in the same PR

### ✅ Do This Instead

- Take time to understand the issue completely
- Follow existing code patterns and conventions
- Test thoroughly before submitting
- Use descriptive commit messages
- Include all required PR sections
- Keep changes focused and minimal
- Link to the original Jira ticket

## Tools and Commands

### Essential Commands

```bash
# Create bugfix branch
git checkout -b bugfix/[JIRA-ID]-brief-description

# Stage and commit changes
git add [files]
git commit -m "fix(JIRA-ID): brief description"

# Push branch and create PR
git push --set-upstream origin bugfix/[JIRA-ID]-brief-description
gh pr create --base main --head bugfix/[JIRA-ID]-brief-description --title "fix(JIRA-ID): description" --body-file pr_description.md

# Update PR description
gh pr edit [PR_NUMBER] --body-file updated_description.md
```

### Validation Commands

```bash
# Run linting
npm run lint

# Check TypeScript
npm run type-check

# Format code
npm run format

# Run tests
npm test
```

## Integration with Development Workflow

This bug fixing process integrates with:

1. **Jira** - For ticket tracking and documentation
2. **Git** - For version control and branching
3. **GitHub** - For PR creation and code review
4. **CI/CD** - For automated testing and validation
5. **Code Review** - For quality assurance and knowledge sharing

## Benefits

Following this process ensures:

- **Consistency** - All bug fixes follow the same approach
- **Quality** - Proper testing and validation
- **Traceability** - Clear links between bugs and fixes
- **Knowledge Sharing** - Documentation helps team members understand changes
- **Maintainability** - Well-documented fixes are easier to maintain
- **Professionalism** - Standardized approach reflects team maturity

## Getting Help

If you encounter issues during the bug fixing process:

1. **Technical Questions** - Ask team members or check existing documentation
2. **Process Questions** - Refer to this document or ask the team lead
3. **Complex Bugs** - Consider pair programming or code review sessions
4. **Unclear Requirements** - Clarify with the ticket creator or product owner

## Continuous Improvement

This process should be reviewed and updated regularly based on:

- Team feedback and suggestions
- Lessons learned from bug fixes
- Changes in project requirements
- Improvements in tools and practices

---

_This document should be updated as the process evolves and team practices improve._
