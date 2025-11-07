import React from 'react';
import { motion } from 'framer-motion';
import './Information.css';

import img1 from '../assets/Teammember1.jpg';
import img2 from '../assets/Teammember2.jpg';
import img3 from '../assets/Teammember3.jpg';
import img4 from '../assets/Teammember4.jpg';

const team = [
  {
    name: 'Mirabel Benjamin',
    role: 'CEO & Founder',
    img: img1,
  },
  {
    name: 'Miracle Benjamin',
    role: 'CTO',
    img: img2,
  },
  {
    name: 'Mira Ben',
    role: 'Head of Customer Experience',
    img: img3,
  },
  {
    name: 'Mimi Benji',
    role: 'Operations Manager',
    img: img4,
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const slideInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Information = () => {
  return (
    <motion.div 
      className="about-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="about-hero">
      <div className='heroBgImage'>
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Us
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Redefining Your Electronic Gadget Experience by delivering innovative, reliable, and stylish devices that seamlessly elevate your daily life, keeping you connected, empowered, and ahead of the tech curve.
          </motion.p>
        </div>
      </div>
      </section>


      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <motion.div 
            className="mission-content"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="mission-text" variants={slideInLeft}>
              <h2>Our Mission</h2>
              <p>
                At MEGGE, we believe that technology should enhance your life, not complicate it. 
                Our mission is to bring you the latest and most innovative electronic gadgets 
                that seamlessly integrate into your daily routine while providing exceptional 
                value and performance.
              </p>
            </motion.div>
            <motion.div className="mission-image" variants={slideInRight}>
              <div className="image-placeholder">
                <img src="src/assets/JBL_wireless_earbuds-removebg-preview.png" alt="Earbuds" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <motion.div 
            className="story-content"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="story-image" variants={slideInLeft}>
              <div className="image-placeholder">
                <img src="src/assets/download__21_-removebg-preview.png" alt="Laptop" />
              </div>
            </motion.div>
            <motion.div className="story-text" variants={slideInRight}>
              <h2>Our Story</h2>
              <p>
                Founded in 2018, MEGGE started as a small passion project by tech enthusiasts 
                who wanted to make premium electronic gadgets accessible to everyone. What began 
                as a humble online store has grown into a trusted destination for thousands of 
                customers worldwide.
              </p>
              <p>
                Today, we partner with leading manufacturers and innovative startups to curate 
                a collection that represents the best in modern technology. Our team of experts 
                rigorously tests each product to ensure it meets our high standards before 
                reaching your hands.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2 className="team-title">Meet our Team</h2>
        <p className="team-subtitle">Focused on delivering delightful shopping experiences</p>


        <motion.div
          className="team-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {team.map((member, index) => (
            <motion.div
              className="team-card"
              key={index}
              variants={slideInUp}
            >
              <motion.div className="team-img-wrapper" variants={scaleUp}>
                <img src={member.img} alt={member.name} className="team-img" />
              </motion.div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="lowerContainer">
          <div className="imagesCtn">
            <div className="imagesCircle1" style={{backgroundImage: `url(src/assets/Statsimg1.jpg)`, backgroundColor: 'var(--white_color)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
            <div className="imagesCircle2" style={{backgroundImage: `url(src/assets/Statsimg2.jpg)`, backgroundColor: 'var(--white_color)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
            <div className="imagesCircle3" style={{backgroundImage: `url(src/assets/Statsimg3.jpg)`, backgroundColor: 'var(--white_color)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
            <div className="imagesCircle4" style={{backgroundImage: `url(src/assets/Statsimg4.jpg)`, backgroundColor: 'var(--white_color)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
          </div>

          <div className="container">
            <motion.div 
              className="statsGrid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div 
                className="statsItem"
                variants={scaleUp}
                whileHover={{ scale: 1.05 }}
              >
                <motion.h3
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  50,000+
                </motion.h3>
                <p>Happy Customers</p>
              </motion.div>
              <motion.div 
                className="statsItem"
                variants={scaleUp}
                whileHover={{ scale: 1.05 }}
              >
                <motion.h3
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  1000+
                </motion.h3>
                <p>Client Review</p>
              </motion.div>
              <motion.div 
                className="statsItem"
                variants={scaleUp}
                whileHover={{ scale: 1.05 }}
              >
                <motion.h3
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  4.7★
                </motion.h3>
                <p>Positive Rating</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div class="otherlowerContainer">
          <h2>Trusted by</h2> 
          <h3><span>Thousands</span> of Happy Shoppers</h3>
          <p>Every order, every delivery, every experience - we focus on making sure you shop with confidence.</p>
        </div>
      </section>

    </motion.div>
  );
};

export default Information;