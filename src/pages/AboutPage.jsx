import { motion } from 'framer-motion';
import Information from '../components/Information'
import Faq from '../components/Faq'

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

const AboutPage = () => {
  return (
    <>
      <motion.div 
      className="about-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="about-hero">
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
      </section>
    </motion.div>

    <section>
      <Information />
    </section>

    <motion.div>
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

      <section>
        <Faq />
      </section>

    </motion.div>
    </>

  )
}

export default AboutPage