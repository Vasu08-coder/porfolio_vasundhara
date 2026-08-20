import { FaAward } from "react-icons/fa";

const achievements = [
  "Research Paper Author",
  "Runner-Up in Paper Presentation Competition",
  "MERN Stack Internship",
  "Hackathon Participant",
  "Student Leadership Roles"
];

export default function Achievements() {
  return (
    <section>
      <h2>Achievements</h2>

      <div className="achievement-grid">
        {achievements.map((item,index)=>(
          <div key={index} className="card">
            <FaAward size={24}/>
            <p>{item}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
