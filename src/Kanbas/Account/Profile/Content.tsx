function Content() {
    return (
    <>
        <div className="col wd-modules">
            <div className="row row-cols-1">
                <div className="fs-4">
                    Yue Zhang's Profile
                    <a href="/kanbas/account/profile/edit/screen.html" className="btn btn-secondary p-1 rounded-1 float-end"
                       role="button"><i className="fa fa-pencil"></i> Edit profile</a>
                </div>
            </div>
            <div className="row">
                <span className="fs-4 my-4"> Contact</span>
            </div>
            <div className="row">
                <span>No registered services, you can add some on the <a href="#">settings</a> page.
                </span>
            </div>
            <div className="row">
                <span className="fs-4 my-4">  Biography</span>
                <textarea id ="bio-info" className="row-4 col-8 text-decoration-none">A cs-align graduate student and a former civil engineer. Over 6 years of work experience in the building industry of China. Look for a position shift into tech industry. </textarea>
            </div>
            <div className="row">
                <span className="fs-4 my-4"> Links</span>
            </div>
            <div className="row">
                    <a href="http://www.youtube.com" > YouTube</a>
            </div>
        </div>
    </>
    );

}
export default Content