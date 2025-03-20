import React from "react";
import {
  Home,
  BookText,
  TvMinimalPlay,
  Video,
  Music,
  Instagram,
  Dumbbell,
  Cpu,
  Plane,
  NotebookPen,
} from "lucide-react";
import SideBarComponent from "./SideBarComponent";
import SideBarItems from "./SideBarItems";
import SearchBar from "./SeachBar";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
   
      <div className="flex flex-1">
        
        <SideBarComponent>
          <SideBarItems
            href="/"
            icon={<Home size={20} />}
            text="Home"
            active={false}
          />
          <SideBarItems
            href="/book-categories"
            icon={<BookText size={20} />}
            text="Book Categories"
            active={false}
          />
          <SideBarItems
            href="/old-school-cartoons"
            icon={<TvMinimalPlay size={20} />}
            text="Old-School Cartoons"
            active={false}
          />
          <SideBarItems
            href="#"
            icon={<Video size={20} />}
            text="Movies & TV Shows"
            active={false}
          />
          <SideBarItems
            href="#"
            icon={<Music size={20} />}
            text="Music"
            active={false}
          />
          <SideBarItems
            href="#"
            icon={<Instagram size={20} />}
            text="Photography"
            active={false}
          />
          <SideBarItems
            href="#"
            icon={<Dumbbell size={20} />}
            text="Sports & Fitness"
            active={false}
          />
          <SideBarItems
            href="#"
            icon={<Cpu size={20} />}
            text="Technology & Gadgets"
            active={false}
          />
          <SideBarItems
            href="#"
            icon={<Plane size={20} />}
            text="Travel & Exploration"
            active={false}
          />
          <SideBarItems
            href="#"
            icon={<NotebookPen size={20} />}
            text="Writing & Journaling"
            active={false}
          />
        </SideBarComponent>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Search Bar */}
          <div className="mb-6">
            <SearchBar />
          </div>

          {/* Header Inside Content */}
          {/* <div className="mb-6">
            <HeaderInsideContent />
          </div> */}

          {/* Page Content */}
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
