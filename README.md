# 🚀 Web Dev Portfolio & Modular Showcase

โปรเจกต์นี้จัดทำขึ้นเพื่อเป็น **Interactive Portfolio** รวมผลงานการพัฒนาเว็บไซต์และเว็บแอปพลิเคชันต่างๆ ไว้ในที่เดียว โดยเน้นแนวคิด **"Reusability & Modular Architecture"** — นำโค้ดหรือฟีเจอร์ที่เคยพัฒนาแล้วมาปรับแต่ง พัฒนาต่อยอด และจัดเก็บอย่างเป็นระบบ

---

## 💡 Core Concept

นอกจากจะเป็นพื้นที่จัดแสดงผลงานแล้ว จุดเด่นและความพิเศษของโปรเจกต์นี้คือ **โครงสร้างแบบ Modular** 

> ✨ **Drop-in `src` Ready:**  
> ทุกๆ Sub-project/Site ที่อยู่ในคลังนี้ ถูกออกแบบมาให้มีความเป็นเอกเทศ (Decoupled) คุณสามารถคัดลอกโฟลเดอร์ของไซต์นั้นๆ ไป **วางทดแทนโฟลเดอร์ `src/` ของโปรเจกต์ใหม่** (เช่น React, Vue, Next.js หรือ Vite starter) เพื่อเริ่มพัฒนาโปรเจกต์ใหม่ด้วยดีไซน์และฟังก์ชันพื้นฐานได้ทันทีโดยไม่ต้องเขียนใหม่ตั้งแต่ต้น!

---

## 🔥 Key Features

- **Centralized Hub:** หน้าพอร์ตโฟลิโอหลักสำหรับเรียกดูและทดลองใช้งาน Sub-projects ทั้งหมด
- **High Reusability:** รวม UI components, Hooks และ Utilities ที่ผ่านการ Refactor ให้พร้อมดึงไปใช้ซ้ำ
- **Plug-and-Play `src` Directory:** แต่ละ Sub-project แยกไฟล์อย่างชัดเจน สามารถใช้เป็น Boilerplate/Template สำหรับโปรเจกต์ใหม่ได้เลย
- **Customizable:** รองรับการปรับแต่ง Theme, Config และ Component สไตล์ต่างๆ ได้ง่าย

---

## 📁 Project Structure

```text
.
├── src/                     # Source Code ของตัว Portfolio หลัก
│   ├── components/          # Shared UI Components
│   └── projects/            # รวม Sub-projects ต่างๆ
│       ├── project-alpha/   # 👈 สามารถก๊อปปี้เนื้อหาไปใส่ใน src/ ของโปรเจกต์ใหม่ได้เลย
│       ├── project-beta/
│       └── project-gamma/
├── public/                  # Static Assets
└── package.json
