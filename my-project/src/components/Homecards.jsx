import React from 'react'
import Card from './Card'

const Homecards = () => {
  return (
    <div className="p-8 flex flex-wrap gap-4  justify-center">
    <div className="flex space-x-4"> {/* Flex container for horizontal layout */}
      <Card 
        headerText="To do" 
        sections={[
            { header: 'DESIGN SYSTEM', subtitle: 'Hero section', text: 'Create a design system for a hero section in 2 different variants. Create a simple presentation with these components' },
            { header: 'TYPOGRAPHY', subtitle: 'Typography  change', text: 'Modify typography and styling of text placed on 6 screens of the website design. Prepare a documentation' },
            
          ]}
        
      />

      <Card 
        headerText="In progress" 
        sections={[
            { header: 'DEVELOPMENT', subtitle: 'Implement design screens', text: 'Our designers created 6 screens for a website that needs to be implemented by our dev team' },
            
          ]}
      />

      <Card 
        headerText="Done" 
        sections={[
            { header: 'DEVELOPMENT', subtitle: 'Fix bugs in the CSS code', text: 'Fix small bugs that are essential to prepare for the next release that will happen this quarter.' },
            { header: 'TYPOGRAPHY', subtitle: 'Proofread final text', text: 'The text provided by marketing department needs to be proofread so that we make sure that it fits into our design' },
            { header: 'DESIGN SYSTEM', subtitle: 'Responsive design', text: 'All designs need to be responsive. The requirement is that it fits all web and mobile screens' }
          ]}
      />
    </div>
  </div>
  )
}

export default Homecards