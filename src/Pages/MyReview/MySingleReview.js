import React from "react";

const MySingleReview = ({ review }) => {
  const { serviceName, userName, reviews, userImg, userEmail } = review;

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
        <button className="btn btn-ghost btn-xs"> {serviceName}</button>
      </th>
    </tr>
  );
};

export default MySingleReview;
