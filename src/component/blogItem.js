import React from "react";

function BlogItem(props) {
    return (
        <li className=" my-2 border p-4">
            <div className="">
                <div className="row justify-content-between">
                    <div className="col text-left">
                        <a href={props.blog.tags[0].url} className="tag"target="_blank" rel="noopener">
                            {props.blog.tags[0].displayName}</a>
                    </div>
                    <div className="col text-right">
                        {new Date(props.blog.published).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                </div>
                <a href={props.blog.url} className="text-decoration-none my-2 blogTitle"
                    target="_blank" rel="noopener">{props.blog.displayName}</a>
                <div className="blogContent">{props.blog.content}</div>
                <div className="row justify-content-left my-3">
                    <div className="col ">
                    <i className="far fa-comment-alt mr-4 mr-2 blogStats"><span className="ml-2">{props.blog.comments}</span></i> 
                    <i className="far fa-thumbs-up mr-4 mr-2 blogStats"><span className="ml-2">{props.blog.likes}</span></i>
                    </div>
                </div>

            </div>
        </li>
    )
}

export default BlogItem;