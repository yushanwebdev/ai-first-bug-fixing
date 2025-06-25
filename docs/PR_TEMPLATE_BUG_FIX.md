# Bug Fix Pull Request Template

This document outlines the standard structure for creating Pull Requests for bug fixes in the SpotApp project. Following this template ensures consistency, clarity, and proper traceability.

## PR Structure Overview

### 1. Title Format

```
fix(TICKET-ID): Brief description of the fix
```

**Examples:**

- `fix(SPOT-1184): Ensure favourite amounts display with two decimal places`
- `fix(SPOT-1185): Add proper email validation on login screen`
- `fix(SPOT-1186): Increase payment timeout to handle slow networks`

### 2. PR Description Template

```markdown
## 🔗 Jira Link

[TICKET-ID](https://spotpaymentsltd.atlassian.net/browse/TICKET-ID) - Brief title of the ticket

## 📋 Problem

Brief description of the bug and its impact on users. Include specific examples when possible.

## 🔍 Root Cause

Technical explanation of what was causing the bug. Be specific about the code, logic, or configuration issue.

## ✅ Solution

- Bullet point list of changes made
- Focus on the approach taken
- Mention any libraries, patterns, or consistency improvements

## 🧪 Testing

- [ ] Manual testing completed - describe what was tested
- [ ] ESLint validation passed (no linting errors)
- [ ] TypeScript compilation passed (no type errors)
- [ ] Prettier formatting applied automatically
- [ ] Cross-platform testing (iOS/Android) if applicable
- [ ] No regression issues found
- [ ] Edge cases considered
- [ ] Follows existing code patterns

## 📝 Changes Made

**File(s)**: List the modified files

- Bullet point summary of changes made to each file
- Focus on what was changed, not how (the diff shows the how)

## 🎯 Expected Result

**Before**: Description or example of previous behavior
**After**: Description or example of new behavior

Brief summary of the overall impact.
```

## Complete Example

Based on SPOT-1184, here's how the template looks when filled out:

```markdown
## 🔗 Jira Link

[SPOT-1184](https://spotpaymentsltd.atlassian.net/browse/SPOT-1184) - Ensure favourite amounts display with two decimal places

## 📋 Problem

The favourite list was displaying currency amounts with inconsistent decimal places (e.g., £4.5 instead of £4.50), creating an unprofessional appearance and inconsistent user experience.

## 🔍 Root Cause

The `FavouriteListItem` component was using simple string concatenation (`'£' + item?.amount`) instead of proper currency formatting, unlike other components in the app that use the `currency.js` library.

## ✅ Solution

- Added `currency.js` import to `FavouriteListItem` component
- Replaced string concatenation with proper currency formatting: `currency(item?.amount ?? 0, { symbol: '£' }).format()`
- Ensures consistency with other components (`FavouriteButton`, `FavouriteLink`) that already use this pattern

## 🧪 Testing

- [x] Manual testing completed - verified currency formatting logic
- [x] ESLint validation passed (no linting errors)
- [x] TypeScript compilation passed (no type errors)
- [x] Prettier formatting applied automatically
- [x] No regression issues found - only affects display formatting
- [x] Follows existing code patterns and uses same currency.js library

## 📝 Changes Made

**File**: `src/view/widgets/favourite-list-item.tsx`

- Added currency.js import
- Updated currency display logic to use proper formatting

## 🎯 Expected Result

**Before**: Macchiato - £4.5
**After**: Macchiato - £4.50

All favourite amounts will now consistently display with 2 decimal places across the application.
```

## Key Guidelines

### Do's ✅

- ✅ Always include the Jira ticket link at the top
- ✅ Use clear, descriptive section headers
- ✅ Provide specific examples in Problem and Expected Result sections
- ✅ List all modified files with brief change descriptions
- ✅ Check off all relevant testing items
- ✅ Be concise but comprehensive
- ✅ Focus on the business impact and user experience

### Don'ts ❌

- ❌ Don't include code diffs in the description (GitHub shows these)
- ❌ Don't add unnecessary sections like "Links"
- ❌ Don't use vague descriptions ("fixed bug")
- ❌ Don't skip the testing checklist
- ❌ Don't forget to reference the Jira ticket
- ❌ Don't make the description too long or too short

## Branch and Commit Standards

### Branch Naming

```
bugfix/[TICKET-ID]-[brief-description]
```

### Commit Message

```
fix(TICKET-ID): Brief description of the fix
```

## GitHub CLI Usage

### Create PR with Template

```bash
# Create description file
echo "PR description content" > pr_description.md

# Create PR
gh pr create --title "fix(TICKET-ID): Description" --body-file pr_description.md

# Clean up
rm pr_description.md
```

### Update PR Description

```bash
# Create updated description
echo "Updated PR description" > updated_description.md

# Update PR
gh pr edit --body-file updated_description.md

# Clean up
rm updated_description.md
```

## Benefits of This Structure

1. **Traceability**: Direct link to Jira ticket ensures complete audit trail
2. **Clarity**: Structured format makes it easy to understand the fix
3. **Quality**: Testing checklist ensures thorough validation
4. **Consistency**: Standardized format across all bug fix PRs
5. **Documentation**: Serves as historical record for future reference
6. **Review Efficiency**: Reviewers can quickly understand context and impact

## Integration with Bug Fixing Process

This PR template integrates seamlessly with the [Bug Fixing Process](./BUG_FIXING_PROCESS.md):

1. **Analysis Phase**: Information gathered feeds into Problem and Root Cause sections
2. **Implementation Phase**: Changes made are documented in Solution and Changes Made sections
3. **Testing Phase**: Testing checklist ensures all validation is completed
4. **Review Phase**: Structured format makes review process more efficient

## Template Files

For convenience, you can create template files:

### `.github/PULL_REQUEST_TEMPLATE/bug_fix.md`

```markdown
## 🔗 Jira Link

[TICKET-ID](https://spotpaymentsltd.atlassian.net/browse/TICKET-ID) - Brief title of the ticket

## 📋 Problem

[Describe the bug and its impact]

## 🔍 Root Cause

[Explain what was causing the bug]

## ✅ Solution

- [Change 1]
- [Change 2]

## 🧪 Testing

- [ ] Manual testing completed
- [ ] ESLint validation passed
- [ ] TypeScript compilation passed
- [ ] Prettier formatting applied
- [ ] No regression issues found
- [ ] Follows existing code patterns

## 📝 Changes Made

**File**: [filename]

- [Description of changes]

## 🎯 Expected Result

**Before**: [Previous behavior]
**After**: [New behavior]

[Summary of impact]
```

This standardized approach ensures that every bug fix PR provides complete context, proper testing validation, and clear traceability back to the original issue.
