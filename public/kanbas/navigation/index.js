const kanbasNavi = KanbasNavigation();
const courseNavi = CourseNavigation();
const accountNavi = AccountNavigation();
const courseSet = CourseSettings();

function KanbasNavigation() {
    return `
     <ul style="alignment: center; height: 100%">
        <li><a href="/Kanbas/Account/Profile/screen.html">Account</a></li>
        <li>
            <a href="/Kanbas/Dashboard/screen.html">Dashboard</a>
        </li>
        <li>
            <a href="/Kanbas/Courses/Home/screen.html">Courses</a>
        </li>
        <li>
            <a href="/Kanbas/Calendar/index.html">Calendar</a>
        </li>
        <li>
            <a href="/Kanbas/Inbox/index.html">Inbox</a>
        </li>
        <li>
            <a href="/Kanbas/History/index.html">History</a>
        </li>
        <li>
            <a href="/Kanbas/Studio/index.html">Studio</a>
        </li>
        <li>
            <a href="/Kanbas/Commons/index.html">Commons</a>
        </li>
        <li>
            <a href="/Kanbas/Help/index.html">Help</a>
        </li>
    </ul>`;
}
function CourseNavigation() {
    return `
     <ul style="alignment: center; height: 100%">
        <li><a href="/Kanbas/Courses/Home/screen.html" >
            Home</a></li>
        <li><a href="/Kanbas/Courses/Modules/screen.html">
            Modules</a></li>
        <li><a href="/Kanbas/Courses/Piazza/index.html">
            Piazza</a></li>
        <li><a href="/Kanbas/Courses/Zoom/index.html">
            Zoom Meetings</a></li>
        <li><a href="/Kanbas/Courses/Assignments/screen.html">
            Assignments</a></li>
        <li><a href="/Kanbas/Courses/Quizzes/screen.html">
            Quizzes</a></li>
        <li><a href="/Kanbas/Courses/Grades/screen.html" >
            Grades</a></li>
        <li><a href="/Kanbas/Courses/People/index.html">
            People</a></li>
        <li><a href="/Kanbas/Courses/Discussions/index.html">
            Discussions</a></li>
        <li><a href="/Kanbas/Courses/Announcements/screen.html">
            Announcements</a></li>
        <li><a href="/Kanbas/Courses/Pages/screen.html">
            Pages</a></li>
        <li><a href="/Kanbas/Courses/Files/screen.html">
            Files</a></li>
        <li><a href="/Kanbas/Courses/Rubrics/index.html">
            Rubrics</a></li>
        <li><a href="/Kanbas/Courses/Outcomes/index.html">
            Outcomes</a></li>
        <li><a href="/Kanbas/Courses/Collaborations/index.html">
            Collaborations</a></li>
        <li><a href="/Kanbas/Courses/Syllabus/index.html">
            Syllabus</a></li>
        <li><a href="/Kanbas/Courses/Settings/screen.html">
            Settings</a></li>
    </ul>
    `;
}

function AccountNavigation() {
    return `
    <ul style="alignment: center; height: 100%">
            <li><a href="/Kanbas/Account/Profile/screen.html" >
                Notification</a></li>
            <li><a href="/Kanbas/Account/Profile/screen.html" >
                Profile</a></li>
            <li><a href="/Kanbas/Account/Profile/screen.html" >
                Files</a></li>
            <li><a href="/Kanbas/Account/Profile/screen.html" >
                Settings</a></li>
            <li><a href="/Kanbas/Account/Profile/screen.html" >
                ePortfolios</a></li>
            <li><a href="/Kanbas/Account/Profile/screen.html" >
                Shared Content</a></li>
            <li><a href="/Kanbas/Account/Profile/screen.html" >
                The Hub</a></li>
            <li><a href="/Kanbas/Account/Profile/screen.html" >
                Quickly Course Tools</a></li>
            <li><a href="/Kanbas/Account/Profile/screen.html" >
                Global Announcements</a></li>
        </ul>`;
}

function CourseSettings() {
    return `
        <style>
            .flex1 {
                display: flex;
                gap: 20px;
            }
        </style>
        <ul class="flex1"; style="list-style-type: none"; >
        <li >
            <a href="/Kanbas/Courses/Settings/Details/screen.html"> Course Details </a>
        </li>
        <li>
            <a href="/Kanbas/Courses/Settings/Sections/index.html">Sections </a>
        </li>
        <li>
            <a href="/Kanbas/Courses/Settings/Navigation/screen.html"> Navigation </a>
        </li>
        <li>
            <a href="/Kanbas/Courses/Settings/Apps/index.html"> Apps </a>
        </li>
        <li>
            <a href="/Kanbas/Courses/Settings/Features/index.html"> Feature Options </a>
        </li>
        <li>
            <a href="/Kanbas/Courses/Settings/Integrations/index.html">Integrations </a>
        </li>
    </ul>
`;
}