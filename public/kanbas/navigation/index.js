const kanbasNavi = KanbasNavigation();
const courseNavi = CourseNavigation();
const accountNavi = AccountNavigation();

function activeMod(ele) {
    const a = document.getElementsByTagName('li')
    for (let i = 0; i < a.length; i++) {
        a[i].classList.remove('wd-active');
    }
}

function KanbasNavigation() {
    return `
   <ul class="wd-kanbas-navigation d-none d-md-block">
      <li><a href="http://northeastern.edu" onclick="activeMod()">
        <img class="input-group-sm" src="/libs/images/n.png"></a>
       </li>
      <li id="dr-nav-1"><a href="/Kanbas/Account/Profile/screen.html" onclick="activeMod()">
            <i class="fa fa-user-circle-o" style="color: white"></i></br> 
            Account</a>
        </li>
      <li id="dr-nav-2"><a href="/Kanbas/Dashboard/screen.html" onclick="activeMod()"> 
          <i class="fa fa-tachometer"></i></br>
           Dashboard</a>
      </li>
      <li id="dr-nav-3"><a href="/Kanbas/Courses/Home/screen.html" onclick="activeMod(id)"> 
          <i class="fa fa-book"></i> </br>
          Courses</a> 
      </li>
      <li id="dr-nav-4"><a href="#" onclick="activeMod()">
        <i class="fa fa-calendar" ></i></br> 
        Calendar</a></li>
      <li id="dr-nav-5"><a href="#" onclick="activeMod()">
         <i class="fa fa-address-book"></i></br>
         Inbox</a></li>
      <li id="dr-nav-6"><a href="#" onclick="activeMod()">
            <i class="fa fa-history"></i> </br>
            History</a></li>
      <li id="dr-nav-7"><a href="#" onclick="activeMod()">
            <i class="fa fa-video-camera"></i> </br>
            Studio</a></li>
      <li id="dr-nav-8"><a href="#" onclick="activeMod()">
            <i class="fa fa-question"></i> </br>
            Help</a></li>
    </ul>
    `;
}


function CourseNavigation() {
    return `
     <ul id="course-nav" class="wd-kanbas-navigation menu-2 d-none d-md-block">
       <li id="dr-nav-3-1"> <a onclick="activeMod()"
            href="/Kanbas/Courses/Home/screen.html" >
                Home </a></li>
       <li id="dr-nav-3-2"> <a onclick="activeMod()"
            href="/Kanbas/Courses/Modules/screen.html">
                Modules</a></li>
      <li id="dr-nav-3-3">  <a onclick="activeMod()"
            href="/Kanbas/Courses/Piazza/index.html">
                Piazza</a></li>
      <li id="dr-nav-3-4">  <a onclick="activeMod()"
            href="/Kanbas/Courses/Zoom/index.html">
                Zoom Meetings</a></li>
      <li id="dr-nav-3-5">  <a onclick="activeMod()"
            href="/Kanbas/Courses/Assignments/screen.html">
                Assignments</a></li>
       <li id="dr-nav-3-6"> <a onclick="activeMod()"
            href="/Kanbas/Courses/Quizzes/screen.html">
                Quizzes</a></li>
       <li id="dr-nav-3-7"> <a onclick="activeMod()"
            href="/Kanbas/Courses/Grades/screen.html" >
                Grades</a></li>
       <li id="dr-nav-3-8"> <a onclick="activeMod()"
            href="/Kanbas/Courses/People/index.html">
                People</a></li>
       <li id="dr-nav-3-9"> <a onclick="activeMod()"
            href="/Kanbas/Courses/Discussions/index.html">
                Discussions</a></li>
       <li id="dr-nav-3-10"> <a onclick="activeMod()"
            href="/Kanbas/Courses/Announcements/screen.html">
                Announcements</a></li>
       <li id="dr-nav-3-11"> <a onclick="activeMod()"
            href="/Kanbas/Courses/Pages/screen.html">
                Pages</a></li>
       <li id="dr-nav-3-12"> <a onclick="activeMod()"
            href="/Kanbas/Courses/Files/screen.html">
                Files</a></li>
       <li id="dr-nav-3-13"> <a onclick="activeMod()"
            href="/Kanbas/Courses/Rubrics/index.html">
                Rubrics</a></li>
       <li id="dr-nav-3-14"> <a onclick="activeMod()"
            href="/Kanbas/Courses/Outcomes/index.html">
                Outcomes</a></li>
       <li id="dr-nav-3-15"> <a onclick="activeMod()"
            href="/Kanbas/Courses/Collaborations/index.html">
                Collaborations</a></li>
       <li id="dr-nav-3-16"> <a onclick="activeMod()"
            href="/Kanbas/Courses/Syllabus/index.html">
                Syllabus</a></li>
       <li id="dr-nav-3-17"> <a onclick="activeMod()"
            href="/Kanbas/Courses/Settings/screen.html">
                Settings</a></li>
    </ul>`;
}


