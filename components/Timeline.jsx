import LeftTimeline from './LeftTimeline';
import RightTimeline from './RigthTimeline';
import MobileRigthTimeline from './MobileRigthTimeline';

const Timeline = () => {
  return (
    <div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li className='hidden lg:grid lg:grid-cols-1'>
          <MobileRigthTimeline
            date="July 2025 - Currently"
            jobTitle="Frontend Developer"
            company="Mocion Experience Tech"
            description="- I develop a new software to create events and receive the data from users about the event. And that data could be selled to other companies to make new events and improve the user experience."
            secondDescription=""
          />
          <hr />
        </li>
        <li className='lg:hidden'>
          <RightTimeline
            date="July 2025 - Currently"
            jobTitle="Frontend Developer"
            company="Mocion Experience Tech"
            description="- I develop a new software to create events and receive the data from users about the event. And that data could be selled to other companies to make new events and improve the user experience."
            secondDescription=""
          />
          <hr />
        </li>
        <li className='lg:grid-cols-1'>
          <hr />
          <LeftTimeline
            date="January 2023 - Currently"
            jobTitle="Frontend Developer"
            company="Freelance"
            description="- I have developed websites and landing pages for several US-based companies using different technologies, enhancing their online presence
            and showcasing expertise in web technologies and design trends"
            secondDescription="- I work closely with a senior frontend developer at a major US company, playing a key role in identifying and resolving bugs in web projects and contributing to the creation of new interfaces, expanding frontend development experience."
          />
          <hr />
        </li>
        <li className='hidden lg:grid lg:grid-cols-1'>
          <MobileRigthTimeline
            date="July 2022 - December 2022"
            jobTitle="Frontend Developer"
            company="Genco"
            description="- I developed responsive and user-friendly interfaces using HTML, CSS, JavaScript and React to improve website functionality and enhance the user experience. In addition, created landing pages for marketing campaigns."
            secondDescription="- I collaborated with the design and product team to implement new features and optimise existing code to improve site performance."
          />
          <hr />
        </li>
        <li className='lg:hidden'>
          <hr />
          <RightTimeline
            date="July 2022 - December 2022"
            jobTitle="Frontend Developer"
            company="Genco"
            description="- I developed responsive and user-friendly interfaces using HTML, CSS, JavaScript and React to improve website functionality and enhance the user experience. In addition, created landing pages for marketing campaigns."
            secondDescription="- I collaborated with the design and product team to implement new features and optimise existing code to improve site performance."
          />
        </li>
      </ul>
    </div>
  )
}

export default Timeline;

// For evius project
// const TemporaryCard = ({ title }: { title: string }) => (
// 	<Paper p='md' radius='lg' h={200} style={{ backgroundColor: 'white' }}>
// 		<Center h='100%'>
// 			<Text c='gray.5' size='sm' ta='center'>
// 				{title}
// 			</Text>
// 		</Center>
// 	</Paper>
// );