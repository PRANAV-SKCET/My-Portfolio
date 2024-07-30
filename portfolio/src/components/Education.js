import '../cssfolder/Education.css';

export default function Education() {
    return (
        <div className="education-container">
            <h1 className="education-title">Education</h1>
            <div className="education-item">
                <h2 className="education-degree">Bachelor of Technology (B.Tech.) - Information Technology</h2>
                <p className="education-institution">Sri Krishna College of Engineering and Technology, Coimbatore</p>
                <p className="education-duration">Oct 2022 - May 2026 (Expected)</p>
                <p className="education-cgpa">CGPA: 8.12</p>
            </div>
            <div className="education-item">
                <h2 className="education-degree">High School Diploma</h2>
                <p className="education-institution">Ponnu Matric. Hr. Sec. School, Dharapuram</p>
                <p className="education-10th">10th: 98.20% (2020 passed out)</p>
                <p className="education-12th">12th: 92.60% (2022 passed out)</p>
            </div>
        </div>
    );
}
