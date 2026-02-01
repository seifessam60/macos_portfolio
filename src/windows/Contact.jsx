import WindowControls from "../components/WindowControls";
import { socials } from "../constants/index";
import WindowWrapper from "../hoc/WindowWrapper";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target={"contact"} />
        <h2>Contact</h2>
      </div>
      <div className="p-5 space-y-5">
        <img
          src="/images/contact.jpg"
          alt="contact"
          className="w-20 rounded-full"
        />
        <h3>Let's Connect</h3>
        <p>
          Wanna Build a Website? Portfolio or E-Commerce? Let's Talk About it
        </p>
        <p>
          Contact Me Via Email:
          <a
            className="cursor-pointer text-blue-500"
            href="mailto:seifessam60@gmail.com"
          >
            {" "}
            seifessam60@gmail.com
          </a>
        </p>
        <ul>
          {socials.map(({ id, bg, icon, text, link }) => (
            <li key={id} style={{ background: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
