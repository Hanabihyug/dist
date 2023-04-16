"use strict";
exports.id = 117;
exports.ids = [117];
exports.modules = {

/***/ 6117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "oU": () => (/* reexport */ components_AboutMePage),
  "KN": () => (/* reexport */ components_ContactPage),
  "$_": () => (/* reexport */ components_Footer),
  "h4": () => (/* reexport */ components_Header),
  "Uv": () => (/* reexport */ components_HomePage),
  "Ar": () => (/* reexport */ layout),
  "mP": () => (/* reexport */ components_ProjectPage)
});

// UNUSED EXPORTS: ProjectCard

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Header.tsx





const Header = ({
  className
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: `bg-gradient-to-r from-blue-500 to-green-500 p-4 ${className} shadow-md`,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container mx-auto",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "text-2xl font-bold text-white hover:text-gray-300 transition duration-300 ease-in-out",
              children: "Portofolio"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "flex space-x-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "text-white header-nav-link hover:text-gray-300 transition duration-300 ease-in-out",
                  children: "Home"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: "/about",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "text-white header-nav-link hover:text-gray-300 transition duration-300 ease-in-out",
                  children: "About"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: "/projects",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "text-white header-nav-link hover:text-gray-300 transition duration-300 ease-in-out",
                  children: "Projects"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: "/contacts",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "text-white header-nav-link hover:text-gray-300 transition duration-300 ease-in-out",
                  children: "Contact"
                })
              })
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const components_Header = (Header);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/HomePage.tsx






function HomePage() {
  const h11 = (0,external_react_.useRef)(null);
  const h12 = (0,external_react_.useRef)(null);
  const h13 = (0,external_react_.useRef)(null);
  const myimageref = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(() => {
    const tl = external_gsap_default().timeline();
    tl.from(h11.current, {
      x: "-100%",
      delay: 0.1,
      opacity: 0,
      duration: 0.5,
      ease: "Power3.easeOut"
    }).from(h12.current, {
      x: "-100%",
      delay: 0.1,
      opacity: 0,
      duration: 0.6,
      ease: "Power3.easeOut"
    }).from(h13.current, {
      x: "-100%",
      delay: 0.1,
      opacity: 0,
      duration: 0.7,
      ease: "Power3.easeOut"
    }).from(myimageref.current, {
      x: "200%",
      delay: 0.4,
      opacity: 0,
      duration: 2,
      ease: "Power3.easeOut"
    });
  }, []);
  const name = "Waca";
  const tagline = "I Like Build Web things with Next.js";
  const img = "https://storage.googleapis.com/assetfoto/profile.jpeg";
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "bg-fixed bg-no-repeat bg-center bg-cover min-h-screen flex items-center justify-center py-16",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container mx-auto px-4",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "md:flex justify-between items-center",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
            ref: h11,
            className: "text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-3",
            children: ["Hi,\uD83D\uDC4B", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "My Name is Waca", /*#__PURE__*/jsx_runtime_.jsx("br", {})]
          }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
            ref: h12,
            className: "text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-3",
            children: name
          }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
            ref: h13,
            className: "text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold",
            children: tagline
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mt-5 md:mt-0",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            ref: myimageref,
            className: "w-40 h-40",
            children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
              src: img,
              alt: "Your Name",
              layout: "responsive",
              width: 300,
              height: 300,
              className: "object-cover rounded-full"
            })
          })
        })]
      })
    })
  });
}

/* harmony default export */ const components_HomePage = (HomePage);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3094);
;// CONCATENATED MODULE: ./src/components/AboutMePage.tsx
/* eslint-disable react/no-unescaped-entities */





const AboutMePage = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_.Element, {
    name: "about",
    children: /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "py-20 px-4 md:px-0 flex justify-center items-center",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "max-w-3xl text-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "text-4xl font-bold mb-6",
          children: "About Me"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-xl leading-relaxed",
          children: "I'm a Computer Science Undergraduate at Udayana University, Bali. You can call me Adwitya. I am currently studying in Front End Web Developing using Next.js and Cloud Computing."
        })]
      })
    })
  });
};

/* harmony default export */ const components_AboutMePage = (AboutMePage);
;// CONCATENATED MODULE: ./src/components/ProjectCard.tsx






