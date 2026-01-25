# Quick Start Guide: Custom Notes with Sections

## 🎯 Overview

This app now fully integrates custom notes into the navigation with section support, edit buttons, and search functionality - just like the built-in markdown notes!

---

## 📝 Creating Your First Note

### Step 1: Open Note Builder

1. Click **"My Notes"** in the left navigation
2. Click **"+ New Note"**

### Step 2: Set Up Your Note

1. Enter a **title** (e.g., "React Hooks Guide")
2. Select a **section** from the dropdown:
   - Choose "Unsorted" for no section
   - Choose an existing section
   - Or select **"+ Create New Section"**

### Step 3: Create a New Section (Optional)

1. Select "+ Create New Section"
2. Type section name (e.g., "Web Development")
3. Press **Enter** to create
4. Or press **Escape** to cancel

### Step 4: Add Content

1. Click **"Add Element"** tab
2. Choose element type (h1, h2, p, table, ul, etc.)
3. Click element in preview to edit text inline
4. Add more elements as needed

### Step 5: Save

1. Click **"Save Note"** button
2. Note is saved to IndexedDB
3. Automatically appears in left navigation under your chosen section

---

## 📂 Organizing with Sections

### Example Organization:

```
My Notes
├── Web Development
│   ├── React Hooks Guide
│   ├── CSS Grid Tutorial
│   └── Webpack Configuration
├── Computer Science
│   ├── Data Structures
│   ├── Algorithms Study
│   └── Big O Notation
└── Project Ideas
    ├── E-commerce App
    └── Social Media Dashboard
```

### Tips:

- Use descriptive section names
- Keep sections broad enough to group related notes
- Create new sections anytime via the dropdown
- Notes without a section go to "Unsorted"

---

## 👀 Viewing Your Notes

### From Left Navigation:

1. Click **"My Notes"** dropdown
2. See all sections with notes grouped underneath
3. Click any note to view it

### What You'll See:

- **Note title** at the top
- **Section badge** showing which section it's in
- **Full note content** rendered like markdown
- **"Edit Note"** button to make changes

### Example View:

```
┌─────────────────────────────────────┐
│ React Hooks Guide    [Edit Note]   │
│ Section: Web Development            │
├─────────────────────────────────────┤
│                                     │
│ # Introduction to Hooks            │
│                                     │
│ React Hooks allow you to use...   │
│                                     │
│ ## Common Hooks                     │
│ - useState                          │
│ - useEffect                         │
│ - useContext                        │
│                                     │
└─────────────────────────────────────┘
```

---

## ✏️ Editing Your Notes

### Method 1: From View Mode

1. Open any custom note
2. Click **"Edit Note"** button
3. NoteBuilder opens with your note loaded
4. Make changes
5. Click **"Save Note"**
6. Click **"← Back to View"** to return

### Method 2: From Navigation

1. Click "+ New Note" to create a new one
2. Or edit from view mode as above

### What You Can Edit:

- ✅ Note title
- ✅ Section assignment
- ✅ All elements and content
- ✅ Add/remove/reorder elements
- ✅ Edit element text inline
- ✅ Drag and drop to reorganize

---

## 🔍 Searching Your Notes

### How to Search:

1. Use search bar in left navigation
2. Type your search query
3. See results from:
   - Built-in markdown notes
   - Your custom notes
4. Custom notes show preview text
5. Click any result to open the note

### Search Features:

- Searches note **titles**
- Searches note **content**
- Case-insensitive
- Instant results
- Combined with markdown note search

### Example Search Result:

```
📒 React Hooks Guide
Section: Web Development
Preview: "Introduction to Hooks React Hooks allow you to..."
```

---

## 🎨 Visual Guide

### Left Navigation Structure:

