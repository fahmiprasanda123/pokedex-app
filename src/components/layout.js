import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { NavBar, Icon, WingBlank, WhiteSpace } from 'antd-mobile'

import Popovers from './popover'

function Layout({ children, title, description }) {
  const router = useRouter()

  return (
    <div>
      <NextSeo 
        title={title}
        description={description}
      />
      <NavBar
        mode="light"
        icon={(router.pathname == "/")? null:<Icon type="left" />}
        onLeftClick={(router.pathname == "/")? null:() => router.back()}
        rightContent={[
          (router.pathname == "/")? <Link key="0" href="/search"><Icon key="0" type="search" style={{ marginRight: "16px" }} /></Link>:null,
          (router.pathname == "/")? <Popovers key="1" />:null
        ]}
      >
        {title}
      </NavBar>
      <WhiteSpace size="lg" />
      <WingBlank>{children}</WingBlank>
    </div>
  )
}

export default Layout
