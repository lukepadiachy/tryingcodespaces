/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/aboutme.jpg";

const imageAltText = "Guy holding a game controller";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Im a Software Development Student who focuses on Building Mobile Applications using .NETMAUI. My Vision is to simplify coding for all &  create fun content that will encourage others to get invloved.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "User experience",
  "Inclusive design",
  "Focus group testing",
  "Mobile user interfaces",
  "Mobile App Development",
  "C#",
  ".NETMAUI",
  "IDE : VISUAL STUDIO",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "New to Coding but familiar with problem solving Growing up, I've loved technology and helping people.Recently, I got a fantastic opportunity to broaden that knowledge at the University of Western Cape in a Software Development Program. It's in partnership with Samsung at the Future Innovation Lab, and we also get to explore Digital Social Innovation ,it's like having the best of both worlds.Before this program, I did a year-long learnership in Business Practice right after school, getting a good grasp of business environments. My first job was in a warehouse, starting as a general worker and working my way up to an Admin Clerk. I handled customer queries, took orders, and managed Assembly Jobs for production. My role expanded into procurement, where I learned to manage purchase orders, communicate with suppliers, and coordinate with couriers for stock pickups.With a solid foundation in warehouse operations, especially inventory management, I gained a lot of experience quickly. This flexibility helped me find solutions to problems in different work environments. I'm super excited to bring my diverse experience to the dynamic intersection of technology and business!";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
