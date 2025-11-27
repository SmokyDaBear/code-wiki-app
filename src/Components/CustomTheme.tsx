import { useEffect, useState } from "react";
import { applyCustomTheme, saveCustomTheme } from "../utils/customTheme";
import { resetCustomTheme } from "../utils/customTheme";
import "../styles/modals.css";

export function CustomTheme({ handleClose }: { handleClose: () => void }) {
  const [customColor, setCustomColor] = useState<string[]>([]);
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
  ];
  useEffect(() => {
    const root = document.documentElement;
    const attributeCodeNames = [
      "--bg-primary",
      "--bg-secondary",
      "--bg-tertiary",
      "--text-primary",
      "--text-secondary",
      "--text-muted",
      "--border-color",
      "--border-light",
      "--border-medium",
      "--accent-color",
      "--accent-hover",
      "--accent-dark",
      "--accent-light",
      "--accent-blue",
      "--accent-blue-dark",
      "--heading-primary",
      "--heading-secondary",
      "--heading-tertiary",
    ];
    const initialColors = attributeCodeNames.map((name) =>
      getComputedStyle(root).getPropertyValue(name).trim()
    );
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
              <input
                type="submit"
                value="Apply Theme"
                className="selector-btn"
              />
              <button
                type="button"
                onClick={resetCustomTheme}
                className="btn-danger"
              >
                Reset to Default
              </button>
            </div>
            <br />
          </form>
          <br />
        </div>
      </div>
    </>
  );
}
