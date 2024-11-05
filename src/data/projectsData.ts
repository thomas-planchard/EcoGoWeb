import projectOneImage from '../assets/projects/adopte1candidat.webp';
import projectOneImage2 from '../assets/projects/adopte1.png';
import projectTwoImage from '../assets/projects/virtualProcessor.png';
import projectTwoImage2 from '../assets/projects/virtualProcessor2.png';
import projectThreeImage from '../assets/projects/fpga.jpeg';
import projectThreeImage2 from '../assets/projects/frogger.png';
import projectFourImage from '../assets/projects/assembly.jpg';
import projectFourImage2 from '../assets/projects/pacman.jpg';
import projectFiveImage from '../assets/projects/wineMixer.jpg';
import projectFiveImage2 from '../assets/projects/champagne.png';
import projectSixImage from '../assets/projects/unrealEngine.jpg';
import projectSixImage2 from '../assets/projects/unreal.png';
import projectSevenImage from '../assets/projects/screenManagement.jpg';
import projectSevenImage2 from '../assets/projects/jacobi.webp';
import projectEightImage from '../assets/projects/aiRecognizing.jpg';
import projectEightImage2 from '../assets/projects/englishRecognition.jpg';



const projectsData = [
    {
        "id": "project1",
        "title": "Adopte un Candidat",
        "client": "We Are Evolution",
        "date": "June 2024",
        "expertise": "Project Manager, UI/UX design",
        "platforms": "iOS, Android, and Web",
        "deliverables": "UI Screens, Functional Specification",
        "repository": "https://github.com/algosup/2023-2024-project-5-flutter-team-8",
        "image": projectOneImage,
        "image2": projectOneImage2,
        "overview": "Adopte un Candidat is a recruitment app that prioritizes candidates' soft skills over traditional qualifications. It aims to make recruitment fairer by emphasizing behavioral traits and removing bias through anonymization.",
        "execution": "Developed with Flutter for cross-platform compatibility, this project involves implementing front-end components for both candidates and companies. The app includes a unique job-browsing interface with animated job bubbles, candidate-corporate matching based on soft skills, and secure, anonymous candidate profiles. The project also includes certification features for validating soft skills.",
        "results": "The final app is expected to streamline the recruitment process by focusing on soft skills, offering an engaging and accessible interface for candidates, and providing companies with relevant soft-skill matches. Scheduled for release in June 2024, the app aims to innovate recruitment methods and promote fair hiring practices."
    },
    {
        "id": "project2",
        "title": "Virtual Processor",
        "client": "ALGOSUP",
        "date": "February 2024",
        "expertise": "Technical Lead, Architecture Design",
        "platforms": "Cross-platform (Linux, Windows, macOS)",
        "deliverables": "Virtual Processor, Assembly Language Interpreter, Technical Specifications",
        "repository": "https://github.com/algosup/2023-2024-project-3-virtual-processor-team-1",
        "image": projectTwoImage,
        "image2": projectTwoImage2,
        "overview": "The Virtual Processor project aims to develop a custom assembly language interpreter and virtual processor. It is designed to execute assembly code and emulate a 32-bit processor using only C standard libraries.",
        "execution": "This project involves building a custom assembly language and virtual processor, implemented in portable C. Key features include handling assembly syntax, parsing, tokenization, and code generation. The virtual processor is equipped with essential registers, a virtual terminal, and a structured error handling system.",
        "results": "Upon completion, this project will provide an effective learning platform for assembly language, CPU function, and low-level programming. The final product includes a virtual processor capable of handling arithmetic operations, memory management, and error detection, with a code execution environment designed for educational and development purposes."
      },
      {
        "id": "project3",
        "title": "Frogger Game on FPGA",
        "client": "ALGOSUP",
        "date": "October 2024",
        "expertise": "Tech Writer, Game Development on FPGA with Verilog",
        "platforms": "FPGA (Go Board), VGA Display",
        "deliverables": "User Manual",
        "repository": "https://github.com/algosup/2024-2025-project-1-fpga-team-7",
        "image": projectThreeImage,
        "image2": projectThreeImage2,
        "overview": "This project involved designing and implementing a classic Frogger-style game on an FPGA board. The game was developed in Verilog and deployed on the Go Board, a custom FPGA development board, with graphics displayed via a VGA monitor. Players control a frog character, navigating it across roads with moving cars, aiming to reach the top of the screen without collision. Key challenges included managing limited FPGA resources, optimizing sprite memory, and creating responsive controls on a constrained hardware platform.",
        "execution": "Developed using Verilog, the game is fully functional on the Go Board, taking advantage of FPGA's parallel processing to handle real-time interactions. The codebase includes modules for player controls, VGA synchronization, and sprite display, enabling efficient use of FPGA resources. The team devised a memory management strategy to load and display sprites with a limited color palette, achieving an optimized display at 640x480 resolution. Gameplay mechanics such as collision detection, level progression, and speed variation are integrated, with increased car speeds on higher levels and a reset function to restart the game upon player loss. Additional features like color-coded cars and animations were implemented to enhance visual appeal.",
        "results": "The project successfully demonstrated the feasibility of creating an arcade-style game on FPGA hardware, providing an engaging gaming experience within FPGA constraints. All core features were implemented as specified in the functional and technical documentation, with smooth character movement, effective collision detection, and a scalable difficulty level. The project served as a hands-on learning experience for FPGA programming, offering valuable insights into parallelism, real-time data processing, and hardware-driven game design. Through extensive testing and iterative improvement, the final product achieves stable performance, delivering an educational and entertaining application that fulfills all project requirements."
    }, 
    {
      "id": "project4",
      "title": "Pac-Man Clone in x86 Assembly",
      "client": "ALGOSUP",
      "date": "November 2023",
      "expertise": "Quality Assurance, x86 Assembly Language",
      "platforms": "DOSBox Emulator, x86 Assembly",
      "deliverables": "Test Plan, Code Base",
      "repository": "https://github.com/algosup/2023-2024-project-2-x86-retrogaming-team-4",
      "image": projectFourImage,
      "image2": projectFourImage2,
      "overview": "This project recreates the classic Pac-Man game using x86 assembly language, emulated within DOSBox. The aim is to deliver a nostalgic experience that replicates the original gameplay, incorporating game mechanics such as ghost AI, scorekeeping, power-ups, and fruit bonuses. Major challenges include accurately replicating the game logic, especially ghost behaviors, in a low-level programming environment with strict performance and memory constraints.",
      "execution": "The project uses a modular approach in assembly, with distinct files handling graphics, collision detection, game logic, and sound. Ghost AI was emulated by programming unique movement behaviors for each ghost (e.g., Blinky chases Pac-Man, Pinky targets based on direction). The graphics, managed through VGA mode, mimic the original 16-color palette. Player movement and game interactions are handled at 24 FPS, with real-time response to input, sound effects, and animations.",
      "results": "The final product successfully captures the original gameplay of Pac-Man within the DOSBox environment, including accurate ghost behaviors, pellet and power-up mechanics, and sound effects. The game is accessible to players via an easy-to-use interface, offering both nostalgia and new challenges. Testing confirmed responsive controls, collision detection accuracy, and adherence to gameplay rules, providing a polished and immersive experience."
    }, 
    {
      "id": "project5",
      "title": "Krug Champagne Blending Optimization",
      "client": "Krug Champagne",
      "date": "November 2023",
      "expertise": "Project Management, Algorithm Development",
      "platforms": "Console Application (Windows & Mac), C# .NET 6.0",
      "deliverables": "Project Management Artefacts, Blending Algorithm Console Application",
      "repository": "https://github.com/algosup/2022-2023-project-5-algorithmics-Team-7/tree/main",
      "image": projectFiveImage,
      "image2": projectFiveImage2,
      "overview": "The Krug Champagne project aims to develop a console application that can optimize the wine blending process by determining the most efficient sequence of transfers between tanks to achieve a target blend composition. The primary objective is to minimize the number of steps while adhering to specific wine blending constraints, such as avoiding partially full or empty tanks. The application will help Krug's Cellar Master in creating new blends efficiently, reducing waste, and ensuring quality.",
      "execution": "The application is developed in C# (.NET 6.0) and operates as a console tool. It receives blending requirements and tank specifications as input files and performs calculations using an iterative, heuristic-based approach to suggest the optimal blending steps. Key functions include tank combination evaluations, Euclidean distance-based blend similarity scoring, and a robust transfer-checking system to ensure legal operations at each step. The application's architecture is designed to handle complex scenarios (up to 400 wines and 300 tanks), emphasizing correctness, repeatability, and performance scalability.",
      "results": "The project resulted in a functional blending optimizer capable of generating efficient blending steps that closely match the desired wine composition. The tool has been validated with various test cases and can scale to handle large blending requirements. The algorithm performs well under complex scenarios, maintaining accuracy and efficiency, and preventing oxidation risks by ensuring no tanks are left partially filled. It allows Krug Champagne to improve operational efficiency, minimize waste, and deliver consistent quality in their blends.",
    }, 
    {
      "id": "project6",
      "title": "Ronin's Revenge",
      "client": "ALGOSUP",
      "date": "November 2023",
      "expertise": "Game Development, Unreal Engine 4",
      "platforms": "Windows, MacOS",
      "deliverables": "Game, Test Plan",
      "repository": "https://github.com/algosup/2022-2023-project-4-game-design-Team-3",
      "image": projectSixImage,
      "image2": projectSixImage2,
      "overview": "Ronin's Revenge is a 2D side-scrolling action game where players control Kazuo, a samurai on a journey to reclaim his honor by seeking revenge against a treacherous lord. Players navigate challenging levels filled with enemies, obstacles, and timed gameplay. The game's core elements include high-difficulty combat, time-bound missions, and dynamic boss battles. Using the Unreal Engine, the game offers fast-paced action, fluid animations, and an immersive samurai experience inspired by feudal Japan.",
      "execution": "Developed using Unreal Engine 4, Ronin's Revenge employs both Blueprints and traditional coding for gameplay mechanics and animations. Players experience responsive movement, varied attack combinations, and dashing abilities that aid in navigating complex environments. Levels are crafted with intricate enemy designs, time-based challenges, and layered progression, ensuring an intense and immersive experience. Game assets include high-quality 2D sprites, character animations, and diverse level backgrounds, while optimization techniques maintain performance consistency.",
      "results": "The Ronin's Revenge project delivered a complete and engaging gameplay experience, providing a challenging 2D platform for hardcore gamers. The game captures the samurai's journey with smooth animations, precise controls, and diverse enemies. Levels are meticulously designed for replayability, with each level testing players' skills and adaptability. Optimizations ensure smooth performance across platforms, while Blueprints and Unreal Engine's powerful tools enable streamlined development.",
  }, 
  {
    "id": "project7",
    "title": "Smart Signage Project",
    "client": "Jacobi Group",
    "date": "2022-11-25",
    "expertise": "Web Development, Cloud Hosting",
    "platforms": "Windows-based Mini PC with Web Application",
    "deliverables": "Web Application, Code Base",
    "repository": "https://github.com/algosup/2022-2023-project-2-factory-display-Project-3-group",
    "image": projectSevenImage,
    "image2": projectSevenImage2,
    "overview": "The Smart Signage Project for Jacobi Group aims to modernize internal communication by displaying real-time information on monitors within factory premises. Through a web application interface, Jacobi employees can manage and program campaigns, monitor screens remotely, and ensure content display across multiple devices in designated locations. This solution replaces traditional paper-based communication methods, offering a more efficient, eco-friendly approach.",
    "execution": "Developed using Node.js and Express framework, the web application is hosted on Microsoft Azure with Firebase authentication and MongoDB database integration for campaign management. The application is accessible via subdomains, enabling specific content display for each screen. Security measures such as password encryption and user-specific logins ensure secure access, while the system’s automatic startup and fullscreen mode provide uninterrupted display on Windows-based mini PCs.",
    "results": "The project successfully digitizes communication within Jacobi’s factory. Employees can easily manage campaigns through a secure web interface, set up dynamic screen displays, and control the content across multiple screens. The system reduces time spent on paper communication, aligns with environmental goals, and allows expansion to other Jacobi facilities.",
  }, 
  {
    "id": "project8",
    "title": "Language Detection Device Project",
    "client": "ALGOSUP",
    "date": "2022-04-25",
    "expertise": "AI, Deep Learning, Language Detection",
    "platforms": "Raspberry Pi 4 with LED Display for Language Indication",
    "deliverables": "Functional Specifications, Technical Documentation, AI Model, Codebase, Hardware Setup Guide",
    "repository": "https://github.com/algosup/2022-Project-Artificial-Intelligence-Group-B",
    "image": projectEightImage,
    "image2": projectEightImage2,
    "overview": "The Language Detection Device Project aims to develop an AI-powered system that detects spoken language, specifically distinguishing between English and French. Using a Raspberry Pi 4, the device listens to nearby conversations and indicates the detected language by lighting LEDs in specific colors: green for English, red for French, and blue for other languages or no detection. This device encourages students to speak English in designated areas and provides immediate feedback on language usage.",
    "execution": "The system employs machine learning, specifically deep learning with a neural network model, to recognize and classify languages based on spectrogram images generated from audio data. Training is conducted using TensorFlow and Keras libraries, while model deployment on the Raspberry Pi uses TensorFlow Lite for optimized performance. LEDs connected to the Pi’s GPIO pins visually display the language detection result, providing real-time feedback without storing or transmitting conversation data.",
    "results": "The device successfully detects spoken language in real-time, reinforcing language practice policies by visually indicating when English or French is spoken. By processing audio locally without internet connection, it safeguards user privacy while offering an effective language detection tool for educational settings.",
  }         
  ];
  
export default projectsData;