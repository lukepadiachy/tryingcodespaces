/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/backgroundimg.jpg";

const imageAltText = "guy pointing to the left";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "The Language Lounge: Through the World of Coding Languages",
    description:
      "Let's take a look at some popular programming languages and see how they compare to the languages we use every day.",
    url: "https://www.urbanuprise.co.za/post/the-language-lounge-through-the-world-of-coding-languages",
  },
  {
    title: "Coding 101: The Power To Change The World & Become A Better Human Being",
    description:
      "Why Should You Care ? Coding empowers you to be a digital creator. You can build websites that showcase your ideas, create apps that solve real-world problems, or even craft games that transport people to new dimensions.",
    url: "https://www.urbanuprise.co.za/post/coding-101-the-power-to-change-the-world-become-a-better-human-being",
  },
  {
    title: "LearnToCode Site",
    description:
      "I find peace in simplifying things for others and sharing my knowledge. On my site, I've compiled learning resources that's helping me on this journey.",
    url: "https://www.urbanuprise.co.za/learntocode",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
