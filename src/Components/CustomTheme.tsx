import { useEffect, useState } from "react";
import {
  applyCustomTheme,
  getAppliedTheme,
  saveCustomTheme,
} from "../utils/customTheme";
import { resetCustomTheme } from "../utils/customTheme";
import "../styles/modals.css";
import { ImportExportTheme } from "./ImportExportTheme";

export function CustomTheme({ handleClose }: { handleClose: () => void }) {
  const [customColor, setCustomColor] = useState<string[]>([]);
  const [showDownload, setShowDownload] = useState(false);
  const attributeNames = [
    "Background Primary",
    "Background Secondary",
    "Background Tertiary",
    "Text Primary",
    "Text Secondary",
    "Text Muted",
    "Border Color",
    "Border Light",
    "Border Medium",
    "Accent Color",
    "Accent Hover",
    "Accent Dark",
    "Accent Light",
    "Accent Secondary",
    "Accent Secondary Dark",
    "Heading Primary",
    "Heading Secondary",
    "Heading Tertiary",
    "Code Background",
    "Code Text",
  ];
  useEffect(() => {
    const initialColors = getAppliedTheme();
    setCustomColor(initialColors);
  }, [setCustomColor]);

  return (
    <>
      <div className="modal-overlay" onClick={handleClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <span className="modal-close" onClick={handleClose}>
            X
          </span>
          <h2>Customize Theme Colors</h2>
          <form
            className="color-inputs"
            onSubmit={(e) => {
              e.preventDefault();
              applyCustomTheme(customColor);
              saveCustomTheme(customColor);
            }}
          >
            <div className="custom-color-btns-grid">
              {customColor.map((color, index) => (
                <div key={index} className="custom-color-btn">
                  <label>{attributeNames[index]}:</label>
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => {
                      const newColors = [...customColor];
                      newColors[index] = e.target.value;
                      setCustomColor(newColors);
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="selector-btns">
              <button
                type="button"
                onClick={resetCustomTheme}
                className="btn-danger"
              >
                Reset to Default
              </button>
              <input
                type="submit"
                value="Apply Theme"
                className="selector-btn"
              />
              <button
                type="button"
                onClick={() => setShowDownload(!showDownload)}
                className="selector-btn"
              >
                Import/Export Theme
              </button>
              {showDownload && (
                <>
                  <ImportExportTheme
                    customColor={customColor}
                    setCustomColor={setCustomColor}
                    applyCustomTheme={applyCustomTheme}
                    saveCustomTheme={saveCustomTheme}
                    requiredLength={attributeNames.length}
                  />
                  <br />
                  <br />
                </>
              )}
            </div>
            <br />
          </form>
          <br />
        </div>
      </div>
    </>
  );
}
