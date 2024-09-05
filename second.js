document.addEventListener('DOMContentLoaded', function () {
    const jobs = [
      {
        title: 'Frontend Developer',
        company: 'Tech Co.',
        location: 'Remote',
        description: 'Build beautiful web applications with modern frontend frameworks.'
      },
      {
        title: 'Backend Developer',
        company: 'Cloud Solutions',
        location: 'New York, NY',
        description: 'Design and implement server-side logic for scalable applications.'
      },
      {
        title: 'Product Manager',
        company: 'StartUp Inc.',
        location: 'San Francisco, CA',
        description: 'Manage product development and collaborate with cross-functional teams.'
      }
    ];
  
    const jobListings = document.getElementById('job-listings');
    const searchBar = document.getElementById('search-bar');
  
    // Function to display job cards
    function displayJobs(jobs) {
      jobListings.innerHTML = '';  // Clear previous jobs
      jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        jobCard.innerHTML = `
          <h3>${job.title}</h3>
          <p>${job.company} - ${job.location}</p>
          <p>${job.description}</p>
        `;
        jobListings.appendChild(jobCard);
      });
    }
  
    // Initial job display
    displayJobs(jobs);
  
    // Search functionality
    searchBar.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm) ||
        job.company.toLowerCase().includes(searchTerm) ||
        job.location.toLowerCase().includes(searchTerm)
      );
      displayJobs(filteredJobs);
    });
  });
  