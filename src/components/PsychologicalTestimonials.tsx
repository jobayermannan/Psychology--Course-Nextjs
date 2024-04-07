'use client'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const psychologicalCourses = [
	{
	  quote: "Understanding the brain is the key to understanding the mind.",
	  name: "Brain and Behavior",
	  title: "Discover the structure and function of the brain as it relates to specific psychological processes and behaviors. This course covers topics such as brain anatomy, neuroplasticity, and the neurological basis of memory, emotion, language, and mental disorders."
	},
	{
	  quote: "The intersection of psychology and law reveals the deep complexities of the human mind.",
	  name: "Forensic Psychology",
	  title: "Learn about the application of psychological knowledge to legal issues and court cases. This course covers topics such as criminal profiling, eyewitness testimony, jury decision-making, and the assessment and treatment of offenders."
	},
	{
	  quote: "Exploring the mind from infancy to adulthood.",
	  name: "Developmental Psychology",
	  title: "Examine the psychological changes that occur throughout a person's life span, from infancy through adulthood. Topics include cognitive and emotional development, language acquisition, and social identity formation."
	},
	{
	  quote: "Unlocking the secrets of effective human interaction.",
	  name: "Social Psychology",
	  title: "Study how individuals influence and are influenced by other people and by their social and physical environments. This course covers topics such as attitudes, group behavior, prejudice, interpersonal attraction, and conflict resolution."
	},
	{
	  quote: "The science of behavior and mind, embracing all aspects of conscious and unconscious experience.",
	  name: "General Psychology",
	  title: "An introduction to the science of psychology, exploring the breadth of psychological research and practice. This course covers fundamental concepts in perception, motivation, learning, and personality."
	},
	{
	  quote: "Navigating the complexities of mental health and therapy.",
	  name: "Clinical Psychology",
	  title: "Focus on diagnosing and treating mental illness, emotional disturbance, and dysfunctional behavior. This course provides an overview of therapeutic techniques, assessment methods, and the theoretical foundations of psychological treatment."
	}
 ];
 
 console.log(psychologicalCourses);

const PsychologicalTestimonials = () => {
  return (
	 <div className=" h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
		<h2 className="text-3xl text-center font-bold z-100 mb-10"> Hear Our  Harmony: Voices of Success</h2>
	           <div className="w-full  flex justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
					<div className="w-full max-w-6xl">
					<InfiniteMovingCards
        items={psychologicalCourses}
        direction="right"
        speed="normal"
      />
					</div>
				  </div>
	 </div>
  )
}

export default PsychologicalTestimonials
