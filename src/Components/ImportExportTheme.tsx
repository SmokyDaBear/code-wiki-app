type TImportExportThemeProps = {
  customColor: string[];
  setCustomColor: (colors: string[]) => void;
  applyCustomTheme: (colors: string[]) => void;
  saveCustomTheme: (colors: string[]) => void;
  requiredLength: number;
};
export function ImportExportTheme({
  customColor,
  setCustomColor,
  applyCustomTheme,
  saveCustomTheme,
  requiredLength,
}: TImportExportThemeProps) {
  const exportThemeToJSON = (e: React.MouseEvent) => {
    e.preventDefault();
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(customColor, null, 2));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "customTheme.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const importThemeFromJSON = (e: React.MouseEvent) => {
    e.preventDefault();
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".json,application/json";
    fileInput.onchange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        const file = target.files[0];
        const reader = new FileReader();
        reader.onload = (loadEvent) => {
          try {
            const result = loadEvent.target?.result;
            if (typeof result === "string") {
              const importedColors = JSON.parse(result) as string[];
              if (importedColors.length === requiredLength) {
                setCustomColor(importedColors);
                applyCustomTheme(importedColors);
                saveCustomTheme(importedColors);
              } else {
                alert("Invalid theme file: Incorrect number of colors.");
              }
            }
          } catch (error) {
            alert("Failed to import theme: " + (error as Error).message);
          }
        };
        reader.readAsText(file);
      }
    };
    fileInput.click();
  };

  return (
    <>
      <button className="selector-btn" onClick={exportThemeToJSON}>
        Export Theme
      </button>
      <button className="selector-btn" onClick={importThemeFromJSON}>
        Import Theme
      </button>
    </>
  );
}
