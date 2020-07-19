import React from "react";
import Container from "react-bootstrap/Container";
import { GradientBackground } from "./components/GradientBackground";
import { Reference } from "./components/Reference";
import BlogPost from "./components/BlogPost";

export const Blog = () => (
  <>
    <GradientBackground />
    <Container>
      <BlogPost
        title="New Gatsby web application: Zag's Boons"
        text="I've been working on creating a helpful web application with Gatsby, which
        I've named Zag's Boons. It's a web application for the early access game Hades. I
        noticed that there was no reliable/convenient way for a player to view branching
        upgrades either within the game or online, which spurred the idea for this web
        application. Since it's such a new game, I needed to create my own JSON file of
        data, and query that data in using GraphQL. It's almost done; I just need to
        add some CSS styling."
        date="07/19/2020"
      ></BlogPost>
      <BlogPost
        title="Starting to Understand Gatsby, React, GraphQL"
        text="I've been able to create a simple blog website with Gatsby, and so far
        the benefits of using the technology has been mind-boggling. With a helpful
        tutorial and a few days' worth of reading and writing code, I'm finally starting
        to understand the hype. I might switch over to Gatsby entirely for my personal
        website, but we'll see how it goes in the next few days. I also learned that
        I vastly prefer VSCode over Atom. I wish I switched earlier."
        date="07/08/2020"
      ></BlogPost>
      <BlogPost
        title="Gatsby...?"
        text="I've recently stumbled across Gatsby, and noticed that it grants a lot
      of modern features that I would be excited to utilize. Most importantly,
      Gatsby would allow me to create a blisteringly fast website. I might
      leave the development of my personal website on hiatus, and go hit the
      books for a while to learn me some technologies required for Gatsby..."
        date="07/04/2020"
      ></BlogPost>
      <BlogPost
        title="Work in Progress Guide!"
        text="Starting to create a League of Legends guide now, and it's going fairly
      well! I need to start manipulating states for this page however, so it's
      going to be harder to code than my initial website pages. The things
      that I do to make things look nice. I need to add in a table of contents
      box to allow users to jump between sections, and maybe a jump-to-the-top
      button somewhere since the guide is getting fairly long. I'm focusing
      on getting everything written down first, and then I'll work on UX,
      followed by polishing the UI."
        date="07/03/2020"
      ></BlogPost>
      <BlogPost
        title="Fighting with GitHub Pages"
        text="I thought that deploying my personal website through GitHub Pages
      would be an easy task, but it turns out that GitHub Pages doesn't play
      nice with React apps. I designed my website to be a single-page
      application (SPA) in the hopes of having a very fast website without
      the need to reload pages during use, but GitHub doesn't natively
      support single-page applications. As a result, I needed to import
      a special 404.html file into my build folder, and a redirection
      script into my index.html in order to handle 404 errors and redirect
      to the correct pages. Until I figured out that this was an common
      issue, I had thought I written a broken website."
        date="06/19/2020"
      ></BlogPost>
      <BlogPost
        title="First Post!"
        text="Honestly, I'm not sure what to really put here at the moment, but
      making this website has been quite a journey. Thankfully, it only
      took me about 3 days to create this website from scratch!"
        date="06/18/2020"
      ></BlogPost>
      <Reference />
    </Container>
  </>
);
