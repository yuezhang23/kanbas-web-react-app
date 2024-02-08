const kanbasNaviS = KanbasNavigationS();
const kanbasNaviC = KanbasNavigationC();
const courseNaviS = CourseNavigationS();
const courseNaviC = CourseNavigationC();



function KanbasNavigationS() {
    return `
    <div class="dropdown dropdown-menu" style="width: 100%; height: auto; border: 2px solid gray"> 
      <div class="d-flex float-end me-4 mt-4">
            <button class="btn btn-secondary border p-1" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
             X </button>
      </div>
      <a class="dropdown-item text-danger m-3" style="font-size: large"
            href="/Kanbas/Account/Profile/screen.html">
          <i class="fa fa-clock-o fa-2x"></i> Account</a>
      <a class="dropdown-item text-danger m-3" style="font-size: large"
      href="/Kanbas/Dashboard/screen.html"> 
          <i class="fa fa-tachometer fa-2x"></i> Dashboard</a>   
      <a class="dropdown-item text-danger m-3" style="font-size: large"
      href="/Kanbas/Courses/Home/screen.html"> 
          <i class="fa fa-book fa-2x"></i> Courses</a> 
      <a class="dropdown-item text-danger m-3" style="font-size: large"
      href="#">
          <i class="fa fa-calendar fa-2x" ></i> Calendar</a>
      <a class="dropdown-item text-danger m-3" style="font-size: large"
      href="#">
         <i class="fa fa-address-book fa-2x"></i> Inbox</a>
      <a class="dropdown-item text-danger m-3" style="font-size: large"
      href="#"><i class="fa fa-clock-o fa-2x"></i> History
      </a>
      <a class="dropdown-item text-danger m-4" style="font-size: large"
      href="#"><i class="fa fa-video-camera fa-2x"></i> Studio
      </a>
      <a class="dropdown-item text-danger m-4" style="font-size: large"
      href="#"><i class="fa fa-question fa-2x"></i> Help
      </a>
    </div>
    `;
}


function CourseNavigationS() {
    return `
    <ul class="dropdown dropdown-menu wd-kanbas-navigation menu-2 " 
            style="width: 100%; height: auto; border: 2px solid gray">
        <li class="text-end">
             <button class="btn btn-secondary border p-1 
             type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> X </button>
        </li>
       <li > <a
           class="dropdown-item" href="/Kanbas/Courses/Home/screen.html" >
                <i class="fa fa-home"></i> Home </a></li>
       <li > <a
           class="dropdown-item" href="/Kanbas/Courses/Modules/screen.html">
                <i class="fa fa-link"></i> Modules</a></li>
      <li>  <a
           class="dropdown-item" href="/Kanbas/Courses/Piazza/index.html">
                <i class="fa fa-pie-chart"></i> Piazza</a></li>
      <li >  <a
           class="dropdown-item" href="/Kanbas/Courses/Zoom/index.html">
                <i class="fa fa-meetup"></i> Zoom Meetings</a></li>
      <li >  <a
           class="dropdown-item" href="/Kanbas/Courses/Assignments/screen.html">
                <i class="fa fa-tasks"></i> Assignments</a></li>
       <li > <a
           class="dropdown-item" href="/Kanbas/Courses/Quizzes/screen.html">
                <i class="fa fa-question-circle"></i> Quizzes</a></li>
       <li> <a
           class="dropdown-item" href="/Kanbas/Courses/Grades/screen.html" >
                <i class="fa fa-dashboard"></i> Grades</a></li>
       <li> <a
           class="dropdown-item" href="/Kanbas/Courses/People/index.html">
                <i class="fa fa-male"></i> People</a></li>
       <li> <a
           class="dropdown-item" href="/Kanbas/Courses/Discussions/index.html">
                <i class="fa fa-asterisk"></i> Discussions</a></li>
       <li> <a
           class="dropdown-item" href="/Kanbas/Courses/Announcements/screen.html">
                <i class="fa fa-newspaper-o"></i> Announcements</a></li>
       <li> <a
           class="dropdown-item" href="/Kanbas/Courses/Pages/screen.html">
                <i class="fa fa-pagelines"></i> Pages</a></li>
       <li> <a
           class="dropdown-item" href="/Kanbas/Courses/Files/screen.html">
                <i class="fa fa-list-ol"></i> Files</a></li>
       <li> <a
           class="dropdown-item" href="/Kanbas/Courses/Rubrics/index.html">
                <i class="fa fa-percent"></i> Rubrics</a></li>
       <li> <a
           class="dropdown-item" href="/Kanbas/Courses/Outcomes/index.html">
                <i class="fa fa-registered"></i> Outcomes</a></li>
       <li> <a
           class="dropdown-item" href="/Kanbas/Courses/Collaborations/index.html">
                <i class="fa fa-share"></i> Collaborations</a></li>
       <li> <a
           class="dropdown-item" href="/Kanbas/Courses/Syllabus/index.html">
                <i class="fa fa-address-book"></i> Syllabus</a></li>
       <li > <a
           class="dropdown-item" href="/Kanbas/Courses/Settings/screen.html">
                <i class="fa fa-bolt"></i> Settings</a></li>
    </ul>`;
}

