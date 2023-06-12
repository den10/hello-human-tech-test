import React, { FC, SVGProps } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import cx from "classnames";
import { Link } from "wouter";

export interface BreadcrumbLink {
  name: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
  href: string;
  current?: boolean;
  isDisabled?: boolean;
}

export interface BreadcrumbProps {
  links: BreadcrumbLink[];
}

export const Breadcrumb: FC<BreadcrumbProps> = ({ links }) => (
  <nav className="flex w-full overflow-x-auto no-scrollbar" aria-label="Breadcrumb">
    <ul className="flex space-x-4 px-4 border border-gray-700 rounded-lg">
      <li className="flex">
        <div className="flex items-center">
          <Link to="/" className="text-gray-400 hover:text-blue-400 transition-hover">
            <ChevronLeftIcon className="flex-shrink-0 w-5 h-5" aria-hidden="true" />
            <span className="sr-only">Back</span>
          </Link>
        </div>
      </li>

      {links.map((link) => (
        <li key={link.name}>
          <div className="flex items-center">
            <svg
              className="h-8 w-3.5 flex-shrink-0 text-gray-700"
              viewBox="0 0 24 44"
              preserveAspectRatio="none"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
            </svg>
            <Link to={link.href}>
              <span
                className={cx(
                  "whitespace-nowrap ml-5 text-sm font-medium hover:text-blue-400 transition-hover",
                  link.current ? "text-blue-400" : "text-gray-400"
                )}
              >
                {link.icon ? (
                  <link.icon className="flex-shrink-0 w-5 h-5" aria-hidden="true" />
                ) : (
                  link.name
                )}
              </span>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  </nav>
);
