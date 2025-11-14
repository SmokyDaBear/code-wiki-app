import { useState } from "react";
import { applyTheme } from "../utils/userPreferences";
import "../styles/modals.css";

interface WelcomeModalProps {
  isOpen: boolean;
  onComplete: (preferences: {
    allowsStorage: boolean;
    username?: string;
    theme: "system" | "light" | "dark";
  }) => void;
}

export function WelcomeModal({ isOpen, onComplete }: WelcomeModalProps) {
  const [step, setStep] = useState<"storage" | "setup">("storage");
  const [allowsStorage, setAllowsStorage] = useState(false);
  const [username, setUsername] = useState("");
  const [selectedTheme, setSelectedTheme] = useState<
    "system" | "light" | "dark"
  >("system");

  if (!isOpen) return null;

  const handleStorageResponse = (allowed: boolean) => {
    setAllowsStorage(allowed);
    if (allowed) {
      setStep("setup");
    } else {
      // If they don't allow storage, skip setup and use defaults
      onComplete({
        allowsStorage: false,
        theme: "system",
      });
    }
  };

  const handleSetupComplete = () => {
    onComplete({
      allowsStorage,
      username: username.trim() || undefined,
      theme: selectedTheme,
    });
  };

  const handleSkipUsername = () => {
    setUsername("");
    handleSetupComplete();
  };

  const handleThemeSelection = (theme: "system" | "light" | "dark") => {
    setSelectedTheme(theme);
    // Apply theme immediately for live preview
    applyTheme(theme);
  };

  return (
    <div className="welcome-modal-overlay">
      <div className="welcome-modal">
        {step === "storage" ? (
          <>
            <div className="welcome-modal-header">
              <h2>Welcome to Programming Notes! 📚</h2>
            </div>

            <div className="welcome-modal-content">
              <p>
                To provide you with a personalized experience, we'd like to save
                your preferences and reading history locally on your device.
              </p>

              <div className="storage-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">🎨</span>
                  <span>Remember your theme preference</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">📖</span>
                  <span>Track your reading history</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">👤</span>
                  <span>Personalized welcome messages</span>
                </div>
              </div>

              <p className="storage-note">
                <strong>Your privacy matters:</strong> All data stays on your
                device. Nothing is sent to any servers.
              </p>
            </div>

            <div className="welcome-modal-actions">
              <button
                onClick={() => handleStorageResponse(false)}
                className="btn-secondary"
              >
                No Thanks
              </button>
              <button
                onClick={() => handleStorageResponse(true)}
                className="btn-primary"
              >
                Allow Local Storage
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="welcome-modal-header">
              <h2>Let's Personalize Your Experience ✨</h2>
            </div>

            <div className="welcome-modal-content">
              <div className="setup-section">
                <label htmlFor="username" className="setup-label">
                  What should we call you? (Optional)
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your name..."
                  className="setup-input"
                  maxLength={50}
                />
              </div>

              <div className="setup-section">
                <label className="setup-label">Choose your theme</label>
                <div className="theme-options">
                  <button
                    onClick={() => handleThemeSelection("system")}
                    className={`theme-option ${
                      selectedTheme === "system" ? "active" : ""
                    }`}
                  >
                    <span className="theme-icon">🖥️</span>
                    <div className="theme-info">
                      <div className="theme-name">System</div>
                      <div className="theme-desc">Match your device</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleThemeSelection("light")}
                    className={`theme-option ${
                      selectedTheme === "light" ? "active" : ""
                    }`}
                  >
                    <span className="theme-icon">☀️</span>
                    <div className="theme-info">
                      <div className="theme-name">Light</div>
                      <div className="theme-desc">Bright and clean</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleThemeSelection("dark")}
                    className={`theme-option ${
                      selectedTheme === "dark" ? "active" : ""
                    }`}
                  >
                    <span className="theme-icon">🌙</span>
                    <div className="theme-info">
                      <div className="theme-name">Dark</div>
                      <div className="theme-desc">Easy on the eyes</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="welcome-modal-actions">
              <button onClick={handleSkipUsername} className="btn-secondary">
                Skip Name
              </button>
              <button onClick={handleSetupComplete} className="btn-primary">
                Get Started
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
