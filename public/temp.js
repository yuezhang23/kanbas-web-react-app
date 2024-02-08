function KanbasNavigation() {
    return `
    <div class="list-group wd-flex-col-container wd-pos-fixed wd-kanbas-navigation"> 
        <a class="list-group-item list-group-item-action" onclick="activeMod()"
            href="/Kanbas/Account/Profile/screen.html"> Account</a>
        <a class="list-group-item list-group-item-action" onclick="activeMod()"
            href="/Kanbas/Dashboard/screen.html"> Dashboard</a>
        <a class="list-group-item list-group-item-action" onclick="activeMod()"
            href="/Kanbas/Courses/Home/screen.html">Courses</a>
        <a class="list-group-item list-group-item-action" onclick="activeMod()"
            href="/Kanbas/Calendar/index.html">Calendar</a>
        <a class="list-group-item list-group-item-action" onclick="activeMod()"
            href="/Kanbas/Inbox/index.html">Inbox</a>
        <a class="list-group-item list-group-item-action" onclick="activeMod()"
            href="/Kanbas/History/index.html">History</a>
        <a class="list-group-item list-group-item-action" onclick="activeMod()"
            href="/Kanbas/Studio/index.html">Studio</a>
        <a class="list-group-item list-group-item-action" onclick="activeMod()"
            href="/Kanbas/Commons/index.html">Commons</a>
        <a class="list-group-item list-group-item-action" onclick="activeMod()"
            href="/Kanbas/Help/index.html">Help</a>
    </div>
    `;
}


function CourseNavigation() {
    return `
     <div class="list-group wd-flex-col-container">
       <a class="list-group-item list-group-item-action" onclick="activeMod()"
        href="/Kanbas/Courses/Home/screen.html" >
            Home </a>
       <a class="list-group-item list-group-item-action" onclick="activeMod()"
        href="/Kanbas/Courses/Modules/screen.html">
            Modules</a>
       <a  class="list-group-item list-group-item-action" onclick="activeMod()"
        href="/Kanbas/Courses/Piazza/index.html">
            Piazza</a>
       <a class="list-group-item list-group-item-action" onclick="activeMod()"
        href="/Kanbas/Courses/Zoom/index.html">
            Zoom Meetings</a>
       <a class="list-group-item list-group-item-action" onclick="activeMod()"
        href="/Kanbas/Courses/Assignments/screen.html">
            Assignments</a>
       <a class="list-group-item list-group-item-action" onclick="activeMod()"
        href="/Kanbas/Courses/Quizzes/screen.html">
            Quizzes</a>
       <a class="list-group-item list-group-item-action" onclick="activeMod()"
        href="/Kanbas/Courses/Grades/screen.html" >
            Grades</a>
       <a class="list-group-item list-group-item-action" onclick="activeMod()"
        href="/Kanbas/Courses/People/index.html">
            People</a>
       <a class="list-group-item list-group-item-action" onclick="activeMod()"
        href="/Kanbas/Courses/Discussions/index.html">
            Discussions</a>
       <a class="list-group-item list-group-item-action" onclick="activeMod()"
        href="/Kanbas/Courses/Announcements/screen.html">
            Announcements</a>
       <a class="list-group-item list-group-item-action" onclick="activeMod()"
        href="/Kanbas/Courses/Pages/screen.html">
            Pages</a>
       <a class="list-group-item list-group-item-action" onclick="activeMod()"
        href="/Kanbas/Courses/Files/screen.html">
            Files</a>
       <a class="list-group-item list-group-item-action" onclick="activeMod()"
        href="/Kanbas/Courses/Rubrics/index.html">
            Rubrics</a>
       <a class="list-group-item list-group-item-action" onclick="activeMod()"
        href="/Kanbas/Courses/Outcomes/index.html">
            Outcomes</a>
       <a class="list-group-item list-group-item-action" onclick="activeMod()"
        href="/Kanbas/Courses/Collaborations/index.html">
            Collaborations</a>
       <a class="list-group-item list-group-item-action" onclick="activeMod()"
        href="/Kanbas/Courses/Syllabus/index.html">
            Syllabus</a>
       <a class="list-group-item list-group-item-action" onclick="activeMod()"
        href="/Kanbas/Courses/Settings/screen.html">
            Settings</a>
    </div>`;
}

function AccountNavigation() {
    return `
     <div class="list-group wd-flex-col-container wd-float-left">
           <a class="list-group-item list-group-item-action" onclick="activeMod()"
                href="/Kanbas/Account/Profile/screen.html" >
                Notification</a>
           <a class="list-group-item list-group-item-action" onclick="activeMod()"
                href="/Kanbas/Account/Profile/screen.html" >
                Profile</a>
           <a class="list-group-item list-group-item-action" onclick="activeMod()"
                href="/Kanbas/Account/Profile/screen.html" >
                Files</a>
           <a class="list-group-item list-group-item-action" onclick="activeMod()"
                href="/Kanbas/Account/Profile/screen.html" >
                Settings</a>
           <a class="list-group-item list-group-item-action" onclick="activeMod()"
                href="/Kanbas/Account/Profile/screen.html" >
                ePortfolios</a>
           <a class="list-group-item list-group-item-action" onclick="activeMod()"
                href="/Kanbas/Account/Profile/screen.html" >
                Shared Content</a>
           <a class="list-group-item list-group-item-action" onclick="activeMod()"
                href="/Kanbas/Account/Profile/screen.html" >
                The Hub</a>
           <a class="list-group-item list-group-item-action" onclick="activeMod()"
                href="/Kanbas/Account/Profile/screen.html" >
                Quickly Course Tools</a>
           <a class="list-group-item list-group-item-action" onclick="activeMod()"
                href="/Kanbas/Account/Profile/screen.html" >
                Global Announcements</a>
        </div>`;
}

function CourseSettings() {
    return `
     <div class="list-group wd-flex-col-container wd-float-left">
            <a class="list-group-item list-group-item-action" onclick="activeMod()"
                href="/Kanbas/Courses/Settings/Details/screen.html"> Course Details </a>
            <a class="list-group-item list-group-item-action" onclick="activeMod()"
                href="/Kanbas/Courses/Settings/Sections/index.html">Sections </a>
            <a class="list-group-item list-group-item-action" onclick="activeMod()"
                href="/Kanbas/Courses/Settings/Navigation/screen.html"> Navigation </a>
            <a class="list-group-item list-group-item-action" onclick="activeMod()"
                href="/Kanbas/Courses/Settings/Apps/index.html"> Apps </a>
            <a class="list-group-item list-group-item-action" onclick="activeMod()"
                href="/Kanbas/Courses/Settings/Features/index.html"> Feature Options </a>
            <a class="list-group-item list-group-item-action" onclick="activeMod()"
                href="/Kanbas/Courses/Settings/Integrations/index.html">Integrations </a>      
    </div>
`;
}