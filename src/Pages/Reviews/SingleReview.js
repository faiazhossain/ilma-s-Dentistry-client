import React from "react";

const SingleReview = ({ review }) => {
  const { userName, serviceName, reviews, userImg, userEmail } = review;
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
    </tr>
  );
};

export default SingleReview;
