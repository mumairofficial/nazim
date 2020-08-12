import React from "react"

import { faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { faList } from "@fortawesome/free-solid-svg-icons"

import ContentWrapper from "../../components/content-wrapper"
import StackedButton from "../../components/stacked-button"
import SmallHeading from "../../components/small-heading"

const HomePage = () => {
  return (
    <ContentWrapper>
      <SmallHeading>Welcome to dashboard</SmallHeading>
      <div className="mt-4 flex">
        <StackedButton label="Members" faIcon={faUserPlus} href="/members" />
        <StackedButton label="Attandance" faIcon={faList} />
      </div>
    </ContentWrapper>
  )
}

export default HomePage
