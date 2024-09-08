// SocialMediaButtons.tsx
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CodeIcon from "@mui/icons-material/Code";
import media from "../../constans/links";
import Button from "../Button/Button";
import './SocialMedia.scss'


// Typ dla social media linków
interface SocialMediaLink {
  name: string;
  icon: JSX.Element;
  url: string;
}

const SocialMedia: React.FC = () => {
  const socialMediaLinks: SocialMediaLink[] = [
    { name: "Github", icon: <GitHubIcon />, url: media.github },
    { name: "Linkedin", icon: <LinkedInIcon />, url: media.linkedin },
    { name: "Facebook", icon: <FacebookIcon />, url: media.facebook },
    { name: "Instagram", icon: <InstagramIcon />, url: media.instagram },
    { name: "CodePen", icon: <CodeIcon />, url: media.codePen },
  ];

  return (
    <div className="media">
      {socialMediaLinks.map((mediaItem, index) => (
        <Button
          key={index}
          theme="dark"
          onClick={() => window.open(mediaItem.url, "_blank")}
        >
          {React.cloneElement(mediaItem.icon, { style: { color: "var(--theme-light)" } })}
          <span>{mediaItem.name}</span>
        </Button>
      ))}
    </div>
  );
};

export default SocialMedia;
