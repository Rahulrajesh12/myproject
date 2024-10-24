import React from 'react'
import ExploreCars from '../components/ExploreCars/ExploreCars'
import BangaloreLayout from '../components/Layout/BangaloreLayout'
function exploreselfdrivecars() {
  return (
    <BangaloreLayout locname={'bangalore'} phoneno={"988-6666-883"}>
      <div>
        <ExploreCars loc={'bangalore'} />
      </div>
    </BangaloreLayout>

  )
}

export default exploreselfdrivecars