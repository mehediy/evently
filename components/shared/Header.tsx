import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link className="w-36" href={"/"}><Image src={"/assets/images/logo.svg"} width={128} height={38} alt="Logo"/></Link>
        <div className="w-32 flex gap-3 justify-end">
          <SignedIn>
            <UserButton afterSignOutUrl="/"/>
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size={'lg'} >
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header