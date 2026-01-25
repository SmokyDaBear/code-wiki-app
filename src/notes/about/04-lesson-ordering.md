# Lesson Ordering System

This app now uses a **numbered filename system** for automatic lesson ordering! 📚

## 🔢 How It Works

### Filename Format:

```
XX-lesson-name.md
```

- `XX` = Two-digit number (00, 01, 02, etc.)
- `lesson-name` = Descriptive filename
- Numbers are **hidden from users** in the interface

### Example Structure:

```
sql/
├── 00-sql-index.md          → "SQL Index" (displayed)
├── 01-get-started.md        → "Get Started" (displayed)
├── 02-setting-up.md         → "Setting Up" (displayed)
└── 03-data-types.md         → "Data Types" (displayed)
```

## ✅ Benefits

1. **Automatic Ordering**: Files sort naturally by filesystem
2. **Easy Reordering**: Just rename the number prefix
3. **Clean UI**: Numbers are hidden from users
4. **Self-Documenting**: File structure shows lesson order
5. **Future-Proof**: Easy to insert lessons between existing ones

## 🛠️ Reordering Lessons

To reorder lessons, simply rename the files:

```bash
# To insert a new lesson between 01 and 02:
mv 02-setting-up.md 03-setting-up.md
mv 03-data-types.md 04-data-types.md
# Then create: 02-new-lesson.md
```

## 📝 Current Structure

### HTML Section:

- `00-html-index.md` - HTML Overview
- `01-get-started-with-html.md` - Getting Started
- `02-classes-ids-and-data-attributes.md` - Classes & IDs
- `03-html-three.md` - Advanced HTML

### CSS Section:

- `01-get-started-with-css.md` - CSS Basics
- `02-basics.md` - CSS Fundamentals
- `03-positioning.md` - CSS Positioning
- `04-flexbox-basics.md` - CSS Flexbox

### SQL Section:

- `00-sql-index.md` - SQL Overview
- `01-get-started.md` - Getting Started
- `02-setting-up.md` - Environment Setup
- `03-data-types.md` - Data Types
- `04-tables.md` - Working with Tables
- `05-constraints.md` - SQL Constraints
- `06-manipulating-data.md` - Basic Data Operations
- `07-advanced-manipulating-data.md` - Advanced Operations

## 🎯 Implementation Details

The system automatically:

- **Sorts lessons** by number prefix in navigation
- **Hides numbers** from user-facing displays
- **Maintains URLs** for shareable links
- **Handles legacy references** through normalization

## 🚀 Adding New Lessons

1. **Choose the right number** (consider future insertions)
2. **Follow naming convention**: `XX-descriptive-name.md`
3. **Update internal links** if needed
4. **Test the ordering** in the navigation

The app will automatically display lessons in the correct order! 🎉
