import Card from "./components/Card";

function App() {
  const developers = [
    {
      id: 1,
      name: "John Carter",
      role: "Frontend Developer",
      price: 45,
      status: "Available",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      intro:
        "Passionate React developer with 3 years of experience building responsive web applications.",
    },
    {
      id: 2,
      name: "Emma Wilson",
      role: "UI/UX Designer",
      price: 50,
      status: "Available",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      intro:
        "Creative designer who loves crafting modern and user-friendly interfaces.",
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Backend Developer",
      price: 60,
      status: "Busy",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      intro:
        "Spring Boot and Java developer experienced in scalable REST APIs.",
    },
    {
      id: 4,
      name: "Sophia Davis",
      role: "Full Stack Developer",
      price: 70,
      status: "Available",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      intro:
        "MERN stack developer with a strong passion for clean architecture.",
    },
    {
      id: 5,
      name: "Daniel Smith",
      role: "DevOps Engineer",
      price: 80,
      status: "Offline",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      intro: "AWS and Docker enthusiast focused on deployment automation.",
    },
    {
      id: 6,
      name: "Olivia Johnson",
      role: "Mobile Developer",
      price: 55,
      status: "Available",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      intro:
        "Flutter developer creating beautiful cross-platform applications.",
    },
    {
      id: 7,
      name: "James Anderson",
      role: "Data Analyst",
      price: 52,
      status: "Busy",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      intro: "Transforms raw data into meaningful business insights.",
    },
    {
      id: 8,
      name: "Ava Martinez",
      role: "Cloud Engineer",
      price: 90,
      status: "Available",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      intro: "Cloud infrastructure expert with Azure and AWS experience.",
    },
    {
      id: 9,
      name: "William Taylor",
      role: "AI Engineer",
      price: 95,
      status: "Available",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      intro: "Builds intelligent systems using machine learning and Python.",
    },
    {
      id: 10,
      name: "Mia Thomas",
      role: "Cyber Security Engineer",
      price: 85,
      status: "Offline",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      intro:
        "Protects applications and networks with modern security practices.",
    },
  ];

  return (
    <div className="parent">
      {
        developers.map((element, idx) => {
            return <div key={idx}>
              <Card id={element.id} name={element.name} role={element.role} price={element.price} status={element.status} image={element.image} intro={element.intro}/>
            </div>
        })
      }
    </div>
  );
}

export default App;