function KanbasNavigationC() {
    return `
    <ul style="width: 300px; height: auto; border: 2px solid gray"> 
      <li class="d-flex float-end mx-2">
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiMenu1" aria-expanded="false" aria-controls="multiMenu1">
                    X </button>
      </li>
      <li> <a class=" text-danger m-3" style="font-size: large"
            href="/Kanbas/Account/Profile/screen.html">
          <i class="fa fa-clock-o fa-2x"></i> Account</a></li>
      <li> <a class="text-danger m-3" style="font-size: large"
      href="/Kanbas/Dashboard/screen.html"> 
          <i class="fa fa-tachometer fa-2x"></i> Dashboard</a></li>   
      <li> <a class="text-danger m-3" style="font-size: large"
      href="/Kanbas/Courses/Home/screen.html"> 
          <i class="fa fa-book fa-2x"></i> Courses</a></li> 
      <li> <a class="text-danger m-3" style="font-size: large"
      href="#">
          <i class="fa fa-calendar fa-2x" ></i> Calendar</a></li>
      <li> <a class="text-danger m-3" style="font-size: large"
      href="#">
         <i class="fa fa-address-book fa-2x"></i> Inbox</a></li>
      <li> <a class="text-danger m-3" style="font-size: large"
      href="#"><i class="fa fa-clock-o fa-2x"></i> History</a></li>
      <li> <a class="text-danger m-4" style="font-size: large"
      href="#"><i class="fa fa-video-camera fa-2x"></i> Studio</a></li>
      <li> <a class="text-danger m-4" style="font-size: large"
      href="#"><i class="fa fa-question fa-2x"></i> Help</a></li>
    </ul>
    `;
}

function CourseNavigationC() {
    return `
    <ul >
       <li > <a class="text-decoration-none text-danger"
            href="/Kanbas/Courses/Home/screen.html" >
                <i class="fa fa-home"></i> Home </a></li>
       <li > <a class="text-decoration-none text-danger"
            href="/Kanbas/Courses/Modules/screen.html">
                <i class="fa fa-link"></i> Modules</a></li>
       <li><a class="text-decoration-none text-danger"
            href="/Kanbas/Courses/Piazza/index.html">
                <i class="fa fa-pie-chart"></i> Piazza</a></li>
      <li >  <a class="text-decoration-none text-danger"
            href="/Kanbas/Courses/Zoom/index.html">
                <i class="fa fa-meetup"></i> Zoom Meetings</a></li>
      <li >  <a class="text-decoration-none text-danger"
            href="/Kanbas/Courses/Assignments/screen.html">
                <i class="fa fa-tasks"></i> Assignments</a></li>
       <li > <a class="text-decoration-none text-danger"
            href="/Kanbas/Courses/Quizzes/screen.html">
                <i class="fa fa-question-circle"></i> Quizzes</a></li>
       <li> <a class="text-decoration-none text-danger"
            href="/Kanbas/Courses/Grades/screen.html" >
                <i class="fa fa-dashboard"></i> Grades</a></li>
       <li> <a class="text-decoration-none text-danger"
            href="/Kanbas/Courses/People/index.html">
                <i class="fa fa-male"></i> People</a></li>
       <li> <a class="text-decoration-none text-danger"
            href="/Kanbas/Courses/Discussions/index.html">
                <i class="fa fa-asterisk"></i> Discussions</a></li>
       <li> <a class="text-decoration-none text-danger"
            href="/Kanbas/Courses/Announcements/screen.html">
                <i class="fa fa-newspaper-o"></i> Announcements</a></li>
       <li> <a class="text-decoration-none text-danger"
            href="/Kanbas/Courses/Pages/screen.html">
                <i class="fa fa-pagelines"></i> Pages</a></li>
       <li> <a class="text-decoration-none text-danger"
            href="/Kanbas/Courses/Files/screen.html">
                <i class="fa fa-list-ol"></i> Files</a></li>
       <li> <a class="text-decoration-none text-danger"
            href="/Kanbas/Courses/Rubrics/index.html">
                <i class="fa fa-percent"></i> Rubrics</a></li>
       <li> <a class="text-decoration-none text-danger"
            href="/Kanbas/Courses/Outcomes/index.html">
                <i class="fa fa-registered"></i> Outcomes</a></li>
</ul>`;
}

