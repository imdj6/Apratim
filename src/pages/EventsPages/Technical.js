import React from 'react'
import Card from '../../UIComponents/Card'

// Importing the banners of cards
import banner1 from '../../assests/coding conpetition banner.png'

export default function Technical() {
  return (
    <section className="flex flex-col">
      {/* row starts here */}
        <div>
          {/* card starts here */}
            <Card title="Revelation 8.0" banner={banner1} para="Lorem ipsum dolor sit amet some consectetur. Molestie eget value accumsan..." time="2:30pm - 5:30pm" venue="CCET MPH" type="Technical" />
          {/* card ends here */}
        </div>
      {/* row ends here */}
    </section>
  )
}