// Modular data for Work Experiences
const workExperiences = [
  {
    orgLogo: "img/nu_work.svg",
    orgName: "Khoury College of Computer Sciences | Northeastern University",
    role: "Graduate Teaching Assistant",
    period: "Jan. 2025 - Apr. 2025 · 4 mos",
    bullets: [
      "Assisted in teaching the graduate-level CS5100 Foundations of AI course with 130+ students, supporting both theoretical and programming topics",
      "Held regular office hours to explain concepts, reinforce course material, and help students with assignment-related questions",
      "Graded assignments and provided support related to student submissions",
    ],
  },
  {
    orgLogo: "img/au.svg",
    orgName: "Anna University",
    role: "Research Intern",
    period: "Aug. 2023 - Dec. 2023 · 4 mos",
    bullets: [
      "Built generalist reasoning language model by supervised fine-tuning and internal CoT reasoning with STEM datasets",
      "Used compute and cost-efficient fine-tuning method, to fine-tune 7B and 13B parameter models",
      "We beat the SOTA performance of open-source and closed models on various reasoning benchmarks",
    ],
  },
  {
    orgLogo: "img/fedex.png",
    orgName: "FedEx Express",
    role: "SWE-ML Intern",
    period: "May 2023 - Aug. 2023 · 3 mos",
    bullets: [
      "Worked on fine-tuning a large language model (LLM) for assisting L1/L2 Support",
      "Designed and trained a custom CNN model to classify commodities as dangerous or not based on X-Ray images with an 85% accuracy",
      "Built a microservice that extracts key information from invoices that account for over 30% of the shipping volume",
    ],
  },
  {
    orgLogo: "img/au.svg",
    orgName: "Anna University",
    role: "Research Intern",
    period: "Dec. 2022 - May 2023 · 5 mos",
    bullets: [
      "Performed Parameter-Efficient Fine-Tuning on image diffusion models",
      "Modified the image diffusion model to generate a sequence of images to synthesize short videos in real time",
      "Proposed AR hardware device with ASR for real-time voice-to-video transformations (Applied to CSIR funding)",
    ],
  },
  {
    orgLogo: "img/work-logo.png",
    orgName: "Indie App Developer",
    role: "",
    period: "Sep. 2014 - Jul. 2017 · 2 yrs 10 mos",
    bullets: [
      "Built and published over 12 Android apps in the Play Store",
      "They've over 21.5K cumulative installs, and about 17K installs come from the top 2 apps published>",
    ],
  },
];

