import React from "react";
import { SocialIcon } from 'react-social-icons';

import './footer.css';

const Footer = () => {
  return (
    
<footer className="bg-dark text-center text-white">
  <div className="container p-4">
    <section className="mb-4">
      <SocialIcon className="socialIcons" url="https://twitter.com/jaketrent" target="_blank"/>
      <SocialIcon className="socialIcons" url="https://www.facebook.com/TheElonmusk" target="_blank"/>
      <SocialIcon className="socialIcons" url="https://www.linkedin.com/in/ravikiran-yadava-5a8223203/" target="_blank"/>
      <SocialIcon className="socialIcons" url="https://www.youtube.com/" target="_blank"/>
      <SocialIcon className="socialIcons" url="https://github.com/ravikiran-fullstack" target="_blank"/>
    </section>

    <section className="">
      <form action="">
        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>

          <div className="col-md-5 col-12">
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example2" className="form-control" required/>
              <label className="form-label" htmlFor="form5Example2">Email address</label>
            </div>
          </div>
          <div className="col-auto">
            <button type="button" className="btn btn-outline-primary mb-4 mr-3">
              Subscribe
            </button>
            <button type="button" className="btn btn-outline-success mb-4">
              Sign up!
            </button>
          </div>
        </div>
      </form>
    </section>

    <section className="mb-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
        eum harum corrupti dicta, aliquam sequi voluptate quas.
      </p>
    </section>
    <section className="">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">About Blog</a>
            </li>
            <li>
              <a href="#!" className="text-white">About Me</a>
            </li>
            <li>
              <a href="#!" className="text-white">Contact Me</a>
            </li>
            <li>
              <a href="#!" className="text-white">How To Add Your Post</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Top Posts</a>
            </li>
            <li>
              <a href="#!" className="text-white">ReactJS</a>
            </li>
            <li>
              <a href="#!" className="text-white">NodeJS</a>
            </li>
            <li>
              <a href="#!" className="text-white">Javascript</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Home</a>
            </li>
            <li>
              <a href="#!" className="text-white">Typescript</a>
            </li>
            <li>
              <a href="#!" className="text-white">Database</a>
            </li>
            <li>
              <a href="#!" className="text-white">Other</a>
            </li>
          </ul>
        </div>   
      </div>
    </section>
  </div>

  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    <span className="mr-1">© 2020 Copyright:</span>
    <a href="https://scoopweb.io/">scoopweb.io</a>
  </div>
</footer>
  );
};

export default Footer;
