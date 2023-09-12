import React from "react";

const UserCard = () => {
  return (
    <div className="border-[1px] p-4 cursor-pointer">
      <div className="flex gap-2">
        <div className="flex justify-center">
          <input type="checkbox" />
        </div>
        <div className="flex justify-between w-full">
          <div>
            <h4 className="font-semibold">Amit RG</h4>
            <p>Facebook DM</p>
          </div>
          <p>10m</p>
        </div>
      </div>
      <div>
        <h4>Awesome Product</h4>
        <p className="truncate">
          Hey There! I probably did one the Lorem ipsum, dolor sit amet
          consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default UserCard;
