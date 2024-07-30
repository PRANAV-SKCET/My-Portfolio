import '../cssfolder/Home.css';

export default function Home() {
    return (
        <div className="home-container">
            <div className="left-side">
                <h1 className="greeting">Hi, I'm Pranav!</h1>
                <h2 className="title">Web Developer | B.Tech IT Student</h2>
                <p className="intro">
                    I'm a Web Developer student at Sri Krishna College of Engineering and Technology, currently in my 3rd year of B.Tech IT. Based in Dharapuram, I'm passionate about problem-solving and have tackled over 300 problems on LeetCode and more than 50 on GeeksforGeeks. I have experience in Data Structures and Algorithms (DSA) with a particular focus on backtracking and logical thinking. My approach to problem-solving is both analytical and creative, allowing me to tackle complex challenges effectively.
                </p>
            </div>
            <div className="right-side">
                <h3>Contact Me</h3>
                <p><i className="fas fa-envelope"></i><a href="mailto:pranavarulprakash@gmail.com">pranavarulprakash@gmail.com</a></p>
                <p><i className="fas fa-phone"></i><a href="tel:+91 8667455968">+91 8667455968</a></p>
                <p><i className="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/pranav-a-284540258/" target="_blank" rel="noopener noreferrer">Pranav-LinkedIn</a></p>
                <p><i className="fab fa-github"></i><a href="https://github.com/PRANAV-SKCET" target="_blank" rel="noopener noreferrer">PRANAV-SKCET</a></p>
            </div>
        </div>
    );
}