function AccountNavigation() {
    return `
     <ul class="wd-kanbas-navigation menu-2 h-100">
           <li id="dr-nav-1-1"> <a onclick="activeMod()"
                href="/Kanbas/Account/Profile/screen.html" >
                Notification</a></li>
           <li id="dr-nav-1-2"> <a onclick="activeMod()"
                href="/Kanbas/Account/Profile/screen.html" >
                Profile</a></li>
           <li id="dr-nav-1-3"> <a onclick="activeMod()"
                href="/Kanbas/Account/Profile/screen.html" >
                Files</a></li>
           <li id="dr-nav-1-4"> <a onclick="activeMod()"
                href="/Kanbas/Account/Profile/screen.html" >
                Settings</a></li>
           <li id="dr-nav-1-5"> <a onclick="activeMod()"
                href="/Kanbas/Account/Profile/screen.html" >
                ePortfolios</a></li>
           <li id="dr-nav-1-6"> <a onclick="activeMod()"
                href="/Kanbas/Account/Profile/screen.html" >
                Shared Content</a></li>
          <li id="dr-nav-1-7">  <a onclick="activeMod()"
                href="/Kanbas/Account/Profile/screen.html" >
                The Hub</a></li>
           <li id="dr-nav-1-8"> <a onclick="activeMod()"
                href="/Kanbas/Account/Profile/screen.html" >
                Quickly Course Tools</a></li>
           <li id="dr-nav-1-9"> <a onclick="activeMod()"
                href="/Kanbas/Account/Profile/screen.html" >
                Global Announcements</a></li>
        </ul>`;
}


function CourseSettings() {
    return `
     <ul class="nav nav-tabs">
            <li class="nav-item mx-1 "> <a id="dr-nav-3-17-1" class="nav-link p-1" onclick="activeMod()"
                href="/Kanbas/Courses/Settings/Details/screen.html"> Course Details </a></li>
            <li class="nav-item mx-1" > <a id="dr-nav-3-17-2" class="nav-link p-1" onclick="activeMod()"
                href="/Kanbas/Courses/Settings/Sections/index.html">Sections </a></li>
            <li class="nav-item mx-1" > <a id="dr-nav-3-17-3" class="nav-link p-1" onclick="activeMod()"
                href="/Kanbas/Courses/Settings/Navigation/screen.html"> Navigation </a></li>
            <li class="nav-item mx-1" > <a id="dr-nav-3-17-4" class="nav-link p-1" onclick="activeMod()"
                href="/Kanbas/Courses/Settings/Apps/index.html"> Apps </a></li>
            <li class="nav-item mx-1" > <a id="dr-nav-3-17-5" class="nav-link p-1" onclick="activeMod()"
                href="/Kanbas/Courses/Settings/Features/index.html"> Feature Options </a></li>
            <li class="nav-item mx-1" > <a id="dr-nav-3-17-6" class="nav-link p-1" onclick="activeMod()"
                href="/Kanbas/Courses/Settings/Integrations/index.html">Integrations </a></li>           
     </ul>  
`;
}

const courseSet = CourseSettings();



