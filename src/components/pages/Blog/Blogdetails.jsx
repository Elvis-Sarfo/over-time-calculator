import React from 'react'
import { Link } from "react-router-dom";
import Header from '../../Header/Header'
import SideBar from '../../SideBar/SideBar'
import { avatar05, avatar06, avatar09, avatar10, avatar11, avatar13, avatar14, blogdetail } from '../../imagepath'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';

const Blogdetails = () => {
    return (
        <>
            <div className="main-wrapper">
                {/* Header */}
                <Header />

                {/* Sidebar */}
                <SideBar />

                {/* Page Wrapper */}
                <div className="page-wrapper">
                    <div className="content container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 col-xl-9">
                                {/* Blog Details*/}
                                <div className="blog-view">
                                    <div className="blog-single-post">
                                        <Link to="/blog" className="back-btn">
                                            <i className="feather-chevron-left"> 
                                            <FeatherIcon icon="chevron-left" />
                                            Back
                                            </i>
                                        </Link>
                                        <div className="blog-image">
                                            <Link to="#">
                                                <img
                                                    alt=""
                                                    src={blogdetail}
                                                    className="img-fluid"
                                                />
                                            </Link>
                                        </div>
                                        <h3 className="blog-title">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text
                                        </h3>
                                        <div className="blog-info">
                                            <div className="post-list">
                                                <ul>
                                                    <li>
                                                        <div className="post-author">
                                                            <Link to="/profile">
                                                                <img
                                                                    src={avatar14}
                                                                    alt="Post Author"
                                                                />{" "}
                                                                <span>by Prof. Lester </span>
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <i className="feather-clock" > 
                                                        <FeatherIcon icon="clock" className="blog-clock"/>
                                                        Dec 6, 2017
                                                        </i>
                                                    </li>
                                                    <li>
                                                        <i className="feather-message-square" >
                                                        <FeatherIcon icon="message-square" className="blog-square"/>
                                                         40 Comments
                                                         </i>
                                                    </li>
                                                    <li>
                                                        <i className="feather-grid"> 
                                                        <FeatherIcon icon="grid" className="blog-grid"/>
                                                        Set Theory, Mathematician
                                                        </i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="blog-content">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </p>
                                            <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                                quae ab illo inventore veritatis et quasi architecto beatae
                                                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                                voluptas sit aspernatur aut odit aut fugit, sed quia
                                                consequuntur magni dolores eos qui ratione voluptatem sequi
                                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                                                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                                                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                                voluptatem. Ut enim ad minima veniam, quis nostrum
                                                exercitationem ullam corporis suscipit laboriosam, nisi ut
                                                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                                                reprehenderit qui in ea voluptate velit esse quam nihil
                                                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                                                voluptas nulla pariatur?
                                            </p>
                                            <p>
                                                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                                blanditiis praesentium voluptatum deleniti atque corrupti quos
                                                dolores et quas molestias excepturi sint occaecati cupiditate
                                                non provident, similique sunt in culpa qui officia deserunt
                                                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                                                rerum facilis est et expedita distinctio. Nam libero tempore,
                                                cum soluta nobis est eligendi optio cumque nihil impedit quo
                                                minus id quod maxime placeat facere possimus, omnis voluptas
                                                assumenda est, omnis dolor repellendus. Temporibus autem
                                                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                                                eveniet ut et voluptates repudiandae sint et molestiae non
                                                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                                                ut aut reiciendis voluptatibus maiores alias consequatur aut
                                                perferendis doloribus asperiores repellat.
                                            </p>
                                        </div>
                                    </div>
                                    {/* About Author */}
                                    <div className="card author-widget clearfix">
                                        <div className="card-header">
                                            <h4 className="card-title">About Author</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="about-author">
                                                <div className="about-author-img">
                                                    <div className="author-img-wrap">
                                                        <Link to="/profile">
                                                            <img
                                                                className="img-fluid"
                                                                alt=""
                                                                src={avatar10}
                                                            />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="author-details">
                                                    <Link to="/profile" className="blog-author-name">
                                                        Prof. Darren Elder{" "}
                                                        <span>Biologist, Male, 40 Years Old</span>
                                                    </Link>
                                                    <p className="mb-0">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                        do eiusmod tempor incididunt ut labore et dolore magna
                                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /About Author */}
                                    {/* Comments */}
                                    <div className="card blog-comments">
                                        <div className="card-header">
                                            <h4 className="card-title">Comments (5)</h4>
                                        </div>
                                        <div className="card-body pb-0">
                                            <ul className="comments-list">
                                                <li>
                                                    <div className="comment">
                                                        <div className="comment-author">
                                                            <img
                                                                className="avatar"
                                                                alt=""
                                                                src={avatar13}
                                                            />
                                                        </div>
                                                        <div className="comment-block">
                                                            <div className="comment-by">
                                                                <h5 className="blog-author-name">
                                                                    Michelle Fairfax{" "}
                                                                    <span className="blog-date">
                                                                        {" "}
                                                                        <i className="feather-clock me-1">
                                                                            <FeatherIcon icon="clock" className="blog-clock"/>
                                                                        </i>
                                                                        Dec 6, 2017
                                                                    </span>
                                                                </h5>
                                                            </div>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                Nam viverra euismod odio, gravida pellentesque urna
                                                                varius vitae, gravida pellentesque urna varius vitae.
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            </p>
                                                            <Link className="comment-btn" to="#">
                                                                <i className="fa fa-reply me-2" /> Reply
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <ul className="comments-list reply">
                                                        <li>
                                                            <div className="comment">
                                                                <div className="comment-author">
                                                                    <img
                                                                        className="avatar"
                                                                        alt=""
                                                                        src={avatar06}
                                                                    />
                                                                </div>
                                                                <div className="comment-block">
                                                                    <div className="comment-by">
                                                                        <h5 className="blog-author-name">
                                                                            Gina Moore{" "}
                                                                            <span className="blog-date">
                                                                                {" "}
                                                                                <i className="feather-clock me-1" >
                                                                                    <FeatherIcon icon="clock" className="blog-clock"/>
                                                                                    </i> 
                                                                                    6 Dec 2022
                                                                            </span>
                                                                        </h5>
                                                                    </div>
                                                                    <p>
                                                                        gravida pellentesque urna varius vitae. Lorem ipsum
                                                                        dolor sit amet, consectetur
                                                                    </p>
                                                                    <Link className="comment-btn" to="#">
                                                                        <i className="fa fa-reply me-2" /> Reply
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="comment">
                                                                <div className="comment-author">
                                                                    <img
                                                                        className="avatar"
                                                                        alt=""
                                                                        src={avatar05}
                                                                    />
                                                                </div>
                                                                <div className="comment-block">
                                                                    <div className="comment-by">
                                                                        <h5 className="blog-author-name">
                                                                            Carl Kelly{" "}
                                                                            <span className="blog-date">
                                                                                {" "}
                                                                                <i className="feather-clock me-1">
                                                                                    <FeatherIcon icon="clock" className="blog-clock"/>
                                                                                    </i>  
                                                                                7 Dec 2022
                                                                            </span>
                                                                        </h5>
                                                                    </div>
                                                                    <p>
                                                                        {" "}
                                                                        pellentesque urna varius vitae, gravida pellentesque
                                                                        urna consectetur adipiscing elit. Nam viverra
                                                                        euismod.
                                                                    </p>
                                                                    <Link className="comment-btn" to="#">
                                                                        <i className="fa fa-reply me-2" /> Reply
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className="comment">
                                                        <div className="comment-author">
                                                            <img
                                                                className="avatar"
                                                                alt=""
                                                                src={avatar09}
                                                            />
                                                        </div>
                                                        <div className="comment-block">
                                                            <div className="comment-by">
                                                                <h5 className="blog-author-name">
                                                                    Elsie Gilley{" "}
                                                                    <span className="blog-date">
                                                                        {" "}
                                                                        <i className="feather-clock me-1">
                                                                            <FeatherIcon icon="clock" className="blog-clock"/>
                                                                        </i>
                                                                        
                                                                        7 Dec 2022
                                                                    </span>
                                                                </h5>
                                                            </div>
                                                            <p>
                                                                sed do eiusmod tempor incididunt ut labore et dolore
                                                                magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                                exercitation.
                                                            </p>
                                                            <Link className="comment-btn" to="#">
                                                                <i className="fa fa-reply me-2" /> Reply
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="comment">
                                                        <div className="comment-author">
                                                            <img
                                                                className="avatar"
                                                                alt=""
                                                                src={avatar11}
                                                            />
                                                        </div>
                                                        <div className="comment-block">
                                                            <div className="comment-by">
                                                                <h5 className="blog-author-name">
                                                                    Joan Gardner{" "}
                                                                    <span className="blog-date">
                                                                        {" "}
                                                                        <i className="feather-clock me-1">
                                                                            <FeatherIcon icon="clock" className="blog-clock"/>
                                                                            </i>  
                                                                            12 Dec 2022
                                                                    </span>
                                                                </h5>
                                                            </div>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            </p>
                                                            <Link className="comment-btn" to="#">
                                                                <i className="fa fa-reply me-2" /> Reply
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* /Comments */}
                                    {/* Leave Comment */}
                                    <div className="card new-comment clearfix">
                                        <div className="card-header">
                                            <h4 className="card-title">Leave Comment</h4>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="floatingInput"
                                                        placeholder="Enter your name"
                                                    />
                                                    <label htmlFor="floatingInput">
                                                        Name<span className="text-danger">*</span>
                                                    </label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="floatingInput"
                                                        placeholder="name@example.com"
                                                    />
                                                    <label htmlFor="floatingInput">
                                                        Your Email address<span className="text-danger">*</span>
                                                    </label>
                                                </div>
                                                <div className="form-group">
                                                    <textarea
                                                        rows={4}
                                                        className="form-control bg-grey"
                                                        placeholder="Comments"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                                <div className="submit-section">
                                                    <button
                                                        className="submit-btn btn-primary btn-blog"
                                                        type="submit"
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* /Leave Comment */}
                                    <div className="card blog-share clearfix">
                                        <div className="card-header">
                                            <h4 className="card-title">Share the post</h4>
                                        </div>
                                        <div className="card-body">
                                            <ul className="social-share">
                                                <li>
                                                    <Link to="#">
                                                        <i className="feather-twitter">
                                                            <FeatherIcon icon="twitter" />
                                                        </i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="feather-facebook" >
                                                            <FeatherIcon icon="facebook" />
                                                        </i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="feather-linkedin" >
                                                        <FeatherIcon icon="linkedin" />
                                                        </i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="feather-instagram">
                                                        <FeatherIcon icon="instagram" />
                                                        </i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="feather-youtube">
                                                        <FeatherIcon icon="youtube" />
                                                        </i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Blog Details*/}
                    </div>
                </div>

            </div>
            {/* /Main Wrapper */}

        </>
    )
}

export default Blogdetails
