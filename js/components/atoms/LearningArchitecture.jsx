import React from 'react';

export const LearningArchitecture = () => (
    {
        "loach_structure": {
            "children": [
                "PRACTICES",
                "SKILLS",
                "LEARNING POINTS",
                "SUB-LEARNING POINTS"
            ],
            "streams": [
                {
                    "stream": "Digital Government"
                    , "cover": "/static/images/covers/digital_government.png"
                    , "description": "The use of digital technologies, as an integrated part of governments’ modernisation strategies, to create public value. Relies on a digital government ecosystem comprised of government actors, non-governmental organisations, businesses, citizens’ associations and individuals which supports the production of and access to data, services and content through interactions with the government."
                    , "practices": ["Agile", "Collaboration", "Empowering People",
                        "Ethidcal & Responsible Use", "Inclusive Design",
                        "Open Standards & Solutions", "Open By Default",
                        "Security & Privacy", "User-Centric Design"
                    ]
                },
                {
                    "stream": "Digital Literacy"
                    , "cover": "/static/images/covers/digital_literacy.jpg"
                    , "description": "Digital literacy is the ability to use a range of technological tools for varied purposes and to understand the digital environment sufficiently to make well-informed decisions and understand the art of the possible."
                    , "practices": ["Community Building", "Creativeity & Problem Solving", "Critical Thinking & Evaluation", "Digital Citizenship", "Privacy & Security", "Using Information & Data", "Using Tools & Technology"]
                },
                {
                    "stream": "Design"
                    , "cover": "/static/images/covers/design.jpg"
                    , "description": "User experience design (UX, UXD, UED or XD) is the process of enhancing user satisfaction with a product by improving the usability, accessibility, and pleasure provided in the interaction with the product."
                    , "practices": ["Content Design", "Design Research", "Design Thinking", "Inclusive Design", "Information Architecture", "Interaction Design", "Prototyping & Iteration", "Service Design", "Usability Testing", "User Interface", "Visual Design"]
                },
                {
                    "stream": "Leadership"
                    , "cover": "/static/images/covers/leadership.jpg"
                    , "description": "Digital leadership is the strategic use of a company's digital assets to achieve business goals. Digital leadership can be addressed at both organizational and individual levels."
                    , "practices": ["Agile Sponsorship", "Communications", "Digital Governance", "Disruptive Trends", "Fostering Innovation", "Leading Agile Projects", "Leading Agile Teams", "Leading Change", "Openness & Colaboration", "User-Centred Service Design"]
                },
                {
                    "stream": "Disruptive Technology"
                    , "cover": "/static/images/covers/disruptive.png"
                    , "description": "Disruptive technologies are those that significantly alter the way businesses or entire industries operate. Often times, these technologies force companies to alter the way they approach their business, or risk losing market share or becoming irrelevant."
                    , "practices": ["3D Printing", "AI", "Biotechnology", "Blockchain & Distributed Systems", "Drones & Robotics", "Foresight", "Intellignece & Cognitive Augmentation", "IoT Networks", "Micro & Nano-Materials", "VY & Augmented Reality"]
                },
                {
                    "stream": "Data Analysis"
                    , "cover": "/static/images/covers/data_analysis.jpg"
                    , "description": "Data analysis is a process of inspecting, cleansing, transforming, and modeling data with the goal of discovering useful information, informing conclusions, and supporting decision-making."
                    , "practices": ["Data Cleaning", "Data Collection", "Data Manipulation", "Data Modeling", "Data Visualization", "Geo-Informatics", "Natural Language Processing", "Network Analysis", "Pandas / Dataframes", "Programming", "Statistical Analysis", "Programming", "Storytelling", "Streaming Data"]
                },
                {
                    "stream": "AI / Machine Learning"
                    , "cover": "/static/images/covers/ai.jpg"

                    , "description": "Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. Machine learning focuses on the development of computer programs that can access data and use it learn for themselves."
                    , "practices": ["Bias & Ethics", "Big Data", "Data Pipelines", "Deep Learning & Neural Networks", "GANS", "LSTMS", "Reinforcement Learning", "Statistics", "Streaming Data", "Supervised Learning", "Unsupervised Learning"]
                },
                {
                    "stream": "DevOps"
                    , "cover": "/static/images/covers/devops.jpg"
                    , "description": "DevOps is the combination of cultural philosophies, practices, and tools that increases an organization's ability to deliver applications and services at high velocity: evolving and improving products at a faster pace than organizations using traditional software development and infrastructure management processes."
                    , "practices": ["APIs", "Automation", "Cloud Services", "Cluster-Computing", "Containers", "Micro-Services", "Testing"]
                },
                {
                    "stream": "Development"
                    , "cover": "/static/images/covers/development.jpg"
                    , "description": "Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components."
                    , "practices": ["APIs", "Back-End Development", "Command Line", "Databases", "Environments", "Front-End Development", "GitHub & Git", "Mobile Development", "Open Source", "Packages & Libraries", "Programming Languages", "Web Development"]
                }
            ],
            "architecture": [
                {
                    "practice": "Inclusive design",
                    "skills": [
                        {
                            "skill": "Understanding inclusive design",
                            "learningpoints": [
                                {
                                    "lp": "Understainding differences between universal design, inclusive design, accessibility"
                                },
                                {
                                    "lp": "Designing for many rather than few"
                                },
                                {
                                    "lp": "Recognizing diversity and uniqueness",
                                    "subs": [
                                        {
                                            "sub": "One-size fits one"
                                        }
                                    ]
                                },
                                {
                                    "lp": "Recognizing interconnectedness of users and systems"
                                },
                                {
                                    "lp": "Asking quesitons about who benefits and who doesn't"
                                }
                            ]
                        },
                        {
                            "skill": "Being inclusive",
                            "learningpoints": [
                                {
                                    "lp": "Challengeg your biases"
                                },
                                {
                                    "lp": "Considering broader beneficial impact",
                                    "subs": [
                                        {
                                            "sub": "Considering impact beyond the intended audience"
                                        }
                                    ]
                                },
                                {
                                    "lp": "Creating inclusive processes and tools",
                                    "subs": [
                                        {
                                            "sub": "Including underrepresented groups"
                                        },
                                        {
                                            "sub": "Building diverse teams"
                                        },
                                        {
                                            "sub": "Designing accessible products and services"
                                        },
                                        {
                                            "sub": "Including different perspectives"
                                        }
                                    ]
                                },
                                {
                                    "lp": "Inclusive language"
                                }
                            ]
                        },
                        {
                            "skill": "Accessibility",
                            "learningpoints": [
                                {
                                    "lp": "Understanding accessibility",
                                    "subs": [
                                        {
                                            "sub": "Understanding web accesssibility"
                                        },
                                        {
                                            "sub": "What is disability?"
                                        },
                                        {
                                            "sub": "Types of states and disabilities that require accomodation"
                                        }
                                    ]
                                },
                                {
                                    "lp": "Implementing accessibility",
                                    "subs": [
                                        {
                                            "sub": "WCAG2"
                                        },
                                        {
                                            "sub": "Screen-reader accessible content"
                                        },
                                        {
                                            "sub": "High contrast"
                                        },
                                        {
                                            "sub": "Font size"
                                        },
                                        {
                                            "sub": "Size of clicking targets"
                                        },
                                        {
                                            "sub": "Amount of information per page"
                                        },
                                        {
                                            "sub": "Alt text and image file names"
                                        },
                                        {
                                            "sub": "Inclusive conversation techniques"
                                        },
                                        {
                                            "sub": "Closed captions"
                                        }
                                    ]
                                },
                                {
                                    "skill": "Empathy",
                                    "learningpoints": [
                                        {
                                            "lp": "Building empathy"
                                        },
                                        {
                                            "lp": "Engaging with empathy"
                                        }
                                    ]
                                },
                                {
                                    "skill": "Ethics",
                                    "learningpoints": [
                                        {
                                            "lp": "Understanding ethical implication of design"
                                        }
                                    ]
                                },
                                {
                                    "skill": "Security and privacy",
                                    "learningpoints": [
                                        {
                                            "lp": "Understanding implicatoins of privacy and secutiy on design decisions"
                                        }
                                    ]
                                },
                                {
                                    "skill": "Digital standards, strategy and policy",
                                    "learningpoints": [
                                        {
                                            "lp": "Government of Canada Digital Standards"
                                        },
                                        {
                                            "lp": "Open Government Canada"
                                        },
                                        {
                                            "lp": "Government of Canada Digital Policy"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "practice": "Design thinking",
                    "skills": [
                        {
                            "skill": "Understanding design thinking",
                            "learningpoints": [
                                {
                                    "lp": "Design thinking stages"
                                }
                            ]
                        },
                        {
                            "skill": "Empathy"
                        },
                        {
                            "skill": "Ideation techniques",
                            "learningpoints": [
                                {
                                    "lp": " 5 Whys"
                                },
                                {
                                    "lp": "Drivers and hurdles"
                                },
                                {
                                    "lp": "Start/Stop/Continue"
                                },
                                {
                                    "lp": "Service blueprinting"
                                },
                                {
                                    "lp": "Journey mapping"
                                },
                                {
                                    "lp": "User scenarios"
                                },
                                {
                                    "lp": "Personas"
                                },
                                {
                                    "lp": "Hopes and fears"
                                },
                                {
                                    "lp": "Low-fidelity prototyping"
                                },
                                {
                                    "lp": "Role playing"
                                },
                                {
                                    "lp": "Comparing notes"
                                },
                                {
                                    "lp": "Assessment criteria"
                                },
                                {
                                    "lp": "Fast visualization"
                                },
                                {
                                    "lp": "Being your users"
                                },
                                {
                                    "lp": "Brainstorming"
                                }
                            ]
                        },
                        {
                            "skill": "Discovering the problem",
                            "learningpoints": [
                                {
                                    "lp": "Doing research"
                                },
                                {
                                    "lp": "Brainstorming"
                                },
                                {
                                    "lp": "Including different perspectives"
                                }
                            ]
                        },
                        {
                            "skill": "Defining the area to focus on",
                            "learningpoints": [
                                {
                                    "lp": "Review and narrow down insights"
                                },
                                {
                                    "lp": "Establish your project's main challenge"
                                }
                            ]
                        },
                        {
                            "skill": "Developing potential solutions",
                            "learningpoints": [
                                {
                                    "lp": "Brainstorming"
                                },
                                {
                                    "lp": "'Yes, and' mindset"
                                },
                                {
                                    "lp": "Testing and evaluating potential solutions"
                                },
                                {
                                    "lp": "Discarding what does not work"
                                }
                            ]
                        },
                        {
                            "skill": "Delivering an iterative solution",
                            "learningpoints": [
                                {
                                    "lp": "Selecting the solution"
                                },
                                {
                                    "lp": "Producing the solution"
                                },
                                {
                                    "lp": "Launching the solution"
                                },
                                {
                                    "lp": "Testing the solution"
                                },
                                {
                                    "lp": "Collecting feedback",
                                    "subs": [
                                        {
                                            "sub": "Feedback loops"
                                        }
                                    ]
                                },
                                {
                                    "lp": "Reflecting on project successes and failures",
                                    "subs": [
                                        {
                                            "sub": "Retros"
                                        }
                                    ]
                                },
                                {
                                    "lp": "Documenting lessons learned",
                                    "subs": [
                                        {
                                            "sub": "Methods banks"
                                        },
                                        {
                                            "sub": "Case studies"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "practice": "Service design",
                    "skills": [
                        {
                            "skill": "Gathering data",
                            "learningpoints": [
                                {
                                    "lp": "Interviews"
                                },
                                {
                                    "lp": "Web analytics"
                                },
                                {
                                    "lp": "Market research"
                                },
                                {
                                    "lp": "Search logs"
                                },
                                {
                                    "lp": "Call centre data"
                                },
                                {
                                    "lp": "Secondary research"
                                },
                                {
                                    "lp": "Hopes and fears"
                                },
                                {
                                    "lp": "Existing reports"
                                },
                                {
                                    "lp": "Participatory design"
                                },
                                {
                                    "lp": "Stakeholder map"
                                }
                            ]
                        },
                        {
                            "skill": "Aligning user and business needs",
                            "learningpoints": [
                                {
                                    "lp": "Alignment workshop"
                                }
                            ]
                        },
                        {
                            "skill": "Discovering the problem",
                            "learningpoints": [
                                {
                                    "lp": "Ecosystem map"
                                },
                                {
                                    "lp": "Current-state blueprint"
                                }
                            ]
                        },
                        {
                            "skill": "Doing user research",
                            "learningpoints": [
                                {
                                    "lp": "Interviews"
                                },
                                {
                                    "lp": "Experience mapping"
                                },
                                {
                                    "lp": "Personas"
                                }
                            ]
                        },
                        {
                            "skill": "Developing potential solutions",
                            "learningpoints": [
                                {
                                    "lp": "Brainstorming"
                                },
                                {
                                    "lp": "Storyboarding"
                                },
                                {
                                    "lp": "Prioritization framework"
                                },
                                {
                                    "lp": "Service storming"
                                },
                                {
                                    "lp": "Vision stories"
                                }
                            ]
                        },
                        {
                            "skill": "Planning and testing solutions",
                            "learningpoints": [
                                {
                                    "lp": "Service prototyping"
                                },
                                {
                                    "lp": "Service blueprinting"
                                },
                                {
                                    "lp": "Project cards"
                                },
                                {
                                    "lp": "Testing the soltuion"
                                },
                                {
                                    "lp": "Roadmap"
                                }
                            ]
                        }
                    ]
                },
                {
                    "practice": "Circular design",
                    "skills": [
                        {
                            "skill": "Understanding circular design",
                            "learningpoints": [
                                {
                                    "lp": "Regenerative thinking"
                                },
                                {
                                    "lp": "Circular flows"
                                },
                                {
                                    "lp": "Learn from nature"
                                }
                            ]
                        },
                        {
                            "skill": "Adopting systems mindset",
                            "learningpoints": [
                                {
                                    "lp": "Considering impact beyond the intended audience"
                                },
                                {
                                    "lp": "Ecosystem map"
                                },
                                {
                                    "lp": "Imagining new partnerships"
                                },
                                {
                                    "lp": "Recognizing interconnectedness of users and systems"
                                }
                            ]
                        },
                        {
                            "skill": "Designing for longevity and evolution",
                            "learningpoints": [
                                {
                                    "lp": "Continuous learning loops"
                                },
                                {
                                    "lp": "Service flip"
                                },
                                {
                                    "lp": "Imagining new partnerships"
                                }
                            ]
                        }
                    ]
                },
                {
                    "practice": "Design research",
                    "skills": [
                        {
                            "skill": "Understanding design research",
                            "learningpoints": [
                                {
                                    "lp": "User research in different design phases"
                                },
                                {
                                    "lp": "Role of business needs, user needs and context in design research"
                                },
                                {
                                    "lp": "Value of design research"
                                }
                            ]
                        },
                        {
                            "skill": "Gathering data",
                            "learningpoints": [
                                {
                                    "lp": "Content audit"
                                },
                                {
                                    "lp": "Web analytics"
                                },
                                {
                                    "lp": "Heuristic evaluation"
                                },
                                {
                                    "lp": "Market research"
                                },
                                {
                                    "lp": "Search logs"
                                },
                                {
                                    "lp": "Call centre data"
                                },
                                {
                                    "lp": "Secondary research"
                                },
                                {
                                    "lp": "Hopes and fears"
                                },
                                {
                                    "lp": "Existing reports"
                                },
                                {
                                    "lp": "Participatory design"
                                }
                            ]
                        },
                        {
                            "skill": "Preparing for user research",
                            "learningpoints": [
                                {
                                    "lp": "Planning research"
                                },
                                {
                                    "lp": "Including different perspectives"
                                },
                                {
                                    "lp": "Understanding accessibility"
                                },
                                {
                                    "lp": "Recruiting participants"
                                },
                                {
                                    "lp": "Managing user research data"
                                }
                            ]
                        },
                        {
                            "skill": "Doing user research",
                            "learningpoints": [
                                {
                                    "lp": "Facilitation techniques"
                                },
                                {
                                    "lp": "Taking notes"
                                },
                                {
                                    "lp": "Observing users"
                                }
                            ]
                        },
                        {
                            "skill": "User research methods",
                            "learningpoints": [
                                {
                                    "lp": "Pop up-research"
                                },
                                {
                                    "lp": "Contextual inquiry"
                                },
                                {
                                    "lp": "Cognitive walkthrough"
                                },
                                {
                                    "lp": "Co-design"
                                },
                                {
                                    "lp": "Journaling"
                                },
                                {
                                    "lp": "Ethnography"
                                },
                                {
                                    "lp": "Validation sessions"
                                },
                                {
                                    "lp": "Low-fidelity prototyping"
                                },
                                {
                                    "lp": "Task identification"
                                },
                                {
                                    "lp": "Collaboratories"
                                },
                                {
                                    "lp": "Focus groups"
                                },
                                {
                                    "lp": "Interviews"
                                },
                                {
                                    "lp": "Card sorting",
                                    "subs": [
                                        {
                                            "sub": "Open card sort"
                                        },
                                        {
                                            "sub": "Closed card sort"
                                        }
                                    ]
                                },
                                {
                                    "lp": "Surveys"
                                }
                            ]
                        },
                        {
                            "skill": "Visualizing, analysing and sharing user research",
                            "learningpoints": [
                                {
                                    "lp": "Affinity mapping"
                                },
                                {
                                    "lp": "Empathy maps"
                                },
                                {
                                    "lp": "Personas"
                                },
                                {
                                    "lp": "Storyboarding"
                                },
                                {
                                    "lp": "Jobs to be done (JTD)"
                                },
                                {
                                    "lp": "User scenarios"
                                },
                                {
                                    "lp": "Task flow analysis"
                                },
                                {
                                    "lp": "Mental modeling"
                                },
                                {
                                    "lp": "Core content model"
                                },
                                {
                                    "lp": "Service blueprinting"
                                },
                                {
                                    "lp": "Journey mapping"
                                },
                                {
                                    "lp": "Business canvas"
                                },
                                {
                                    "lp": "Dot voting"
                                }
                            ]
                        }
                    ]
                },
                {
                    "practice": "Content strategy",
                    "skills": [
                        {
                            "skill": "Aligning user and business needs",
                            "learningpoints": [
                                {
                                    "lp": "Core content model"
                                }
                            ]
                        },
                        {
                            "skill": "Reviewing existing content",
                            "learningpoints": [
                                {
                                    "lp": "Content audit",
                                    "subs": [
                                        {
                                            "sub": "ROT review"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "skill": "Identifying content problems and opportunities"
                        },
                        {
                            "skill": "Adopting systems mindset",
                            "learningpoints": [
                                {
                                    "lp": "Considering impact beyond the intended audience"
                                },
                                {
                                    "lp": "Recognizing interconnectedness of users and systems"
                                },
                                {
                                    "lp": "Ecosystem map"
                                },
                                {
                                    "lp": "Imagining new partnerships"
                                }
                            ]
                        },
                        {
                            "skill": "Defining strategic approaches to content",
                            "learningpoints": [
                                {
                                    "lp": "Cross-government level content strategy"
                                },
                                {
                                    "lp": "Organizational level  content strategy"
                                },
                                {
                                    "lp": "Project level  content strategy"
                                }
                            ]
                        },
                        {
                            "skill": "Creating content governance plan",
                            "learningpoints": [
                                {
                                    "lp": "Defining communication channels"
                                },
                                {
                                    "lp": "Defining content flow"
                                },
                                {
                                    "lp": "Managing content"
                                }
                            ]
                        }
                    ]
                },
                {
                    "practice": "Information architecture",
                    "skills": [
                        {
                            "skill": "Gathering data",
                            "learningpoints": [
                                {
                                    "lp": "Card sorting",
                                    "subs": [
                                        {
                                            "sub": "Open card sort"
                                        }
                                    ]
                                },
                                {
                                    "lp": "Content audit"
                                },
                                {
                                    "lp": "Web analytics"
                                },
                                {
                                    "lp": "Heuristic evaluation"
                                },
                                {
                                    "lp": "Market research"
                                },
                                {
                                    "lp": "Search logs"
                                },
                                {
                                    "lp": "Call centre data"
                                },
                                {
                                    "lp": "Existing reports"
                                }
                            ]
                        },
                        {
                            "skill": "Using data and user research",
                            "learningpoints": [
                                {
                                    "lp": "Personas"
                                },
                                {
                                    "lp": "Jobs to be done (JTD)"
                                },
                                {
                                    "lp": "User scenarios"
                                },
                                {
                                    "lp": "Task flow analysis"
                                },
                                {
                                    "lp": "Mental modeling"
                                },
                                {
                                    "lp": "Core content model"
                                },
                                {
                                    "lp": "Journey mapping"
                                }
                            ]
                        },
                        {
                            "skill": "Doing domain research",
                            "learningpoints": [
                                {
                                    "lp": "Secondary research"
                                }
                            ]
                        },
                        {
                            "skill": "Information architecture principles",
                            "learningpoints": [
                                {
                                    "lp": "Principle of choices"
                                },
                                {
                                    "lp": "Principle of disclosure"
                                },
                                {
                                    "lp": "Principle of front doors"
                                },
                                {
                                    "lp": "Principle of objects"
                                },
                                {
                                    "lp": "Principle of growth"
                                },
                                {
                                    "lp": "Principle of exemplars"
                                },
                                {
                                    "lp": "Principle of multiple classifications"
                                },
                                {
                                    "lp": "Principle of focused navigation"
                                }
                            ]
                        },
                        {
                            "skill": "Organizing information",
                            "learningpoints": [
                                {
                                    "lp": "Merging information"
                                },
                                {
                                    "lp": "Chunking information"
                                },
                                {
                                    "lp": "Creating scannable information",
                                    "subs": [
                                        {
                                            "sub": "White space"
                                        },
                                        {
                                            "sub": "Bullet points"
                                        }
                                    ]
                                },
                                {
                                    "lp": "Separating information"
                                },
                                {
                                    "lp": "Temporal organization scheme"
                                },
                                {
                                    "lp": "Alphabetical organization scheme"
                                },
                                {
                                    "lp": "Topic organization scheme"
                                },
                                {
                                    "lp": "Geographic organization scheme"
                                },
                                {
                                    "lp": "Spatial organization scheme"
                                }
                            ]
                        },
                        {
                            "skill": "Structuring information",
                            "learningpoints": [
                                {
                                    "lp": "Hierarchical structures"
                                },
                                {
                                    "lp": "Sequential structures"
                                },
                                {
                                    "lp": "Matrix structures"
                                },
                                {
                                    "lp": "Hybrid structures"
                                }
                            ]
                        },
                        {
                            "skill": "Labelling of information",
                            "learningpoints": [
                                {
                                    "lp": "Clear and descriptive  page titles, headings, links and calls to action"
                                },
                                {
                                    "lp": "Plain language"
                                },
                                {
                                    "lp": "Inclusive language"
                                },
                                {
                                    "lp": "Front-loading titles"
                                }
                            ]
                        },
                        {
                            "skill": "Designing navigation",
                            "learningpoints": [
                                {
                                    "lp": "Structural navigation",
                                    "subs": [
                                        {
                                            "sub": "Menus"
                                        },
                                        {
                                            "sub": "Breadcrumbs"
                                        }
                                    ]
                                },
                                {
                                    "lp": "Local navigation",
                                    "subs": [
                                        {
                                            "sub": "Contextual links"
                                        },
                                        {
                                            "sub": "Related content links"
                                        }
                                    ]
                                },
                                {
                                    "lp": "Journey mapping"
                                },
                                {
                                    "lp": "Task flow analysis"
                                },
                                {
                                    "lp": "Principle of front doors"
                                }
                            ]
                        },
                        {
                            "skill": "Making informatoin findable through search",
                            "learningpoints": [
                                {
                                    "lp": "Search behaviors and information needs",
                                    "subs": [
                                        {
                                            "sub": "Find the right answer"
                                        },
                                        {
                                            "sub": "Find a few examples"
                                        },
                                        {
                                            "sub": "Find all available information on a topic"
                                        },
                                        {
                                            "sub": "Refind something they found before"
                                        }
                                    ]
                                },
                                {
                                    "lp": "Why people can't find information",
                                    "subs": [
                                        {
                                            "sub": "Too much information"
                                        },
                                        {
                                            "sub": "Not enough information"
                                        },
                                        {
                                            "sub": "Not the right information"
                                        },
                                        {
                                            "sub": "Not able to identify existing information as the right information"
                                        }
                                    ]
                                },
                                {
                                    "lp": "Search engine optimization",
                                    "subs": [
                                        {
                                            "sub": "Indexing"
                                        },
                                        {
                                            "sub": "Metadata"
                                        },
                                        {
                                            "sub": "Taxonomies"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "skill": "Testing the information architecture",
                            "learningpoints": [
                                {
                                    "lp": "Card sorting",
                                    "subs": [
                                        {
                                            "sub": "Closed card sort"
                                        }
                                    ]
                                },
                                {
                                    "lp": "Tree jack"
                                }
                            ]
                        },
                        {
                            "skill": "Creating documentation and standards",
                            "learningpoints": [
                                {
                                    "lp": "Style guides"
                                },
                                {
                                    "lp": "Design element patterns"
                                },
                                {
                                    "lp": "Content types"
                                }
                            ]
                        }
                    ]
                },
                {
                    "practice": "Content design",
                    "skills": [
                        {
                            "skill": "Using data and user research",
                            "learningpoints": [
                                {
                                    "lp": "Personas"
                                },
                                {
                                    "lp": "Jobs to be done (JTD)"
                                },
                                {
                                    "lp": "User scenarios"
                                },
                                {
                                    "lp": "Task flow analysis"
                                },
                                {
                                    "lp": "Mental modeling"
                                },
                                {
                                    "lp": "Core content model"
                                }
                            ]
                        },
                        {
                            "skill": "Reviewing existing content",
                            "learningpoints": [
                                {
                                    "lp": "Content audit",
                                    "subs": [
                                        {
                                            "sub": "ROT review"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "skill": "Understanding web as a medium and context",
                            "learningpoints": [
                                {
                                    "lp": "Reading behaviour online",
                                    "subs": [
                                        {
                                            "sub": "Scanning in S pattern and skimming"
                                        }
                                    ]
                                },
                                {
                                    "lp": "Context where online reading can happen"
                                },
                                {
                                    "lp": "HTML vs other formats"
                                },
                                {
                                    "lp": "Mobile reading and screen sizes"
                                }
                            ]
                        },
                        {
                            "skill": "Information architecture principles",
                            "learningpoints": [
                                {
                                    "lp": "Principle of choices"
                                },
                                {
                                    "lp": "Principle of disclosure"
                                },
                                {
                                    "lp": "Principle of front doors"
                                },
                                {
                                    "lp": "Principle of objects"
                                },
                                {
                                    "lp": "Principle of growth"
                                },
                                {
                                    "lp": "Principle of exemplars"
                                },
                                {
                                    "lp": "Principle of multiple classifications"
                                },
                                {
                                    "lp": "Principle of focused navigation"
                                }
                            ]
                        },
                        {
                            "skill": "Writing for users",
                            "learningpoints": [
                                {
                                    "lp": "Plain language"
                                },
                                {
                                    "lp": "Implementing accessibility",
                                    "subs": [
                                        {
                                            "sub": "Amount of information per page"
                                        }
                                    ]
                                },
                                {
                                    "lp": "Inclusive language"
                                }
                            ]
                        },
                        {
                            "skill": "Content modeling",
                            "learningpoints": [
                                {
                                    "lp": "Content types"
                                }
                            ]
                        },
                        {
                            "skill": "Testing your content",
                            "learningpoints": [
                                {
                                    "lp": "Readability test",
                                    "subs": [
                                        {
                                            "sub": "Flesch-Kincaid reading score"
                                        }
                                    ]
                                },
                                {
                                    "lp": "Comprehension test",
                                    "subs": [
                                        {
                                            "sub": "Cloze testing"
                                        }
                                    ]
                                },
                                {
                                    "lp": "Task completion"
                                },
                                {
                                    "lp": "Preference testing"
                                },
                                {
                                    "lp": "A/B testing"
                                }
                            ]
                        }
                    ]
                },
                {
                    "practice": "Visual design",
                    "skills": [
                        {
                            "skill": "Visual design principles",
                            "learningpoints": [
                                {
                                    "lp": "Alignment"
                                },
                                {
                                    "lp": "Hierarchy"
                                },
                                {
                                    "lp": "Contrast"
                                },
                                {
                                    "lp": "Repetition"
                                },
                                {
                                    "lp": "Proximity"
                                },
                                {
                                    "lp": "Gestalt"
                                },
                                {
                                    "lp": "Balance"
                                },
                                {
                                    "lp": "Unity"
                                },
                                {
                                    "lp": "Scale"
                                },
                                {
                                    "lp": "Dominance"
                                },
                                {
                                    "lp": "Similarity"
                                },
                                {
                                    "lp": "Space"
                                }
                            ]
                        },
                        {
                            "skill": "Visual design elements",
                            "learningpoints": [
                                {
                                    "lp": "Texture"
                                },
                                {
                                    "lp": "Shapes"
                                },
                                {
                                    "lp": "Lines"
                                },
                                {
                                    "lp": "Typography"
                                },
                                {
                                    "lp": "Colour",
                                    "subs": [
                                        {
                                            "sub": "RGB"
                                        },
                                        {
                                            "sub": "CMYK"
                                        },
                                        {
                                            "sub": "Colour theory"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "skill": "Coding and using design software",
                            "learningpoints": [
                                {
                                    "lp": "Adobe Photoshop"
                                },
                                {
                                    "lp": "Adobe Illustrator"
                                },
                                {
                                    "lp": "Adobe InDesign"
                                },
                                {
                                    "lp": "InVision"
                                },
                                {
                                    "lp": "HTML"
                                },
                                {
                                    "lp": "CSS"
                                },
                                {
                                    "lp": "JavaScript"
                                }
                            ]
                        },
                        {
                            "skill": "Gathering data"
                        },
                        {
                            "skill": "Scoping the project"
                        },
                        {
                            "skill": "Defining the message"
                        },
                        {
                            "skill": "Coming up with concepts and layout",
                            "learningpoints": [
                                {
                                    "lp": "Storyboarding"
                                },
                                {
                                    "lp": "Low-fidelity prototyping"
                                },
                                {
                                    "lp": "Sketching"
                                }
                            ]
                        },
                        {
                            "skill": "Getting feedback on concepts and layout",
                            "learningpoints": [
                                {
                                    "lp": "Presenting concepts"
                                },
                                {
                                    "lp": "Making changes based on feedback"
                                }
                            ]
                        },
                        {
                            "skill": "Designing final concept and layout"
                        },
                        {
                            "skill": "Applying organizational patterns and templates"
                        }
                    ]
                },
                {
                    "practice": "Interaction design",
                    "skills": [
                        {
                            "skill": "Using data and user research",
                            "learningpoints": [
                                {
                                    "lp": "Personas"
                                },
                                {
                                    "lp": "Jobs to be done (JTD)"
                                },
                                {
                                    "lp": "Task flow analysis"
                                },
                                {
                                    "lp": "User scenarios"
                                },
                                {
                                    "lp": "Mental modeling"
                                }
                            ]
                        },
                        {
                            "skill": "Identifying functional requirements",
                            "learningpoints": [
                                {
                                    "lp": "Creating requirements document"
                                }
                            ]
                        },
                        {
                            "skill": "Accessibility",
                            "learningpoints": [
                                {
                                    "lp": "Understanding accessibility",
                                    "subs": [
                                        {
                                            "sub": "Understanding web accesssibility"
                                        },
                                        {
                                            "sub": "What is disability?"
                                        },
                                        {
                                            "sub": "Types of states and disabilities that require accomodation"
                                        }
                                    ]
                                },
                                {
                                    "lp": "Implementing accessibility",
                                    "subs": [
                                        {
                                            "sub": "WCAG2"
                                        },
                                        {
                                            "sub": "Screen-reader accessible content"
                                        },
                                        {
                                            "sub": "High contrast"
                                        },
                                        {
                                            "sub": "Font size"
                                        },
                                        {
                                            "sub": "Size of clicking targets"
                                        },
                                        {
                                            "sub": "Amount of information per page"
                                        },
                                        {
                                            "sub": "Alt text and image file names"
                                        },
                                        {
                                            "sub": "Closed captions"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "skill": "Usability principles",
                            "learningpoints": [
                                {
                                    "lp": "Visibility of system status"
                                },
                                {
                                    "lp": "Match between system and the real world"
                                },
                                {
                                    "lp": "User control and freedom"
                                },
                                {
                                    "lp": "Consistency and standards"
                                },
                                {
                                    "lp": "Help users recognize, diagnose and recover from errors"
                                },
                                {
                                    "lp": "Recognition rather than recall"
                                },
                                {
                                    "lp": "Error prevention"
                                },
                                {
                                    "lp": "Flexibility and efficiency of use"
                                },
                                {
                                    "lp": "Aesthetic and minimalist design"
                                },
                                {
                                    "lp": "Help and documentation"
                                }
                            ]
                        },
                        {
                            "skill": "Developing alternative designs that meet requirements",
                            "learningpoints": [
                                {
                                    "lp": "Flow of information"
                                },
                                {
                                    "lp": "Presentation of information"
                                },
                                {
                                    "lp": "Format of information"
                                },
                                {
                                    "lp": "User feedback mechanisms"
                                }
                            ]
                        },
                        {
                            "skill": "Prototyping",
                            "learningpoints": [
                                {
                                    "lp": "Understanding prototyping",
                                    "subs": [
                                        {
                                            "sub": "Value of prototyping"
                                        }
                                    ]
                                },
                                {
                                    "lp": "Types of prototypes",
                                    "subs": [
                                        {
                                            "sub": "Low-fidelity prototyping"
                                        },
                                        {
                                            "sub": "High-fidelity prototyping"
                                        }
                                    ]
                                },
                                {
                                    "lp": "Prototyping elements",
                                    "subs": [
                                        {
                                            "sub": "Screen sketches"
                                        },
                                        {
                                            "sub": "Task sequences"
                                        }
                                    ]
                                },
                                {
                                    "lp": "Prototyping methods",
                                    "subs": [
                                        {
                                            "sub": "Vertical prototyping"
                                        },
                                        {
                                            "sub": "Horizontal prototyping"
                                        }
                                    ]
                                },
                                {
                                    "lp": "Using prototyping tools",
                                    "subs": [
                                        {
                                            "sub": "Axure"
                                        },
                                        {
                                            "sub": "Sketch"
                                        },
                                        {
                                            "sub": "Balsamiq"
                                        },
                                        {
                                            "sub": "InVision"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "skill": "Testing the interactions",
                            "learningpoints": [
                                {
                                    "lp": "Preference testing"
                                },
                                {
                                    "lp": "Task completion"
                                },
                                {
                                    "lp": "Wizard of Oz"
                                },
                                {
                                    "lp": "A/B testing"
                                }
                            ]
                        },
                        {
                            "skill": "Evaluating and tweaking the design"
                        }
                    ]
                },
                {
                    "practice": "Usability testing",
                    "skills": [
                        {
                            "skill": "Understanding usability testing",
                            "learningpoints": [
                                {
                                    "lp": "Value of usability testing"
                                },
                                {
                                    "lp": "Usability testing in different design phases"
                                },
                                {
                                    "lp": "Usability testing best practices"
                                }
                            ]
                        },
                        {
                            "skill": "Usability testing techniques",
                            "learningpoints": [
                                {
                                    "lp": "Moderated testing",
                                    "subs": [
                                        {
                                            "sub": "Concurent Probing"
                                        },
                                        {
                                            "sub": "Retrospective Probing"
                                        },
                                        {
                                            "sub": "Concurrent Think Aloud"
                                        },
                                        {
                                            "sub": "Retrospective Think Aloud"
                                        },
                                        {
                                            "lp": "Unmoderated testing"
                                        },
                                        {
                                            "lp": "Guerilla testing"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "skill": "Usability testing methods",
                            "learningpoints": [
                                {
                                    "lp": "Heuristic evaluation"
                                },
                                {
                                    "lp": "Preference testing"
                                },
                                {
                                    "lp": "Multivariate testing"
                                },
                                {
                                    "lp": "Rapid elicitation sessions"
                                },
                                {
                                    "lp": "A/B testing"
                                },
                                {
                                    "lp": "First-click testing"
                                },
                                {
                                    "lp": "Tree jack"
                                },
                                {
                                    "lp": "Card sorting",
                                    "subs": [
                                        {
                                            "sub": "Open card sort"
                                        },
                                        {
                                            "sub": "Closed card sort"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "skill": "Planning usability testing",
                            "learningpoints": [
                                {
                                    "lp": "Determining what to test"
                                },
                                {
                                    "lp": "Determining the best testing method"
                                },
                                {
                                    "lp": "Audience analysis and identification"
                                },
                                {
                                    "lp": "Participant agreement"
                                },
                                {
                                    "lp": "Participant incentives"
                                },
                                {
                                    "lp": "Recruiting participants"
                                },
                                {
                                    "lp": "Usability test scripts"
                                }
                            ]
                        },
                        {
                            "skill": "Designing the test",
                            "learningpoints": [
                                {
                                    "lp": "Identify objectives"
                                },
                                {
                                    "lp": "Do not lead with your questions"
                                },
                                {
                                    "lp": "Defining success"
                                }
                            ]
                        },
                        {
                            "skill": "Doing usability testing",
                            "learningpoints": [
                                {
                                    "lp": "Observing users"
                                },
                                {
                                    "lp": "Taking notes"
                                },
                                {
                                    "lp": "Facilitation techniques"
                                },
                                {
                                    "lp": "Do not lead with your questions"
                                }
                            ]
                        },
                        {
                            "skill": "Analysing and sharing usability testing results",
                            "learningpoints": [
                                {
                                    "lp": "Identiying  usability problem areas"
                                },
                                {
                                    "lp": "Issues log"
                                },
                                {
                                    "lp": "Creating a usability report"
                                },
                                {
                                    "lp": "Making recommendations"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
)

export default LearningArchitecture