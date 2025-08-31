import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faBehance,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="w-full text-center text-sm text-gray-500 backdrop-blur-md dark:bg-white/2 border-t border-white/10 shadow-lg py-6">
      © {new Date().getFullYear()} Darshan Makwana. All rights reserved.
    </footer>
  );
}
