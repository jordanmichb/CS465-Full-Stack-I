# CS465-Full-Stack-I
CS 465 Full Stack Development with MEAN

<b>Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).</b>
<ul>
  <li>
At the beginning of the project, the starter code was a simple collection of HTML files and a css stylesheet. Node was used as the platform to set up the web server, allowing back end use of JavaScript, and Express was used to make the process of setting up the server simpler by listening to requests and returning responses. Express also makes it easier to direct a URL to a specific area of the code, and supports the use of templating engines. In this project, the Handlebars templating engine was used to simplify the HTML code with the use of partials and built-in/custom helpers. The Express HTML page had logic handled on the server with the client-side receiving UI code as HTML, CSS, and JS. A lot of information is passed back and forth between client and the server as the user interacts with the web page. This was the focus of the client-side site. For the admin SPA, Angular, Bootstrap, and TypeScript was used. This process was different because Angular applications are built with components that handle specific functionality, and they are compiled into modules that contain components that work together. The components are linked to services that make API calls, receive the responses, and pass the information back to the component. With the SPA, instead of back and forth communication, everything is delivered to the client on startup and handled on that side.
  </li>
</ul>
