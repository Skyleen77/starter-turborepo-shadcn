import { Button } from "@ui/components/button";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Web</h1>
      <Link href="/builder">
        <Button>Click me</Button>
      </Link>
    </>
  );
}
