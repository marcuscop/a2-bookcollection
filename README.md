Assignment 2 - Short Stack: Basic Two-tier Web Application using HTML/CSS/JS and Node.js  
===

This assignment aims to introduce you to the concepts and practice involved in creating a prototype (i.e. not deployment ready) two-tiered web application.

The baseline aims of this assignment involve creating an application that demonstrates the use of several specific pieces of HTML, CSS, JavaScript, and Node.js functionality.
Another aim of this assignment is to establish creative boundaries in which you and your team can explore designing, implementing, and evaluating usable, useful, novel, and technically efficient web applications.

Baseline Requirements
---

Note that there is a very large range of application areas and possibilities that meet these baseline requirements.
Games, internet of things, organizational tools, commerce, media- all are possibilities with a two-tiered form-focused web application.

Do not limit yourselves to any of the examples given below. 
Examples like the upcoming `efficiency_ratio` idea for the `cars` dataset are meant to be illustrative and easy to understand.
They are not intended to be sensible or useful ideas.

Your application is required to implement the following functionalities:

- a `Server` which not only serves files, but also maintains a tabular dataset with 3 or more fields related to your application
- a `Results` functionality which shows the entire dataset residing in the server's memory
- a `Form/Entry` functionality which allows a user to add, modify, or delete data items residing in the server's memory
- a `Server Logic` which, upon receiving new or modified "incoming" data, includes and uses a function that adds at least one additional derived field to this incoming data before integrating it with the existing dataset
    - the `Derived field` for a new row of data must be computed based on fields already existing in the row. For example, a `cars` dataset with `year`, `horsepower`, and `fuel_efficiency` may create a new field `efficiency_ratio` by dividing `fuel_efficiency` by `horsepower`

Your application is required to demonstrate the use of the following concepts:

HTML:
- One or more [HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms), with any combination of form tags appropriate for the user input portion of the application
    - Clarification: the results page can be implemented in any way. `<div>`s, `table`s, and `list`s are common choices

CSS:
- CSS styling of the primary visual elements in the application
- Various CSS Selector functionality must be demonstrated:
    - Element selectors
    - ID selectors
    - Class selectors
    - Pesudo-class selectors
- CSS positioning and sizing of the primary visual elements in the application:
    - CSS to cause at least one element to be horizontally centered on the page
    - CSS to cause at least one pair of elements to appear side-by-side
    - CSS defined in a maintainable, readable form
        - Clarification: this does not necessarily mean that you must use external sheets, even though external sheets is a common approach for achieving readbility and maintainability

JavaScript:
- Front-end JavaScript is *not* required for this project, but it is an option available to you

Node.js:
- An HTTP Server that delivers all necessary files and data for the application

Teams Info
---

We will be creating a spreadsheet where you can specify your team name.

Only one person needs to submit a Pull Request to submit the assignment.

Expect to be asked to provide feedback on the assignment process and team in a post-project reflection activity.

Deliverables
---

Do the following to complete this assignment:

1. Fork the starting project code. This repo contains some starter code that may be used or discarded as needed.
2. Implement your project with the above requirements.
3. Test your project to make sure that when someone goes to your main page, it displays correctly.
4. Deploy your project to Heroku.
5. Ensure that your project has the proper naming scheme `a1-yourTeamName` so we can find it.
6. Modify the Readme to the specifications below.
7. Create and submit a Pull Request to the original repo.

Sample Readme (delete the above when you're ready to submit, and modify the below so with your links and descriptions)
---

## Your Web Application Title
Include a very brief summary of your project here.
Images are encouraged, along with concise, high-level text.

Here is a sample formula for summarizing your activities, talk about:
- the domain area the project pertains to
- the main challenges or problems the application addresses
- the key innovations that make it possible to address the problem
- the main results of the implementation, does it really address the problem?
- any additional implications of the resulting application, or possibly areas for future work that have been discovered as part of the design and implementation activities

(Note that when I use the above formula, I aim to have only one sentence per thought in order to remain concise.)

## Team and Team Members
Team Seltzer
http://teamseltzer-a2.herokuapp.com

Lane Harrison  
Hane Larrison

## Technical Achievements
- **Tech Achievement 1**: Using a combination of...
- **Tech Achievement 2**: ...

### Design/Evaluation Achievements
- **Design Achievement 1**: Shown in `style.css`, the code...
- **Design Achievement 2**: We tested the application with n=X users, finding that...

### Team Coordination Activities

In this section, document any learning and design activities you complete as a group.

The main responsibility of every team is to ensure that all members would be comfortable implementing the basic functionalities and requirements defined in this document **on their own**. 

This may mean that you allocate less time for features, and more time for team collaboration and learning activities.
Once a team-wide baseline understanding is achieved, team-members are encouraged to use their interests and skillsets to pursue technical and design achievements that enhance the web application's functionality and design.
