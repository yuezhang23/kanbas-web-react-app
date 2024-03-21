function Profile() {
    return (
    <div className="d-flex wd-modules">
        <div className="flex-grow-1 ms-2">
            <div className="d-block d-md-none bg-dark ">
                <div className="d-flex">
                    <div>
                        <button className="btn my-2" type="button" data-bs-toggle="dropdown">
                            <i className="fa fa-tasks fa-list fa-2x me-2" ></i> </button>
                        <script>
                            document.write(kanbasNaviS);
                        </script>
                    </div>
                    <div className="flex-grow-1 ">
                        <p className="text-end">
                            <button className="btn my-2" type="button" data-bs-toggle="collapse" data-bs-target="#multiMenu2" aria-expanded="false" aria-controls="multiMenu2">
                                <i className="fa fa-tripadvisor fa-2x" ></i>
                                <i className="fa fa-chevron-down fa-1x" ></i></button>
                        </p>
                        <div className="collapse " id="multiMenu2">
                            <div className="card card-body">
                                <script>
                                    document.write(courseNaviC);
                                </script>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-none d-md-block py-3 border-bottom ">
                <span className="d-flex flex-row">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active" aria-current="page">
                                Yue Zhang's Profile </li>
                            </ol>
                        </nav>
                    </div>
                    <span className="flex-grow-1 text-end me-2">
                        <button type="button" className="btn btn-secondary p-1">
                            <i className="fa fa-tripadvisor fa-1x"></i> Student View
                        </button>
                    </span>
                </span>
            </div>
        </div>
    </div>
    );
}
export default Profile