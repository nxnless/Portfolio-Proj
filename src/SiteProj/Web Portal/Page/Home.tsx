import { useState } from "react";

type AppItem = {
  name: string;
  desc: string;
  icon: string;
};

const menu = ["หน้าแรก", "เอกสาร", "ทีมงาน", "ตั้งค่า"];

const apps: AppItem[] = [
  { name: "อีเมล", desc: "จัดการอีเมลของคุณ", icon: "✉️" },
  { name: "ปฏิทิน", desc: "ตารางนัดหมาย", icon: "📅" },
  { name: "เอกสาร", desc: "ไฟล์และเอกสารทีม", icon: "📄" },
  { name: "แชท", desc: "พูดคุยกับทีม", icon: "💬" },
  { name: "HR", desc: "ลา / เงินเดือน", icon: "🧑‍💼" },
  { name: "รายงาน", desc: "สรุปผลงาน", icon: "📊" },
];

const announcements = [
  { tag: "แจ้งเตือน", title: "ปิดระบบซ่อมบำรุง", date: "15 ส.ค. 2569" },
  { tag: "อีเวนต์", title: "อบรมพนักงานใหม่", date: "20 ส.ค. 2569" },
  { tag: "HR", title: "เปิดรับสมัครวันหยุดพักผ่อน", date: "1 ก.ย. 2569" },
];

export default function Portal() {
  const [active, setActive] = useState("หน้าแรก");
  const [query, setQuery] = useState("");

  const filteredApps = apps.filter((a) =>
    a.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className="w-56 bg-slate-800 text-white flex flex-col p-4 gap-1">
        <div className="flex items-center gap-2 px-2 pb-6">
          <span className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center font-bold">
            P
          </span>
          <span className="font-semibold text-lg">MyPortal</span>
        </div>
        <nav className="flex flex-col gap-1">
          {menu.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`text-left px-3 py-2 rounded-lg text-sm transition ${
                active === item
                  ? "bg-blue-500 text-white"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <header className="flex items-center gap-4 px-7 py-4 bg-white border-b border-gray-200">
          <h1 className="text-lg font-semibold flex-shrink-0">{active}</h1>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ค้นหาแอป..."
            className="flex-1 max-w-xs border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
          <span className="text-sm text-gray-500">👤 สมชาย</span>
        </header>

        <section className="p-7 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Apps grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 content-start">
            {filteredApps.map((app) => (
              <button
                key={app.name}
                className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-start gap-1 text-left hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <span className="text-2xl">{app.icon}</span>
                <span className="font-semibold text-sm">{app.name}</span>
                <span className="text-xs text-gray-500">{app.desc}</span>
              </button>
            ))}
            {filteredApps.length === 0 && (
              <p className="text-gray-400 col-span-full">ไม่พบแอปที่ค้นหา</p>
            )}
          </div>

          {/* Announcements */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 self-start">
            <h2 className="text-base font-semibold mb-3">ประกาศล่าสุด</h2>
            <ul className="flex flex-col gap-3 text-sm">
              {announcements.map((a, i) => (
                <li
                  key={a.title}
                  className={
                    i < announcements.length - 1
                      ? "border-b border-gray-100 pb-2"
                      : ""
                  }
                >
                  <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-semibold px-2 py-0.5 rounded-full mb-1">
                    {a.tag}
                  </span>
                  <p className="font-medium">{a.title}</p>
                  <p className="text-gray-400">{a.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
