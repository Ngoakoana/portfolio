import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Prosthetic Design App',
      description: 'A custom prosthetic design solution aimed at improving accessibility and comfort for users.',
      link: 'https://github.com/your-repo/prosthetic-design-app'  // Add the link to your GitHub or live project
    },
    {
      name: 'Salary Management System',
      description: 'An SQL-based system for managing employee salaries, including deductions, bonuses, and reports.',
      link: 'https://github.com/your-repo/salary-management-system'  // Add the link to your GitHub or live project
    }
    // Add more projects here as needed
  ];
}
