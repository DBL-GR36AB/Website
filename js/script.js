var tour = new Tour({
    storage : false
});

tour.addSteps([
    {
    element: ".tour-step.tour-step-one",
    placement: "top",
    title: "Welcome",
    content: "Welcome to the tour of the Cloud36-viualization website. In this tour we will go over all the features of our website.",//
    backdrop: false
    },
    {
    element: ".tour-step.tour-step-two", 
    placement: "bottom",
    title: "navbar",
    content: "Here you can click on 'HOME', 'ABOUT' or 'VIDEO' to go to that section on the website.",
    backdrop: true
    },
    {
    element: ".tour-step.tour-step-three",
    placement: "top",
    title: "viuslization",
    content: "This button will lead you to the page on which our app with the viusalizations is.",
    backdrop: true
    },
    {
    element: ".tour-step.tour-step-four",
    placement: "top",
    title: "About us",
    content: "In this section you are able to see the team. Make sure to scroll left/right to see all the teammembers.",
    backdrop: true
    },
    {
    element: ".tour-step.tour-step-five",
    placement: "top",
    title: "video",
    content: "This is our video presentation.",
    backdrop: true
    },
    {
    element: ".tour-step.tour-step-six",
    placement: "top",
    title: "End of the tour",
    content: "Thanks for taking the tour of our website.",//
    backdrop: false
    },
]);

// Initialize the tour
tour.init();

//(re)start tour
$('.tour_button').click(function() {
    // Start the tour
    tour.start();
    tour.restart();
});