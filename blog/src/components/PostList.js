import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";
import UserHeader from "./UserHeader";

function PostList(props) {
  useEffect(() => {
    props.fetchPosts();
  }, []);
  console.log("render list");
  const list = props.posts.map((post) => (
    <div className="item" key={post.id}>
      <i className="large middle aligned icon user" />
      <div className="content">
        <div className="description">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
        <UserHeader userId={post.userId} />
      </div>
    </div>
  ));
  return <div className="ui relaxed divided list">{list}</div>;
}

const mapStateToProp = (state) => {
  return { posts: state.posts };
};
export default connect(mapStateToProp, { fetchPosts })(PostList);
