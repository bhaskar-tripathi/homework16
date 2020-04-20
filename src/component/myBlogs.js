import React, { useEffect, useState } from "react";
import API from "../component/utils/API";
import ContentSection from "./contentSection";
import BlogItem from "./blogItem";

function MyBlogs() {
    const [blogsState, setBlogsState] = useState([]);

    useEffect(() => {
        API.getMyBlogs()
            .then(res => {
                setBlogsState(res);
                console.log(res);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <ContentSection>
            <div className="h1 my-5">My Blogs</div>
            <ul className="list-unstyled">
                {blogsState !== undefined
                    ? (blogsState.length > 0
                        ? blogsState.map(blogItem => (
                            <BlogItem blog={blogItem}></BlogItem>
                        ))
                        : ""
                    )
                    : ""
                }
            </ul>
        </ContentSection>
    )

}

export default MyBlogs;