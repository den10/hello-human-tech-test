import React, { FC } from "react";
import { getImageUrl } from "../../utils";

export interface PersonThumbnailProps {
  name: string;
  role: string;
  profileImage: string;
}

export const PersonThumbnail: FC<PersonThumbnailProps> = ({
  name,
  role,
  profileImage,
}) => (
  <div className="group block flex-shrink-0">
    <div className="flex items-center">
      <div>
        <img
          className="inline-block w-20 rounded-lg"
          src={getImageUrl(profileImage)}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = "http://via.placeholder.com/500x500?text=No+Image";
          }}
          alt={name}
        />
      </div>
      <div className="ml-3">
        <p className="text-base font-medium text-slate-100 ">{name}</p>
        <p className="text-sm text-slate-200 ">{role}</p>
      </div>
    </div>
  </div>
);
