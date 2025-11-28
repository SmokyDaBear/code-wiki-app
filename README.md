# Code Wiki App

This app can be used to store and mangage notes on anything, although I use it for organizing programming notes.

I built it as a project to help me study and keep track of programming concepts and languages I learn, as well as a way to practice my React and TypeScript skills.

I wrote the notes in markdown format, because initially I just kept notes on my local machine, and then I thought, "Hey, why not make an app to organize these notes?".

So I added features like searching, and navigation to make it easier to find and access notes.

I also added theming options to customize the look and feel of the app, because why not have a red background with green text if you want to? Reminds me of old-school terminal vibes, or myspace.

**Disclaimer**: Some of my notes may contain inaccuracies or outdated information, as they were written for personal reference and may not have been thoroughly vetted. Also, some notes were copied from online resources for my own learning purposes. Please verify any critical information from reliable sources.

## Features

- Note organization with tags
- Static Markdown loading
  - Tables, headings, code blocks, links, images, and more
- Fast navigation between notes
  - All notes are loaded at build time for instant access
  - No network requests needed to load notes
- Syntax highlighting for code blocks
- Customizable themes
  - Light and dark mode, and also custom themes, which can be exported and imported in json format
  - Custom themes are saved in local storage of the browser
- Search functionality
  - Search notes by title or content
  - Ranks search results by relevance
- Saved history of visited notes
- Responsive design for mobile and desktop

## How it works

This app is built using React, so it runs entirely in the browser. All data is stored in the browser's local storage, so no backend server is needed. This means that your notes are private and only accessible on the device you create them on.

### Installation and Setup

1. Clone the repository to your local machine.
2. Run `npm install` to install the dependencies.
3. Run `npm run dev` to start the development server.
4. Open your browser and navigate to `http://localhost:3000` or whatever port the development server is running on to use the app.

### Adding Notes and Sections

The app structures notes into sections, which are actually just folders. You can create sections to organize your notes by topic or category. Within each section, you can create individual notes in markdown format.

If you want to add a new section, simply create a folder, and add some notes, and they will automatically appear in the app on the left sidebar, or with the hamburger menu on mobile.

### Adding Icons/Images/Emojis to Sections

To add a custom icon to a section, add the image inside of the `/assets/code-icons/` folder.

Then, open the `data/sectionsIndex.ts` file, and import the image at the top of the file.

```ts
import yourIconName from "../assets/code-icons/your-icon-file.png";
```

Finally, add the imported image to the `NoteSections` array in the same file like this:

- the key should be the same as the folder name of your section
- the `name` property is the display name of the section
- the `icon` property is the imported image variable

```ts
export const NoteSections = {
  sql: { name: "SQL", icon: CodeLogos.sql },
  html: { name: "HTML", icon: CodeLogos.html },
  css: { name: "CSS", icon: CodeLogos.css },
  javascript: { name: "JavaScript", icon: CodeLogos.javascript },
  typescript: { name: "TypeScript", icon: CodeLogos.typescript },
  git: { name: "Git", icon: CodeLogos.git },
  c: { name: "C", icon: CodeLogos.c },
  cpp: { name: "C++", icon: CodeLogos.cpp },
  react: { name: "React", icon: CodeLogos.react },
  java: { name: "Java", icon: CodeLogos.java },
  "computer-science": { name: "Computer Science", emojiIcon: "💻" },
  //Your new section goes here:
  newsection: { name: "New Section", icon: yourIconName },
} as const;
```

You can alternatively use an emoji icon by adding the `emojiIcon` property instead of the `icon` property, and set it to a string containing the emoji you want to use.

#### I added a new section, but it is not showing up in the app. What do I do?

Make sure that the folder containing your new section is located inside of the `src/notes/` directory. The app only scans for notes inside of this directory, so if your new section folder is outside of it, it will not be detected.

### Adding an image to a note

To add an image to a note, place the image file inside of the `public/images/note-images/` folder.

#### NOTE: You must place the image in the `public/` folder, because Vite only serves static assets from there, if you put it in the source folder, it will work in development, but will break in production builds like if you run `npm run build` or host it somewhere.

Then, in your markdown note, you can reference the image using the following syntax:

```markdown
![Alt text](/images/note-images/your-image-file.png)
```

or you can use HTML syntax:

```html
<img src="/images/note-images/your-image-file.png" alt="Alt text" />
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── notes/
│   └── sectionname/      # Name the folder for each section
│       └── *.md          # Individual markdown notes
├── data/
│   ├── notes.ts          # Notes configuration and loader
│   └── data.ts           # Navigation links
├── Components/
│   ├── LeftNav.tsx       # Navigation sidebar
│   └── SpinLoader.tsx    # Loading spinner
└── App.tsx               # Main application
```

## How It Works

The app uses Vite's static import capabilities to load all markdown files at build time:

1. **Build Time**: Vite's `import.meta.glob()` finds all `.md` files in `src/notes/sectionname/`
2. **Runtime**: Notes are instantly available without network requests
3. **Navigation**: Internal markdown links are intercepted and handled by React Router-like navigation
4. **Rendering**: React Markdown renders content with table support and syntax highlighting

## TODOS:

- [ ] Add ability to create, edit, and delete notes from within the app
- [ ] Add custom font options
- [ ] Add ability to sync notes across devices (probably using Supabase, but then we have auth and users etc.)
- [ ] Add ability to backup and restore notes
  - Something like when you delete a file and it goes to the recycle bin/trash first, then you can permanently delete it later
- [ ] Add ability to favorite/star notes for quick access
