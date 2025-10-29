import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-6 md:pt-20 md:pb-44 lg:pt-20 lg:pb-6"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I BUILD POWERFUL WEB APPLICATIONS WITH MODERN TECHNOLOGIES AND CLEAN CODE."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "I'm a Full Stack Developer with expertise in the MERN stack, passionate about creating scalable, efficient web applications that solve real-world problems."
              }
            />
            <AnimatedBody
              text={
                "With hands-on experience in React, Node.js, MongoDB, and modern frameworks, I specialize in building both frontend interfaces and robust backend systems. I enjoy the challenge of turning complex requirements into elegant, user-friendly solutions."
              }
              className={"hidden"}
            />
            <AnimatedBody
              text={
                "My development journey includes working on diverse projects from e-commerce platforms to real-time applications. I'm proficient in JavaScript/TypeScript, REST APIs, authentication systems, and database design."
              }
            />
            <AnimatedBody
              text={
                "I believe in writing clean, maintainable code and following best practices. Whether it's optimizing performance, implementing new features, or debugging complex issues, I approach every challenge with enthusiasm and dedication."
              }
            />
            <AnimatedBody
              text={
                "Currently exploring cutting-edge technologies and always eager to learn new tools that can enhance development workflows. I'm open to exciting opportunities and collaborations."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Frontend Technologies"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "React.js, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap, Responsive Design, Redux, Material-UI."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Backend & Database"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Node.js, Express.js, MongoDB, Mongoose, REST APIs, JWT Authentication, API Integration, Database Design, Server-Side Development."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Tools & DevOps"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Git/GitHub, VS Code, Postman, npm/yarn, Vercel, Firebase, Chrome DevTools, Agile Methodology, Problem Solving."
                }
              />
            </div>
          </div>
        </div>
        {/* <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
          <SongCarousel />
          <AnimatedBody
            text="A few songs I can recommend if you're looking for some fresh tunes :)"
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
          />
        </div> */}
      </div>
    </section>
  );
};

export default About;
