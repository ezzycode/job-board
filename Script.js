//script.js

const jobs= [ 
    {      
     title:"Frontend Dev",
     company:"CreativeCoders inc.",
     location:"Nevada, USA",
     logo:"https://via.placeholder.com/80x80.png?text=CC",
     url:"https://unsplash.com/photos/a-colorful-wooden-toy-on-a-blue-background-a8NP2AwGZKs"
    },
    { 
        title:"Backend Dev",    
        company:"Berrylium Build Initiative",
        location:"Remote",
        logo:"https://via.placeholder.com/80x8.png?text=SL"
        url="https://unsplash.com/photos/a-colorful-wooden-toy-on-a-blue-background-a8NP2AwGZKs"
    },
    {
        title:"UI/UX Designer",
        company:"QUICKOnnect",
        location:"Nevada,USA", 
        logo:"https://via.placeholder.com/80x8.png?text=DL"
        url="https://unsplash.com/photos/a-colorful-wooden-toy-on-a-blue-background-a8NP2AwGZKs"
    },
    {
        title:"DevOps Specialist",
        company:"CloudWave",
        location:"Remote",
        logo:"https://via.placeholder.com/80x8.png?text=DL"
        url="https://unsplash.com/photos/a-colorful-wooden-toy-on-a-blue-background-a8NP2AwGZKs"
    },
    {
        title:"Data Analyst",
        company:"DataDriven",
        location:"Remote",
        logo:"https://via.placeholder.com/80x8.png?text=DL"
        url="https://unsplash.com/photos/a-colorful-wooden-toy-on-a-blue-background-a8NP2AwGZKs"
    } 
];

const jobListing=document.getElementById("jobListings"); 
const searchInput=document.getElementById("searchInput");

function displayJobs(filterredJobs) {
    jobListings.innerHTML ="";

    if(filterredJobs.length===0){
        jobListings.innerHTML="<p>No jobs found</p>";
        return;
    } 
     filterredJobs.forEach(job => {
        const jobCard =document.createElement("div");
        jobCard.classList.add("job-card");

        jobCard.innerHTML= '
        <img src="${job.logo}" alt="${job.company} logo" class="company-logo">
        <h3>${job.title}</h3>
        <p class="company">${job.company}</p>
        <p class="location">${job.location}</p>
        <a href=${job.url}" target="blank"><button class="apply-button">Apply Now</button></a>
        ';

        Joblistings.appendChild(jobCard);
     });
}

searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredJobs = jobs.filter(job => 
        job.title.toLowerCase().includes(searchTerm) ||
        job.company.toLowerCase().includes(searchTerm) ||
        job.location.toLowerCase().includes(searchTerm)
    );
    displayJobs(filteredJobs);
});     

window.onload = () => displayJobs(jobs);
// Initial display of all jobs
