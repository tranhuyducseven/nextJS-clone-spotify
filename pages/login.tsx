import React from 'react'
import { getProviders } from 'next-auth/react'
import Layout from '../layouts/Layout'
export default function Login({ providers }) {
  return (
    <Layout login>
      <img
        src="https://i.pinimg.com/originals/49/15/74/4915744c8fc9efc1313d2ac2815ecef5.png"
        alt=""
        className="mb-5 w-64"
      />
      {/* {Object.values(providers).map((provider) => (
        <div>
          <button>test</button>
        </div>
      ))} */}
      {providers ? <div>true</div> : <div>false</div>}
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}
