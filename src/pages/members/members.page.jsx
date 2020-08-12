import React from "react"

import ContentWrapper from "../../components/content-wrapper"
import SmallHeading from "../../components/small-heading"

const MembersPage = () => {
  return (
    <ContentWrapper>
      <SmallHeading>Members</SmallHeading>
      <div className="mt-4">
        <div className="bg-white flex items-center rounded-lg border-2 p-3">
          <div className="rounded-full flex justify-around items-center bg-indigo-200 text-indigo-900 w-10 h-10">
            U
          </div>
          <div className="ml-3">
            <div>Muhammad Umair</div>
            <div>
              <span>BOR</span>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  )
}

export default MembersPage
