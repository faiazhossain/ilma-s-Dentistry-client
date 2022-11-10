import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SingleReview = ({ review, handleDelete, handleEdit }) => {
  console.log("service id");
  console.log(review);
  const { _id, userName, reviews, userImg, userEmail } = review;
  const { user } = useContext(AuthContext);

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={userImg} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div></div>
        </div>
      </td>
      <td>
        {userName}
        <br />
      </td>
      <td>{userEmail}</td>
      <th>
        <button className="btn btn-ghost btn-xs"> {reviews}</button>
      </th>
      <th>
        <Link to={`/updateuser/${_id}`}>
          <button
            onClick={() => handleEdit(_id)}
            className="btn btn-secondary btn-xs"
          >
            Edit
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-primary btn-xs"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default SingleReview;
