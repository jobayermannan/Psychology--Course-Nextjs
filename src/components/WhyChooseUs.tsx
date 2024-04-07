'use client'
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const psychologyContent =[
  {
    title: "Developmental Psychology",
    description: "This course offers an in-depth exploration into the physical, cognitive, and social development of individuals from infancy through adulthood. It covers various theories and approaches to understanding human growth and developmental milestones, as well as the factors that influence them."
  },
  {
    title: "Social Psychology",
    description: "Learn about the complex dynamics of how individuals influence and are influenced by other people around them. This course delves into topics such as social cognition, attitude formation and change, conformity, group behavior, and interpersonal relationships."
  },
  {
    title: "Abnormal Psychology",
    description: "Study the nature of psychological disorders, their causes, and their treatments. This comprehensive course covers a wide range of disorders, including anxiety, mood, eating, and personality disorders, providing insights into diagnosis, treatment approaches, and the impact of these disorders on individuals and society."
  },
  {
    title: "Psychology of Learning",
    description: "Examine the theories and processes underlying learning behaviors in humans and animals. This course covers classical and operant conditioning, cognitive learning theories, and the application of these theories in real-world settings, such as education and behavior modification."
  },
  {
    title: "Personality Psychology",
    description: "Explore the fascinating patterns of thoughts, feelings, and behavior that make a person unique. This course covers major theories of personality development, assessment techniques, and the influence of personality on life outcomes."
  },
  {
    title: "Clinical Psychology",
    description: "Gain an understanding of the assessment and treatment of mental illness and psychological problems. This course covers various therapeutic approaches, ethical issues in clinical psychology, and the latest research in the field."
  },
  {
    title: "Neuropsychology",
    description: "Discover the structure and function of the brain as it relates to specific psychological processes and behaviors. This course covers topics such as brain anatomy, neuroplasticity, and the neurological basis of memory, emotion, language, and mental disorders."
  },
  {
    title: "Forensic Psychology",
    description: "Learn about the application of psychological knowledge to legal issues and court cases. This course covers topics such as criminal profiling, eyewitness testimony, jury decision-making, and the assessment and treatment of offenders."
  }
]


const WhyChooseUs = () => {
  return (
	 <div className="p-10">
		<StickyScroll content={psychologyContent}/>
	 </div>
  )
}

export default WhyChooseUs