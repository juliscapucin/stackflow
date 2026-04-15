# New Feature List

Ideas for future features organized by tier.

---

## Free Tier

- **Import/Export (basic)** - JSON export of items for backup, import from JSON to migrate data in
- **Keyboard shortcuts** - Vim-style navigation, quick actions (e.g. `n` for new item, `f` to favorite)
- **Duplicate item** - Quick clone of any item
- **Item sorting** - Sort items by name, date created, date updated on list pages
- **Trash/soft delete** - Recoverable deletions with a 30-day trash bin
- **Tags page** - Browse all tags, click to filter items by tag
- **Markdown preview in cards** - Show rendered markdown snippet in note/prompt cards
- **Public sharing** - Generate a public read-only link for a single item (like a Gist)
- **Dark/Light theme toggle** - Light mode option (dark is currently the only mode)

## Pro Tier

- **AI Chat** - Ask questions about your stash ("find my React auth snippet", "what commands did I save for Docker?")
- **Custom item types** - User-defined types with custom icons/colors (already in the spec as "coming soon")
- **Bulk operations** - Multi-select items to move, tag, delete, or assign to collections
- **Version history** - Track edits to items over time, diff view, restore previous versions
- **Import from GitHub Gists** - Pull in existing Gists as snippets
- **Team sharing** - Share collections with other DevStash users (read-only or edit)
- **Webhooks/API access** - REST API + API keys so users can save items from CLI tools, extensions, etc.
- **VS Code extension** - Save snippets directly from the editor
- **Advanced export** - Export as ZIP with files, or export collection as a markdown doc
- **AI auto-categorize** - On import or paste, AI suggests the type, collection, and tags automatically
- **Nested collections** - Sub-collections for deeper organization

## Quick Wins

| Feature | Tier | Why |
|---|---|---|
| Duplicate item | Free | One query + dialog |
| Tags page | Free | Already have tag data |
| Item sorting | Free | Client-side, minimal code |
| Public sharing | Free | Single new route + token |
| Custom types | Pro | Already spec'd, schema supports it |
| Bulk operations | Pro | Big UX improvement |
