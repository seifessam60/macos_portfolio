import { Search } from "lucide-react";
import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper";
import { locations } from "../constants/index";
import useLocationStore from "../store/location";
import useWindowStore from "../store/window";

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");
    openWindow(`${item.fileType}${item.kind}`, item);
  };
  const renderList = (name, items) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((location) => (
          <li
            key={location.id}
            onClick={() => setActiveLocation(location)}
            className={
              location.id === activeLocation.id ? "active" : "not-active"
            }
          >
            <img src={location.icon} alt={location.name} className="w-4" />
            <p className="text-sm font-medium truncate">{location.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div id="window-header">
        <WindowControls target={"finder"} />
        <Search className="icon" />
      </div>
      <div className="bg-white flex h-full">
        <div className="sidebar">
          {renderList("Favorites", Object.values(locations))}

          {renderList("Work", locations.work.children)}
        </div>
        <ul className="content">
          {activeLocation.children.map((location) => (
            <li
              key={location.id}
              className={location.position}
              onClick={() => openItem(location)}
            >
              <img src={location.icon} alt={location.name} />{" "}
              <p>{location.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
