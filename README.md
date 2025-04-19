<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Collaborative Whiteboard</title>
</head>
<body>

    <h1>Collaborative Whiteboard</h1>
    <p>A real-time collaborative whiteboard web application built using HTML, CSS, and JavaScript. The application allows multiple users to draw, write, and collaborate on a virtual whiteboard in real time. It features real-time updates, various drawing tools, and a simple, user-friendly interface.</p>

    <h2>Features</h2>
    <ul>
        <li><strong>Real-time Collaboration</strong>: Multiple users can draw on the whiteboard simultaneously.</li>
        <li><strong>Drawing Tools</strong>: Users can choose from different drawing tools like pen, eraser, and color options.</li>
        <li><strong>User-Friendly Interface</strong>: Clean, minimal design with intuitive controls for easy interaction.</li>
        <li><strong>Resizable Canvas</strong>: The whiteboard automatically adjusts to fit different screen sizes.</li>
        <li><strong>Cross-Browser Support</strong>: Works across modern browsers like Chrome, Firefox, and Edge.</li>
    </ul>

    <h2>Technologies Used</h2>
    <ul>
        <li><strong>Frontend</strong>: HTML, CSS, JavaScript</li>
        <li><strong>Real-Time Communication</strong>: WebSockets (for real-time drawing synchronization)</li>
        <li><strong>Libraries</strong>: <a href="https://socket.io/" target="_blank">Socket.io</a> (for handling real-time connections)</li>
    </ul>

    <h2>Installation</h2>
    <p>To run the project locally, follow these steps:</p>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/yourusername/whiteboard.git</code></pre>
        </li>
        <li>Navigate to the project directory:
            <pre><code>cd whiteboard</code></pre>
        </li>
        <li>Open <code>index.html</code> in your web browser.</li>
    </ol>

    <h2>Usage</h2>
    <p>1. Open the web app in your browser.</p>
    <p>2. Users can start drawing by selecting tools like pen and eraser.</p>
    <p>3. Changes made on one user’s whiteboard are immediately reflected on other users’ screens.</p>

    <h2>Contributing</h2>
    <p>Feel free to fork the repository and submit pull requests for any improvements or bug fixes.</p>
    <ol>
        <li>Fork the repository.</li>
        <li>Create a new branch (<code>git checkout -b feature/your-feature</code>).</li>
        <li>Commit your changes (<code>git commit -am 'Add new feature'</code>).</li>
        <li>Push to the branch (<code>git push origin feature/your-feature</code>).</li>
        <li>Create a new Pull Request.</li>
    </ol>

    <h2>License</h2>
    <p>This project is licensed under the MIT License - see the <a href="LICENSE" target="_blank">LICENSE</a> file for details.</p>

</body>
</html>
