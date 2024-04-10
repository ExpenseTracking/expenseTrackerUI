import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {
  tiles = [
    { text: 'Hey there, I\'m Mark, a senior studying Computer Science at MTSU. I joined Plutus 2 years ago as a full stack developer and it\'s the best decision I\'ve ever made. I deal with Angular, C#/.NET, and Microsoft SQL Server, ensuring seamless integration across front-end, back-end, and database operations. Besides the technical stuff, I enjoy spending time with friends and staying active.', image: '/assets/Images/markPicture.png' },
    { text: 'Hello my name is Elijah Borel. I am from Nashville, TN and have lived here my whole life. I am a Computer Science major at MTSU and  graduate in the fall of 2024. I plan on working in software development once I graduate, and look forward to working on building future projects. I became a member of Plutus Solutions in the spring of 2024 and have worked on building this application with my teammates.', image: '/assets/Images/elijahPic.jpg' },
    { text: 'Hello, I\'m Anees Alawmleh from Smyrna, TN. I\'m passionate about computer science and currently studying at Middle Tennessee State University (MTSU). I\'ve been working at Plutus for 6 months now and love it. I enjoy working on web development projects and exploring new technologies. In my free time, I enjoy coding, reading books, and spending time with friends and family.', image: '/assets/Images/aneesPicture.png' },
    { text: 'Hi, I\'m Xokthavy Vongsiharath and I work as a software developer here at Plutus Solutions. I\'m originally from rural Laos where technology was limited and when I received my first computer I\'ve been hooked ever since. Now I\'ve made it my goal to develop impactful products that is available for all to use!', image: '/assets/Images/layPic.png' },
    { text: 'Hi, my name is Bryan Hernandez-Trejo and I\'m from Nashville, TN. I\'m a passionate computer science student currently enrolled as a Senior at Middle Tennessee State University. I\'ve been working at Plutus for 6 months and it has been an amazing experience. We have enjoyed working alongside them in the process of web development and learning new technologies. I have enjoyed being part of this team and helping each other out in this process that we had begun with little knowledge about.', image: '/assets/Images/bryanPic.jpg' },
    { text: 'Text 6', image: 'https://via.placeholder.com/150' }
  ];
}
