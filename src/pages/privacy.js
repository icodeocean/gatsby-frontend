import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Markdown from "../components/markdown"

function PrivacyPage({location}) {

    const fileData = require('!!raw-loader!../../data/privacy-policy.txt')

  return (
    <Layout location={location} crumbLabel="Privacy">
        <section>
            <div
            class="mx-auto max-w-screen-xl px-4 py-48 lg:flex lg:items-center"
            >
                <div class="mx-auto max-w-4xl text-center">
                    <h1 class="text-3xl font-extrabold sm:text-5xl">
                        Privacy Policy
                    </h1>

                </div>
            </div>
        </section>
        <section>
            <div className="max-w-6xl mx-auto pb-16 px-4 flex flex-col">
                <Markdown data={fileData.default.toString()} />
            </div>
        </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Privacy Policy" breadcrumbs={{ "Home": "https://about.fairfieldprogramming.org/", "Privacy Policy": "https://about.fairfieldprogramming.org/privacy" }}  />

export default PrivacyPage
