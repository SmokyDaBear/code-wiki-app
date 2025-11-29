# Graphical User Interfaces (GUIs) in Java

Graphical User Interfaces (GUIs) allow users to interact with applications through graphical elements such as windows, buttons, text fields, and menus. In Java, GUIs can be created using libraries such as Swing and JavaFX.

## Swing

Swing is a part of Java's standard library and provides a set of components for building GUIs. Here's a simple example of creating a basic Swing application:

### Importing Swing Classes

```java
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
```

### JPanels and JFrames

A `JFrame` is the main window of a Swing application, while a `JPanel` is a container that can hold other components. Here's how to create a simple window with a button:

```java
public class SimpleSwingApp {
    public static void main(String[] args) {
        // Create a JFrame
        JFrame frame = new JFrame("Simple Swing Application");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(300, 200);

        // Create a JPanel
        JPanel panel = new JPanel();

        // Create a JButton
        JButton button = new JButton("Click Me!");

        // Add the button to the panel
        panel.add(button);

        // Add the panel to the frame
        frame.add(panel);

        // Make the frame visible
        frame.setVisible(true);
    }
}
```

#### Setting JFrame Properties

The JFrame has several properties you can set, including:

- Title: Set using the constructor or `setTitle()` method.
  - This sets the text displayed in the title bar of the window.
- Default Close Operation: Set using `setDefaultCloseOperation()`. Common options include `JFrame.EXIT_ON_CLOSE` to close the application when the window is closed.
- Size: Set using the `setSize(width, height)` method.
  - values are in pixels.
- Visibility: Set using the `setVisible(true)` method to display the window.
  - By default, a JFrame is not visible when created.
  - You can also set the frame to be visible or invisible at any time using this method.
- Layout: You can set a layout manager for the frame or panel to control the arrangement of components.
  - Common layout managers include `FlowLayout`, `BorderLayout`, and `GridLayout`.
- Resizability: You can control whether the user can resize the window using the `setResizable(boolean)` method.
  - By default, a JFrame is resizable.
- Location: You can set the initial position of the window on the screen using the `setLocation(x, y)` method.
- Icon Image: You can set a custom icon for the window using the `setIconImage(Image image)` method.
  - This icon appears in the title bar and taskbar, import `java.awt.Image` to use this feature.
- Always on Top: You can make the window stay on top of other windows using the `setAlwaysOnTop(boolean)` method.
  - You can make this adjustment based on user preferences in a settings menu.
- Opacity: You can set the opacity of the window using the `setOpacity(float opacity)` method (values between 0.0f and 1.0f).
  - This can be used to create transparent or semi-transparent windows for visual effects.
- Undecorated: You can create a window without the title bar and borders using the `setUndecorated(boolean)` method.
  - This is useful for splash screens or custom-shaped windows.
- State: You can set the initial state of the window (e.g., maximized, minimized) using the `setExtendedState(int state)` method.
  - Common states include `JFrame.NORMAL`, `JFrame.ICONIFIED`, and `JFrame.MAXIMIZED_BOTH`.
- Content Pane: You can access and modify the content pane of the JFrame using the `getContentPane()` method.
  - This allows you to add components directly to the content pane if needed.
- Background Color: You can set the background color of the JFrame or JPanel using the `setBackground(Color color)` method.
  - Import `java.awt.Color` to use this feature.
- Font: You can set the font for components within the JFrame or JPanel using the `setFont(Font font)` method.
  - Import `java.awt.Font` to use this feature.
- Look and Feel: You can change the overall appearance of the Swing components using the `UIManager.setLookAndFeel(String className)` method.
  - This allows you to apply different themes to your application, such as the system look and feel or custom themes.

These properties allow you to customize the appearance and behavior of your Swing application windows to suit your needs.