// Modular data for Projects
const projects = [
  {
    img: "img/coco.png",
    alt: "CoCo - The Multi-Agent Data Consultant",
    title: "CoCo - The Multi-Agent Data Consultant",
    desc: `CoCo is an AI-driven multi-agent voice data consultant that streamlines business research and strategy. Users interact naturally (with voice), and a manager agent coordinates specialized research agents. Results are compiled into customizable presentations with real-time editing and natural language commands.<br><br>Key Features:<ul><li>Conversational data collection via voice</li><li>Multi-agent, in-depth research</li><li>AI-generated, customizable presentations</li><li>Natural language slide editing</li><li>Real-time UI for quick updates</li></ul>`,
    link: "https://devpost.com/software/coco-the-multi-agent-data-consultant",
    linkText: "View Project",
  },
  {
    img: "img/tavgen.png",
    alt: "AI Video Generator",
    title: "TAVGen",
    desc: `In-house, custom generative AI model that creates Khan Academy-style educational videos from text prompts using a novel Text-Code-Video architecture.<br><br>Key Features:<ul><li>Fine-tuned LLM for generating Manim animation code from text prompts</li><li>Neural speech synthesis using Tacotron2 and HiFi-GAN</li><li>Multimodal fusion module for video-audio synchronization</li><li>End-to-end educational video generation pipeline</li><li>Built with Python, Transformers, and Manim</li></ul>`,
    link: "https://x.com/DotVignesh/status/1804522566742057200",
    linkText: "View Project",
  },
  {
    img: "img/cmdf.png",
    alt: "CmdF",
    title: "CmdF",
    desc: `CmdF is a terminal app that enables quick search and navigation through YouTube videos using whisper.cpp and fuzzy string matching.<br><br>Key Features:<ul><li>Search through video content using keyboard shortcuts (Cmd+F)</li><li>Automatic video transcription using whisper.cpp</li><li>Instant navigation to specific timestamps in videos</li><li>Background processing of videos for seamless experience</li><li>Cross-platform terminal-based interface</li></ul>`,
    link: "https://github.com/dotvignesh/CmdF",
    linkText: "View Project",
  },
  {
    img: "img/smarteye.png",
    alt: "smart eye",
    title: "Smart Eye",
    desc: `A project developed with the primary objective of helping the visually impaired with their mobility. It helps to recognize and detect objects in front of them.<br><br>Object Detection:<ul><li>Made using a Raspberry Pi paired with an ultrasonic sensor </li><li>The device beeps to let the user know that an object is present in front of them</li><li>within a 1 metre distance</li></ul><br><br>Object Recognition:<ul><li>Prototype was made using an Android device with a camera</li><li>Compiled a TensorFlow lite model to recognize objects offline</li><li>APIs such as CloudSight were used for image recognition</li><li>The recognised object will be described to the user</li></ul>`,
    link: "https://dev.makerfaire.com/maker/entry/65269/",
    linkText: "View Project",
  },
  {
    img: "img/pdfchat.png",
    alt: "smart eye",
    title: "PDFChat",
    desc: `The PDFChat app allows you to chat with your PDF files using the power of langchain, OpenAI Embeddings, and GPT3.5 in the backend. It uses Streamlit for the user interface.<br><br>One of its standout features is converting uploaded PDFs into vector embeddings, which help connect the PDF content with the language models. Langchain and OpenAI API work together to gather important information from the vector store. This information becomes context for GPT-3.5.<br><br>When you use the app, you can type in questions or statements about the PDF's content. <br><br> The app combines what you input with the context from Langchain and OpenAI Embeddings. This combined context is used to talk with GPT-3.5, generating responses that make sense within the context.<br><br>In a nutshell, the PDFChat app transforms how you interact with PDFs. It lets you not only read them but also have meaningful conversations. Whether you want to understand complex details, ask things, or get insights, the PDFChat app makes working with PDFs more interactive and engaging.`,
    link: "https://github.com/dotvignesh/PDFChat",
    linkText: "View Project",
  },
  {
    img: "img/dApp.png",
    alt: "dApp",
    title: "Decentralized Twitter Clone",
    desc: `I built a basic, anonymous and decentralized version of Twitter on Solidity. <br>The smart contract is deployed on Ethereum Rinkeby Testnet using Alchemy. <br><br>Users can connect their Metamask wallets and tweet on the website. <br>There's a random chance for users to win some ETH (Test ETH) when they tweet.`,
    link: "http://twitter-clone.vigneshraja.repl.co/",
    linkText: "View Project",
  },
  {
    img: "img/digest.png",
    alt: "digest",
    title: "Article Summarizing App",
    desc: `digest is an app that lets you summarize articles using NLP. It cuts down about 75% of an article and retains only the key bits. It puts together content & make them more easy to consume in a beautiful reader view, eliminating all intrusive ads.<br> <br>Moreover all articles you save in digest are stored offline enabling the users to read them anytime, even if the article is pulled from the source site. <br> <br>✓ Designed with elegance <br> A minimalistic approach to the web.<br> <br>✓ Privacy <br>digest throws cookies and trackers off your trail. Articles stored in digest can only be read by user.`,
    link: "https://www.producthunt.com/posts/digest-app",
    linkText: "View on Producthunt",
  },
  {
    img: "img/qify.png",
    alt: "qify",
    title: "Virtual Clinic - KFAS Virtual Hackathon",
    desc: `We've created a 'virtual clinic' mobile application for Android and iOS (using Flutter and Firebase) for our participation in the KFAS & CODED Virtual Hackathon.<br><br>The main goal of the project is to eliminate the pressure created on medical systems during the COVID-19 pandemic by creating digital queues for consulting a doctor. This'd help in resolving the mild cases over a video call and bringing the serious cases to the hospital.<br><br>Out of the 40 teams that took place, we stood in the top 7.<br><br>The application's features include:<ul><li>Registering & logging in as a doctor/ patient. Different UIs for both.</li><li>An admin approves/rejects a doctor's profile.</li><li>The doctor can create (& edit, delete) an appointment window.</li><li>The patient can search for a doctor, and pick a specific window to book an appointment.</li><li>The doctor can accept or reject an appointment. They also have the option to transfer the appointment to another doctor.</li><li>The patient gets an email reminder before any appointment.</li><li>The doctor gets to start a voice/video call with the patient. (uses Jitsi API)</li></ul>`,
    link: "https://github.com/dotvignesh/Qify",
    linkText: "View on GitHub",
  },
  {
    img: "img/rendezvous.png",
    alt: "rendezvous",
    title: "Rendezvous - Abacus Hackathon",
    desc: `It is an app that makes meeting teachers a frictionless process. Meeting professors in college can sometimes be a hassle due to clashes in timetables.<br><br>The objective of the app is to solve this problem. <br>It lets you find when your teachers are available and enables you to request a meet with a click.<br><br>Teachers will be able to upload their timetable, which can be edited at any time. And students get to search for a teacher they want, either by their name or by their department, and can request to meet their teacher in their free time. If a meet is being requested for clearing up doubts, then students will be able to upload images of their assignments, homework, etc.<br>Teachers will be able to accept or reject the request, which will also be indicated to the students.<br><br>It is a project that I built during the Abacus Hackathon, an inter-college hackathon conducted by CEG and sponsored by Visa.<br>Out of the various teams that took part, I participated individually and secured first place.`,
    link: "link_temp_broke",
    linkText: "View Project",
    disabled: true,
  },
  {
    img: "img/hyper.png",
    alt: "hyper",
    title: "Hyper",
    desc: `A Platform Where Sellers Find Buyers <br> <br>Hyper lets you post an item that you're looking for along with the price range, and then a person who wishes to sell that item contacts you to make a deal.<br> <br>The app was built for Android using Java. All the UI elements were prototyped initially with the help of Sketch. Parse by FaceBook was used for the app's backend.`,
    link: "https://devpost.com/software/hyper",
    linkText: "View Project",
  },
];

// Export if using modules
// export { workExperiences, projects };
