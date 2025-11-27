# Multimedia Elements

HTML provides several elements to embed multimedia content such as images, audio, and video into web pages. Here are the primary multimedia elements:

1. **Image Element (`<img>`)**: The `<img>` element is used to embed images in an HTML document. It is a self-closing tag and requires the `src` attribute to specify the image source and the `alt` attribute for alternative text.

   ```html
   <img src="path/to/image.jpg" alt="Description of the image" />
   ```

2. **Audio Element (`<audio>`)**: The `<audio>` element is used to embed audio content. It can contain one or more `<source>` elements to specify different audio formats for better browser compatibility. The `controls` attribute adds playback controls.

   ```html
   <audio controls>
     <source src="path/to/audio.mp3" type="audio/mpeg" />
     <source src="path/to/audio.ogg" type="audio/ogg" />
   </audio>
   ```

3. **Video Element (`<video>`)**: The `<video>` element is used to embed video content. Similar to the `<audio>` element, it can contain multiple `<source>` elements and the `controls` attribute for playback controls.

   ```html
   <video width="640" height="360" controls>
     <source src="path/to/video.mp4" type="video/mp4" />
     <source src="path/to/video.webm" type="video/webm" />
   </video>
   ```

4. **Figure and Figcaption Elements (`<figure>` and `<figcaption>`)**: The `<figure>` element is used to group media content (like images, audio, or video) along with a caption provided by the `<figcaption>` element.

   ```html
   <figure>
     <img src="path/to/image.jpg" alt="Description of the image" />
     <figcaption>This is a caption for the image.</figcaption>
   </figure>
   ```

## Attributes

Multimedia elements support various attributes to enhance functionality:

- `autoplay`: Automatically starts playing the media when the page loads (for `<audio>` and `<video>`).
- `loop`: Repeats the media playback indefinitely (for `<audio>` and `<video>`).
- `muted`: Mutes the audio of the media (for `<audio>` and `<video>`).
- `poster`: Specifies an image to be shown while the video is downloading or until the user hits the play button (for `<video>`).
- `width` and `height`: Define the dimensions of the media element (for `<video>` and `<img>`).
- `preload`: Specifies if and how the media should be loaded when the page loads (for `<audio>` and `<video>`).
- `src`: Specifies the URL of the media file (for `<img>`, `<audio>`, and `<video>`).
