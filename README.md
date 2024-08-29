GSAP (GreenSock Animation Platform) is a powerful JavaScript library for creating high-performance animations. It’s widely used for animating HTML, CSS, SVG, and more, and is known for its speed, flexibility, and ease of use. GSAP is particularly popular in web development for creating rich, interactive user experiences.

### Key Features of GSAP:
- **Performance:** GSAP is optimized for speed, making it capable of handling complex animations with minimal impact on performance.
- **Ease of Use:** GSAP has a straightforward API that simplifies the process of creating animations.
- **Cross-Browser Compatibility:** GSAP works consistently across all modern browsers.
- **Rich Set of Features:** It offers a variety of tools like timelines, easing, and the ability to animate almost any property of any object.

### Basic Usage

#### 1. **Including GSAP:**
   You can include GSAP via a CDN or by installing it using npm.

   **Via CDN:**
   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
   ```

   **Via npm:**
   ```bash
   npm install gsap
   ```

   Then, in your JavaScript:
   ```javascript
   import gsap from "gsap";
   ```

#### 2. **Creating a Simple Animation:**
   Here’s how you can animate an element using GSAP:

   ```javascript
   gsap.to(".box", { duration: 1, x: 100, y: 50, rotation: 360 });
   ```

   - `.to` method: Moves the element from its current state to the specified state.
   - `duration`: The time (in seconds) the animation takes.
   - `x` and `y`: Move the element horizontally and vertically.
   - `rotation`: Rotates the element by the specified degrees.

#### 3. **Using Timelines:**
   GSAP’s `Timeline` allows you to sequence animations easily.

   ```javascript
   const tl = gsap.timeline();

   tl.to(".box", { duration: 1, x: 100 })
     .to(".box", { duration: 1, y: 50 })
     .to(".box", { duration: 1, rotation: 360 });
   ```

   - **Sequential Animations:** The above code animates the element sequentially: first, it moves right, then down, and finally rotates.
   - **Overlap Animations:** You can overlap animations by adding a negative delay:

   ```javascript
   tl.to(".box", { duration: 1, x: 100 })
     .to(".box", { duration: 1, y: 50 }, "-=0.5");
   ```

   This overlaps the second animation with the first one by 0.5 seconds.

#### 4. **Easing:**
   Easing controls the rate of change in the animation, making it start slow, end fast, etc.

   ```javascript
   gsap.to(".box", { duration: 1, x: 100, ease: "bounce.out" });
   ```

   - **Common Easing Options:**
     - `power1`, `power2`, `power3`, `power4`
     - `elastic`
     - `bounce`
     - `back`
     - `circ`

   These easing functions can be used with `.in`, `.out`, or `.inOut` to control the animation flow.

#### 5. **Animating CSS Properties:**
   GSAP can animate CSS properties like opacity, scale, color, etc.

   ```javascript
   gsap.to(".box", { duration: 1, opacity: 0.5, scale: 1.5 });
   ```

#### 6. **Animating SVG:**
   GSAP works well with SVG, allowing you to animate stroke, path, and more.

   ```javascript
   gsap.to("#svg-path", { duration: 2, strokeDashoffset: 0 });
   ```

#### 7. **ScrollTrigger:**
   GSAP’s `ScrollTrigger` plugin allows you to trigger animations based on scroll position.

   ```javascript
   gsap.registerPlugin(ScrollTrigger);

   gsap.to(".box", {
     scrollTrigger: ".box", // Trigger animation when .box comes into view
     x: 500,
     duration: 3
   });
   ```

   `ScrollTrigger` is incredibly powerful for creating scroll-based animations.

### Advanced Features

- **Staggering Animations:**
  ```javascript
  gsap.to(".box", { duration: 1, x: 100, stagger: 0.2 });
  ```
  Staggering allows you to delay the start of each animation in a group by a specified amount.

- **Keyframes:**
  ```javascript
  gsap.to(".box", {
    keyframes: [
      { x: 100 },
      { y: 50 },
      { rotation: 360 }
    ],
    duration: 2
  });
  ```
  Keyframes let you define multiple states that an element will pass through during an animation.

- **Plugins:**
  GSAP offers a variety of plugins (e.g., `ScrollTrigger`, `Draggable`, `MorphSVG`) that extend its capabilities even further.

### Conclusion

GSAP is a versatile and powerful library for creating animations on the web. Whether you need simple animations or complex interactive experiences, GSAP provides the tools and performance to bring your designs to life. The community support and extensive documentation make it an excellent choice for both beginners and advanced developers.

Complete Document : https://gsap.com/docs/v3/GSAP/

Youtube playlist : https://www.youtube.com/watch?v=9C03V1dXxOU&list=PLbtI3_MArDOnIIJxB6xFtpnhM0wTwz0x6
