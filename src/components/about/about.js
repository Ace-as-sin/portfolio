import React from "react";
import AboutText from "./AboutText";
import "./about.scss";

const About = () => {
  return (
    <div className="about--outer-container">
      <AboutText />
      <div className="about--text-container">
        <p>
          Hi 👋 belive it or not outside of coding I also have other hobbies
          haha! whether it's a good book, a competitive game, or a delicious
          meal, I'm always looking for something fun!
        </p>
        <p>
          While coding even outside of work is still a fun activity and I have
          alot of projects I'm working on, here are some of the other activities
          I enjoy doing:
        </p>
        <p>During the week you can catch me</p>
        <ul>
          <li>🌍 Traveling </li>
          <li>🎸 Playing guitar</li>
          <li>📚 Reading books</li>
          <li>🎨 Painting Warhammer figures</li>
        </ul>
        <p>maybe even dining at</p>
        <ul>
          <li>🍕 Two Jacks Pizza</li>
          <li>🍣 Itto Sushi</li>
          <li>🍛 Indian Palace</li>
        </ul>
        <p>and most definetly I'll be playing some of my favorite games</p>
        <ul>
          <li>🎮 Team Fight Tactics</li>
          <li>⚛️ Fallout</li>
          <li>🚀 Eve Online</li>
          <li>⚔️ Final Fantasy ARR</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
