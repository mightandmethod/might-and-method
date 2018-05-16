import React from 'react'
import Link from 'gatsby-link'

import ButtonLink from '../components/ButtonLink'

const IndexPage = () => (
  <div className="content">
    <h1>We can help your organization <span>do more</span></h1>
    <div style={{
      display: 'flex'  
    }}>
      <ButtonLink
        href="/contact"
        size="large"
        text="Let's get started"
      />
      <a href="#work">See some of our work <i className="fa fa-caret-down"></i></a>
    </div>
    <p>Now go build something great.</p>
    <p>lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, leo in rutrum iaculis, justo magna luctus nibh, et dignissim tellus velit vitae ligula. Curabitur mollis enim ut sapien vehicula, at lobortis ligula venenatis. Nunc magna dolor, malesuada id metus hendrerit, aliquam egestas metus. In euismod, risus vel molestie sollicitudin, lacus urna varius tellus, nec mollis mauris elit ut nunc. Etiam cursus lectus dolor, et convallis purus condimentum sit amet. Fusce diam augue, bibendum in nisl id, porttitor volutpat sapien. In feugiat dui vitae diam consequat vulputate. Aliquam justo urna, egestas et hendrerit eu, volutpat nec lacus. Vestibulum et nibh sed justo ultricies maximus. Donec in aliquet nulla.</p>

<p>Aenean ac augue non sapien vehicula tincidunt nec quis ex. Phasellus sed tortor vitae enim elementum luctus convallis at nisi. Maecenas sed vulputate risus. Maecenas vestibulum, ipsum quis elementum ullamcorper, nisl risus condimentum risus, et pretium felis dolor nec lorem. Pellentesque id ex semper ligula sodales gravida. Ut tempor elementum dui, sit amet bibendum risus bibendum non. Sed lacinia tempor libero, sed consequat dui viverra nec. Vivamus feugiat mauris vel tellus condimentum cursus. Curabitur nec aliquet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<p>Aenean nec justo eget nulla ultricies feugiat sit amet et nulla. Vestibulum ut ex a ipsum efficitur tristique. Vivamus at massa dictum, pharetra neque in, condimentum diam. Maecenas cursus ex vel risus faucibus, ac luctus nulla rutrum. Cras sem ex, venenatis a magna eu, porttitor sagittis justo. Cras vel lacinia massa. Morbi venenatis ipsum non accumsan pretium. Donec ut erat lacinia, lacinia lacus in, sodales magna. Nunc sit amet fringilla neque, gravida venenatis est. Praesent vel urna tincidunt, rhoncus quam nec, mollis dolor. Integer condimentum lorem nec orci imperdiet malesuada. Pellentesque a orci sit amet neque fermentum tempor. Nullam consectetur semper enim nec vestibulum.</p>

<p>In hac habitasse platea dictumst. Vivamus dui sapien, malesuada vel venenatis et, ultrices nec diam. Sed dapibus odio vitae velit elementum volutpat. Maecenas sed iaculis mi. Phasellus consequat laoreet tincidunt. Cras tincidunt augue vitae dignissim ultrices. Nulla gravida varius tempus. Sed sollicitudin tellus metus. Praesent elementum arcu quis mauris tempus sagittis. Etiam orci ligula, vestibulum nec sagittis sit amet, tempor quis odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<p>Duis eu tristique massa, quis efficitur ligula. Nulla lacinia faucibus sapien, ut convallis ligula. Curabitur libero odio, placerat placerat ipsum id, varius mattis arcu. Pellentesque at placerat eros. Praesent non orci quis mauris sollicitudin accumsan. Maecenas auctor ligula id euismod ultricies. Etiam at ligula ut orci pretium laoreet. Sed volutpat eu augue ac pulvinar. Etiam congue faucibus ante sed laoreet. Donec purus eros, imperdiet id quam sed, fermentum ultricies nulla. Praesent aliquet magna quis ipsum varius placerat non eu nisl. Vestibulum leo libero, lacinia in euismod et, hendrerit sed lectus.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