const ProjectCard = ({
  title,
  imageUrl,
  description,
  projectUrl
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "relative h-48 w-full mb-4 rounded-t-lg overflow-hidden",
      children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
        src: imageUrl,
        alt: title,
        layout: "fill",
        objectFit: "cover",
        className: "rounded-t-lg"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
      className: "text-lg font-semibold mb-2",
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "text-sm text-gray-600 dark:text-gray-400 mb-4",
      children: description
    }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: projectUrl,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-blue-600 hover:text-blue-800",
        children: "View Project"
      })
    })]
  });
};

/* harmony default export */ const components_ProjectCard = (ProjectCard);
;// CONCATENATED MODULE: ./src/components/ProjectPage.tsx
/* eslint-disable react/no-unescaped-entities */






const ProjectPage = () => {
  const projects = [{
    title: 'SmartCare',
    imageUrl: 'https://storage.googleapis.com/assetfoto/capstone1.png',
    description: 'Has successfully developed a comprehensive parenting website that allows parents to monitor and track their childrens development from an early age. Leveraging APIs and utilizing the World Health Organizations Child Growth Standards dataset, It provides a wealth of resources for parents to ensure their children are meeting important developmental milestones. The projects has Accosiated with Independent Study at Diocoding in React Web Development program.',
    projectUrl: 'https://smartcare-three.vercel.app/'
  } // Add more projects here...
  ];
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_.Element, {
    name: "projects",
    className: "py-20 px-4 md:px-0 bg-gray-200",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container mx-auto text-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "text-4xl font-bold mb-6",
        children: "Projects"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-xl mb-8 leading-relaxed",
        children: "Here is the projects I've worked on. See more details by clicking on it."
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        children: projects.map((project, index) => /*#__PURE__*/jsx_runtime_.jsx(components_ProjectCard, {
          title: project.title,
          imageUrl: project.imageUrl,
          description: project.description,
          projectUrl: project.projectUrl
        }, index))
      })]
    })
  });
};

/* harmony default export */ const components_ProjectPage = (ProjectPage);
;// CONCATENATED MODULE: ./src/components/ContactPage.tsx





const ContactPage = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_.Element, {
    name: "contact",
    className: "min-h-screen bg-white dark:bg-gray-800 flex items-center justify-center w-screen",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "text-center space-y-4 animate__animated animate__fadeIn",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "text-4xl font-bold text-dark-heading dark:text-light-heading",
        children: "Contact"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex space-x-4",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://www.linkedin.com/in/prawangsa/",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-blue-600 hover:text-blue-800",
          children: "LinkedIn"
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://wa.me/6281236075589",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-green-600 hover:text-green-800",
          children: "Phone"
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "mailto:wawaca.waca@gmail.com",
          className: "text-red-600 hover:text-red-800",
          children: "Email"
        })]
      })]
    })
  });
};

/* harmony default export */ const components_ContactPage = (ContactPage);
;// CONCATENATED MODULE: ./src/components/Footer.tsx




const Footer = ({
  className
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: `bg-gradient-to-r from-blue-500 to-green-500 p-4 ${className}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container mx-auto text-center",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "text-lg",
        children: ["\xA9 ", new Date().getFullYear(), " Adwitya Prawangsa. 3rd Undergraduated Student."]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "mt-4 space-x-4",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://www.linkedin.com/in/prawangsa/",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-white hover:text-gray-300 transition duration-300 ease-in-out",
          children: "LinkedIn"
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://github.com/Hanabihyug",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-white hover:text-gray-300 transition duration-300 ease-in-out",
          children: "GitHub"
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "mailto:wawaca.waca@gmail.com",
          className: "text-white hover:text-gray-300 transition duration-300 ease-in-out",
          children: "Email"
        })]
      })]
    })
  });
};

/* harmony default export */ const components_Footer = (Footer);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
;// CONCATENATED MODULE: ./src/components/layout.tsx






const Layout = ({
  children
}) => {
  const {
    theme,
    setTheme
  } = (0,external_next_themes_.useTheme)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `min-h-screen w-screen flex flex-col ${theme === "dark" ? "dark" : ""}`,
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {
      className: "sticky top-0 z-50"
    }), /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: "flex-grow pb-16",
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {
      className: "bottom-0 left-0 right-0 z-50"
    })]
  });
};

/* harmony default export */ const layout = (Layout);
;// CONCATENATED MODULE: ./src/components/index.ts









/***/ })

};
;