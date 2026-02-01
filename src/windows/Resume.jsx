import WindowWrapper from "../hoc/WindowWrapper";
import WindowControls from "../components/WindowControls";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>
      </div>

      <div className="flex flex-col items-center justify-center h-full bg-gray-50 p-8">
        <div className="text-center">
          <Download className="mx-auto mb-4 text-blue-600" size={64} />
          <h3 className="text-xl font-semibold mb-2">Resume.pdf</h3>
          <p className="text-gray-600 mb-6">
            Click the button below to download my resume
          </p>

          <a
            href="/files/resume.pdf"
            download="Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
