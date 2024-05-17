# CS465-Full-Stack-I
CS 465 Full Stack Development with MEAN

<b>Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).</b>
<ul>
  <li>
At the beginning of the project, the starter code was a simple collection of HTML files and a css stylesheet. Node was used as the platform to set up the web server, allowing back end use of JavaScript, and Express was used to make the process of setting up the server simpler by listening to requests and returning responses. Express also makes it easier to direct a URL to a specific area of the code, and supports the use of templating engines. In this project, the Handlebars templating engine was used to simplify the HTML code with the use of partials and built-in/custom helpers. The Express HTML page had logic handled on the server with the client-side receiving UI code as HTML, CSS, and JS. A lot of information is passed back and forth between client and the server as the user interacts with the web page. This was the focus of the client-side site. For the admin SPA, Angular, Bootstrap, and TypeScript was used. This process was different because Angular applications are built with components that handle specific functionality, and they are compiled into modules that contain components that work together. The components are linked to services that make API calls, receive the responses, and pass the information back to the component. With the SPA, instead of back and forth communication, everything is delivered to the client on startup and handled on that side.
  </li>
</ul>
<br>

<b>Why did the backend use a NoSQL MongoDB database?</b>
<ul>
  <li>
MongoDB stores data as BSON, so it works well with JavaScript and its use of JSON. MongoDB also allows for secondary indexing and fast querying.
  </li>
</ul>
<br>

<b>How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?</b>
<ul>
  <li>
JSON is a data format that stores objects as kay/value pairs or as ordered lists. It resembles objects in JavaScript, but JavaScript is a programming language that can do much more than create objects; it makes use of functions and logic to bring richer functionality to web pages. JSON is good for sending data from the server to the web pages. This is how the front end and back end are tied together with JSON. For example, before the database was set up, the server controllers would read data from the JSON files and pass the data to the Handlebars view so that the data could be displayed on the page.
  </li>
</ul>
<br>

<b>Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.</b>
<ul>
  <li>
Code was continuously refactored as the project grew and new technologies were added into the project. The HTML pages were refactored into Handlebars views so that partials and helpers could be used, shortening the code and making it much more readable and easier to maintain. Server and API controllers needed to be refactored when the database was implemented, and API controllers and routes needed to be refactored to support security. After security was added, refactoring also needed to be done on the services in app_admin to include the web token in the request headers.
  </li>
</ul>
<br>

<b>Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.</b>
<ul>
  <li>
In this project all requests are made either from app_server or app_admin and are handled by app_api. The endpoints are the URLs used to access the service. The API uses methods to access the database and perform the CRUD operations, and security is added to these methods by first verifying the user before the actions can be performed. Testing was done first with Postman to check that access was denied without a valid user or web token, and granted with the right credentials. Testing was then done on the actual site.
  </li>
</ul>
<br>

