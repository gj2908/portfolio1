// Project data for the portfolio
export interface Project {
    id: number
    title: string
    description: string
    tags: string[]
    category: "IoT" | "Embedded Systems" | "Web Development"
    date: string
    githubUrl?: string
    details: string[]
}

export const projects: Project[] = [
    {
        id: 1,
        title: "IoT Based Asthma Detection Smart Band",
        description: "Wearable smart band equipped with environmental and physiological sensors to monitor asthma triggers in real-time.",
        tags: ["Arduino Uno R4", "Python", "C++", "Embedded C", "IoT Sensors", "ESP32"],
        category: "IoT",
        date: "Jan 2026",
        githubUrl: "https://github.com/gj2908/SmartAsthamaAlert",
        details: [
            "Designed a wearable smart band equipped with environmental and physiological sensors to monitor asthma triggers in real-time",
            "Developed a microcontroller-based system (ESP32) to process sensor data and transmit alerts to a companion application via Bluetooth/Wi-Fi",
            "Implemented algorithms to detect abnormalities in vital signs, providing early warnings to the user",
            "Created a functional prototype that tracks real-time vitals and transmits alerts to a companion dashboard for early detection of asthma attacks"
        ]
    },
    {
        id: 2,
        title: "Fire Alarm System Integrated with Home Automation",
        description: "Integrated system connecting fire detection sensors with home automation for immediate response.",
        tags: ["C++", "Arduino", "ESP32", "IoT Sensors"],
        category: "IoT",
        date: "Nov 2025",
        details: [
            "Designed an integrated system connecting fire detection sensors with home automation for immediate response",
            "Academic project demonstrating IoT and home automation integration"
        ]
    },
    {
        id: 3,
        title: "Attendance Management System",
        description: "Django + SQLite based automated attendance system with admin, faculty and student dashboards. Increased data handling efficiency by 40%.",
        tags: ["Django", "SQLite", "Python", "HTML", "CSS"],
        category: "Web Development",
        date: "Feb 2025 - Mar 2025",
        githubUrl: "https://github.com/gj2908/ERP2.5",
        details: [
            "Django + SQLite based automated attendance system",
            "Admin, Faculty and Student Dashboards were introduced",
            "CSV/Excel import, admin dashboard, role-based login",
            "Increased data handling efficiency by 40%"
        ]
    },
    {
        id: 4,
        title: "Long Range Wireless Networking for Environmental Monitoring",
        description: "LoRa-based long-range sensor network with dashboard for real-time monitoring. Achieved ~3 km communication range.",
        tags: ["LoRaWAN", "Embedded C", "Sensors", "C++"],
        category: "Embedded Systems",
        date: "Mar 2024",
        githubUrl: "https://github.com/gj2908/Ardubots",
        details: [
            "Built LoRa-based long-range sensor network",
            "Created dashboard for real-time monitoring",
            "Achieved ~3 km communication range",
            "Competition project showcasing wireless communication capabilities"
        ]
    }
]
