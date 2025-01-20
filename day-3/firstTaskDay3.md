<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>College Website</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .header {
            background-color: #f8f9fa;
            padding: 15px 0;
            text-align: center;
        }
        .header h1, .header h2 {
            margin: 0;
        }
        .simple-menu ul {
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 20px;
        }
        .simple-menu li a {
            text-decoration: none;
            color: #007bff;
        }
        .simple-menu li a:hover {
            text-decoration: underline;
        }
        .sidebar {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
        }
        .sidebar h5 {
            border-bottom: 2px solid #007bff;
            padding-bottom: 5px;
            margin-bottom: 15px;
        }
    </style>
</head>
<body>
  
    <header class="header">
       
        <h2>Department of Computer Science</h2>
        <nav class="simple-menu mt-3">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#faculty">Faculty</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

   
    <div class="container my-4">
        <div class="row">
          
            <aside class="col-md-4 sidebar">
                <h5>Important Notices</h5>
                <ul>
                    <li>Exam Schedule Released</li>
                    <li>Project Submission Deadline: March 20</li>
                    <li>Guest Lecture on AI: Jan 25</li>
                </ul>
                <h5 class="mt-4">Quick Links</h5>
                <ul>
                    <li><a href="#about">About Department</a></li>
                    <li><a href="#courses">Course Details</a></li>
                    <li><a href="#faculty">Faculty List</a></li>
                    <li><a href="#events">Upcoming Events</a></li>
                </ul>
            </aside>

            
            <section class="col-md-8">
                <div id="about">
                    <h3>About Department</h3>
                    <p>
                        The Department of Computer Science offers a strong foundation in computer science and keeps up with cutting-edge technologies. Our programs are designed to foster innovation, research, and leadership in the field.
                    </p>
                </div>
                <div id="courses" class="mt-4">
                    <h3>Course Details</h3>
                    <ul>
                        <li>BSc in Computer Science</li>
                        <li>MSc in Computer Science</li>
                        <li>PhD in Computer Science</li>
                        <li>Certificate Programs in Data Science, AI, and Web Development</li>
                    </ul>
                </div>
                <div id="faculty" class="mt-4">
                    <h3>Faculty List</h3>
                    <ul>
                        <li>Dr. John Smith - Head of Department</li>
                        <li>Prof. Jane Doe - AI Specialist</li>
                        <li>Dr. Alan Turing - Data Science</li>
                        <li>Prof. Grace Hopper - Software Engineering</li>
                        <li>Dr. Ada Lovelace - Machine Learning</li>
                    </ul>
                </div>
            </section>
        </div>
    </div>
</body>
</html>