```
┌─────────────────────────┐
│ All Chapters            │
├─────────────────────────┤
│ 🔍 Search all notes...  │
├─────────────────────────┤
│ ▼ 📒 My Notes           │ ← Click to expand
│   + New Note            │ ← Create new
│   ┌─────────────────┐   │
│   │ WEB DEVELOPMENT │   │ ← Section header
│   ├─────────────────┤   │
│   │ React Hooks     │   │ ← Your note
│   │ CSS Grid        │   │
│   └─────────────────┘   │
│   ┌─────────────────┐   │
│   │ COMPUTER SCIENCE│   │
│   ├─────────────────┤   │
│   │ Algorithms      │   │
│   └─────────────────┘   │
└─────────────────────────┘
```

### Section Dropdown in Note Builder:

```
┌─────────────────────────────────┐
│ Note Title: [My New Note]      │
│                                 │
│ Section: [Unsorted        ▼]   │ ← Click dropdown
│          ├─ Unsorted            │
│          ├─ Web Development     │ ← Existing sections
│          ├─ Computer Science    │
│          └─ + Create New...     │ ← Add new
└─────────────────────────────────┘
```

---

## 💡 Pro Tips

### Organization:

1. **Plan your sections first** - Think about how you'll organize notes
2. **Use consistent naming** - "Web Development" not "web dev" or "WebDev"
3. **Keep sections broad** - Better to have 5-10 sections than 50
4. **Review regularly** - Move notes between sections as needed

### Workflow:

1. **Quick capture** - Create notes in "Unsorted" first
2. **Organize later** - Edit to assign proper section
3. **Search often** - Use search to find notes quickly
4. **Edit inline** - Click elements to edit without switching modes

### Performance:

1. **Notes load from IndexedDB** - Fast local storage
2. **Sections auto-update** - New sections appear immediately
3. **Search is instant** - No server delays
4. **Offline-first** - Works without internet

---

## 🚀 Common Workflows

### Workflow 1: Study Notes

```
1. Create section: "Biology 101"
2. Create note: "Cell Structure"
3. Add h1, h2, lists, tables
4. Save note
5. Create more notes in same section
6. Search "mitochondria" to find across notes
```

### Workflow 2: Code Snippets

```
1. Create section: "Code Snippets"
2. Create note: "Useful React Patterns"
3. Add code blocks with explanations
4. Create note: "CSS Utilities"
5. Easy to find via search
```

### Workflow 3: Project Planning

```
1. Create section per project
2. Notes for: Requirements, Architecture, Tasks
3. Edit as project evolves
4. Search across all projects
```

---

## ❓ Troubleshooting

### Note not appearing in navigation?

- Refresh the page
- Check if "My Notes" dropdown is expanded
- Verify note was saved (check browser console)

### Lost a note?

- Use search to find it by title or content
- Check "Unsorted" section if you didn't assign one
- Notes are in IndexedDB - open DevTools → Application → IndexedDB

### Can't create a section?

- Make sure section name isn't empty
- Press Enter to confirm (not just typing)
- Escape key cancels section creation

### Search not finding my note?

- Check spelling in search query
- Try searching just part of the title
- Search is case-insensitive
- Wait a moment for async search to complete

---

## 🎓 Best Practices

### Do:

✅ Use descriptive note titles  
✅ Organize into logical sections  
✅ Save frequently while editing  
✅ Use search to find notes quickly  
✅ Edit section assignments as needs change

### Don't:

❌ Create too many sections (keep it manageable)  
❌ Use special characters in section names  
❌ Leave important notes in "Unsorted"  
❌ Forget to save before closing

---

## 🔗 Related Features

- **NoteBuilder**: Create and edit notes with rich elements
- **Drag & Drop**: Reorder elements in notes
- **Element Tree**: Nested structure support (tables, lists)
- **Inline Editing**: Click elements to edit text
- **Markdown Export**: Generate markdown from notes (coming soon)

---

## 📞 Need Help?

Check these resources:

- `CUSTOM_NOTES_NAVIGATION.md` - Full technical details
- `INDEXEDDB_IMPLEMENTATION.md` - Database architecture
- `PERSISTENCE_EXAMPLES.md` - Code examples
- Browser DevTools → Application → IndexedDB → notes-app

---

## 🎉 You're Ready!

Start creating, organizing, and searching your custom notes right away. The system works just like the built-in markdown notes, but with the power to create and edit your own content!

**Happy note-taking! 📝**
