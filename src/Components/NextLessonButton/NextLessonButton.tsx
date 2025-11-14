import { getNextLesson } from "../../data/notes";
import "./NextLessonButton.css";

interface NextLessonButtonProps {
  currentFilename: string;
  onLoadNote: (filename: string) => void;
}

export function NextLessonButton({
  currentFilename,
  onLoadNote,
}: NextLessonButtonProps) {
  const nextLesson = getNextLesson(currentFilename);

  if (!nextLesson) {
    return null; // Don't render if no next lesson
  }

  const handleClick = () => {
    onLoadNote(nextLesson.filename);
  };

  return (
    <div className="next-lesson-container">
      <button
        className="next-lesson-button"
        onClick={handleClick}
        aria-label={`Go to next lesson: ${nextLesson.title}`}
      >
        <div className="next-lesson-content">
          <span className="next-lesson-label">Up Next</span>
          <span className="next-lesson-title">{nextLesson.title}</span>
          <span className="next-lesson-arrow">→</span>
        </div>
      </button>
    </div>
  );
}
