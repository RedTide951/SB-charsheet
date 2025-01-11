import React from "react";

const NameComponent = () => {
  return (
    <div>
      <label className="form-control w-full max-w-xs">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
    </div>
  );
};

export default NameComponent;
