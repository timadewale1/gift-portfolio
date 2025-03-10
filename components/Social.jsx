import Link from "next/link";

import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/_thegeeft?igsh=Y2V1dGY0M2ltd2s3",
  },
  { icon: <FaLinkedinIn />, path: "www.linkedin.com/in/nwamadu" },
  { icon: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
