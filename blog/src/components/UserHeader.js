import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
function UserHeader(props) {
  console.log("user header" + props);
  useEffect(() => {
    props.fetchUser(props.userId);
  }, []);

  if (!props.user) {
    return null;
  }
  return <div className="header">{props.user.name}</div>;
}
const mapStateToProps = (state, ownProperty) => {
  return { user: state.users.find((user) => user.id === ownProperty.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
