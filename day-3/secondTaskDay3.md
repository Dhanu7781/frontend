<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class Timetable</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .timetable {
            text-align: center;
            border: 1px solid #dee2e6;
        }
        .timetable th, .timetable td {
            border: 1px solid #dee2e6;
            padding: 10px;
        }
        .lunch-break {
            background-color: #f8d7da;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container my-4">
        <h2 class="text-center mb-4">Class Timetable</h2>
        <table class="table table-bordered timetable">
            <thead class="table-primary">
                <tr>
                    <th>Time</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                </tr>
            </thead>
            <tbody>
            
                <tr>
                    <td>9:00 AM - 10:00 AM</td>
                    <td>Mathematics</td>
                    <td>Physics</td>
                    <td>Chemistry</td>
                    <td>Biology</td>
                    <td>Computer Science</td>
                </tr>
             
                <tr>
                    <td>10:00 AM - 11:00 AM</td>
                    <td>English</td>
                    <td>Mathematics</td>
                    <td>Physics</td>
                    <td>Chemistry</td>
                    <td>Biology</td>
                </tr>
             
                <tr>
                    <td>11:00 AM - 12:00 PM</td>
                    <td>Physics</td>
                    <td>Chemistry</td>
                    <td>English</td>
                    <td>Mathematics</td>
                    <td>Sports</td>
                </tr>
               
                <tr class="lunch-break">
                    <td>12:00 PM - 1:00 PM</td>
                    <td colspan="5">Lunch Break</td>
                </tr>
           
                <tr>
                    <td>1:00 PM - 2:00 PM</td>
                    <td>Chemistry</td>
                    <td>Biology</td>
                    <td>Mathematics</td>
                    <td>English</td>
                    <td>Computer Science</td>
                </tr>
              
                <tr>
                    <td>2:00 PM - 3:00 PM</td>
                    <td>Biology</td>
                    <td>Computer Science</td>
                    <td>Sports</td>
                    <td>Physics</td>
                    <td>Chemistry</td>
                </tr>
              
                <tr>
                    <td>3:00 PM - 4:00 PM</td>
                    <td>Computer Science</td>
                    <td>English</td>
                    <td>Physics</td>
                    <td>Sports</td>
                    <td>Mathematics</td>
                </tr>
            </tbody>
        </table>
    </div>

  
</body>
</html>
