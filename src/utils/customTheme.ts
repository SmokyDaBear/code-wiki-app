export function loadCustomTheme() {
  const customTheme = localStorage.getItem("customTheme");
  if (customTheme) {
    const customColor = JSON.parse(customTheme) as string[];
    applyCustomTheme(customColor);
  }
}

export function applyCustomTheme(customColor: string[]) {
  const root = document.documentElement;
  root.style.setProperty("--bg-primary", customColor[0]);
  root.style.setProperty("--bg-secondary", customColor[1]);
  root.style.setProperty("--bg-tertiary", customColor[2]);
  root.style.setProperty("--text-primary", customColor[3]);
  root.style.setProperty("--text-secondary", customColor[4]);
  root.style.setProperty("--text-muted", customColor[5]);
  root.style.setProperty("--border-color", customColor[6]);
  root.style.setProperty("--border-light", customColor[7]);
  root.style.setProperty("--border-medium", customColor[8]);
  root.style.setProperty("--accent-color", customColor[9]);
  root.style.setProperty("--accent-hover", customColor[10]);
  root.style.setProperty("--accent-dark", customColor[11]);
  root.style.setProperty("--accent-light", customColor[12]);
  root.style.setProperty("--accent-blue", customColor[13]);
  root.style.setProperty("--accent-blue-dark", customColor[14]);
  root.style.setProperty("--heading-primary", customColor[15]);
  root.style.setProperty("--heading-secondary", customColor[16]);
  root.style.setProperty("--heading-tertiary", customColor[17]);
}

export const resetCustomTheme = () => {
  localStorage.removeItem("customTheme");
  window.location.reload();
};

export const saveCustomTheme = (customColor: string[]) => {
  localStorage.setItem("customTheme", JSON.stringify(customColor));
};
